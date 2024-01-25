from aws_cdk import Stack , RemovalPolicy
from constructs import Construct
import aws_cdk.aws_s3 as s3
import aws_cdk.aws_codepipeline as codepipeline
import aws_cdk.aws_codepipeline_actions as cpactions
import aws_cdk.aws_codebuild as codebuild
import aws_cdk.aws_iam as iam
import yaml

class FrontendDeploymentStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # Read configuration from config.yml
        with open('config.yml', 'r') as file:
            config = yaml.safe_load(file)
            bucket_name = config['deploymentBucketName']
            connection_arn = config['connectionArn']
            code_source = config['codeSource']
            owner = code_source['owner']
            repo = code_source['repo']
            branch = code_source['branch']


        # Create S3 Bucket for deployment
        deployment_bucket = s3.Bucket(self, bucket_name,
        website_index_document="index.html",
        public_read_access= True,
        removal_policy=RemovalPolicy.DESTROY,
        block_public_access=s3.BlockPublicAccess.BLOCK_ACLS,
        bucket_name= bucket_name,
        access_control= s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL,
        auto_delete_objects=True,
        )


        # Create CodeBuild project
        build_project = codebuild.PipelineProject(self, "BuildProject",
            build_spec=codebuild.BuildSpec.from_object(dict(
                version="0.2",
                phases=dict(
                    install=dict(
                        commands=[
                            "cd frontend",
                            "npm ci"
                        ]
                    ),
                    build=dict(
                        commands=[
                            "npm run build",
                        ]
                    )
                ),
                artifacts={
                    "base-directory": "frontend/build*","files": ["**/*"],
                },
            )),
            environment=dict(build_image=codebuild.LinuxBuildImage.STANDARD_7_0),
        )

        # Create IAM Role for CodeBuild to access S3
        build_project_role = iam.Role(self, "BuildProjectRole",
            assumed_by=iam.ServicePrincipal('codebuild.amazonaws.com'),
        )
        deployment_bucket.grant_read_write(build_project_role)

        # Create CodePipeline
        pipeline = codepipeline.Pipeline(self, "DeploymentPipeline")

        # Add Source Stage from Bitbucket
        source_output = codepipeline.Artifact()
        source_action = cpactions.CodeStarConnectionsSourceAction(
            action_name="Bitbucket_Source",
            connection_arn=connection_arn,
            output=source_output,
            owner=owner,
            repo=repo,
            branch=branch,
        )
        pipeline.add_stage(
            stage_name="Source",
            actions=[source_action]
        )

        # Add Build Stage
        build_output = codepipeline.Artifact()
        build_action = cpactions.CodeBuildAction(
            action_name="Build",
            project=build_project,
            input=source_output,
            outputs=[build_output],
        )
        pipeline.add_stage(
            stage_name="Build",
            actions=[build_action]
        )

        # Add Deploy Stage to S3
        deploy_action = cpactions.S3DeployAction(
            action_name="DeployToS3",
            input=build_output,
            bucket=deployment_bucket,
        )
        pipeline.add_stage(
            stage_name="Deploy",
            actions=[deploy_action]
        )

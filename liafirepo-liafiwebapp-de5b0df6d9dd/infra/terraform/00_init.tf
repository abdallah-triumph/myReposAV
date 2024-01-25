//////////////
// Provider //
//////////////

provider "aws" {
  region = "us-west-2"
  default_tags {
    tags = merge(local.operations_tags, local.application_tags)
  }
}

/////////////
// Backend //
/////////////

terraform {
  required_version = ">= 1.3.9"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }

  backend "s3" {
    region = "us-west-2"
    bucket = "liafi-${local.env}-tfstatefiles-bucket"
    key    = "liafi-web-app-infra.tfstate"
  }
}

///////////////////
// Remote States //
///////////////////





/////////////////
// Global Data //
/////////////////

data "aws_region" "current" {}
data "aws_caller_identity" "current" {}

locals {
  env = var.environment

  application_tags = {
    app = "LiaFi-Web-App-infra"
  }
  operations_tags = {
    owner               = "cdkadmin"
    team                = "Appevolve"
    created-through     = "Terraform IaC"
    bitbucket-repo-name = "liafiwebapp"
  }
}
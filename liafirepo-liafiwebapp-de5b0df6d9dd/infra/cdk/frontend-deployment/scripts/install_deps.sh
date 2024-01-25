#!/bin/bash

# Install AWS CDK Toolkit locally
npm install

# Install yaml
pip install pyyaml

# Install project dependencies
pip install -r requirements.txt

#install aws cdk
npm install -g aws-cdk   
cdk --version
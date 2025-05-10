# Welcome to your Todo CRUD API project written in CDK Java

This is a Todo CRUD API project written with CDK with Java.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Prerequisite

1. Install tools:
  1. Maven with [official doc](https://maven.apache.org/install.html)
  1. AWS CDK with `npm install -g aws-cdk`
  1. Docker with [official doc](https://docs.docker.com/engine/install/)

1. Install dependencies
```
mvn install
```

1. Bootstrap AWS account
```
cdk bootstrap
```

## Develop locally

1. Run unit test (optional)
```
mvn test
```

## Deploy to the cloud

1. Deploy
```
cdk deploy
```

1. Run e2e tests
```
mvn test -Pinteg
```


import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
//const aws = require("@pulumi/aws");
console.log("Hello world from pulumi!!!");
const policy = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": "sts:AssumeRole",
            "Principal": {
                "Service": "lambda.amazonaws.com",
            },
            "Effect": "Allow",
            "Sid": "",
        },
    ],
};

const role = new aws.iam.Role("precompiled-lambda-role",{
    assumeRolePolicy: JSON.stringify(policy),
});

let a = 10;
let b = 20;
let str = "Hello world string";
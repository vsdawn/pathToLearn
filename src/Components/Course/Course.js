import React from 'react';
import getlearn from '../Image/getlearn.svg';
import './Course.css';
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

class Course extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={getlearn} className="App-logo" alt="logo" />
          <p>
            AWS Course Content
          </p>
        </header>
        <div className="container-fluid">
          <div className="row courseRow">
            <h1 className="awsCourse">AWS Course Content: </h1>
            <div className="col-12 courseColom">
              {/* <div className="card cardStyle"> */}
              <h3 className="courseHeader">
                Introduction to Cloud Computing & AWS
              </h3>
              <p className="courseParagraph">
                What is Cloud Computing, how AWS is the leader
                in the cloud domain, various cloud computing products offered by AWS,
                introduction to AWS S3, EC2, VPC, EBS, ELB, AMI, getting a detailed
                understanding of the AWS architecture and the AWS Management
                Console, introduction to AWS EC2, comparing Public IP and
                Elastic IP, demonstrating how to launch an AWS EC2 instance,
                what is auto-scaling, AWS EC2 best practices and cost
                involved, understanding various concepts of backup
                services in AWS.
              </p>
              {/* </div> */}
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                Hands-on Exercise
              </h3>
              <p className="courseParagraph">
                Setting up of AWS account, how to launch an EC2 instance,
                the process of hosting a website and launching a Linux Virtual
                Machine using an AWS EC2 instance.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                Database services
              </h3>
              <p className="courseParagraph">
                Elastic Block Storage (EBS) for block-level persistent storage
                volumes with S3 buckets, understanding Amazon RDS and Amazon
                Aurora which are relational databases, Amazon DynamoDB which
                is a NoSQL database, understanding Amazon Redshift which is a
                data warehousing product, Amazon ElasticCache which is an
                in-memory data store, deploying AWS database migration service.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                Hands-on Exercise
              </h3>
              <p className="courseParagraph">
                How to create an Amazon RDS instance, creating a Read Replica
                instance of RDS, creating Table in master RDS, how to add data
                to master RDS, adding data to replica RDS, using Aurora to
                create a PostgreSQL and MySQL instance, within DynamoDB
                creating a NoSQL table and running queries.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                Object Storage
              </h3>
              <p className="courseParagraph">
                Introduction to AWS storage, AWS S3 (Simple Storage Service),
                creating an AWS S3 bucket, AWS Storage Gateway, understanding
                the Command Line Interface (CLI), hosting a static website
                using Amazon S3, Amazon Glacier storage for long-term data
                backup and archiving and Amazon Snowball for data
                import/export.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                Hands-on Exercise
              </h3>
              <p className="courseParagraph">
                How to run an AWS CLI command, deploying the AWS Storage
                Gateway for connecting cloud-based storage with the
                on-premise software.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                Autoscaling and load balancing
              </h3>
              <p className="courseParagraph">
                Understanding Fault Tolerance in AWS, in-depth study of
                Elastic Load Balancing, the types of Load Balancers viz.
                Classic and Application, AWS Auto Scaling mechanism,
                understanding AWS Management Console, how to access the
                Elastic Load Balancing, studying AWS SDK, AWS CLI,
                and Https Query API.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                Hands-on Exercise
              </h3>
              <p className="courseParagraph">
                How to create an Elastic Load Balancer (ELB), the
                configuration of the auto-scaling group and familiarizing
                with the Management Console.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                Virtual Private Cloud
              </h3>
              <p className="courseParagraph">
                What is Amazon VPC, VPC as a networking layer for EC2,
                getting started with VPC, examples, VPC and Subnets,
                default and non-default VPCs, components of VPC networking,
                IP addressing, security, VPN connections, accessing the
                internet, using AWS PrivateLink to access the services and
                VPC supported platforms.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                Hands-on Exercise
              </h3>
              <p className="courseParagraph">
                Create a Virtual Private Network for an AWS EC2 instance
                and access it over the internet and via a private network
                using AWS PrivateLink.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                Application services, AWS Lambda, and CLI
              </h3>
              <p className="courseParagraph">
                Introduction to various AWS application services, Elastic
                Beanstalk, Simple Email Services (SES), Simple Notification
                Service (SNS), AWS Lambda, Elastic OpsWorks, and CLI.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                Hands-on Exercise
              </h3>
              <p className="courseParagraph">
                How to run an app using AWS Elastics Beanstalk, deploying SES
                to send an email, enabling and generating notification
                service, using AWS Lambda to copy object, modeling and
                provisioning your app with AWS OpsWorks.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                IAM and monitoring
              </h3>
              <p className="courseParagraph">
                Authentication (who can use) and Authorization
                (level of access), IAM Policies – JSON structure, users,
                groups and their Roles, IAM HTTPS API, logging IAM events
                with AWS CloudTrail, monitoring and managing AWS resources
                using CloudWatch, deploying configuration alerts and
                notifications with CloudWatch, billing for CloudWatch.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                Hands-on Exercise
              </h3>
              <p className="courseParagraph">
                How to create a JSON document using which the access
                policy for groups and users in defined, logging IAM
                events using AWS CloudTrail.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                Configuration management and automation
              </h3>
              <p className="courseParagraph">
                Configuration management and automation of server
                configuration using OpsWorks, determining how servers are
                configured, managed and deployed across EC2 instances,
                creating a virtual machine using Amazon Machine Image (AMI),
                introduction to the Domain Name Registration service
                AWS Route 53, how to route internet traffic to resources,
                checking health of resources automatically, provisioning of
                infrastructure resources using AWS CloudFormation.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                Hands-on Exercise
              </h3>
              <p className="courseParagraph">
                How to register a domain using Route 53, routing internet
                traffic to the resources and automatically checking the
                health of resources.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                Self-paced
              </h3>
              <h3 className="courseHeader">
                Architecting AWS – whitepaper
              </h3>
              <p className="courseParagraph">
                Important guidelines for creating a well-architected AWS
                framework that is resilient and performant, designing of
                fault-tolerant and high-availability architecture, resilient
                storage, decoupling mechanism, multi-tier architecture
                solution, disaster recovery solution, scalable and elastic
                solutions.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                AWS Architech Questions
              </h3>
              <p className="courseParagraph">
                guidance for clearing the exam, most probable interview
                questions and other helpful tips for clearing the exam and
                interview.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                DevOps on AWS
              </h3>
              <p className="courseParagraph">
                How to deploy DevOps principles and methodology on the
                AWS platform, DevOps lifecycle and the important stages in
                the DevOps methodology, what is AWS CodeBuild, AWS CodeCommit,
                AWS CodePipeline, and AWS CodeDeploy.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                AWS Migration
              </h3>
              <p className="courseParagraph">
                Migrating to the AWS cloud, business drivers for migration,
                various stages of cloud adoption, the actual migration
                process, migration tools, and services in AWS, migrating
                customers to AWS cloud, track the progress of application
                migration, types of migration including data migration,
                application migration, and databases migration.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                AWS Security
              </h3>
              <p className="courseParagraph">
                AWS cloud security essentials, penetration testing, security
                compliance, infrastructure security, mitigating DDOS,
                Identity and Access Control (IAM), logging and monitoring,
                automatic audits and compliance, limitations and challenges
                of native AWS security.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                AWS Project
              </h3>
              <p className="courseParagraph">
                Project 1: Deploying a Multi-tier website using AWS EC2
              </p>
              <p className="courseParagraph">
                Industry: Internet-related
              </p>
            </div>
            <div className="col-12 courseColom">
              <h5 className="courseParagraph">
                Problem Statement: How to scale a website fast using AWS
                without the upfront cost
              </h5>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                Topics:
              </h3>
              <p className="courseParagraph">
                In this AWS project you will launch an EC2 instance without
                the need to invest in hardware upfront, so you can develop
                and deploy applications faster. You can use Amazon EC2 to
                launch as many or as few virtual servers as you need,
                configure security and networking, and manage storage.
                Amazon EC2 enables you to scale up or down to handle changes
                in requirements or spikes in popularity, reducing your need
                to forecast traffic.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                Highlight:
              </h3>
              <p className="courseParagraph">
                Launch an EC2 Instance<br />
                Enable Auto Scaling of EC2<br />
                Create an RDS Instance<br />
                Allow traffic from EC2 to RDS Instance<br />
                Project 2: Website Orchestration<br />
              </p>
              <p className="courseParagraph">
                Industry: Internet-related
              </p>
            </div>
            <div className="col-12 courseColom">
              <h5 className="courseHeader">
                Problem Statement: How to orchestrate a website with lesser
                time and higher availability along with autoscaling.
              </h5>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                Topics:
              </h3>
              <p className="courseParagraph">
                In this AWS project you will deploy a high-availability
                PHP application with an external Amazon RDS database to
                Elastic Beanstalk. Running a DB instance external to
                Elastic Beanstalk decouples the database from the
                lifecycle of your environment. This lets you connect to
                the same database from multiple environments, swap one
                database for another, or perform a blue/green deployment
                without affecting your database.
              </p>
            </div>
            <div className="col-12 courseColom">
              <h3 className="courseHeader">
                Highlight:
              </h3>
              <p className="courseParagraph">
                Launch a DB instance in Amazon RDS<br />
                Create an Elastic Beanstalk Environment<br />
                Configure Security Groups and Scaling<br />
                Project 3: Publishing Amazon SNS messages privately<br />
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Course;

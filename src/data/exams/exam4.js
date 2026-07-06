export const EXAM_DATA = {
  examNumber: 4,
  title: "Practice Test #4 - AWS Certified Cloud Practitioner",
  description: "Full practice exam with 65 questions covering AWS Cloud Concepts, Technology, Security, and Billing & Pricing.",
  questions : [
  {
    "questionNumber": 1,
    "questionText": "Which Amazon Route 53 routing policy would you use to route traffic to a single resource such as a web server for your website?",
    "options": [
      { "text": "Failover routing", "correct": false },
      { "text": "Latency-based routing", "correct": false },
      { "text": "Simple routing", "correct": true },
      { "text": "Weighted routing", "correct": false }
    ],
    "explanation": "Correct option: Simple routing. Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service. Simple routing lets you configure standard DNS records, with no special routing such as weighted or latency. With simple routing, you typically route traffic to a single resource, for example, to a web server for your website. Failover routing is used for active-passive failover. Weighted routing routes traffic to multiple resources in proportions you specify. Latency-based routing routes traffic to the region that provides the best latency.",
    "domain": "Technology"
  },
  {
    "questionNumber": 2,
    "questionText": "A social media analytics company wants to migrate to a serverless stack on AWS. Which of the following scenarios can be handled by AWS Lambda? (Select two)",
    "options": [
      { "text": "AWS Lambda can be used to execute code in response to events such as updates to DynamoDB tables", "correct": true },
      { "text": "You can install low latency databases on AWS Lambda", "correct": false },
      { "text": "You can install Container Services on AWS Lambda", "correct": false },
      { "text": "AWS Lambda can be used to store sensitive environment variables", "correct": false },
      { "text": "AWS Lambda can be used for preprocessing of data before it is stored in Amazon S3 buckets", "correct": true }
    ],
    "explanation": "Correct options: AWS Lambda can be used to execute code in response to events such as updates to DynamoDB tables, and for preprocessing of data before it is stored in Amazon S3 buckets. Lambda is serverless, so you cannot install databases or container services, nor store sensitive environment variables (though you can read/decrypt data).",
    "domain": "Technology"
  },
  {
    "questionNumber": 3,
    "questionText": "A multi-national organization has a separate virtual private cloud (VPC) for each of its business units on the AWS Cloud. The organization also wants to connect its on-premises data center with the different virtual private clouds (VPC) for better organization-wide collaboration. Which AWS services can be combined to build the MOST efficient solution for this use-case? (Select two)",
    "options": [
      { "text": "Internet Gateway", "correct": false },
      { "text": "VPC peering connection", "correct": false },
      { "text": "AWS Transit Gateway", "correct": true },
      { "text": "AWS Storage Gateway", "correct": false },
      { "text": "AWS Direct Connect", "correct": true }
    ],
    "explanation": "Correct options: AWS Transit Gateway and AWS Direct Connect. Transit Gateway connects VPCs and on-premises networks through a central hub, simplifying network. Direct Connect establishes a dedicated private connection from on-premises to AWS. VPC peering is non-transitive and complex to manage. Internet Gateway connects to internet, not on-premises. Storage Gateway is for hybrid cloud storage, not for networking.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 4,
    "questionText": "Which of the following statements are true regarding Amazon Simple Storage Service (Amazon S3) (Select two)?",
    "options": [
      { "text": "Amazon Simple Storage Service (Amazon S3) is a key value based object storage service", "correct": true },
      { "text": "You can install databases on Amazon Simple Storage Service (Amazon S3)", "correct": false },
      { "text": "Amazon Simple Storage Service (Amazon S3) stores data in a flat non-hierarchical structure", "correct": true },
      { "text": "Amazon Simple Storage Service (Amazon S3) is a fully managed, elastic file system storage service used as database backup", "correct": false },
      { "text": "Amazon Simple Storage Service (Amazon S3) is a block storage service designed for a broad range of workloads", "correct": false }
    ],
    "explanation": "Correct options: S3 is a key-value based object storage service and stores data in a flat non-hierarchical structure. S3 is not block storage (that's EBS) nor file system storage (that's EFS). You cannot install databases on S3.",
    "domain": "Technology"
  },
  {
    "questionNumber": 5,
    "questionText": "Which entity ensures that your application on Amazon Elastic Compute Cloud (Amazon EC2) always has the right amount of capacity to handle the current traffic demand?",
    "options": [
      { "text": "Amazon EC2 Auto Scaling", "correct": true },
      { "text": "Multi-AZ deployment", "correct": false },
      { "text": "Network Load Balancer", "correct": false },
      { "text": "Application Load Balancer", "correct": false }
    ],
    "explanation": "Correct option: Amazon EC2 Auto Scaling. It ensures you have the correct number of EC2 instances to handle load. Multi-AZ provides high availability, not scaling. Load balancers distribute traffic but do not scale resources.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 6,
    "questionText": "Which of the following types are free under the Amazon Simple Storage Service (Amazon S3) pricing model? (Select two)",
    "options": [
      { "text": "Data transferred out to an Amazon Elastic Compute Cloud (Amazon EC2) instance in any AWS Region", "correct": false },
      { "text": "Data storage fee for objects stored in S3 Glacier", "correct": false },
      { "text": "Data transferred out to an Amazon Elastic Compute Cloud (Amazon EC2) instance, when the instance is in the same AWS Region as the S3 bucket", "correct": true },
      { "text": "Data storage fee for objects stored in S3 Standard", "correct": false },
      { "text": "Data transferred in from the internet", "correct": true }
    ],
    "explanation": "Correct options: Data transferred in from the internet, and data transferred out to an EC2 instance in the same AWS Region as the S3 bucket are free. Data transfer out to EC2 in any other region incurs charges. Storage fees always apply for S3 Standard and S3 Glacier.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 7,
    "questionText": "An organization maintains a separate Virtual Private Cloud (VPC) for each of its business units. Two units need to privately share data. Which is the most optimal way of privately sharing data between the two VPCs?",
    "options": [
      { "text": "AWS Direct Connect", "correct": false },
      { "text": "VPC Endpoint", "correct": false },
      { "text": "AWS Site-to-Site VPN", "correct": false },
      { "text": "VPC peering connection", "correct": true }
    ],
    "explanation": "Correct option: VPC peering connection. It enables private routing between two VPCs as if they are within the same network. Direct Connect and Site-to-Site VPN are for on-premises connections. VPC Endpoint is for connecting to AWS services, not another VPC.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 8,
    "questionText": "AWS Organizations provides which of the following benefits? (Select two)",
    "options": [
      { "text": "Provision Amazon EC2 Spot instances across the member AWS accounts", "correct": false },
      { "text": "Check vulnerabilities on Amazon EC2 instances across the member AWS accounts", "correct": false },
      { "text": "Share the reserved Amazon EC2 instances amongst the member AWS accounts", "correct": true },
      { "text": "Deploy patches on Amazon EC2 instances across the member AWS accounts", "correct": false },
      { "text": "Volume discounts for Amazon EC2 and Amazon S3 aggregated across the member AWS accounts", "correct": true }
    ],
    "explanation": "Correct options: Volume discounts for aggregated usage, and sharing reserved EC2 instances across accounts. AWS Organizations provides consolidated billing and central management, but not provisioning Spot instances, vulnerability checks, or patching across accounts (those require other services).",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 9,
    "questionText": "AWS Marketplace facilitates which of the following use-cases? (Select two)",
    "options": [
      { "text": "AWS customer can buy software that has been bundled into customized Amazon Machine Image (AMIs) by the AWS Marketplace sellers", "correct": true },
      { "text": "Raise request for purchasing AWS Direct Connect connection", "correct": false },
      { "text": "Buy Amazon EC2 Standard Reserved Instances (RI)", "correct": false },
      { "text": "Purchase compliance documents from third-party vendors", "correct": false },
      { "text": "Sell Software as a Service (SaaS) solutions to AWS customers", "correct": true }
    ],
    "explanation": "Correct options: Buy software bundled as AMIs, and sell SaaS solutions to AWS customers. AWS Marketplace is a digital catalog for software. Direct Connect and RIs are purchased via AWS console, not Marketplace. Compliance documents are from AWS Artifact.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 10,
    "questionText": "Which AWS service can be used to host a static website with the LEAST effort?",
    "options": [
      { "text": "AWS Storage Gateway", "correct": false },
      { "text": "Amazon S3 Glacier", "correct": false },
      { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": true },
      { "text": "Amazon Elastic File System (Amazon EFS)", "correct": false }
    ],
    "explanation": "Correct option: Amazon S3. You can configure an S3 bucket for static website hosting and upload content with minimal effort. Storage Gateway is for hybrid storage, Glacier for archiving, EFS is a file system that requires EC2.",
    "domain": "Technology"
  },
  {
    "questionNumber": 11,
    "questionText": "Which AWS service would you choose for a data processing project that needs a schemaless database?",
    "options": [
      { "text": "Amazon DynamoDB", "correct": true },
      { "text": "Amazon Aurora", "correct": false },
      { "text": "Amazon Relational Database Service (Amazon RDS)", "correct": false },
      { "text": "Amazon RedShift", "correct": false }
    ],
    "explanation": "Correct option: Amazon DynamoDB. It is a key-value and document database that is schemaless. Aurora, RDS, and RedShift are relational (schema required).",
    "domain": "Technology"
  },
  {
    "questionNumber": 12,
    "questionText": "According to the AWS Shared Responsibility Model, which of the following are responsibilities of the customer for AWS Identity and Access Management (AWS IAM)? (Select two)",
    "options": [
      { "text": "Manage global network security infrastructure", "correct": false },
      { "text": "Configuration and vulnerability analysis for the underlying software infrastructure", "correct": false },
      { "text": "Analyze user access patterns and review AWS Identity and Access Management (AWS IAM) permissions", "correct": true },
      { "text": "Enable multi-factor authentication (MFA) on all accounts", "correct": true },
      { "text": "Compliance validation for the underlying software infrastructure", "correct": false }
    ],
    "explanation": "Correct options: Enable MFA on all accounts, and analyze user access patterns and review IAM permissions. AWS is responsible for security of the cloud (global network, underlying infrastructure).",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 13,
    "questionText": "Which benefit of Cloud Computing allows AWS to offer lower pay-as-you-go prices as usage from hundreds of thousands of customers is aggregated in the cloud?",
    "options": [
      { "text": "Trade capital expense for variable expense", "correct": false },
      { "text": "Massive economies of scale", "correct": true },
      { "text": "Go global in minutes", "correct": false },
      { "text": "Increased speed and agility", "correct": false }
    ],
    "explanation": "Correct option: Massive economies of scale. Aggregated usage across many customers allows AWS to achieve higher economies of scale, translating into lower pay-as-you-go prices. The other options are also benefits of cloud computing but not the specific one described.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 14,
    "questionText": "A financial services company wants to migrate from its on-premises data center to AWS Cloud. As a Cloud Practitioner, which AWS service would you recommend so that the company can compare the cost of running their IT infrastructure on-premises vs AWS Cloud?",
    "options": [
      { "text": "AWS Budgets", "correct": false },
      { "text": "AWS Cost Explorer", "correct": false },
      { "text": "AWS Pricing Calculator", "correct": true },
      { "text": "AWS Trusted Advisor", "correct": false }
    ],
    "explanation": "Correct option: AWS Pricing Calculator. It lets you explore AWS services and create cost estimates, allowing comparison with on-premises costs. Cost Explorer visualizes historical AWS costs, Budgets sets alerts, Trusted Advisor provides best practice recommendations.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 15,
    "questionText": "An e-commerce company wants to review the Payment Card Industry (PCI) reports on AWS Cloud. Which AWS resource can be used to address this use-case?",
    "options": [
      { "text": "AWS Cost & Usage Report (AWS CUR)", "correct": false },
      { "text": "AWS Artifact", "correct": true },
      { "text": "AWS Trusted Advisor", "correct": false },
      { "text": "AWS Secrets Manager", "correct": false }
    ],
    "explanation": "Correct option: AWS Artifact. It provides on-demand access to AWS security and compliance reports, including PCI reports. CUR is for billing, Trusted Advisor for best practices, Secrets Manager for managing secrets.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 16,
    "questionText": "A digital media company wants to convert English language subtitles into Spanish language subtitles. As a Cloud Practitioner, which AWS service would you recommend for this use-case?",
    "options": [
      { "text": "Amazon Translate", "correct": true },
      { "text": "Amazon Rekognition", "correct": false },
      { "text": "Amazon Transcribe", "correct": false },
      { "text": "Amazon Polly", "correct": false }
    ],
    "explanation": "Correct option: Amazon Translate. It is a neural machine translation service. Rekognition is for image/video analysis, Transcribe for speech-to-text, Polly for text-to-speech.",
    "domain": "Technology"
  },
  {
    "questionNumber": 17,
    "questionText": "A cargo shipping company runs its server fleet on Amazon Elastic Compute Cloud (Amazon EC2) instances. Some of these instances host the CRM (Customer Relationship Management) applications that need to be accessible 24*7. These applications are not mission-critical. In case of a disaster, these applications can be managed on a lesser number of instances for some time. Which disaster recovery strategy is well-suited as well as cost-effective for this requirement?",
    "options": [
      { "text": "Pilot Light strategy", "correct": false },
      { "text": "Warm Standby strategy", "correct": true },
      { "text": "Backup & Restore strategy", "correct": false },
      { "text": "Multi-site active-active strategy", "correct": false }
    ],
    "explanation": "Correct option: Warm Standby strategy. It deploys a functional stack at reduced capacity, can handle traffic immediately at reduced levels, balancing cost and RTO/RPO. Pilot Light requires additional steps to scale. Backup & Restore has higher RTO/RPO. Multi-site active-active is costly and for mission-critical.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 18,
    "questionText": "Which of the following AWS services can be used to forecast your AWS account usage and costs?",
    "options": [
      { "text": "AWS Pricing Calculator", "correct": false },
      { "text": "AWS Budgets", "correct": false },
      { "text": "AWS Cost & Usage Report (AWS CUR)", "correct": false },
      { "text": "AWS Cost Explorer", "correct": true }
    ],
    "explanation": "Correct option: AWS Cost Explorer. It supports forecasting to get a better idea of future costs and usage. Pricing Calculator estimates costs for new solutions, Budgets alerts on thresholds, CUR provides detailed historical data but no forecasting.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 19,
    "questionText": "Which of the following is the MOST cost-effective Amazon Elastic Compute Cloud (Amazon EC2) instance purchasing option for short-term, spiky and critical workloads on AWS Cloud?",
    "options": [
      { "text": "Dedicated Host", "correct": false },
      { "text": "Spot Instance", "correct": false },
      { "text": "Reserved Instance (RI)", "correct": false },
      { "text": "On-Demand Instance", "correct": true }
    ],
    "explanation": "Correct option: On-Demand Instance. No long-term commitment, pay per second, cannot be interrupted. Spot instances can be interrupted, not for critical workloads. RIs require 1-3 year commitment. Dedicated Hosts are more expensive and for licensing.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 20,
    "questionText": "Which of the following AWS Support plans provide programmatic access to AWS Support Center features to create, manage and close your support cases? (Select two)",
    "options": [
      { "text": "AWS Basic Support", "correct": false },
      { "text": "AWS Enterprise Support", "correct": true },
      { "text": "AWS Business Support", "correct": true },
      { "text": "AWS Developer Support", "correct": false },
      { "text": "AWS Corporate Support", "correct": false }
    ],
    "explanation": "Correct options: AWS Enterprise Support and AWS Business Support (also Enterprise On-Ramp, but not listed). Basic and Developer Support do not provide API access to Support Center. Corporate Support is a distractor.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 21,
    "questionText": "AWS Trusted Advisor can provide alerts on which of the following common security misconfigurations? (Select two)?",
    "options": [
      { "text": "When you allow public access to Amazon S3 buckets", "correct": true },
      { "text": "When you don't tag objects in Amazon S3 buckets", "correct": false },
      { "text": "When you share IAM user credentials with others", "correct": false },
      { "text": "When you don't turn on user activity logging (AWS CloudTrail)", "correct": true },
      { "text": "When you don't enable data encryption on Amazon S3 Glacier", "correct": false }
    ],
    "explanation": "Correct options: Public access to S3 buckets and not turning on CloudTrail. Tagging is not a security issue, sharing credentials cannot be detected by Trusted Advisor, S3 Glacier encrypts by default.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 22,
    "questionText": "A social media company wants to have the MOST cost-optimal strategy for deploying Amazon Elastic Compute Cloud (Amazon EC2) instances. As a Cloud Practitioner, which of the following options would you recommend? (Select two)",
    "options": [
      { "text": "Use Reserved Instances (RI) to run applications with a predictable usage over the next one year", "correct": true },
      { "text": "Use Reserved Instances (RI) for ad-hoc jobs that can be interrupted", "correct": false },
      { "text": "Use Spot Instances for ad-hoc jobs that can be interrupted", "correct": true },
      { "text": "Use On-Demand Instances for ad-hoc jobs that can be interrupted", "correct": false },
      { "text": "Use On-Demand Instances to run applications with a predictable usage over the next one year", "correct": false }
    ],
    "explanation": "Correct options: Use Reserved Instances for predictable long-term usage, and Spot Instances for interruptible ad-hoc jobs. On-Demand is less cost-effective for these scenarios, and RIs are not for ad-hoc jobs.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 23,
    "questionText": "Which of the following Amazon Simple Storage Service (Amazon S3) storage classes has NO constraint of a minimum storage duration charge for objects?",
    "options": [
      { "text": "Amazon S3 Standard-Infrequent Access (S3 Standard-IA)", "correct": false },
      { "text": "Amazon S3 Standard", "correct": true },
      { "text": "Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)", "correct": false },
      { "text": "Amazon S3 Glacier Flexible Retrieval", "correct": false }
    ],
    "explanation": "Correct option: Amazon S3 Standard. It has no minimum storage duration charge. S3 Standard-IA and One Zone-IA have 30-day minimum, Glacier Flexible Retrieval has 90-day minimum.",
    "domain": "Technology"
  },
  {
    "questionNumber": 24,
    "questionText": "Which of the following Amazon Simple Storage Service (Amazon S3) storage classes do not charge any data retrieval fee? (Select two)",
    "options": [
      { "text": "Amazon S3 Glacier Flexible Retrieval", "correct": false },
      { "text": "Amazon S3 Intelligent-Tiering", "correct": true },
      { "text": "Amazon S3 Standard-Infrequent Access (S3 Standard-IA)", "correct": false },
      { "text": "Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)", "correct": false },
      { "text": "Amazon S3 Standard", "correct": true }
    ],
    "explanation": "Correct options: S3 Standard and S3 Intelligent-Tiering have no retrieval fees. S3 Standard-IA, One Zone-IA, and Glacier classes have retrieval fees.",
    "domain": "Technology"
  },
  {
    "questionNumber": 25,
    "questionText": "Which AWS service will you use to provision the same AWS infrastructure across multiple AWS accounts and regions?",
    "options": [
      { "text": "AWS CloudFormation", "correct": true },
      { "text": "AWS Systems Manager", "correct": false },
      { "text": "AWS Config", "correct": false },
      { "text": "AWS CodeDeploy", "correct": false }
    ],
    "explanation": "Correct option: AWS CloudFormation (specifically StackSets for multiple accounts/regions). Systems Manager manages operational tasks, Config audits configurations, CodeDeploy deploys application code.",
    "domain": "Technology"
  },
  {
    "questionNumber": 26,
    "questionText": "A media company uploads its media (audio and video) files to a centralized Amazon Simple Storage Service (Amazon S3) bucket from geographically dispersed locations. Which of the following solutions can the company use to optimize transfer speeds?",
    "options": [
      { "text": "Amazon CloudFront", "correct": false },
      { "text": "AWS Direct Connect", "correct": false },
      { "text": "Amazon S3 Transfer Acceleration (S3TA)", "correct": true },
      { "text": "AWS Global Accelerator", "correct": false }
    ],
    "explanation": "Correct option: Amazon S3 Transfer Acceleration (S3TA). It uses AWS edge locations to optimize uploads over long distances. CloudFront is for content delivery, Direct Connect is a dedicated connection (takes time), Global Accelerator improves application performance but not specifically for S3 uploads.",
    "domain": "Technology"
  },
  {
    "questionNumber": 27,
    "questionText": "Which of the following are benefits of the AWS Web Application Firewall (AWS WAF)? (Select two)",
    "options": [
      { "text": "AWS Web Application Firewall (AWS WAF) can block all requests except the ones that you allow", "correct": true },
      { "text": "AWS Web Application Firewall (AWS WAF) lets you monitor the HTTP and HTTPS requests that are forwarded to Amazon Route 53", "correct": false },
      { "text": "AWS Web Application Firewall (AWS WAF) offers dedicated support from the DDoS Response Team (DRT) and advanced reporting", "correct": false },
      { "text": "AWS Web Application Firewall (AWS WAF) offers protection against all known infrastructure (Layer 3 and 4) attacks", "correct": false },
      { "text": "AWS Web Application Firewall (AWS WAF) can check for the presence of SQL code that is likely to be malicious (known as SQL injection)", "correct": true }
    ],
    "explanation": "Correct options: Can block all requests except allowed ones, and can check for SQL injection. WAF operates at layer 7 (HTTP/HTTPS), not layer 3/4. DRT support is for Shield Advanced. Route 53 is DNS, not monitored by WAF.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 28,
    "questionText": "Which of the following can you use to run a bootstrap script while launching an Amazon Elastic Compute Cloud (Amazon EC2) instance?",
    "options": [
      { "text": "Amazon EC2 instance configuration data", "correct": false },
      { "text": "Amazon EC2 instance user data", "correct": true },
      { "text": "Amazon EC2 instance AMI data", "correct": false },
      { "text": "Amazon EC2 instance metadata", "correct": false }
    ],
    "explanation": "Correct option: Amazon EC2 instance user data. You can specify a bootstrap script as user data when launching an instance. Metadata provides information about the instance, not for running scripts. Configuration data and AMI data are not valid terms.",
    "domain": "Technology"
  },
  {
    "questionNumber": 29,
    "questionText": "Which AWS services can be used together to send alerts whenever the AWS account root user signs in? (Select two)",
    "options": [
      { "text": "AWS Step Functions", "correct": false },
      { "text": "Amazon Simple Queue Service (Amazon SQS)", "correct": false },
      { "text": "Amazon Simple Notification Service (Amazon SNS)", "correct": true },
      { "text": "Amazon CloudWatch", "correct": true },
      { "text": "AWS Lambda", "correct": false }
    ],
    "explanation": "Correct options: Amazon CloudWatch (for event rule monitoring root logins) and Amazon SNS (to send email alerts). Step Functions, SQS, and Lambda are not directly needed for this pattern, though Lambda could be used but not required.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 30,
    "questionText": "Which of the following is available across all AWS Support plans?",
    "options": [
      { "text": "AWS Health Dashboard -- Your account health", "correct": true },
      { "text": "Third-Party Software Support", "correct": false },
      { "text": "Enhanced Technical Support with unlimited cases and unlimited contacts", "correct": false },
      { "text": "Full set of AWS Trusted Advisor best practice checks", "correct": false }
    ],
    "explanation": "Correct option: AWS Health Dashboard – Your account health is available to all Support plans. The other options are only for Business and Enterprise plans.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 31,
    "questionText": "Reserved Instance (RI) pricing is available for which of the following AWS services? (Select two)",
    "options": [
      { "text": "Amazon CloudFront", "correct": false },
      { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": true },
      { "text": "AWS Identity and Access Management (AWS IAM)", "correct": false },
      { "text": "Amazon Relational Database Service (Amazon RDS)", "correct": true },
      { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": false }
    ],
    "explanation": "Correct options: Amazon EC2 and Amazon RDS support Reserved Instance pricing. CloudFront and S3 do not offer RIs (S3 has volume discounts). IAM is free.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 32,
    "questionText": "A firm wants to maintain the same data on Amazon Simple Storage Service (Amazon S3) between its production account and multiple test accounts. Which technique should you choose to copy data into multiple test accounts while retaining object metadata?",
    "options": [
      { "text": "Amazon S3 Replication", "correct": true },
      { "text": "Amazon S3 Transfer Acceleration (Amazon S3TA)", "correct": false },
      { "text": "Amazon S3 Bucket Policy", "correct": false },
      { "text": "Amazon S3 Storage Classes", "correct": false }
    ],
    "explanation": "Correct option: Amazon S3 Replication. It automatically copies objects across buckets (same or different accounts) and retains metadata. Transfer Acceleration speeds up transfers, Bucket Policy grants permissions, Storage Classes define tiers.",
    "domain": "Technology"
  },
  {
    "questionNumber": 33,
    "questionText": "Amazon Elastic Compute Cloud (Amazon EC2) Spot instances are a best-fit for which of the following scenarios?",
    "options": [
      { "text": "To run any containerized workload with Amazon Elastic Container Service (Amazon ECS) that can be interrupted", "correct": true },
      { "text": "To run scheduled jobs (jobs that run at the same time every day)", "correct": false },
      { "text": "To run batch processes for critical workloads", "correct": false },
      { "text": "To install cost-effective Amazon RDS database", "correct": false }
    ],
    "explanation": "Correct option: To run any containerized workload that can be interrupted. Spot instances can be reclaimed, so they are not suitable for scheduled jobs (no guarantee of availability), critical workloads, or databases (would cause disruption).",
    "domain": "Technology"
  },
  {
    "questionNumber": 34,
    "questionText": "Which of the following AWS storage services can be directly used with on-premises systems?",
    "options": [
      { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": false },
      { "text": "Amazon Elastic Block Store (Amazon EBS)", "correct": false },
      { "text": "Amazon Elastic File System (Amazon EFS)", "correct": true },
      { "text": "Amazon EC2 Instance Store", "correct": false }
    ],
    "explanation": "Correct option: Amazon EFS. It can be mounted on on-premises Linux servers via Direct Connect or VPN. S3 requires Storage Gateway for direct on-premises access (or can be accessed via internet but not as a mounted filesystem), EBS and Instance Store are only attached to EC2 instances.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 35,
    "questionText": "A financial services company wants to ensure that all customer data uploaded on its data lake on Amazon Simple Storage Service (Amazon S3) always stays private. Which of the following is the MOST efficient solution to address this compliance requirement?",
    "options": [
      { "text": "Use Amazon CloudWatch to ensure that all Amazon S3 resources stay private", "correct": false },
      { "text": "Use Amazon S3 Block Public Access to ensure that all Amazon S3 resources stay private", "correct": true },
      { "text": "Trigger a lambda function every time an object is uploaded on Amazon S3. The lambda function should change the object settings to make sure it stays private", "correct": false },
      { "text": "Set up a high-level advisory committee to review the privacy settings of each object uploaded into Amazon S3", "correct": false }
    ],
    "explanation": "Correct option: Use Amazon S3 Block Public Access. It provides settings at bucket or account level to override any policies that would allow public access. Lambda could work but is less efficient. CloudWatch is for monitoring, not enforcement. Advisory committee is not technical and inefficient.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 36,
    "questionText": "An e-commerce company would like to receive alerts when the Amazon EC2 Reserved Instances (RI) utilization drops below a certain threshold. Which AWS service can be used to address this use-case?",
    "options": [
      { "text": "AWS Cost Explorer", "correct": false },
      { "text": "AWS Trusted Advisor", "correct": false },
      { "text": "AWS Systems Manager", "correct": false },
      { "text": "AWS Budgets", "correct": true }
    ],
    "explanation": "Correct option: AWS Budgets. It allows you to set reservation utilization or coverage targets and receive alerts when utilization drops below the threshold. Cost Explorer can generate reports but not alerts. Trusted Advisor provides recommendations, not alerts. Systems Manager is for operational tasks.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 37,
    "questionText": "The DevOps team at an IT company wants to centrally manage its servers on AWS Cloud as well as on-premise data center so that it can collect software inventory, run commands, configure and patch servers at scale. As a Cloud Practitioner, which AWS service would you recommend for this use-case?",
    "options": [
      { "text": "AWS Service Catalog", "correct": false },
      { "text": "AWS Config", "correct": false },
      { "text": "AWS Systems Manager", "correct": true },
      { "text": "AWS CloudFormation", "correct": false }
    ],
    "explanation": "Correct option: AWS Systems Manager. It provides a unified interface to automate operational tasks (run commands, patch, configure) across AWS and on-premises. Service Catalog creates IT service catalogs, Config tracks configuration changes, CloudFormation provisions infrastructure.",
    "domain": "Technology"
  },
  {
    "questionNumber": 38,
    "questionText": "Which AWS service will help you deploy application code automatically to an Amazon Elastic Compute Cloud (Amazon EC2) instance?",
    "options": [
      { "text": "AWS CloudFormation", "correct": false },
      { "text": "AWS CodeBuild", "correct": false },
      { "text": "AWS Elastic Beanstalk", "correct": false },
      { "text": "AWS CodeDeploy", "correct": true }
    ],
    "explanation": "Correct option: AWS CodeDeploy. It automates application deployments to EC2, on-premises, Lambda, etc. CloudFormation provisions resources, CodeBuild compiles code, Elastic Beanstalk deploys web applications but is a platform (not just code deployment).",
    "domain": "Technology"
  },
  {
    "questionNumber": 39,
    "questionText": "Which of the following are the serverless computing services offered by AWS ? (Select two)",
    "options": [
      { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": false },
      { "text": "AWS Fargate", "correct": true },
      { "text": "Amazon Lightsail", "correct": false },
      { "text": "AWS Lambda", "correct": true },
      { "text": "AWS Elastic Beanstalk", "correct": false }
    ],
    "explanation": "Correct options: AWS Lambda and AWS Fargate. Lambda runs code without servers, Fargate is serverless compute for containers. EC2 and Lightsail are server-based, Elastic Beanstalk provisions servers (though managed).",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 40,
    "questionText": "As per the AWS Shared Responsibility Model, which of the following is a responsibility of AWS from a security and compliance point of view?",
    "options": [
      { "text": "Service and Communications Protection", "correct": false },
      { "text": "Patching guest OS and applications", "correct": false },
      { "text": "Identity and Access Management", "correct": false },
      { "text": "Patching networking infrastructure", "correct": true }
    ],
    "explanation": "Correct option: Patching networking infrastructure. AWS is responsible for security of the cloud, including hardware, software, networking, and facilities. Customer is responsible for security in the cloud (guest OS, IAM, data, etc.).",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 41,
    "questionText": "How is Amazon EC2 different from traditional hosting systems? (Select two)",
    "options": [
      { "text": "Amazon EC2 provides a pre-configured instance for a fixed monthly cost", "correct": false },
      { "text": "Amazon EC2 can scale with changing computing requirements", "correct": true },
      { "text": "With Amazon EC2, developers can launch and terminate the instances anytime they need to", "correct": true },
      { "text": "Amazon EC2 caters more towards groups of users with similar system requirements so that the server resources are shared across multiple users and the cost is reduced", "correct": false },
      { "text": "With Amazon EC2, users risk overbuying resources", "correct": false }
    ],
    "explanation": "Correct options: EC2 can scale with changing requirements, and developers can launch/terminate instances anytime. Traditional hosting often has fixed capacity and upfront costs. EC2 has pay-as-you-go, not fixed monthly cost. Resources are not shared across users in EC2 (isolated). Overbuying risk is for traditional hosting.",
    "domain": "Technology"
  },
  {
    "questionNumber": 42,
    "questionText": "Which of the following are recommended security best practices for the AWS account root user? (Select two)",
    "options": [
      { "text": "Disable multi-factor authentication (MFA) for the AWS account root user as it can lock the entire AWS account if the multi-factor authentication (MFA) device is lost", "correct": false },
      { "text": "Set up an IAM user with administrator permissions and do not use AWS account root user for administrative tasks", "correct": true },
      { "text": "Enable multi-factor authentication (MFA) for the AWS account root user", "correct": true },
      { "text": "Keep your AWS account root user access keys in an encrypted file on Amazon S3", "correct": false },
      { "text": "Share AWS account root user access keys with other administrators", "correct": false }
    ],
    "explanation": "Correct options: Enable MFA for root user, and set up IAM admin user instead of using root for tasks. Do not disable MFA, do not keep root access keys (delete them if they exist), never share root credentials.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 43,
    "questionText": "Which pillar of AWS Well-Architected Framework is responsible for making sure that you select the right resource types and sizes based on your workload requirements?",
    "options": [
      { "text": "Cost Optimization", "correct": false },
      { "text": "Performance Efficiency", "correct": true },
      { "text": "Reliability", "correct": false },
      { "text": "Operational Excellence", "correct": false }
    ],
    "explanation": "Correct option: Performance Efficiency. It focuses on using IT resources efficiently, including selecting the right resource types and sizes. Cost Optimization is about avoiding unnecessary costs, Reliability about recovery, Operational Excellence about running and monitoring systems.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 44,
    "questionText": "Which of the following AWS entities lists all users in your account and the status of their various account aspects such as passwords, access keys, and MFA devices?",
    "options": [
      { "text": "Amazon Inspector", "correct": false },
      { "text": "Credentials Report", "correct": true },
      { "text": "AWS Cost & Usage Report (AWS CUR)", "correct": false },
      { "text": "AWS Trusted Advisor", "correct": false }
    ],
    "explanation": "Correct option: Credentials Report (from IAM). It lists all users and the status of passwords, access keys, MFA devices. Inspector assesses security vulnerabilities, CUR is billing report, Trusted Advisor gives best practice recommendations.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 45,
    "questionText": "Which AWS entity enables you to privately connect your Amazon Virtual Private Cloud (Amazon VPC) to an Amazon Simple Queue Service (Amazon SQS) queue?",
    "options": [
      { "text": "VPC Gateway Endpoint", "correct": false },
      { "text": "AWS Direct Connect", "correct": false },
      { "text": "VPC Interface Endpoint", "correct": true },
      { "text": "Internet Gateway", "correct": false }
    ],
    "explanation": "Correct option: VPC Interface Endpoint (powered by AWS PrivateLink). Gateway endpoints only support S3 and DynamoDB. Direct Connect is for on-premises connections, Internet Gateway for internet traffic.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 46,
    "questionText": "The DevOps team at a Big Data consultancy has set up Amazon Elastic Compute Cloud (Amazon EC2) instances across two AWS Regions for its flagship application. Which of the following characterizes this application architecture?",
    "options": [
      { "text": "Deploying the application across two AWS Regions improves availability", "correct": true },
      { "text": "Deploying the application across two AWS Regions improves scalability", "correct": false },
      { "text": "Deploying the application across two AWS Regions improves agility", "correct": false },
      { "text": "Deploying the application across two AWS Regions improves security", "correct": false }
    ],
    "explanation": "Correct option: Improves availability. Multiple regions allow the application to withstand a regional outage. Scalability is typically handled within a region via Auto Scaling, agility refers to speed of innovation, security is not directly improved by multi-region deployment.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 47,
    "questionText": "Which of the following is the best practice for application architecture on AWS Cloud?",
    "options": [
      { "text": "Build monolithic applications", "correct": false },
      { "text": "Build loosely coupled components", "correct": true },
      { "text": "Build tightly coupled components", "correct": false },
      { "text": "Use synchronous communication between components", "correct": false }
    ],
    "explanation": "Correct option: Build loosely coupled components (microservices). This improves scalability, fault tolerance, and development speed. Monolithic and tightly coupled architectures increase risk. Asynchronous communication is preferred over synchronous for decoupling.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 48,
    "questionText": "Which AWS service can help you analyze your infrastructure to identify unattached or underutilized Amazon EBS Elastic Volumes?",
    "options": [
      { "text": "AWS Config", "correct": false },
      { "text": "Amazon Inspector", "correct": false },
      { "text": "AWS Trusted Advisor", "correct": true },
      { "text": "Amazon CloudWatch", "correct": false }
    ],
    "explanation": "Correct option: AWS Trusted Advisor. It includes cost optimization checks for underutilized EBS volumes. Config tracks configuration changes, Inspector assesses security, CloudWatch monitors metrics.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 49,
    "questionText": "Which of the following entities are part of an Amazon Virtual Private Cloud (Amazon VPC) in the AWS Cloud? (Select two)",
    "options": [
      { "text": "Subnet", "correct": true },
      { "text": "Internet Gateway", "correct": true },
      { "text": "Object", "correct": false },
      { "text": "AWS Storage Gateway", "correct": false },
      { "text": "API Gateway", "correct": false }
    ],
    "explanation": "Correct options: Subnet and Internet Gateway are VPC components. Objects are in S3, Storage Gateway is a hybrid storage service, API Gateway is a separate service for APIs.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 50,
    "questionText": "Which of the following is a perspective of the AWS Cloud Adoption Framework (AWS CAF)?",
    "options": [
      { "text": "Architecture", "correct": false },
      { "text": "Process", "correct": false },
      { "text": "Product", "correct": false },
      { "text": "Business", "correct": true }
    ],
    "explanation": "Correct option: Business. AWS CAF has six perspectives: Business, People, Governance, Platform, Security, Operations. Architecture, Process, Product are not CAF perspectives.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 51,
    "questionText": "Which of the following statements are CORRECT regarding AWS Global Accelerator? (Select two)",
    "options": [
      { "text": "AWS Global Accelerator cannot be configured with an Elastic Load Balancer (ELB)", "correct": false },
      { "text": "AWS Global Accelerator is a good fit for non-HTTP use cases", "correct": true },
      { "text": "AWS Global Accelerator uses the AWS global network and its edge locations. But the edge locations used by Global Accelerator are different from Amazon CloudFront edge locations", "correct": false },
      { "text": "AWS Global Accelerator can be used to host static websites", "correct": false },
      { "text": "AWS Global Accelerator provides static IP addresses that act as a fixed entry point to your applications", "correct": true }
    ],
    "explanation": "Correct options: Good fit for non-HTTP use cases (e.g., gaming, IoT), and provides static IP addresses as fixed entry point. Global Accelerator can be configured with ELB, uses same edge locations as CloudFront, cannot host websites (S3 does that).",
    "domain": "Technology"
  },
  {
    "questionNumber": 52,
    "questionText": "Which AWS service would you use to create a logically isolated section of the AWS Cloud where you can launch AWS resources in your virtual network?",
    "options": [
      { "text": "Network Access Control List (Network ACL)", "correct": false },
      { "text": "Virtual Private Network (VPN)", "correct": false },
      { "text": "Virtual private Cloud (VPC)", "correct": true },
      { "text": "Subnet", "correct": false }
    ],
    "explanation": "Correct option: Virtual Private Cloud (VPC). VPC is a logically isolated section of AWS Cloud. Network ACL is a security layer within VPC, VPN connects on-premises to AWS, Subnet is a range of IPs within VPC (not a service itself).",
    "domain": "Technology"
  },
  {
    "questionNumber": 53,
    "questionText": "An e-commerce company has migrated its IT infrastructure from the on-premises data center to AWS Cloud. Which of the following costs is the company responsible for?",
    "options": [
      { "text": "Costs for hardware infrastructure on AWS Cloud", "correct": false },
      { "text": "AWS Data Center physical security costs", "correct": false },
      { "text": "Costs for powering servers on AWS Cloud", "correct": false },
      { "text": "Application software license costs", "correct": true }
    ],
    "explanation": "Correct option: Application software license costs. AWS is responsible for hardware, physical security, and power. Customer is responsible for software licenses and their own human resources.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 54,
    "questionText": "Which of the following entities should be used for an Amazon Elastic Compute Cloud (Amazon EC2) Instance to access a DynamoDB table?",
    "options": [
      { "text": "AWS Key Management Service (KMS)", "correct": false },
      { "text": "Amazon Cognito", "correct": false },
      { "text": "AWS IAM user access keys", "correct": false },
      { "text": "IAM role", "correct": true }
    ],
    "explanation": "Correct option: IAM role. Best practice is to assign an IAM role to EC2 instance with permissions to access DynamoDB. IAM user access keys are long-term credentials and less secure. KMS manages keys, Cognito is for user identity.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 55,
    "questionText": "Which of the following describes an Availability Zone (AZ) in the AWS Cloud?",
    "options": [
      { "text": "One or more data centers in multiple locations", "correct": false },
      { "text": "One or more data centers in the same location", "correct": true },
      { "text": "One or more server racks in multiple locations", "correct": false },
      { "text": "One or more server racks in the same location", "correct": false }
    ],
    "explanation": "Correct option: One or more data centers in the same location (i.e., within an AZ). AZs are distinct physical locations within a Region, each consisting of one or more data centers. Not server racks.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 56,
    "questionText": "Which AWS service can be used to set up billing alarms to monitor estimated charges on your AWS account?",
    "options": [
      { "text": "AWS Organizations", "correct": false },
      { "text": "AWS CloudTrail", "correct": false },
      { "text": "Amazon CloudWatch", "correct": true },
      { "text": "AWS Cost Explorer", "correct": false }
    ],
    "explanation": "Correct option: Amazon CloudWatch (with billing metric enabled). CloudWatch can create alarms on estimated charges. Organizations is for account management, CloudTrail for API logging, Cost Explorer for visualization and forecasting but not alarms.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 57,
    "questionText": "Which of the following is best-suited for load-balancing HTTP and HTTPS traffic?",
    "options": [
      { "text": "Network Load Balancer", "correct": false },
      { "text": "AWS Auto Scaling", "correct": false },
      { "text": "Application Load Balancer", "correct": true },
      { "text": "System Load Balancer", "correct": false }
    ],
    "explanation": "Correct option: Application Load Balancer (ALB). It is designed for HTTP/HTTPS traffic with advanced routing. Network Load Balancer is for TCP/UDP/TLS. Auto Scaling scales capacity, System Load Balancer is not an AWS service.",
    "domain": "Technology"
  },
  {
    "questionNumber": 58,
    "questionText": "The QA team at a company wants a tool/service that can provide access to different mobile devices with variations in firmware and Operating System versions. Which AWS service can address this use case?",
    "options": [
      { "text": "AWS CodePipeline", "correct": false },
      { "text": "AWS Mobile Farm", "correct": false },
      { "text": "AWS Device Farm", "correct": true },
      { "text": "AWS Elastic Beanstalk", "correct": false }
    ],
    "explanation": "Correct option: AWS Device Farm. It allows testing on real mobile devices and browsers. CodePipeline is CI/CD, Mobile Farm is a distractor, Elastic Beanstalk is for web app deployment.",
    "domain": "Technology"
  },
  {
    "questionNumber": 59,
    "questionText": "Which of the following AWS services offers Lifecycle configuration for cost-optimal storage?",
    "options": [
      { "text": "Amazon EC2 Instance Store", "correct": false },
      { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": true },
      { "text": "AWS Storage Gateway", "correct": false },
      { "text": "Amazon Elastic Block Store (Amazon EBS)", "correct": false }
    ],
    "explanation": "Correct option: Amazon S3. S3 Lifecycle policies allow transitioning objects to cheaper storage classes or expiring them. Instance Store is temporary, EBS has snapshots but not lifecycle policies for tiering, Storage Gateway is for hybrid storage.",
    "domain": "Technology"
  },
  {
    "questionNumber": 60,
    "questionText": "Bob and Susan each have an AWS account in AWS Organizations. Susan has five Reserved Instances (RIs) of the same type and Bob has none. During one particular hour, Susan uses three instances and Bob uses six for a total of nine instances on the organization's consolidated bill. Which of the following statements are correct about consolidated billing in AWS Organizations? (Select two)",
    "options": [
      { "text": "AWS bills five instances as Reserved Instances, and the remaining four instances as regular instances", "correct": true },
      { "text": "Bob receives the cost-benefit from Susan's Reserved Instances (RI) only if he launches his instances in the same Availability Zone (AZ) where Susan purchased her Reserved Instances", "correct": true },
      { "text": "Bob receives the cost-benefit from Susan's Reserved Instance (RI) only if he launches his instances in the same AWS Region where Susan purchased her Reserved Instances (RI)", "correct": false },
      { "text": "Bob does not receive any cost-benefit since he hasn't purchased any Reserved Instance (RI). If his account has even one RI, then the cost-benefit from Susan's account is also added to his account", "correct": false },
      { "text": "AWS bills three instances as Reserved Instances (RI), and the remaining six instances as regular instances", "correct": false }
    ],
    "explanation": "Correct options: AWS bills the five RIs first, then remaining four as regular; and Bob gets benefit only if he launches instances in the same AZ where Susan purchased RIs. Consolidated billing treats all accounts as one, but AZ specificity matters. Region alone is not sufficient, must be same AZ.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 61,
    "questionText": "Which of the following is correct regarding the Amazon Relational Database Service (Amazon RDS) service?",
    "options": [
      { "text": "You can use read replicas for improved read performance only and multi-AZ deployment for disaster recovery only", "correct": false },
      { "text": "You can use both read replicas and multi-AZ deployment having single standby for improved read performance", "correct": false },
      { "text": "You can use read replicas for disaster recovery only and multi-AZ deployment for improved read performance only", "correct": false },
      { "text": "You can use both read replicas and multi-AZ deployment for disaster recovery", "correct": true }
    ],
    "explanation": "Correct option: You can use both read replicas and multi-AZ deployment for disaster recovery. Read replicas (especially cross-region) can be used for DR, and Multi-AZ provides automatic failover. Multi-AZ single standby does not improve read performance (only availability).",
    "domain": "Technology"
  },
  {
    "questionNumber": 62,
    "questionText": "Which of the following is a container service of AWS?",
    "options": [
      { "text": "Amazon SageMaker", "correct": false },
      { "text": "Amazon Simple Notification Service (Amazon SNS)", "correct": false },
      { "text": "AWS Elastic Beanstalk", "correct": false },
      { "text": "AWS Fargate", "correct": true }
    ],
    "explanation": "Correct option: AWS Fargate. It is a serverless compute engine for containers. SageMaker is for ML, SNS for messaging, Elastic Beanstalk for web apps (not specifically container service, though it can use containers).",
    "domain": "Technology"
  },
  {
    "questionNumber": 63,
    "questionText": "Which of the following AWS authentication mechanisms supports an AWS Multi-Factor Authentication (AWS MFA) device that you can plug into a USB port on your computer?",
    "options": [
      { "text": "Virtual Multi-Factor Authentication (AWS MFA) device", "correct": false },
      { "text": "Hardware Multi-Factor Authentication (AWS MFA) device", "correct": false },
      { "text": "U2F security key", "correct": true },
      { "text": "SMS text message-based Multi-Factor Authentication (AWS MFA)", "correct": false }
    ],
    "explanation": "Correct option: U2F security key (USB device). Virtual MFA is software app, Hardware MFA is a token that generates codes (not USB plug typically), SMS uses text messages.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 64,
    "questionText": "AWS Shield Advanced provides expanded DDoS attack protection for web applications running on which of the following resources? (Select two)",
    "options": [
      { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": false },
      { "text": "AWS Identity and Access Management (AWS IAM)", "correct": false },
      { "text": "Amazon CloudFront", "correct": true },
      { "text": "AWS Elastic Beanstalk", "correct": false },
      { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": true }
    ],
    "explanation": "Correct options: Amazon CloudFront and Amazon EC2 (also ELB, Route 53, Global Accelerator). S3, IAM, Elastic Beanstalk are not supported by Shield Advanced for expanded protection.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 65,
    "questionText": "Which of the following entities can be used to connect to an Amazon Elastic Compute Cloud (Amazon EC2) server from a Mac OS, Windows or Linux based computer via a browser-based client?",
    "options": [
      { "text": "Amazon EC2 Instance Connect", "correct": true },
      { "text": "Putty", "correct": false },
      { "text": "AWS Direct Connect", "correct": false },
      { "text": "SSH", "correct": false }
    ],
    "explanation": "Correct option: Amazon EC2 Instance Connect. It provides a browser-based SSH client. Putty is Windows-only (not browser-based), SSH is command-line not browser-based, Direct Connect is network connection.",
    "domain": "Cloud Concepts"
  }
]


};

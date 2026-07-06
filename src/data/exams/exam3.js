export const EXAM_DATA = {
  examNumber: 3,
  title: "Practice Test #3 - AWS Certified Cloud Practitioner",
  description: "Full practice exam with 65 questions covering AWS Cloud Concepts, Technology, Security, and Billing & Pricing.",
  questions: [
    {
      "questionNumber": 1,
      "questionText": "A startup runs its proprietary application on docker containers. As a Cloud Practitioner, which AWS service would you recommend so that the startup can run containers and still have access to the underlying servers?",
      "options": [
        { "text": "AWS Lambda", "correct": false },
        { "text": "Amazon Elastic Container Registry (Amazon ECR)", "correct": false },
        { "text": "AWS Fargate", "correct": false },
        { "text": "Amazon Elastic Container Service (Amazon ECS)", "correct": true }
      ],
      "explanation": "Correct option: Amazon Elastic Container Service (Amazon ECS). Amazon ECS is a highly scalable container management service that makes it easy to run, stop, and manage Docker containers on a cluster. This is not a fully managed service and you can manage the underlying servers yourself. AWS Fargate is serverless (no access to underlying servers), Lambda does not support containers, ECR is a registry for storing images, not running them.",
      "domain": "Technology"
    },
    {
      "questionNumber": 2,
      "questionText": "Which budget types can be created under AWS Budgets (Select three)?",
      "options": [
        { "text": "Software budget", "correct": false },
        { "text": "Reservation budget", "correct": true },
        { "text": "Hardware budget", "correct": false },
        { "text": "Usage budget", "correct": true },
        { "text": "Cost budget", "correct": true },
        { "text": "Resource budget", "correct": false }
      ],
      "explanation": "Correct options: Reservation budget, Usage budget, Cost budget. AWS Budgets supports four budget types: Cost budget, Usage budget, Reservation budget, and Savings Plans budget. Software, hardware, and resource budgets are made-up distractors.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 3,
      "questionText": "A multi-national company has its business-critical data stored on a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances, in various countries, configured in region-specific compliance rules. To demonstrate compliance, the company needs to submit historical configurations on a regular basis. Which AWS service is best suited for this requirement?",
      "options": [
        { "text": "Amazon GuardDuty", "correct": false },
        { "text": "Amazon Macie", "correct": false },
        { "text": "AWS CloudTrail", "correct": false },
        { "text": "AWS Config", "correct": true }
      ],
      "explanation": "Correct option: AWS Config. It provides a detailed view of resource configurations and how they changed over time, which is ideal for compliance and auditing. GuardDuty is threat detection, Macie discovers sensitive data, CloudTrail records API activity but not configuration history.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 4,
      "questionText": "Which AWS service protects your AWS account by monitoring malicious activity and detecting threats?",
      "options": [
        { "text": "Amazon GuardDuty", "correct": true },
        { "text": "AWS CloudTrail", "correct": false },
        { "text": "AWS Trusted Advisor", "correct": false },
        { "text": "Amazon CloudWatch", "correct": false }
      ],
      "explanation": "Correct option: Amazon GuardDuty. It is a threat detection service that continuously monitors for malicious activity and unauthorized behavior using CloudTrail, VPC Flow Logs, and DNS logs. CloudTrail records activity, Trusted Advisor gives best practices, CloudWatch monitors metrics.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 5,
      "questionText": "Which of the following capabilities does Amazon Rekognition provide as a ready-to-use feature?",
      "options": [
        { "text": "Convert images into greyscale", "correct": false },
        { "text": "Human pose detection", "correct": false },
        { "text": "Identify objects in a photo", "correct": true },
        { "text": "Resize images quickly", "correct": false }
      ],
      "explanation": "Correct option: Identify objects in a photo. Rekognition can identify objects, people, text, scenes, activities, and inappropriate content. It does not convert to greyscale, resize images, or perform human pose detection.",
      "domain": "Technology"
    },
    {
      "questionNumber": 6,
      "questionText": "Which of the following statements are true about Cost Allocation Tags in AWS Billing? (Select two)",
      "options": [
        { "text": "Only user-defined tags need to be activated before they can appear in Cost Explorer or on a cost allocation report", "correct": false },
        { "text": "For each resource, each tag key must be unique, and each tag key can have only one value", "correct": true },
        { "text": "For each resource, each tag key must be unique, but can have multiple values", "correct": false },
        { "text": "Tags help in organizing resources and are a mandatory configuration item to run reports", "correct": false },
        { "text": "You must activate both AWS generated tags and user-defined tags separately before they can appear in Cost Explorer or on a cost allocation report", "correct": true }
      ],
      "explanation": "Correct options: Each tag key must be unique with one value, and both AWS-generated and user-defined tags must be activated separately. Tags are not mandatory, and user-defined tags alone are not sufficient.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 7,
      "questionText": "Which AWS service will you use to privately connect your virtual private cloud (VPC) to Amazon Simple Storage Service (Amazon S3)?",
      "options": [
        { "text": "Amazon API Gateway", "correct": false },
        { "text": "AWS Direct Connect", "correct": false },
        { "text": "AWS Transit Gateway", "correct": false },
        { "text": "VPC Endpoint", "correct": true }
      ],
      "explanation": "Correct option: VPC Endpoint (specifically a gateway endpoint for S3). It allows private connectivity without internet gateway, NAT, or VPN. Direct Connect is for on-premises, Transit Gateway connects multiple VPCs, API Gateway is for APIs.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 8,
      "questionText": "Which AWS service can be used as an in-memory database with high-performance and low latency?",
      "options": [
        { "text": "Amazon Relational Database Service (Amazon RDS)", "correct": false },
        { "text": "Amazon Athena", "correct": false },
        { "text": "Amazon DynamoDB", "correct": false },
        { "text": "Amazon ElastiCache", "correct": true }
      ],
      "explanation": "Correct option: Amazon ElastiCache. It is an in-memory data store (Redis/Memcached) for low-latency caching and real-time use cases. RDS is relational, Athena is query service, DynamoDB is NoSQL but not in-memory.",
      "domain": "Technology"
    },
    {
      "questionNumber": 9,
      "questionText": "Which of the following statements are CORRECT regarding security groups and network access control lists (network ACL)? (Select two)",
      "options": [
        { "text": "A security group contains a numbered list of rules and evaluates these rules in the increasing order while deciding whether to allow the traffic", "correct": false },
        { "text": "A security group is stateless, that is, the return traffic must be explicitly allowed", "correct": false },
        { "text": "A security group is stateful, that is, it automatically allows the return traffic", "correct": true },
        { "text": "A network access control list (network ACL) is stateful, that is, it automatically allows the return traffic", "correct": false },
        { "text": "A network access control list (network ACL) contains a numbered list of rules and evaluates these rules in the increasing order while deciding whether to allow the traffic", "correct": true }
      ],
      "explanation": "Correct options: Security groups are stateful (return traffic automatically allowed), and network ACLs are stateless with numbered rules evaluated in order. Security groups do not use numbered rules, network ACLs are not stateful.",
      "domain": "Technology"
    },
    {
      "questionNumber": 10,
      "questionText": "An enterprise is developing a roadmap for its cloud adoption journey and wants to ensure its IT investments align with business objectives and deliver measurable value. Which perspective of the AWS Cloud Adoption Framework (CAF) addresses the strategy management capability?",
      "options": [
        { "text": "Business Perspective", "correct": true },
        { "text": "Operations Perspective", "correct": false },
        { "text": "Governance Perspective", "correct": false },
        { "text": "Platform Perspective", "correct": false }
      ],
      "explanation": "Correct option: Business Perspective. It ensures cloud adoption aligns with business objectives, strategic planning, and value realization. Operations focuses on day-to-day, Governance on risk/compliance, Platform on infrastructure.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 11,
      "questionText": "AWS Lambda pricing is based on which of the following criteria? (Select two)",
      "options": [
        { "text": "The time it takes for the AWS Lambda function to execute", "correct": true },
        { "text": "Number of requests for the AWS Lambda function", "correct": true },
        { "text": "The size of the deployment package for the AWS Lambda function", "correct": false },
        { "text": "The language runtime of the AWS Lambda function", "correct": false },
        { "text": "The number of lines of code for the AWS Lambda function", "correct": false }
      ],
      "explanation": "Correct options: Number of requests and execution time (duration). Pricing does not depend on deployment package size, language runtime, or lines of code.",
      "domain": "Technology"
    },
    {
      "questionNumber": 12,
      "questionText": "A development team is looking for a forum where the most frequent questions and requests from AWS customers are listed along with AWS provided solutions. Which AWS forum/service can be used for troubleshooting an issue or checking for a solution?",
      "options": [
        { "text": "AWS Support Center", "correct": false },
        { "text": "AWS Marketplace", "correct": false },
        { "text": "AWS Health Dashboard - service health", "correct": false },
        { "text": "AWS Knowledge Center", "correct": true }
      ],
      "explanation": "Correct option: AWS Knowledge Center. It contains frequently asked questions and AWS-provided solutions. Support Center is for support cases, Marketplace is for software, Health Dashboard shows service status.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 13,
      "questionText": "A global e-commerce platform wants to restrict access to its website from specific countries to comply with regional regulations. Which AWS service is best suited to implement this restriction?",
      "options": [
        { "text": "Amazon Pinpoint", "correct": false },
        { "text": "AWS Shield", "correct": false },
        { "text": "Amazon WAF", "correct": true },
        { "text": "Amazon Fraud Detector", "correct": false }
      ],
      "explanation": "Correct option: Amazon WAF (Web Application Firewall). It can create geo-match conditions to block requests from specific countries. Pinpoint is for customer engagement, Shield for DDoS protection, Fraud Detector for fraud detection.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 14,
      "questionText": "An IT company would like to move its IT resources (including any data and applications) from an AWS Region in the US to another AWS Region in Europe. Which of the following represents the correct solution for this use-case?",
      "options": [
        { "text": "The company should use AWS Database Migration Service (AWS DMS) to move the resources (including any data and applications) from source AWS Region to destination AWS Region", "correct": false },
        { "text": "The company should just start creating new resources in the destination AWS Region and then migrate the relevant data and applications into this new AWS Region", "correct": true },
        { "text": "The company should raise a ticket with AWS Support for this resource migration", "correct": false },
        { "text": "The company should use AWS CloudFormation to move the resources (including any data and applications) from source AWS Region to destination AWS Region", "correct": false }
      ],
      "explanation": "Correct option: Create new resources in the destination Region and migrate data/applications. There is no off-the-shelf service to move entire IT resources across regions; AWS DMS only helps with databases, CloudFormation provisions infrastructure but doesn't move data, Support does not perform migrations.",
      "domain": "Technology"
    },
    {
      "questionNumber": 15,
      "questionText": "Which of the following AWS services have data encryption automatically enabled? (Select two)?",
      "options": [
        { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": true },
        { "text": "Amazon Elastic Block Store (Amazon EBS)", "correct": false },
        { "text": "AWS Storage Gateway", "correct": true },
        { "text": "Amazon Redshift", "correct": false },
        { "text": "Amazon Elastic File System (Amazon EFS)", "correct": false }
      ],
      "explanation": "Correct options: Amazon S3 (all buckets have default encryption with SSE-S3) and AWS Storage Gateway (all data transferred between gateway and AWS is encrypted using SSL). EBS, Redshift, and EFS encryption are optional, not automatic.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 16,
      "questionText": "Which Amazon Route 53 routing policy would you use when you want to route your traffic in an active-passive configuration?",
      "options": [
        { "text": "Weighted routing", "correct": false },
        { "text": "Latency-based routing", "correct": false },
        { "text": "Failover routing", "correct": true },
        { "text": "Simple routing", "correct": false }
      ],
      "explanation": "Correct option: Failover routing. It routes traffic to primary resource when healthy, and to secondary when primary is unhealthy (active-passive). Weighted distributes traffic, latency-based routes to lowest latency, simple routes to single resource.",
      "domain": "Technology"
    },
    {
      "questionNumber": 17,
      "questionText": "Which of the following are recommended best practices for AWS Identity and Access Management (AWS IAM) service? (Select two)",
      "options": [
        { "text": "Rotate credentials regularly", "correct": true },
        { "text": "Enable multi-factor authentication (MFA) for all users", "correct": true },
        { "text": "Grant maximum privileges to avoid assigning privileges again", "correct": false },
        { "text": "Share AWS account root user access keys with other administrators", "correct": false },
        { "text": "Create a minimum number of accounts and share these account credentials among employees", "correct": false }
      ],
      "explanation": "Correct options: Rotate credentials regularly and enable MFA for all users. Grant least privilege, never share root access keys, and avoid sharing accounts; create individual IAM users.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 18,
      "questionText": "Under the AWS Shared Responsibility Model, which of the following is the responsibility of a customer regarding AWS Lambda?",
      "options": [
        { "text": "Configure networking infrastructure for the AWS Lambda functions", "correct": false },
        { "text": "Maintain versions of an AWS Lambda function", "correct": true },
        { "text": "Maintain all runtime environments for AWS Lambda functions", "correct": false },
        { "text": "Patch underlying OS for the AWS Lambda function infrastructure", "correct": false }
      ],
      "explanation": "Correct option: Maintain versions of an AWS Lambda function. Customer is responsible for code, versions, and IAM permissions. AWS manages runtime, OS, and infrastructure.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 19,
      "questionText": "Which of the following statements is correct regarding the Amazon Elastic File System (Amazon EFS) storage service?",
      "options": [
        { "text": "EC2 instances can access files on an Amazon Elastic File System (Amazon EFS) file system across many Availability Zones (AZ) and VPCs but not across Regions", "correct": false },
        { "text": "EC2 instances can access files on an Amazon Elastic File System (Amazon EFS) file system across many Availability Zones (AZ) but not across VPCs and Regions", "correct": false },
        { "text": "EC2 instances can access files on an Amazon Elastic File System (Amazon EFS) file system only in one Availability Zone (AZ)", "correct": false },
        { "text": "EC2 instances can access files on an Amazon Elastic File System (Amazon EFS) file system across many Availability Zones (AZ), Regions and VPCs", "correct": true }
      ],
      "explanation": "Correct option: EFS can be accessed across AZs, Regions (via VPC peering or transit gateway), and VPCs. EFS is a regional service that stores data across multiple AZs, and cross-region access is possible with appropriate networking.",
      "domain": "Technology"
    },
    {
      "questionNumber": 20,
      "questionText": "Which of the following statements are CORRECT about the AWS Auto Scaling group? (Select two)",
      "options": [
        { "text": "Auto Scaling group scales in and reduces the number of Amazon EC2 instances to match a decrease in demand", "correct": true },
        { "text": "Auto Scaling group scales down and downgrades to a less powerful Amazon EC2 instance to match a decrease in demand", "correct": false },
        { "text": "Auto Scaling group scales out and adds more number of Amazon EC2 instances to match an increase in demand", "correct": true },
        { "text": "Auto Scaling group scales up and upgrades to a more powerful Amazon EC2 instance to match an increase in demand", "correct": false },
        { "text": "Auto Scaling group scales down and reduces the number of Amazon EC2 instances to match a decrease in demand", "correct": false }
      ],
      "explanation": "Correct options: Scale out (add instances) for increase in demand, scale in (remove instances) for decrease in demand. Auto Scaling groups do not scale up/down (changing instance type); that is vertical scaling.",
      "domain": "Technology"
    },
    {
      "questionNumber": 21,
      "questionText": "Which of the following is correct regarding the AWS Shield Advanced pricing?",
      "options": [
        { "text": "AWS Shield Advanced offers protection against higher fees that could result from a DDoS attack", "correct": true },
        { "text": "AWS Shield Advanced is a free service for AWS Enterprise Support plan", "correct": false },
        { "text": "AWS Shield Advanced is a free service for all AWS Support plans", "correct": false },
        { "text": "AWS Shield Advanced is a free service for AWS Business Support plan", "correct": false }
      ],
      "explanation": "Correct option: Shield Advanced offers cost protection against spikes in AWS bills due to DDoS attacks. It is a paid service for all customers, regardless of support plan.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 22,
      "questionText": "A financial services enterprise plans to enable Multi-Factor Authentication (MFA) for its employees. For ease of travel, they prefer not to use any physical devices to implement Multi-Factor Authentication (MFA). Which of the below options is best suited for this use case?",
      "options": [
        { "text": "U2F security key", "correct": false },
        { "text": "Virtual Multi-Factor Authentication (MFA) device", "correct": true },
        { "text": "Soft Token Multi-Factor Authentication (MFA) device", "correct": false },
        { "text": "Hardware Multi-Factor Authentication (MFA) device", "correct": false }
      ],
      "explanation": "Correct option: Virtual MFA device (software app on phone, e.g., Google Authenticator). U2F key and hardware device are physical; Soft Token is not a standard AWS term.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 23,
      "questionText": "Which of the following improves the availability for a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances?",
      "options": [
        { "text": "Deploy the Amazon Elastic Compute Cloud (Amazon EC2) instances in the same Availability Zone (AZ) across two different AWS Regions", "correct": false },
        { "text": "Deploy the Amazon Elastic Compute Cloud (Amazon EC2) instances in the same Availability Zone (AZ) of an AWS Region", "correct": false },
        { "text": "Deploy the Amazon Elastic Compute Cloud (Amazon EC2) instances across different Availability Zones (AZ) in the same AWS Region", "correct": true },
        { "text": "Deploy the Amazon Elastic Compute Cloud (Amazon EC2) instances across different AWS Regions of the same Availability Zone (AZ)", "correct": false }
      ],
      "explanation": "Correct option: Deploy across different AZs in the same region. This provides high availability by avoiding a single AZ failure. Same AZ does not improve availability, and AZs cannot span regions.",
      "domain": "Technology"
    },
    {
      "questionNumber": 24,
      "questionText": "What is the primary benefit of deploying an Amazon Relational Database Service (Amazon RDS) database in a Read Replica configuration?",
      "options": [
        { "text": "Read Replica protects the database from a regional failure", "correct": false },
        { "text": "Read Replica enhances database availability", "correct": false },
        { "text": "Read Replica reduces database usage costs", "correct": false },
        { "text": "Read Replica improves database scalability", "correct": true }
      ],
      "explanation": "Correct option: Improves database scalability (horizontal scaling for read-heavy workloads). Read replicas do not provide automatic failover (Multi-AZ does), do not protect against regional failure (Multi-Region does), and add cost.",
      "domain": "Technology"
    },
    {
      "questionNumber": 25,
      "questionText": "Which of the following is a part of the AWS Global Infrastructure?",
      "options": [
        { "text": "Subnet", "correct": false },
        { "text": "Virtual Private Network (VPN)", "correct": false },
        { "text": "AWS Region", "correct": true },
        { "text": "Virtual Private Cloud (VPC)", "correct": false }
      ],
      "explanation": "Correct option: AWS Region. Regions are physical locations with data centers. Subnets and VPCs are virtual networking constructs, VPN is a connection method.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 26,
      "questionText": "Which AWS service can be used to automate code deployment to Amazon Elastic Compute Cloud (Amazon EC2) instances as well as on-premises instances?",
      "options": [
        { "text": "AWS CodePipeline", "correct": false },
        { "text": "AWS CloudFormation", "correct": false },
        { "text": "AWS CodeDeploy", "correct": true },
        { "text": "AWS CodeCommit", "correct": false }
      ],
      "explanation": "Correct option: AWS CodeDeploy. It automates code deployments to EC2 and on-premises instances. CodePipeline orchestrates release process, CloudFormation provisions infrastructure, CodeCommit is source control.",
      "domain": "Technology"
    },
    {
      "questionNumber": 27,
      "questionText": "Which of the following AWS services are regional in scope? (Select two)",
      "options": [
        { "text": "AWS Web Application Firewall (AWS WAF)", "correct": false },
        { "text": "AWS Lambda", "correct": true },
        { "text": "Amazon Rekognition", "correct": true },
        { "text": "Amazon CloudFront", "correct": false },
        { "text": "AWS Identity and Access Management (AWS IAM)", "correct": false }
      ],
      "explanation": "Correct options: AWS Lambda and Amazon Rekognition are regional services. WAF, CloudFront, and IAM are global. (Note: S3 buckets are regional but namespace is global; not listed here.)",
      "domain": "Technology"
    },
    {
      "questionNumber": 28,
      "questionText": "As a Cloud Practitioner, which Amazon Simple Storage Service (Amazon S3) storage class would you recommend for data archival?",
      "options": [
        { "text": "Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)", "correct": false },
        { "text": "Amazon S3 Standard", "correct": false },
        { "text": "Amazon S3 Intelligent-Tiering", "correct": false },
        { "text": "Amazon S3 Glacier Flexible Retrieval", "correct": true }
      ],
      "explanation": "Correct option: S3 Glacier Flexible Retrieval (formerly S3 Glacier). It is designed for archival and long-term backup with low cost and retrieval times of minutes to hours. One Zone-IA is for infrequent access but not archival, Standard is for frequent access, Intelligent-Tiering is for unknown patterns.",
      "domain": "Technology"
    },
    {
      "questionNumber": 29,
      "questionText": "A research lab wants to optimize the caching capabilities for its scientific computations application running on Amazon Elastic Compute Cloud (Amazon EC2) instances. Which Amazon Elastic Compute Cloud (Amazon EC2) storage option is best suited for this use-case?",
      "options": [
        { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": false },
        { "text": "Instance Store", "correct": true },
        { "text": "Amazon Elastic Block Store (Amazon EBS)", "correct": false },
        { "text": "Amazon Elastic File System (Amazon EFS)", "correct": false }
      ],
      "explanation": "Correct option: Instance Store (ephemeral, high-performance, physically attached to host). Ideal for caching and temporary data. EBS, EFS, S3 are not as performant for low-latency caching.",
      "domain": "Technology"
    },
    {
      "questionNumber": 30,
      "questionText": "Which AWS service can be used for online analytical processing?",
      "options": [
        { "text": "Amazon DynamoDB", "correct": false },
        { "text": "Amazon ElastiCache", "correct": false },
        { "text": "Amazon Relational Database Service (Amazon RDS)", "correct": false },
        { "text": "Amazon Redshift", "correct": true }
      ],
      "explanation": "Correct option: Amazon Redshift (data warehouse for OLAP). DynamoDB and RDS are for OLTP, ElastiCache is in-memory caching.",
      "domain": "Technology"
    },
    {
      "questionNumber": 31,
      "questionText": "An IT company has deployed a static website on Amazon Simple Storage Service (Amazon S3), but the website is still inaccessible. As a Cloud Practioner, which of the following solutions would you suggest to address this issue?",
      "options": [
        { "text": "Enable Amazon S3 replication", "correct": false },
        { "text": "Fix the Amazon S3 bucket policy", "correct": true },
        { "text": "Enable Amazon S3 versioning", "correct": false },
        { "text": "Disable Amazon S3 encryption", "correct": false }
      ],
      "explanation": "Correct option: Fix the bucket policy (ensure public read access or proper permissions). Replication, versioning, and encryption do not affect public accessibility for static websites.",
      "domain": "Technology"
    },
    {
      "questionNumber": 32,
      "questionText": "An AWS user is trying to launch an Amazon Elastic Compute Cloud (Amazon EC2) instance in a given region. What is the region-specific constraint that the Amazon Machine Image (AMI) must meet so that it can be used for this Amazon Elastic Compute Cloud (Amazon EC2) instance?",
      "options": [
        { "text": "You must use an Amazon Machine Image (AMI) from the same region as that of the Amazon EC2 instance. The region of the Amazon Machine Image (AMI) has no bearing on the performance of the Amazon EC2 instance", "correct": true },
        { "text": "You should use an Amazon Machine Image (AMI) from the same region, as it improves the performance of the Amazon EC2 instance", "correct": false },
        { "text": "You can use an Amazon Machine Image (AMI) from a different region, but it degrades the performance of the Amazon EC2 instance", "correct": false },
        { "text": "An Amazon Machine Image (AMI) is a global entity, so the region is not applicable", "correct": false }
      ],
      "explanation": "Correct option: AMI must be in the same region, but region does not affect performance. AMIs are regional, not global; you can copy AMIs across regions.",
      "domain": "Technology"
    },
    {
      "questionNumber": 33,
      "questionText": "According to the AWS Shared Responsibility Model, which of the following are the responsibilities of the customer? (Select two)",
      "options": [
        { "text": "Ensuring AWS employees cannot access customer data", "correct": false },
        { "text": "Compliance validation of Cloud infrastructure", "correct": false },
        { "text": "Managing IAM users and roles", "correct": true },
        { "text": "AWS Global Network Security", "correct": false },
        { "text": "Operating system patches and updates of an Amazon Elastic Compute Cloud (Amazon EC2) instance", "correct": true }
      ],
      "explanation": "Correct options: Managing IAM users/roles and patching guest OS on EC2. AWS is responsible for global network security, compliance validation of infrastructure, and ensuring AWS employees cannot access customer data.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 34,
      "questionText": "An IT company is on a cost-optimization spree and wants to identify all Amazon Elastic Compute Cloud (Amazon EC2) instances that are under-utilized. Which AWS services can be used off-the-shelf to address this use-case without needing any manual configurations? (Select two)",
      "options": [
        { "text": "AWS Cost & Usage Report (AWS CUR)", "correct": false },
        { "text": "AWS Cost Explorer", "correct": true },
        { "text": "AWS Trusted Advisor", "correct": true },
        { "text": "Amazon CloudWatch", "correct": false },
        { "text": "AWS Budgets", "correct": false }
      ],
      "explanation": "Correct options: AWS Trusted Advisor (underutilized EC2 instances check) and AWS Cost Explorer (rightsizing recommendations). CUR requires analysis, CloudWatch needs manual alarms, Budgets is for cost alerts.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 35,
      "questionText": "A cyber-security agency uses AWS Cloud and wants to carry out security assessments on its own AWS infrastructure without any prior approval from AWS. Which of the following describes/facilitates this practice?",
      "options": [
        { "text": "Network Stress Testing", "correct": false },
        { "text": "AWS Secrets Manager", "correct": false },
        { "text": "Penetration Testing", "correct": true },
        { "text": "Amazon Inspector", "correct": false }
      ],
      "explanation": "Correct option: Penetration testing. AWS allows customers to perform penetration tests on their own infrastructure without prior approval for certain services. Network stress testing is different, Secrets Manager manages secrets, Inspector is automated assessment.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 36,
      "questionText": "Which AWS service can be used to execute code triggered by new files being uploaded to Amazon Simple Storage Service (Amazon S3)?",
      "options": [
        { "text": "AWS Lambda", "correct": true },
        { "text": "Amazon Elastic Container Service (Amazon ECS)", "correct": false },
        { "text": "Amazon Simple Queue Service (Amazon SQS)", "correct": false },
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": false }
      ],
      "explanation": "Correct option: AWS Lambda. It can be triggered by S3 events (object creation) to process data. ECS and EC2 require custom setup, SQS can receive events but not execute code.",
      "domain": "Technology"
    },
    {
      "questionNumber": 37,
      "questionText": "A leading research firm needs to access information available in old patents and documents (such as PDFs, Text Files, Word documents, etc) present in its huge knowledge base. The firm is looking for a powerful search tool that can dig into these knowledge resources and return the most relevant files/documents. Which of the following is the correct service to address this requirement?",
      "options": [
        { "text": "Amazon Kendra", "correct": true },
        { "text": "Amazon Personalize", "correct": false },
        { "text": "Amazon Lex", "correct": false },
        { "text": "Amazon Comprehend", "correct": false }
      ],
      "explanation": "Correct option: Amazon Kendra (intelligent search service, ML-powered). Personalize is for recommendations, Lex for chatbots, Comprehend for NLP text analysis.",
      "domain": "Technology"
    },
    {
      "questionNumber": 38,
      "questionText": "Which of the following use cases is best suited for Amazon EFS Standard-Infrequent Access (EFS Standard-IA) storage class?",
      "options": [
        { "text": "Storing files in an accessible location to satisfy audit requirements", "correct": true },
        { "text": "Object storage for workloads that need sub-second latency speeds for accessing the data", "correct": false },
        { "text": "Use as boot volume for highly available Amazon Elastic Compute Cloud (Amazon EC2) instances", "correct": false },
        { "text": "Storing data in a single AWS Availability Zone (AZ)", "correct": false }
      ],
      "explanation": "Correct option: Storing files for audit requirements (infrequent access but must be accessible). EFS Standard-IA is for files not accessed daily but needs immediate access. Object storage would be S3, boot volumes are EBS, single AZ is EFS One Zone-IA.",
      "domain": "Technology"
    },
    {
      "questionNumber": 39,
      "questionText": "As per the AWS Shared Responsibility Model, Security and Compliance is a shared responsibility between AWS and the customer. Which of the following security services/utilities falls under the purview of AWS under the AWS Shared Responsibility Model?",
      "options": [
        { "text": "AWS Shield Standard", "correct": true },
        { "text": "AWS Web Application Firewall (AWS WAF)", "correct": false },
        { "text": "AWS Shield Advanced", "correct": false },
        { "text": "Security group", "correct": false }
      ],
      "explanation": "Correct option: AWS Shield Standard (automatically enabled for all customers, no configuration). WAF and Shield Advanced require customer enablement and configuration, security groups are customer-configured.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 40,
      "questionText": "Which AWS services/features support High Availability by default? (Select two)",
      "options": [
        { "text": "Amazon Elastic File System (Amazon EFS)", "correct": true },
        { "text": "Subnet", "correct": false },
        { "text": "Amazon Elastic Block Store (Amazon EBS)", "correct": false },
        { "text": "Instance Store", "correct": false },
        { "text": "Amazon DynamoDB", "correct": true }
      ],
      "explanation": "Correct options: Amazon DynamoDB (automatically replicates across multiple AZs) and Amazon EFS (regional service storing data across multiple AZs). Subnets, EBS, Instance Store are AZ-specific.",
      "domain": "Technology"
    },
    {
      "questionNumber": 41,
      "questionText": "Which Amazon Simple Storage Service (Amazon S3) storage class offers the lowest availability?",
      "options": [
        { "text": "Amazon S3 Glacier Flexible Retrieval", "correct": false },
        { "text": "Amazon S3 Intelligent-Tiering", "correct": false },
        { "text": "Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)", "correct": true },
        { "text": "Amazon S3 Standard", "correct": false }
      ],
      "explanation": "Correct option: S3 One Zone-IA (stores data in a single AZ, offers 99.5% availability). Standard and Intelligent-Tiering have 99.9% availability, Glacier is for archival.",
      "domain": "Technology"
    },
    {
      "questionNumber": 42,
      "questionText": "Compared to the on-demand instance prices, what is the highest possible discount offered for reserved instances (RI)?",
      "options": [
        { "text": "50", "correct": false },
        { "text": "40", "correct": false },
        { "text": "90", "correct": false },
        { "text": "72", "correct": true }
      ],
      "explanation": "Correct option: 72% (for 3-year all upfront RIs). Spot instances can offer up to 90% but are not reserved instances.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 43,
      "questionText": "An organization maintains separate Amazon Virtual Private Clouds (Amazon VPC) for each of its departments. With expanding business, the organization now wants to connect all Amazon Virtual Private Clouds (Amazon VPC) for better departmental collaboration. Which AWS service will help the organization tackle the issue effectively?",
      "options": [
        { "text": "AWS Transit Gateway", "correct": true },
        { "text": "AWS Site-to-Site VPN", "correct": false },
        { "text": "VPC peering connection", "correct": false },
        { "text": "AWS Direct Connect", "correct": false }
      ],
      "explanation": "Correct option: AWS Transit Gateway (central hub for connecting multiple VPCs). VPC peering is not transitive and becomes complex, Direct Connect and Site-to-Site VPN are for on-premises connections.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 44,
      "questionText": "An AWS hardware failure has impacted one of your Amazon Elastic Block Store (Amazon EBS) volumes. Which AWS service will alert you of the affected resources and provide a remedial action?",
      "options": [
        { "text": "AWS Config", "correct": false },
        { "text": "AWS Health Dashboard – Your account health", "correct": true },
        { "text": "Amazon GuardDuty", "correct": false },
        { "text": "AWS Trusted Advisor", "correct": false }
      ],
      "explanation": "Correct option: AWS Health Dashboard – Your account health provides personalized alerts and remediation guidance for AWS hardware failures. Config tracks configuration, GuardDuty detects threats, Trusted Advisor gives best practices.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 45,
      "questionText": "An e-commerce company uses AWS Cloud and would like to receive separate invoices for development and production environments. As a Cloud Practioner, which of the following solutions would you recommend for this use-case?",
      "options": [
        { "text": "Create separate AWS accounts for development and production environments to receive separate invoices", "correct": true },
        { "text": "Use AWS Cost Explorer to create separate invoices for development and production environments", "correct": false },
        { "text": "Use AWS Organizations to create separate invoices for development and production environments", "correct": false },
        { "text": "Tag all resources in the AWS account as either development or production. Then use the tags to create separate invoices", "correct": false }
      ],
      "explanation": "Correct option: Create separate AWS accounts. Each account gets its own invoice. Cost Explorer and AWS Organizations do not create separate invoices; tags cannot generate separate invoices.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 46,
      "questionText": "A medical device company is looking for a durable and cost-effective way of storing their historic data. Due to compliance requirements, the data must be stored for 10 years. Which AWS Storage solution will you suggest?",
      "options": [
        { "text": "AWS Storage Gateway", "correct": false },
        { "text": "Amazon S3 Glacier Flexible Retrieval", "correct": false },
        { "text": "Amazon S3 Glacier Deep Archive", "correct": true },
        { "text": "Amazon Elastic File System (Amazon EFS)", "correct": false }
      ],
      "explanation": "Correct option: S3 Glacier Deep Archive (lowest-cost storage for long-term retention of 7-10+ years). Glacier Flexible Retrieval is also archival but more expensive. Storage Gateway and EFS are not archival solutions.",
      "domain": "Technology"
    },
    {
      "questionNumber": 47,
      "questionText": "Which of the following AWS services specialize in data migration from on-premises to AWS Cloud? (Select two)",
      "options": [
        { "text": "AWS Site-to-Site VPN", "correct": false },
        { "text": "AWS Transit Gateway", "correct": false },
        { "text": "AWS Direct Connect", "correct": false },
        { "text": "AWS Database Migration Service (AWS DMS)", "correct": true },
        { "text": "AWS Snowball", "correct": true }
      ],
      "explanation": "Correct options: AWS DMS (database migration) and AWS Snowball (physical data transfer). Site-to-Site VPN, Transit Gateway, Direct Connect are networking/connectivity services, not specialized for data migration.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 48,
      "questionText": "Which of the following is the best way to protect your data from accidental deletion on Amazon S3?",
      "options": [
        { "text": "Amazon S3 lifecycle configuration", "correct": false },
        { "text": "Amazon S3 Transfer Acceleration (Amazon S3TA)", "correct": false },
        { "text": "Amazon S3 storage classes", "correct": false },
        { "text": "Amazon S3 Versioning", "correct": true }
      ],
      "explanation": "Correct option: S3 Versioning (keeps multiple versions of objects, allows recovery from accidental deletion). Lifecycle policies manage transitions/expiration, Transfer Acceleration speeds uploads, storage classes are for cost optimization.",
      "domain": "Technology"
    },
    {
      "questionNumber": 49,
      "questionText": "A company has a static website hosted on an Amazon Simple Storage Service (Amazon S3) bucket in an AWS Region in Asia. Although most of its users are in Asia, now it wants to drive growth globally. How can it improve the global performance of its static website?",
      "options": [
        { "text": "Use Amazon S3 Transfer Acceleration (Amazon S3TA) to improve the performance of your website", "correct": false },
        { "text": "Use Amazon CloudFormation to improve the performance of your website", "correct": false },
        { "text": "Use AWS Web Application Firewall (AWS WAF) to improve the performance of your website", "correct": false },
        { "text": "Use Amazon CloudFront to improve the performance of your website", "correct": true }
      ],
      "explanation": "Correct option: Amazon CloudFront (CDN) caches content at edge locations globally, reducing latency. S3TA speeds uploads, not global delivery; CloudFormation and WAF do not improve performance.",
      "domain": "Technology"
    },
    {
      "questionNumber": 50,
      "questionText": "Which pillar of the AWS Well-Architected Framework recommends maintaining infrastructure as code (IaC)?",
      "options": [
        { "text": "Operational Excellence", "correct": true },
        { "text": "Cost Optimization", "correct": false },
        { "text": "Performance Efficiency", "correct": false },
        { "text": "Security", "correct": false }
      ],
      "explanation": "Correct option: Operational Excellence (includes IaC as a best practice). Cost Optimization, Performance Efficiency, Security are other pillars but not directly associated with IaC.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 51,
      "questionText": "Which of the following are correct statements regarding the AWS Shared Responsibility Model? (Select two)",
      "options": [
        { "text": "For abstracted services like Amazon S3, AWS operates the infrastructure layer, the operating system, and platforms", "correct": true },
        { "text": "Configuration Management is the responsibility of the customer", "correct": false },
        { "text": "For a service like Amazon EC2, that falls under Infrastructure as a Service (IaaS), AWS is responsible for maintaining guest operating system", "correct": false },
        { "text": "AWS is responsible for training AWS and customer employees on AWS products and services", "correct": false },
        { "text": "AWS is responsible for Security 'of' the Cloud", "correct": true }
      ],
      "explanation": "Correct options: AWS operates infrastructure for abstracted services (S3), and AWS is responsible for security of the cloud. Configuration management is shared, guest OS for EC2 is customer responsibility, and training is shared (AWS trains its employees, customer trains theirs).",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 52,
      "questionText": "Which feature of AWS Cloud offers the ability to innovate faster and rapidly develop, test and launch software applications?",
      "options": [
        { "text": "Ability to deploy globally in minutes", "correct": false },
        { "text": "Elasticity", "correct": false },
        { "text": "Agility", "correct": true },
        { "text": "Cost savings", "correct": false }
      ],
      "explanation": "Correct option: Agility (ability to quickly develop, test, and launch applications). Global deployment is about reach, elasticity about scaling, cost savings about financial benefits.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 53,
      "questionText": "Which of the following AWS entities provides the information required to launch an Amazon Elastic Compute Cloud (Amazon EC2) instance?",
      "options": [
        { "text": "AWS Lambda", "correct": false },
        { "text": "Amazon Elastic File System (Amazon EFS)", "correct": false },
        { "text": "Amazon Machine Image (AMI)", "correct": true },
        { "text": "Amazon Elastic Block Store (Amazon EBS)", "correct": false }
      ],
      "explanation": "Correct option: Amazon Machine Image (AMI). It contains OS, application server, and launch permissions. Lambda is compute, EFS is file storage, EBS is block storage.",
      "domain": "Technology"
    },
    {
      "questionNumber": 54,
      "questionText": "A customer is running a comparative study of pricing models of Amazon EFS and Amazon Elastic Block Store (Amazon EBS) that are used with the Amazon EC2 instances that host the application. Which of the following statements are correct regarding this use-case? (Select two)",
      "options": [
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2) data transfer charges will apply for all Amazon Elastic Block Store (Amazon EBS) direct APIs for Snapshots", "correct": false },
        { "text": "You will pay a fee each time you read from or write data stored on the Amazon Elastic File System (Amazon EFS) - Infrequent Access storage class", "correct": true },
        { "text": "Amazon Elastic Block Store (Amazon EBS) Snapshots are stored incrementally, which means you are billed only for the changed blocks stored", "correct": true },
        { "text": "Amazon Elastic Block Store (Amazon EBS) Snapshot storage pricing is based on the amount of space your data consumes in Amazon Elastic Block Store (Amazon EBS)", "correct": false },
        { "text": "With AWS Backup, you pay only for the amount of Amazon Elastic File System (Amazon EFS) backup storage you use in a month, you need not pay for restoring this data", "correct": false }
      ],
      "explanation": "Correct options: EFS-IA charges per read/write, and EBS snapshots are incremental (only changed blocks billed). Data transfer charges apply only for cross-region/external; snapshot storage is in S3, not EBS; AWS Backup charges for restore as well.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 55,
      "questionText": "AWS Identity and Access Management (AWS IAM) policies are written as JSON documents. Which of the following are mandatory elements of an IAM policy?",
      "options": [
        { "text": "Sid, Principal", "correct": false },
        { "text": "Action, Condition", "correct": false },
        { "text": "Effect, Action", "correct": true },
        { "text": "Effect, Sid", "correct": false }
      ],
      "explanation": "Correct option: Effect (Allow/Deny) and Action are mandatory. Sid is optional, Principal is required only for resource-based policies, Condition is optional.",
      "domain": "Technology"
    },
    {
      "questionNumber": 56,
      "questionText": "An IT company has a hybrid cloud architecture and it wants to centralize the server logs for its Amazon Elastic Compute Cloud (Amazon EC2) instances and on-premises servers. Which of the following is the MOST effective for this use-case?",
      "options": [
        { "text": "Use Amazon CloudWatch Logs for the Amazon Elastic Compute Cloud (Amazon EC2) instance and AWS CloudTrail for the on-premises servers", "correct": false },
        { "text": "Use AWS Lambda to send log data from Amazon Elastic Compute Cloud (Amazon EC2) instance as well as on-premises servers to Amazon CloudWatch Logs", "correct": false },
        { "text": "Use Amazon CloudWatch Logs for both the Amazon Elastic Compute Cloud (Amazon EC2) instance and the on-premises servers", "correct": true },
        { "text": "Use AWS CloudTrail for the Amazon Elastic Compute Cloud (Amazon EC2) instance and Amazon CloudWatch Logs for the on-premises servers", "correct": false }
      ],
      "explanation": "Correct option: Use CloudWatch Logs for both (supports on-premises via CloudWatch agent). CloudTrail is for API logging, not system logs. Lambda could be used but is not the most effective off-the-shelf solution.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 57,
      "questionText": "A financial services company must meet compliance requirements that mandate storing multiple copies of data in geographically distant locations. As the company uses Amazon Simple Storage Service (Amazon S3) as its main storage service, which of the following represents the MOST resource-efficient solution for this use-case?",
      "options": [
        { "text": "Run a daily job on an Amazon Elastic Compute Cloud (Amazon EC2) instance to copy objects into another Region", "correct": false },
        { "text": "Use S3 same-region replication (S3 SRR) to replicate data between distant AWS Regions", "correct": false },
        { "text": "Use S3 cross-region replication (S3 CRR) to replicate data between distant AWS Regions", "correct": true },
        { "text": "For every new object, trigger an AWS Lambda function to write data into a bucket in another AWS Region", "correct": false }
      ],
      "explanation": "Correct option: S3 cross-region replication (S3 CRR) – automatic, asynchronous copying across regions. Same-region replication does not copy to distant regions; EC2 job and Lambda are less resource-efficient.",
      "domain": "Technology"
    },
    {
      "questionNumber": 58,
      "questionText": "Which of the following Cloud Computing models does the 'gmail' service represent?",
      "options": [
        { "text": "Infrastructure as a service (IaaS)", "correct": false },
        { "text": "Platform as a service (PaaS)", "correct": false },
        { "text": "Function as a service (FaaS)", "correct": false },
        { "text": "Software as a service (SaaS)", "correct": true }
      ],
      "explanation": "Correct option: SaaS (Software as a Service). Gmail is a complete product managed by the provider. IaaS (EC2), PaaS (Elastic Beanstalk), FaaS (Lambda).",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 59,
      "questionText": "Which AWS service will you use if you have to move large volumes of on-premises data to AWS Cloud from a remote location with limited bandwidth?",
      "options": [
        { "text": "AWS Transit Gateway", "correct": false },
        { "text": "AWS Virtual Private Network (VPN)", "correct": false },
        { "text": "AWS Snowball", "correct": true },
        { "text": "AWS Direct Connect", "correct": false }
      ],
      "explanation": "Correct option: AWS Snowball (physical data transport device). VPN and Direct Connect require bandwidth; Transit Gateway is for networking.",
      "domain": "Technology"
    },
    {
      "questionNumber": 60,
      "questionText": "A research group wants to provision an Amazon Elastic Compute Cloud (Amazon EC2) instance for a flexible application that can be interrupted. As a Cloud Practitioner, which of the following would you recommend as the MOST cost-optimal option?",
      "options": [
        { "text": "Reserved Instance (RI)", "correct": false },
        { "text": "Dedicated Host", "correct": false },
        { "text": "Spot Instance", "correct": true },
        { "text": "On-Demand Instance", "correct": false }
      ],
      "explanation": "Correct option: Spot Instance (up to 90% discount, but can be interrupted). RIs are for long-term steady state, Dedicated Hosts are for licensing, On-Demand is not cheapest.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 61,
      "questionText": "Which of the following are components of an AWS Site-to-Site VPN? (Select two)",
      "options": [
        { "text": "Virtual private gateway (VGW)", "correct": true },
        { "text": "Network Address Translation gateway (NAT gateway)", "correct": false },
        { "text": "Internet gateway", "correct": false },
        { "text": "Customer gateway", "correct": true },
        { "text": "AWS storage gateway", "correct": false }
      ],
      "explanation": "Correct options: Virtual private gateway (on AWS side) and customer gateway (on-premises side). NAT gateway, internet gateway, storage gateway are not components of Site-to-Site VPN.",
      "domain": "Technology"
    },
    {
      "questionNumber": 62,
      "questionText": "AWS Trusted Advisor analyzes your AWS environment and provides best practice recommendations for which of the following categories? (Select two)",
      "options": [
        { "text": "Elasticity", "correct": false },
        { "text": "Cost Optimization", "correct": true },
        { "text": "Change Management", "correct": false },
        { "text": "Documentation", "correct": false },
        { "text": "Service Limits", "correct": true }
      ],
      "explanation": "Correct options: Cost Optimization and Service Limits. Other categories: Performance, Security, Fault Tolerance. Elasticity, Change Management, Documentation are not Trusted Advisor categories.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 63,
      "questionText": "Amazon CloudWatch billing metric data is stored in which AWS Region?",
      "options": [
        { "text": "In the AWS Region where the AWS resource is provisioned", "correct": false },
        { "text": "In the AWS Region where the AWS account is created", "correct": false },
        { "text": "US West (N. California) - us-west-1", "correct": false },
        { "text": "US East (N. Virginia) - us-east-1", "correct": true }
      ],
      "explanation": "Correct option: US East (N. Virginia) – us-east-1. Billing metric data for all regions is stored here.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 64,
      "questionText": "Which of the following AWS services offer block-level storage? (Select two)",
      "options": [
        { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": false },
        { "text": "Instance Store", "correct": true },
        { "text": "Amazon Elastic Container Service (Amazon ECS)", "correct": false },
        { "text": "Amazon Elastic File System (Amazon EFS)", "correct": false },
        { "text": "Amazon Elastic Block Store (Amazon EBS)", "correct": true }
      ],
      "explanation": "Correct options: Amazon EBS (block storage) and Instance Store (temporary block storage). S3 is object storage, EFS is file storage, ECS is container orchestration.",
      "domain": "Technology"
    },
    {
      "questionNumber": 65,
      "questionText": "A startup has just moved its IT infrastructure to AWS Cloud. The CTO would like to receive detailed reports that break down the startup's AWS costs by the hour in an Amazon Simple Storage Service (Amazon S3) bucket. As a Cloud Practitioner, which AWS service would you recommend for this use-case?",
      "options": [
        { "text": "AWS Cost Explorer", "correct": false },
        { "text": "AWS Budgets", "correct": false },
        { "text": "AWS Cost & Usage Report (AWS CUR)", "correct": true },
        { "text": "AWS Pricing Calculator", "correct": false }
      ],
      "explanation": "Correct option: AWS Cost & Usage Report (CUR) – most detailed, can be delivered to S3. Cost Explorer visualizes but does not deliver hourly reports to S3, Budgets alerts, Pricing Calculator estimates.",
      "domain": "Billing and Pricing"
    }
  ]
};

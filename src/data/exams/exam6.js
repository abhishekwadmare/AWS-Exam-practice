export const EXAM_DATA = {
  examNumber: 6,
  title: "Practice Test #6 - AWS Certified Cloud Practitioner",
  description: "Full practice exam with 65 questions covering AWS Cloud Concepts, Technology, Security, and Billing & Pricing.",
  questions: [
    {
      "questionNumber": 1,
      "questionText": "A healthcare company wants to implement a continuous replication based disaster recovery mechanism and provide fast, reliable recovery of physical, virtual, and cloud-based servers into AWS Cloud. Which of the following represents the best-fit solution for this use case?",
      "options": [
        { "text": "AWS Snowball Edge", "correct": false },
        { "text": "AWS Storage Gateway", "correct": false },
        { "text": "CloudEndure Disaster Recovery", "correct": true },
        { "text": "CloudCover Disaster Recovery", "correct": false }
      ],
      "explanation": "Correct option: CloudEndure Disaster Recovery. CloudEndure Disaster Recovery, available from the AWS Marketplace, continuously replicates server-hosted applications and server-hosted databases from any source into AWS using block-level replication of the underlying server. CloudEndure Disaster Recovery enables you to use AWS Cloud as a disaster recovery Region for an on-premises workload and its environment. It can also be used for disaster recovery of AWS hosted workloads if they consist only of applications and databases hosted on EC2 (i.e. not RDS). Features include continuous replication, low-cost staging area, automated machine conversion and orchestration, point-in-time recovery, easy non-disruptive drills, and wide application and infrastructure support. AWS Snowball Edge is for edge computing and data transfer, not continuous replication DR. AWS Storage Gateway provides hybrid cloud storage but not continuous replication DR. CloudCover Disaster Recovery is a made-up option.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 2,
      "questionText": "A company provides you with a completed product that is run and managed by the company itself. As a customer, you only use the product without worrying about maintaining or managing the product. Which cloud computing model does this kind of product belong to?",
      "options": [
        { "text": "Product as a Service (Paas)", "correct": false },
        { "text": "Software as a Service (SaaS)", "correct": true },
        { "text": "Infrastructure as a Service (IaaS)", "correct": false },
        { "text": "Platform as a Service (PaaS)", "correct": false }
      ],
      "explanation": "Correct option: Software as a Service (SaaS). SaaS provides a completed product run and managed by the service provider. You only need to think about how you will use that software, not about maintenance or infrastructure. Common example: web-based email. IaaS provides basic building blocks (networking, computers, storage). PaaS removes underlying infrastructure management so you can focus on application deployment. Product as a Service is a made-up distractor.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 3,
      "questionText": "Which of the following represents the correct scenario where an Auto Scaling group's (ASG) predictive scaling can be effectively used to maintain the required number of AWS resources?",
      "options": [
        { "text": "To manage a fixed number of resources in the Auto Scaling group", "correct": false },
        { "text": "To manage a workload that exhibits recurring load patterns that are specific to the day of the week or the time of day", "correct": true },
        { "text": "To help configure a CloudWatch Amazon Simple Queue Service (Amazon SQS) metric like ApproximateNumberOfMessagesVisible for scaling the group based on the value of the metric", "correct": false },
        { "text": "To help configure a scaling policy to keep the average aggregate CPU utilization of your Auto Scaling group at 40 percent", "correct": false }
      ],
      "explanation": "Correct option: To manage a workload that exhibits recurring load patterns specific to day of week or time of day. Predictive scaling uses machine learning to predict capacity requirements based on historical data, ideal for cyclical traffic, recurring on-and-off workloads, and applications with long initialization times. Target tracking scaling policy is best for keeping CPU utilization at a target value. SQS-based scaling uses backlog per instance metric. Fixed number of resources does not require predictive scaling.",
      "domain": "Technology"
    },
    {
      "questionNumber": 4,
      "questionText": "As part of a flexible pricing model, AWS offers two types of Savings Plans. Which of the following are the Savings Plans from AWS?",
      "options": [
        { "text": "Reserved Instances (RI) Savings Plans, EC2 Instance Savings Plans", "correct": false },
        { "text": "Instance Savings Plans, Storage Savings Plans", "correct": false },
        { "text": "Compute Savings Plans, EC2 Instance Savings Plans", "correct": true },
        { "text": "Compute Savings Plans, Storage Savings Plans", "correct": false }
      ],
      "explanation": "Correct option: Compute Savings Plans, EC2 Instance Savings Plans. Savings Plans offer savings up to 72% on AWS compute usage. Compute Savings Plans provide flexibility across instance families, regions, OS, tenancy, and also apply to Fargate and Lambda (savings up to 66%). EC2 Instance Savings Plans offer higher savings (up to 72%) for commitment to a specific instance family in a region. Reserved Instances are a separate pricing model, not a Savings Plan type. Storage Savings Plans do not exist.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 5,
      "questionText": "Which of the following are the security best practices suggested by AWS for Identity and Access Management (IAM)? (Select two)",
      "options": [
        { "text": "Do not share security credentials between accounts, use IAM roles instead", "correct": true },
        { "text": "Do not change passwords and access keys once created. This results in failure of connectivity in the application logic", "correct": false },
        { "text": "Share your AWS account root user credentials only if absolutely necessary for performing an important billing operation", "correct": false },
        { "text": "Enable AWS Multi-Factor Authentication (AWS MFA) on your AWS root user account. MFA helps give root access to multiple users without actually sharing the root user login credentials", "correct": false },
        { "text": "When you create IAM policies, grant the least privileges required to perform a task", "correct": true }
      ],
      "explanation": "Correct options: Grant least privileges, and do not share credentials between accounts (use IAM roles instead). AWS best practices include: never share root user credentials, enable MFA for root user, rotate passwords and access keys regularly, and grant least privilege. The option about MFA giving root access to multiple users is misleading (MFA adds a second factor, not multi-user access).",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 6,
      "questionText": "Which of the following statements are correct regarding the AWS Support Plans? (Select two)",
      "options": [
        { "text": "AWS Concierge service is available for the AWS Business Support and AWS Enterprise Support plans", "correct": false },
        { "text": "A designated Technical Account Manager is available only for AWS Enterprise Support plan", "correct": true },
        { "text": "Contextual guidance based on customer use-case, is available only for the AWS Enterprise support plan", "correct": false },
        { "text": "Infrastructure Event Management is included for free for AWS Business Support and AWS Enterprise Support plans and can be extended to AWS Developer Support plan for an additional fee", "correct": false },
        { "text": "Both Basic and AWS Developer Support plans have access to the core Trusted Advisor checks only", "correct": true }
      ],
      "explanation": "Correct options: Designated Technical Account Manager (TAM) is only for Enterprise Support plan; Basic and Developer Support plans have access only to core Trusted Advisor checks. AWS Concierge is for Enterprise and qualified Reseller plans. Contextual guidance is available for Business Support and above. Infrastructure Event Management is for Enterprise (and Enterprise On-Ramp) and can be purchased by Business Support, but not extended to Developer Support.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 7,
      "questionText": "Which of the following statements are true about AWS Regions and Availability Zones (AZ)? (Select two)",
      "options": [
        { "text": "All traffic between Availability Zones (AZ) is encrypted", "correct": true },
        { "text": "AWS calls each group of logical data centers as AWS Regions", "correct": false },
        { "text": "Each AWS Region consists of multiple, isolated, and physically separate Availability Zones (AZ) within a geographic area", "correct": true },
        { "text": "An Availability Zone (AZ) is a physical location where AWS clusters the data centers", "correct": false },
        { "text": "Traffic between Availability Zones (AZ) is not encrypted by default, but can be configured from AWS console", "correct": false }
      ],
      "explanation": "Correct options: All traffic between AZs is encrypted, and each Region consists of multiple isolated AZs within a geographic area. AWS calls each group of logical data centers an Availability Zone, not a Region. A Region is a physical location where AWS clusters data centers. Traffic between AZs is encrypted by default (cannot be disabled).",
      "domain": "Technology"
    },
    {
      "questionNumber": 8,
      "questionText": "An organization in the US plans to launch a new product line and needs additional IT infrastructure to support the workload. They want a solution that enables rapid deployment of resources and minimizes setup time. Which advantages of cloud computing can help the organization achieve this goal? (Select two)",
      "options": [
        { "text": "Go global in minutes", "correct": false },
        { "text": "Trade fixed expense for variable expense", "correct": false },
        { "text": "Increase speed and agility", "correct": true },
        { "text": "Benefit from massive economies of scale", "correct": false },
        { "text": "Enable automatic scaling of resources based on demand", "correct": true }
      ],
      "explanation": "Correct options: Increase speed and agility (quick resource provisioning) and enable automatic scaling (resources adjust to demand, no manual intervention). Go global in minutes is about global reach, not rapid deployment in one location. Trade fixed expense for variable expense is about cost model. Massive economies of scale benefit pricing, not speed.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 9,
      "questionText": "Which of the following is the responsibility of the customer when running applications using AWS Lambda?",
      "options": [
        { "text": "Writing and maintaining the function code and its dependencies", "correct": true },
        { "text": "Updating the operating system and runtime environment for Lambda functions", "correct": false },
        { "text": "Configuring the networking infrastructure for the Lambda service", "correct": false },
        { "text": "Managing the physical servers where the Lambda function runs", "correct": false }
      ],
      "explanation": "Correct option: Writing and maintaining function code and dependencies. AWS is responsible for the operating system, runtime environment updates, networking infrastructure, and physical servers (Lambda is serverless). Customer only manages code, dependencies, and IAM permissions.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 10,
      "questionText": "An e-learning company wants to build a knowledge graph by leveraging a fully managed database. Which of the following is the best fit for this requirement?",
      "options": [
        { "text": "Amazon DynamoDB", "correct": false },
        { "text": "Amazon Neptune", "correct": true },
        { "text": "Amazon DocumentDB", "correct": false },
        { "text": "Amazon Relational Database Service (Amazon RDS)", "correct": false }
      ],
      "explanation": "Correct option: Amazon Neptune. It is a fully managed graph database optimized for highly connected datasets like knowledge graphs, fraud detection, recommendation engines. DynamoDB is key-value/document, DocumentDB is document database (MongoDB compatible), RDS is relational.",
      "domain": "Technology"
    },
    {
      "questionNumber": 11,
      "questionText": "A manufacturing company is looking at a service that can offer AWS infrastructure, AWS services, APIs, and tools to its on-premises data center for running low latency applications. Which of the following service/tool is the best fit for the given requirement?",
      "options": [
        { "text": "AWS Outposts", "correct": true },
        { "text": "AWS Snow Family", "correct": false },
        { "text": "AWS Local Zones", "correct": false },
        { "text": "AWS Wavelength", "correct": false }
      ],
      "explanation": "Correct option: AWS Outposts. It brings AWS infrastructure, services, APIs, and tools to on-premises data centers for low latency workloads. Snow Family is for data migration and edge computing, Local Zones place services close to population centers, Wavelength is for mobile edge computing on 5G networks.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 12,
      "questionText": "AWS Support offers five support plans for its customers. Which of the following features are covered as part of the AWS Basic Support Plan? (Select two)",
      "options": [
        { "text": "One-on-one responses to account and billing questions", "correct": true },
        { "text": "Client-side diagnostic tools", "correct": false },
        { "text": "Infrastructure event management", "correct": false },
        { "text": "Use-case guidance – What AWS products, features, and services to use for best supporting your specific needs", "correct": false },
        { "text": "Service health checks", "correct": true }
      ],
      "explanation": "Correct options: One-on-one responses to account/billing questions and service health checks. Basic Support also includes support forums, documentation, and best practice guides. Client-side diagnostic tools, use-case guidance, and infrastructure event management are for higher-tier plans (Developer, Business, Enterprise).",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 13,
      "questionText": "Which tool/service will help you get a forecast of your spending for the next 12 months?",
      "options": [
        { "text": "AWS Pricing Calculator", "correct": false },
        { "text": "Consolidated Billing of AWS Organizations", "correct": false },
        { "text": "AWS Cost Explorer", "correct": true },
        { "text": "AWS Marketplace", "correct": false }
      ],
      "explanation": "Correct option: AWS Cost Explorer. It provides forecasting for the next 12 months based on historical data. Pricing Calculator estimates costs for new solutions, Consolidated Billing combines accounts for a single bill, Marketplace is for software purchases.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 14,
      "questionText": "Which of the following AWS services are offered free of cost? (Select two)",
      "options": [
        { "text": "AWS Auto Scaling", "correct": true },
        { "text": "AWS Elastic Beanstalk", "correct": true },
        { "text": "Amazon EC2 Spot Instances", "correct": false },
        { "text": "Amazon CloudWatch facilitated detailed monitoring of EC2 instances", "correct": false },
        { "text": "An Elastic IP address, which is chargeable as long as it is associated with an EC2 instance", "correct": false }
      ],
      "explanation": "Correct options: AWS Auto Scaling and AWS Elastic Beanstalk have no additional charge (you pay only for underlying resources). EC2 Spot Instances are discounted but not free. Detailed monitoring in CloudWatch incurs charges. Elastic IP addresses are chargeable even when associated (except under specific conditions, but not free generally).",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 15,
      "questionText": "Which of the following are NoSQL database services from AWS? (Select two)",
      "options": [
        { "text": "Amazon DocumentDB", "correct": true },
        { "text": "Amazon Relational Database Service (Amazon RDS)", "correct": false },
        { "text": "AWS Storage Gateway", "correct": false },
        { "text": "Amazon Neptune", "correct": true },
        { "text": "Amazon Aurora", "correct": false }
      ],
      "explanation": "Correct options: Amazon DocumentDB (document database, MongoDB compatible) and Amazon Neptune (graph database) are NoSQL databases. RDS and Aurora are relational databases (SQL). Storage Gateway is a hybrid storage service, not a database.",
      "domain": "Technology"
    },
    {
      "questionNumber": 16,
      "questionText": "Which of the following data sources are used by Amazon Detective to analyze events and identify potential security issues?",
      "options": [
        { "text": "Amazon CloudWatch Logs, Amazon VPC Flow Logs and Amazon GuardDuty findings", "correct": false },
        { "text": "Amazon CloudWatch Logs, AWS CloudTrail logs and Amazon Inspector logs", "correct": false },
        { "text": "Amazon CloudWatch Logs, AWS CloudTrail logs and Amazon Simple Storage Service (Amazon S3) Access Logs", "correct": false },
        { "text": "AWS CloudTrail logs, Amazon VPC Flow Logs, and Amazon GuardDuty findings", "correct": true }
      ],
      "explanation": "Correct option: AWS CloudTrail logs, VPC Flow Logs, and Amazon GuardDuty findings. Detective analyzes these data sources to create a unified view. It requires GuardDuty enabled for at least 48 hours before enabling Detective. CloudWatch Logs and S3 Access Logs are not primary data sources for Detective.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 17,
      "questionText": "An organization is looking to break down its AWS spending so that each department and project can be accurately charged for the resources they consume. Which AWS feature or service is the best fit for this use-case?",
      "options": [
        { "text": "AWS Budgets", "correct": false },
        { "text": "AWS Marketplace", "correct": false },
        { "text": "AWS cost allocation tags", "correct": true },
        { "text": "AWS Cost and Usage Report (CUR)", "correct": false }
      ],
      "explanation": "Correct option: AWS cost allocation tags. Tags are metadata labels (e.g., Department=Finance) that, when enabled, allow cost breakdown by business dimensions. AWS Budgets monitors spending but doesn't categorize. Marketplace is for software. CUR provides detailed data but depends on tags for attribution.",
      "domain": "Technology"
    },
    {
      "questionNumber": 18,
      "questionText": "A financial consulting company is looking for automated reference deployments, that will speed up the process of deploying its financial solutions on AWS Cloud. The reference deployment should be able to deploy most of the well-known functions of financial services and leave space for customizations, if necessary. Which AWS service will help achieve this requirement?",
      "options": [
        { "text": "AWS Elastic Beanstalk", "correct": false },
        { "text": "AWS CloudFormation", "correct": false },
        { "text": "Amazon Quicksight", "correct": false },
        { "text": "AWS Partner Solutions(formerly Quick Starts)", "correct": true }
      ],
      "explanation": "Correct option: AWS Partner Solutions (formerly Quick Starts). These are automated reference deployments for key workloads, including reference architecture, CloudFormation templates, and deployment guides, following AWS best practices. Elastic Beanstalk is for web apps, CloudFormation is infrastructure as code (but not pre-built reference deployments), QuickSight is BI.",
      "domain": "Technology"
    },
    {
      "questionNumber": 19,
      "questionText": "Which of the following is a repository service that helps in maintaining application dependencies via integration with commonly used package managers and build tools like Maven, Gradle, npm, etc?",
      "options": [
        { "text": "AWS CodeStar", "correct": false },
        { "text": "AWS CodeBuild", "correct": false },
        { "text": "AWS CodeCommit", "correct": false },
        { "text": "AWS CodeArtifact", "correct": true }
      ],
      "explanation": "Correct option: AWS CodeArtifact. It is a fully managed artifact repository service for software packages and dependencies, integrating with Maven, Gradle, npm, yarn, pip, NuGet, etc. CodeStar is a development service with toolchains, CodeBuild is CI/CD, CodeCommit is Git-based source control.",
      "domain": "Technology"
    },
    {
      "questionNumber": 20,
      "questionText": "Which of the following statements are correct regarding the AWS Control Tower and Service Control Policies? (Select two)",
      "options": [
        { "text": "Service Control Policies (SCPs) can help grant permissions to the accounts in your organization", "correct": false },
        { "text": "Service Control Policies (SCPs), by default, affect all the users in the AWS Organization. They have to be configured to effect only the member accounts, if needed", "correct": false },
        { "text": "AWS Control Tower is an AWS native service providing a pre-defined set of blueprints and guardrails to help customers implement a landing zone for new AWS accounts", "correct": true },
        { "text": "Service Control Policies (SCPs) are a type of organization policy that you can use to manage permissions in your organization", "correct": true },
        { "text": "AWS Control Tower helps you deploy a multi-account AWS environment and operate it with day-to-day reminders and recommendations", "correct": false }
      ],
      "explanation": "Correct options: AWS Control Tower provides blueprints and guardrails for landing zones; SCPs are organization policies to manage permissions (guardrails, not granting permissions). SCPs do not grant permissions (they define maximum allowed permissions) and they affect member accounts only, not the management account. Control Tower does not provide day-to-day reminders; it sets up governance.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 21,
      "questionText": "A company is looking at a service/tool to automate and minimize the time spent on keeping the server images up-to-date. These server images are used by Amazon Elastic Compute Cloud (Amazon EC2) instances as well as the on-premises systems. Which AWS service will help achieve the company's need?",
      "options": [
        { "text": "Amazon EC2 Image Builder", "correct": true },
        { "text": "AWS Systems Manager (Amazon Simple Systems Manager (SSM))", "correct": false },
        { "text": "AWS CloudFormation templates", "correct": false },
        { "text": "Amazon EC2 Amazon Machine Image (AMI)", "correct": false }
      ],
      "explanation": "Correct option: Amazon EC2 Image Builder. It simplifies building, testing, and deploying VM and container images for AWS or on-premises, with automation and security settings. Systems Manager manages operational tasks, CloudFormation provisions infrastructure, AMI is a single image type (not an automation service).",
      "domain": "Technology"
    },
    {
      "questionNumber": 22,
      "questionText": "A gaming company needs compute and storage services close to edge locations in order to ensure ultra-low latency for end-users and devices that connect through mobile networks. Which AWS service is the best fit for this requirement?",
      "options": [
        { "text": "AWS Snowball", "correct": false },
        { "text": "AWS Outposts", "correct": false },
        { "text": "AWS Wavelength", "correct": true },
        { "text": "AWS Snowball Edge", "correct": false }
      ],
      "explanation": "Correct option: AWS Wavelength. It embeds AWS compute and storage within 5G network edge for ultra-low latency. Outposts is for on-premises, Snowball is for data migration/edge computing but not integrated with mobile networks, Snowball Edge has local compute but not 5G integration.",
      "domain": "Technology"
    },
    {
      "questionNumber": 23,
      "questionText": "Which AWS service is used to store and commit code privately and also offer features for version control?",
      "options": [
        { "text": "AWS CodeCommit", "correct": true },
        { "text": "AWS CodePipeline", "correct": false },
        { "text": "AWS CodeBuild", "correct": false },
        { "text": "AWS CodeStar", "correct": false }
      ],
      "explanation": "Correct option: AWS CodeCommit. It is a fully managed Git-based source control service for private code storage and version control. CodePipeline is CI/CD, CodeBuild compiles code, CodeStar provides development toolchains.",
      "domain": "Technology"
    },
    {
      "questionNumber": 24,
      "questionText": "Which of the following points have to be considered when choosing an AWS Region for a service? (Select two)",
      "options": [
        { "text": "The AWS Region should have 5G networks, to seamlessly access the breadth of AWS services in the region", "correct": false },
        { "text": "AWS Region chosen should be geographically closer to the user base that utilizes the hosted AWS services", "correct": true },
        { "text": "Compliance and Data Residency guidelines of the AWS Region should match your business requirements", "correct": true },
        { "text": "The AWS Region with high availability index should be considered for your business", "correct": false },
        { "text": "The AWS Region chosen should have all its Availability Zones (AZ) within 100 Kms radius, to keep latency low for hosted applications", "correct": false }
      ],
      "explanation": "Correct options: Geographic proximity to users (reduces latency) and compliance/data residency requirements. 5G networks are not a factor for Region selection (that's Wavelength). All AWS Regions are highly available. All AZs are already within ~100 km of each other, so it's not a selection criterion.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 25,
      "questionText": "Which of the following AWS services will help provision a logically isolated network for your AWS resources?",
      "options": [
        { "text": "AWS PrivateLink", "correct": false },
        { "text": "AWS Firewall Manager", "correct": false },
        { "text": "Amazon Virtual Private Cloud (Amazon VPC)", "correct": true },
        { "text": "Amazon Route 53", "correct": false }
      ],
      "explanation": "Correct option: Amazon VPC. It provides a logically isolated virtual network where you can launch AWS resources. PrivateLink provides private connectivity between VPCs, Firewall Manager centrally manages firewall rules, Route 53 is DNS.",
      "domain": "Technology"
    },
    {
      "questionNumber": 26,
      "questionText": "Which free tool helps to review the state of your workloads and compares them to the latest AWS architectural best practices after you have answered a series of questions about your workload?",
      "options": [
        { "text": "AWS Well-Architected Tool", "correct": true },
        { "text": "AWS Well-Architected Framework", "correct": false },
        { "text": "AWS Trusted Advisor", "correct": false },
        { "text": "AWS Technical Account Manager (TAM)", "correct": false }
      ],
      "explanation": "Correct option: AWS Well-Architected Tool. It is a free tool in the AWS Management Console that asks questions and provides a plan based on best practices. The Framework is the set of principles, Trusted Advisor provides real-time checks (but not workload review), TAM is a person (Enterprise Support).",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 27,
      "questionText": "Which of the following services/tools offers a user-friendly graphical user interface to manage AWS Snowball devices without a need for command-line interface or REST APIs?",
      "options": [
        { "text": "AWS Config", "correct": false },
        { "text": "AWS OpsHub", "correct": true },
        { "text": "AWS Transfer Family", "correct": false },
        { "text": "AppStream 2.0", "correct": false }
      ],
      "explanation": "Correct option: AWS OpsHub. It is a GUI for managing Snowball devices (unlock, configure, drag-and-drop data, monitor). Config tracks resource configurations, Transfer Family is for SFTP/FTPS/FTP, AppStream 2.0 streams desktop applications.",
      "domain": "Technology"
    },
    {
      "questionNumber": 28,
      "questionText": "As part of log analysis, you have realized that one or more AWS-owned IP addresses are being used for port scanning your on-premises server. Which service/team should you connect to resolve this issue?",
      "options": [
        { "text": "Reach out to Werner Vogels, the CTO of Amazon, with the details of the incident", "correct": false },
        { "text": "Use AWS Trusted Advisor to log a complaint with AWS", "correct": false },
        { "text": "Contact AWS Abuse team", "correct": true },
        { "text": "Contact AWS Support", "correct": false }
      ],
      "explanation": "Correct option: Contact AWS Abuse team (via Report Amazon AWS abuse form or abuse@amazonaws.com). They handle abusive behavior including port scanning, DoS, spam, intrusion attempts. AWS Support does not handle abuse reports. Trusted Advisor provides best practices. Werner Vogels is the CTO – not a contact for abuse.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 29,
      "questionText": "A company wants to establish a private, dedicated connection between AWS and its on-premises data center. Which AWS service is the right choice for this requirement?",
      "options": [
        { "text": "AWS Direct Connect", "correct": true },
        { "text": "AWS Site-to-Site VPN", "correct": false },
        { "text": "Amazon CloudFront", "correct": false },
        { "text": "Amazon API Gateway", "correct": false }
      ],
      "explanation": "Correct option: AWS Direct Connect. It provides a dedicated private network connection from on-premises to AWS. Site-to-Site VPN uses encrypted tunnels over the internet (not dedicated), CloudFront is CDN, API Gateway is for APIs.",
      "domain": "Technology"
    },
    {
      "questionNumber": 30,
      "questionText": "An e-commerce company needs to generate custom reports and graphs every week for analyzing the product sales data. The company is looking at a tool/service that will help them analyze this data using interactive dashboards with minimal effort. The dashboards also need to be accessible from any device. Which AWS tool/service will you recommend for this use-case?",
      "options": [
        { "text": "Amazon SageMaker", "correct": false },
        { "text": "Amazon Quicksight", "correct": true },
        { "text": "Amazon Athena", "correct": false },
        { "text": "AWS Glue", "correct": false }
      ],
      "explanation": "Correct option: Amazon QuickSight. It is a serverless BI service for interactive dashboards accessible from any device, with ML-powered insights. SageMaker is for ML model building, Athena is for querying S3 data with SQL, Glue is ETL.",
      "domain": "Technology"
    },
    {
      "questionNumber": 31,
      "questionText": "Which of the following statements are correct regarding Amazon API Gateway? (Select two)",
      "options": [
        { "text": "If an API response is served by the cached data, it is not considered an API call for billing purposes", "correct": false },
        { "text": "API Gateway can be configured to send data directly to Amazon Kinesis Data Stream", "correct": true },
        { "text": "Amazon API Gateway does not yet support API result caching", "correct": false },
        { "text": "Amazon API Gateway can call an AWS Lambda function to create the front door of a serverless application", "correct": true },
        { "text": "Amazon API Gateway creates RESTful APIs, Storage Gateway creates WebSocket APIs", "correct": false }
      ],
      "explanation": "Correct options: API Gateway can send data directly to Kinesis Data Streams, and can call Lambda functions as a front door for serverless apps. API Gateway supports caching (cached responses are still billed as API calls). Storage Gateway is hybrid storage, not WebSocket APIs. API Gateway supports REST, HTTP, and WebSocket.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 32,
      "questionText": "An e-commerce company has its on-premises data storage on an NFS file system that is accessed in parallel by multiple applications. The company is looking at moving the applications and data stores to AWS Cloud. Which storage service should the company use to move their files to AWS Cloud seamlessly if the application is hosted on Amazon Elastic Compute Cloud (Amazon EC2) instances?",
      "options": [
        { "text": "Amazon Elastic File System (Amazon EFS)", "correct": true },
        { "text": "AWS Storage Gateway", "correct": false },
        { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": false },
        { "text": "Amazon Elastic Block Store (Amazon EBS)", "correct": false }
      ],
      "explanation": "Correct option: Amazon EFS. It provides a scalable NFS file system that can be mounted on multiple EC2 instances for parallel access. Storage Gateway is for hybrid cloud storage (on-premises access to cloud). S3 is object storage (not file system). EBS is block storage (single attachment).",
      "domain": "Technology"
    },
    {
      "questionNumber": 33,
      "questionText": "A Security Group has been changed in an AWS account and the manager of the account has asked you to find out the details of the user who changed it. As a Cloud Practitioner, which AWS service will you use to fetch the necessary information?",
      "options": [
        { "text": "AWS X-Ray", "correct": false },
        { "text": "AWS CloudTrail", "correct": true },
        { "text": "AWS Trusted Advisor", "correct": false },
        { "text": "Amazon Inspector", "correct": false }
      ],
      "explanation": "Correct option: AWS CloudTrail. It records API activity including who made requests, what actions were performed, and when. X-Ray traces application performance, Trusted Advisor provides best practices, Inspector assesses security vulnerabilities.",
      "domain": "Technology"
    },
    {
      "questionNumber": 34,
      "questionText": "As an AWS Cloud Practitioner, you have been tasked to find examples of AWS Cloud solution designs. Which service/feature would you recommend?",
      "options": [
        { "text": "AWS Marketplace", "correct": false },
        { "text": "AWS Trusted Advisor", "correct": false },
        { "text": "APN Consulting Partner", "correct": false },
        { "text": "AWS Architecture Center", "correct": true }
      ],
      "explanation": "Correct option: AWS Architecture Center. It provides reference architecture diagrams, vetted solutions, best practices, patterns, and icons. Marketplace is for software, Trusted Advisor for best practice checks, APN Consulting Partners are professional services firms.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 35,
      "questionText": "A weather-tracking application is built using Amazon DynamoDB. The performance of the application has been consistently good. But lately, the team has realized that during holidays and travel seasons, the load on the application is high and the read requests consume most of the database resources, thereby drastically increasing the overall application latency. Which feature/service will help resolve this issue?",
      "options": [
        { "text": "Amazon DynamoDB Accelerator", "correct": true },
        { "text": "Amazon DynamoDB Regulator", "correct": false },
        { "text": "Amazon CloudFront", "correct": false },
        { "text": "Amazon ElastiCache", "correct": false }
      ],
      "explanation": "Correct option: Amazon DynamoDB Accelerator (DAX). It is an in-memory cache for DynamoDB that reduces read latency from milliseconds to microseconds, ideal for read-heavy workloads. ElastiCache is for other databases, not DynamoDB. CloudFront is CDN. DynamoDB Regulator is a distractor.",
      "domain": "Technology"
    },
    {
      "questionNumber": 36,
      "questionText": "A financial services company needs to retain its data for 10 years to meet compliance norms. Which Amazon Simple Storage Service (Amazon S3) storage class is the best fit for this use case considering that the data has to be stored at a minimal cost?",
      "options": [
        { "text": "Amazon S3 Glacier Deep Archive", "correct": true },
        { "text": "Amazon S3 Standard-Infrequent Access (S3 Standard-IA)", "correct": false },
        { "text": "Amazon S3 Intelligent-Tiering", "correct": false },
        { "text": "Amazon S3 Glacier Flexible Retrieval", "correct": false }
      ],
      "explanation": "Correct option: S3 Glacier Deep Archive. It is the lowest-cost storage class, designed for long-term retention (7-10+ years) with retrieval within 12 hours. S3 Standard-IA is for infrequent access with rapid retrieval (higher cost). S3 Intelligent-Tiering is for unknown access patterns. S3 Glacier Flexible Retrieval (formerly S3 Glacier) is for archives accessed 1-2 times per year, but at higher cost than Deep Archive.",
      "domain": "Technology"
    },
    {
      "questionNumber": 37,
      "questionText": "A media company uses Amazon Simple Storage Service (Amazon S3) for storing all its data. Which storage class should it consider for cost-optimal storage of the data that has random access patterns?",
      "options": [
        { "text": "Amazon S3 Standard-Infrequent Access (S3 Standard-IA)", "correct": false },
        { "text": "Amazon S3 Random Access (S3 Random-Access)", "correct": false },
        { "text": "Amazon S3 Intelligent-Tiering (S3 Intelligent-Tiering)", "correct": true },
        { "text": "Amazon S3 Standard (S3 Standard)", "correct": false }
      ],
      "explanation": "Correct option: S3 Intelligent-Tiering. It automatically moves objects between access tiers based on changing access patterns, with no retrieval fees. It is ideal for unknown or unpredictable access patterns. S3 Standard is for frequent access, S3 Standard-IA for less frequent but predictable access. S3 Random Access is not a real storage class.",
      "domain": "Technology"
    },
    {
      "questionNumber": 38,
      "questionText": "A company is looking for ways to make its desktop applications available to the employees from browsers on their devices/laptops. Which AWS service will help achieve this requirement without having to procure servers or maintain infrastructure?",
      "options": [
        { "text": "AWS Snowball", "correct": false },
        { "text": "AWS Outposts", "correct": false },
        { "text": "Amazon WorkSpaces", "correct": false },
        { "text": "Amazon AppStream 2.0", "correct": true }
      ],
      "explanation": "Correct option: Amazon AppStream 2.0. It streams desktop applications from AWS to any device (browser), without managing infrastructure. WorkSpaces provides full virtual desktops (DaaS). Snowball and Outposts are for edge/on-premises infrastructure.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 39,
      "questionText": "Which of the following statements are true about AWS Shared Responsibility Model? (Select two)",
      "options": [
        { "text": "AWS trains AWS employees, but a customer must train their own employees", "correct": true },
        { "text": "AWS is responsible for patching and fixing flaws within the infrastructure, but customers are responsible for patching their guest operating system and applications", "correct": true },
        { "text": "AWS maintains the configuration of its infrastructure devices and is responsible for configuring the guest operating systems, databases, and applications", "correct": false },
        { "text": "For abstracted services, such as Amazon S3, AWS operates the infrastructure layer, the operating system, platforms, encryption options, and appropriate permissions for accessing the S3 resources", "correct": false },
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2) is categorized as Infrastructure as a Service (IaaS) and hence AWS will perform all of the necessary security configuration and management tasks", "correct": false }
      ],
      "explanation": "Correct options: AWS trains its employees, customer trains theirs; AWS patches infrastructure, customer patches guest OS and apps. AWS is responsible for infrastructure configuration, but customer configures guest OS, databases, apps. For abstracted services like S3, customer manages data, encryption options, and IAM permissions. EC2 (IaaS) requires customer to manage guest OS, apps, and security groups.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 40,
      "questionText": "Which of the following use-cases can be solved using the Amazon Forecast service?",
      "options": [
        { "text": "Predict the web traffic of a website for the next few weeks", "correct": true },
        { "text": "To recommend personalized products for users based on their previous purchases", "correct": false },
        { "text": "To develop and test fully functional machine learning models", "correct": false },
        { "text": "Document search service that can extract answers from text within documents", "correct": false }
      ],
      "explanation": "Correct option: Predict web traffic. Amazon Forecast is for time-series forecasting (e.g., web traffic, retail demand, IT capacity). Personalized recommendations use Amazon Personalize. ML model development uses SageMaker. Document search uses Amazon Kendra.",
      "domain": "Technology"
    },
    {
      "questionNumber": 41,
      "questionText": "An e-commerce application sends out messages to a downstream application whenever an order is created. The downstream application processes the messages and updates its own systems. Currently, the two applications directly communicate with each other. Which service will you use to decouple this architecture, without any communication loss between the two systems?",
      "options": [
        { "text": "AWS Lambda", "correct": false },
        { "text": "Amazon Kinesis Data Streams", "correct": false },
        { "text": "Amazon Simple Notification Service (Amazon SNS)", "correct": false },
        { "text": "Amazon Simple Queue Service (SQS)", "correct": true }
      ],
      "explanation": "Correct option: Amazon SQS. It provides a message queue (pull-based) that decouples components, ensuring no message loss. SNS is push-based (subscribers must be available). Kinesis is for real-time streaming of big data. Lambda can be triggered but does not store messages.",
      "domain": "Technology"
    },
    {
      "questionNumber": 42,
      "questionText": "As a Cloud Practitioner, which of the following credentials would you recommend for signing in to the AWS Management Console to meet security best practices? (Select two)",
      "options": [
        { "text": "X.509 certificate", "correct": false },
        { "text": "Secret Access Key", "correct": false },
        { "text": "Access Key ID", "correct": false },
        { "text": "Multi Factor Authentication (MFA)", "correct": true },
        { "text": "IAM Username and password", "correct": true }
      ],
      "explanation": "Correct options: IAM Username/password and Multi-Factor Authentication (MFA) are used for console sign-in. Access keys (Access Key ID and Secret Access Key) are for programmatic access, not console. X.509 certificates are for SSL/TLS.",
      "domain": "Technology"
    },
    {
      "questionNumber": 43,
      "questionText": "Per the AWS Shared Responsibility Model, management of which of the following AWS services is the responsibility of the customer?",
      "options": [
        { "text": "Amazon DynamoDB", "correct": false },
        { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": false },
        { "text": "AWS Elastic Beanstalk", "correct": false },
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": true }
      ],
      "explanation": "Correct option: Amazon EC2 (IaaS). Customer manages the guest OS, applications, and security groups. DynamoDB, S3, and Elastic Beanstalk are managed services where AWS handles the infrastructure and platform; customer manages data and access permissions.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 44,
      "questionText": "A company is looking at real-time processing of streaming big data for their ad-tech platform. Which of the following AWS services is the right choice for this requirement?",
      "options": [
        { "text": "Amazon Redshift", "correct": false },
        { "text": "Amazon Simple Queue Service (Amazon SQS)", "correct": false },
        { "text": "Amazon Kinesis Data Streams", "correct": true },
        { "text": "Amazon EMR", "correct": false }
      ],
      "explanation": "Correct option: Amazon Kinesis Data Streams. It enables real-time processing of streaming data (clickstreams, logs, social media). Redshift is a data warehouse, SQS is message queuing, EMR is for big data batch processing (Hadoop).",
      "domain": "Technology"
    },
    {
      "questionNumber": 45,
      "questionText": "Which of the following statements are correct regarding the health monitoring and reporting capabilities supported by AWS Elastic Beanstalk? (Select two)",
      "options": [
        { "text": "The basic health reporting system that provides information about the health of instances in an AWS Elastic Beanstalk environment does not use health checks performed by Elastic Load Balancing (ELB)", "correct": false },
        { "text": "With basic health reporting, the AWS Elastic Beanstalk service does not publish any metrics to Amazon CloudWatch", "correct": true },
        { "text": "The AWS Elastic Beanstalk health monitoring can determine that the environment's Auto Scaling group is available and has a minimum of at least one instance", "correct": true },
        { "text": "In a single instance environment, AWS Elastic Beanstalk determines the instance's health by monitoring the Elastic Load Balancing (ELB) health settings", "correct": false },
        { "text": "AWS Elastic Beanstalk provides only basic health reporting system; Combined with Elastic Load Balancing (ELB), they provide advanced health check features", "correct": false }
      ],
      "explanation": "Correct options: Basic health reporting does not publish metrics to CloudWatch (resources themselves publish), and health monitoring checks Auto Scaling group availability and minimum instance count. Basic health uses ELB health checks for load-balanced environments, not for single-instance (uses EC2 status). Single-instance environments do not use ELB health settings. Elastic Beanstalk also supports enhanced health reporting.",
      "domain": "Technology"
    },
    {
      "questionNumber": 46,
      "questionText": "A team manager needs data about the changes that have taken place for AWS resources in his account during the past two weeks. Which AWS service can help get this data?",
      "options": [
        { "text": "AWS Config", "correct": true },
        { "text": "AWS CloudTrail", "correct": false },
        { "text": "Amazon Inspector", "correct": false },
        { "text": "Amazon CloudWatch", "correct": false }
      ],
      "explanation": "Correct option: AWS Config. It records resource configuration changes over time. CloudTrail records API calls (who made changes), Config records what the configuration looked like. Inspector assesses security, CloudWatch monitors metrics/logs.",
      "domain": "Technology"
    },
    {
      "questionNumber": 47,
      "questionText": "A company is planning to move their traditional CRM application running on MySQL to an AWS database service. Which database service is the right fit for this requirement?",
      "options": [
        { "text": "Amazon DynamoDB", "correct": false },
        { "text": "Amazon Aurora", "correct": true },
        { "text": "Amazon ElastiCache", "correct": false },
        { "text": "Amazon Neptune", "correct": false }
      ],
      "explanation": "Correct option: Amazon Aurora. It is MySQL-compatible, offering up to 5x performance of MySQL, fully managed. DynamoDB is NoSQL, ElastiCache is in-memory cache, Neptune is graph database.",
      "domain": "Technology"
    },
    {
      "questionNumber": 48,
      "questionText": "Historically, IT departments had to over-provision for peak demand. IT professionals may bring this legacy mindset to the table when they build their cloud infrastructure leading to over-provisioned resources and unnecessary costs. Right-sizing of resources is necessary to reduce infrastructure costs while still using cloud functionality optimally. Which feature of the AWS Cloud refers to right-sizing the resources?",
      "options": [
        { "text": "Resiliency", "correct": false },
        { "text": "Elasticity", "correct": true },
        { "text": "Horizontal scaling", "correct": false },
        { "text": "Reliability", "correct": false }
      ],
      "explanation": "Correct option: Elasticity. The ability to acquire and release resources as needed (scale out/in, up/down). Resiliency is recovering from failures, horizontal scaling is adding more instances, reliability is performing correctly consistently.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 49,
      "questionText": "A company has defined a baseline that mentions the number of AWS resources to be used for different stages of application testing. However, the company realized that employees are not adhering to the guidelines and provisioning additional resources via API calls, resulting in higher testing costs. Which AWS service will help the company raise alarms whenever the baseline resource numbers are crossed?",
      "options": [
        { "text": "Amazon Detective", "correct": false },
        { "text": "AWS X-Ray", "correct": false },
        { "text": "AWS Config", "correct": false },
        { "text": "AWS CloudTrail Insights", "correct": true }
      ],
      "explanation": "Correct option: AWS CloudTrail Insights. It detects unusual API activity (e.g., higher than baseline volume of write API calls) and generates insights events. Detective investigates security findings, X-Ray traces application performance, Config tracks configuration changes (but does not detect unusual API volume).",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 50,
      "questionText": "Which of the following is the least effort way to encrypt data for AWS services only in your AWS account using AWS Key Management Service (KMS)?",
      "options": [
        { "text": "Use AWS KMS APIs to encrypt data within your own application by using the AWS Encryption SDK", "correct": false },
        { "text": "Use AWS managed master keys that are automatically created in your account for each service", "correct": true },
        { "text": "Use AWS owned CMK in the service you wish to use encryption", "correct": false },
        { "text": "Create your own customer managed keys (CMKs) in AWS KMS", "correct": false }
      ],
      "explanation": "Correct option: Use AWS managed master keys (now called AWS managed KMS keys). They are automatically created per service, require no management, and are free for under-free-tier usage. Customer managed keys require creation and management. AWS owned keys are not in your account. Encryption SDK requires code changes.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 51,
      "questionText": "A blogging company is looking at an easy to use solution to host WordPress blogs. The company needs a cost-effective, readily available solution without the need to manage the configurations for servers or the databases. Which AWS service will help you achieve this functionality?",
      "options": [
        { "text": "Amazon Elastic Compute Cloud (EC2) with Amazon S3 for storage", "correct": false },
        { "text": "AWS Fargate", "correct": false },
        { "text": "Amazon Lightsail", "correct": true },
        { "text": "Host the application directly on Amazon S3", "correct": false }
      ],
      "explanation": "Correct option: Amazon Lightsail. It provides preconfigured VPS plans including WordPress, with low predictable pricing and no server management. EC2 requires management, Fargate is for containers, S3 cannot host dynamic applications (static only).",
      "domain": "Technology"
    },
    {
      "questionNumber": 52,
      "questionText": "By default, which of the following events are logged by AWS CloudTrail?",
      "options": [
        { "text": "Management events", "correct": true },
        { "text": "AWS CloudTrail Insights events", "correct": false },
        { "text": "Data events", "correct": false },
        { "text": "Data events and Insights events", "correct": false }
      ],
      "explanation": "Correct option: Management events. By default, CloudTrail logs management events (control plane operations). Data events and Insights events are not logged by default; they must be explicitly enabled and incur additional charges.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 53,
      "questionText": "Which AWS service allows you to connect any number of IoT devices to the cloud without requiring you to provision or manage servers?",
      "options": [
        { "text": "AWS IoT Core", "correct": true },
        { "text": "Amazon Connect", "correct": false },
        { "text": "AWS Control Tower", "correct": false },
        { "text": "AWS IoT Gateway", "correct": false }
      ],
      "explanation": "Correct option: AWS IoT Core. It is a managed service for connecting IoT devices to the cloud without server management. Amazon Connect is a contact center, Control Tower sets up multi-account governance, AWS IoT Gateway is not a real service.",
      "domain": "Technology"
    },
    {
      "questionNumber": 54,
      "questionText": "Which feature/functionality will help you organize your AWS resources, manage and automate tasks on large numbers of resources at a time?",
      "options": [
        { "text": "AWS Organizations", "correct": false },
        { "text": "AWS Resource Groups", "correct": true },
        { "text": "Amazon WorkSpaces", "correct": false },
        { "text": "Tags", "correct": false }
      ],
      "explanation": "Correct option: AWS Resource Groups. They help organize resources and automate bulk actions. AWS Organizations manages multiple accounts, WorkSpaces provides virtual desktops, Tags are metadata labels (used by Resource Groups to group resources).",
      "domain": "Technology"
    },
    {
      "questionNumber": 55,
      "questionText": "Due to regulatory guidelines, a company needs to encrypt data as it passes through the different layers of its AWS architecture. The company is reviewing the capabilities of the various AWS services and their encryption options. Which of the below services are encrypted by default and need no user intervention to enable encryption?",
      "options": [
        { "text": "AWS Storage Gateway, Application Load Balancer (ALB), Amazon CloudFront", "correct": false },
        { "text": "Amazon CloudWatch logs, Application Load Balancer (ALB), Amazon S3 Glacier", "correct": false },
        { "text": "AWS Organizations, Amazon EC2, AWS CloudTrail Logs", "correct": false },
        { "text": "AWS CloudTrail Logs, Amazon S3 Glacier, AWS Storage Gateway", "correct": true }
      ],
      "explanation": "Correct option: AWS CloudTrail logs (encrypted by default with SSE-S3), Amazon S3 Glacier (automatically AES-256 encrypted), AWS Storage Gateway (data in S3 encrypted by default with SSE-S3). ALB encryption is configurable (not default), CloudFront not encrypted by default, EC2 instances and EBS volumes not encrypted by default, CloudWatch logs are not encrypted by default.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 56,
      "questionText": "A university provides access to AWS services for its students to submit their research data for analysis. The university is looking at the most cost-effective approach for recovering from disasters and it can tolerate data loss of a few hours. Which disaster recovery strategy is well-suited for this use case?",
      "options": [
        { "text": "Backup and restore strategy", "correct": true },
        { "text": "Warm standby strategy", "correct": false },
        { "text": "Multi-site active/active strategy", "correct": false },
        { "text": "Pilot light strategy", "correct": false }
      ],
      "explanation": "Correct option: Backup and restore. It is the cheapest DR strategy, suitable for workloads that can tolerate data loss of hours and longer recovery times. Pilot light and warm standby have lower RTO/RPO but higher cost. Multi-site active/active is most expensive.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 57,
      "questionText": "A Cloud Practitioner wants to use CIDR block notation when providing an IP address range. Which of the following AWS network services/utilities allow this feature? (Select two)",
      "options": [
        { "text": "Security group", "correct": true },
        { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": false },
        { "text": "Network access control list (network ACL)", "correct": true },
        { "text": "AWS Cost Explorer", "correct": false },
        { "text": "AWS Lambda", "correct": false }
      ],
      "explanation": "Correct options: Security groups and network ACLs both support CIDR notation for IP address ranges in their rules. S3, Cost Explorer, and Lambda do not use CIDR blocks for configuration.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 58,
      "questionText": "A company stores all its media files in Amazon Simple Storage Service (Amazon S3) which is accessed by an application hosted on Amazon EC2 instances. The company wants to convert these media files into formats that users can playback on mobile devices. Which AWS service/tool helps you achieve this requirement?",
      "options": [
        { "text": "AWS Glue", "correct": false },
        { "text": "Amazon Transcribe", "correct": false },
        { "text": "Amazon Comprehend", "correct": false },
        { "text": "Amazon Elastic Transcoder", "correct": true }
      ],
      "explanation": "Correct option: Amazon Elastic Transcoder. It converts media files from source format to formats suitable for playback on mobile devices, tablets, web browsers, etc. Glue is ETL, Transcribe is speech-to-text, Comprehend is NLP.",
      "domain": "Technology"
    },
    {
      "questionNumber": 59,
      "questionText": "Which of the following AWS services is delivered globally rather than regionally?",
      "options": [
        { "text": "AWS Snowball", "correct": false },
        { "text": "Amazon Simple Storage Service (Amazon S3) buckets", "correct": false },
        { "text": "Amazon Elastic File System (Amazon EFS)", "correct": false },
        { "text": "Amazon WorkSpaces", "correct": true }
      ],
      "explanation": "Correct option: Amazon WorkSpaces (global service). Other global services include Route 53, CloudFront, IAM. S3 buckets are region-specific, EFS is regional, Snowball is region-specific for data transfer.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 60,
      "questionText": "A company is moving its on-premises application to AWS Cloud. The application uses in-memory caches for running custom workloads. Which Amazon Elastic Compute Cloud (Amazon EC2) instance type is the right choice for the given requirement?",
      "options": [
        { "text": "Accelerated computing instance types", "correct": false },
        { "text": "Storage Optimized instance types", "correct": false },
        { "text": "Memory Optimized instance types", "correct": true },
        { "text": "Compute Optimized instance types", "correct": false }
      ],
      "explanation": "Correct option: Memory Optimized instances. They are designed for large in-memory workloads (in-memory caches, databases, analytics). Compute Optimized is for compute-intensive tasks, Storage Optimized for high sequential I/O, Accelerated for GPU/FPGA.",
      "domain": "Technology"
    },
    {
      "questionNumber": 61,
      "questionText": "Which of the following will help you control the incoming traffic to an Amazon EC2 instance?",
      "options": [
        { "text": "Route Table", "correct": false },
        { "text": "Network access control list (network ACL)", "correct": false },
        { "text": "Security Group", "correct": true },
        { "text": "AWS Resource Group", "correct": false }
      ],
      "explanation": "Correct option: Security Group. It acts as a virtual firewall at the instance level, controlling inbound and outbound traffic. Network ACLs control traffic at the subnet level. Route tables direct network traffic. Resource Groups organize resources.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 62,
      "questionText": "Which pillar of AWS Well-Architected Framework focuses on using IT and computing resources efficiently, while considering the right resource types and sizes based on workload requirements?",
      "options": [
        { "text": "Cost Optimization Pillar", "correct": false },
        { "text": "Performance Efficiency Pillar", "correct": true },
        { "text": "Operational Excellence Pillar", "correct": false },
        { "text": "Reliability Pillar", "correct": false }
      ],
      "explanation": "Correct option: Performance Efficiency Pillar. It focuses on using resources efficiently, selecting right types/sizes, monitoring performance, and maintaining efficiency. Cost Optimization is about avoiding unnecessary costs, Operational Excellence about running systems, Reliability about recovery.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 63,
      "questionText": "Which of the following statements are true about AWS Elastic Beanstalk? (Select two)",
      "options": [
        { "text": "AWS Elastic Beanstalk supports web applications built on different languages. But, AWS Elastic Beanstalk cannot be used for deploying non-web applications", "correct": false },
        { "text": "With AWS Elastic Beanstalk, you can quickly deploy and manage applications in the AWS Cloud without having to learn about the infrastructure that runs those applications", "correct": true },
        { "text": "There is no additional charge for AWS Elastic Beanstalk. You pay only for the underlying AWS resources that your application consumes", "correct": true },
        { "text": "AWS Elastic Beanstalk automates the details of capacity provisioning, load balancing, and application deployment, creating an environment that runs a version of your application. However, auto-scaling functionality cannot be automated using AWS Elastic Beanstalk", "correct": false },
        { "text": "AWS Elastic Beanstalk supports Java, .NET, PHP, but does not support Docker web applications", "correct": false }
      ],
      "explanation": "Correct options: Elastic Beanstalk allows deploying applications without learning infrastructure, and there is no additional charge (pay only for underlying resources). It supports many languages including Docker, it does automate auto-scaling, and it can deploy non-web applications as well.",
      "domain": "Technology"
    },
    {
      "questionNumber": 64,
      "questionText": "AWS Web Application Firewall (AWS WAF) can be deployed on which of the following services?",
      "options": [
        { "text": "Amazon CloudFront, Application Load Balancer, Amazon API Gateway, AWS AppSync", "correct": true },
        { "text": "Application Load Balancer, Amazon Elastic Compute Cloud (Amazon EC2), Amazon API Gateway", "correct": false },
        { "text": "AWS AppSync, Amazon CloudFront, Application Load Balancer, Amazon Elastic Compute Cloud (Amazon EC2)", "correct": false },
        { "text": "Amazon CloudFront, Amazon Elastic Compute Cloud (Amazon EC2), Amazon API Gateway, Application Load Balancer", "correct": false }
      ],
      "explanation": "Correct option: Amazon CloudFront, Application Load Balancer, Amazon API Gateway, AWS AppSync. AWS WAF cannot be deployed directly on EC2 instances; it must be fronted by an Application Load Balancer. The first option is the complete and correct set.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 65,
      "questionText": "Which of the following AWS services can be used to continuously monitor both malicious activities as well as unauthorized behavior to protect your AWS accounts and workloads?",
      "options": [
        { "text": "Amazon Inspector", "correct": false },
        { "text": "AWS Security Hub", "correct": false },
        { "text": "Amazon GuardDuty", "correct": true },
        { "text": "Amazon Detective", "correct": false }
      ],
      "explanation": "Correct option: Amazon GuardDuty. It is a threat detection service that continuously monitors for malicious activity and unauthorized behavior using ML, anomaly detection, and threat intelligence. Inspector assesses vulnerabilities, Security Hub aggregates findings, Detective investigates root causes.",
      "domain": "Security and Compliance"
    }
  ]
};

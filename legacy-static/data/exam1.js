var EXAM_DATA = {
  examNumber: 1,
  title: "Practice Test #1 - AWS Certified Cloud Practitioner",
  description: "Full practice exam with 65 questions covering AWS Cloud Concepts, Technology, Security, and Billing & Pricing.",
  questions: [
    {
      "questionNumber": 1,
      "questionText": "A company uses reserved EC2 instances across multiple units with each unit having its own AWS account. However, some of the units under-utilize their reserved instances while other units need more reserved instances. As a Cloud Practitioner, which of the following would you recommend as the most cost-optimal solution?",
      "options": [
        { "text": "Use AWS Cost Explorer to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units", "correct": false },
        { "text": "Use AWS Trusted Advisor to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units", "correct": false },
        { "text": "Use AWS Systems Manager to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units", "correct": false },
        { "text": "Use AWS Organizations to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units", "correct": true }
      ],
      "explanation": "Correct option: Use AWS Organizations to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units. AWS Organizations helps you centrally manage billing, control access, compliance, security, and share resources across your AWS accounts. You can automate account creation, create groups of accounts, apply policies, and simplify billing with consolidated billing. Trusted Advisor provides best practice guidance, Cost Explorer visualizes costs, Systems Manager automates operational tasks – none of them can share Reserved Instances across accounts.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 2,
      "questionText": "A startup wants to set up its IT infrastructure on AWS Cloud. The CTO would like to get an estimate of the monthly AWS bill based on the AWS services that the startup wants to use. As a Cloud Practitioner, which AWS service would you suggest for this use-case?",
      "options": [
        { "text": "AWS Cost & Usage Report (AWS CUR)", "correct": false },
        { "text": "AWS Budgets", "correct": false },
        { "text": "AWS Cost Explorer", "correct": false },
        { "text": "AWS Pricing Calculator", "correct": true }
      ],
      "explanation": "Correct option: AWS Pricing Calculator. It lets you explore AWS services and create an estimate for the cost of your use cases on AWS. You can model solutions before building them, explore price points, and find instance types and contract terms. CUR provides detailed cost data after usage, Cost Explorer visualizes historical costs, Budgets sets alerts – none of them provide upfront estimates.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 3,
      "questionText": "The DevOps team at an IT company is moving 500 GB of data from an EC2 instance to an S3 bucket in the same region. Which of the following scenario captures the correct charges for this data transfer?",
      "options": [
        { "text": "The company would not be charged for this data transfer", "correct": true },
        { "text": "The company would only be charged for the inbound data transfer into the S3 bucket", "correct": false },
        { "text": "The company would only be charged for the outbound data transfer from EC2 instance", "correct": false },
        { "text": "The company would be charged for both the outbound data transfer from EC2 instance as well as the inbound data transfer into the S3 bucket", "correct": false }
      ],
      "explanation": "Correct option: The company would not be charged for this data transfer. Per AWS pricing, data transfer between S3 and EC2 instances within the same region is free. There is no charge for inbound data transfer or data transfer between AWS services in the same region. Outbound data transfer to the internet is charged, but not internal transfers.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 4,
      "questionText": "The DevOps team at an e-commerce company is trying to debug performance issues for its serverless application built using a microservices architecture. As a Cloud Practitioner, which AWS service would you recommend addressing this use-case?",
      "options": [
        { "text": "AWS CloudFormation", "correct": false },
        { "text": "Amazon Pinpoint", "correct": false },
        { "text": "AWS X-Ray", "correct": true },
        { "text": "AWS Trusted Advisor", "correct": false }
      ],
      "explanation": "Correct option: AWS X-Ray. It helps analyze and debug serverless and distributed applications (microservices) to identify root causes of performance issues and errors. CloudFormation provisions infrastructure, Pinpoint delivers customer engagement, Trusted Advisor provides best practice recommendations – not for debugging microservices.",
      "domain": "Technology"
    },
    {
      "questionNumber": 5,
      "questionText": "Which of the following are correct statements regarding the AWS Global Infrastructure? (Select two)",
      "options": [
        { "text": "Each AWS Region consists of a minimum of two Availability Zones (AZ)", "correct": false },
        { "text": "Each AWS Region consists of two or more Edge Locations", "correct": false },
        { "text": "Each Availability Zone (AZ) consists of two or more discrete data centers", "correct": false },
        { "text": "Each AWS Region consists of a minimum of three Availability Zones (AZ)", "correct": true },
        { "text": "Each Availability Zone (AZ) consists of one or more discrete data centers", "correct": true }
      ],
      "explanation": "Correct options: Each AWS Region consists of a minimum of three Availability Zones (AZ), and each AZ consists of one or more discrete data centers. Regions are physical locations with multiple isolated AZs. Edge Locations are for CloudFront, not part of Region definition. AZs can be a single data center or multiple.",
      "domain": "Technology"
    },
    {
      "questionNumber": 6,
      "questionText": "A startup wants to provision an EC2 instance for the lowest possible cost for a long-term duration but needs to make sure that the instance would never be interrupted. As a Cloud Practitioner, which of the following options would you recommend?",
      "options": [
        { "text": "EC2 Spot Instance", "correct": false },
        { "text": "EC2 On-Demand Instance", "correct": false },
        { "text": "EC2 Reserved Instance (RI)", "correct": true },
        { "text": "EC2 Dedicated Host", "correct": false }
      ],
      "explanation": "Correct option: EC2 Reserved Instance (RI). RIs provide significant savings (up to 75%) for long-term commitments (1 or 3 years) and cannot be interrupted. Spot instances can be terminated, On-Demand has no long-term discount, Dedicated Hosts are for licensing and more expensive.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 7,
      "questionText": "Which of the following is CORRECT regarding removing an AWS account from AWS Organizations?",
      "options": [
        { "text": "The AWS account must not have any Service Control Policies (SCPs) attached to it. Only then it can be removed from AWS organizations", "correct": false },
        { "text": "Raise a support ticket with AWS Support to remove the account", "correct": false },
        { "text": "The AWS account can be removed from AWS Systems Manager", "correct": false },
        { "text": "The AWS account must be able to operate as a standalone account. Only then it can be removed from AWS organizations", "correct": true }
      ],
      "explanation": "Correct option: The AWS account must be able to operate as a standalone account. It must accept the AWS Customer Agreement, choose a support plan, verify contact information, and provide a payment method. SCPs are automatically removed upon leaving; no support ticket needed, and Systems Manager cannot remove accounts.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 8,
      "questionText": "Under the AWS Shared Responsibility Model, which of the following is a shared responsibility of both AWS and the customer?",
      "options": [
        { "text": "Guarantee data separation among various AWS customers", "correct": false },
        { "text": "Configuration Management", "correct": true },
        { "text": "Availability Zone (AZ) infrastructure maintenance", "correct": false },
        { "text": "Infrastructure maintenance of Amazon Simple Storage Service (Amazon S3) storage servers", "correct": false }
      ],
      "explanation": "Correct option: Configuration Management. Shared controls apply to both AWS and customer. AWS maintains configuration of its infrastructure devices, but customer configures their own guest operating systems, databases, and applications. Data separation, AZ maintenance, and S3 infrastructure are AWS responsibilities.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 9,
      "questionText": "AWS Web Application Firewall (WAF) offers protection from common web exploits at which layer?",
      "options": [
        { "text": "Layer 3", "correct": false },
        { "text": "Layer 4", "correct": false },
        { "text": "Layer 7", "correct": true },
        { "text": "Layer 4 and 7", "correct": false }
      ],
      "explanation": "Correct option: Layer 7 (Application layer). AWS WAF monitors HTTP/HTTPS requests, which are at Layer 7. Shield protects at Layers 3 and 4. WAF does not operate at network or transport layers.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 10,
      "questionText": "A unicorn startup is building an analytics application with support for a speech-based interface. The application will accept speech-based input from users and then convey results via speech. As a Cloud Practitioner, which solution would you recommend for the given use-case?",
      "options": [
        { "text": "Use Amazon Transcribe to convert speech to text for downstream analysis. Then use Amazon Polly to convey the text results via speech", "correct": true },
        { "text": "Use Amazon Polly to convert speech to text for downstream analysis. Then use Amazon Transcribe to convey the text results via speech", "correct": false },
        { "text": "Use Amazon Polly to convert speech to text for downstream analysis. Then use Amazon Translate to convey the text results via speech", "correct": false },
        { "text": "Use Amazon Translate to convert speech to text for downstream analysis. Then use Amazon Polly to convey the text results via speech", "correct": false }
      ],
      "explanation": "Correct option: Use Transcribe (speech-to-text) then Polly (text-to-speech). Transcribe converts speech to text using ASR, Polly converts text to lifelike speech. Polly cannot do speech-to-text; Translate is for language translation.",
      "domain": "Technology"
    },
    {
      "questionNumber": 11,
      "questionText": "A silicon valley based healthcare startup stores anonymized patient health data on Amazon S3. The CTO further wants to ensure that any sensitive data on S3 is discovered and identified to prevent any sensitive data leaks. As a Cloud Practitioner, which AWS service would you recommend addressing this use-case?",
      "options": [
        { "text": "AWS Secrets Manager", "correct": false },
        { "text": "Amazon Polly", "correct": false },
        { "text": "Amazon Macie", "correct": true },
        { "text": "AWS Glue", "correct": false }
      ],
      "explanation": "Correct option: Amazon Macie. It uses machine learning and pattern matching to discover and protect sensitive data (PII) in S3, providing inventory of unencrypted or public buckets. Secrets Manager manages credentials, Polly is text-to-speech, Glue is ETL.",
      "domain": "Technology"
    },
    {
      "questionNumber": 12,
      "questionText": "A company wants to have control over creating and using its own keys for encryption on AWS services. Which of the following can be used for this use-case?",
      "options": [
        { "text": "AWS managed key", "correct": false },
        { "text": "AWS Secrets Manager", "correct": false },
        { "text": "AWS owned key", "correct": false },
        { "text": "customer managed key (CMK)", "correct": true }
      ],
      "explanation": "Correct option: customer managed key (CMK). Customer managed keys are KMS keys you create, own, and manage with full control (policies, rotation, disabling, deletion). AWS managed keys are created and managed by AWS services; AWS owned keys are shared across accounts; Secrets Manager manages secrets, not encryption keys.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 13,
      "questionText": "Which of the following AWS Support plans provide access to only core checks from the AWS Trusted Advisor Best Practice Checks? (Select two)",
      "options": [
        { "text": "AWS Enterprise On-Ramp Support", "correct": false },
        { "text": "AWS Business Support", "correct": false },
        { "text": "AWS Basic Support", "correct": true },
        { "text": "AWS Developer Support", "correct": true },
        { "text": "AWS Enterprise Support", "correct": false }
      ],
      "explanation": "Correct options: AWS Basic Support and AWS Developer Support provide access only to core Trusted Advisor checks. Business, Enterprise On-Ramp, and Enterprise Support provide full access to all Trusted Advisor checks.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 14,
      "questionText": "What are the advantages that AWS Cloud offers over a traditional on-premises IT infrastructure? (Select two)",
      "options": [
        { "text": "Provide lower latency to applications by maintaining servers on-premises", "correct": false },
        { "text": "Eliminate guessing on your infrastructure capacity needs", "correct": true },
        { "text": "Increase speed and agility by keeping servers and other required resources ready before time in your data centers", "correct": false },
        { "text": "Make a capacity decision before deploying an application, to reduce costs", "correct": false },
        { "text": "Trade capital expense for variable expense", "correct": true }
      ],
      "explanation": "Correct options: Eliminate guessing on capacity (access as much as needed, scale as required) and trade capital expense for variable expense (pay only for what you use). Maintaining on-premises servers increases costs and latency. Making capacity decisions upfront leads to idle resources.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 15,
      "questionText": "A multi-national corporation wants to get expert professional advice on migrating to AWS and managing their applications on AWS Cloud. Which of the following entities would you recommend for this engagement?",
      "options": [
        { "text": "AWS Trusted Advisor", "correct": false },
        { "text": "APN Technology Partner", "correct": false },
        { "text": "APN Consulting Partner", "correct": true },
        { "text": "Concierge Support Team", "correct": false }
      ],
      "explanation": "Correct option: APN Consulting Partner. These are professional services firms that help customers design, architect, build, migrate, and manage workloads on AWS. Technology Partners provide hardware/software solutions, Trusted Advisor is an online tool, Concierge handles billing inquiries.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 16,
      "questionText": "Which tool/service will help you access AWS services using programming language-specific APIs?",
      "options": [
        { "text": "AWS Command Line Interface (CLI)", "correct": false },
        { "text": "Integrated Development Environments (IDE)", "correct": false },
        { "text": "AWS Management Console", "correct": false },
        { "text": "AWS Software Developer Kit (SDK)", "correct": true }
      ],
      "explanation": "Correct option: AWS SDK. It provides language-specific APIs for AWS services (JavaScript, Python, Java, etc.), handling credential management, retries, serialization. CLI is command-line, IDE is development environment, Console is web UI.",
      "domain": "Technology"
    },
    {
      "questionNumber": 17,
      "questionText": "A company needs a storage solution for a project wherein the data is accessed less frequently but needs rapid access when required. Which S3 storage class is the MOST cost-effective for the given use-case?",
      "options": [
        { "text": "Amazon S3 Standard-Infrequent Access (S3 Standard-IA)", "correct": true },
        { "text": "Amazon S3 Glacier (S3 Glacier)", "correct": false },
        { "text": "Amazon S3 Standard", "correct": false },
        { "text": "Amazon S3 Intelligent-Tiering (S3 Intelligent-Tiering)", "correct": false }
      ],
      "explanation": "Correct option: S3 Standard-IA. It is for infrequently accessed data that needs rapid access, with lower storage cost than Standard but with retrieval fees. Glacier has hours retrieval, Standard is for frequent access, Intelligent-Tiering has monitoring costs.",
      "domain": "Technology"
    },
    {
      "questionNumber": 18,
      "questionText": "A data analytics company is running a proprietary batch analytics application on AWS and wants to use a storage service which would be accessed by hundreds of EC2 instances simultaneously to append data to existing files. As a Cloud Practitioner, which AWS service would you suggest for this use-case?",
      "options": [
        { "text": "Amazon Elastic Block Store (Amazon EBS)", "correct": false },
        { "text": "Instance Store", "correct": false },
        { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": false },
        { "text": "Amazon Elastic File System (Amazon EFS)", "correct": true }
      ],
      "explanation": "Correct option: Amazon EFS. It provides a file system that can be mounted on thousands of EC2 instances simultaneously, supporting file append operations. EBS can be attached to only one instance (except multi-attach, but not for hundreds), Instance Store is ephemeral and single-attach, S3 is object storage (no file appending).",
      "domain": "Technology"
    },
    {
      "questionNumber": 19,
      "questionText": "A company wants to improve the resiliency of its flagship application so it wants to move from its traditional database system to a managed AWS NoSQL database service to support active-active configuration in both the East and West US AWS regions. The active-active configuration with cross-region support is the prime criteria for any database solution that the company considers. Which AWS database service is the right fit for this requirement?",
      "options": [
        { "text": "Amazon Aurora with multi-master clusters", "correct": false },
        { "text": "Amazon DynamoDB with DynamoDB Accelerator", "correct": false },
        { "text": "Amazon DynamoDB with global tables", "correct": true },
        { "text": "Amazon Relational Database Service (Amazon RDS) for MYSQL", "correct": false }
      ],
      "explanation": "Correct option: Amazon DynamoDB with global tables. Global tables provide active-active cross-region replication for DynamoDB (NoSQL). Aurora multi-master is relational and not NoSQL, DAX is in-memory cache, RDS is relational.",
      "domain": "Technology"
    },
    {
      "questionNumber": 20,
      "questionText": "Which of the following AWS services should be used to automatically distribute incoming traffic across multiple targets?",
      "options": [
        { "text": "AWS Elastic Load Balancing (ELB)", "correct": true },
        { "text": "AWS Auto Scaling", "correct": false },
        { "text": "AWS Elastic Beanstalk", "correct": false },
        { "text": "Amazon OpenSearch Service", "correct": false }
      ],
      "explanation": "Correct option: ELB. It automatically distributes incoming application traffic across multiple targets (EC2 instances, containers, IPs, Lambda). Auto Scaling adjusts capacity, Elastic Beanstalk deploys applications, OpenSearch is for search and analytics.",
      "domain": "Technology"
    },
    {
      "questionNumber": 21,
      "questionText": "Which security service of AWS is enabled for all AWS customers, by default, at no additional cost?",
      "options": [
        { "text": "AWS Shield Advanced", "correct": false },
        { "text": "AWS Shield Standard", "correct": true },
        { "text": "AWS Secrets Manager", "correct": false },
        { "text": "AWS Web Application Firewall (AWS WAF)", "correct": false }
      ],
      "explanation": "Correct option: AWS Shield Standard. It protects against common network/transport layer DDoS attacks at no cost. Shield Advanced is paid, Secrets Manager and WAF have usage charges.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 22,
      "questionText": "A web application stores all of its data on Amazon S3 buckets. A client has mandated that data be encrypted before sending it to Amazon S3. Which of the following is the right technique for encrypting data as needed by the customer?",
      "options": [
        { "text": "Encryption is enabled by default for all the objects written to Amazon S3. Additional configuration is not required", "correct": false },
        { "text": "Enable client-side encryption using AWS encryption SDK", "correct": true },
        { "text": "Enable server-side encryption with Amazon S3 Managed Keys (SSE-S3)", "correct": false },
        { "text": "Enable server-side encryption with AWS Key Management Service (AWS KMS) keys (SSE-KMS)", "correct": false }
      ],
      "explanation": "Correct option: Enable client-side encryption using AWS encryption SDK. Client-side encryption encrypts data before sending to S3. Server-side encryption encrypts data at rest in S3, not before sending. Default encryption is server-side, not client-side.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 23,
      "questionText": "A company wants to identify the optimal AWS resource configuration for its workloads so that the company can reduce costs and increase workload performance. Which of the following services can be used to meet this requirement?",
      "options": [
        { "text": "AWS Systems Manager", "correct": false },
        { "text": "AWS Budgets", "correct": false },
        { "text": "AWS Cost Explorer", "correct": false },
        { "text": "AWS Compute Optimizer", "correct": true }
      ],
      "explanation": "Correct option: AWS Compute Optimizer. It uses machine learning to recommend optimal EC2 instance types, EBS volumes, and Lambda configurations based on utilization. Systems Manager is for operations, Budgets for alerts, Cost Explorer visualizes costs (rightsizing recommendations are limited).",
      "domain": "Technology"
    },
    {
      "questionNumber": 24,
      "questionText": "Which of the following AWS services support VPC Gateway Endpoint for a private connection from a VPC? (Select two)",
      "options": [
        { "text": "Amazon DynamoDB", "correct": true },
        { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": true },
        { "text": "Amazon Simple Notification Service (SNS)", "correct": false },
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": false },
        { "text": "Amazon Simple Queue Service (SQS)", "correct": false }
      ],
      "explanation": "Correct options: Amazon S3 and Amazon DynamoDB support VPC Gateway Endpoints. Other services support VPC Interface Endpoints (AWS PrivateLink). Gateway endpoints are route table targets; interface endpoints are elastic network interfaces.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 25,
      "questionText": "According to the AWS Shared Responsibility Model, which of the following are responsibilities of AWS? (Select two)",
      "options": [
        { "text": "Creating S3 bucket policies for appropriate user access", "correct": false },
        { "text": "Operating the infrastructure layer, the operating system and the platform for the Amazon S3 service", "correct": true },
        { "text": "Enabling Multi Factor Authentication on AWS accounts in your organization", "correct": false },
        { "text": "Replacing faulty hardware of Amazon EC2 instances", "correct": true },
        { "text": "Creating IAM role for accessing Amazon EC2 instances", "correct": false }
      ],
      "explanation": "Correct options: Operating infrastructure for S3 (AWS manages), and replacing faulty EC2 hardware (infrastructure maintenance). Customers manage bucket policies, MFA, and IAM roles.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 26,
      "questionText": "Which of the following entities applies patches to the underlying OS for Amazon Aurora?",
      "options": [
        { "text": "The AWS Product Team automatically", "correct": true },
        { "text": "The AWS Support after receiving a request from the customer", "correct": false },
        { "text": "The AWS customer by using AWS Systems Manager", "correct": false },
        { "text": "The AWS customer by SSHing on the instances", "correct": false }
      ],
      "explanation": "Correct option: The AWS Product Team automatically. Aurora is a fully managed service (RDS), so AWS handles OS patching automatically. Customers cannot access the underlying OS.",
      "domain": "Technology"
    },
    {
      "questionNumber": 27,
      "questionText": "Which of the following is a serverless AWS service?",
      "options": [
        { "text": "AWS Lambda", "correct": true },
        { "text": "AWS Elastic Beanstalk", "correct": false },
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": false },
        { "text": "Amazon EMR", "correct": false }
      ],
      "explanation": "Correct option: AWS Lambda. It runs code without provisioning or managing servers. Elastic Beanstalk provisions servers (though managed), EC2 is server-based, EMR runs on EC2 clusters.",
      "domain": "Technology"
    },
    {
      "questionNumber": 28,
      "questionText": "An e-commerce company has deployed an RDS database in a single Availability Zone (AZ). The engineering team wants to ensure that in case of an AZ outage, the database should continue working on the same endpoint without any manual administrative intervention. Which of the following solutions can address this use-case?",
      "options": [
        { "text": "Deploy the database via AWS Elastic Beanstalk", "correct": false },
        { "text": "Configure the database in RDS read replica mode with automatic failover to the standby", "correct": false },
        { "text": "Configure the database in RDS Multi-AZ deployment with automatic failover to the standby", "correct": true },
        { "text": "Provision the database via AWS CloudFormation", "correct": false }
      ],
      "explanation": "Correct option: RDS Multi-AZ deployment with automatic failover. It creates a standby in another AZ and automatically fails over without endpoint change. Read replicas require manual promotion. Elastic Beanstalk and CloudFormation don't provide HA.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 29,
      "questionText": "Which of the following AWS services has encryption enabled by default?",
      "options": [
        { "text": "Amazon Elastic File System (Amazon EFS)", "correct": false },
        { "text": "AWS CloudTrail Logs", "correct": true },
        { "text": "Amazon Relational Database Service (Amazon RDS)", "correct": false },
        { "text": "Amazon Elastic Block Store (Amazon EBS)", "correct": false }
      ],
      "explanation": "Correct option: AWS CloudTrail Logs. By default, CloudTrail log files are encrypted with SSE-S3. EFS, RDS, and EBS encryption are optional and must be enabled by the user.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 30,
      "questionText": "Compared to the on-demand instance prices, what is the highest possible discount offered for spot instances?",
      "options": [
        { "text": "90", "correct": true },
        { "text": "50", "correct": false },
        { "text": "75", "correct": false },
        { "text": "10", "correct": false }
      ],
      "explanation": "Correct option: 90%. Spot instances can be up to 90% cheaper than On-Demand. Discounts vary based on supply and demand.",
      "domain": "Technology"
    },
    {
      "questionNumber": 31,
      "questionText": "Which AWS services can be used to decouple components of a microservices based application on AWS Cloud? (Select two)",
      "options": [
        { "text": "AWS Step Functions", "correct": false },
        { "text": "AWS Lambda", "correct": false },
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": false },
        { "text": "Amazon Simple Queue Service (SQS)", "correct": true },
        { "text": "Amazon Simple Notification Service (SNS)", "correct": true }
      ],
      "explanation": "Correct options: SQS (message queue) and SNS (pub/sub) decouple microservices. Step Functions coordinates workflows, Lambda runs code, EC2 is compute – none directly decouple.",
      "domain": "Technology"
    },
    {
      "questionNumber": 32,
      "questionText": "Which of the following AWS Support plans provide access to guidance, configuration, and troubleshooting of AWS interoperability with third-party software? (Select two)",
      "options": [
        { "text": "AWS Corporate Support", "correct": false },
        { "text": "AWS Basic Support", "correct": false },
        { "text": "AWS Business Support", "correct": true },
        { "text": "AWS Developer Support", "correct": false },
        { "text": "AWS Enterprise Support", "correct": true }
      ],
      "explanation": "Correct options: AWS Business Support and AWS Enterprise Support provide guidance on third-party software interoperability. Basic and Developer do not; Corporate is a distractor.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 33,
      "questionText": "Which of the following is the MOST cost-effective option to purchase an EC2 Reserved Instance (RI)?",
      "options": [
        { "text": "Partial upfront payment option with standard 3-years term", "correct": true },
        { "text": "No upfront payment option with standard 3-years term", "correct": false },
        { "text": "No upfront payment option with standard 1-year term", "correct": false },
        { "text": "All upfront payment option with the standard 1-year term", "correct": false }
      ],
      "explanation": "Correct option: Partial upfront with 3-year term (59% savings vs On-Demand). 3-year terms have higher discounts than 1-year; partial upfront gives better discount than no upfront; all upfront for 1-year gives only 40% savings.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 34,
      "questionText": "A big data analytics company is moving its IT infrastructure from an on-premises data center to AWS Cloud. The company has some server-bound software licenses that it wants to use on AWS. As a Cloud Practitioner, which of the following EC2 instance types would you recommend to the company?",
      "options": [
        { "text": "Reserved Instance (RI)", "correct": false },
        { "text": "Dedicated Host", "correct": true },
        { "text": "Dedicated Instance", "correct": false },
        { "text": "On-Demand Instance", "correct": false }
      ],
      "explanation": "Correct option: Dedicated Host. It provides a physical server fully dedicated for your use, allowing you to use existing server-bound software licenses. Dedicated Instance may share hardware with other instances from the same account, RI is a billing discount, On-Demand is shared hardware.",
      "domain": "Technology"
    },
    {
      "questionNumber": 35,
      "questionText": "Which AWS Service can be used to mitigate a Distributed Denial of Service (DDoS) attack?",
      "options": [
        { "text": "AWS Key Management Service (AWS KMS)", "correct": false },
        { "text": "AWS Systems Manager", "correct": false },
        { "text": "Amazon CloudWatch", "correct": false },
        { "text": "AWS Shield", "correct": true }
      ],
      "explanation": "Correct option: AWS Shield. It provides DDoS protection (Standard free, Advanced paid). KMS manages keys, Systems Manager automates operations, CloudWatch monitors metrics.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 36,
      "questionText": "Which of the following AWS services support reservations to optimize costs? (Select three)",
      "options": [
        { "text": "Amazon DocumentDB", "correct": false },
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": true },
        { "text": "Amazon DynamoDB", "correct": true },
        { "text": "AWS Lambda", "correct": false },
        { "text": "Amazon Relational Database Service (Amazon RDS)", "correct": true },
        { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": false }
      ],
      "explanation": "Correct options: EC2, DynamoDB, and RDS support reservations (RIs, reserved capacity, RDS RIs). DocumentDB, Lambda, S3 do not have reservation pricing.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 37,
      "questionText": "Which AWS Route 53 routing policy would you use to route traffic to multiple resources and also choose how much traffic is routed to each resource?",
      "options": [
        { "text": "Weighted routing", "correct": true },
        { "text": "Failover routing", "correct": false },
        { "text": "latency-based routing", "correct": false },
        { "text": "Simple routing", "correct": false }
      ],
      "explanation": "Correct option: Weighted routing. It lets you associate multiple resources with a single domain name and assign relative weights to control traffic distribution. Failover for active-passive, latency-based for best latency, simple for single resource.",
      "domain": "Technology"
    },
    {
      "questionNumber": 38,
      "questionText": "A Project Manager, working on AWS for the first time, is confused about how credits are used in AWS. There are two credits available in the manager's account. Credit one is for $100, expires July 2022, and can be used for either Amazon S3 or Amazon EC2. Credit two is for $50, expires December 2022, and can be used only for Amazon EC2. The manager's AWS account has incurred two charges: $1000 for Amazon EC2 and $500 for Amazon S3. What will be the outcome on the overall bill once the credits are used? (Select two)",
      "options": [
        { "text": "Only one credit can be used in one billing cycle and the customer has a choice to choose from the available ones", "correct": false },
        { "text": "Credit one is applied, which expires in July, to Amazon S3 usage which leaves you with a $1000 Amazon EC2 charge and a $400 Amazon S3 charge", "correct": false },
        { "text": "Credit one is applied, which expires in July, to the Amazon EC2 charge which leaves you with a $900 Amazon EC2 charge and a $500 Amazon S3 charge", "correct": true },
        { "text": "Then, credit two is applied to $500 for Amazon S3 usage", "correct": false },
        { "text": "Then, credit two is applied to the remaining $900 of Amazon EC2 usage", "correct": true }
      ],
      "explanation": "Correct options: Credit one (expires July) applied to EC2, leaving $900 EC2 + $500 S3; then credit two applied to remaining $900 EC2. Credits are applied in order: soonest expiring, least number of applicable products, oldest credit. Both credits can be used in same billing cycle.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 39,
      "questionText": "Which of the following are the storage services offered by the AWS Cloud? (Select two)",
      "options": [
        { "text": "Amazon Simple Notification Service (SNS)", "correct": false },
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": false },
        { "text": "Amazon Elastic File System (Amazon EFS)", "correct": true },
        { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": true },
        { "text": "Amazon Simple Queue Service (SQS)", "correct": false }
      ],
      "explanation": "Correct options: S3 (object storage) and EFS (file storage). SNS is messaging, EC2 is compute, SQS is queuing.",
      "domain": "Technology"
    },
    {
      "questionNumber": 40,
      "questionText": "An IT company is planning to migrate from an on-premises environment to AWS Cloud. Which of the following expense areas would result in cost savings when the company moves to AWS Cloud? (Select two)",
      "options": [
        { "text": "Developer salary", "correct": false },
        { "text": "Project manager salary", "correct": false },
        { "text": "Data center hardware infrastructure expenditure", "correct": true },
        { "text": "Data center physical security expenditure", "correct": true },
        { "text": "SaaS application license fee", "correct": false }
      ],
      "explanation": "Correct options: Data center hardware and physical security expenditures are eliminated. Developer/project manager salaries and SaaS license fees remain.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 41,
      "questionText": "According to the AWS Cloud Adoption Framework (AWS CAF), what are two tasks that a company should perform when planning to migrate to the AWS Cloud and aiming to become more responsive to customer inquiries and feedback as part of their organizational transformation? (Select two)",
      "options": [
        { "text": "Leverage agile methods to rapidly iterate and evolve", "correct": true },
        { "text": "Organize your teams around products and value streams", "correct": true },
        { "text": "Leverage legacy infrastructure for cost efficiencies", "correct": false },
        { "text": "Organize your teams around bureaucratic design principles", "correct": false },
        { "text": "Create new analytical insights with existing products and services", "correct": false }
      ],
      "explanation": "Correct options: Leverage agile methods and organize teams around products/value streams. Legacy infrastructure and bureaucratic principles hinder agility. Creating new insights is not directly about responsiveness.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 42,
      "questionText": "Which AWS service will help you receive alerts when the reservation utilization falls below the defined threshold?",
      "options": [
        { "text": "AWS Budgets", "correct": true },
        { "text": "AWS Trusted Advisor", "correct": false },
        { "text": "AWS CloudTrail", "correct": false },
        { "text": "AWS Pricing Calculator", "correct": false }
      ],
      "explanation": "Correct option: AWS Budgets. It can set reservation utilization or coverage targets and alert when utilization drops below threshold. Trusted Advisor provides recommendations, CloudTrail logs API calls, Pricing Calculator estimates costs.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 43,
      "questionText": "A multi-national company has just moved its infrastructure from its on-premises data center to AWS Cloud. As part of the shared responsibility model, AWS is responsible for which of the following?",
      "options": [
        { "text": "Service and Communications Protection or Zone Security", "correct": false },
        { "text": "Patching guest OS", "correct": false },
        { "text": "Configuring customer applications", "correct": false },
        { "text": "Physical and Environmental controls", "correct": true }
      ],
      "explanation": "Correct option: Physical and Environmental controls (inherited controls). AWS manages physical security of data centers. Service protection, patching guest OS, and configuring applications are customer responsibilities.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 44,
      "questionText": "Which of the following statements are CORRECT regarding the Availability Zone (AZ) specific characteristics of Amazon Elastic Block Store (EBS) and Amazon Elastic File System (Amazon EFS) storage types?",
      "options": [
        { "text": "EBS volume can be attached to one or more instances in multiple Availability Zones (AZ) and EFS file system can be mounted on instances across multiple Availability Zones (AZ)", "correct": false },
        { "text": "EBS volume can be attached to one or more instances in multiple Availability Zones (AZ) and EFS file system can be mounted on instances in the same Availability Zone (AZ)", "correct": false },
        { "text": "EBS volume can be attached to a single instance in the same Availability Zone (AZ) whereas EFS file system can be mounted on instances across multiple Availability Zones (AZ)", "correct": true },
        { "text": "EBS volume can be attached to a single instance in the same Availability Zone (AZ) and EFS file system can only be mounted on instances in the same Availability Zone (AZ)", "correct": false }
      ],
      "explanation": "Correct option: EBS attaches to a single instance in the same AZ (except multi-attach for io1/io2, but still same AZ). EFS can be mounted on instances across multiple AZs in a region.",
      "domain": "Technology"
    },
    {
      "questionNumber": 45,
      "questionText": "A financial services company wants to ensure that its AWS account activity meets the governance, compliance and auditing norms. As a Cloud Practitioner, which AWS service would you recommend for this use-case?",
      "options": [
        { "text": "AWS CloudTrail", "correct": true },
        { "text": "Amazon CloudWatch", "correct": false },
        { "text": "AWS Trusted Advisor", "correct": false },
        { "text": "AWS Config", "correct": false }
      ],
      "explanation": "Correct option: AWS CloudTrail. It logs account activity for governance, compliance, and auditing. CloudWatch monitors metrics, Trusted Advisor gives best practices, Config tracks configuration changes.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 46,
      "questionText": "Which of the following Amazon S3 storage classes takes the most time to retrieve data (also known as first byte latency)?",
      "options": [
        { "text": "Amazon S3 Glacier Flexible Retrieval", "correct": false },
        { "text": "Amazon S3 Intelligent-Tiering", "correct": false },
        { "text": "Amazon S3 Standard", "correct": false },
        { "text": "Amazon S3 Glacier Deep Archive", "correct": true }
      ],
      "explanation": "Correct option: S3 Glacier Deep Archive (12-48 hours retrieval). Glacier Flexible Retrieval (minutes to hours), Intelligent-Tiering and Standard (milliseconds).",
      "domain": "Technology"
    },
    {
      "questionNumber": 47,
      "questionText": "A startup wants to migrate its data and applications from the on-premises data center to AWS Cloud. Which of the following options can be used by the startup to help with this migration? (Select two)",
      "options": [
        { "text": "Leverage AWS Professional Services to accelerate the infrastructure migration", "correct": true },
        { "text": "Use AWS Trusted Advisor to automate the infrastructure migration", "correct": false },
        { "text": "Utilize AWS Partner Network (APN) to build a custom solution for this infrastructure migration", "correct": true },
        { "text": "Raise a support ticket with AWS Support for further assistance", "correct": false },
        { "text": "Consult moderators on AWS Developer Forums", "correct": false }
      ],
      "explanation": "Correct options: AWS Professional Services (global team of experts) and APN Consulting Partners can help with migration. Trusted Advisor does not automate migration, Support tickets are not for complex migrations, Developer forums are community.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 48,
      "questionText": "A cyber forensics team has detected that AWS owned IP-addresses are being used to carry out malicious attacks. As this constitutes prohibited use of AWS services, which of the following is the correct solution to address this issue?",
      "options": [
        { "text": "Write an email to Jeff Bezos, the founder of Amazon, with the details of the incident", "correct": false },
        { "text": "Contact AWS Developer Forum moderators", "correct": false },
        { "text": "Contact AWS Abuse Team", "correct": true },
        { "text": "Contact AWS Support", "correct": false }
      ],
      "explanation": "Correct option: Contact AWS Abuse Team (via abuse@amazonaws.com). They handle abusive behavior like port scanning, DoS, spam. Support does not handle abuse reports; Developer forums and Jeff Bezos are not appropriate.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 49,
      "questionText": "Which of the following is an INCORRECT statement about Scaling, a design principle of Reliability pillar of the AWS Well-Architected Framework?",
      "options": [
        { "text": "Fault tolerance is achieved by a scale out operation", "correct": false },
        { "text": "A scale out operation implies you scale by adding more instances to your existing pool of resources", "correct": false },
        { "text": "Fault tolerance is achieved by a scale up operation", "correct": true },
        { "text": "A scale up operation implies you scale by adding more power (CPU, RAM) to your existing machine/node", "correct": false }
      ],
      "explanation": "Correct option (incorrect statement): Fault tolerance is achieved by a scale up operation – this is false. Scale up (vertical) adds resources to a single node, creating a single point of failure. Scale out (horizontal) adds multiple instances, improving fault tolerance.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 50,
      "questionText": "A research group wants to use EC2 instances to run a scientific computation application that already has a fault tolerant architecture. The application needs high-performance hardware disks that provide fast I/O performance. As a Cloud Practitioner, which of the following storage options would you recommend as the MOST cost-effective solution?",
      "options": [
        { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": false },
        { "text": "Amazon Elastic Block Store (EBS)", "correct": false },
        { "text": "Amazon Elastic File System (Amazon EFS)", "correct": false },
        { "text": "Instance Store", "correct": true }
      ],
      "explanation": "Correct option: Instance Store. It provides temporary, high-performance block storage physically attached to the host, with very low latency, and is included in instance cost. Since the application is fault-tolerant, ephemeral storage is acceptable. EBS, EFS, S3 are not hardware disks on the instance.",
      "domain": "Technology"
    },
    {
      "questionNumber": 51,
      "questionText": "AWS Shield Advanced provides expanded DDoS attack protection for web applications running on which of the following resources? (Select two)",
      "options": [
        { "text": "AWS Elastic Beanstalk", "correct": false },
        { "text": "Amazon API Gateway", "correct": false },
        { "text": "AWS CloudFormation", "correct": false },
        { "text": "AWS Global Accelerator", "correct": true },
        { "text": "Amazon Route 53", "correct": true }
      ],
      "explanation": "Correct options: AWS Global Accelerator and Amazon Route 53. Shield Advanced also protects EC2, ELB, and CloudFront. API Gateway, CloudFormation, Elastic Beanstalk are not supported for Shield Advanced.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 52,
      "questionText": "A medical research startup wants to understand the compliance of AWS services concerning HIPAA guidelines. Which AWS service can be used to review the HIPAA compliance and governance-related documents on AWS?",
      "options": [
        { "text": "AWS Trusted Advisor", "correct": false },
        { "text": "AWS Artifact", "correct": true },
        { "text": "AWS Secrets Manager", "correct": false },
        { "text": "AWS Systems Manager", "correct": false }
      ],
      "explanation": "Correct option: AWS Artifact. It provides on-demand access to AWS compliance reports, including SOC, PCI, and HIPAA (BAA). Trusted Advisor gives best practice checks, Secrets Manager manages secrets, Systems Manager automates operations.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 53,
      "questionText": "Which of the following is a recommended way to provide programmatic access to AWS resources?",
      "options": [
        { "text": "Create a new IAM user and share the username and password", "correct": false },
        { "text": "Use Access Key ID and Secret Access Key to access AWS resources programmatically", "correct": true },
        { "text": "Use AWS Multi-Factor Authentication (AWS MFA) to access AWS resources programmatically", "correct": false },
        { "text": "Use IAM user group to access AWS resources programmatically", "correct": false }
      ],
      "explanation": "Correct option: Access Key ID and Secret Access Key. These are long-term credentials for programmatic access (CLI, SDK, API). Username/password are for console, MFA is an additional factor, IAM user group is for managing permissions.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 54,
      "questionText": "A company runs an application on a fleet of EC2 instances. The company wants to automate the traditional maintenance job of running timely assessments and checking for OS vulnerabilities. As a Cloud Practitioner, which service will you suggest for this use case?",
      "options": [
        { "text": "Amazon GuardDuty", "correct": false },
        { "text": "Amazon Inspector", "correct": true },
        { "text": "AWS Shield", "correct": false },
        { "text": "Amazon Macie", "correct": false }
      ],
      "explanation": "Correct option: Amazon Inspector. It automatically assesses EC2 instances for vulnerabilities and deviations from best practices. GuardDuty detects threats at account level, Shield protects against DDoS, Macie discovers sensitive data in S3.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 55,
      "questionText": "An intern at an IT company provisioned a Linux based On-demand EC2 instance with per-second billing but terminated it within 30 seconds as he wanted to provision another instance type. What is the duration for which the instance would be charged?",
      "options": [
        { "text": "30 seconds", "correct": false },
        { "text": "60 seconds", "correct": true },
        { "text": "600 seconds", "correct": false },
        { "text": "300 seconds", "correct": false }
      ],
      "explanation": "Correct option: 60 seconds (minimum charge for Linux EC2 instances). Even if terminated earlier, you are billed for a minimum of 60 seconds.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 56,
      "questionText": "Which type of cloud computing does Amazon Elastic Compute Cloud (EC2) represent?",
      "options": [
        { "text": "Platform as a Service (PaaS)", "correct": false },
        { "text": "Infrastructure as a Service (IaaS)", "correct": true },
        { "text": "Network as a Service (NaaS)", "correct": false },
        { "text": "Software as a Service (SaaS)", "correct": false }
      ],
      "explanation": "Correct option: IaaS. EC2 provides virtual servers, storage, and networking – basic building blocks of cloud IT. PaaS (Elastic Beanstalk), SaaS (Rekognition), NaaS is a distractor.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 57,
      "questionText": "A company wants to move to AWS cloud and release new features with quick iterations by utilizing relevant AWS services whenever required. Which of the following characteristics of AWS Cloud does it want to leverage?",
      "options": [
        { "text": "Reliability", "correct": false },
        { "text": "Elasticity", "correct": false },
        { "text": "Agility", "correct": true },
        { "text": "Scalability", "correct": false }
      ],
      "explanation": "Correct option: Agility. The ability to rapidly develop, test, and launch software, and instantly deploy new applications. Reliability is recovery, elasticity is resource scaling, scalability is growth capacity.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 58,
      "questionText": "An organization is currently operating MySQL databases on its own on-premises servers. To reduce the operational burden of database maintenance and management, the organization wants to move to a fully managed AWS database offering. Which migration strategy best aligns with this goal?",
      "options": [
        { "text": "Replatform", "correct": true },
        { "text": "Refactor", "correct": false },
        { "text": "Repurchase", "correct": false },
        { "text": "Rehost", "correct": false }
      ],
      "explanation": "Correct option: Replatform (lift, tinker, and shift). Moving from self-managed MySQL to Amazon RDS for MySQL without changing the application code significantly. Rehost would keep it self-managed on EC2, refactor changes architecture, repurchase replaces with SaaS.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 59,
      "questionText": "Which of the following are the advantages of cloud computing? (Select three)",
      "options": [
        { "text": "Spend money on building and maintaining data centers", "correct": false },
        { "text": "Go global in minutes and deploy applications in multiple regions around the world with just a few clicks", "correct": true },
        { "text": "Trade variable expense for capital expense", "correct": false },
        { "text": "Trade capital expense for variable expense", "correct": true },
        { "text": "Allocate a few months of planning for your infrastructure capacity needs", "correct": false },
        { "text": "Benefit from massive economies of scale", "correct": true }
      ],
      "explanation": "Correct options: Go global in minutes, trade capital expense for variable expense, benefit from massive economies of scale. Cloud eliminates spending on data centers, variable-to-capital is incorrect, and you stop guessing capacity.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 60,
      "questionText": "Which option is a common stakeholder role for the AWS Cloud Adoption Framework (AWS CAF) platform perspective? (Select two)",
      "options": [
        { "text": "Engineer", "correct": true },
        { "text": "Chief Technology Officer (CTO)", "correct": true },
        { "text": "Chief Information Officer (CIO)", "correct": false },
        { "text": "Chief Product Officer (CPO)", "correct": false },
        { "text": "Chief Data Officer (CDO)", "correct": false }
      ],
      "explanation": "Correct options: Engineer and CTO. Platform perspective stakeholders include CTO, technology leaders, architects, and engineers. CIO, CPO, CDO are associated with other perspectives (People, Business, etc.).",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 61,
      "questionText": "Which of the following statements are CORRECT regarding the AWS VPC service? (Select two)",
      "options": [
        { "text": "A network access control list (network ACL) can have allow rules only", "correct": false },
        { "text": "A Network Address Translation instance (NAT instance) is managed by AWS", "correct": false },
        { "text": "A Security Group can have allow rules only", "correct": true },
        { "text": "A Security Group can have both allow and deny rules", "correct": false },
        { "text": "A Network Address Translation gateway (NAT gateway) is managed by AWS", "correct": true }
      ],
      "explanation": "Correct options: Security Group can have allow rules only (no deny rules), and NAT gateway is managed by AWS (NAT instance is customer-managed). Network ACLs can have both allow and deny rules.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 62,
      "questionText": "Which of the following AWS services can be used to connect a company's on-premises environment to a VPC without using the public internet?",
      "options": [
        { "text": "VPC Endpoint", "correct": false },
        { "text": "Internet Gateway", "correct": false },
        { "text": "AWS Site-to-Site VPN", "correct": false },
        { "text": "AWS Direct Connect", "correct": true }
      ],
      "explanation": "Correct option: Direct Connect. It provides a dedicated private connection from on-premises to VPC, not using the public internet. Site-to-Site VPN uses the internet, VPC Endpoint connects to AWS services (not on-premises), Internet Gateway is for internet.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 63,
      "questionText": "Which of the following is an AWS database service?",
      "options": [
        { "text": "AWS Glue", "correct": false },
        { "text": "Amazon Redshift", "correct": true },
        { "text": "AWS Database Migration Service (AWS DMS)", "correct": false },
        { "text": "AWS Storage Gateway", "correct": false }
      ],
      "explanation": "Correct option: Amazon Redshift (data warehouse). Glue is ETL, DMS is migration service, Storage Gateway is hybrid storage.",
      "domain": "Technology"
    },
    {
      "questionNumber": 64,
      "questionText": "An organization needs to securely access AWS services and establish private connectivity between its Virtual Private Clouds (VPCs) and supported AWS services without using the public internet. Which AWS services can meet this requirement? (Select two)",
      "options": [
        { "text": "AWS PrivateLink", "correct": true },
        { "text": "Amazon Connect", "correct": false },
        { "text": "Amazon Inspector", "correct": false },
        { "text": "AWS Transit Gateway", "correct": true },
        { "text": "AWS Internet Gateway", "correct": false }
      ],
      "explanation": "Correct options: AWS PrivateLink (private connectivity to services) and AWS Transit Gateway (central hub connecting VPCs and on-premises). Amazon Connect is contact center, Inspector is security assessment, Internet Gateway connects to public internet.",
      "domain": "Technology"
    },
    {
      "questionNumber": 65,
      "questionText": "Which AWS Support plan provides architectural guidance contextual to your specific use-cases?",
      "options": [
        { "text": "AWS Business Support", "correct": true },
        { "text": "AWS Enterprise On-Ramp Support", "correct": false },
        { "text": "AWS Enterprise Support", "correct": false },
        { "text": "AWS Developer Support", "correct": false }
      ],
      "explanation": "Correct option: AWS Business Support. It provides 24x7 access to technical support and architectural guidance contextual to your specific use-cases. Developer Support gives general guidance, Enterprise and Enterprise On-Ramp provide consultative review but are higher tier and more expensive.",
      "domain": "Billing and Pricing"
    }
  ]
};
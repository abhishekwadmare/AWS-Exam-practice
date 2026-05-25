var EXAM_DATA = {
  examNumber: 2,
  title: "Practice Test #2 - AWS Certified Cloud Practitioner",
  description: "Full practice exam with 65 questions covering AWS Cloud Concepts, Technology, Security, and Billing & Pricing.",
  questions: [
    {
      "questionNumber": 1,
      "questionText": "Which of the following AWS services are always free to use (Select two)?",
      "options": [
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": false },
        { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": false },
        { "text": "AWS Auto Scaling", "correct": true },
        { "text": "Amazon DynamoDB", "correct": false },
        { "text": "AWS Identity and Access Management (AWS IAM)", "correct": true }
      ],
      "explanation": "Correct options: AWS Identity and Access Management (IAM) and AWS Auto Scaling. IAM is offered at no additional charge. AWS Auto Scaling is also free; you pay only for the underlying AWS resources. EC2, S3, and DynamoDB have usage charges.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 2,
      "questionText": "Which Amazon Elastic Compute Cloud (Amazon EC2) pricing model is the most cost-effective and flexible with no requirement for a long term resource commitment or upfront payment but still guarantees that instance would not be interrupted?",
      "options": [
        { "text": "Spot Instance", "correct": false },
        { "text": "On-demand Instance", "correct": true },
        { "text": "Reserved Instance (RI)", "correct": false },
        { "text": "Dedicated Host", "correct": false }
      ],
      "explanation": "Correct option: On-demand Instance. No long-term commitment, no upfront payment, per-second billing, and cannot be interrupted. Spot instances can be terminated, RIs require commitment, Dedicated Hosts are more expensive.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 3,
      "questionText": "According to the AWS Shared Responsibility Model, which of the following are responsibilities of the customer for Amazon RDS?",
      "options": [
        { "text": "Managing the underlying server hardware on which Amazon Relational Database Service (Amazon RDS) runs", "correct": false },
        { "text": "Applying patches to the Amazon Relational Database Service (Amazon RDS) database", "correct": false },
        { "text": "Database encryption", "correct": true },
        { "text": "Applying patches to the underlying OS", "correct": false }
      ],
      "explanation": "Correct option: Database encryption. Customers are responsible for managing their data, including encryption. AWS manages the underlying hardware, OS patches, and RDS database patches because RDS is a managed service.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 4,
      "questionText": "Which of the following statement is correct regarding the AWS pricing policy for data transfer charges into or out of an AWS Region?",
      "options": [
        { "text": "Only outbound data transfer is charged", "correct": true },
        { "text": "Neither inbound nor outbound data transfer are charged", "correct": false },
        { "text": "Both inbound data transfer and outbound data transfer are charged", "correct": false },
        { "text": "Only inbound data transfer is charged", "correct": false }
      ],
      "explanation": "Correct option: Only outbound data transfer is charged. Inbound data transfer to AWS Regions from the internet is free. Outbound data to the internet is billed.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 5,
      "questionText": "Which of the following statements are true about AWS Lambda? (Select two)",
      "options": [
        { "text": "AWS Lambda allows you to install databases on the underlying serverless Operating System", "correct": false },
        { "text": "AWS Lambda provides access to the underlying operating system to control its behavior through code", "correct": false },
        { "text": "AWS Lambda allows you to orchestrate and manage Docker containers to facilitate complex containerized applications on AWS", "correct": false },
        { "text": "You pay for the compute time you consume for AWS Lambda", "correct": true },
        { "text": "AWS Lambda lets you run code without provisioning or managing servers", "correct": true }
      ],
      "explanation": "Correct options: You pay for compute time consumed, and Lambda runs code without provisioning or managing servers. Lambda is serverless, so no access to underlying OS, cannot install databases, and does not orchestrate containers (ECS does).",
      "domain": "Technology"
    },
    {
      "questionNumber": 6,
      "questionText": "A customer has created a VPC and a subnet within AWS Cloud. Which of the following statements is correct?",
      "options": [
        { "text": "A subnet spans all of the Availability Zones (AZ) in the Region whereas an Amazon Virtual Private Cloud (Amazon VPC) spans only one Availability Zone (AZ) in the Region", "correct": false },
        { "text": "Both the Amazon Virtual Private Cloud (Amazon VPC) and the subnet span all of the Availability Zones (AZ) in the Region", "correct": false },
        { "text": "Both the Amazon Virtual Private Cloud (Amazon VPC) and the subnet span only one Availability Zone (AZ) in the Region", "correct": false },
        { "text": "An Amazon Virtual Private Cloud (Amazon VPC) spans all of the Availability Zones (AZ) in the Region whereas a subnet spans only one Availability Zone (AZ) in the Region", "correct": true }
      ],
      "explanation": "Correct option: VPC spans all AZs in the region, subnet spans only one AZ. VPC is regional, subnets are AZ-specific.",
      "domain": "Technology"
    },
    {
      "questionNumber": 7,
      "questionText": "Which AWS technology/service helps you to scale your resources to match supply with demand while still keeping your cloud solution cost-effective?",
      "options": [
        { "text": "AWS Auto Scaling", "correct": true },
        { "text": "AWS CloudFormation", "correct": false },
        { "text": "AWS Systems Manager", "correct": false },
        { "text": "AWS Cost Explorer", "correct": false }
      ],
      "explanation": "Correct option: AWS Auto Scaling. It automatically adjusts capacity to maintain performance and minimize costs. CloudFormation provisions resources, Systems Manager manages operations, Cost Explorer analyzes costs.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 8,
      "questionText": "A company wants a fully managed, flexible, and scalable file storage system, with low latency access, for its Windows-based applications. Which AWS service is the right choice for the company?",
      "options": [
        { "text": "Amazon Elastic File System (Amazon EFS)", "correct": false },
        { "text": "Amazon Elastic Block Storage (Amazon EBS)", "correct": false },
        { "text": "Amazon FSx for Windows File Server", "correct": true },
        { "text": "Amazon FSx for Lustre", "correct": false }
      ],
      "explanation": "Correct option: Amazon FSx for Windows File Server. It provides fully managed Windows file storage with SMB protocol, ideal for Windows-based applications. EFS is NFS for Linux, EBS is block storage, FSx for Lustre is high-performance compute (Linux).",
      "domain": "Technology"
    },
    {
      "questionNumber": 9,
      "questionText": "An organization deploys its IT infrastructure in a combination of its on-premises data center along with AWS Cloud. How would you categorize this deployment model?",
      "options": [
        { "text": "Cloud deployment", "correct": false },
        { "text": "Private deployment", "correct": false },
        { "text": "Mixed deployment", "correct": false },
        { "text": "Hybrid deployment", "correct": true }
      ],
      "explanation": "Correct option: Hybrid deployment. Connects on-premises infrastructure to the cloud. Cloud deployment is fully in cloud, private deployment is on-premises, mixed is not a standard term.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 10,
      "questionText": "What is the primary benefit of deploying an Amazon RDS Multi-AZ database with one standby?",
      "options": [
        { "text": "Amazon RDS Multi-AZ enhances database availability", "correct": true },
        { "text": "Amazon RDS Multi-AZ improves database performance for read-heavy workloads", "correct": false },
        { "text": "Amazon RDS Multi-AZ reduces database usage costs", "correct": false },
        { "text": "Amazon RDS Multi-AZ protects the database from a regional failure", "correct": false }
      ],
      "explanation": "Correct option: Enhances database availability via automatic failover to standby in another AZ. It does not improve read performance (read replicas do), does not reduce costs (adds cost), and does not protect against regional failure (requires multi-region).",
      "domain": "Technology"
    },
    {
      "questionNumber": 11,
      "questionText": "Which AWS support plan provides access to a designated Technical Account Manager (TAM)?",
      "options": [
        { "text": "AWS Enterprise On-Ramp Support", "correct": false },
        { "text": "AWS Enterprise Support", "correct": true },
        { "text": "AWS Business Support", "correct": false },
        { "text": "AWS Developer Support", "correct": false }
      ],
      "explanation": "Correct option: AWS Enterprise Support provides a designated TAM. Enterprise On-Ramp provides a pool of TAMs, not a single designated TAM. Business and Developer do not include TAM.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 12,
      "questionText": "As per the AWS Shared Responsibility Model, which of the following is a responsibility of the customer from a security and compliance point of view?",
      "options": [
        { "text": "Availability Zone (AZ) infrastructure management", "correct": false },
        { "text": "Configuration management for AWS global infrastructure", "correct": false },
        { "text": "Managing patches of the guest operating system on Amazon Elastic Compute Cloud (Amazon EC2)", "correct": true },
        { "text": "Patching/fixing flaws within the AWS infrastructure", "correct": false }
      ],
      "explanation": "Correct option: Managing patches of the guest OS on EC2. AWS manages the global infrastructure, AZs, and patching AWS infrastructure (security of the cloud). Customer is responsible for security in the cloud, including guest OS patches.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 13,
      "questionText": "An e-commerce company wants to assess its applications deployed on Amazon Elastic Compute Cloud (Amazon EC2) instances for vulnerabilities and deviations from AWS best practices. Which AWS service can be used to facilitate this?",
      "options": [
        { "text": "AWS Trusted Advisor", "correct": false },
        { "text": "AWS CloudHSM", "correct": false },
        { "text": "AWS Secrets Manager", "correct": false },
        { "text": "Amazon Inspector", "correct": true }
      ],
      "explanation": "Correct option: Amazon Inspector. It automatically assesses EC2 instances for vulnerabilities and deviations from best practices. Trusted Advisor gives general guidance, CloudHSM manages encryption keys, Secrets Manager manages secrets.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 14,
      "questionText": "A fleet of Amazon EC2 instances spread across different Availability Zones (AZ) needs to access, edit and share file-based data stored centrally on a system. As a Cloud Practitioner, which AWS service would you recommend for this use-case?",
      "options": [
        { "text": "EC2 Instance Store", "correct": false },
        { "text": "Amazon Elastic File System (Amazon EFS)", "correct": true },
        { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": false },
        { "text": "Amazon Elastic Block Store (Amazon EBS)", "correct": false }
      ],
      "explanation": "Correct option: Amazon EFS. It provides a shared file system that can be mounted on multiple EC2 instances across AZs. Instance Store is temporary and single-instance, S3 is object storage (not file system), EBS can be attached to only one instance (except multi-attach limited).",
      "domain": "Technology"
    },
    {
      "questionNumber": 15,
      "questionText": "Which AWS service publishes up-to-the-minute information on the general status and availability of all AWS services in all the Regions of AWS Cloud?",
      "options": [
        { "text": "AWS Health Dashboard – Your account health", "correct": false },
        { "text": "AWS CloudFormation", "correct": false },
        { "text": "Amazon CloudWatch", "correct": false },
        { "text": "AWS Health Dashboard - service health", "correct": true }
      ],
      "explanation": "Correct option: AWS Health Dashboard - service health. It shows overall status of AWS services globally. Your account health gives personalized view. CloudFormation is IaC, CloudWatch monitors metrics.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 16,
      "questionText": "Which of the following statements is INCORRECT about AWS Auto Scaling?",
      "options": [
        { "text": "You can automatically remove unhealthy instances", "correct": false },
        { "text": "You can automatically register new instances to a load balancer", "correct": false },
        { "text": "You can scale out and add more Amazon Elastic Compute Cloud (Amazon EC2) instances to match an increase in demand as well as scale in and remove Amazon Elastic Compute Cloud (Amazon EC2) instances to match a reduced demand", "correct": false },
        { "text": "You can automatically deploy AWS Shield when a DDoS attack is detected", "correct": true }
      ],
      "explanation": "Correct option (incorrect statement): Auto Scaling cannot automatically deploy AWS Shield. The other three are correct features of Auto Scaling.",
      "domain": "Technology"
    },
    {
      "questionNumber": 17,
      "questionText": "A gaming company is looking at a technology/service that can deliver a consistent low-latency gameplay to ensure a great user experience for end-users in various locations. Which AWS technology/service will provide the necessary low-latency access to the end-users?",
      "options": [
        { "text": "AWS Local Zones", "correct": true },
        { "text": "AWS Direct Connect", "correct": false },
        { "text": "AWS Edge Locations", "correct": false },
        { "text": "AWS Wavelength", "correct": false }
      ],
      "explanation": "Correct option: AWS Local Zones. They place compute and storage closer to end-users for low-latency applications. Direct Connect is for on-premises connection, Edge Locations are for CloudFront caching, Wavelength is for 5G edge.",
      "domain": "Technology"
    },
    {
      "questionNumber": 18,
      "questionText": "As per the AWS Shared Responsibility Model, which of the following is a responsibility of AWS from a security and compliance point of view?",
      "options": [
        { "text": "Edge Location Management", "correct": true },
        { "text": "Customer Data", "correct": false },
        { "text": "Identity and Access Management", "correct": false },
        { "text": "Server-side Encryption (SSE)", "correct": false }
      ],
      "explanation": "Correct option: Edge Location Management. AWS is responsible for security of the cloud, including global infrastructure (Regions, AZs, Edge Locations). Customer manages customer data, IAM, and server-side encryption (except for some managed services where AWS provides default encryption).",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 19,
      "questionText": "What are the different gateway types supported by AWS Storage Gateway service?",
      "options": [
        { "text": "Tape Gateway, Object Gateway and Volume Gateway", "correct": false },
        { "text": "Tape Gateway, File Gateway and Volume Gateway", "correct": true },
        { "text": "Tape Gateway, File Gateway and Block Gateway", "correct": false },
        { "text": "Object Gateway, File Gateway and Block Gateway", "correct": false }
      ],
      "explanation": "Correct option: Tape Gateway, File Gateway, and Volume Gateway. Object Gateway and Block Gateway are not valid types.",
      "domain": "Technology"
    },
    {
      "questionNumber": 20,
      "questionText": "A developer has written a simple web application in PHP and he wants to just upload his code to AWS Cloud and have AWS handle the deployment automatically but still wants access to the underlying operating system for further enhancements. As a Cloud Practioner, which of the following AWS services would you recommend for this use-case?",
      "options": [
        { "text": "AWS Elastic Beanstalk", "correct": true },
        { "text": "AWS CloudFormation", "correct": false },
        { "text": "Amazon Elastic Container Service (Amazon ECS)", "correct": false },
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": false }
      ],
      "explanation": "Correct option: AWS Elastic Beanstalk. It automates deployment and gives you access to underlying resources. CloudFormation requires defining infrastructure, ECS is for containers, EC2 requires manual management.",
      "domain": "Technology"
    },
    {
      "questionNumber": 21,
      "questionText": "Which AWS service can be used to store, manage, and deploy Docker container images?",
      "options": [
        { "text": "AWS Lambda", "correct": false },
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": false },
        { "text": "Amazon Elastic Container Registry (Amazon ECR)", "correct": true },
        { "text": "Amazon Elastic Container Service (Amazon ECS)", "correct": false }
      ],
      "explanation": "Correct option: Amazon ECR. It stores and manages Docker container images. ECS runs containers, EC2 is compute, Lambda is serverless.",
      "domain": "Technology"
    },
    {
      "questionNumber": 22,
      "questionText": "Which policy describes prohibited uses of the web services offered by Amazon Web Services?",
      "options": [
        { "text": "AWS Fair Use Policy", "correct": false },
        { "text": "AWS Applicable Use Policy", "correct": false },
        { "text": "AWS Trusted Advisor", "correct": false },
        { "text": "AWS Acceptable Use Policy", "correct": true }
      ],
      "explanation": "Correct option: AWS Acceptable Use Policy. It defines prohibited uses. Fair Use and Applicable Use are made-up, Trusted Advisor is a best practice tool.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 23,
      "questionText": "A company's flagship application runs on a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances. As per the new policies, the system administrators are looking for the best way to provide secure shell access to Amazon Elastic Compute Cloud (Amazon EC2) instances without opening new ports or using public IP addresses. Which tool/service will help you achieve this requirement?",
      "options": [
        { "text": "Amazon Route 53", "correct": false },
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2) Instance Connect", "correct": false },
        { "text": "Amazon Inspector", "correct": false },
        { "text": "AWS Systems Manager Session Manager", "correct": true }
      ],
      "explanation": "Correct option: AWS Systems Manager Session Manager. It provides secure shell access without opening inbound ports or needing public IPs. EC2 Instance Connect requires port 22 open. Route 53 is DNS, Inspector is security assessment.",
      "domain": "Technology"
    },
    {
      "questionNumber": 24,
      "questionText": "AWS Compute Optimizer delivers recommendations for which of the following AWS resources? (Select two)",
      "options": [
        { "text": "Amazon Elastic File System (Amazon EFS), AWS Lambda functions", "correct": false },
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2) instances, Amazon EC2 Auto Scaling groups", "correct": true },
        { "text": "AWS Lambda functions, Amazon Simple Storage Service (Amazon S3)", "correct": false },
        { "text": "Amazon Elastic Block Store (Amazon EBS), AWS Lambda functions", "correct": true },
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2) instances, Amazon Elastic File System (Amazon EFS)", "correct": false }
      ],
      "explanation": "Correct options: EC2 instances and EC2 Auto Scaling groups, EBS volumes and Lambda functions. Compute Optimizer does not support EFS or S3.",
      "domain": "Technology"
    },
    {
      "questionNumber": 25,
      "questionText": "Which of the following solutions can you use to connect your on-premises network with AWS Cloud (Select two)?",
      "options": [
        { "text": "Amazon Virtual Private Cloud (Amazon VPC)", "correct": false },
        { "text": "Internet Gateway", "correct": false },
        { "text": "AWS Virtual Private Network (VPN)", "correct": true },
        { "text": "AWS Direct Connect", "correct": true },
        { "text": "Amazon Route 53", "correct": false }
      ],
      "explanation": "Correct options: AWS VPN (Site-to-Site) and AWS Direct Connect. VPC is a virtual network in AWS, Internet Gateway connects VPC to internet, Route 53 is DNS.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 26,
      "questionText": "Which of the following AWS services comes under the Software as a Service (SaaS) Cloud Computing Type?",
      "options": [
        { "text": "Amazon Rekognition", "correct": true },
        { "text": "AWS Elastic Beanstalk", "correct": false },
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": false },
        { "text": "Elastic Load Balancing (ELB)", "correct": false }
      ],
      "explanation": "Correct option: Amazon Rekognition (SaaS). Elastic Beanstalk is PaaS, EC2 is IaaS, ELB is a networking service (IaaS).",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 27,
      "questionText": "Which AWS service should be used when you want to run container applications, but want to avoid the operational overhead of scaling, patching, securing, and managing servers?",
      "options": [
        { "text": "Amazon Elastic Container Service (Amazon ECS) - EC2 launch type", "correct": false },
        { "text": "Amazon Elastic Container Service (Amazon ECS) - Fargate launch type", "correct": true },
        { "text": "AWS Lambda", "correct": false },
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": false }
      ],
      "explanation": "Correct option: ECS Fargate launch type (serverless). ECS EC2 launch type requires managing EC2 instances, Lambda does not support containers, EC2 requires full management.",
      "domain": "Technology"
    },
    {
      "questionNumber": 28,
      "questionText": "Which of the following AWS services is essential for implementing security of resources in AWS Cloud?",
      "options": [
        { "text": "AWS Web Application Firewall (AWS WAF)", "correct": false },
        { "text": "AWS Identity and Access Management (IAM)", "correct": true },
        { "text": "Amazon CloudWatch", "correct": false },
        { "text": "AWS Shield", "correct": false }
      ],
      "explanation": "Correct option: IAM. It controls access to AWS resources. WAF protects web apps, CloudWatch monitors, Shield protects against DDoS – but IAM is foundational for security.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 29,
      "questionText": "What are the fundamental drivers of cost with AWS Cloud?",
      "options": [
        { "text": "Compute, Storage and Outbound Data Transfer", "correct": true },
        { "text": "Compute, Databases and Inbound Data Transfer", "correct": false },
        { "text": "Compute, Storage and Inbound Data Transfer", "correct": false },
        { "text": "Compute, Databases and Outbound Data Transfer", "correct": false }
      ],
      "explanation": "Correct option: Compute, Storage, and Outbound Data Transfer. Inbound data transfer is free, databases are not a fundamental driver (they fall under compute/storage).",
      "domain": "Technology"
    },
    {
      "questionNumber": 30,
      "questionText": "The AWS Well-Architected Framework provides guidance on building cloud based applications using AWS best practices. Which of the following options are the pillars mentioned in the AWS Well-Architected Framework? (Select two)",
      "options": [
        { "text": "Elasticity", "correct": false },
        { "text": "Cost Optimization", "correct": true },
        { "text": "Reliability", "correct": true },
        { "text": "Availability", "correct": false },
        { "text": "Scalability", "correct": false }
      ],
      "explanation": "Correct options: Cost Optimization and Reliability. Other pillars: Operational Excellence, Security, Performance Efficiency, Sustainability. Elasticity, Availability, Scalability are not pillars.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 31,
      "questionText": "Which of the following AWS services can be used to prevent Distributed Denial-of-Service (DDoS) attack? (Select three)",
      "options": [
        { "text": "AWS Shield", "correct": true },
        { "text": "Amazon CloudFront with Amazon Route 53", "correct": true },
        { "text": "AWS Trusted Advisor", "correct": false },
        { "text": "AWS Web Application Firewall (AWS WAF)", "correct": true },
        { "text": "Amazon Inspector", "correct": false },
        { "text": "AWS CloudHSM", "correct": false }
      ],
      "explanation": "Correct options: AWS Shield, AWS WAF, and Amazon CloudFront with Route 53. Trusted Advisor gives advice, Inspector assesses vulnerabilities, CloudHSM manages encryption keys.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 32,
      "questionText": "A photo sharing web application wants to store thumbnails of user-uploaded images on Amazon Simple Storage Service (Amazon S3). The thumbnails are rarely used but need to be immediately accessible from the web application. The thumbnails can be regenerated easily if they are lost. Which is the most cost-effective way to store these thumbnails on Amazon Simple Storage Service (Amazon S3)?",
      "options": [
        { "text": "Use Amazon S3 Glacier Flexible Retrieval to store the thumbnails", "correct": false },
        { "text": "Use Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) to store the thumbnails", "correct": true },
        { "text": "Use Amazon S3 Standard-Infrequent Access (S3 Standard-IA) to store the thumbnails", "correct": false },
        { "text": "Use Amazon S3 Standard to store the thumbnails", "correct": false }
      ],
      "explanation": "Correct option: S3 One Zone-IA. It is lower cost than Standard-IA, and since thumbnails can be regenerated, single AZ is acceptable. Glacier has long retrieval times, Standard is more expensive.",
      "domain": "Technology"
    },
    {
      "questionNumber": 33,
      "questionText": "Which characteristic of Cloud Computing imparts the ability to acquire resources as you need and release when you no longer need them?",
      "options": [
        { "text": "Elasticity", "correct": true },
        { "text": "Reliability", "correct": false },
        { "text": "Resiliency", "correct": false },
        { "text": "Durability", "correct": false }
      ],
      "explanation": "Correct option: Elasticity. Reliability is recovery from failures, resiliency is ability to withstand disruptions, durability is data persistence.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 34,
      "questionText": "A retail company has multiple AWS accounts for each of its departments. Which of the following AWS services can be used to set up consolidated billing and a single payment method for these AWS accounts?",
      "options": [
        { "text": "AWS Organizations", "correct": true },
        { "text": "AWS Budgets", "correct": false },
        { "text": "AWS Secrets Manager", "correct": false },
        { "text": "AWS Cost Explorer", "correct": false }
      ],
      "explanation": "Correct option: AWS Organizations. It provides consolidated billing and single payment method. Budgets sets alerts, Secrets Manager manages secrets, Cost Explorer visualizes costs.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 35,
      "questionText": "An organization has a complex IT architecture involving a lot of system dependencies and it wants to track the history of changes to each resource. Which AWS service will help the organization track the history of configuration changes for all the resources?",
      "options": [
        { "text": "AWS CloudTrail", "correct": false },
        { "text": "AWS Config", "correct": true },
        { "text": "AWS Service Catalog", "correct": false },
        { "text": "AWS CloudFormation", "correct": false }
      ],
      "explanation": "Correct option: AWS Config. It records configuration history and changes. CloudTrail records API calls, Service Catalog manages IT service catalogs, CloudFormation provisions infrastructure.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 36,
      "questionText": "Which AWS service can be used to provision resources to run big data workloads on Hadoop clusters?",
      "options": [
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": false },
        { "text": "AWS Batch", "correct": false },
        { "text": "Amazon EMR", "correct": true },
        { "text": "AWS Step Functions", "correct": false }
      ],
      "explanation": "Correct option: Amazon EMR (Elastic MapReduce). It runs Hadoop clusters. EC2 is raw compute, Batch runs batch jobs, Step Functions coordinates workflows.",
      "domain": "Technology"
    },
    {
      "questionNumber": 37,
      "questionText": "An IT company wants to run a log backup process every Monday at 2 AM. The usual runtime of the process is 5 minutes. As a Cloud Practitioner, which AWS services would you recommend to build a serverless solution for this use-case? (Select two)",
      "options": [
        { "text": "AWS Lambda", "correct": true },
        { "text": "Amazon Eventbridge", "correct": true },
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": false },
        { "text": "AWS Systems Manager", "correct": false },
        { "text": "AWS Step Function", "correct": false }
      ],
      "explanation": "Correct options: AWS Lambda (serverless compute) and Amazon EventBridge (scheduler). EC2 is not serverless, Systems Manager can run commands but not serverless, Step Function is for orchestration (overkill).",
      "domain": "Technology"
    },
    {
      "questionNumber": 38,
      "questionText": "Which of the following are examples of Horizontal Scalability (aka Elasticity)? (Select two)",
      "options": [
        { "text": "Modify an EC2 instance type from t2.nano to u-12tb1.metal", "correct": false },
        { "text": "Modify a Database instance to higher CPU and RAM", "correct": false },
        { "text": "Elastic Load Balancing (ELB)", "correct": true },
        { "text": "Read Replicas in Amazon Relational Database Service (Amazon RDS)", "correct": true },
        { "text": "Add a bigger CPU to a computer", "correct": false }
      ],
      "explanation": "Correct options: ELB (distributes traffic across multiple instances) and Read Replicas (add more read copies). The others are vertical scaling (adding power to a single instance).",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 39,
      "questionText": "Which of the following statements are correct about the AWS root user account? (Select two)",
      "options": [
        { "text": "Root user account password cannot be changed once it is set", "correct": false },
        { "text": "It is highly recommended to enable Multi-Factor Authentication (MFA) for root user account", "correct": true },
        { "text": "Root user account gets unrestricted permissions when the account is created, but these can be restricted using IAM policies", "correct": false },
        { "text": "Root user access credentials are the email address and password used to create the AWS account", "correct": true },
        { "text": "Root user credentials should only be shared with managers requiring administrative responsibilities to complete their jobs", "correct": false }
      ],
      "explanation": "Correct options: Enable MFA for root, and root credentials are the email/password used to create the account. Root password can be changed, root permissions cannot be restricted, and root credentials should never be shared.",
      "domain": "Technology"
    },
    {
      "questionNumber": 40,
      "questionText": "Which Amazon Route 53 routing policy would you use to improve the performance for your customers by routing the requests to the AWS endpoint that provides the fastest experience?",
      "options": [
        { "text": "Simple routing", "correct": false },
        { "text": "Latency-based routing", "correct": true },
        { "text": "Failover routing", "correct": false },
        { "text": "Weighted routing", "correct": false }
      ],
      "explanation": "Correct option: Latency-based routing. It routes users to the region with the lowest latency. Simple routes to a single resource, failover for active-passive, weighted for traffic distribution.",
      "domain": "Technology"
    },
    {
      "questionNumber": 41,
      "questionText": "Which tool will help you review your workloads against current AWS best practices for cost optimization, security, and performance improvement and then obtain advice to architect them better?",
      "options": [
        { "text": "AWS Cost Explorer", "correct": false },
        { "text": "Amazon CloudWatch", "correct": false },
        { "text": "Amazon Inspector", "correct": false },
        { "text": "AWS Trusted Advisor", "correct": true }
      ],
      "explanation": "Correct option: AWS Trusted Advisor. It provides best practice recommendations. Cost Explorer shows costs, CloudWatch monitors, Inspector assesses vulnerabilities.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 42,
      "questionText": "Which AWS service enables users to find, buy, and immediately start using software solutions in their AWS environment?",
      "options": [
        { "text": "AWS Config", "correct": false },
        { "text": "AWS Marketplace", "correct": true },
        { "text": "AWS Systems Manager", "correct": false },
        { "text": "AWS CloudFormation", "correct": false }
      ],
      "explanation": "Correct option: AWS Marketplace. It is a digital catalog to find, buy, and deploy software. Config tracks configurations, Systems Manager automates operations, CloudFormation provisions resources.",
      "domain": "Technology"
    },
    {
      "questionNumber": 43,
      "questionText": "A startup is looking for 24x7 phone based technical support for its AWS account. Which of the following is the MOST cost-effective AWS support plan for this use-case?",
      "options": [
        { "text": "AWS Enterprise Support", "correct": false },
        { "text": "AWS Developer Support", "correct": false },
        { "text": "AWS Enterprise On-Ramp Support", "correct": false },
        { "text": "AWS Business Support", "correct": true }
      ],
      "explanation": "Correct option: AWS Business Support. It provides 24x7 phone, email, and chat support at lower cost than Enterprise or Enterprise On-Ramp. Developer Support does not include 24x7 phone.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 44,
      "questionText": "Which AWS compute service provides the EASIEST way to access resizable compute capacity in the cloud with support for per-second billing and access to the underlying OS?",
      "options": [
        { "text": "Amazon Elastic Container Service (Amazon ECS)", "correct": false },
        { "text": "AWS Lambda", "correct": false },
        { "text": "Amazon Lightsail", "correct": false },
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": true }
      ],
      "explanation": "Correct option: Amazon EC2. It gives resizable compute, per-second billing, and OS access. ECS requires container orchestration, Lambda is serverless (no OS access), Lightsail has monthly pricing.",
      "domain": "Technology"
    },
    {
      "questionNumber": 45,
      "questionText": "Due to regulatory and compliance reasons, an organization is supposed to use a hardware device for any data encryption operations in the cloud. Which AWS service can be used to meet this compliance requirement?",
      "options": [
        { "text": "AWS CloudHSM", "correct": true },
        { "text": "AWS Trusted Advisor", "correct": false },
        { "text": "AWS Secrets Manager", "correct": false },
        { "text": "AWS Key Management Service (AWS KMS)", "correct": false }
      ],
      "explanation": "Correct option: AWS CloudHSM. It provides a hardware security module (HSM) for encryption key management. KMS uses HSM but is not a dedicated hardware device you control, Secrets Manager manages secrets, Trusted Advisor gives recommendations.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 46,
      "questionText": "Which service gives a personalized view of the status of the AWS services that are part of your Cloud architecture so that you can quickly assess the impact on your business when AWS service(s) are experiencing issues?",
      "options": [
        { "text": "Amazon Inspector", "correct": false },
        { "text": "AWS Health - Service Health Dashboard", "correct": false },
        { "text": "AWS Health - Your Account Health Dashboard", "correct": true },
        { "text": "Amazon CloudWatch", "correct": false }
      ],
      "explanation": "Correct option: AWS Health - Your Account Health Dashboard. It shows personalized impact on your resources. Service Health Dashboard shows general status, Inspector assesses security, CloudWatch monitors metrics.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 47,
      "questionText": "Which of the following statement is correct for a Security Group and a Network Access Control List (Network ACL)?",
      "options": [
        { "text": "Security Group acts as a firewall at the instance level whereas Network Access Control List (Network ACL) acts as a firewall at the subnet level", "correct": true },
        { "text": "Security Group acts as a firewall at the Availability Zone (AZ) level whereas Network Access Control List (Network ACL) acts as a firewall at the VPC level", "correct": false },
        { "text": "Security Group acts as a firewall at the VPC level whereas Network Access Control List (Network ACL) acts as a firewall at the Availability Zone (AZ) level", "correct": false },
        { "text": "Security Group acts as a firewall at the subnet level whereas Network Access Control List (Network ACL) acts as a firewall at the instance level", "correct": false }
      ],
      "explanation": "Correct option: Security Group at instance level, Network ACL at subnet level. Security groups are stateful, NACLs are stateless.",
      "domain": "Technology"
    },
    {
      "questionNumber": 48,
      "questionText": "Which of the following AWS services allows a database to have flexible schema and supports document data models?",
      "options": [
        { "text": "Amazon DynamoDB", "correct": true },
        { "text": "Amazon Redshift", "correct": false },
        { "text": "Amazon Relational Database Service (Amazon RDS)", "correct": false },
        { "text": "Amazon Aurora", "correct": false }
      ],
      "explanation": "Correct option: Amazon DynamoDB (NoSQL, flexible schema, document and key-value). Redshift is data warehouse, RDS and Aurora are relational (fixed schema).",
      "domain": "Technology"
    },
    {
      "questionNumber": 49,
      "questionText": "Which of the following foundational capabilities can be found under the Operations Perspective of the AWS Cloud Adoption Framework?",
      "options": [
        { "text": "Platform engineering", "correct": false },
        { "text": "Application portfolio management", "correct": false },
        { "text": "Performance and capacity management", "correct": true },
        { "text": "Vulnerability management", "correct": false }
      ],
      "explanation": "Correct option: Performance and capacity management (Operations perspective). Platform engineering is Platform perspective, application portfolio management is Governance, vulnerability management is Security.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 50,
      "questionText": "A social media company wants to protect its web application from common web exploits such as SQL injection and cross-site scripting. Which of the following AWS services can be used to address this use-case?",
      "options": [
        { "text": "Amazon GuardDuty", "correct": false },
        { "text": "Amazon Inspector", "correct": false },
        { "text": "AWS CloudWatch", "correct": false },
        { "text": "AWS Web Application Firewall (AWS WAF)", "correct": true }
      ],
      "explanation": "Correct option: AWS WAF. It protects against SQL injection, XSS, and other web exploits. GuardDuty is threat detection, Inspector assesses vulnerabilities, CloudWatch monitors metrics.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 51,
      "questionText": "A company is using a message broker service on its on-premises application and wants to move this messaging functionality to AWS Cloud. Which of the following AWS services is the right choice to move the existing functionality easily?",
      "options": [
        { "text": "Amazon MQ", "correct": true },
        { "text": "Amazon Kinesis Data Streams", "correct": false },
        { "text": "Amazon Simple Queue Service (Amazon SQS)", "correct": false },
        { "text": "Amazon Simple Notification Service (Amazon SNS)", "correct": false }
      ],
      "explanation": "Correct option: Amazon MQ (managed message broker for Apache ActiveMQ and RabbitMQ). It supports industry-standard APIs, making migration easy. SQS and SNS are cloud-native messaging, Kinesis is for streaming data.",
      "domain": "Technology"
    },
    {
      "questionNumber": 52,
      "questionText": "An online gaming company wants to block users from certain geographies from accessing its content. Which AWS service can be used to accomplish this task?",
      "options": [
        { "text": "AWS Web Application Firewall (AWS WAF)", "correct": true },
        { "text": "AWS Shield", "correct": false },
        { "text": "Security group", "correct": false },
        { "text": "Amazon CloudWatch", "correct": false }
      ],
      "explanation": "Correct option: AWS WAF. It can block IP addresses based on geography using IP match conditions. Shield protects against DDoS, security groups only allow rules, CloudWatch monitors.",
      "domain": "Technology"
    },
    {
      "questionNumber": 53,
      "questionText": "Multi-AZ deployment is an example of which of the following?",
      "options": [
        { "text": "Scale out", "correct": false },
        { "text": "Performance Efficiency", "correct": false },
        { "text": "Scale up", "correct": false },
        { "text": "High Availability", "correct": true }
      ],
      "explanation": "Correct option: High Availability. Multi-AZ deployments provide automatic failover for high availability, not scaling or performance efficiency.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 54,
      "questionText": "Which of the following is the correct statement regarding the AWS Storage services?",
      "options": [
        { "text": "Amazon Simple Storage Service (Amazon S3) is file based storage, Amazon Elastic Block Store (Amazon EBS) is block based storage and Amazon Elastic File System (Amazon EFS) is object based storage", "correct": false },
        { "text": "Amazon Simple Storage Service (Amazon S3) is object based storage, Amazon Elastic Block Store (Amazon EBS) is file based storage and Amazon Elastic File System (Amazon EFS) is block based storage", "correct": false },
        { "text": "Amazon Simple Storage Service (Amazon S3) is object based storage, Amazon Elastic Block Store (Amazon EBS) is block based storage and Amazon Elastic File System (Amazon EFS) is file based storage", "correct": true },
        { "text": "Amazon Simple Storage Service (Amazon S3) is block based storage, Amazon Elastic Block Store (Amazon EBS) is object based storage and Amazon Elastic File System (Amazon EFS) is file based storage", "correct": false }
      ],
      "explanation": "Correct option: S3 = object storage, EBS = block storage, EFS = file storage. This matches the correct classification.",
      "domain": "Technology"
    },
    {
      "questionNumber": 55,
      "questionText": "Which AWS service would you use to send alerts when the costs for your AWS account exceed your budgeted amount?",
      "options": [
        { "text": "AWS Budgets", "correct": true },
        { "text": "AWS Pricing Calculator", "correct": false },
        { "text": "AWS Cost Explorer", "correct": false },
        { "text": "AWS Organizations", "correct": false }
      ],
      "explanation": "Correct option: AWS Budgets. It alerts when actual or forecasted costs exceed budget. Pricing Calculator estimates costs, Cost Explorer visualizes, Organizations manages accounts.",
      "domain": "Billing and Pricing"
    },
    {
      "questionNumber": 56,
      "questionText": "Which of the following options can be used to access and manage all AWS services (Select three)?",
      "options": [
        { "text": "Amazon API Gateway", "correct": false },
        { "text": "AWS Software Development Kit (SDK)", "correct": true },
        { "text": "AWS Systems Manager", "correct": false },
        { "text": "AWS Management Console", "correct": true },
        { "text": "AWS Command Line Interface (AWS CLI)", "correct": true },
        { "text": "AWS Secrets Manager", "correct": false }
      ],
      "explanation": "Correct options: AWS SDK, AWS Management Console, AWS CLI. API Gateway is for creating APIs, Systems Manager is for ops, Secrets Manager manages secrets.",
      "domain": "Technology"
    },
    {
      "questionNumber": 57,
      "questionText": "An organization is planning to move its infrastructure from the on-premises datacenter to AWS Cloud. As a Cloud Practioner, which options would you recommend so that the organization can identify the right AWS services to build solutions on AWS Cloud (Select two)?",
      "options": [
        { "text": "AWS Service Catalog", "correct": true },
        { "text": "AWS CloudTrail", "correct": false },
        { "text": "AWS Partner Network (APN)", "correct": true },
        { "text": "AWS Organizations", "correct": false },
        { "text": "Amazon CloudWatch", "correct": false }
      ],
      "explanation": "Correct options: AWS Service Catalog (pre-approved IT services catalog) and AWS Partner Network (find consulting partners). CloudTrail logs activity, Organizations manages accounts, CloudWatch monitors.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 58,
      "questionText": "Access Key ID and Secret Access Key are tied to which of the following AWS Identity and Access Management (AWS IAM) entities?",
      "options": [
        { "text": "IAM Policy", "correct": false },
        { "text": "IAM Role", "correct": false },
        { "text": "IAM User", "correct": true },
        { "text": "IAM User Group", "correct": false }
      ],
      "explanation": "Correct option: IAM User. Access keys are long-term credentials for IAM users or root user. Roles use temporary credentials, policies define permissions, groups are collections of users.",
      "domain": "Security and Compliance"
    },
    {
      "questionNumber": 59,
      "questionText": "Which of the following AWS services are global in scope? (Select two)",
      "options": [
        { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": false },
        { "text": "AWS Identity and Access Management (AWS IAM)", "correct": true },
        { "text": "Amazon Relational Database Service (Amazon RDS)", "correct": false },
        { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": false },
        { "text": "Amazon CloudFront", "correct": true }
      ],
      "explanation": "Correct options: IAM and CloudFront are global services. S3 buckets are regional (though namespace is global), RDS and EC2 are regional.",
      "domain": "Technology"
    },
    {
      "questionNumber": 60,
      "questionText": "An e-commerce company wants to store data from a recommendation engine in a database. As a Cloud Practioner, which AWS service would you recommend to provide this functionality with the LEAST operational overhead for any scale?",
      "options": [
        { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": false },
        { "text": "Amazon DynamoDB", "correct": true },
        { "text": "Amazon Relational Database Service (Amazon RDS)", "correct": false },
        { "text": "Amazon Neptune", "correct": false }
      ],
      "explanation": "Correct option: Amazon DynamoDB (NoSQL, serverless, scales automatically). S3 is object storage not a database, RDS requires provisioning, Neptune is graph database (overkill).",
      "domain": "Technology"
    },
    {
      "questionNumber": 61,
      "questionText": "Which of the following use-cases is NOT supported by Amazon Rekognition?",
      "options": [
        { "text": "Identify person in a photo", "correct": false },
        { "text": "Detect text in a photo", "correct": false },
        { "text": "Quickly resize photos to create thumbnails", "correct": true },
        { "text": "Label objects in a photo", "correct": false }
      ],
      "explanation": "Correct option: Quickly resize photos to create thumbnails (not supported). Rekognition does image/video analysis: identify people, detect text, label objects.",
      "domain": "Technology"
    },
    {
      "questionNumber": 62,
      "questionText": "A data analytics company stores its data on Amazon Simple Storage Service (Amazon S3) and wants to do SQL based analysis on this data with minimum effort. As a Cloud Practitioner, which of the following AWS services will you suggest for this use case?",
      "options": [
        { "text": "Amazon Athena", "correct": true },
        { "text": "Amazon DynamoDB", "correct": false },
        { "text": "Amazon Aurora", "correct": false },
        { "text": "Amazon Redshift", "correct": false }
      ],
      "explanation": "Correct option: Amazon Athena. It is serverless and allows SQL queries directly on S3 data without loading. DynamoDB is NoSQL, Aurora and Redshift require data loading.",
      "domain": "Technology"
    },
    {
      "questionNumber": 63,
      "questionText": "The engineering team at an IT company wants to monitor the CPU utilization for its fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances and send an email to the administrator if the utilization exceeds 80%. As a Cloud Practitioner, which AWS services would you recommend to build this solution? (Select two)",
      "options": [
        { "text": "AWS CloudTrail", "correct": false },
        { "text": "AWS Lambda", "correct": false },
        { "text": "Amazon Simple Notification Service (SNS)", "correct": true },
        { "text": "Amazon CloudWatch", "correct": true },
        { "text": "Amazon Simple Queue Service (SQS)", "correct": false }
      ],
      "explanation": "Correct options: Amazon CloudWatch (to monitor and create alarm) and Amazon SNS (to send email notification). CloudTrail logs API calls, Lambda could be used but is not needed, SQS is queuing.",
      "domain": "Technology"
    },
    {
      "questionNumber": 64,
      "questionText": "The AWS Cloud Adoption Framework (AWS CAF) recommends four iterative and incremental cloud transformation phases. Which cloud transformation journey phase of the AWS Cloud Adoption Framework (AWS CAF) focuses on demonstrating how the cloud will help accelerate your business outcomes?",
      "options": [
        { "text": "Align", "correct": false },
        { "text": "Launch", "correct": false },
        { "text": "Envision", "correct": true },
        { "text": "Scale", "correct": false }
      ],
      "explanation": "Correct option: Envision (demonstrate how cloud accelerates business outcomes). Align identifies gaps, Launch delivers pilot, Scale expands production.",
      "domain": "Cloud Concepts"
    },
    {
      "questionNumber": 65,
      "questionText": "Which AWS service helps with global application availability and performance using the AWS global network?",
      "options": [
        { "text": "Amazon Route 53", "correct": false },
        { "text": "AWS Global Accelerator", "correct": true },
        { "text": "Elastic Load Balancing (ELB)", "correct": false },
        { "text": "Amazon CloudFront", "correct": false }
      ],
      "explanation": "Correct option: AWS Global Accelerator. It improves availability and performance using the AWS global network. Route 53 is DNS, ELB is regional, CloudFront is CDN.",
      "domain": "Technology"
    }
  ]
};
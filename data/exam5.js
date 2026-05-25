var EXAM_DATA = {
  examNumber: 5,
  title: "Practice Test #5 - AWS Certified Cloud Practitioner",
  description: "Full practice exam with 65 questions covering AWS Cloud Concepts, Technology, Security, and Billing & Pricing.",
  questions : [
  {
    "questionNumber": 1,
    "questionText": "A company needs to keep sensitive data in its own data center due to compliance but would still like to deploy resources using AWS. Which Cloud deployment model does this refer to?",
    "options": [
      { "text": "Hybrid Cloud", "correct": true },
      { "text": "Public Cloud", "correct": false },
      { "text": "On-premises", "correct": false },
      { "text": "Private Cloud", "correct": false }
    ],
    "explanation": "Correct option: Hybrid Cloud. A hybrid deployment connects infrastructure and applications between cloud-based resources and existing resources not located in the cloud, most commonly between cloud and on-premises infrastructure. Public cloud is fully in the cloud. Private cloud is customized IT services over a private infrastructure. On-premises is not a cloud deployment model.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 2,
    "questionText": "A company is planning to implement Chaos Engineering to expose any blind spots that can disrupt the resiliency of the application. Which AWS service will help implement this requirement with the least effort?",
    "options": [
      { "text": "AWS Trusted Advisor", "correct": false },
      { "text": "Amazon GuardDuty", "correct": false },
      { "text": "Amazon Inspector", "correct": false },
      { "text": "AWS Fault Injection Simulator (AWS FIS)", "correct": true }
    ],
    "explanation": "Correct option: AWS Fault Injection Simulator (AWS FIS). It is a fully managed service for running fault injection experiments (chaos engineering) to improve application resiliency. Trusted Advisor provides best practice recommendations, GuardDuty is threat detection, Inspector is security assessment.",
    "domain": "Technology"
  },
  {
    "questionNumber": 3,
    "questionText": "Which of the following options are the benefits of using AWS Elastic Load Balancing (ELB)? (Select TWO)",
    "options": [
      { "text": "Less costly", "correct": false },
      { "text": "Fault tolerance", "correct": true },
      { "text": "Agility", "correct": false },
      { "text": "Storage", "correct": false },
      { "text": "High availability", "correct": true }
    ],
    "explanation": "Correct options: High availability and Fault tolerance. ELB automatically distributes traffic across multiple targets and AZs, providing high availability and fault tolerance. It does not directly reduce cost, increase agility, or provide storage.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 4,
    "questionText": "According to the AWS Shared Responsibility Model, which of the following is both the responsibility of AWS and the customer? (Select two)",
    "options": [
      { "text": "Customer data", "correct": false },
      { "text": "Disposal of disk drives", "correct": false },
      { "text": "Configuration management", "correct": true },
      { "text": "Operating system (OS) configuration", "correct": true },
      { "text": "Data center security", "correct": false }
    ],
    "explanation": "Correct options: Configuration management and Operating system configuration. Shared controls apply to both AWS and customer. AWS maintains infrastructure configuration, customer configures their guest OS, databases, applications. Customer data, disk disposal, data center security are AWS responsibility.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 5,
    "questionText": "Which of the following options is NOT a feature of Amazon Inspector?",
    "options": [
      { "text": "Inspect running operating systems (OS) against known vulnerabilities", "correct": false },
      { "text": "Analyze against unintended network accessibility", "correct": false },
      { "text": "Automate security assessments", "correct": false },
      { "text": "Track configuration changes", "correct": true }
    ],
    "explanation": "Correct option: Track configuration changes. This is a feature of AWS Config, not Amazon Inspector. Inspector automates security assessments, checks OS vulnerabilities and network accessibility.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 6,
    "questionText": "A research lab needs to be notified in case of a configuration change for security and compliance reasons. Which AWS service can assist with this task?",
    "options": [
      { "text": "Amazon Inspector", "correct": false },
      { "text": "AWS Secrets Manager", "correct": false },
      { "text": "AWS Config", "correct": true },
      { "text": "AWS Trusted Advisor", "correct": false }
    ],
    "explanation": "Correct option: AWS Config. It continuously monitors and records resource configurations, allows evaluation against desired configurations, and can trigger notifications on changes. Inspector assesses security, Secrets Manager manages secrets, Trusted Advisor provides best practices.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 7,
    "questionText": "According to the AWS Shared Responsibility Model, which of the following are the responsibilities of AWS? (Select two)",
    "options": [
      { "text": "Installing security patches of the guest operating system (OS)", "correct": false },
      { "text": "Configuring IAM Roles", "correct": false },
      { "text": "Encrypting application data", "correct": false },
      { "text": "Data center security", "correct": true },
      { "text": "Network operability", "correct": true }
    ],
    "explanation": "Correct options: Data center security and Network operability. AWS is responsible for 'Security OF the cloud' including hardware, software, networking, and facilities. Customer is responsible for guest OS patching, IAM configuration, and data encryption.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 8,
    "questionText": "An enterprise is planning to move one of its older applications from its local data center to AWS. The IT team wants the fastest migration path and has decided not to update the application code or make any architectural changes. Which migration strategy is the most appropriate for this scenario?",
    "options": [
      { "text": "Refactor", "correct": false },
      { "text": "Repurchase", "correct": false },
      { "text": "Rehost", "correct": true },
      { "text": "Replatform", "correct": false }
    ],
    "explanation": "Correct option: Rehost (lift and shift). Moves applications as-is without code or architecture changes. Refactor involves re-architecting, repurchase means switching to SaaS, replatform involves minor modifications.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 9,
    "questionText": "According to the AWS Shared Responsibility Model, which of the following is the responsibility of the customer?",
    "options": [
      { "text": "Managing Amazon DynamoDB", "correct": false },
      { "text": "Firewall & networking configuration of Amazon Elastic Compute Cloud (Amazon EC2)", "correct": true },
      { "text": "Edge locations security", "correct": false },
      { "text": "Protecting hardware infrastructure", "correct": false }
    ],
    "explanation": "Correct option: Firewall & networking configuration of EC2. Customer is responsible for security IN the cloud, including OS, network, firewall configuration. DynamoDB is managed by AWS, edge locations and hardware infrastructure are AWS responsibility.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 10,
    "questionText": "A multinational company has just moved its infrastructure to AWS Cloud and has employees traveling to different offices around the world. How should the company set the AWS accounts?",
    "options": [
      { "text": "As employees travel, they can use other employees' accounts", "correct": false },
      { "text": "Create an IAM user for each user in each AWS region", "correct": false },
      { "text": "Create global permissions so users can access resources from all around the world", "correct": false },
      { "text": "There is nothing to do, AWS Identity and Access Management (AWS IAM) is a global service", "correct": true }
    ],
    "explanation": "Correct option: There is nothing to do, IAM is a global service. IAM users can access their accounts from anywhere in the world without special configuration. Sharing credentials or creating per-region users is unnecessary and insecure.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 11,
    "questionText": "Which AWS service allows you to quickly and easily add user sign-up, sign-in, and access control to web and mobile applications?",
    "options": [
      { "text": "Amazon Cognito", "correct": true },
      { "text": "AWS IAM Identity Center", "correct": false },
      { "text": "AWS Identity and Access Management (AWS IAM)", "correct": false },
      { "text": "AWS Organizations", "correct": false }
    ],
    "explanation": "Correct option: Amazon Cognito. It adds user sign-up, sign-in, and access control to web/mobile apps. IAM Identity Center manages workforce access to AWS accounts, IAM manages AWS users/roles, Organizations manages multiple AWS accounts.",
    "domain": "Technology"
  },
  {
    "questionNumber": 12,
    "questionText": "Which of the following AWS Identity and Access Management (AWS IAM) Security Tools allows you to review permissions granted to an IAM user?",
    "options": [
      { "text": "AWS Identity and Access Management (IAM) access advisor", "correct": true },
      { "text": "IAM credentials report", "correct": false },
      { "text": "Multi-Factor Authentication (MFA)", "correct": false },
      { "text": "IAM policy", "correct": false }
    ],
    "explanation": "Correct option: IAM access advisor. It shows service permissions granted and last accessed times to help revise policies. Credentials report lists credential status, MFA adds authentication layer, IAM policy defines permissions.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 13,
    "questionText": "Which of the following statements is an AWS best practice when architecting for the Cloud?",
    "options": [
      { "text": "Security comes last", "correct": false },
      { "text": "Servers, not services", "correct": false },
      { "text": "Automation", "correct": true },
      { "text": "Close coupling", "correct": false }
    ],
    "explanation": "Correct option: Automation. Improves stability and efficiency. Best practices include 'Services, not servers', 'Loose coupling', and security should be prioritized, not last.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 14,
    "questionText": "A start-up would like to quickly deploy a popular technology on AWS. As a Cloud Practitioner, which AWS tool would you use for this task?",
    "options": [
      { "text": "AWS Whitepapers", "correct": false },
      { "text": "AWS Forums", "correct": false },
      { "text": "AWS CodeDeploy", "correct": false },
      { "text": "AWS Partner Solutions (formerly Quick Starts)", "correct": true }
    ],
    "explanation": "Correct option: AWS Partner Solutions (Quick Starts). Automated reference deployments for popular technologies following AWS best practices. Whitepapers are documentation, Forums are community, CodeDeploy automates code deployments but not complete technology stacks.",
    "domain": "Technology"
  },
  {
    "questionNumber": 15,
    "questionText": "A company would like to move its infrastructure to AWS Cloud. Which of the following should be included in the Total Cost of Ownership (TCO) estimate? (Select TWO)",
    "options": [
      { "text": "Server administration", "correct": true },
      { "text": "Number of end-users", "correct": false },
      { "text": "Electronic equipment at office", "correct": false },
      { "text": "Application advertising", "correct": false },
      { "text": "Power/Cooling", "correct": true }
    ],
    "explanation": "Correct options: Server administration and Power/Cooling. TCO estimate includes server, storage, network, and IT labor costs. End-users, office equipment, and advertising are not part of infrastructure TCO.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 16,
    "questionText": "Which of the following statements is CORRECT regarding the scope of an Amazon Virtual Private Cloud (VPC)?",
    "options": [
      { "text": "A VPC spans all Availability Zones (AZs) in all AWS regions", "correct": false },
      { "text": "Amazon VPC spans all subnets in all AWS regions", "correct": false },
      { "text": "A VPC spans all Availability Zones (AZs) within an AWS region", "correct": true },
      { "text": "A VPC spans all AWS regions within an Availability Zone (AZ)", "correct": false }
    ],
    "explanation": "Correct option: A VPC spans all Availability Zones (AZs) within an AWS region. VPC is regional, not global. Subnets are within a single AZ.",
    "domain": "Technology"
  },
  {
    "questionNumber": 17,
    "questionText": "Which of the following are the best practices when using AWS Organizations? (Select TWO)",
    "options": [
      { "text": "Restrict account privileges using Service Control Policies (SCP)", "correct": true },
      { "text": "Never use tags for billing", "correct": false },
      { "text": "Do not use AWS Organizations to automate AWS account creation", "correct": false },
      { "text": "Disable AWS CloudTrail on several accounts", "correct": false },
      { "text": "Create AWS accounts per department", "correct": true }
    ],
    "explanation": "Correct options: Create accounts per department and restrict privileges using SCPs. Tags should be used for billing, Organizations can automate account creation, CloudTrail should be enabled for all accounts.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 18,
    "questionText": "What is the primary use case for Amazon GuardDuty?",
    "options": [
      { "text": "Protecting web applications from common exploits and vulnerabilities such as SQL injection", "correct": false },
      { "text": "Encrypting data in transit between AWS services using TLS certificates", "correct": false },
      { "text": "Detecting malicious activity and threats in your AWS accounts and workloads", "correct": true },
      { "text": "Enforcing secure communication between VPCs using network traffic filtering", "correct": false }
    ],
    "explanation": "Correct option: Detecting malicious activity and threats. GuardDuty is a threat detection service analyzing logs. WAF protects against SQL injection, ACM/KMS handle encryption, Network Firewall enforces VPC traffic filtering.",
    "domain": "Technology"
  },
  {
    "questionNumber": 19,
    "questionText": "A Cloud Practitioner would like to centrally view, manage, and operate nodes to quickly identify any issues that might impact applications using those resources. Which AWS service can help with this task?",
    "options": [
      { "text": "AWS Trusted Advisor", "correct": false },
      { "text": "Amazon Inspector", "correct": false },
      { "text": "AWS Systems Manager", "correct": true },
      { "text": "AWS Health Dashboard - Your Account Health", "correct": false }
    ],
    "explanation": "Correct option: AWS Systems Manager. It provides central visibility and management of nodes (EC2, on-premises servers, etc.). Trusted Advisor gives best practices, Inspector assesses security, Health Dashboard shows AWS service health.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 20,
    "questionText": "Which Amazon Elastic Compute Cloud (Amazon EC2) Auto Scaling feature can help with fault tolerance?",
    "options": [
      { "text": "Lower cost by adjusting the number of Amazon EC2 instances", "correct": false },
      { "text": "Distributing load to Amazon EC2 instances", "correct": false },
      { "text": "Replacing unhealthy Amazon EC2 instances", "correct": true },
      { "text": "Having the right amount of computing capacity", "correct": false }
    ],
    "explanation": "Correct option: Replacing unhealthy EC2 instances. Auto Scaling detects unhealthy instances and replaces them, improving fault tolerance. Load distribution is ELB feature, right capacity ensures scaling but not directly fault tolerance.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 21,
    "questionText": "A brand-new startup would like to remove its need to manage the underlying infrastructure and focus on the deployment and management of its applications. Which type of cloud computing does this refer to?",
    "options": [
      { "text": "On-premises", "correct": false },
      { "text": "Software as a Service (SaaS)", "correct": false },
      { "text": "Platform as a Service (PaaS)", "correct": true },
      { "text": "Infrastructure as a Service (IaaS)", "correct": false }
    ],
    "explanation": "Correct option: Platform as a Service (PaaS). PaaS removes underlying infrastructure management, allowing focus on application deployment. IaaS gives more control, SaaS is complete product, on-premises is traditional.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 22,
    "questionText": "A corporation would like to simplify access management to multiple AWS accounts as well as facilitate AWS Single Sign-On (AWS SSO) access to its AWS accounts. As a Cloud Practitioner, which AWS service would you use for this task?",
    "options": [
      { "text": "AWS Cognito", "correct": false },
      { "text": "AWS Identity and Access Management (AWS IAM)", "correct": false },
      { "text": "AWS IAM Identity Center", "correct": true },
      { "text": "AWS Command Line Interface (CLI)", "correct": false }
    ],
    "explanation": "Correct option: AWS IAM Identity Center (successor to AWS SSO). It simplifies access management to multiple AWS accounts and provides SSO. Cognito is for customer identity, IAM manages users/roles but not cross-account SSO, CLI is command-line tool.",
    "domain": "Technology"
  },
  {
    "questionNumber": 23,
    "questionText": "Which security control tool can be used to deny traffic from a specific IP address?",
    "options": [
      { "text": "Security Group", "correct": false },
      { "text": "VPC Flow Logs", "correct": false },
      { "text": "Amazon GuardDuty", "correct": false },
      { "text": "Network Access Control List (network ACL)", "correct": true }
    ],
    "explanation": "Correct option: Network ACL. It can explicitly deny traffic based on IP addresses (stateless, subnet level). Security groups only allow rules, VPC Flow Logs monitor traffic, GuardDuty detects threats.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 24,
    "questionText": "Which AWS serverless service allows you to prepare data for analytics?",
    "options": [
      { "text": "Amazon Athena", "correct": false },
      { "text": "Amazon Redshift", "correct": false },
      { "text": "AWS Glue", "correct": true },
      { "text": "Amazon EMR", "correct": false }
    ],
    "explanation": "Correct option: AWS Glue. It is a serverless ETL service to prepare and load data for analytics. Athena queries S3, Redshift is data warehouse, EMR processes big data.",
    "domain": "Technology"
  },
  {
    "questionNumber": 25,
    "questionText": "A company based in Sydney hosts its application on an Amazon Elastic Compute Cloud (Amazon EC2) instance in ap-southeast-2. They would like to deploy the same Amazon EC2 instances in eu-south-1. Which of the following AWS entities can address this use case?",
    "options": [
      { "text": "Amazon EBS Elastic Volume snapshots", "correct": false },
      { "text": "Amazon Machine Image (AMI)", "correct": true },
      { "text": "AWS Lambda", "correct": false },
      { "text": "Elastic Load Balancing (ELB)", "correct": false }
    ],
    "explanation": "Correct option: Amazon Machine Image (AMI). AMIs can be copied across regions to launch identical instances. EBS snapshots are part of AMI but not sufficient alone, Lambda and ELB are not for copying instances.",
    "domain": "Technology"
  },
  {
    "questionNumber": 26,
    "questionText": "Which of the following are the advantages of using the AWS Cloud? (Select TWO)",
    "options": [
      { "text": "Increase speed and agility", "correct": true },
      { "text": "Limited scaling", "correct": false },
      { "text": "AWS is responsible for security in the cloud", "correct": false },
      { "text": "Stop guessing about capacity", "correct": true },
      { "text": "Trade operational expense for capital expense", "correct": false }
    ],
    "explanation": "Correct options: Increase speed and agility, Stop guessing about capacity. Cloud offers unlimited scaling, AWS is responsible for security OF the cloud (not IN the cloud), and you trade capital expense for operational expense (not the other way).",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 27,
    "questionText": "According to the AWS Well-Architected Framework, which of the following action is recommended in the Security pillar?",
    "options": [
      { "text": "Use AWS Key Management Service (AWS KMS) to encrypt data", "correct": true },
      { "text": "Use Amazon CloudWatch to measure overall efficiency", "correct": false },
      { "text": "Use AWS Cost Explorer to view and track your usage in detail", "correct": false },
      { "text": "Use AWS CloudFormation to automate security best practices", "correct": false }
    ],
    "explanation": "Correct option: Use AWS KMS to encrypt data (protect data at rest and in transit). CloudWatch relates to Reliability, Cost Explorer to Cost Optimization, CloudFormation is infrastructure as code.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 28,
    "questionText": "A data science team would like to build Machine Learning models for its projects. Which AWS service can it use?",
    "options": [
      { "text": "Amazon Connect", "correct": false },
      { "text": "Amazon Polly", "correct": false },
      { "text": "Amazon Comprehend", "correct": false },
      { "text": "Amazon SageMaker", "correct": true }
    ],
    "explanation": "Correct option: Amazon SageMaker. Fully managed platform to build, train, and deploy ML models. Connect is contact center, Polly is text-to-speech, Comprehend is NLP.",
    "domain": "Technology"
  },
  {
    "questionNumber": 29,
    "questionText": "An e-commerce company would like to build a chatbot for its customer service using Natural Language Understanding (NLU). As a Cloud Practitioner, which AWS service would you use?",
    "options": [
      { "text": "Amazon Comprehend", "correct": false },
      { "text": "Amazon Lex", "correct": true },
      { "text": "Amazon Rekognition", "correct": false },
      { "text": "Amazon SageMaker", "correct": false }
    ],
    "explanation": "Correct option: Amazon Lex. Builds conversational interfaces (chatbots) using NLU. Comprehend is NLP for text analysis, Rekognition is image/video analysis, SageMaker is ML platform.",
    "domain": "Technology"
  },
  {
    "questionNumber": 30,
    "questionText": "A company would like to create a private, high bandwidth network connection between its on-premises data centers and AWS Cloud. As a Cloud Practitioner, which of the following options would you recommend?",
    "options": [
      { "text": "VPC Endpoints", "correct": false },
      { "text": "AWS Direct Connect", "correct": true },
      { "text": "AWS Site-to-Site VPN", "correct": false },
      { "text": "VPC peering connection", "correct": false }
    ],
    "explanation": "Correct option: AWS Direct Connect. Private dedicated connection from on-premises to AWS. Site-to-Site VPN uses internet, VPC endpoints connect to AWS services privately, VPC peering connects VPCs.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 31,
    "questionText": "Which of the following criteria are used to calculate the charge for Amazon EBS Volumes? (Select Two)",
    "options": [
      { "text": "Volume type", "correct": true },
      { "text": "The Amazon EC2 instance type the Amazon EBS Elastic volume is attached to", "correct": false },
      { "text": "Data type", "correct": false },
      { "text": "Data transfer IN", "correct": false },
      { "text": "Provisioned IOPS", "correct": true }
    ],
    "explanation": "Correct options: Volume type and Provisioned IOPS. EBS pricing based on volume type, storage GB, IOPS, snapshots, and outbound data transfer. Data transfer IN is free, instance type and data type do not affect EBS price.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 32,
    "questionText": "Which of the following AWS Support plans is the MOST cost-effective when getting enhanced technical support by Cloud Support Engineers?",
    "options": [
      { "text": "AWS Developer Support", "correct": false },
      { "text": "AWS Basic Support", "correct": false },
      { "text": "AWS Business Support", "correct": true },
      { "text": "AWS Enterprise Support", "correct": false }
    ],
    "explanation": "Correct option: AWS Business Support. It provides 24x7 access to Cloud Support Engineers at lower cost than Enterprise. Developer support has Cloud Support Associates, Basic has no enhanced support.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 33,
    "questionText": "A growing start-up has trouble identifying and protecting sensitive data at scale. Which AWS fully managed service can assist with this task?",
    "options": [
      { "text": "AWS Secrets Manager", "correct": false },
      { "text": "Amazon Macie", "correct": true },
      { "text": "AWS Key Management Service (AWS KMS)", "correct": false },
      { "text": "AWS Artifact", "correct": false }
    ],
    "explanation": "Correct option: Amazon Macie. Uses ML to discover and protect sensitive data (PII) in S3. Secrets Manager manages credentials, KMS manages encryption keys, Artifact provides compliance reports.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 34,
    "questionText": "Which AWS service can inspect Amazon CloudFront distributions running on any HTTP web server?",
    "options": [
      { "text": "AWS GuardDuty", "correct": false },
      { "text": "Amazon Inspector", "correct": false },
      { "text": "AWS Web Application Firewall (AWS WAF)", "correct": true },
      { "text": "Elastic Load Balancing (ELB)", "correct": false }
    ],
    "explanation": "Correct option: AWS WAF. Inspects HTTP/HTTPS requests to CloudFront and controls access. GuardDuty is threat detection, Inspector assesses EC2 vulnerabilities, ELB distributes traffic.",
    "domain": "Technology"
  },
  {
    "questionNumber": 35,
    "questionText": "Which AWS service can be used to view the most comprehensive billing details for the past month?",
    "options": [
      { "text": "AWS Cost Explorer", "correct": false },
      { "text": "AWS Budgets", "correct": false },
      { "text": "AWS Cost & Usage Report (AWS CUR)", "correct": true },
      { "text": "AWS Pricing Calculator", "correct": false }
    ],
    "explanation": "Correct option: AWS Cost & Usage Report (AWS CUR). Most comprehensive cost and usage data, can be published to S3. Cost Explorer provides visualization, Budgets for alerts, Pricing Calculator for estimates.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 36,
    "questionText": "A production company would like to establish an AWS managed virtual private network (VPN) service between its on-premises network and AWS. Which item needs to be set up on the company's side?",
    "options": [
      { "text": "A security group", "correct": false },
      { "text": "A VPC endpoint interface", "correct": false },
      { "text": "A virtual private gateway (VGW)", "correct": false },
      { "text": "A customer gateway", "correct": true }
    ],
    "explanation": "Correct option: A customer gateway. Customer gateway device is on the customer's side for Site-to-Site VPN. VGW is on AWS side, security groups and VPC endpoints are not for VPN connections.",
    "domain": "Technology"
  },
  {
    "questionNumber": 37,
    "questionText": "Which of the following AWS services can be used to generate, use, and manage encryption keys on the AWS Cloud?",
    "options": [
      { "text": "AWS Secrets Manager", "correct": false },
      { "text": "Amazon Inspector", "correct": false },
      { "text": "AWS GuardDuty", "correct": false },
      { "text": "AWS CloudHSM", "correct": true }
    ],
    "explanation": "Correct option: AWS CloudHSM. Dedicated Hardware Security Module for generating and managing encryption keys. Secrets Manager manages secrets, Inspector assesses security, GuardDuty detects threats.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 38,
    "questionText": "The IT infrastructure at a university is deployed on AWS Cloud and it's experiencing a read-intensive workload. As a Cloud Practitioner, which AWS service would you use to take the load off databases?",
    "options": [
      { "text": "AWS Glue", "correct": false },
      { "text": "Amazon Relational Database Service (Amazon RDS)", "correct": false },
      { "text": "Amazon EMR", "correct": false },
      { "text": "Amazon ElastiCache", "correct": true }
    ],
    "explanation": "Correct option: Amazon ElastiCache. In-memory cache to reduce database load for read-intensive workloads. Glue is ETL, RDS is database itself, EMR is big data processing.",
    "domain": "Technology"
  },
  {
    "questionNumber": 39,
    "questionText": "A company would like to optimize Amazon Elastic Compute Cloud (Amazon EC2) costs. Which of the following actions can help with this task? (Select TWO)",
    "options": [
      { "text": "Set up Auto Scaling groups to align the number of instances with the demand", "correct": true },
      { "text": "Vertically scale the EC2 instances", "correct": false },
      { "text": "Build its own servers", "correct": false },
      { "text": "Opt for a higher AWS Support plan", "correct": false },
      { "text": "Purchase Amazon EC2 Reserved instances (RIs)", "correct": true }
    ],
    "explanation": "Correct options: Set up Auto Scaling groups and purchase Reserved Instances. Auto Scaling aligns capacity with demand, RIs provide discounts. Vertical scaling is expensive, building own servers is on-premises, higher support plan does not reduce EC2 costs.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 40,
    "questionText": "A company using a hybrid cloud would like to store secondary backup copies of the on-premises data. Which Amazon S3 Storage Class would you use for a cost-optimal yet rapid access solution?",
    "options": [
      { "text": "Amazon S3 Glacier Deep Archive", "correct": false },
      { "text": "Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)", "correct": true },
      { "text": "Amazon S3 Standard", "correct": false },
      { "text": "Amazon S3 Standard-Infrequent Access (S3 Standard-IA)", "correct": false }
    ],
    "explanation": "Correct option: S3 One Zone-IA. Lower cost than Standard-IA, suitable for secondary backups that can be recreated. Glacier Deep Archive has longer retrieval, Standard is for frequent access.",
    "domain": "Technology"
  },
  {
    "questionNumber": 41,
    "questionText": "Which of the following statements is the MOST accurate when describing AWS Elastic Beanstalk?",
    "options": [
      { "text": "It is a Platform as a Service (PaaS) that allows you to model and provision resources needed for an application", "correct": false },
      { "text": "It is an Infrastructure as Code (IaC) that allows you to model and provision resources needed for an application", "correct": false },
      { "text": "It is an Infrastructure as a Service (IaaS) that allows you to deploy and scale web applications and services", "correct": false },
      { "text": "It is a Platform as a Service (PaaS) that allows you to deploy and scale web applications and services", "correct": true }
    ],
    "explanation": "Correct option: It is a PaaS that allows you to deploy and scale web applications and services. Elastic Beanstalk handles deployment details. IaC is CloudFormation, IaaS is EC2.",
    "domain": "Technology"
  },
  {
    "questionNumber": 42,
    "questionText": "Which service/tool will you use to create and provide trusted users with temporary security credentials that can control access to your AWS resources?",
    "options": [
      { "text": "AWS IAM Identity Center", "correct": false },
      { "text": "AWS Web Application Firewall (AWS WAF)", "correct": false },
      { "text": "Amazon Cognito", "correct": false },
      { "text": "AWS Security Token Service (AWS STS)", "correct": true }
    ],
    "explanation": "Correct option: AWS STS. Provides temporary, limited-privilege credentials for federated users. IAM Identity Center is for SSO, WAF is firewall, Cognito is for customer identity.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 43,
    "questionText": "According to the AWS Well-Architected Framework, which of the following statements are recommendations in the Operational Excellence pillar? (Select two)",
    "options": [
      { "text": "Anticipate failure", "correct": true },
      { "text": "Make frequent, small, reversible changes", "correct": true },
      { "text": "Enable traceability", "correct": false },
      { "text": "Use serverless architectures", "correct": false },
      { "text": "Automatically recover from failure", "correct": false }
    ],
    "explanation": "Correct options: Anticipate failure and Make frequent, small, reversible changes. Enable traceability is Security pillar, automatically recover from failure is Reliability, use serverless is Performance Efficiency.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 44,
    "questionText": "An organization would like to copy data across different Availability Zones (AZs) using Amazon EBS snapshots. Where are Amazon EBS snapshots stored in the AWS Cloud?",
    "options": [
      { "text": "Amazon Elastic File System (Amazon EFS)", "correct": false },
      { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": false },
      { "text": "Amazon Relational Database Service (Amazon RDS)", "correct": false },
      { "text": "Amazon Simple Storage Service (Amazon S3)", "correct": true }
    ],
    "explanation": "Correct option: Amazon S3. EBS snapshots are stored in S3. EFS is file storage, EC2 is compute, RDS is database.",
    "domain": "Technology"
  },
  {
    "questionNumber": 45,
    "questionText": "A company would like to separate cost for AWS services by the department for cost allocation. Which of the following is the simplest way to achieve this task?",
    "options": [
      { "text": "Create tags for each department", "correct": true },
      { "text": "Create different virtual private cloud (VPCs) for different departments", "correct": false },
      { "text": "Create different accounts for different departments", "correct": false },
      { "text": "Create one account for all departments and share this account", "correct": false }
    ],
    "explanation": "Correct option: Create tags for each department. Tags are simplest for cost allocation. Different accounts or VPCs are more complex and not necessary.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 46,
    "questionText": "Which of the following billing timeframes is applied when running a Windows EC2 on-demand instance?",
    "options": [
      { "text": "Pay per day", "correct": false },
      { "text": "Pay per minute", "correct": false },
      { "text": "Pay per hour", "correct": false },
      { "text": "Pay per second", "correct": true }
    ],
    "explanation": "Correct option: Pay per second. Windows EC2 on-demand instances are billed per second (minimum 60 seconds). Per hour was older model, per day/minute not applicable.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 47,
    "questionText": "Which AWS tool/service will help you define your cloud infrastructure using popular programming languages such as Python and JavaScript?",
    "options": [
      { "text": "AWS CloudFormation", "correct": false },
      { "text": "AWS CodeBuild", "correct": false },
      { "text": "AWS Cloud Development Kit (AWS CDK)", "correct": true },
      { "text": "AWS Elastic Beanstalk", "correct": false }
    ],
    "explanation": "Correct option: AWS CDK. Allows defining cloud infrastructure using programming languages (Python, JS, etc.) and generates CloudFormation templates. CloudFormation uses YAML/JSON, CodeBuild is CI/CD, Elastic Beanstalk is PaaS.",
    "domain": "Technology"
  },
  {
    "questionNumber": 48,
    "questionText": "Which AWS service can be used to send, store, and receive messages between software components at any volume to decouple application tiers?",
    "options": [
      { "text": "Amazon Simple Queue Service (Amazon SQS)", "correct": true },
      { "text": "Amazon Simple Notification Service (Amazon SNS)", "correct": false },
      { "text": "AWS Elastic Beanstalk", "correct": false },
      { "text": "AWS Organizations", "correct": false }
    ],
    "explanation": "Correct option: Amazon SQS. Fully managed message queuing for decoupling. SNS is pub/sub, Elastic Beanstalk is for web apps, Organizations is account management.",
    "domain": "Technology"
  },
  {
    "questionNumber": 49,
    "questionText": "A Cloud Practitioner would like to deploy identical resources across all AWS regions and accounts using templates while estimating costs. Which AWS service can assist with this task?",
    "options": [
      { "text": "AWS CodeDeploy", "correct": false },
      { "text": "AWS CloudFormation", "correct": true },
      { "text": "AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD)", "correct": false },
      { "text": "Amazon LightSail", "correct": false }
    ],
    "explanation": "Correct option: AWS CloudFormation. Use templates (StackSets) to deploy identical resources across regions/accounts and estimate costs. CodeDeploy deploys code, Directory Service is for AD, Lightsail is simplified VPS.",
    "domain": "Technology"
  },
  {
    "questionNumber": 50,
    "questionText": "A company needs to use a secure online data transfer tool/service that can automate the ongoing transfers from on-premises systems into AWS while providing support for incremental data backups. Which AWS tool/service is an optimal fit for this requirement?",
    "options": [
      { "text": "AWS Storage Gateway", "correct": false },
      { "text": "AWS DataSync", "correct": true },
      { "text": "AWS Snowball Edge", "correct": false },
      { "text": "AWS Snowball", "correct": false }
    ],
    "explanation": "Correct option: AWS DataSync. Online, automated, incremental data transfer. Storage Gateway is for hybrid cloud storage, Snowball/Snowball Edge are offline physical transfer devices.",
    "domain": "Technology"
  },
  {
    "questionNumber": 51,
    "questionText": "A start-up would like to monitor its cost on the AWS Cloud and would like to choose an optimal Savings Plan. As a Cloud Practitioner, which AWS service would you use?",
    "options": [
      { "text": "AWS Cost Explorer", "correct": true },
      { "text": "AWS Cost & Usage Report (AWS CUR)", "correct": false },
      { "text": "AWS Budgets", "correct": false },
      { "text": "AWS Pricing Calculator", "correct": false }
    ],
    "explanation": "Correct option: AWS Cost Explorer. Provides Savings Plan recommendations. CUR gives detailed data but no recommendations, Budgets sets alerts, Pricing Calculator estimates costs.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 52,
    "questionText": "Which AWS service can be used to subscribe to an RSS feed to be notified of the status of all AWS service interruptions?",
    "options": [
      { "text": "Amazon Simple Notification Service (Amazon SNS)", "correct": false },
      { "text": "AWS Lambda", "correct": false },
      { "text": "AWS Health Dashboard - Your Account Health", "correct": false },
      { "text": "AWS Health Dashboard - Service Health", "correct": true }
    ],
    "explanation": "Correct option: AWS Health Dashboard - Service Health. Provides RSS feed for service interruptions. SNS can deliver notifications but not RSS feed of service status. Your Account Health is personalized.",
    "domain": "Technology"
  },
  {
    "questionNumber": 53,
    "questionText": "Which AWS tool can provide best practice recommendations for performance, service limits, and cost optimization?",
    "options": [
      { "text": "Amazon Inspector", "correct": false },
      { "text": "AWS Health Dashboard - Service health", "correct": false },
      { "text": "AWS Trusted Advisor", "correct": true },
      { "text": "Amazon CloudWatch", "correct": false }
    ],
    "explanation": "Correct option: AWS Trusted Advisor. Provides best practice recommendations across cost, performance, security, fault tolerance, service limits. Inspector is security assessment, Health Dashboard shows service status, CloudWatch monitors metrics.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 54,
    "questionText": "Which of the following services are provided by Amazon Route 53? (Select Two)",
    "options": [
      { "text": "Transfer acceleration", "correct": false },
      { "text": "IP routing", "correct": false },
      { "text": "Health checks and monitoring", "correct": true },
      { "text": "Load balancing", "correct": false },
      { "text": "Domain registration", "correct": true }
    ],
    "explanation": "Correct options: Domain registration and Health checks and monitoring. Route 53 offers DNS, domain registration, and health checks. Transfer acceleration is S3 feature, IP routing is not accurate (it does DNS routing), load balancing is ELB.",
    "domain": "Technology"
  },
  {
    "questionNumber": 55,
    "questionText": "Adding more CPU/RAM to an Amazon Elastic Compute Cloud (Amazon EC2) instance represents which of the following?",
    "options": [
      { "text": "Vertical scaling", "correct": true },
      { "text": "Managing increasing volumes of data", "correct": false },
      { "text": "Horizontal scaling", "correct": false },
      { "text": "Loose coupling", "correct": false }
    ],
    "explanation": "Correct option: Vertical scaling (scale up). Adding resources to a single instance. Horizontal scaling adds more instances.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 56,
    "questionText": "A production company with predictable usage would like to reduce the cost of its Amazon Elastic Compute Cloud (Amazon EC2) instances by using reserved instances (RI). Which of the following length terms are available for Amazon EC2 reserved instances (RI)? (Select Two)",
    "options": [
      { "text": "1 year", "correct": true },
      { "text": "5 years", "correct": false },
      { "text": "3 years", "correct": true },
      { "text": "6 months", "correct": false },
      { "text": "2 years", "correct": false }
    ],
    "explanation": "Correct options: 1 year and 3 years. Reserved Instances can be purchased for 1-year or 3-year terms.",
    "domain": "Technology"
  },
  {
    "questionNumber": 57,
    "questionText": "The development team at a company manages 300 microservices and it is now trying to automate the code reviews to improve the code quality. Which tool/service is the right fit for this requirement?",
    "options": [
      { "text": "AWS Trusted Advisor", "correct": false },
      { "text": "Amazon CodeGuru", "correct": true },
      { "text": "AWS CodeBuild", "correct": false },
      { "text": "AWS X-Ray", "correct": false }
    ],
    "explanation": "Correct option: Amazon CodeGuru. Provides automated code reviews and performance recommendations. Trusted Advisor is for AWS best practices, CodeBuild compiles code, X-Ray traces requests.",
    "domain": "Technology"
  },
  {
    "questionNumber": 58,
    "questionText": "An engineering team is new to the AWS Cloud and it would like to launch a dev/test environment with low monthly pricing. Which AWS service can address this use case?",
    "options": [
      { "text": "AWS CloudFormation", "correct": false },
      { "text": "Amazon Elastic Container Service (Amazon ECS)", "correct": false },
      { "text": "Amazon Elastic Compute Cloud (Amazon EC2)", "correct": false },
      { "text": "Amazon LightSail", "correct": true }
    ],
    "explanation": "Correct option: Amazon Lightsail. Simplified VPS with low, predictable pricing, ideal for beginners. CloudFormation, ECS, EC2 have more complexity.",
    "domain": "Technology"
  },
  {
    "questionNumber": 59,
    "questionText": "A company would like to audit requests made to an Amazon Simple Storage Service (Amazon S3) bucket. As a Cloud Practitioner, which Amazon Simple Storage Service (Amazon S3) feature would you recommend addressing this use-case?",
    "options": [
      { "text": "S3 cross-region replication (S3 CRR)", "correct": false },
      { "text": "S3 Versioning", "correct": false },
      { "text": "Amazon Simple Storage Service (Amazon S3) Access Logs", "correct": true },
      { "text": "Amazon S3 Bucket Policies", "correct": false }
    ],
    "explanation": "Correct option: S3 Access Logs. Provides detailed records of requests for auditing. CRR copies objects, Versioning keeps multiple versions, Bucket Policies define permissions.",
    "domain": "Security and Compliance"
  },
  {
    "questionNumber": 60,
    "questionText": "Which of the following statements is INCORRECT regarding Amazon EBS Elastic Volumes?",
    "options": [
      { "text": "Amazon EBS Elastic Volumes can be bound to several Availability Zones (AZs)", "correct": true },
      { "text": "Amazon EBS Elastic Volumes are bound to a specific Availability Zone (AZ)", "correct": false },
      { "text": "Amazon EBS Elastic Volumes can be mounted to one instance at a time", "correct": false },
      { "text": "Amazon EBS Elastic Volumes can persist data after their termination", "correct": false }
    ],
    "explanation": "Correct option (incorrect statement): EBS volumes can be bound to several AZs – this is false; EBS volumes are bound to a single AZ. They can be mounted to one instance at a time and persist after instance termination.",
    "domain": "Technology"
  },
  {
    "questionNumber": 61,
    "questionText": "A media company wants to enable customized content suggestions for the users of its movie streaming platform. Which AWS service can provide these personalized recommendations based on historic data?",
    "options": [
      { "text": "Amazon Personalize", "correct": true },
      { "text": "Amazon Customize", "correct": false },
      { "text": "Amazon SageMaker", "correct": false },
      { "text": "Amazon Comprehend", "correct": false }
    ],
    "explanation": "Correct option: Amazon Personalize. Real-time personalized recommendations (same tech as Amazon.com). SageMaker is general ML, Comprehend is NLP, Customize is not a real service.",
    "domain": "Technology"
  },
  {
    "questionNumber": 62,
    "questionText": "Which types of monitoring can be provided by Amazon CloudWatch? (Select TWO)",
    "options": [
      { "text": "Resource utilization", "correct": true },
      { "text": "Application performance", "correct": true },
      { "text": "API access", "correct": false },
      { "text": "Account management", "correct": false },
      { "text": "Performance and availability of AWS services", "correct": false }
    ],
    "explanation": "Correct options: Resource utilization and Application performance. CloudWatch monitors metrics and logs. API access is CloudTrail, account management is IAM, AWS service performance is AWS Health Dashboard.",
    "domain": "Technology"
  },
  {
    "questionNumber": 63,
    "questionText": "A company would like to reserve Amazon Elastic Compute Cloud (Amazon EC2) compute capacity for three years to reduce costs. The company also plans to increase their workloads during this period. As a Cloud Practitioner, which Amazon Elastic Compute Cloud (Amazon EC2) reserved instance (RI) type would you recommend?",
    "options": [
      { "text": "Convertible reserved instance (RI)", "correct": true },
      { "text": "Scheduled reserved instance (RI)", "correct": false },
      { "text": "Adaptable reserved instances (RI)", "correct": false },
      { "text": "Standard reserved instance (RI)", "correct": false }
    ],
    "explanation": "Correct option: Convertible RI. Allows changing instance attributes over term, suitable for changing workloads. Standard RI is less flexible, Scheduled/Adaptable are not valid.",
    "domain": "Billing and Pricing"
  },
  {
    "questionNumber": 64,
    "questionText": "An engineering team would like to cost-effectively run hundreds of thousands of batch computing workloads on AWS. As a Cloud Practitioner, which AWS service would you use for this task?",
    "options": [
      { "text": "AWS Lambda", "correct": false },
      { "text": "Amazon Lightsail", "correct": false },
      { "text": "AWS Fargate", "correct": false },
      { "text": "AWS Batch", "correct": true }
    ],
    "explanation": "Correct option: AWS Batch. Managed service for running large-scale batch jobs. Lambda has time limits, Lightsail is VPS, Fargate is for containers (more expensive for batch).",
    "domain": "Technology"
  },
  {
    "questionNumber": 65,
    "questionText": "A company would like to define a set of rules to manage objects cost-effectively between Amazon Simple Storage Service (Amazon S3) storage classes. As a Cloud Practitioner, which Amazon S3 feature would you use?",
    "options": [
      { "text": "Amazon Simple Storage Service (Amazon S3) Lifecycle configuration", "correct": true },
      { "text": "Amazon Simple Storage Service (Amazon S3) Bucket policies", "correct": false },
      { "text": "Amazon S3 Transfer Acceleration (Amazon S3TA)", "correct": false },
      { "text": "S3 Cross-Region Replication (S3 CRR)", "correct": false }
    ],
    "explanation": "Correct option: S3 Lifecycle configuration. Automates transitions between storage classes and expiration. Bucket policies define permissions, Transfer Acceleration speeds uploads, CRR copies objects across regions.",
    "domain": "Technology"
  }
]


};

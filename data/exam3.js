var EXAM_DATA = {
  examNumber: 3,
  title: "Practice Exam 3",
  description: "Cloud Concepts, Core AWS Services & Networking",
  questions: [
  {
    "questionNumber": 1,
    "questionText": "Which Amazon Route 53 routing policy would you use to route traffic to a single resource such as a web server for your website?",
    "options": [
      { "text": "Failover routing", "correct": false },
      { "text": "Latency-based routing", "correct": false },
      { "text": "Simple routing", "correct": true },
      { "text": "Weighted routing", "correct": false }
    ],
    "explanation": "Simple routing lets you configure standard DNS records with no special routing logic. With simple routing, you route traffic to a single resource — for example, a web server for your website. Failover routing is for active-passive failover. Weighted routing routes proportionally across multiple resources. Latency-based routing routes to the lowest-latency region.",
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
    "explanation": "Lambda is a serverless, event-driven compute service. It can respond to DynamoDB stream events and preprocess data before writing to S3. You cannot install databases or container services on Lambda — it is not a general-purpose compute host. Lambda is also not a secrets store; use AWS Secrets Manager or Parameter Store for sensitive variables.",
    "domain": "Technology"
  },
  {
    "questionNumber": 3,
    "questionText": "Which of the following are the pillars of the AWS Well-Architected Framework? (Select two)",
    "options": [
      { "text": "Operational Excellence", "correct": true },
      { "text": "Scalability", "correct": false },
      { "text": "Reliability", "correct": true },
      { "text": "Elasticity", "correct": false },
      { "text": "Affordability", "correct": false }
    ],
    "explanation": "The six pillars of the AWS Well-Architected Framework are: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. Scalability, Elasticity, and Affordability are not formal pillars of the framework.",
    "domain": "Cloud Concepts"
  },
  {
    "questionNumber": 4,
    "questionText": "Which AWS service provides a virtual network dedicated to your AWS account?",
    "options": [
      { "text": "AWS Direct Connect", "correct": false },
      { "text": "Amazon VPC", "correct": true },
      { "text": "Amazon Route 53", "correct": false },
      { "text": "AWS Transit Gateway", "correct": false }
    ],
    "explanation": "Amazon Virtual Private Cloud (VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network you define. You control the IP address range, subnets, route tables, and network gateways.",
    "domain": "Technology"
  },
  {
    "questionNumber": 5,
    "questionText": "A company wants to track API calls and user activity in their AWS account for audit purposes. Which AWS service should they use?",
    "options": [
      { "text": "Amazon CloudWatch", "correct": false },
      { "text": "AWS CloudTrail", "correct": true },
      { "text": "AWS Config", "correct": false },
      { "text": "Amazon GuardDuty", "correct": false }
    ],
    "explanation": "AWS CloudTrail records API calls and related events made by or on behalf of your AWS account. It provides governance, compliance, and audit capabilities. CloudWatch is for metrics and monitoring. Config tracks resource configuration changes. GuardDuty is a threat detection service.",
    "domain": "Security and Compliance"
  }
]

};

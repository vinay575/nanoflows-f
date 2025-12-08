import { useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  Code,
  Cloud,
  Zap,
  Shield,
  Database,
  Brain,
  Megaphone,
  Youtube,
  BookOpen,
  Wrench,
  TrendingUp,
  Workflow,
  Check,
  Users,
  Award,
  Clock,
  Target,
  Lightbulb,
  Rocket,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Play,
} from 'lucide-react';

interface ServiceDetailData {
  id: string;
  title: string;
  icon: any;
  heroImage: string;
  tagline: string;
  description: string;
  longDescription: string;
  detailedExplanation: {
    overview: string;
    whyItMatters: string;
    ourApproach: string;
  };
  traditionalVsAutomation: {
    traditional: {
      title: string;
      points: string[];
      downsides: string[];
    };
    ourWay: {
      title: string;
      points: string[];
      benefits: string[];
    };
  };
  n8nIntegration: {
    headline: string;
    description: string;
    automations: string[];
  };
  features: {
    title: string;
    description: string;
    icon: any;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  benefits: string[];
  stats: {
    value: string;
    label: string;
  }[];
  testimonials: {
    name: string;
    role: string;
    company: string;
    quote: string;
    rating: number;
  }[];
  gradient: string;
  accentColor: string;
}

const servicesData: Record<string, ServiceDetailData> = {
  'custom-development': {
    id: 'custom-development',
    title: 'Custom Development',
    icon: Code,
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80',
    tagline: 'Build Powerful Applications That Scale',
    description: 'Launch modern web, mobile, and system applications tailored for speed, security, and seamless integration.',
    longDescription: 'Our expert development team crafts bespoke digital solutions that perfectly align with your business objectives. From responsive web applications to native mobile apps and complex enterprise systems, we deliver code that performs flawlessly and scales effortlessly.',
    detailedExplanation: {
      overview: 'Custom software development is the process of designing, creating, deploying, and maintaining software for a specific set of users, functions, or organizations. Unlike commercial off-the-shelf software, custom development addresses your unique business challenges with tailored solutions that grow with your company. Our team specializes in creating applications that integrate seamlessly with your existing workflows, automate repetitive tasks, and provide competitive advantages that generic solutions simply cannot offer.',
      whyItMatters: 'In today\'s digital-first economy, your software is your competitive edge. Off-the-shelf solutions force you to adapt your processes to their limitations. Custom development flips this paradigm—we build software that adapts to YOUR processes. This means faster workflows, happier employees, reduced errors, and ultimately higher profitability. Companies with custom solutions typically see 40% improvement in operational efficiency and 3x faster time-to-market for new features.',
      ourApproach: 'We combine cutting-edge technologies with proven development methodologies to deliver solutions that work from day one. Our agile approach means you see progress weekly, can provide feedback continuously, and never face surprises at launch. Every application we build is designed with automation at its core—leveraging n8n workflows to connect your new software with existing tools, automate data flows, and create intelligent triggers that keep your business running smoothly 24/7.',
    },
    traditionalVsAutomation: {
      traditional: {
        title: 'How Others Do It',
        points: [
          'Manual data entry between systems',
          'Developers needed for every integration',
          'Separate tools that don\'t communicate',
          'Time-consuming deployment processes',
          'Reactive bug fixing and maintenance',
        ],
        downsides: ['High ongoing costs', 'Slow feature delivery', 'Integration nightmares', 'Employee frustration'],
      },
      ourWay: {
        title: 'Our n8n-Powered Approach',
        points: [
          'Automated data sync across all platforms',
          'Visual workflow builder for rapid integrations',
          'Unified ecosystem with 400+ app connections',
          'CI/CD pipelines with automated testing',
          'Proactive monitoring with auto-healing workflows',
        ],
        benefits: ['60% faster development', 'Zero manual data entry', 'Self-maintaining systems', 'Instant notifications'],
      },
    },
    n8nIntegration: {
      headline: 'Supercharge Your App with n8n Automation',
      description: 'Every application we build comes with n8n automation built-in. This means your new software automatically connects with your existing tools, processes data in real-time, and triggers actions without human intervention.',
      automations: [
        'Auto-sync data between your app and CRM/ERP systems',
        'Trigger Slack/Email notifications on key events',
        'Generate reports and send to stakeholders automatically',
        'Process form submissions and update databases instantly',
        'Connect with payment gateways and update records',
        'Integrate with AI for intelligent data processing',
      ],
    },
    features: [
      { title: 'Web Applications', description: 'Responsive, fast-loading web apps built with modern frameworks like React, Vue, and Angular.', icon: Code },
      { title: 'Mobile Apps', description: 'Native and cross-platform mobile applications for iOS and Android platforms.', icon: Zap },
      { title: 'API Development', description: 'RESTful and GraphQL APIs designed for reliability, security, and optimal performance.', icon: Database },
      { title: 'System Integrations', description: 'Seamless connections between your existing tools, databases, and third-party services.', icon: Workflow },
    ],
    process: [
      { step: 1, title: 'Discovery & Planning', description: 'We analyze your requirements, define project scope, and create a detailed roadmap.' },
      { step: 2, title: 'Design & Architecture', description: 'Our team designs intuitive interfaces and robust system architecture.' },
      { step: 3, title: 'Development & Testing', description: 'Agile development with continuous testing ensures quality at every stage.' },
      { step: 4, title: 'Deployment & Support', description: 'Smooth launch with ongoing maintenance and 24/7 support.' },
    ],
    benefits: ['Scalable architecture', 'Clean, maintainable code', 'Agile development process', 'Comprehensive documentation', 'Ongoing support & updates', '100% code ownership'],
    stats: [
      { value: '500+', label: 'Projects Delivered' },
      { value: '99%', label: 'Client Satisfaction' },
      { value: '24/7', label: 'Support Available' },
      { value: '50+', label: 'Technologies Used' },
    ],
    testimonials: [
      { name: 'Sarah Johnson', role: 'CTO', company: 'TechStart Inc.', quote: 'The development team exceeded our expectations. Our new platform handles 10x more traffic with zero downtime.', rating: 5 },
      { name: 'Michael Chen', role: 'Founder', company: 'InnovateCo', quote: 'Professional, responsive, and technically excellent. They delivered our MVP in record time.', rating: 5 },
    ],
    gradient: 'from-cyan-500 to-blue-600',
    accentColor: '#06B6D4',
  },
  'cloud-solutions': {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    icon: Cloud,
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    tagline: 'Transform Your Infrastructure for the Future',
    description: 'Transform your infrastructure with automated cloud adoption, advanced DevOps, and microservices built for rapid scaling.',
    longDescription: 'Migrate to the cloud with confidence. Our cloud architects design and implement scalable, secure, and cost-effective infrastructure solutions that accelerate your digital transformation and enable continuous innovation.',
    detailedExplanation: {
      overview: 'Cloud computing has revolutionized how businesses operate, offering unprecedented flexibility, scalability, and cost efficiency. Our cloud solutions encompass everything from initial strategy and migration to ongoing management and optimization. Whether you\'re moving to AWS, Azure, Google Cloud, or a hybrid environment, we architect solutions that leverage the full power of cloud infrastructure while maintaining security, compliance, and performance.',
      whyItMatters: 'Businesses that embrace cloud technology see 20-30% reduction in IT costs, 40% faster time-to-market for new products, and 99.99% uptime compared to traditional infrastructure. Cloud-native companies can scale instantly to meet demand, deploy updates multiple times per day, and access enterprise-grade security without massive capital investment. In the modern economy, cloud adoption isn\'t optional—it\'s essential for survival.',
      ourApproach: 'We don\'t just lift-and-shift your applications to the cloud. We re-architect them to be cloud-native, taking full advantage of managed services, auto-scaling, and serverless computing. Every migration is planned with n8n automation at its core—automated deployment pipelines, infrastructure provisioning, monitoring alerts, and cost optimization workflows ensure your cloud runs itself with minimal human intervention.',
    },
    traditionalVsAutomation: {
      traditional: {
        title: 'How Others Do It',
        points: [
          'Manual server provisioning and configuration',
          'Manual deployments during off-hours',
          'Reactive monitoring and alerting',
          'Static resource allocation',
          'Manual backup and disaster recovery',
        ],
        downsides: ['High operational overhead', 'Slow deployments', 'Resource waste', 'Human error risk'],
      },
      ourWay: {
        title: 'Our n8n-Powered Approach',
        points: [
          'Infrastructure as Code with auto-provisioning',
          'Zero-downtime deployments via n8n triggers',
          'Proactive monitoring with auto-remediation',
          'Dynamic scaling based on real-time metrics',
          'Automated backup verification and failover',
        ],
        benefits: ['80% less manual work', 'Deploy in minutes', 'Self-healing infrastructure', 'Optimized costs'],
      },
    },
    n8nIntegration: {
      headline: 'Cloud Operations on Autopilot',
      description: 'Our n8n automation layer sits on top of your cloud infrastructure, handling routine operations, monitoring, and orchestration without human intervention.',
      automations: [
        'Auto-scale resources based on traffic patterns',
        'Automated cost optimization and rightsizing alerts',
        'Security scanning and compliance monitoring',
        'Automated backup verification and restore testing',
        'Multi-cloud deployment orchestration',
        'Incident response with auto-escalation',
      ],
    },
    features: [
      { title: 'Cloud Migration', description: 'Seamless migration to AWS, Azure, or GCP with minimal downtime and zero data loss.', icon: Cloud },
      { title: 'DevOps Automation', description: 'CI/CD pipelines, infrastructure as code, and automated deployment workflows.', icon: Workflow },
      { title: 'Serverless Systems', description: 'Event-driven architectures that scale automatically and reduce operational costs.', icon: Zap },
      { title: 'Microservices Design', description: 'Modular architecture for flexibility, resilience, and independent scaling.', icon: Database },
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Comprehensive analysis of your current infrastructure and cloud readiness.' },
      { step: 2, title: 'Strategy', description: 'Customized cloud adoption roadmap aligned with your business goals.' },
      { step: 3, title: 'Migration', description: 'Phased migration with thorough testing at each stage.' },
      { step: 4, title: 'Optimization', description: 'Continuous monitoring and cost optimization post-migration.' },
    ],
    benefits: ['Reduced infrastructure costs', 'Improved scalability', 'Enhanced security', 'Faster time to market', 'Global availability', 'Disaster recovery built-in'],
    stats: [
      { value: '40%', label: 'Cost Reduction' },
      { value: '99.99%', label: 'Uptime Guarantee' },
      { value: '200+', label: 'Cloud Projects' },
      { value: '3x', label: 'Faster Deployment' },
    ],
    testimonials: [
      { name: 'David Park', role: 'VP Engineering', company: 'ScaleUp Solutions', quote: 'Our cloud migration reduced costs by 45% while improving performance. Exceptional expertise.', rating: 5 },
      { name: 'Lisa Wang', role: 'Director of IT', company: 'GlobalTech', quote: 'The DevOps transformation has revolutionized how we deploy software. Incredible results.', rating: 5 },
    ],
    gradient: 'from-purple-500 to-indigo-600',
    accentColor: '#8B5CF6',
  },
  'performance-optimization': {
    id: 'performance-optimization',
    title: 'Performance Optimization',
    icon: Zap,
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    tagline: 'Maximize Speed, Minimize Latency',
    description: 'Maximize efficiency and uptime through code tuning, caching, load balancing, and global CDN deployment.',
    longDescription: 'Every millisecond counts. Our performance engineers analyze, optimize, and supercharge your applications to deliver lightning-fast experiences that delight users and improve conversions.',
    detailedExplanation: {
      overview: 'Performance optimization is the art and science of making your digital products faster, more efficient, and more reliable. It encompasses everything from frontend load times and server response speeds to database query optimization and network latency reduction. Our comprehensive approach analyzes every layer of your technology stack to identify bottlenecks and implement solutions that deliver measurable speed improvements.',
      whyItMatters: 'Speed is money. Research shows that a 1-second delay in page load time results in 7% reduction in conversions, 11% fewer page views, and 16% decrease in customer satisfaction. Google uses page speed as a ranking factor, meaning slow sites get less organic traffic. In e-commerce, Amazon found that every 100ms of latency cost them 1% in sales. Performance isn\'t a nice-to-have—it\'s essential for business success.',
      ourApproach: 'We take a data-driven approach to performance optimization, using real user monitoring and synthetic testing to identify exactly where time is being lost. Our n8n-powered monitoring continuously tracks performance metrics, automatically alerts on degradation, and even triggers auto-scaling before slowdowns impact users. We don\'t just fix problems—we prevent them.',
    },
    traditionalVsAutomation: {
      traditional: {
        title: 'How Others Do It',
        points: [
          'Manual performance testing periodically',
          'Reactive fixes after users complain',
          'Static caching configurations',
          'Manual cache invalidation',
          'Guesswork-based optimization',
        ],
        downsides: ['Problems discovered late', 'Inconsistent user experience', 'Wasted resources', 'Slow response to issues'],
      },
      ourWay: {
        title: 'Our n8n-Powered Approach',
        points: [
          'Continuous automated performance monitoring',
          'Proactive alerts before users notice issues',
          'Dynamic caching with intelligent invalidation',
          'Auto-triggered cache warming on content updates',
          'AI-driven optimization recommendations',
        ],
        benefits: ['Real-time visibility', 'Predictive optimization', 'Self-healing systems', 'Consistent speed'],
      },
    },
    n8nIntegration: {
      headline: 'Automated Performance Excellence',
      description: 'Our n8n workflows continuously monitor, analyze, and optimize your application performance without human intervention.',
      automations: [
        'Real-time performance monitoring with threshold alerts',
        'Auto-scaling triggers based on load predictions',
        'Automated cache invalidation on content changes',
        'Performance regression detection in deployments',
        'Automated CDN purge and preload workflows',
        'Weekly performance reports delivered automatically',
      ],
    },
    features: [
      { title: 'Load Balancing', description: 'Intelligent traffic distribution across servers for optimal performance and reliability.', icon: Workflow },
      { title: 'Caching Strategies', description: 'Multi-layer caching from browser to database for blazing-fast response times.', icon: Database },
      { title: 'Code Optimization', description: 'Algorithmic improvements, query optimization, and memory management.', icon: Code },
      { title: 'CDN Configuration', description: 'Global content delivery network setup for worldwide low-latency access.', icon: Cloud },
    ],
    process: [
      { step: 1, title: 'Performance Audit', description: 'Comprehensive analysis of current bottlenecks and performance metrics.' },
      { step: 2, title: 'Optimization Plan', description: 'Prioritized roadmap addressing the highest-impact improvements first.' },
      { step: 3, title: 'Implementation', description: 'Systematic optimization with A/B testing to validate improvements.' },
      { step: 4, title: 'Monitoring', description: 'Real-time performance monitoring and alerts for proactive maintenance.' },
    ],
    benefits: ['Faster page loads', 'Improved SEO rankings', 'Higher conversion rates', 'Reduced server costs', 'Better user experience', 'Scalability under load'],
    stats: [
      { value: '300%', label: 'Speed Increase' },
      { value: '<100ms', label: 'Response Time' },
      { value: '50%', label: 'Cost Savings' },
      { value: '99.9%', label: 'Uptime' },
    ],
    testimonials: [
      { name: 'Alex Thompson', role: 'Product Manager', company: 'FastTrack', quote: 'Our app load time dropped from 8 seconds to under 1 second. Conversion rates doubled!', rating: 5 },
      { name: 'Rachel Green', role: 'E-commerce Director', company: 'ShopElite', quote: 'The performance optimization directly impacted our bottom line. Worth every penny.', rating: 5 },
    ],
    gradient: 'from-yellow-500 to-orange-600',
    accentColor: '#F59E0B',
  },
  'cybersecurity': {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: Shield,
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
    tagline: 'Protect Your Digital Assets with Confidence',
    description: 'Protect digital assets with proactive threat detection, encryption, compliance audits, and 24/7 system monitoring.',
    longDescription: 'In an era of evolving cyber threats, your security posture must be proactive, not reactive. Our cybersecurity experts implement defense-in-depth strategies that protect your business, data, and reputation.',
    detailedExplanation: {
      overview: 'Cybersecurity encompasses the technologies, processes, and practices designed to protect networks, devices, programs, and data from attack, damage, or unauthorized access. In today\'s threat landscape, cybersecurity is not optional—it\'s a business imperative. Our comprehensive security services cover everything from vulnerability assessments and penetration testing to 24/7 monitoring, incident response, and compliance management.',
      whyItMatters: 'Cyber attacks cost businesses an average of $4.45 million per breach, with attacks occurring every 39 seconds. Beyond financial losses, breaches destroy customer trust, damage brand reputation, and can result in regulatory fines. Small businesses are particularly vulnerable—60% close within 6 months of a major breach. Proactive cybersecurity isn\'t an expense; it\'s insurance for your digital future.',
      ourApproach: 'We implement a defense-in-depth strategy that protects every layer of your technology stack. Our n8n-powered security automation provides continuous monitoring, instant threat detection, and automated incident response. Instead of relying on humans to catch threats, our automated workflows analyze patterns, correlate events across systems, and respond to attacks in milliseconds—faster than any human security team.',
    },
    traditionalVsAutomation: {
      traditional: {
        title: 'How Others Do It',
        points: [
          'Periodic manual security audits',
          'Alert fatigue from too many notifications',
          'Manual log review and analysis',
          'Slow incident response times',
          'Reactive patching after vulnerabilities disclosed',
        ],
        downsides: ['Threats missed between audits', 'Overwhelmed security teams', 'Slow response', 'Compliance gaps'],
      },
      ourWay: {
        title: 'Our n8n-Powered Approach',
        points: [
          'Continuous automated security scanning',
          'Intelligent alert correlation and prioritization',
          'Real-time log analysis with anomaly detection',
          'Automated incident response playbooks',
          'Proactive patch management with auto-deployment',
        ],
        benefits: ['24/7 automated vigilance', 'Faster response', 'Reduced false positives', 'Always compliant'],
      },
    },
    n8nIntegration: {
      headline: 'Security That Never Sleeps',
      description: 'Our n8n security automation provides round-the-clock protection, automated threat response, and compliance monitoring without human intervention.',
      automations: [
        'Real-time threat detection with auto-blocking',
        'Automated security alert triage and escalation',
        'Compliance monitoring with auto-remediation',
        'Automated vulnerability scanning schedules',
        'Incident response workflow automation',
        'Security report generation and distribution',
      ],
    },
    features: [
      { title: 'Threat Detection', description: 'AI-powered monitoring systems that identify and neutralize threats in real-time.', icon: Brain },
      { title: 'Encryption', description: 'End-to-end encryption for data at rest and in transit using industry-leading standards.', icon: Shield },
      { title: 'Compliance Audits', description: 'SOC 2, GDPR, HIPAA, and PCI-DSS compliance assessments and remediation.', icon: CheckCircle },
      { title: 'Security Monitoring', description: '24/7 Security Operations Center with instant incident response.', icon: Clock },
    ],
    process: [
      { step: 1, title: 'Security Assessment', description: 'Comprehensive vulnerability scanning and penetration testing.' },
      { step: 2, title: 'Strategy Development', description: 'Custom security roadmap based on your risk profile and compliance needs.' },
      { step: 3, title: 'Implementation', description: 'Deploy security controls, training, and monitoring systems.' },
      { step: 4, title: 'Continuous Protection', description: 'Ongoing monitoring, incident response, and security updates.' },
    ],
    benefits: ['24/7 threat monitoring', 'Regulatory compliance', 'Data breach prevention', 'Employee security training', 'Incident response planning', 'Business continuity'],
    stats: [
      { value: '0', label: 'Data Breaches' },
      { value: '100%', label: 'Compliance Rate' },
      { value: '24/7', label: 'Monitoring' },
      { value: '<1hr', label: 'Response Time' },
    ],
    testimonials: [
      { name: 'James Wilson', role: 'CISO', company: 'SecureBank', quote: 'Their proactive approach to security has prevented multiple potential breaches. Outstanding team.', rating: 5 },
      { name: 'Amanda Foster', role: 'Compliance Officer', company: 'HealthTech', quote: 'Achieved HIPAA compliance ahead of schedule. Their expertise is unmatched.', rating: 5 },
    ],
    gradient: 'from-green-500 to-emerald-600',
    accentColor: '#10B981',
  },
  'data-analytics': {
    id: 'data-analytics',
    title: 'Data Analytics',
    icon: Database,
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
    tagline: 'Turn Data into Actionable Insights',
    description: 'Visualize and interpret your data with tailored analytics platforms and predictive dashboards.',
    longDescription: 'Unlock the power of your data. Our data scientists and analysts build custom analytics solutions that transform raw data into strategic insights, driving smarter decisions and measurable business outcomes.',
    detailedExplanation: {
      overview: 'Data analytics is the science of analyzing raw data to uncover patterns, draw conclusions, and support decision-making. Our analytics services span the entire data lifecycle—from collection and storage to processing, visualization, and predictive modeling. We help organizations of all sizes transform their data chaos into structured insights that drive growth, efficiency, and competitive advantage.',
      whyItMatters: 'Companies that leverage data analytics are 23 times more likely to acquire customers, 6 times more likely to retain them, and 19 times more likely to be profitable. Yet 73% of enterprise data goes unused for analytics. The difference between market leaders and laggards often comes down to one thing: who can extract actionable insights from their data faster. Data is the new oil, but only if you can refine it.',
      ourApproach: 'We build end-to-end data pipelines that automate the entire analytics workflow. Using n8n, we create automated data collection, transformation, and reporting systems that deliver insights to stakeholders without manual intervention. Our dashboards update in real-time, alerts trigger automatically when metrics deviate, and reports generate and distribute themselves. You get answers before you even ask the questions.',
    },
    traditionalVsAutomation: {
      traditional: {
        title: 'How Others Do It',
        points: [
          'Manual data exports from multiple systems',
          'Spreadsheet-based analysis and reporting',
          'Weekly or monthly report generation',
          'Static dashboards with stale data',
          'Analysts spending 80% time on data prep',
        ],
        downsides: ['Outdated insights', 'High labor costs', 'Error-prone processes', 'Slow decision-making'],
      },
      ourWay: {
        title: 'Our n8n-Powered Approach',
        points: [
          'Automated data pipelines from all sources',
          'Real-time analytics and visualization',
          'Automated scheduled and triggered reports',
          'Live dashboards with streaming data',
          'Self-service analytics for all teams',
        ],
        benefits: ['Instant insights', 'Zero manual data prep', 'Always-current data', 'Faster decisions'],
      },
    },
    n8nIntegration: {
      headline: 'Analytics That Run Themselves',
      description: 'Our n8n automation handles data collection, processing, and delivery automatically, so you always have the insights you need without the manual work.',
      automations: [
        'Automated data extraction from 400+ sources',
        'Real-time ETL pipelines with error handling',
        'Scheduled report generation and distribution',
        'Anomaly detection with instant alerts',
        'Automated data quality monitoring',
        'AI-powered insight generation and delivery',
      ],
    },
    features: [
      { title: 'Big Data Processing', description: 'Handle massive datasets with distributed computing and stream processing.', icon: Database },
      { title: 'Data Visualization', description: 'Interactive dashboards and reports that make complex data accessible.', icon: TrendingUp },
      { title: 'BI Dashboards', description: 'Executive-level insights with drill-down capabilities for detailed analysis.', icon: Target },
      { title: 'Predictive Analytics', description: 'Machine learning models that forecast trends and predict outcomes.', icon: Brain },
    ],
    process: [
      { step: 1, title: 'Data Discovery', description: 'Identify data sources, quality assessment, and integration planning.' },
      { step: 2, title: 'Architecture Design', description: 'Build scalable data pipelines and warehouse infrastructure.' },
      { step: 3, title: 'Analytics Development', description: 'Create dashboards, reports, and predictive models.' },
      { step: 4, title: 'Insights Delivery', description: 'Training, documentation, and ongoing analytics support.' },
    ],
    benefits: ['Data-driven decisions', 'Real-time insights', 'Predictive capabilities', 'Custom dashboards', 'Automated reporting', 'Competitive advantage'],
    stats: [
      { value: '10x', label: 'Faster Insights' },
      { value: '85%', label: 'Prediction Accuracy' },
      { value: '100TB+', label: 'Data Processed' },
      { value: '500+', label: 'Reports Built' },
    ],
    testimonials: [
      { name: 'Tom Richards', role: 'Head of Analytics', company: 'DataFirst', quote: 'The dashboards transformed how we make decisions. Real-time insights that actually drive action.', rating: 5 },
      { name: 'Emily Chen', role: 'CEO', company: 'RetailPro', quote: 'Predictive analytics helped us anticipate market trends and stay ahead of competitors.', rating: 5 },
    ],
    gradient: 'from-pink-500 to-rose-600',
    accentColor: '#EC4899',
  },
  'ai-machine-learning': {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    icon: Brain,
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80',
    tagline: 'Intelligent Solutions for Tomorrow',
    description: 'Deploy advanced AI solutions for automation, predictive analytics, and natural language systems.',
    longDescription: 'Harness the transformative power of artificial intelligence. Our AI specialists develop custom machine learning solutions that automate processes, uncover insights, and create intelligent experiences for your users.',
    detailedExplanation: {
      overview: 'Artificial Intelligence and Machine Learning represent the frontier of technology innovation. We develop custom AI solutions that learn from your data, make intelligent predictions, and automate complex decision-making processes. From computer vision and natural language processing to recommendation engines and predictive analytics, our AI capabilities span the full spectrum of machine learning technologies.',
      whyItMatters: 'AI is transforming every industry. Companies using AI see 40% productivity improvements, 50% reduction in operational costs, and 30% increase in revenue. By 2025, AI will create $15.7 trillion in economic value globally. Organizations that don\'t embrace AI risk being left behind by competitors who do. The question isn\'t whether to adopt AI—it\'s how fast you can implement it effectively.',
      ourApproach: 'We make AI practical and accessible. Our approach combines cutting-edge machine learning with n8n workflow automation to deploy AI that integrates seamlessly with your existing operations. Every AI solution we build is designed for automation—models retrain automatically, predictions flow directly into business processes, and n8n workflows trigger actions based on AI insights without human intervention.',
    },
    traditionalVsAutomation: {
      traditional: {
        title: 'How Others Do It',
        points: [
          'AI models built in isolation from operations',
          'Manual model retraining and updates',
          'AI insights require human interpretation',
          'Siloed AI tools disconnected from workflows',
          'Data scientists needed for every change',
        ],
        downsides: ['Models become stale', 'Slow time-to-value', 'High expertise required', 'Limited scalability'],
      },
      ourWay: {
        title: 'Our n8n-Powered Approach',
        points: [
          'AI integrated directly into business workflows',
          'Automated model retraining on new data',
          'AI-triggered actions via n8n automation',
          'Unified platform connecting AI to all tools',
          'Self-service AI for business users',
        ],
        benefits: ['Always-fresh models', 'Instant AI actions', 'No coding required', 'Fully automated'],
      },
    },
    n8nIntegration: {
      headline: 'AI That Takes Action',
      description: 'Our n8n integration transforms AI from a passive analysis tool into an active automation engine that acts on insights automatically.',
      automations: [
        'AI-powered lead scoring with auto-assignment',
        'Automated document classification and routing',
        'Sentiment analysis triggers for customer alerts',
        'Predictive maintenance with auto-ticket creation',
        'AI chatbot with escalation workflows',
        'Automated model performance monitoring',
      ],
    },
    features: [
      { title: 'Neural Networks', description: 'Deep learning models for image recognition, NLP, and complex pattern detection.', icon: Brain },
      { title: 'Deep Learning', description: 'State-of-the-art architectures including transformers and generative AI.', icon: Lightbulb },
      { title: 'Predictive Models', description: 'Forecasting and classification models trained on your business data.', icon: TrendingUp },
      { title: 'NLP Solutions', description: 'Chatbots, sentiment analysis, and text processing systems.', icon: Megaphone },
    ],
    process: [
      { step: 1, title: 'Problem Definition', description: 'Identify AI/ML opportunities and define success metrics.' },
      { step: 2, title: 'Data Preparation', description: 'Collect, clean, and prepare training datasets.' },
      { step: 3, title: 'Model Development', description: 'Train, validate, and optimize machine learning models.' },
      { step: 4, title: 'Deployment & MLOps', description: 'Production deployment with monitoring and continuous improvement.' },
    ],
    benefits: ['Automated decision making', 'Personalized experiences', 'Process automation', 'Predictive capabilities', 'Continuous learning', 'Competitive edge'],
    stats: [
      { value: '95%', label: 'Model Accuracy' },
      { value: '1000+', label: 'Models Deployed' },
      { value: '60%', label: 'Automation Rate' },
      { value: '24/7', label: 'AI Operations' },
    ],
    testimonials: [
      { name: 'Dr. Robert Lee', role: 'Chief Data Scientist', company: 'AI Innovations', quote: 'Their ML expertise helped us achieve 95% accuracy in fraud detection. Game-changing results.', rating: 5 },
      { name: 'Sophia Martinez', role: 'Product Lead', company: 'SmartAssist', quote: 'The NLP chatbot handles 80% of customer inquiries automatically. Incredible ROI.', rating: 5 },
    ],
    gradient: 'from-cyan-400 to-teal-600',
    accentColor: '#14B8A6',
  },
  'social-media-campaigns': {
    id: 'social-media-campaigns',
    title: 'Social Media & Campaigns',
    icon: Megaphone,
    heroImage: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1920&q=80',
    tagline: 'Amplify Your Brand Voice',
    description: 'Accelerate brand growth with high-impact social campaigns, paid ads, and creative content design.',
    longDescription: 'Build a powerful social media presence that drives engagement and conversions. Our social media strategists create compelling campaigns that resonate with your audience and deliver measurable results.',
    detailedExplanation: {
      overview: 'Social media marketing is the strategic use of social platforms to connect with your audience, build your brand, increase sales, and drive website traffic. Our comprehensive social media services include strategy development, content creation, community management, paid advertising, and analytics. We manage campaigns across Facebook, Instagram, LinkedIn, Twitter, TikTok, and emerging platforms.',
      whyItMatters: 'Over 4.9 billion people use social media worldwide—that\'s 62% of the global population. Social media users spend an average of 2.5 hours per day on platforms, making it the most effective channel to reach your audience. Brands with strong social presence see 88% more brand awareness, 78% higher customer retention, and 74% more leads. Social isn\'t optional—it\'s where your customers live.',
      ourApproach: 'We combine creative excellence with data-driven optimization and n8n automation. Our workflows automatically schedule posts at optimal times, respond to engagement triggers, generate performance reports, and even create AI-powered content variations. While other agencies rely on manual processes, our automation ensures consistent posting, rapid response to trends, and 24/7 community engagement.',
    },
    traditionalVsAutomation: {
      traditional: {
        title: 'How Others Do It',
        points: [
          'Manual posting and scheduling',
          'Reactive community management',
          'Manual performance reporting',
          'Slow response to trends',
          'Inconsistent posting frequency',
        ],
        downsides: ['Missed opportunities', 'High labor costs', 'Inconsistent presence', 'Delayed insights'],
      },
      ourWay: {
        title: 'Our n8n-Powered Approach',
        points: [
          'AI-optimized scheduling automation',
          'Instant auto-responses and escalation',
          'Real-time dashboards and automated reports',
          'Trend monitoring with instant alerts',
          'Consistent cross-platform publishing',
        ],
        benefits: ['Never miss a moment', '24/7 engagement', 'Real-time insights', 'Perfect consistency'],
      },
    },
    n8nIntegration: {
      headline: 'Social Media on Autopilot',
      description: 'Our n8n workflows automate the repetitive tasks of social media management, letting your team focus on creativity and strategy.',
      automations: [
        'Cross-platform post scheduling and publishing',
        'Auto-responses to comments and messages',
        'Sentiment monitoring with escalation workflows',
        'Competitor activity alerts',
        'Automated performance report generation',
        'Content repurposing across platforms',
      ],
    },
    features: [
      { title: 'Social Media Marketing', description: 'Strategic content planning and community management across all platforms.', icon: Megaphone },
      { title: 'Paid Campaigns', description: 'ROI-focused advertising on Facebook, Instagram, LinkedIn, and more.', icon: Target },
      { title: 'Content Creation', description: 'Eye-catching graphics, videos, and copy that capture attention.', icon: Play },
      { title: 'Brand Management', description: 'Consistent brand voice and reputation monitoring across channels.', icon: Award },
    ],
    process: [
      { step: 1, title: 'Brand Audit', description: 'Analyze current social presence and competitor landscape.' },
      { step: 2, title: 'Strategy Development', description: 'Create content calendar and campaign roadmap.' },
      { step: 3, title: 'Content & Campaigns', description: 'Produce content and launch targeted ad campaigns.' },
      { step: 4, title: 'Analyze & Optimize', description: 'Track performance and continuously improve results.' },
    ],
    benefits: ['Increased brand awareness', 'Higher engagement rates', 'Targeted reach', 'Community building', 'Lead generation', 'Brand loyalty'],
    stats: [
      { value: '500%', label: 'Engagement Increase' },
      { value: '10M+', label: 'Impressions' },
      { value: '300%', label: 'ROI Average' },
      { value: '50K+', label: 'Leads Generated' },
    ],
    testimonials: [
      { name: 'Jessica Brown', role: 'Marketing Director', company: 'BrandUp', quote: 'Our social following grew 400% in 6 months. The engagement rates are incredible.', rating: 5 },
      { name: 'Mark Davis', role: 'Founder', company: 'StartupX', quote: 'The paid campaigns delivered 5x ROI. Best marketing investment we\'ve made.', rating: 5 },
    ],
    gradient: 'from-red-500 to-pink-600',
    accentColor: '#EF4444',
  },
  'youtube-promotions': {
    id: 'youtube-promotions',
    title: 'YouTube Promotions',
    icon: Youtube,
    heroImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&q=80',
    tagline: 'Dominate the Video Platform',
    description: 'Grow your audience with full YouTube channel setup, video SEO, strategic campaigns, and advanced analytics.',
    longDescription: 'Unlock YouTube\'s massive potential for your brand. From channel optimization to viral video strategies, we help you build a subscriber base that converts into loyal customers.',
    detailedExplanation: {
      overview: 'YouTube is the world\'s second-largest search engine and the premier platform for video content. With over 2 billion logged-in users monthly, it represents an unparalleled opportunity for brand awareness, audience engagement, and revenue generation. Our YouTube promotion services encompass everything from channel branding and video SEO to paid advertising campaigns and influencer partnerships. We help you create content strategies that resonate with your target audience and grow your subscriber base organically.',
      whyItMatters: 'Video content generates 1200% more shares than text and images combined. Businesses using video grow revenue 49% faster than non-video users. YouTube videos appear in 70% of the top 100 Google search results, giving you dual visibility. The platform\'s advertising capabilities allow precise targeting by demographics, interests, and even specific videos your audience watches. Without a YouTube presence, you\'re missing the largest engaged audience on the internet.',
      ourApproach: 'We combine creative excellence with data-driven strategy. Every video is optimized for YouTube\'s algorithm using our proprietary SEO methodology. Our n8n automation handles the tedious tasks—scheduling uploads, distributing across platforms, monitoring comments, and generating performance reports—so your team can focus on creating great content. We don\'t just post and hope; we actively promote, analyze, and iterate for continuous growth.',
    },
    traditionalVsAutomation: {
      traditional: {
        title: 'How Others Do It',
        points: [
          'Manual video uploads and scheduling',
          'Guesswork on optimal posting times',
          'Slow response to comments and engagement',
          'Monthly performance reports (if any)',
          'Disconnected from other marketing channels',
        ],
        downsides: ['Missed engagement opportunities', 'Inconsistent posting', 'Time-consuming management', 'Poor cross-platform synergy'],
      },
      ourWay: {
        title: 'Our n8n-Powered Approach',
        points: [
          'Automated video publishing at optimal times',
          'AI-driven thumbnail and title A/B testing',
          'Instant comment monitoring and response triggers',
          'Real-time analytics dashboards updated automatically',
          'Cross-platform content distribution from single upload',
        ],
        benefits: ['2x more engagement', 'Consistent growth', 'Instant insights', 'Multi-platform reach'],
      },
    },
    n8nIntegration: {
      headline: 'YouTube Growth on Autopilot',
      description: 'Our n8n workflows transform YouTube channel management from a full-time job into an automated system that works 24/7.',
      automations: [
        'Auto-publish videos at peak audience times across time zones',
        'Instant Slack/Discord alerts on viral video trends',
        'Automated comment moderation and response triggers',
        'Competitor upload monitoring and analysis',
        'Automated performance reports to stakeholders',
        'Cross-post to Instagram Reels, TikTok, and Shorts automatically',
      ],
    },
    features: [
      { title: 'Channel Setup & Branding', description: 'Professional channel design with optimized banners, thumbnails, and playlists.', icon: Youtube },
      { title: 'Video SEO Optimization', description: 'Keyword research, titles, descriptions, and tags that rank.', icon: TrendingUp },
      { title: 'Audience Targeting', description: 'Precise ad targeting to reach your ideal viewers.', icon: Users },
      { title: 'Performance Tracking', description: 'Analytics dashboards and growth strategy optimization.', icon: Target },
    ],
    process: [
      { step: 1, title: 'Channel Audit', description: 'Analyze current performance and identify growth opportunities.' },
      { step: 2, title: 'Strategy Creation', description: 'Develop content strategy and upload schedule.' },
      { step: 3, title: 'Optimization', description: 'Optimize existing videos and implement SEO best practices.' },
      { step: 4, title: 'Growth Campaigns', description: 'Launch promotional campaigns and track results.' },
    ],
    benefits: ['Increased subscribers', 'Higher video rankings', 'More views & watch time', 'Monetization optimization', 'Community building', 'Brand authority'],
    stats: [
      { value: '1M+', label: 'Views Generated' },
      { value: '100K+', label: 'Subscribers Gained' },
      { value: '200%', label: 'Watch Time Increase' },
      { value: '50+', label: 'Channels Optimized' },
    ],
    testimonials: [
      { name: 'Chris Taylor', role: 'Content Creator', company: 'TechTube', quote: 'Went from 5K to 100K subscribers in 8 months. Their YouTube expertise is unreal.', rating: 5 },
      { name: 'Nina Patel', role: 'Brand Manager', company: 'LifestyleCo', quote: 'Our video views increased 500% after their optimization. Highly recommend.', rating: 5 },
    ],
    gradient: 'from-red-600 to-rose-700',
    accentColor: '#DC2626',
  },
  'digital-seo-marketing': {
    id: 'digital-seo-marketing',
    title: 'Digital & SEO Marketing',
    icon: TrendingUp,
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
    tagline: 'Rank Higher, Grow Faster',
    description: 'Boost visibility and search rankings through expert SEO, keyword research, and technical optimization.',
    longDescription: 'Dominate search results and drive organic traffic. Our SEO specialists implement proven strategies that improve your visibility, attract qualified leads, and deliver sustainable growth.',
    detailedExplanation: {
      overview: 'Search Engine Optimization (SEO) is the practice of optimizing your online presence to rank higher in search engine results pages (SERPs). It encompasses technical optimization, content strategy, link building, and user experience improvements. Our comprehensive SEO services cover on-page optimization, technical SEO audits, content marketing, and authority building. We focus on sustainable, white-hat techniques that deliver long-term ranking improvements rather than quick fixes that risk penalties.',
      whyItMatters: 'Organic search drives 53% of all website traffic, and the first Google result captures 31.7% of all clicks. Businesses that invest in SEO see an average ROI of 748%—far exceeding paid advertising. Unlike paid ads that stop when you stop paying, SEO builds compounding value over time. Your rankings become a durable asset that continues generating leads month after month. In competitive markets, SEO is often the difference between thriving and struggling.',
      ourApproach: 'We start with comprehensive audits to understand your current position and opportunities. Our keyword research identifies the terms your ideal customers actually use. We then optimize your site technically, create content that ranks and converts, and build authority through quality backlinks. Our n8n automation continuously monitors rankings, tracks competitor movements, and alerts us to algorithm updates—so we can adapt your strategy in real-time rather than waiting for monthly reports.',
    },
    traditionalVsAutomation: {
      traditional: {
        title: 'How Others Do It',
        points: [
          'Manual rank tracking weekly or monthly',
          'Periodic SEO audits (quarterly at best)',
          'Reactive response to algorithm updates',
          'Manual competitor research',
          'Static keyword lists that get stale',
        ],
        downsides: ['Slow to adapt', 'Missed opportunities', 'Outdated strategies', 'Labor-intensive monitoring'],
      },
      ourWay: {
        title: 'Our n8n-Powered Approach',
        points: [
          'Real-time rank tracking with instant alerts on changes',
          'Continuous automated technical audits',
          'Proactive algorithm update detection and response',
          'Automated competitor content monitoring',
          'AI-powered keyword opportunity discovery',
        ],
        benefits: ['Always current rankings', 'Zero surprises', 'First-mover advantage', 'Data-driven decisions'],
      },
    },
    n8nIntegration: {
      headline: 'SEO Intelligence That Never Sleeps',
      description: 'Our n8n automation transforms SEO from a periodic project into a continuous improvement engine that catches opportunities and threats in real-time.',
      automations: [
        'Daily rank tracking with change alerts via Slack/email',
        'Automated technical SEO monitoring and issue detection',
        'Competitor content and backlink alerts',
        'Google algorithm update detection and impact analysis',
        'Automated monthly SEO reports to stakeholders',
        'New keyword opportunity alerts based on trending searches',
      ],
    },
    features: [
      { title: 'On-Page SEO', description: 'Content optimization, meta tags, and internal linking strategies.', icon: Code },
      { title: 'Keyword Research', description: 'Data-driven keyword strategy targeting high-intent search terms.', icon: Target },
      { title: 'Local SEO', description: 'Google My Business optimization and local citation building.', icon: Users },
      { title: 'Technical Optimization', description: 'Site speed, mobile-first indexing, and Core Web Vitals.', icon: Zap },
    ],
    process: [
      { step: 1, title: 'SEO Audit', description: 'Comprehensive technical and content analysis.' },
      { step: 2, title: 'Keyword Strategy', description: 'Research and prioritize target keywords.' },
      { step: 3, title: 'Implementation', description: 'Execute on-page, technical, and content optimizations.' },
      { step: 4, title: 'Link Building', description: 'Earn quality backlinks and monitor rankings.' },
    ],
    benefits: ['Higher search rankings', 'Increased organic traffic', 'Better conversion rates', 'Long-term results', 'Brand credibility', 'Cost-effective growth'],
    stats: [
      { value: '#1', label: 'Rankings Achieved' },
      { value: '400%', label: 'Traffic Increase' },
      { value: '10K+', label: 'Keywords Ranked' },
      { value: '200+', label: 'Clients Served' },
    ],
    testimonials: [
      { name: 'Andrew Miller', role: 'CMO', company: 'GrowthHub', quote: 'Organic traffic increased 400% in 12 months. The ROI on SEO has been phenomenal.', rating: 5 },
      { name: 'Laura Kim', role: 'Owner', company: 'LocalBiz', quote: 'We now rank #1 for our main keywords. Phone calls from Google have tripled.', rating: 5 },
    ],
    gradient: 'from-blue-500 to-cyan-600',
    accentColor: '#3B82F6',
  },
  'ai-consulting-training': {
    id: 'ai-consulting-training',
    title: 'AI Consulting & Training',
    icon: BookOpen,
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
    tagline: 'Empower Your Team with AI Knowledge',
    description: 'Plan, train, and launch AI adoption with tailored consulting and workforce upskilling.',
    longDescription: 'Navigate the AI revolution with expert guidance. Our consultants help you develop an AI strategy, train your team, and implement solutions that drive real business value.',
    detailedExplanation: {
      overview: 'Artificial Intelligence is transforming every industry, but implementing it successfully requires strategic planning, skilled teams, and the right approach. Our AI consulting and training services bridge the gap between AI potential and practical business value. We help organizations assess their AI readiness, develop implementation roadmaps, train their workforce, and guide pilot projects to success. From executive strategy sessions to hands-on developer training, we meet you where you are in your AI journey.',
      whyItMatters: 'Companies that adopt AI effectively see 20-30% productivity improvements and significant competitive advantages. However, 85% of AI projects fail to deliver business value due to lack of strategy, skills, or organizational alignment. The cost of getting AI wrong isn\'t just the failed project—it\'s the opportunity cost while competitors pull ahead. Proper guidance dramatically increases your success rate and accelerates time-to-value.',
      ourApproach: 'We believe AI adoption is 80% people and process, 20% technology. Our consultants start by understanding your business objectives, then map AI capabilities to those goals. Training programs are customized to your team\'s roles—executives learn to evaluate AI investments, managers learn to lead AI projects, and technical staff learn to build and deploy models. Throughout, we use n8n automation to demonstrate practical AI applications and build internal automation capabilities.',
    },
    traditionalVsAutomation: {
      traditional: {
        title: 'How Others Do It',
        points: [
          'Generic AI courses disconnected from business context',
          'One-time training with no follow-up',
          'Theory-heavy, practice-light curriculum',
          'No clear path from training to implementation',
          'Siloed learning without cross-team collaboration',
        ],
        downsides: ['Knowledge fades quickly', 'No practical skills', 'Wasted training budgets', 'Stalled AI initiatives'],
      },
      ourWay: {
        title: 'Our n8n-Powered Approach',
        points: [
          'Custom curriculum aligned to your specific use cases',
          'Ongoing learning with automated progress tracking',
          'Hands-on projects using your actual business data',
          'Direct path from training to production pilots',
          'Cross-functional workshops with n8n demonstrations',
        ],
        benefits: ['Immediately applicable skills', 'Higher retention', 'Faster AI adoption', 'Measurable outcomes'],
      },
    },
    n8nIntegration: {
      headline: 'Learn AI by Building Real Automations',
      description: 'Our training programs use n8n as the practical bridge between AI concepts and business applications. Your team learns by building automations they\'ll actually use.',
      automations: [
        'Automated training progress tracking and reminders',
        'AI-powered assessment and personalized learning paths',
        'Hands-on n8n workflow building exercises',
        'Automated certification and badge delivery',
        'Post-training skill application monitoring',
        'AI resource library with automated updates on new developments',
      ],
    },
    features: [
      { title: 'AI Readiness Assessment', description: 'Evaluate your organization\'s AI maturity and identify opportunities.', icon: Target },
      { title: 'AI Integration Strategy', description: 'Roadmap for implementing AI across your business processes.', icon: Workflow },
      { title: 'Corporate AI Training', description: 'Custom workshops and courses for all skill levels.', icon: BookOpen },
      { title: 'Process Automation Guidance', description: 'Identify and automate high-value business processes.', icon: Wrench },
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Evaluate current capabilities and AI opportunities.' },
      { step: 2, title: 'Strategy Workshop', description: 'Collaborative sessions to define AI roadmap.' },
      { step: 3, title: 'Training Delivery', description: 'Customized training programs for your team.' },
      { step: 4, title: 'Implementation Support', description: 'Hands-on guidance for AI project execution.' },
    ],
    benefits: ['Strategic AI roadmap', 'Skilled workforce', 'Reduced risk', 'Faster adoption', 'Measurable outcomes', 'Ongoing expertise'],
    stats: [
      { value: '500+', label: 'People Trained' },
      { value: '100+', label: 'Companies Consulted' },
      { value: '95%', label: 'Satisfaction Rate' },
      { value: '50+', label: 'AI Projects Launched' },
    ],
    testimonials: [
      { name: 'Karen White', role: 'HR Director', company: 'FutureCorp', quote: 'The training transformed how our team thinks about AI. Practical, actionable, and engaging.', rating: 5 },
      { name: 'Steven Harris', role: 'CEO', company: 'InnovateTech', quote: 'Their consulting helped us avoid costly mistakes and fast-track our AI journey.', rating: 5 },
    ],
    gradient: 'from-violet-500 to-purple-600',
    accentColor: '#8B5CF6',
  },
  'custom-ai-tools-automation': {
    id: 'custom-ai-tools-automation',
    title: 'Custom AI Tools & Automation',
    icon: Wrench,
    heroImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80',
    tagline: 'Build Intelligent Automation',
    description: 'Unlock efficiency with bespoke AI products, workflow automation, integrated APIs, and advanced bots.',
    longDescription: 'Create custom AI-powered tools that solve your unique challenges. From intelligent chatbots to automated workflows, we build solutions that save time, reduce errors, and scale your operations.',
    detailedExplanation: {
      overview: 'Custom AI tools combine the power of machine learning, natural language processing, and intelligent automation to solve business problems that off-the-shelf software cannot address. Our services span the full spectrum—from AI-powered chatbots and document processing to predictive analytics and decision support systems. We build tools that integrate seamlessly with your existing workflows, learn from your data, and get smarter over time. Every solution is designed with usability in mind, ensuring your team adopts and benefits from AI immediately.',
      whyItMatters: 'Generic AI tools force you to adapt your processes to their limitations. Custom AI tools adapt to YOUR processes, capturing institutional knowledge and automating the exact workflows that consume your team\'s time. Organizations with custom AI solutions report 40-80% time savings on targeted processes. The competitive advantage is substantial—while competitors manually process, review, and decide, your AI-augmented team operates at 10x speed with fewer errors.',
      ourApproach: 'We start by deeply understanding the problem you\'re solving and the outcomes you need. Our team then designs AI solutions that balance sophistication with reliability—we prefer proven approaches enhanced by the latest AI capabilities over bleeding-edge experiments. Every tool we build connects to n8n, creating a unified automation ecosystem. This means your AI doesn\'t just work in isolation—it triggers workflows, updates systems, and orchestrates complex multi-step processes automatically.',
    },
    traditionalVsAutomation: {
      traditional: {
        title: 'How Others Do It',
        points: [
          'AI tools operate in isolation from other systems',
          'Manual data transfer between AI and business apps',
          'One-off AI solutions without scaling plan',
          'Black-box AI with poor explainability',
          'No continuous learning or improvement loop',
        ],
        downsides: ['Integration nightmares', 'Limited business impact', 'Stale models', 'Trust issues'],
      },
      ourWay: {
        title: 'Our n8n-Powered Approach',
        points: [
          'AI tools deeply integrated with your entire tech stack',
          'Automated data pipelines feeding AI and distributing outputs',
          'Modular AI components that scale and evolve',
          'Transparent AI with clear decision explanations',
          'Continuous learning loops with performance monitoring',
        ],
        benefits: ['Seamless integration', 'Compounding value', 'Always improving', 'Built-in trust'],
      },
    },
    n8nIntegration: {
      headline: 'AI That Powers Your Entire Operation',
      description: 'Our n8n integration layer ensures your custom AI tools don\'t just analyze—they act. Every insight triggers workflows, every prediction drives decisions.',
      automations: [
        'AI-powered document processing with auto-filing and routing',
        'Intelligent chatbot with CRM integration and escalation',
        'Predictive alerts that trigger preventive workflows',
        'Automated data enrichment and classification',
        'AI-generated reports distributed to stakeholders',
        'Continuous model performance monitoring with retraining triggers',
      ],
    },
    features: [
      { title: 'Custom AI Tools', description: 'Purpose-built AI applications for your specific use cases.', icon: Wrench },
      { title: 'Workflow Automation', description: 'Automate repetitive tasks with intelligent process flows.', icon: Workflow },
      { title: 'API Integrations', description: 'Connect AI tools with your existing software ecosystem.', icon: Code },
      { title: 'Bot Development', description: 'Conversational AI and task automation bots.', icon: Brain },
    ],
    process: [
      { step: 1, title: 'Requirements Analysis', description: 'Understand your automation needs and pain points.' },
      { step: 2, title: 'Solution Design', description: 'Architect the optimal AI and automation approach.' },
      { step: 3, title: 'Development', description: 'Build and test custom tools and integrations.' },
      { step: 4, title: 'Deployment & Training', description: 'Launch and train your team on the new tools.' },
    ],
    benefits: ['Time savings', 'Reduced errors', 'Increased productivity', 'Seamless integrations', 'Scalable solutions', 'Competitive advantage'],
    stats: [
      { value: '80%', label: 'Time Saved' },
      { value: '200+', label: 'Bots Deployed' },
      { value: '99%', label: 'Accuracy Rate' },
      { value: '1000+', label: 'Workflows Automated' },
    ],
    testimonials: [
      { name: 'Brian Scott', role: 'Operations Manager', company: 'AutoFlow', quote: 'The custom automation tools save us 40 hours per week. Incredible efficiency gains.', rating: 5 },
      { name: 'Diana Ross', role: 'Customer Success', company: 'SupportPro', quote: 'The AI chatbot handles 70% of support tickets automatically. Our team loves it.', rating: 5 },
    ],
    gradient: 'from-amber-500 to-orange-600',
    accentColor: '#F59E0B',
  },
  'n8n-workflow-automation': {
    id: 'n8n-workflow-automation',
    title: 'n8n Workflow Automation',
    icon: Workflow,
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
    tagline: 'Connect Everything, Automate Anything',
    description: 'Transform business operations with cutting-edge n8n automation solutions. Connect 400+ apps without code.',
    longDescription: 'Leverage the power of n8n to create sophisticated automation workflows that connect your entire tech stack. Our n8n experts design, build, and maintain automation solutions that save time and eliminate manual work.',
    detailedExplanation: {
      overview: 'n8n is the world\'s most powerful workflow automation platform, enabling you to connect over 400 applications and build complex automation sequences without writing code. Unlike simple automation tools, n8n provides enterprise-grade features including self-hosting, custom nodes, advanced error handling, and unlimited workflows. Our n8n services cover the complete lifecycle—from initial setup and workflow design to custom node development and ongoing optimization. We help organizations replace manual processes with reliable, scalable automation that runs 24/7.',
      whyItMatters: 'The average knowledge worker spends 60% of their time on routine, repeatable tasks. Manual processes are slow, error-prone, and don\'t scale. With n8n automation, those same tasks happen instantly, accurately, and without human intervention. Organizations implementing comprehensive n8n solutions typically see 70-90% reduction in manual work for automated processes, freeing teams to focus on high-value activities. The cost savings alone typically deliver ROI within the first month.',
      ourApproach: 'We believe in automation that empowers rather than replaces your team. Our process starts with mapping your current workflows to identify high-impact automation opportunities. We then design elegant solutions that are easy to understand, maintain, and extend. Every workflow includes comprehensive error handling, monitoring, and documentation. For complex needs, we develop custom nodes that extend n8n\'s capabilities. And because we use n8n ourselves, we understand the platform deeply and can push its boundaries.',
    },
    traditionalVsAutomation: {
      traditional: {
        title: 'How Others Do It',
        points: [
          'Simple zapier-style triggers with limited logic',
          'Cloud-only with data privacy concerns',
          'Per-task pricing that gets expensive fast',
          'Limited customization and flexibility',
          'Siloed automations without orchestration',
        ],
        downsides: ['Basic functionality', 'Scaling costs explode', 'Vendor lock-in', 'Privacy risks'],
      },
      ourWay: {
        title: 'Our n8n-Powered Approach',
        points: [
          'Complex multi-step workflows with advanced logic',
          'Self-hosted option for complete data control',
          'Unlimited workflows and executions',
          'Custom node development for any integration',
          'Orchestrated automation across your entire business',
        ],
        benefits: ['Enterprise capability', 'Predictable costs', 'Full data control', 'Unlimited scale'],
      },
    },
    n8nIntegration: {
      headline: 'n8n Is What We Do',
      description: 'As n8n specialists, we don\'t just implement automations—we architect comprehensive automation ecosystems that transform how your business operates.',
      automations: [
        'End-to-end business process automation',
        'Cross-department workflow orchestration',
        'Custom node development for proprietary systems',
        'AI-enhanced workflows with LLM integration',
        'Real-time monitoring and alerting systems',
        'Self-hosted enterprise deployments with HA configuration',
      ],
    },
    features: [
      { title: 'n8n Setup & Configuration', description: 'Professional n8n deployment with security and performance optimization.', icon: Workflow },
      { title: 'Custom Workflow Design', description: 'Sophisticated automation sequences tailored to your processes.', icon: Code },
      { title: 'Advanced Integrations', description: 'Connect any tool with 400+ pre-built nodes and custom development.', icon: Database },
      { title: 'Self-Hosted Solutions', description: 'On-premise deployments with enterprise security and compliance.', icon: Shield },
    ],
    process: [
      { step: 1, title: 'Process Mapping', description: 'Document current workflows and identify automation opportunities.' },
      { step: 2, title: 'Workflow Design', description: 'Design optimal automation flows using n8n.' },
      { step: 3, title: 'Build & Test', description: 'Develop workflows with comprehensive error handling.' },
      { step: 4, title: 'Deploy & Monitor', description: 'Launch with monitoring and ongoing optimization.' },
    ],
    benefits: ['No-code automation', '400+ app integrations', 'Self-hosted options', 'Real-time processing', 'Cost savings', 'Scalable workflows'],
    stats: [
      { value: '400+', label: 'App Integrations' },
      { value: '10K+', label: 'Workflows Built' },
      { value: '99.9%', label: 'Uptime' },
      { value: '90%', label: 'Time Saved' },
    ],
    testimonials: [
      { name: 'Paul Anderson', role: 'Tech Lead', company: 'AutomateCo', quote: 'n8n automation replaced 10 different tools and saves us hours every day. Brilliant solution.', rating: 5 },
      { name: 'Michelle Lee', role: 'Operations Director', company: 'FlowTech', quote: 'The self-hosted n8n setup gives us complete control and security. Exactly what we needed.', rating: 5 },
    ],
    gradient: 'from-emerald-500 to-teal-600',
    accentColor: '#10B981',
  },
};

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  
  const service = serviceId ? servicesData[serviceId] : null;
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    if (!serviceId || !servicesData[serviceId]) {
      navigate('/services');
    }
  }, [serviceId, navigate]);

  if (!service) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
        <div className="animate-spin w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  const Icon = service.icon;

  // Get service navigation (previous/next)
  const serviceIds = Object.keys(servicesData);
  const currentIndex = serviceId ? serviceIds.indexOf(serviceId) : -1;
  const prevService = currentIndex > 0 ? servicesData[serviceIds[currentIndex - 1]] : null;
  const nextService = currentIndex < serviceIds.length - 1 ? servicesData[serviceIds[currentIndex + 1]] : null;

  return (
    <div className={`relative min-h-screen ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
      <Header />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-[90vh] min-h-[600px] overflow-hidden"
      >
        <motion.div
          className="absolute inset-0"
          style={{ scale: heroScale, y: heroY }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.heroImage})` }}
          />
          <div className={`absolute inset-0 ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0f]'
              : 'bg-gradient-to-b from-black/50 via-black/30 to-gray-50'
          }`} />
        </motion.div>

        <motion.div
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 pt-16"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-8 bg-gradient-to-br ${service.gradient}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          >
            <Icon size={48} className="text-white" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron text-white mb-6 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {service.title}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {service.tagline}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.a
              href="/contact"
              className={`px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r ${service.gradient} shadow-lg transition-all`}
              whileHover={{ scale: 1.05, boxShadow: `0 20px 40px ${service.accentColor}40` }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
            <motion.a
              href="#overview"
              className="px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className={`w-6 h-10 rounded-full border-2 ${theme === 'dark' ? 'border-white/30' : 'border-white/50'} flex justify-center`}>
            <motion.div
              className="w-1.5 h-3 rounded-full bg-white mt-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Bar */}
      <section className={`py-12 ${theme === 'dark' ? 'bg-gradient-to-r from-gray-900/50 to-gray-800/50' : 'bg-gradient-to-r from-gray-100 to-gray-200'}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {service.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className={`text-4xl md:text-5xl font-bold font-orbitron mb-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', delay: index * 0.1 + 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className={`py-20 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold font-orbitron mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Overview
              </h2>
              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {service.longDescription}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    className={`p-6 rounded-2xl h-full ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50'
                        : 'bg-white shadow-lg border border-gray-100'
                    }`}
                    whileHover={{ y: -5, boxShadow: `0 20px 40px ${service.accentColor}20` }}
                  >
                    <motion.div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${service.gradient}`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                    >
                      <FeatureIcon size={28} className="text-white" />
                    </motion.div>
                    <h3 className={`text-xl font-bold mb-3 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {feature.description}
                    </p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Explanation Section */}
      <section className={`py-20 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-[#0a0a0f] via-gray-900/30 to-[#0a0a0f]'
          : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
      }`}>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className={`text-3xl md:text-4xl font-bold font-orbitron mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Deep Dive: {service.title}
                </h2>
              </div>
              
              <div className="space-y-8">
                <motion.div
                  className={`p-8 rounded-2xl ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50'
                      : 'bg-white shadow-lg border border-gray-100'
                  }`}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${service.gradient}`}>
                      <Target size={20} className="text-white" />
                    </div>
                    <h3 className={`text-xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      What It Is
                    </h3>
                  </div>
                  <p className={`text-base leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {service.detailedExplanation.overview}
                  </p>
                </motion.div>

                <motion.div
                  className={`p-8 rounded-2xl ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50'
                      : 'bg-white shadow-lg border border-gray-100'
                  }`}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${service.gradient}`}>
                      <Lightbulb size={20} className="text-white" />
                    </div>
                    <h3 className={`text-xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Why It Matters
                    </h3>
                  </div>
                  <p className={`text-base leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {service.detailedExplanation.whyItMatters}
                  </p>
                </motion.div>

                <motion.div
                  className={`p-8 rounded-2xl ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50'
                      : 'bg-white shadow-lg border border-gray-100'
                  }`}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${service.gradient}`}>
                      <Rocket size={20} className="text-white" />
                    </div>
                    <h3 className={`text-xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Our Approach
                    </h3>
                  </div>
                  <p className={`text-base leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {service.detailedExplanation.ourApproach}
                  </p>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Traditional vs Our Way Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold font-orbitron mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                The Automation Advantage
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                See how n8n-powered automation transforms {service.title.toLowerCase()}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <motion.div
                className={`h-full p-8 rounded-2xl border-2 ${
                  theme === 'dark'
                    ? 'bg-gray-900/50 border-gray-600/50'
                    : 'bg-gray-100 border-gray-300'
                }`}
                whileHover={{ y: -5 }}
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
                  theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-200'
                }`}>
                  <span className={`text-sm font-semibold ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {service.traditionalVsAutomation.traditional.title}
                  </span>
                </div>
                
                <ul className="space-y-4 mb-6">
                  {service.traditionalVsAutomation.traditional.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
                      }`}>
                        <span className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>-</span>
                      </div>
                      <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className={`pt-6 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                  <p className={`text-sm font-semibold mb-3 ${
                    theme === 'dark' ? 'text-red-400' : 'text-red-600'
                  }`}>
                    Common Problems:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.traditionalVsAutomation.traditional.downsides.map((downside, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs ${
                          theme === 'dark'
                            ? 'bg-red-500/20 text-red-300'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {downside}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                className={`h-full p-8 rounded-2xl border-2 relative overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/50 border-cyan-500/50'
                    : 'bg-gradient-to-br from-white to-cyan-50 border-cyan-400'
                }`}
                whileHover={{ y: -5, boxShadow: `0 20px 40px ${service.accentColor}20` }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full -translate-y-1/2 translate-x-1/2`} />
                
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-gradient-to-r ${service.gradient}`}>
                  <Workflow size={16} className="text-white" />
                  <span className="text-sm font-semibold text-white">
                    {service.traditionalVsAutomation.ourWay.title}
                  </span>
                </div>
                
                <ul className="space-y-4 mb-6">
                  {service.traditionalVsAutomation.ourWay.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${service.gradient}`}>
                        <Check size={12} className="text-white" />
                      </div>
                      <span className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className={`pt-6 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-cyan-200'}`}>
                  <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    Your Benefits:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.traditionalVsAutomation.ourWay.benefits.map((benefit, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs bg-gradient-to-r ${service.gradient} text-white`}
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* n8n Integration Section */}
      <section className={`py-20 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-[#0a0a0f] via-gray-900/50 to-[#0a0a0f]'
          : 'bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50'
      }`}>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <motion.div
                className={`p-10 rounded-3xl relative overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50'
                    : 'bg-gradient-to-br from-white to-gray-50 shadow-xl border border-gray-100'
                }`}
                whileHover={{ boxShadow: `0 30px 60px ${service.accentColor}15` }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`} />
                
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient}`}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                  >
                    <Workflow size={32} className="text-white" />
                  </motion.div>
                  <div>
                    <h2 className={`text-2xl md:text-3xl font-bold font-orbitron ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {service.n8nIntegration.headline}
                    </h2>
                  </div>
                </div>
                
                <p className={`text-lg mb-8 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {service.n8nIntegration.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {service.n8nIntegration.automations.map((automation, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-start gap-3 p-4 rounded-xl ${
                        theme === 'dark'
                          ? 'bg-gray-800/50 border border-gray-700/50'
                          : 'bg-gray-50 border border-gray-200'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-br ${service.gradient}`}>
                        <Zap size={14} className="text-white" />
                      </div>
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {automation}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-20 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-[#0a0a0f] via-gray-900/30 to-[#0a0a0f]'
          : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
      }`}>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold font-orbitron mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Our Process
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                A proven methodology that delivers exceptional results
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {service.process.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <motion.div
                  className={`relative flex gap-6 mb-8 last:mb-0 ${index !== service.process.length - 1 ? 'pb-8' : ''}`}
                  whileHover={{ x: 10 }}
                >
                  {index !== service.process.length - 1 && (
                    <div
                      className={`absolute left-7 top-16 w-0.5 h-full ${
                        theme === 'dark' ? 'bg-gradient-to-b from-cyan-500/50 to-transparent' : 'bg-gradient-to-b from-cyan-500/30 to-transparent'
                      }`}
                    />
                  )}
                  
                  <motion.div
                    className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white bg-gradient-to-br ${service.gradient}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.step}
                  </motion.div>
                  
                  <div className={`flex-grow p-6 rounded-xl ${
                    theme === 'dark'
                      ? 'bg-gray-900/50 border border-gray-700/50'
                      : 'bg-white shadow-lg border border-gray-100'
                  }`}>
                    <h3 className={`text-xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold font-orbitron mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Why Choose Us
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Benefits that set us apart from the competition
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className={`flex items-center gap-4 p-5 rounded-xl ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-gray-900/80 to-gray-800/50 border border-gray-700/50'
                      : 'bg-white shadow-md border border-gray-100'
                  }`}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${service.gradient}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check size={20} className="text-white" />
                  </motion.div>
                  <span className={`font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {benefit}
                  </span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <motion.div
              className={`relative rounded-3xl overflow-hidden ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700/50'
                  : 'bg-gradient-to-r from-gray-900 to-gray-800'
              }`}
              whileHover={{ boxShadow: `0 30px 60px ${service.accentColor}30` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-10`} />
              
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      backgroundColor: service.accentColor,
                      opacity: 0.3,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 p-12 md:p-16 text-center">
                <motion.div
                  className={`inline-flex w-20 h-20 rounded-2xl mb-8 items-center justify-center bg-gradient-to-br ${service.gradient}`}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Rocket size={40} className="text-white" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                  Transform your business with our {service.title.toLowerCase()} expertise. Let's discuss how we can help you achieve your goals.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <motion.a
                    href="/contact"
                    className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r ${service.gradient} shadow-lg`}
                    whileHover={{ scale: 1.05, boxShadow: `0 20px 40px ${service.accentColor}50` }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone size={20} />
                    <span>Contact Us</span>
                  </motion.a>
                  <motion.a
                    href="mailto:hello@nanoflows.com"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={20} />
                    <span>Email Us</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Previous/Next Navigation */}
      <section className={`py-12 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            {prevService ? (
              <Link to={`/services/${prevService.id}`}>
                <motion.div
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    theme === 'dark'
                      ? 'bg-gray-900/50 border border-gray-700/50 hover:bg-gray-800/50'
                      : 'bg-white shadow-md border border-gray-100 hover:shadow-lg'
                  }`}
                  whileHover={{ x: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${prevService.gradient}`}>
                    <ChevronLeft size={20} className="text-white" />
                  </div>
                  <div className="text-left">
                    <p className={`text-xs uppercase tracking-wide ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      Previous
                    </p>
                    <p className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {prevService.title}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ) : (
              <div />
            )}

            {nextService ? (
              <Link to={`/services/${nextService.id}`}>
                <motion.div
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    theme === 'dark'
                      ? 'bg-gray-900/50 border border-gray-700/50 hover:bg-gray-800/50'
                      : 'bg-white shadow-md border border-gray-100 hover:shadow-lg'
                  }`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-right">
                    <p className={`text-xs uppercase tracking-wide ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      Next
                    </p>
                    <p className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {nextService.title}
                    </p>
                  </div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${nextService.gradient}`}>
                    <ChevronRight size={20} className="text-white" />
                  </div>
                </motion.div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;

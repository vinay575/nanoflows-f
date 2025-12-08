import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
  ArrowRight,
  Check,
  ChevronDown,
} from 'lucide-react';
import AIChat from '../components/AIChat';
import { motion } from 'framer-motion';

interface ServiceData {
  id: string;
  title: string;
  icon: any;
  description: string;
  features: string[];
  category: string;
  gradient: string;
}

const services: ServiceData[] = [
  {
    id: 'custom-development',
    title: 'Custom Development',
    icon: Code,
    description: 'Launch modern web, mobile, and system applications tailored for speed, security, and seamless integration.',
    features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integrations'],
    category: 'development',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    icon: Cloud,
    description: 'Transform your infrastructure with automated cloud adoption, advanced DevOps, and microservices built for rapid scaling.',
    features: ['Cloud Migration', 'DevOps Automation', 'Serverless Systems', 'Microservices Design'],
    category: 'infrastructure',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization',
    icon: Zap,
    description: 'Maximize efficiency and uptime through code tuning, caching, load balancing, and global CDN deployment.',
    features: ['Load Balancing', 'Caching Strategies', 'Code Optimization', 'CDN Configuration'],
    category: 'infrastructure',
    gradient: 'from-yellow-500 to-orange-600',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: Shield,
    description: 'Protect digital assets with proactive threat detection, encryption, compliance audits, and 24/7 system monitoring.',
    features: ['Threat Detection', 'Encryption', 'Compliance Audits', 'Security Monitoring'],
    category: 'security',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    icon: Database,
    description: 'Visualize and interpret your data with tailored analytics platforms and predictive dashboards.',
    features: ['Big Data Processing', 'Data Visualization', 'BI Dashboards', 'Predictive Analytics'],
    category: 'ai',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Deploy advanced AI solutions for automation, predictive analytics, and natural language systems.',
    features: ['Neural Networks', 'Deep Learning', 'Predictive Models', 'NLP Solutions'],
    category: 'ai',
    gradient: 'from-cyan-400 to-teal-600',
  },
  {
    id: 'social-media-campaigns',
    title: 'Social Media & Campaigns',
    icon: Megaphone,
    description: 'Accelerate brand growth with high-impact social campaigns, paid ads, and creative content design.',
    features: ['Social Media Marketing', 'Paid Campaigns', 'Content Creation', 'Brand Management'],
    category: 'marketing',
    gradient: 'from-red-500 to-pink-600',
  },
  {
    id: 'youtube-promotions',
    title: 'YouTube Promotions',
    icon: Youtube,
    description: "Grow your audience with full YouTube channel setup, video SEO, strategic campaigns, and advanced analytics.",
    features: ['Channel Setup & Branding', 'Video SEO Optimization', 'Audience Targeting', 'Performance Tracking'],
    category: 'marketing',
    gradient: 'from-red-600 to-rose-700',
  },
  {
    id: 'digital-seo-marketing',
    title: 'Digital & SEO Marketing',
    icon: TrendingUp,
    description: 'Boost visibility and search rankings through expert SEO, keyword research, and technical optimization.',
    features: ['On-Page SEO', 'Keyword Research', 'Local SEO', 'Technical Optimization'],
    category: 'marketing',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'ai-consulting-training',
    title: 'AI Consulting & Training',
    icon: BookOpen,
    description: 'Plan, train, and launch AI adoption with tailored consulting and workforce upskilling.',
    features: ['AI Readiness Assessment', 'AI Integration Strategy', 'Corporate AI Training', 'Process Automation Guidance'],
    category: 'ai',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 'custom-ai-tools-automation',
    title: 'Custom AI Tools & Automation',
    icon: Wrench,
    description: 'Unlock efficiency with bespoke AI products, workflow automation, integrated APIs, and advanced bots.',
    features: ['Custom AI Tools', 'Workflow Automation', 'API Integrations', 'Bot Development'],
    category: 'ai',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'n8n-workflow-automation',
    title: 'n8n Workflow Automation',
    icon: Workflow,
    description: 'Transform business operations with cutting-edge n8n automation solutions. Connect 400+ apps without code.',
    features: ['n8n Setup & Configuration', 'Custom Workflow Design', 'Advanced Integrations', 'Self-Hosted Solutions'],
    category: 'development',
    gradient: 'from-emerald-500 to-teal-600',
  },
];


const orbitingIcons = [
  { icon: Code, delay: 0, color: '#06B6D4' },
  { icon: Cloud, delay: 0.5, color: '#8B5CF6' },
  { icon: Shield, delay: 1, color: '#10B981' },
  { icon: Brain, delay: 1.5, color: '#14B8A6' },
  { icon: TrendingUp, delay: 2, color: '#3B82F6' },
  { icon: Megaphone, delay: 2.5, color: '#EF4444' },
  { icon: Workflow, delay: 3, color: '#10B981' },
  { icon: Zap, delay: 3.5, color: '#F59E0B' },
];

const FloatingParticle = ({ delay, size, left, duration, theme }: { delay: number; size: number; left: string; duration: number; theme: string }) => (
  <motion.div
    className={`absolute rounded-full ${theme === 'dark' ? 'bg-green-400/30' : 'bg-red-500/30'}`}
    style={{ width: size * 2, height: size * 2, left }}
    initial={{ y: '100vh', opacity: 0 }}
    animate={{ 
      y: '-100vh', 
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  />
);

const OrbitingIcon = ({ icon: Icon, index, total, color, isMobile }: { icon: any; index: number; total: number; color: string; isMobile: boolean }) => {
  const angle = (index / total) * 360;
  const radius = isMobile ? 140 : 220;
  const boxSize = isMobile ? 60 : 88;
  const iconSize = isMobile ? 30 : 44;
  
  return (
    <motion.div
      className="absolute"
      style={{
        width: boxSize,
        height: boxSize,
      }}
      animate={{
        rotate: [angle, angle + 360],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <motion.div
        className="absolute rounded-xl shadow-lg flex items-center justify-center backdrop-blur-sm"
        style={{
          width: boxSize,
          height: boxSize,
          left: radius,
          top: -boxSize / 2,
          backgroundColor: `${color}20`,
          border: `1px solid ${color}40`,
        }}
        animate={{
          rotate: [-angle, -angle - 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          },
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        whileHover={{ scale: 1.3 }}
      >
        <Icon size={iconSize} style={{ color }} />
      </motion.div>
    </motion.div>
  );
};

const ServiceCard = ({ service, index, theme }: { service: ServiceData; index: number; theme: string }) => {
  const Icon = service.icon;
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-cyan-500/20'
          : 'bg-white shadow-xl border border-gray-200'
      }`}
      onClick={() => navigate(`/services/${service.id}`)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      <div className="relative p-6 flex-1 flex flex-col">
        <motion.div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${service.gradient}`}
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon size={32} className="text-white" />
        </motion.div>

        <h3 className={`text-xl font-bold mb-3 font-orbitron ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {service.title}
        </h3>

        <p className={`text-sm mb-4 leading-relaxed min-h-[72px] ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {service.description}
        </p>

        <div className="space-y-2 mb-5">
          {service.features.slice(0, 3).map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
            >
              <div className={`w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-br ${service.gradient}`}>
                <Check size={12} className="text-white" />
              </div>
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {feature}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={`flex items-center gap-2 text-sm font-semibold ${
            theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
          }`}
          whileHover={{ x: 5 }}
        >
          <span>Learn More</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </div>

      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.div>
  );
};

const ServicesPage = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const particles = Array.from({ length: 30 }, () => ({
    delay: Math.random() * 10,
    size: Math.random() * 4 + 2,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 15,
  }));

  return (
    <div className={`relative min-h-screen ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
      <Header />

      <motion.section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden"
      >
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-[#0a0a1a] via-[#0d1525] to-[#0a0a0f]'
            : 'bg-gradient-to-b from-gray-100 via-gray-50 to-white'
        }`} />

        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} theme={theme} />
        ))}

        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${theme === 'dark' ? 'bg-green-400' : 'bg-red-500'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                opacity: theme === 'dark' ? Math.random() * 0.5 + 0.2 : Math.random() * 0.4 + 0.2,
              }}
              animate={{
                opacity: theme === 'dark' ? [0.2, 0.8, 0.2] : [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

      <div className="relative z-10 container mx-auto px-6 pt-20 lg:pt-20 pb-20">
          <motion.div
          className="text-center mb-24 mt-4 lg:mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-5xl md:text-7xl font-bold font-orbitron mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="inline">Our </span>
              <motion.span
                className={`inline ${theme === 'dark' ? 'text-electric-green' : 'text-accent-red'}`}
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Services
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`text-base sm:text-lg lg:text-xl font-exo max-w-3xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Explore the services that deliver these innovative solutions for your business.
            </motion.p>
          </motion.div>

          <div className={`relative flex justify-center items-center py-8 sm:py-16 ${isMobile ? 'min-h-[360px]' : 'min-h-[400px]'}`}>
            <div className={`relative flex items-center justify-center ${isMobile ? 'w-[320px] h-[320px]' : 'w-[400px] h-[400px]'}`}>
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
              >
                <motion.img 
                  src="/Nano-flows-icon.png" 
                  alt="NanoFlows" 
                  className={`h-auto ${isMobile ? 'w-40 -mt-20' : 'w-56 -mt-28'}`}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    filter: ['drop-shadow(0 0 25px rgba(0,217,255,0.6))', 'drop-shadow(0 0 50px rgba(0,217,255,0.9))', 'drop-shadow(0 0 25px rgba(0,217,255,0.6))']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${isMobile ? '-mt-6' : '-mt-12'}`}>
                {orbitingIcons.map((item, index) => (
                  <OrbitingIcon
                    key={index}
                    icon={item.icon}
                    index={index}
                    total={orbitingIcons.length}
                    color={item.color}
                    isMobile={isMobile}
                  />
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.button
              onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium ${
                theme === 'dark'
                  ? 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'
                  : 'bg-cyan-100 text-cyan-600 hover:bg-cyan-200'
              } transition-colors`}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span>Explore Services</span>
              <ChevronDown size={20} />
            </motion.button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 200"
            className="w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={theme === 'dark' ? '#0d9488' : '#14b8a6'} />
                <stop offset="50%" stopColor={theme === 'dark' ? '#0891b2' : '#06b6d4'} />
                <stop offset="100%" stopColor={theme === 'dark' ? '#0d9488' : '#14b8a6'} />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,100 C360,180 720,20 1080,100 C1260,140 1380,120 1440,100 L1440,200 L0,200 Z"
              fill="url(#curveGradient)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path
              d="M0,120 C360,200 720,40 1080,120 C1260,160 1380,140 1440,120 L1440,200 L0,200 Z"
              fill={theme === 'dark' ? '#0a0a0f' : '#f9fafb'}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.7 }}
            />
          </svg>
        </div>
      </motion.section>

      <section id="services-grid" className={`py-20 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                theme={theme}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-b from-[#0a0a0f] to-[#0d1525]' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        <div className="container mx-auto px-6">
          <motion.div
            className={`relative rounded-3xl overflow-hidden ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-cyan-900/30 to-teal-900/30 border border-cyan-500/20'
                : 'bg-gradient-to-r from-cyan-50 to-teal-50 border border-cyan-200'
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 overflow-hidden">
              {theme === 'dark' && [...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 p-10 md:p-16 text-center">
              <motion.h2
                className={`text-3xl md:text-4xl font-bold font-orbitron mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Business?
              </motion.h2>
              <motion.p
                className={`text-lg mb-8 max-w-2xl mx-auto ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Let&apos;s discuss how our services can help you achieve your goals. Get a free consultation today.
              </motion.p>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg shadow-cyan-500/25"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,217,255,0.3)' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <AIChat />
    </div>
  );
};

export default ServicesPage;

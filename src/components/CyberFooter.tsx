import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Github, Zap } from 'lucide-react';
import CyberButton from './CyberButton';

const CyberFooter: React.FC = () => {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-[#0a0a18] -z-10"></div>
      
      {/* Tech grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none -z-10">
        <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent top-0"></div>
        <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent bottom-0"></div>
        <div className="absolute w-full h-full" style={{ 
          backgroundImage: `radial-gradient(circle, rgba(0,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="flex items-center gap-3">
                <Zap className="text-cyan-400 h-8 w-8" />
                <span className="text-3xl font-bold tracking-wider cyber-heading">#BOLT_<span className="text-pink-500">NEW</span></span>
              </div>
            </motion.div>
            <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
              Powered by Bolt, the next-gen development platform for building, shipping, and scaling apps.
            </p>
          </div>
          
          {/* Visit Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <p className="text-gray-300 mb-4 text-sm font-mono uppercase tracking-wider">Build your own digital reality</p>
            <CyberButton 
              text="Launch System" 
              href="https://bolt.new" 
              icon={<ExternalLink size={16} />}
              size="lg"
              color="magenta"
            />
          </motion.div>
        </div>
        
        {/* Lower Footer */}
        <div className="mt-12 pt-6 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Bolt. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <motion.a 
                href="https://github.com/boltinc/bolt" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Github size={18} />
              </motion.a>
              <motion.a 
                href="https://bolt.new/docs" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Code size={18} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CyberFooter; 
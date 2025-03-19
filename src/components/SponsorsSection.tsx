import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Database, Server, Shield, CircuitBoard } from 'lucide-react';
import CyberIcon from './CyberIcon';

type SponsorColor = 'cyan' | 'magenta' | 'yellow';

interface Sponsor {
  name: string;
  icon: React.ReactNode;
  tier: string;
  color: SponsorColor;
}

// Placeholder sponsor logos with tech-themed icons
const sponsors: Sponsor[] = [
  {
    name: "NeuraTech",
    icon: <CircuitBoard size={24} />,
    tier: "platinum",
    color: "cyan"
  },
  {
    name: "ByteForge",
    icon: <Database size={24} />,
    tier: "gold",
    color: "yellow"
  },
  {
    name: "QuantumNet",
    icon: <Globe size={24} />,
    tier: "platinum",
    color: "magenta"
  },
  {
    name: "SynapseAI",
    icon: <Zap size={24} />,
    tier: "gold",
    color: "cyan"
  },
  {
    name: "CyberLock",
    icon: <Shield size={24} />,
    tier: "silver",
    color: "magenta"
  },
  {
    name: "CoreSystems",
    icon: <Server size={24} />,
    tier: "silver",
    color: "cyan"
  }
];

const SponsorsSection: React.FC = () => {
  return (
    <section className="cyber-section relative py-24">
      <div className="cyber-scanline animate-scanline"></div>
      
      {/* Decorative grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute h-px w-full bg-cyan-400"
            style={{ top: `${i * 5}%` }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-px h-full bg-cyan-400"
            style={{ left: `${i * 5}%` }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="cyber-heading text-4xl mt-4 mb-2">NETWORK AFFILIATES</h2>
          <div className="neon-line w-40 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Elite tech corporations powering the digital revolution
          </p>
        </motion.div>
        
        {/* Platinum Tier */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500">PLATINUM TIER</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sponsors
              .filter(sponsor => sponsor.tier === 'platinum')
              .map((sponsor, index) => (
                <SponsorCard key={index} sponsor={sponsor} featured />
              ))}
          </div>
        </div>
        
        {/* Gold and Silver Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sponsors
            .filter(sponsor => sponsor.tier !== 'platinum')
            .map((sponsor, index) => (
              <SponsorCard 
                key={index} 
                sponsor={sponsor} 
                featured={sponsor.tier === 'gold'}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

interface SponsorCardProps {
  sponsor: Sponsor;
  featured?: boolean;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor, featured = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative p-0.5 overflow-hidden group ${featured ? 'col-span-1' : 'col-span-1'}`}
    >
      {/* Animated border */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500 animate-border-flow opacity-75"></div>
      
      <div className="bg-gray-900/90 backdrop-blur-sm p-6 relative z-10 h-full flex flex-col items-center">
        <div className="mb-4">
          <CyberIcon 
            icon={sponsor.icon} 
            color={sponsor.color} 
            size={featured ? "lg" : "md"}
          />
        </div>
        
        <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold mb-2 cyber-heading tracking-wider`}>
          {sponsor.name}
        </h3>
        
        <p className={`text-xs uppercase tracking-widest text-${sponsor.color === 'cyan' ? 'cyan' : sponsor.color === 'magenta' ? 'pink' : 'amber'}-400 mb-4`}>
          {sponsor.tier} partner
        </p>
        
        {/* Digital circuit lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-cyan-400"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-pink-400"></div>
          <div className="absolute left-1/4 top-0 h-full w-px bg-cyan-400"></div>
          <div className="absolute left-3/4 top-0 h-full w-px bg-pink-400"></div>
          
          {/* Circuit nodes */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"></div>
          <div className="absolute top-1/4 left-3/4 w-2 h-2 bg-pink-400 rounded-full"></div>
          <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-pink-400 rounded-full"></div>
          <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default SponsorsSection; 
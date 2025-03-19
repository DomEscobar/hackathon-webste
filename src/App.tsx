import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, Users, Code, Cpu, ExternalLink, Terminal, Database, GitBranch, FileCode, Braces } from 'lucide-react';
import RetroGrid from './components/RetroGrid';
import GlitchText from './components/GlitchText';
import StarryBackground from './components/StarryBackground';
import CityBackground from './components/CityBackground';
import Moon from './components/Moon';
import CyberDivider from './components/CyberDivider';
import CyberIcon from './components/CyberIcon';
import SponsorsSection from './components/SponsorsSection';
import CyberFooter from './components/CyberFooter';
import MatrixBackground from './components/MatrixBackground';
import CodeSnippet from './components/CodeSnippet';
import FloatingIcons from './components/FloatingIcons';

// Sample code snippets for display
const hackathonCode = `function createHackathon() {
  const event = {
    name: "VIBECode Hackathon",
    participants: [],
    prizes: ["$500k", "$300k", "$200k"],
    status: "upcoming"
  };
  
  return {
    ...event,
    registerTeam: (team) => {
      event.participants.push(team);
      console.log(\`Team \${team.name} registered!\`);
    },
    start: () => {
      event.status = "inProgress";
      // Neural links activated
    }
  };
}

// Initialize global event
const vibeCode = createHackathon();
vibeCode.start();`;

const aiCode = `class NeuralNetwork {
  constructor(layers = []) {
    this.layers = layers;
    this.weights = this.initializeWeights();
    this.biases = this.initializeBiases();
  }
  
  // Train the network with data
  train(data, iterations = 1000) {
    console.log("Training neural network...");
    // Matrix operations & backpropagation
    return this;
  }
  
  predict(input) {
    // Forward propagation
    return output;
  }
}

// Create AI judge system
const judgeAI = new NeuralNetwork([64, 32, 16, 8]);
judgeAI.train(previousWinners);`;

function App() {
  return (
    <div className="min-h-screen font-cyber relative overflow-hidden">
      {/* Background Components */}
      <div className="fixed inset-0 w-full h-full z-[-50]">
        <StarryBackground />
      </div>
      <div className="fixed inset-0 w-full h-full z-[-45] pointer-events-none">
        <MatrixBackground />
      </div>
      <div className="fixed inset-0 w-full h-full z-[-40]">
        <Moon />
      </div>
      <CityBackground />

      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent pointer-events-none" />

        {/* Simplified floating programming icons - reduced and more subtle */}
        <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
          <FloatingIcons />
        </div>

        {/* Enhanced central content for better focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 mb-24 relative"
        >
          <div className="absolute inset-0 -z-10 bg-black/40 blur-xl rounded-3xl transform scale-110"></div>
          <GlitchText
            text="The World's Largest Hackathon"
            className="text-6xl md:text-8xl font-bold mb-4"
          />
          <div className="neon-line w-48 mx-auto mb-8" />

          {/* Completely redesigned cyberpunk button */}
          <div className="relative inline-flex my-4">
            {/* Hex pattern background */}
            <div className="absolute inset-0 -m-3 bg-black rounded opacity-50"
              style={{ backgroundImage: 'radial-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '8px 8px' }}>
            </div>

            {/* Button frame with angled corners */}
            <a className="relative group cursor-pointer" target='_blank' href='https://bolt.new'>
              {/* Corner clips */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-pink-400"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-pink-400"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400"></div>

              {/* Main button container with diagonal cuts */}
              <div className="relative bg-gray-900 p-px">
                <div className="absolute top-0 right-0 w-3 h-3 bg-black transform translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                <div className="absolute top-0 left-0 w-3 h-3 bg-black transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-black transform translate-x-1/2 translate-y-1/2 rotate-45"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 bg-black transform -translate-x-1/2 translate-y-1/2 rotate-45"></div>

                {/* Button background with scan line effect */}
                <div className="relative px-8 py-4 bg-gradient-to-br from-black to-gray-900 overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(transparent_0%,rgba(0,255,255,0.2)_50%,transparent_100%)] animate-[scanline_4s_linear_infinite]"></div>

                  {/* Glitch effect on hover */}
                  <motion.div
                    whileHover={{
                      x: [0, -2, 3, -1, 0],
                      transition: { repeat: Infinity, duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center relative text-white"
                  >
                    {/* Digital interface and tech elements */}
                    <div className="absolute left-0 top-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute right-0 bottom-2 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-75"></div>

                    {/* Button text */}
                    <button className="flex flex-col items-center cursor-pointer">
                      <span className="text-xs tracking-widest text-cyan-300 font-mono cursor-pointer">SYS.ACCESS</span>
                      <span className="text-xl font-extrabold tracking-wider text-white font-mono relative cursor-pointer">
                        <span className="group-hover:opacity-0 transition-opacity">REGISTER</span>
                        <span className="absolute inset-0 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">ACCESS</span>
                      </span>
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent mt-1"></div>
                      <span className="text-[10px] text-gray-400 font-mono tracking-widest">ID:VBC-2077</span>
                    </button>

                  </motion.div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 -z-10 blur-md bg-cyan-500 opacity-20"></div>
                <div className="absolute inset-0 -z-10 blur-md bg-pink-500 opacity-20"></div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Simplified terminal prompt */}
        <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2 z-10 flex items-center opacity-60">
          <div className="bg-black/40 backdrop-blur-sm text-green-400 px-3 py-1 rounded-md font-mono text-xs border border-green-500/20">
            <span className="text-pink-500">$</span> <span>hack --mode=vibecode</span>
          </div>
        </div>

        {/* Synthwave Grid - kept but made more subtle */}
        <div className="absolute bottom-0 left-0 w-full h-40 opacity-70">
          <RetroGrid />
        </div>

        {/* Animated character - smaller and more subtle */}
        <motion.img
          src="/bolti.gif"
          alt="Animated character"
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 h-28 w-auto z-10 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Cyber Divider */}
      <CyberDivider />

      {/* Info Section - Cyberpunk Style */}
      <section className="cyber-section relative">
        <div className="cyber-scanline animate-scanline"></div>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Terminal strokeWidth={1.5} className="w-8 h-8 text-cyan-400 mr-2" />
              <h2 className="cyber-heading text-4xl">EVENT DETAILS</h2>
            </div>
            <div className="neon-line w-32 mx-auto"></div>

            {/* Command line style text */}
            <div className="mt-4 font-mono text-sm text-green-400 opacity-70">
              <span className="text-pink-500">$</span> cat event_details.json
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="cyber-box animate-border-flow"
            >
              <div className="cyber-box-inner">
                <div className="flex items-start gap-6">
                  <CyberIcon icon={<MapPin strokeWidth={1.5} />} color="cyan" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4 cyber-heading">LOCATION</h3>
                    <p className="text-gray-300 mb-4">
                      Virtual Event - Join from anywhere in the world
                    </p>
                    <div className="flex items-center gap-2 text-cyan-400 text-sm">
                      <Code size={16} />
                      <span>Global access via secure neural link</span>
                    </div>

                    {/* Terminal-style location info */}
                    <div className="mt-4 p-2 bg-black/40 font-mono text-xs rounded border border-cyan-900/50">
                      <div className="text-gray-400">$ ping vibecode-server</div>
                      <div className="text-green-400">PING vibecode-server: 56 data bytes</div>
                      <div className="text-green-400">64 bytes from 192.168.1.1: icmp_seq=0 ttl=64 time=0.5 ms</div>
                      <div className="text-cyan-400">Connection stable | Latency: 0.5ms</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Date Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="cyber-box animate-border-flow"
            >
              <div className="cyber-box-inner">
                <div className="flex items-start gap-6">
                  <CyberIcon icon={<Calendar strokeWidth={1.5} />} color="magenta" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4 cyber-heading">TIMELINE</h3>
                    <p className="text-gray-300 mb-4">
                      Coming Soon - Stay tuned for the announcement!
                    </p>
                    <div className="flex items-center gap-2 text-pink-400 text-sm">
                      <Cpu size={16} />
                      <span>Chronometric encryption in progress</span>
                    </div>

                    {/* Binary countdown timer */}
                    <div className="mt-4 p-2 bg-black/40 font-mono text-xs rounded border border-pink-900/50">
                      <div className="text-gray-400">$ timedecode --format=binary</div>
                      <div className="flex justify-between text-pink-400">
                        <span>01000100</span>
                        <span>00101101</span>
                        <span>00110010</span>
                        <span>00111000</span>
                      </div>
                      <div className="text-pink-400 text-center">Access window: [REDACTED]</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cyber Divider - Flipped */}
      <CyberDivider flip />

      {/* Prizes Section - Cyberpunk Style */}
      <section className="cyber-angled-bg relative py-24">
        <div className="cyber-scanline animate-scanline"></div>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <CyberIcon icon={<Trophy strokeWidth={1.5} />} color="yellow" size="lg" />
            <h2 className="cyber-heading text-4xl mt-4 mb-2">DIGITAL REWARDS</h2>
            <div className="neon-line w-40 mx-auto mb-6"></div>
            <p className="text-2xl text-cyan-400 font-bold mb-2">
              Over $1 Million in Prizes!
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Elevate your neural network and claim your share of the digital fortune
            </p>

            {/* JSON style prize data */}
            <motion.div
              className="w-fit mx-auto mt-8 mb-4 text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="font-mono text-xs bg-black/40 p-3 rounded-md border border-amber-600/20 text-gray-300">
                <span className="text-pink-400">const</span> <span className="text-cyan-400">prizePool</span> = {'{'}
                <br />
                &nbsp;&nbsp;<span className="text-green-400">"total"</span>: <span className="text-amber-400">1000000</span>,
                <br />
                &nbsp;&nbsp;<span className="text-green-400">"currency"</span>: <span className="text-green-400">"USD"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-green-400">"distribution"</span>: {'['}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className="text-green-400">"place"</span>: <span className="text-green-400">"first"</span>, <span className="text-green-400">"amount"</span>: <span className="text-amber-400">500000</span> {'}'},
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className="text-green-400">"place"</span>: <span className="text-green-400">"second"</span>, <span className="text-green-400">"amount"</span>: <span className="text-amber-400">300000</span> {'}'},
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className="text-green-400">"place"</span>: <span className="text-green-400">"third"</span>, <span className="text-green-400">"amount"</span>: <span className="text-amber-400">200000</span> {'}'}
                <br />
                &nbsp;&nbsp;{']'}
                <br />
                {'}'};
              </div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { place: '1ST PLACE', prize: '$500,000', color: 'bg-gradient-to-br from-yellow-400 to-amber-600', icon: <Trophy size={20} /> },
              { place: '2ND PLACE', prize: '$300,000', color: 'bg-gradient-to-br from-gray-300 to-gray-500', icon: <Database size={20} /> },
              { place: '3RD PLACE', prize: '$200,000', color: 'bg-gradient-to-br from-amber-600 to-amber-800', icon: <GitBranch size={20} /> },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="cyber-card relative overflow-hidden group"
              >
                <div className="p-8 flex flex-col items-center">
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 opacity-60"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400 opacity-60"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400 opacity-60"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 opacity-60"></div>

                  {/* Content */}
                  <div className={`w-16 h-16 ${item.color} rounded-full mb-6 flex items-center justify-center text-black font-bold text-xl`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 cyber-heading tracking-widest">{item.place}</h3>
                  <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
                    {item.prize}
                  </p>

                  {/* Binary/hex decoration */}
                  <div className="mt-4 text-xs font-mono text-cyan-400/40">
                    {index === 0 && '0x1F947 0x1F3C6'}
                    {index === 1 && '0x1F948 0x1F396'}
                    {index === 2 && '0x1F949 0x1F3C5'}
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cyber Divider */}
      <CyberDivider />

      {/* Judges Section - Cyberpunk Style */}
      <section className="cyber-section relative py-24">
        <div className="cyber-scanline animate-scanline"></div>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <CyberIcon icon={<Users strokeWidth={1.5} />} color="cyan" size="lg" />
            <h2 className="cyber-heading text-4xl mt-4 mb-2">SYSTEM MODERATORS</h2>
            <div className="neon-line w-40 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologic experts who validate quantum efficiency and neural creativity
            </p>

            {/* Code comment style description */}
            <motion.div
              className="mt-6 mb-8 font-mono text-sm text-gray-500 max-w-lg mx-auto text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div>/**</div>
              <div> * @class JudgingSystem</div>
              <div> * @description Advanced neural network evaluating submissions</div>
              <div> * @authors Sarah Chen, Michael Rodriguez, Emily Zhang</div>
              <div> * @version 3.1.4</div>
              <div> * @access Restricted</div>
              <div> */</div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: 'SARAH CHEN',
                role: 'AI Research Director',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80',
                color: 'cyan',
                specialty: 'Neural Networks',
                icon: <Braces />
              },
              {
                name: 'MICHAEL RODRIGUEZ',
                role: 'Tech Entrepreneur',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80',
                color: 'magenta',
                specialty: 'Blockchain Systems',
                icon: <Cpu />
              },
              {
                name: 'EMILY ZHANG',
                role: 'Innovation Lead',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&q=80',
                color: 'cyan',
                specialty: 'Quantum Algorithms',
                icon: <FileCode />
              },
            ].map((judge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative p-0.5 overflow-hidden group"
              >
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500 animate-border-flow opacity-75"></div>

                <div className="bg-gray-900/90 backdrop-blur-sm p-8 relative z-10 h-full flex flex-col items-center">
                  {/* Hexagonal image frame */}
                  <div className="relative w-40 h-40 mb-6">
                    <svg viewBox="0 0 100 100" className="w-full h-full absolute">
                      <defs>
                        <clipPath id={`hex-mask-${index}`}>
                          <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" />
                        </clipPath>
                      </defs>
                    </svg>

                    <div className="w-full h-full relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500 animate-border-flow opacity-75"
                        style={{ clipPath: `polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)` }}>
                      </div>
                      <img
                        src={judge.image}
                        alt={judge.name}
                        className="w-[96%] h-[96%] absolute top-[2%] left-[2%] object-cover"
                        style={{ clipPath: `polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)` }}
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 cyber-heading tracking-wider">{judge.name}</h3>
                  <p className={`text-${judge.color === 'cyan' ? 'cyan' : 'pink'}-400 mb-2`}>{judge.role}</p>

                  {/* Specialty badge */}
                  <div className="flex items-center gap-2 px-3 py-1 bg-gray-800/50 rounded-full mb-4 text-xs border border-gray-700/50">
                    <span>{judge.icon}</span>
                    <span className="text-gray-300">{judge.specialty}</span>
                  </div>

                  {/* Command line access */}
                  <div className="w-full mb-4 font-mono text-[9px] bg-black/30 p-1.5 rounded border border-gray-800">
                    <span className="text-green-500">$</span> access --auth=vibecode --user={judge.name.toLowerCase().replace(' ', '_')}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-auto flex items-center gap-2 text-${judge.color === 'cyan' ? 'cyan' : 'pink'}-400 text-sm border border-${judge.color === 'cyan' ? 'cyan' : 'pink'}-500/50 px-4 py-2 rounded-sm group-hover:bg-${judge.color === 'cyan' ? 'cyan' : 'pink'}-500/10 transition-colors`}
                  >
                    <ExternalLink size={14} />
                    <span>View Profile</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cyber Divider */}
      <CyberDivider flip />

      {/* Sponsors Section */}
      <SponsorsSection />

      {/* Cyber Divider - Final */}
      <CyberDivider />

      {/* Footer */}
      <CyberFooter />

      {/* Add CSS for the typing animation */}
      <style>
        {`
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
          
          .typing-animation {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            animation: typing 2s steps(40, end);
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%) }
            100% { transform: translateX(100%) }
          }
          
          @keyframes scanline {
            0% { transform: translateY(-100%) }
            100% { transform: translateY(100%) }
          }
        `}
      </style>
    </div>
  );
}

export default App;
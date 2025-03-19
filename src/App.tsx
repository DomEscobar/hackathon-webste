import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, Users } from 'lucide-react';
import RetroGrid from './components/RetroGrid';
import GlitchText from './components/GlitchText';

function App() {
  return (
    <div className="min-h-screen font-cyber relative overflow-hidden">
      <RetroGrid />
      
      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <GlitchText
            text="VibeCode"
            className="text-6xl md:text-8xl font-bold mb-4"
          />
          <h2 className="text-xl md:text-2xl text-cyan-400 mb-8">
            The World's Largest Hackathon
          </h2>
          <div className="neon-line w-48 mx-auto mb-8" />
          <p className="text-2xl md:text-3xl text-pink-500 font-bold tracking-wider">
            #VIBECODE
          </p>
        </motion.div>
      </section>

      {/* Info Section */}
      <section className="relative bg-black/80 py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <MapPin className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold">Location</h3>
            </div>
            <p className="text-lg text-gray-300">
              Virtual Event - Join from anywhere in the world
            </p>
          </motion.div>

          {/* Date */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <Calendar className="w-8 h-8 text-pink-500" />
              <h3 className="text-2xl font-bold">Date</h3>
            </div>
            <p className="text-lg text-gray-300">
              Coming Soon - Stay tuned for the announcement!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="relative py-20 px-4 bg-black/90">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Trophy className="w-10 h-10 text-yellow-400" />
              <h2 className="text-4xl font-bold">Prizes</h2>
            </div>
            <div className="neon-line w-32 mx-auto mb-12" />
            <p className="text-2xl text-cyan-400 mb-8">
              Over $1 Million in Prizes!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { place: '1st Place', prize: '$500,000' },
                { place: '2nd Place', prize: '$300,000' },
                { place: '3rd Place', prize: '$200,000' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold mb-4">{item.place}</h3>
                  <p className="text-3xl font-bold text-pink-500">{item.prize}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Judges Section */}
      <section className="relative py-20 px-4 bg-black/80">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Users className="w-10 h-10 text-cyan-400" />
              <h2 className="text-4xl font-bold">Judges</h2>
            </div>
            <div className="neon-line w-32 mx-auto mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah Chen',
                  role: 'AI Research Director',
                  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80',
                },
                {
                  name: 'Michael Rodriguez',
                  role: 'Tech Entrepreneur',
                  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80',
                },
                {
                  name: 'Emily Zhang',
                  role: 'Innovation Lead',
                  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&q=80',
                },
              ].map((judge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg"
                >
                  <img
                    src={judge.image}
                    alt={judge.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">{judge.name}</h3>
                  <p className="text-cyan-400">{judge.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import ChatBox from '../layout/Chatbox';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-dark-background to-purple-900/20 opacity-80" />
      <div className="container relative mx-auto px-4 pt-32 pb-24 md:pt-40 md:pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-dark-foreground mb-6 leading-tight">
            Level Up Your 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {' '}Financial Future
            </span>
          </h1>
          <p className="text-xl text-dark-foreground/80 mb-8 max-w-2xl mx-auto">
            Master your money through interactive learning, real-world simulations, 
            and engaging challenges designed for young professionals.
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/learning">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Courses
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <ChatBox/>
      </div>
    </div>
  );
}
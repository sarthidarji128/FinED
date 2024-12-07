import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Mail, Lock } from 'lucide-react';
import { auth } from "../config/firebase.ts";
import { createUserWithEmailAndPassword } from 'firebase/auth';

export function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created successfully!');
      navigate('/login');
    } catch (error: any) {
      alert(error.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900/20 via-dark-background to-purple-900/20 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-dark-muted rounded-2xl shadow-xl p-8 border border-dark-border">
          <h2 className="text-3xl font-bold text-center mb-8 text-dark-foreground">
            Create Account
          </h2>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              handleSignup();
            }}
          >
            <div>
              <label className="block text-sm font-medium text-dark-foreground mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-foreground/50 h-5 w-5" />
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-2 bg-dark-background border border-dark-border text-dark-foreground rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-foreground/50 h-5 w-5" />
                <input
                  type="password"
                  className="w-full pl-10 pr-4 py-2 bg-dark-background border border-dark-border text-dark-foreground rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <Button className="w-full" disabled={loading}>
              {loading ? 'Signing Up...' : 'Sign Up'}
            </Button>
          </form>

          <div className="text-center mt-4 text-dark-foreground">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-blue-500 hover:underline"
            >
              Sign in
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

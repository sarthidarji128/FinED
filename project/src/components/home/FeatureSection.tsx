import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BookOpen, Trophy, Users } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: "Interactive Learning",
    description: "Engaging lessons tailored to your goals and experience level",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Market Simulator",
    description: "Practice investing with virtual money in real market conditions",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Trophy,
    title: "Achievement System",
    description: "Earn badges and rewards as you master financial concepts",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with peers and experts to share knowledge",
    color: "from-orange-500 to-orange-600"
  }
];

export function FeatureSection() {
  return (
    <section className="py-24 bg-dark-background border-t border-dark-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-foreground">How FinEd Works</h2>
          <p className="text-dark-foreground/80 max-w-2xl mx-auto">
            Our platform combines technology and education to make learning about finance 
            engaging and effective.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description, color, index }: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 rounded-2xl bg-dark-muted border border-dark-border hover:bg-dark-muted/80 transition-all"
    >
      <div className={`mb-4 p-3 rounded-xl bg-gradient-to-br ${color} 
        transform group-hover:scale-110 transition-transform`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-dark-foreground">{title}</h3>
      <p className="text-dark-foreground/80">{description}</p>
    </motion.div>
  );
}
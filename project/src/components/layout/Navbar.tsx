import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Wallet } from 'lucide-react';
import { auth } from '../../config/firebase'; // Ensure this is the correct import for your firebase auth
import { onAuthStateChanged, User } from 'firebase/auth';

export function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe(); // Cleanup listener when component unmounts
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/');
  };

  return (
    <nav className="fixed w-full bg-dark-background/80 backdrop-blur-md z-50 border-b border-dark-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Wallet className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-dark-foreground">FinEd</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/learning">Learn</NavLink>
            <NavLink to="/challenges">Challenges</NavLink>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-dark-foreground font-medium">{user.displayName || 'Sparsh'}</span>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  Log out
                </Button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm">Log in</Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm">Sign up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link 
      to={to} 
      className="text-dark-foreground/80 hover:text-blue-400 font-medium transition-colors"
    >
      {children}
    </Link>
  );
}

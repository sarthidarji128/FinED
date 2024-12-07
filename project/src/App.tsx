import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import  Learning  from './pages/Learning';
import Challenges from './pages/Challenges';
import { Rewards } from './pages/Rewards';
import { Community } from './pages/Community';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

function App() {
  return (
    <div className="bg-dark-background min-h-screen text-dark-foreground">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
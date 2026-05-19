import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button className="btn-secondary" onClick={handleSignOut}>Sign out</button>
      </div>

      <div className="dashboard-card">
        <h2>You're in! 🎉</h2>
        <p>Logged in as: <strong>{user?.email}</strong></p>
        <p className="text-muted">User ID: {user?.id}</p>
      </div>
    </div>
  );
}

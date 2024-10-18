import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../mockUsers';
import logo from '../assets/images/uol-logo.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }
  
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
  
    setLoading(true);
    setTimeout(() => {
      const user = users.find((user) => user.email === email && user.password === password);
      if (user) {
        if (user.role === 'admin') {
          navigate('/admin-dashboard');
        } else if (user.role === 'student') {
          navigate('/student-dashboard');
        }
      } else {
        setError('Invalid email or password');
      }
      setLoading(false);
    }, 2000);
  };
  

  return (
    <div className="login-container">
      <div className="login-box">
        <div className='form-logo'>
        <img src={logo} alt="login" width={250} />
        </div>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">
              Email{' '}
              <span className="tooltip" title="Please enter your registered email address.">ℹ️</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password{' '}
              <span className="tooltip" title="Your password must be at least 6 characters long.">ℹ️</span>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            {loading ? <span className="spinner"></span> : 'Login'}
          </button>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;

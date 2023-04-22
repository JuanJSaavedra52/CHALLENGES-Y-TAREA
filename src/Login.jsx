import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './store/slices/auth/AuthSlice';
import { useMemo } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { email: user } = useSelector((state) => state.auth);

  const isUserLoggedIn = useMemo(() => {
    return user !== null;
  }, [user]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailLogin = (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isUserLoggedIn && (
        <div>
          <p>Welcome, {user}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {!isUserLoggedIn && (
        <div>
          <form onSubmit={handleEmailLogin}>
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            <button type="submit">Login with Email</button>
          </form>
        </div>
      )}
    </div>
  );
};



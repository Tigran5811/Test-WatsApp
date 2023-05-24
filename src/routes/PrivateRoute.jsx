import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const navigate = useNavigate()
  const apiTokenInstance = localStorage.getItem('apiTokenInstance');
  useEffect(() => {
    if (!apiTokenInstance) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      {children}
    </div>
  );
};

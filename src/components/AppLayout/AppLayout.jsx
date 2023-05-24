import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { Login } from '../../pages/login/Login';
import { PrivateRoute } from '../../routes/PrivateRoute';
import { Massage } from '../../pages/Massage/Massage';

const AppLayout = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><Massage /></PrivateRoute>} />
          </Routes>
      </BrowserRouter>

    </>
  );
};
export default AppLayout

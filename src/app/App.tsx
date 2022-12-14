import { Route, Routes } from 'react-router-dom';

import './styles/index.scss';

import { LoginPage } from '../pages';
import { ContactsPage } from '../pages/ContactsPage/ContactsPage';
import { PrivateRoute } from '../shared/lib';
import { Header } from '../features';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/*" element={<LoginPage />} />
        <Route path="/contacts" element={
          <PrivateRoute>
            <ContactsPage />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;

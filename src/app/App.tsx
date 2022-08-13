import { Route, Routes } from 'react-router-dom';

import './styles/index.scss';

import { LoginPage } from '../pages';
import { ContactsPage } from '../pages/ContactsPage/ContactsPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/*" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default App;

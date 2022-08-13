import { Route, Routes } from 'react-router-dom';

import './styles/index.scss';

import { LoginPage } from '../pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/*" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;

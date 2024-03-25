import './App.css';
import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Home from './Home';
import UploadPage from './UploadPage';
import TextBoxPage from './TextboxPage';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/textbox" element={<TextBoxPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

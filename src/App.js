import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import PageRenderer from './components/PageRenderer';

function App() {
  const user = {name: 'osbornn.dev'}
  return (
    <Router>
    <div>
      <Navigation user={user}/>
      <Routes>
      <Route path="/" element={<PageRenderer />} />
      <Route path="/:page" element={<PageRenderer />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

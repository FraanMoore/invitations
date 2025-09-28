import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import FrontPage from './frontPage';
import EnvelopCard from './Idea_one/components/EnvelopeCard';
import BodyIdeaTwo from './Idea_two/BodyIdeaTwo';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/idea1" element={<EnvelopCard />} />
      <Route path="/idea2" element={<BodyIdeaTwo />} />
    </Routes>

  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import About from './components/About';
import Navbar from './components/Shared/Navbar';
import Contact from './components/Shared/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProjectDetails from './components/Projects/ProjectDetails';
import Blog from './components/Blog';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectDetails></ProjectDetails>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

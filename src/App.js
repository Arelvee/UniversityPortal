import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTachometerAlt, faBook, faUserGraduate, faClock, faConciergeBell, faFileAlt, faBookOpen, faPhone, faChevronLeft, faChevronRight, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import Section from './components/Section';
import ClassSchedule from './components/ClassSchedule';
import Services from './components/Services';
import Records from './components/Records';
import Research from './components/Research';
import Contact from './components/Contact';
import './index.css';

function App() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex">
        <nav className={`bg-blue-500 min-h-screen flex flex-col justify-between p-4 transition-width duration-300 ${isMinimized ? 'w-20' : 'w-64'}`}>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="flex items-center text-white hover:text-yellow-200">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                {!isMinimized && 'Home'}
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="flex items-center text-white hover:text-yellow-200">
                <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
                {!isMinimized && 'Dashboard'}
              </Link>
            </li>
            <li>
              <button 
                className="flex items-center text-white w-full text-left hover:text-yellow-200"
                onClick={() => setIsEnrollmentOpen(!isEnrollmentOpen)}
              >
                <FontAwesomeIcon icon={faBook} className="mr-2" />
                {!isMinimized && (
                  <>
                    Enrollment
                    <FontAwesomeIcon icon={isEnrollmentOpen ? faCaretUp : faCaretDown} className="ml-auto" />
                  </>
                )}
              </button>
              {!isMinimized && isEnrollmentOpen && (
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link to="/enrollment/courses" className="flex items-center text-white hover:text-yellow-200">
                      <FontAwesomeIcon icon={faUserGraduate} className="mr-2" />
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link to="/enrollment/section" className="flex items-center text-white hover:text-yellow-200">
                      <FontAwesomeIcon icon={faUserGraduate} className="mr-2" />
                      Section
                    </Link>
                  </li>
                  <li>
                    <Link to="/enrollment/class-schedule" className="flex items-center text-white hover:text-yellow-200">
                      <FontAwesomeIcon icon={faClock} className="mr-2" />
                      Class Schedule
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/services" className="flex items-center text-white hover:text-yellow-200">
                <FontAwesomeIcon icon={faConciergeBell} className="mr-2" />
                {!isMinimized && 'Services'}
              </Link>
            </li>
            <li>
              <Link to="/records" className="flex items-center text-white hover:text-yellow-200">
                <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                {!isMinimized && 'Records'}
              </Link>
            </li>
            <li>
              <Link to="/research" className="flex items-center text-white hover:text-yellow-200">
                <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
                {!isMinimized && 'Research and Publications'}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center text-white hover:text-yellow-200">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                {!isMinimized && 'Contact'}
              </Link>
            </li>
          </ul>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white mt-auto mx-auto mb-4"
          >
            <FontAwesomeIcon icon={isMinimized ? faChevronRight : faChevronLeft} />
          </button>
        </nav>
        <div className="flex-grow p-4">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/enrollment/courses" element={<Courses />} />
            <Route path="/enrollment/section" element={<Section />} />
            <Route path="/enrollment/class-schedule" element={<ClassSchedule />} />
            <Route path="/services" element={<Services />} />
            <Route path="/records" element={<Records />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

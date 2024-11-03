// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ClassList from './components/ClassList';
import ProfessorDetail from './components/ProfessorDetail';
import ClassDetail from './components/ClassDetail'; // New component

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <Header />
        <SearchBar placeholder="Search by Class Name or Professor Name" onSearch={setSearchTerm} />

        <Routes>
          <Route path="/" element={<ClassList searchTerm={searchTerm} />} />
          <Route path="/professors/:id" element={<ProfessorDetail />} />
          <Route path="/classes/:id" element={<ClassDetail />} /> {/* New route for class details */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import { DashBoardComponent } from './Components/DashboardComponent/DashboardComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement } from 'chart.js';
import { MenuComponent } from './Components/MenuComponent/MenuComponent';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { TableComponent } from './Components/DashboardComponent/TableComponent/TableComponent';
import streamApp from './streamApp.json';
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  BarElement,
  ArcElement,

  Legend
);

// This registers the necessary components for a basic line chart including linear scales.

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  }


  let tableData = streamApp.dataTable;
  return (
    <Router>
      <div className='app-container'>
      <MenuComponent toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
      <div className={`content-container ${isSidebarOpen ? 'is-sidebar-open' : ''}`}>
      <Routes>
        <Route path="/" element={<DashBoardComponent />} />
        <Route path="/table" element={<TableComponent tableData={tableData} />} />
      </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;

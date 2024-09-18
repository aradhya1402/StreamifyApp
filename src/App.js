import './App.css';
import { DashBoardComponent } from './Components/DashboardComponent/DashboardComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart, CategoryScale, LinearScale, PointElement,LineElement, Title, Tooltip, Legend, ArcElement, BarElement } from 'chart.js';

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
  return (
    <DashBoardComponent />
  );
}

export default App;

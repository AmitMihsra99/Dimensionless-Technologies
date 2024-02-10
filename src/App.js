import './App.css';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import ApexChart from './main/graph/ApexChart';
import FocusTopics from './main/graph/FocusTopics';
import Refinddata from './main/graph/Refinddata';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Sidebar />
      <div className="main-container">
        <ApexChart />
        <Refinddata/>
        <FocusTopics/>
      </div>
    </div>
  );
}

export default App;

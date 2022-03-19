// import { Card } from 'react-bootstrap';
import './App.css';
import Menubar from './Components/Menubar/Menubar';
import Card from './Components/Cards/Card'
function App() {
  return (
    <div className="App">
    <Menubar></Menubar>
    <Card></Card>
    <Card></Card>
    </div>
  );
}

export default App;

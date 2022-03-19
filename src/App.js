// import { Card } from 'react-bootstrap';
import './App.css';
import Menubar from './Components/Menubar/Menubar';
// import Card from './Components/Cards/Card'
// import Count from './Components/Count/Count';
function App() {
  // const count =() =>{
  //   console.log('Hello')
  //   const msg ='hello'
  //   return msg
  // }
  return (
    <div className="App">
    <Menubar></Menubar>
    {/* <Count count={count}></Count> */}
    {/* <Count></Count> */}
    {/* <Card></Card>
    <Card></Card> */}
    </div>
  );
}

export default App;

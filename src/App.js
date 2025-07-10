import logo from './logo.svg';
import './App.css';
import Greeting from './Greet';
import StudentAttendance from './StudentAttendance';

function App() {
  return (
    <div className="App">
      <Greeting/>
      
      <StudentAttendance/>
    </div>
  );
}

export default App;

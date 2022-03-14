import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import GradeTable from './components/GradeTable'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path = '/' element = {<GradeTable/>} />
    </Routes>
    </Router>
  );
}

export default App;

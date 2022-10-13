import logo from './logo.svg';
import './App.css';
import AddPost from './Components/AddPost';
import ViewFeed from './Components/ViewFeed';
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<AddPost />} />
      <Route path='/viewfeed' element = {<ViewFeed />} />
      </Routes>
  
  
    </div>
  );
}

export default App;

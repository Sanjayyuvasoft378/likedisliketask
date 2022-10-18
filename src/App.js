import './App.css';
import AddPost from './Components/AddPost';
import ViewFeed from './Components/ViewFeed';
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/antd/dist/antd.min.css'
import Comment from './Components/Comment';
import TagsInput from './Components/TagsInput';

function App() {
  return (
    <div className="App">

      <Routes>
     
      <Route path='/' element={<AddPost />} />
      <Route path='/viewfeed' element = {<ViewFeed />} />
      <Route path='/comment' element = {<Comment />} />
      <Route path='/addtag' element = {<TagsInput />} />
      </Routes>
 
  
    </div>
  );
}

export default App;


import './App.css';
import ComENg from './components/ComputerEngineering-Img/ComENg';
import PostCard from './components/Feeds/Post/PostCard';
import Groupnav from './components/GroupNav/Groupnav';
import Header from './components/Header/Header';
import Loc from './components/LOC/Loc';
import Login from './components/Login/Login';
import CreateIcon from '@mui/icons-material/Create';
import { IconButton } from '@mui/material';


function App() {
  return (
    <>
   
    <div className="App">
    <Login />
     <Header />
     <ComENg />
     <div className="groupbody">
   
     <Groupnav />
       <div className="groupbody__main">
       <div className="postcardmain__container">
        <PostCard />
        
      </div>
      <div className="groupbody__locContainer">
        <Loc />
      </div>
       </div>
     </div>
    </div>
    <div className="createPost">
     <IconButton>
       <CreateIcon fontSize="large" />
     </IconButton>
    </div>
    </>
  );
}

export default App;

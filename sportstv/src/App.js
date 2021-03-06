import "./App.css";
import {Homepage, VideoListingPage, SingleVideo, SignIn, SignUp,Profile, Like, History,WatchLater,Playlist,SinglePlaylist,NotFound} from './pages'
import {useAuth} from "./context"
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {auth} = useAuth();
  return (
    <div className="App">
      <ToastContainer
        position='bottom-right'
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme='colored'
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/videos" element={<VideoListingPage/>}/>
        <Route path="/video/:videoID" element={<SingleVideo/>}/>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/profile" element={auth.isAuth?<Profile/>:<SignIn/>}></Route>
        <Route path="/liked" element={auth.isAuth?<Like/>:<SignIn/>}></Route>
        <Route path="/history" element={auth.isAuth?<History/>:<SignIn/>}></Route>
        <Route path='/watchlater' element={auth.isAuth?<WatchLater/>:<SignIn/>}></Route>
        <Route path='/playlist' element={auth.isAuth?<Playlist/>:<SignIn/>}></Route>
        <Route path='/playlist/:playlistId' element={<SinglePlaylist/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

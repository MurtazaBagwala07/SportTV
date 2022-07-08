import "./App.css";
import {Homepage, VideoListingPage, SingleVideo, SignIn, SignUp,Profile} from './pages'
import {useAuth} from "./context"
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";


function App() {
  const {auth,setAuth} = useAuth();
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/videos" element={<VideoListingPage/>}/>
        <Route path="/video/:videoID" element={<SingleVideo/>}/>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/profile" element={auth.isAuth?<Profile/>:<SignIn/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

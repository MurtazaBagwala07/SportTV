import "./App.css";
import {Homepage, VideoListingPage, SingleVideo} from './pages'
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/videos" element={<VideoListingPage/>}/>
        <Route path="/video/:videoID" element={<SingleVideo/>}/>
      </Routes>
    </div>
  );
}

export default App;

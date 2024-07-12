
import Navbar from './Homepage';
import VideoSection from './VideoSection';
import WritingSection from './writingSection';
import Project from './Project';
import Podcast from "./Podcast";
import Portfolio from './Portfolio';

function App() {
  return (
    <div>
    <Navbar/> 
    <VideoSection/>
    <WritingSection/>
    <Project/>
    <Podcast/>
    <Portfolio/>
    </div>
  );
}
export default App;
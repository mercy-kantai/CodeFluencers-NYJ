
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
    <Podcast/>
    <WritingSection/>
    <Project/>
    <Portfolio/>
    </div>
  );
}
export default App;
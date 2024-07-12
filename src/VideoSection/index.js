import React from 'react';
import'./index.css'

function VideoSection() {
  return (
    <div className='overall'>
      <h1>Code Fluencers</h1>
      <div className="videoSection">
      <div className="videoTitle">
        <h1><hr className="hr"/>Video<hr/></h1>
        <h4>View, Learn and Engage</h4>
      </div>
      <div className='vids'>
      <div><iframe src="https://www.loom.com/embed/5c128a12d83e4543a1d1b30a0574615a?sid=7fd00429-0266-420b-a116-3c2c37c5bd02" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen className='link'></iframe></div>
    {/* <a  href="https://www.loom.com/share/5c128a12d83e4543a1d1b30a0574615a">
      <img alt='Video' style={{maxWidth: '3300px'}} src="https://cdn.loom.com/sessions/thumbnails/5c128a12d83e4543a1d1b30a0574615a-1720613971266-with-play.gif"/>
    </a> */}
  </div>
            </div>
</div>
  );
}
export default VideoSection;
        
    

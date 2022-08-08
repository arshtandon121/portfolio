import React from 'react'
import   './About.css'
import bw from '../img/palace.jpeg';

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card-bg"></div>
            <div className="a-card">
                <img src={bw} alt="" className='a-img' />
            </div>
        </div>
        <div className="a-right">
          <div className="a-title"> <h1>About Me</h1> </div> 
          <div className="a-sub"> 
            <p>i am developer who is starting as a fresher .</p>
          </div>
          <div className="a-desc">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex provident deserunt neque officiis suscipit atque minima magnam repellendus odio, necessitatibus perferendis hic.</p>

          </div>

          
        </div>
    </div>
  )
}

export default About
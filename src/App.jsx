import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./Styles/waitlist.css"
import NavigationBar from './NavigationBar'
import xpPoints from "../src/assets/xp-points.png"
import addNew from "../src/assets/add-new.png"
import image from "../src/assets/image.png"
import graph from "../src/assets/graph.png"
import fullFrameimage from "../src/assets/full-frame.png" 
import parent from "../src/assets/parents.png"
import student from "../src/assets/students.png"
import school from "../src/assets/schools.png"
import learnxplore from "../src/assets/learn.png"
import content from "../src/assets/Content.png"
import geometry from "../src/assets/Geometric shapes.png"
import socials from "../src/assets/Social icons.png"
// import WaitlistPage from './waitlistpage'

function App() {


  return (
    <>
     <div className='page-body'>
           <NavigationBar />
     
     
           <div className="background-stripesbody">
     
             <div className="container">
               <h1 className="better-learning">
                 Better <span className="learning">Learning</span> <br /> Experience for <span className="students">Students</span>
               </h1>
     
     
     
     
               <div className="empowering-student-text">
                 <p className='right-text-box'>Empowering students to unlock their full potential through personalized, gamified, and community-driven learning.</p>
     
               </div>
               <button className='early-access'>Get early access for free</button>
             </div>
     
     
     
             <div className="full-frame">
               <img className='frame' src={fullFrameimage} alt="" />
             </div>
     
     
     
     
     
     
             <div className="xp-images">
               <div className="left">
                 <img className='xpPoints-image' src={xpPoints} alt="" />
                 <img className='addnew-image' src={addNew} alt="" />
               </div>
     
     
               <div className="middle">
                 <img src={image} alt="" />
               </div>
     
     
               <div className="right">
                 <p className='right-text-box'>Empowering students to unlock their full potential through personalized, gamified, and community-driven learning.</p>
                 <img className='graph-image' src={graph} alt="" />
               </div>
             </div>
           </div>
     
     
     
     
     
     
     
     
           {/* Who is this for */}
     
     
           <div className="who-is-this-for-container">
             <div className="text-footer">
               <h2>Who is this for?</h2>
               <div className='sub-txt'>
                 <p className='txt'>Lorem ipsum dolor sit amet consectetur. Viverra in nisi rhoncus malesuada nisi.
                   At facilisis eu ultrices praesent nisl platea eros vulputate lacus.
                   Turpis amet viverra ac et sit elementum in. At a ut sed in cursus.
                 </p>
               </div>
     
     
             </div>
     
     
             <div className="categories">
               <img src={parent} alt="" className="parents" />
               <img src={student} alt="" className="parents" />
               <img src={school} alt="" className="parents" />
             </div>
           </div>
     
     
     
     
     
     
           {/* delve */}
     
     
           <div className="features_container">
     
             <div className="content-box">
               <h2 className="header_delve">
                 Delve into our <span> <img src={learnxplore} alt="" /></span>simplified video classes, interactive quizzes and exams.
               </h2>
               <p className="lessons">
                 Our lessons are designed to match the needs of students across various grades, including Primary,
                 Junior Secondary, and Senior Secondary levels.
               </p>
     
             </div>
     
     
     
     
             <div className="features">
               <div className="features-content-body">
               <div className="left-side">
                 <div className="videos">
                   <h4>Video Classes</h4>
                   <p>Captivating video lessons, pre-made lesson plans, assessments, 
                     and learning resources reduce the burden on a teacher by more than 50%.</p>
                 </div>
                 <div className="test">
                   <h4>Test and quizzes</h4>
                   <p>Challenge yourself and make learning a social adventure with multiplayer 
                     quizzes and enjoy educational fun with friends.</p>
                 </div>
                 <div className="community">
                   <h4>Learn with a community</h4>
                   <p>Challenge yourself and make learning a social adventure with multiplayer 
                     quizzes and enjoy educational fun with friends.</p>
                 </div>
               </div>
     
     
               <div className="right-side">
                 <img src={content} alt="" />
               </div>
             </div>
             </div>
           </div>
     
     
     
           <div className="geometry-shapes">
             <img className='geomtry' src={geometry} alt="" />
           </div>
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
           {/*  */}
           
     
     
           <div className="footer">
             <div className="gostudie-logo">
               <h2>Gostudie</h2>
             </div>
     
     
             <div className="rights-socials">
               <p>© 2025 GoStudi. All rights reserved.</p>
     
     
     
               <div className="socials">
                 <img src={socials} alt="" />
               </div>
             </div>
           </div>
         </div>
    </>
  )
}

export default App

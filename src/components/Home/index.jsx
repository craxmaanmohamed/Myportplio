import "./Home.css";

import { Link} from 'react-scroll';
function Home(){
    return(
      <section id="Homesection" className="Homesection">
  
      <img className="myimg" src ="public/images/homeimg.png"  alt="Home Image"   height="300" width="300" />
      <div  className="TextDivHome">
      <h1 style={{fontSize:"25px"}}>Hi I’m <span className="span"> C/raxmaan</span></h1>
      <h1 className="HLarger" >web developer</h1>
      <p className="Hp">Web developers design, maintain, and optimize websites and other 
        web-based applications<br/> for consumer use. so let's start together!</p>
      {/* <button className="Startwithme">Start with me</button> */}
      <button className="Startwithme" >
      <Link  to="ContactSection" offset={-59}   smooth={true} duration={600}>
      Start with me
      </Link>
      </button>
   

      </div>
  
     
      </section>
    )
}
export default Home;
import "./About.css"
import AboutImg from "/images/AboutImg.png"
function About(){
  return(
    <section id="Aboutsection" className="Aboutsection">
    <h1 className="page-Name-H">About <span>Me</span> </h1>
    <div className="AboutTextImg">
      <div>
      <img src={AboutImg}  alt="About Image" height="450px" width="450px"></img>
      </div>

     <div>
     <p className="AboutP">
     Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. Lorem 
Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an 
unknown printer took a galley of type and 
     </p>
  
     <button className="learnMore">Learn More</button>
        
        </div>
 


    </div>
</section>

  )
}
export default About;
import "./Footer.css"
import { Link} from 'react-scroll';
function Footer(){
  return(
       <>
             
             <nav className='Footernav'>
          <h2 className='HLogo'>C/raxmaan</h2>

          <ul className='Pcul'>
            
          <Link className='Link' to="Homesection" offset={-100}  spy={true} smooth={true} duration={600}>
           Home
      </Link>
      < Link  className='Link' activeClass="active" offset={-69} to="Aboutsection" spy={true} smooth={true} duration={600}>
           About
         </Link>
      <Link  className='Link'to="Skillssection" offset={-68}   spy={true} smooth={true} duration={600}>
       Skills
      </Link>
      <Link  className='Link'to="ProjectSection" offset={-68}   spy={true} smooth={true} duration={600}>
       Projects
      </Link>
      <Link  className='Link'to="ContactSection" offset={-68}   spy={true} smooth={true} duration={600}>
       Contact
      </Link>

          </ul>
      

        </nav>
     
       </>

    )
}
export default Footer
import { Link} from 'react-scroll';
import "./Header.css"
import { TfiClose } from "react-icons/tfi";
import { TfiAlignRight } from "react-icons/tfi";
import { useState } from 'react';
function Header(){
  const [Menu,SetMenu]=useState(false)
  const MenuClick =()=>{
    SetMenu(!Menu)

  }

    return(    
      <>

        
        <nav className='nav'>
          <h2 className='HLogo'>C/raxmaan</h2>
   

        

          <ul onClick={()=>SetMenu(false)}  className={Menu? "NavMenuMobile " :"NavMenu "} >
  
          <Link className='Link' onClick={()=>SetMenu(false)}  to="Homesection" activeClass="active"   spy={true} smooth={true} duration={600}>
           Home
      </Link>
      < Link  className='Link' activeClass="active" onClick={()=>SetMenu(false)} offset={-59} to="Aboutsection" spy={true} smooth={true} duration={600}>
           About
         </Link>
      <Link  className='Link'to="Skillssection"   onClick={()=>SetMenu(false)} activeClass="active" offset={-59}   spy={true} smooth={true} duration={600}>
       Skills
      </Link>
      <Link  className='Link'to="ProjectSection"   onClick={()=>SetMenu(false)}activeClass="active" offset={-59}   spy={true} smooth={true} duration={600}>
       Projects
      </Link>
      <Link  className='Link'to="ContactSection"   onClick={()=>SetMenu(false)}activeClass="active" offset={-59}   spy={true} smooth={true} duration={600}>
       Contact
      </Link>
          </ul>
          <div className="mobileMenu" onClick={MenuClick}>
            {Menu?<TfiClose size={25}color='black' />: <TfiAlignRight size={25}color='black' />}

          </div>
          
        
        </nav>

      
        </>
    )
}
export default Header;
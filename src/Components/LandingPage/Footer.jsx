import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <div className="footer_wrapper">
      <div className="footer">
        <div className="foot">
            <div className="foot_h6">ABOUT US</div>
            <p className='foot_p'>Heaven frucvitful does't cover lesser dsays appear creeping seasons to behold</p>

        </div>
        <div className="foot">
            <div className="foot_h6">CONTACT INFO</div>
            <p className='foot_p'>Address: Kushinagar, UP</p>
            <p className='foot_p'>Phone: 9559779666</p>
            <p className='foot_p'>Email: ayushsri9666@gmail.com</p>
        </div>
        <div className="foot">
            <div className="foot_h6">IMPORTANT LINKS</div>
            <a className='foot_a'><p className='foot_p1'>View Project</p></a>
            <a className='foot_a'><p className='foot_p1'>Contact Us</p></a>
            <a className='foot_a'><p className='foot_p1'>Testimonial</p></a>
            <a className='foot_a'><p className='foot_p1'>Properties</p></a>
            <a className='foot_a'><p className='foot_p1'>Support</p></a>
        </div>
        <div className="foot">
            <div className="foot_h6">NEWSLATTER</div>
            <p className='foot_p'>Heaven frucvitful does't cover lesser dsays appear creeping seasons.</p>
            <div className="send">
            <input type="email" placeholder='Email Address'/><button><FaPaperPlane style={{color:"white"}}/></button></div>
        </div>  
        
      </div>
      <div className="foot_logo">
        <div className="footlogo">
            <div className="foot_logo1">
                <div className="footlogo_img">
                    <img src="/img/logo/logo2_footer.png" alt="" />
                </div>
            </div>
            <div className="foot_logo1">
            <h6 className='footlogo_h6'>5000+ <abbr style={{fontWeight:400}}>Talented Hunters</abbr></h6>
            </div>
            <div className="foot_logo1">
            <h6 className='footlogo_h6'>451 <abbr style={{fontWeight:400}}>Talented Hunters</abbr></h6>
            </div>
            <div className="foot_logo1">
            <h6 className='footlogo_h6'>482 <abbr style={{fontWeight:400}}>Talented Hunters</abbr></h6>
            </div>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default Footer

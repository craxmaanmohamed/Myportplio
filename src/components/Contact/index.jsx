import "./Contact.css"
function Contact(){
  return(
        <section id="ContactSection" className="ContactSection">
           <h1 className="page-Name-H"><span>Contact</span> Me </h1>
           <div className="contactContianer">
            <input type="text" placeholder="Full Name"></input>
            <input type="text" placeholder="Email"></input>
            <textarea placeholder="Message.."></textarea>
            <button className="SEND">SEND</button>
           </div>
        </section>

    )
}
export default Contact
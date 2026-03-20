import Accordion from 'react-bootstrap/Accordion';
import './ACC.css'
function ACC() {
  return (
    
   <>
   <br /><br />
   <h3 style={{color:"whitesmoke"}}>Frequently Asked question</h3><br />
    <Accordion >
      <Accordion.Item eventKey="0" id='ACC-A'>
        <Accordion.Header >How do i get started with Codify ?</Accordion.Header>
        <Accordion.Body style={{color:"whitesmoke"}}>
          {/* It’s easy. Sign up for a free account, explore our Courses, Practice problems, and Contests, and begin with a beginner-friendly challenge. Our community and AI Mentor are here to help along the way. */}
          It's easy. You can Code for free. Once you Sign up you can do many Quiz.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What Codify does ?</Accordion.Header>
        <Accordion.Body style={{color:"whitesmoke"}}>
Codify helps you learn coding by writing code daily, solving small problems, and building simple projects consistently.        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How do i Code in the Codify?</Accordion.Header>
        <Accordion.Body style={{color:"whitesmoke"}}>
         By clicking on Code option in the above given section of the Website.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
   </>
  );
}

export default ACC;
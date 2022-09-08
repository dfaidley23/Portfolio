export default function Contact(props) {
    return (
      <div className='App-main' id='contact'>
        <h1>Contact Page</h1>
        <p>Thank You for viewing my Portfolio. If you wish to reach out to me for any inquiries then feel free to send me a message on LinkedIn. If you wish to follow me or for more looks into other examples of my work feel free to visit my Github.</p>
        <p><img id='linkedIn' src={props.linkIcon} alt='LinkedIn Icon'></img><a href={props.linkedIn}>LinkedIn</a></p>
        <p><img src={props.gitIcon} alt='GitHub Icon'></img><a href={props.github}>Github</a></p>
      </div>
    );
  }
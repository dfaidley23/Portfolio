function Home(props) {
    return (
    <section className="App-main">
        <div  id="about-me">
        <h1>About Me</h1>
            <img id="my-photo" src={props.photo} alt='Me under a sign with my name'></img>
            <p>My name is David and I am a fullstack Developer. I have listed a few of my projects below so you can get a sample of how I code. If you wish to reach out to me with any inquiries you may do so by visiting my Linkedin or by contacting me from my contact methods listed on my Resume.
            </p>
        </div>
        <div id="my-resume">
            <h1>My Resume</h1>
            <p>For a copy of my resume please click on the link below</p>
            <a id="resume" href={props.resumeLink} target="_blank" rel="noopener noreferrer">My Resume!</a>
        </div>
    </section>
    )
};

export default Home;
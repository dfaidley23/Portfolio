function Home(props) {
    return (
    <section className="App-main">
        <div  id="about-me">
        <h1>About Me</h1>
            <img id="my-photo" src={props.photo} alt='Me under a sign with my name'></img>
            <p>My name is David and I am a fullstack Developer. I am an innovative problem-solver passionate about developing apps, my current focus is on mobile-first design and development. Since completing the bootcamp, I have continued my studies independently to learn more about Web development as well as branching out to back-end languages. have a look at my projects listed and feel free to reach out over LinkedIn or email which is provided in my Resume.
            </p>
        </div>
        <div>
        <h1>Skills</h1>
        <br></br>
            <h2>Languages</h2>
            <p>JavaScript, HTML/CSS, SQL</p>
            <h3>Applications</h3>
            <p>Node.js, Express.js, React.js, AWS, Docker, Linux, Git/Github, APIs, MySQL, Sequilize, MongoDB, Mongoose</p> 
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
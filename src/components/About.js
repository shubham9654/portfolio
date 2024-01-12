const About = () => {
  return (
    <section className="about-me-section">
      <h1>About me</h1>
      <p className="heading-text">You will find a little intro about me</p>
      <div className="about-me-content">
        <div className="about-me-text-container">
          <h2>Wants to know me?</h2>

          <p>
            I'm a full-stack developer with over 3+ years of experience,
            passionate about crafting dynamic web applications.<br /><br /> I excel in using
            Next.js, React.js, Node.js, Express, and MongoDB to create
            innovative and seamless digital solutions.
          </p>
          <p>
            I'm currently open to job opportunities where I can contibute to
            your business. contact me if you're interested in having a taste of
            my skills
          </p>
          <button
            className="profile-btn see-my-work--btn"
            onClick={() => {
              const email = "shubhamsarkar9654@gmail.com";
              const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
              window.open(gmailLink, "_blank");
            }}
          >
            Contact Me
          </button>
        </div>

        <div className="about-me-skills-container">
          <h2>Skills and Technologies</h2>
          <ul className="about-me-skills">
            <li>Nextjs</li>
            <li>Reactjs</li>
            <li>Nodejs</li>
            <li>Expressjs</li>
            <li>Mongodb</li>
            <li>Mysql</li>
            <li>Aws</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;


function Home() {
  return (
    <section
      id="home"
      className="d-flex align-items-center min-vh-100 bg-light"
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side - Introduction */}
          <div className="col-lg-7">

            <p className="text-primary fw-semibold mb-2">
              SOFTWARE ENGINEER
            </p>

            <h1 className="display-2 fw-bold mb-4">
              Hi, I'm KOANG KANGACH
            </h1>

            <h2 className="h3 text-secondary mb-4">
              I build modern web applications.
            </h2>

            <p className="lead text-muted mb-4">
              I am a software developer passionate about building
              responsive, user-friendly and reliable web applications
              using modern technologies.
            </p>

            {/* Buttons */}
            <div className="d-flex gap-3">
              <a href="#projects" className="btn btn-primary btn-lg">
                View My Projects
              </a>

              <a href="#contact" className="btn btn-outline-dark btn-lg">
                Contact Me
              </a>
            </div>

          </div>

          {/* Right Side - Profile Image Placeholder */}
          <div className="col-lg-5 text-center mt-5 mt-lg-0">

            <img
              src="/profile.png"
              alt="Kangach Andrew"
              className="rounded-circle img-fluid shadow"
              style={{
                width: "500px",
                height: "550px",
                objectFit: "cover",
              }}
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;

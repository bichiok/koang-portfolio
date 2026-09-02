import SocialMedia from "./social";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">

        <div className="row">

          {/* About / Brand */}
          <div className="col-md-6 mb-4">
            <h4 className="fw-bold">
              KANGACH A. KANGACH
            </h4>

            <p className="text-secondary">
              Software Engineer passionate about building
              modern, responsive and user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">
              Quick Links
            </h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-secondary text-decoration-none">
                  Home
                </a>
              </li>

              <li className="mb-2">
                <a href="#about" className="text-secondary text-decoration-none">
                  About
                </a>
              </li>

              <li className="mb-2">
                <a href="#skills" className="text-secondary text-decoration-none">
                  Skills
                </a>
              </li>

              <li className="mb-2">
                <a href="#projects" className="text-secondary text-decoration-none">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="text-secondary text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">
              Follow Me
            </h5>

            <div className="d-flex gap-3 mt-3">

              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
                title="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>

              {/* X */}
              <a
                href="https://x.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
                title="X"
              >
                <i className="bi bi-twitter-x"></i>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
                title="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
                title="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/211XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
                title="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>

            </div>
          </div>

        </div>
 <SocialMedia />
        <hr className="border-secondary" />

        {/* Copyright */}
        <div className="text-center text-secondary">
          <p className="mb-0">
            © 2026 KANGACH A. KANGACH.All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

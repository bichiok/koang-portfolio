
function SocialMedia() {
  return (
    <section id="social" className="py-5 bg-dark">
      <div className="container text-center">

        <h3 className="fw-bold mb-2">
          Connect With Me
        </h3>
        <p className="text-muted mb-4">
          Follow me and let's connect on social media.
        </p>

        <div className="d-flex justify-content-center gap-5">

          {/* GitHub */}
          <a
            href="https://github.com/bichiok"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark rounded-circle"
            title="GitHub"
          >
            <i className="bi bi-github fs-4"></i>
          </a>

          {/* X */}
          <a
            href="https://x.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark rounded-circle"
            title="X"
          >
            <i className="bi bi-twitter-x fs-4"></i>
          </a>

          {/* Instagram */}
            <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
            title="Instagram"
            >
            <i className="bi bi-instagram fs-4"></i>
            </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/koangkangach"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary rounded-circle"
            title="Facebook"
          >
            <i className="bi bi-facebook fs-4"></i>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/245758286353"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success rounded-circle"
            title="WhatsApp"
          >
            <i className="bi bi-whatsapp fs-4"></i>
          </a>

        </div>

      </div>
    </section>
  );
}

export default SocialMedia;

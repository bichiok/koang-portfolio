import SocialMedia from "./social";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <SocialMedia />
        <hr className="border-secondary" />
          {/* Copyright */}
        <div className="text-center text-secondary">
            <p className="mb-0">
                © 2026 KANGACH A. KANGACH. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>12 Stone Consulting</h2>

          <p>
            Helping Contractors Build Better Businesses through
            smarter systems, automation, customer experience,
            and strategic growth.
          </p>
        </div>

        <div className="footer-links">

          <div>
            <h4>Business Growth</h4>

            <a href="/assessment">Growth Assessment</a>

            <a href="/contractors">Contractor Systems</a>

            <a href="/services">Smart Business in a Box</a>
          </div>

          <div>
            <h4>Industries</h4>

            <a href="/contractors/hvac">HVAC</a>

            <a href="/contractors/plumbing">Plumbing</a>

            <a href="/contractors/electrical">Electrical</a>

            <a href="/contractors/roofing">Roofing</a>
          </div>

          <div>
            <h4>Company</h4>

            <a href="/about">About</a>

            <a href="/contact">Contact</a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © {new Date().getFullYear()} 12 Stone Consulting.
        All Rights Reserved.

      </div>
    </footer>
  );
}

export default Footer;
import heroImage from "../../assets/images/hero.jpg";
import "../../styles/HVACLanding.css";

import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiPhoneCall,
  FiGlobe,
  FiSearch,
  FiStar,
  FiSettings,
  FiUsers,
} from "react-icons/fi";

function HVACLanding() {
  return (
    <main className="landing-page">

      {/* HERO */}

  
<section
  className="landing-hero"
  style={{
    backgroundImage: `linear-gradient(rgba(7,20,38,.82), rgba(7,20,38,.90)), url(${heroImage})`,
  }}
>

  <div className="page-container">

    <span className="eyebrow">
      Complimentary HVAC Business Growth Assessment™
    </span>

    <h1>
      Your Technicians May Be Doing Everything Right...
      <br />
      While Your Business Is Still Losing Customers.
    </h1>

    <p className="hero-text">
      Every missed phone call.
      Every website visitor who leaves.
      Every estimate that never gets followed up.
      Every employee who leaves.
      Every one of these quietly costs your business money.
    </p>

    <p className="hero-text">
      <strong>The good news?</strong> Most of these opportunities can be identified
      and improved with the right business growth strategy.
    </p>

    <div className="hero-buttons">

      <Link
        to="/assessment"
        className="button button-primary"
      >
        Start My Complimentary Business Growth Assessment
        <FiArrowRight />
      </Link>

    </div>

  </div>

</section>

      {/* WHAT WE EVALUATE */}

      <section className="section">

        <div className="page-container">

          <h2>
During Your HVAC Business Growth Assessment™ We'll Evaluate:
</h2>

<p className="section-intro">
Together we'll identify opportunities to improve customer acquisition,
customer experience, operational efficiency and employee retention.
</p>

          <div className="cards">

            <div className="card">

              <FiPhoneCall />

              <h3>Lead Handling</h3>

              <p>
                Calls, estimates, follow-up and appointment scheduling.
              </p>

            </div>

            <div className="card">

              <FiGlobe />

              <h3>Smart Website</h3>

              <p>
                Is your website actually generating customers?
              </p>

            </div>

            <div className="card">

              <FiSearch />

              <h3>Google + AI Visibility</h3>

              <p>
                SEO • GEO • AEO
              </p>

            </div>

            <div className="card">

              <FiStar />

              <h3>Reviews</h3>

              <p>
                Online reputation and customer trust.
              </p>

            </div>

            <div className="card">

              <FiSettings />

              <h3>Automation</h3>

              <p>
                Office efficiency and repetitive tasks.
              </p>

            </div>

            <div className="card">

              <FiUsers />

              <h3>Employee Growth</h3>

              <p>
                Hiring, retention and healthcare access.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHY */}

      <section className="section gray">

        <div className="page-container narrow">

          <h2>We Diagnose Before We Prescribe.</h2>

          <p>
            We don't begin by recommending websites,
            AI or healthcare solutions.

            We begin by understanding your business.

            Every recommendation is customized around
            your goals, challenges and opportunities.
          </p>

        </div>

      </section>

      {/* THREE PILLARS */}

     <section className="section">

  <div className="page-container">

    <span className="eyebrow">
      Customized Business Growth Solutions
    </span>

    <h2>
      Every Recommendation Is Built Around Your Business.
    </h2>

    <div className="pillar-grid">

      <div className="pillar">

        <h3>Smart Website™</h3>

        <p className="pillar-subtitle">
          Your Hardest Working Employee.
        </p>

        <ul>

          <li>Generate More Qualified Leads</li>

          <li>SEO • GEO • AEO</li>

          <li>AI Visitor Engagement</li>

          <li>Book Appointments</li>

          <li>Educate Prospects</li>

          <li>Works 24 Hours a Day</li>

        </ul>

      </div>

      <div className="pillar">

        <h3>AI Big 3™</h3>

        <p className="pillar-subtitle">
          Three Digital Employees.
        </p>

        <ul>

          <li>BOSS™ AI Receptionist</li>

          <li>OmniBot™ Website AI Employee</li>

          <li>AI Guardian™ Reputation Manager</li>

          <li>Lead Follow-up</li>

          <li>Customer Engagement</li>

        </ul>

      </div>

      <div className="pillar">

        <h3>Employee Growth</h3>

        <p className="pillar-subtitle">
          Keep Great Employees.
        </p>

        <ul>

          <li>KonnectMD Access</li>

          <li>Healthcare Access Resources</li>

          <li>Employee Retention</li>

          <li>Recruitment Advantage</li>

        </ul>

      </div>

    </div>

  </div>

</section>

      {/* CTA */}

      <section className="landing-cta">

  <div className="page-container narrow">

    <span className="eyebrow">
      Complimentary Assessment
    </span>

    <h2>
      Let's Find The Hidden Opportunities In Your Business.
    </h2>

    <p>
      No sales presentation.
      No pressure.
      Just a professional business conversation focused on helping your HVAC company grow.
    </p>

    <Link
      to="/assessment"
      className="button button-primary"
    >
      Start My Complimentary Assessment
      <FiArrowRight />
    </Link>

  </div>

</section>

    </main>
  );
}

export default HVACLanding;
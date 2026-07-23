import "../styles/home.css";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiPhoneCall,
  FiClock,
  FiStar,
  FiSettings,
  FiUsers,
  FiCpu,
  FiTrendingUp,
  FiTarget,
  FiMessageSquare,
  FiRefreshCw,
  FiHeart,
  FiCheckCircle,
  FiSearch,
  FiBarChart2,
  FiMap,
  FiTool,
  FiShield,
  FiActivity,
  FiDollarSign,
  FiUserCheck,
  FiLayers,
} from "react-icons/fi";

const revenueLeakageItems = [
  {
    icon: FiPhoneCall,
    title: "Missed Calls",
    text: "Every unanswered call may represent a customer who moves on to the next company.",
  },
  {
    icon: FiClock,
    title: "Slow Follow-Up",
    text: "Delays in responding to inquiries, estimates, and past customers can quietly cost revenue.",
  },
  {
    icon: FiStar,
    title: "Weak Reputation Systems",
    text: "Satisfied customers cannot strengthen your reputation when no one consistently asks for reviews.",
  },
  {
    icon: FiSettings,
    title: "Manual Processes",
    text: "Repetitive tasks consume time, create inconsistencies, and limit your team's productivity.",
  },
  {
    icon: FiUsers,
    title: "Employee Turnover",
    text: "Recruiting, training, and replacing skilled employees can create major hidden business costs.",
  },
  {
    icon: FiCpu,
    title: "Underused Technology",
    text: "Technology should simplify your business, protect opportunities, and support better decisions.",
  },
];

const growthSystemItems = [
  {
    icon: FiTrendingUp,
    number: "01",
    title: "Grow",
    headline: "Create More Business Value",
    text: "Identify hidden revenue opportunities, improve conversion, strengthen customer acquisition, and maximize the value of every opportunity.",
    points: [
      "Revenue growth",
      "Lead conversion",
      "Customer retention",
      "Referral opportunities",
    ],
  },
  {
    icon: FiSettings,
    number: "02",
    title: "Improve",
    headline: "Build Smarter Operations",
    text: "Reduce wasted time, improve communication, automate repetitive work, and create systems that support consistent performance.",
    points: [
      "Workflow improvement",
      "Business automation",
      "Customer communication",
      "Operational efficiency",
    ],
  },
  {
    icon: FiShield,
    number: "03",
    title: "Strengthen",
    headline: "Build a Stronger Business",
    text: "Support your people, improve employee retention, strengthen your customer experience, and increase long-term business value.",
    points: [
      "Employee retention",
      "Workforce support",
      "Customer experience",
      "Long-term stability",
    ],
  },
];

const expertiseItems = [
  {
    icon: FiTarget,
    title: "Business Growth Strategy™",
    text: "Practical strategies that help business owners identify priorities, uncover opportunities, and create a clear path toward sustainable growth.",
    link: "/solutions/business-growth-strategy",
  },
  {
    icon: FiDollarSign,
    title: "Revenue Growth Systems™",
    text: "Systems designed to reduce revenue leakage, improve follow-up, strengthen conversion, and increase the value of existing opportunities.",
    link: "/solutions/revenue-growth-systems",
  },
  {
    icon: FiMessageSquare,
    title: "Customer Experience™",
    text: "A better customer journey through faster communication, stronger reputation systems, improved service, and more consistent engagement.",
    link: "/solutions/customer-experience",
  },
  {
    icon: FiRefreshCw,
    title: "Business Automation™",
    text: "Smarter workflows, CRM systems, scheduling, lead nurturing, reporting, and automation that help your business operate more efficiently.",
    link: "/solutions/business-automation",
  },
  {
    icon: FiCpu,
    title: "AI Integration™",
    text: "Practical AI solutions that support customer service, communication, opportunity management, reputation, and day-to-day operations.",
    link: "/solutions/ai-integration",
  },
  {
    icon: FiHeart,
    title: "Employee Growth Solutions™",
    text: "Workforce strategies and innovative employee support solutions designed to improve retention, recruitment, morale, and business stability.",
    link: "/solutions/employee-growth",
  },
];

const processSteps = [
  {
    icon: FiSearch,
    number: "01",
    title: "Discover",
    text: "We learn how your business operates, where opportunities may be lost, and what goals matter most.",
  },
  {
    icon: FiBarChart2,
    number: "02",
    title: "Analyze",
    text: "We review the customer journey, revenue flow, technology, operations, and employee experience.",
  },
  {
    icon: FiMap,
    number: "03",
    title: "Strategize",
    text: "We identify priorities and develop a practical roadmap based on your business needs.",
  },
  {
    icon: FiTool,
    number: "04",
    title: "Implement",
    text: "We help put the right strategies, systems, tools, and solutions into action.",
  },
];

const whyItems = [
  {
    icon: FiSearch,
    title: "We Diagnose Before We Prescribe™",
    text: "We do not begin by pushing a product. We begin by understanding the business.",
  },
  {
    icon: FiTarget,
    title: "Business-First Thinking",
    text: "Every recommendation must connect to a real business goal, challenge, or opportunity.",
  },
  {
    icon: FiTool,
    title: "Practical Solutions",
    text: "We focus on systems and strategies that business owners and teams can realistically use.",
  },
  {
    icon: FiLayers,
    title: "Connected Growth Systems",
    text: "We help create an integrated business infrastructure instead of disconnected tools.",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="hero-background-shape hero-background-shape-one" />
        <div className="hero-background-shape hero-background-shape-two" />

        <div className="page-container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">
              12 Stone Consulting • Business Growth Strategists
            </span>

            <h1>
              Is Your Business Losing Revenue...
              <span>Without Realizing It?</span>
            </h1>

            <p className="hero-lead">
              Most businesses do not have a lead problem.
              <strong> They have an opportunity management problem.</strong>
            </p>

            <p className="hero-supporting-text">
              12 Stone Consulting helps small businesses uncover hidden revenue
              opportunities, improve operations, strengthen customer experience,
              implement practical AI, and build stronger teams.
            </p>

            <div className="hero-actions">
              <Link to="/assessment" className="button button-primary">
                Request Your Executive Business Opportunity Brief™
                <FiArrowRight />
              </Link>

              <Link to="/business-growth-system" className="button button-secondary">
                Explore the Growth System
              </Link>
            </div>

            <div className="hero-trust-list">
              <span>
                <FiCheckCircle />
                Business First
              </span>

              <span>
                <FiCheckCircle />
                Strategy Before Technology
              </span>

              <span>
                <FiCheckCircle />
                Practical Growth Solutions
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-dashboard">
              <div className="dashboard-topline">
                <div>
                  <span className="panel-label">Business Growth System™</span>
                  <h2>Turn Hidden Opportunities Into Business Growth.</h2>
                </div>

                <div className="dashboard-status">
                  <span className="status-dot" />
                  Growth Review
                </div>
              </div>

              <div className="dashboard-score-card">
                <div>
                  <span>Business Opportunity Score</span>
                  <strong>Growth Potential</strong>
                </div>

                <div className="score-circle">
                  <span>+</span>
                </div>
              </div>

              <div className="dashboard-metrics">
                <div className="dashboard-metric">
                  <span className="metric-icon">
                    <FiDollarSign />
                  </span>
                  <div>
                    <small>Revenue</small>
                    <strong>Opportunities</strong>
                  </div>
                </div>

                <div className="dashboard-metric">
                  <span className="metric-icon">
                    <FiActivity />
                  </span>
                  <div>
                    <small>Operations</small>
                    <strong>Efficiency</strong>
                  </div>
                </div>

                <div className="dashboard-metric">
                  <span className="metric-icon">
                    <FiUserCheck />
                  </span>
                  <div>
                    <small>Workforce</small>
                    <strong>Retention</strong>
                  </div>
                </div>
              </div>

              <div className="dashboard-opportunity-list">
                <div className="dashboard-opportunity">
                  <span>Customer Follow-Up</span>
                  <div className="opportunity-bar">
                    <span style={{ width: "78%" }} />
                  </div>
                </div>

                <div className="dashboard-opportunity">
                  <span>Operational Efficiency</span>
                  <div className="opportunity-bar">
                    <span style={{ width: "64%" }} />
                  </div>
                </div>

                <div className="dashboard-opportunity">
                  <span>Employee Experience</span>
                  <div className="opportunity-bar">
                    <span style={{ width: "71%" }} />
                  </div>
                </div>
              </div>

              <div className="dashboard-footer">
                <FiCheckCircle />
                We diagnose before recommending solutions.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-intro-strip">
        <div className="page-container">
          <div className="intro-strip-content">
            <span>Grow Revenue</span>
            <span>Improve Operations</span>
            <span>Strengthen Your Team</span>
          </div>
        </div>
      </section>

      <section className="revenue-leakage-section section-padding">
        <div className="page-container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow">Revenue Leakage™</span>
            <h2>Hidden Revenue Often Starts Inside the Business.</h2>
            <p>
              Before spending more money on advertising, it is important to
              identify where customers, opportunities, time, and revenue may
              already be escaping.
            </p>
          </div>

          <div className="revenue-leakage-grid">
            {revenueLeakageItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="revenue-leakage-card" key={item.title}>
                  <div className="card-icon">
                    <Icon />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>

          <div className="revenue-leakage-statement">
            <div className="statement-icon">
              <FiTrendingUp />
            </div>

            <div>
              <span>Our Perspective</span>
              <h3>
                Your next dollar may already be inside your business.
              </h3>
              <p>
                Growth does not always begin with generating more leads. It may
                begin by improving how your business manages the opportunities,
                customers, employees, and systems it already has.
              </p>
            </div>
          </div>
        </div>
      </section>

     <section className="business-growth-system section-padding">

  <div className="page-container">

    <div className="section-heading section-heading-centered">

      <span className="eyebrow">
        The 12 Stone Business Growth System™
      </span>

      <h2>
        Every Recommendation We Make Helps Your Business Do One of Three Things.
      </h2>

      <p>
        We don't begin with products. We begin with your business. Every recommendation is designed to help your business grow, improve, or strengthen.
      </p>

    </div>

    <div className="growth-framework">

      <div className="framework-item">

        <div className="framework-icon">
          <FiTrendingUp/>
        </div>

        <h3>Grow</h3>

        <p>
          Revenue • Customers • Profit
        </p>

      </div>

      <div className="framework-line"></div>

      <div className="framework-item">

        <div className="framework-icon">
          <FiSettings/>
        </div>

        <h3>Improve</h3>

        <p>
          Operations • AI • Automation • Customer Experience
        </p>

      </div>

      <div className="framework-line"></div>

      <div className="framework-item">

        <div className="framework-icon">
          <FiUsers/>
        </div>

        <h3>Strengthen</h3>

        <p>
          Employees • Leadership • Stability
        </p>

      </div>

    </div>

    <div className="pillar-grid">

      <article className="pillar-card">

        <h3>📈 Grow</h3>

        <p>
          Increase revenue by identifying hidden opportunities already inside your business.
        </p>

        <ul>

          <li>Revenue Growth Systems™</li>

          <li>Customer Acquisition</li>

          <li>Referral Growth</li>

          <li>Smart Website™</li>

        </ul>

      </article>

      <article className="pillar-card">

        <h3>⚙ Improve</h3>

        <p>
          Build smarter systems that improve efficiency, communication and customer experience.
        </p>

        <ul>

          <li>Automation</li>

          <li>AI Big 3™</li>

          <li>CRM</li>

          <li>Workflow Optimization</li>

        </ul>

      </article>

      <article className="pillar-card">

        <h3>👥 Strengthen</h3>

        <p>
          Build a stronger workforce and stronger business through employee growth strategies.
        </p>

        <ul>

          <li>Employee Growth Solutions™</li>

          <li>Leadership</li>

          <li>KonnectMD</li>

          <li>Long-Term Business Value</li>

        </ul>

      </article>

    </div>

    <div className="business-first-banner">

      <h3>Business First. Always.</h3>

      <p>

        We Diagnose Before We Prescribe™. We begin by understanding your business, then recommend the right strategy, technology, systems, or employee growth solutions.

      </p>

    </div>

  </div>

</section>

      <section className="expertise-section section-padding">
        <div className="page-container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow">Business Growth Expertise</span>
            <h2>Solutions Built Around the Business.</h2>
            <p>
              Every business is different. Our areas of expertise work together
              to address the specific challenges, goals, and opportunities
              uncovered during the discovery process.
            </p>
          </div>

          <div className="expertise-grid">
            {expertiseItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="expertise-card" key={item.title}>
                  <div className="expertise-card-icon">
                    <Icon />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  <Link to={item.link} className="text-link">
                    Learn More
                    <FiArrowRight />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="process-section section-padding">
        <div className="page-container">
          <div className="process-layout">
            <div className="process-intro">
              <span className="eyebrow">Our Consulting Process</span>
              <h2>We Diagnose Before We Prescribe™</h2>

              <p>
                We do not begin with a website, software platform, AI tool, or
                employee program. We begin by understanding the business.
              </p>

              <p>
                The Executive Business Opportunity Brief™ helps identify where
                revenue may be leaking, where operations can improve, and which
                opportunities deserve priority.
              </p>

              <Link to="/assessment" className="button button-primary">
                Begin Your Business Review
                <FiArrowRight />
              </Link>
            </div>

            <div className="process-steps">
              {processSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article className="process-step" key={step.title}>
                    <div className="process-step-number">{step.number}</div>

                    <div className="process-step-icon">
                      <Icon />
                    </div>

                    <div className="process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="employee-growth-section section-padding">
        <div className="page-container employee-growth-container">
          <div className="employee-growth-content">
            <span className="eyebrow">Employee Growth Solutions™</span>

            <h2>Strong Businesses Are Built by Strong Teams.</h2>

            <p className="employee-growth-lead">
              Recruiting good employees is difficult. Replacing experienced
              employees is expensive. Helping your team feel supported can
              strengthen retention, morale, productivity, and customer service.
            </p>

            <p>
              Through Employee Growth Solutions™, 12 Stone Consulting helps
              businesses explore practical workforce strategies and innovative
              healthcare membership options through KonnectMD.
            </p>

            <div className="employee-benefit-grid">
              <div>
                <FiCheckCircle />
                Improve employee recruitment
              </div>

              <div>
                <FiCheckCircle />
                Strengthen employee retention
              </div>

              <div>
                <FiCheckCircle />
                Support employees and families
              </div>

              <div>
                <FiCheckCircle />
                Provide 24/7 virtual care access
              </div>

              <div>
                <FiCheckCircle />
                Include mental wellness support
              </div>

              <div>
                <FiCheckCircle />
                Reduce prescription costs
              </div>
            </div>

            <Link to="/solutions/employee-growth" className="button button-primary">
              Explore Employee Growth Solutions
              <FiArrowRight />
            </Link>
          </div>

          <div className="employee-growth-visual">
            <div className="employee-growth-card">
              <div className="employee-growth-card-header">
                <span className="employee-growth-icon">
                  <FiHeart />
                </span>

                <div>
                  <span>Workforce Stability</span>
                  <h3>Support the People Who Support Your Business.</h3>
                </div>
              </div>

              <div className="employee-growth-stat">
                <div>
                  <small>Business Impact</small>
                  <strong>Recruit. Retain. Strengthen.</strong>
                </div>

                <FiTrendingUp />
              </div>

              <div className="employee-growth-feature">
                <FiActivity />
                <div>
                  <strong>Healthcare Access</strong>
                  <span>Practical support for employees and families.</span>
                </div>
              </div>

              <div className="employee-growth-feature">
                <FiUsers />
                <div>
                  <strong>Employee Experience</strong>
                  <span>Benefits that help employees feel valued.</span>
                </div>
              </div>

              <div className="employee-growth-feature">
                <FiShield />
                <div>
                  <strong>Business Stability</strong>
                  <span>Stronger teams can create stronger businesses.</span>
                </div>
              </div>

              <div className="powered-by">
                Employee Growth Solutions™
                <span>Supported by KonnectMD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section section-padding">
        <div className="page-container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow">Why 12 Stone Consulting</span>
            <h2>Strategy Before Solutions.</h2>
            <p>
              Business owners do not need another company trying to sell them
              something. They need a trusted resource that can help them
              understand what the business actually needs.
            </p>
          </div>

          <div className="why-grid">
            {whyItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="why-card" key={item.title}>
                  <div className="why-card-icon">
                    <Icon />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="opportunity-brief-section section-padding">
        <div className="page-container opportunity-brief-container">
          <div className="opportunity-brief-content">
            <span className="eyebrow">Executive Business Opportunity Brief™</span>

            <h2>
              Discover What May Be Holding Your Business Back.
            </h2>

            <p>
              Complete our complimentary business overview to identify possible
              revenue leaks, operational inefficiencies, customer experience
              gaps, workforce challenges, and opportunities for practical
              growth.
            </p>

            <div className="opportunity-brief-points">
              <span>
                <FiCheckCircle />
                Review potential revenue leakage
              </span>

              <span>
                <FiCheckCircle />
                Identify operational opportunities
              </span>

              <span>
                <FiCheckCircle />
                Evaluate customer experience gaps
              </span>

              <span>
                <FiCheckCircle />
                Explore employee growth opportunities
              </span>
            </div>
          </div>

          <div className="opportunity-brief-action">
            <span>Complimentary Business Overview</span>
            <h3>Start With Clarity.</h3>
            <p>
              Learn where your business may have the greatest opportunity for
              improvement before investing in another solution.
            </p>

            <Link to="/assessment" className="button button-light">
              Request Your Brief
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
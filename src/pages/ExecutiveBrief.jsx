import { useState } from "react";
import "../styles/executiveBrief.css";
import { useNavigate } from "react-router-dom";



export default function ExecutiveBrief() {

  const [step, setStep] = useState(0);
  const [validationMessage, setValidationMessage] = useState("");
const navigate = useNavigate();
 const [formData, setFormData] = useState({
  // Step 1
  businessName: "",
  contactName: "",
  title: "",
  email: "",
  phone: "",
  website: "",
  industry: "",
  employees: "",
  yearsInBusiness: "",
  annualRevenue: "",

 // Step 2
revenueGrowth: "",
newCustomers: "",
followUp: "",
retention: "",
referrals: "",
salesProcess: "",

// Step 3
websiteScore: "",
reviews: "",
response: "",
communication: "",
customerFollowup: "",
customerSatisfaction: "",

// Step 4
scheduling: "",
workflow: "",
automation: "",
crm: "",
reporting: "",
operationsScore: "",

// Step 5
recruiting: "",
retentionEmployees: "",
leadership: "",
morale: "",
benefits: "",
teamStrength: "",

// Step 6
websiteTech: "",
crmTech: "",
ai: "",
texting: "",
phoneSystem: "",
technologyScore: "",

// Step 7
primaryGoal: "",
biggestChallenge: "",
interest: "",
strategySession: "",


});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

/*==========================================
VALIDATE CURRENT STEP
==========================================*/

const validateStep = () => {

  switch(step){

    case 1:
      return (
        formData.businessName.trim() &&
        formData.contactName.trim() &&
        formData.email.trim() &&
        formData.phone.trim()
      );

    case 2:
      return (
        formData.revenueGrowth &&
        formData.newCustomers &&
        formData.followUp &&
        formData.retention &&
        formData.referrals &&
        formData.salesProcess
      );

    case 3:
      return (
        formData.websiteScore &&
        formData.reviews &&
        formData.response &&
        formData.communication &&
        formData.customerFollowup &&
        formData.customerSatisfaction
      );

    case 4:
      return (
        formData.scheduling &&
        formData.workflow &&
        formData.automation &&
        formData.crm &&
        formData.reporting &&
        formData.operationsScore
      );

    case 5:
      return (
        formData.recruiting &&
        formData.retentionEmployees &&
        formData.leadership &&
        formData.morale &&
        formData.benefits &&
        formData.teamStrength
      );

    case 6:
      return (
        formData.websiteTech &&
        formData.crmTech &&
        formData.ai &&
        formData.texting &&
        formData.phoneSystem &&
        formData.technologyScore
      );

    case 7:
      return (
        formData.primaryGoal &&
        formData.biggestChallenge &&
        formData.interest
      );

    default:
      return true;
  }

};

const handleNext = () => {

  if (!validateStep()) {

    setValidationMessage(
  "Please complete all required questions before continuing."
);

    return;

  }

  setStep(step + 1);
  setValidationMessage("");

};

return (
   <main className="brief-page">

  <div className="brief-layout">

    {/* ==========================================
        SIDEBAR
    ========================================== */}

    <aside className="brief-sidebar">

      <div className="sidebar-logo">

    <span className="eyebrow">
        Business Growth IQ™
    </span>

    <h2>
        Executive Growth Dashboard
    </h2>

    <div className="sidebar-score">

        <span className="score-number">
            {Math.round(((step + 1) / 9) * 100)}
        </span>

        <small>% Complete</small>

    </div>

    <div className="sidebar-mini-progress">

        <div
            className="sidebar-mini-progress-fill"
            style={{
                width: `${((step + 1) / 9) * 100}%`,
            }}
        />

    </div>

    <div className="sidebar-time">

        ⏱ Approximately {Math.max(1,9-step)} Minutes Remaining

    </div>

</div>

      <nav className="sidebar-nav">

        <div className={step >= 0 ? "nav-item active" : "nav-item"}>
          <span>{step > 0 ? "✓" : "1"}</span>
          Welcome
        </div>

        <div className={step >= 1 ? "nav-item active" : "nav-item"}>
          <span>{step > 1 ? "✓" : "2"}</span>
          Business Information
        </div>

        <div className={step >= 2 ? "nav-item active" : "nav-item"}>
          <span>{step > 2 ? "✓" : "3"}</span>
          Business Growth
        </div>

        <div className={step >= 3 ? "nav-item active" : "nav-item"}>
          <span>{step > 3 ? "✓" : "4"}</span>
          Customer Experience
        </div>

        <div className={step >= 4 ? "nav-item active" : "nav-item"}>
          <span>{step > 4 ? "✓" : "5"}</span>
          Operations
        </div>

        <div className={step >= 5 ? "nav-item active" : "nav-item"}>
          <span>{step > 5 ? "✓" : "6"}</span>
          Employee Growth
        </div>

        <div className={step >= 6 ? "nav-item active" : "nav-item"}>
          <span>{step > 6 ? "✓" : "7"}</span>
          Technology
        </div>

        <div className={step >= 7 ? "nav-item active" : "nav-item"}>
          <span>{step > 7 ? "✓" : "8"}</span>
          Priorities
        </div>

        <div className={step >= 8 ? "nav-item active" : "nav-item"}>
          <span>9</span>
          Summary
        </div>

      </nav>

    </aside>

    <div className="brief-container">

        {/* ==========================================
            HEADER
        ========================================== */}

       <header className="brief-header">

    <span className="eyebrow">
        Powered by 12 Stone Smart Websites™
    </span>

    <h1>
        Discover Hidden Revenue Already Inside Your Business
    </h1>

    <p className="brief-lead">

        Complete this complimentary Business Growth IQ™ Assessment to uncover
        revenue opportunities, operational improvements, AI automation potential,
        and growth strategies customized for your business.

    </p>

    <div className="brief-trust">

        <div className="trust-card">

            <h3>📈 Grow</h3>

            <p>
                Find hidden revenue opportunities.
            </p>

        </div>

        <div className="trust-card">

            <h3>⚙ Improve</h3>

            <p>
                Streamline operations with smarter systems.
            </p>

        </div>

        <div className="trust-card">

            <h3>🤖 Automate</h3>

            <p>
                Discover where AI can save time and money.
            </p>

        </div>

    </div>

</header>

        {/* ==========================================
            PROGRESS BAR
        ========================================== */}

       <div className="executive-progress">

  <div className="progress-top">

    <div>

      <span className="progress-label">
        Business Growth IQ™ Assessment
      </span>

      <h3>
        Step {step + 1} of 9
      </h3>

    </div>

    <div className="progress-percent">
      {Math.round(((step + 1) / 9) * 100)}%
    </div>

  </div>

  <div className="progress-wrapper">

    <div
      className="progress-bar"
      style={{
        width: `${((step + 1) / 9) * 100}%`,
      }}
    />

  </div>

  <div className="progress-footer">

    <span>
      Estimated Time Remaining
    </span>

    <strong>
      {Math.max(1, 9 - step)} Minutes
    </strong>

  </div>

</div>

  
       <div className="rating-legend">

  <strong>Rating Guide:</strong>

  <span>1 • Needs Improvement</span>

  <span>2 • Fair</span>

  <span>3 • Good</span>

  <span>4 • Very Good</span>

  <span>5 • Excellent</span>

</div>

{/* ==========================================
    STEP 0 — WELCOME
========================================== */}

{step === 0 && (

<>

<section className="brief-welcome">

    <span className="welcome-badge">
        Powered by 12 Stone Smart Websites™
    </span>

    <h1>
        Discover Hidden Revenue Already Inside Your Business.
    </h1>

    <p className="welcome-lead">

        Complete this complimentary Business Growth IQ™ Assessment and
        receive a personalized Executive Business Opportunity Brief™
        highlighting hidden revenue opportunities, operational improvements,
        AI automation potential, employee growth strategies, and a practical
        roadmap for growing your business.

    </p>

    <div className="welcome-grid">

        <div className="welcome-card">

            <div className="card-icon">📈</div>

            <h3>Grow Revenue</h3>

            <p>
                Discover overlooked opportunities to generate additional
                revenue from your existing business.
            </p>

        </div>

        <div className="welcome-card">

            <div className="card-icon">⚙️</div>

            <h3>Improve Operations</h3>

            <p>
                Identify bottlenecks, inefficient workflows and opportunities
                to improve customer experience.
            </p>

        </div>

        <div className="welcome-card">

            <div className="card-icon">🤖</div>

            <h3>Leverage AI</h3>

            <p>
                Learn where AI and automation can reduce costs,
                improve response times and increase profitability.
            </p>

        </div>

    </div>

    <button
        className="begin-button"
        onClick={() => setStep(1)}
    >
        Begin Business Growth IQ™ Assessment →
    </button>

    <small>
        Average completion time:
        <strong> 8–10 minutes</strong>
    </small>

</section>

<section className="deliverables-panel">

    <div className="deliverables-header">

        <span className="deliverables-badge">
            Included With Your Assessment
        </span>

        <h2>
            Your Executive Business Growth Package™
        </h2>

        <p>
            Every completed assessment generates a customized business growth
            analysis designed to help identify opportunities, prioritize
            improvements, and accelerate growth.
        </p>

    </div>

    <div className="deliverables-grid">

        <div className="deliverable-card">
            <span>📊</span>
            <h3>Executive Business Opportunity Brief™</h3>
            <p>A personalized overview of your business growth opportunities.</p>
        </div>

        <div className="deliverable-card">
            <span>💰</span>
            <h3>Hidden Revenue Analysis™</h3>
            <p>Discover areas where additional revenue may already exist.</p>
        </div>

        <div className="deliverable-card">
            <span>🤖</span>
            <h3>AI Opportunity Review™</h3>
            <p>See where automation and AI can improve efficiency.</p>
        </div>

        <div className="deliverable-card">
            <span>👥</span>
            <h3>Employee Growth Review™</h3>
            <p>Identify opportunities to improve hiring, retention, and team performance.</p>
        </div>

        <div className="deliverable-card">
            <span>📈</span>
            <h3>90-Day Business Growth Blueprint™</h3>
            <p>A practical roadmap focused on the highest-impact improvements.</p>
        </div>

        <div className="deliverable-card">
            <span>🎯</span>
            <h3>Complimentary Strategy Session™</h3>
            <p>Review your report with a Business Growth Strategist.</p>
        </div>

    </div>

</section>

</>

)}



{/* ==========================================
    STEP 1 — BUSINESS INFORMATION
========================================== */}

{step === 1 && (

<section className="brief-section">

  <div className="section-title">

    <span className="step-number">
      Step 1 of 8
    </span>

    <h2>Business Information</h2>

    <p>
      Let's begin by learning a little about your business. This information
      helps us personalize your Executive Business Opportunity Brief™.
    </p>

  </div>

  <div className="brief-grid">

    {/* Business Name */}

    <div className="form-group">

      <label>Business Name *</label>

      <input
        type="text"
        name="businessName"
        value={formData.businessName}
        onChange={handleChange}
        placeholder="ABC Heating & Air"
      />

    </div>

    {/* Contact Name */}

    <div className="form-group">

      <label>Contact Name *</label>

      <input
        type="text"
        name="contactName"
        value={formData.contactName}
        onChange={handleChange}
        placeholder="John Smith"
      />

    </div>

    {/* Title */}

    <div className="form-group">

      <label>Title</label>

      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Owner / President"
      />

    </div>

    {/* Email */}

    <div className="form-group">

      <label>Email *</label>

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="john@email.com"
      />

    </div>

    {/* Phone */}

    <div className="form-group">

      <label>Phone *</label>

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="(757) 555-1212"
      />

    </div>

    {/* Website */}

    <div className="form-group">

      <label>Website</label>

      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        placeholder="https://www.company.com"
      />

    </div>

    {/* Industry */}

    <div className="form-group">

      <label>Industry *</label>

      <select
        name="industry"
        value={formData.industry}
        onChange={handleChange}
      >

        <option value="">Select Industry</option>

        <option>HVAC</option>
        <option>Plumbing</option>
        <option>Electrical</option>
        <option>Roofing</option>
        <option>Construction</option>
        <option>Landscaping</option>
        <option>Pest Control</option>
        <option>Cleaning Services</option>
        <option>Medical</option>
        <option>Legal</option>
        <option>Accounting</option>
        <option>Real Estate</option>
        <option>Financial Services</option>
        <option>Insurance</option>
        <option>Manufacturing</option>
        <option>Retail</option>
        <option>Restaurant</option>
        <option>Professional Services</option>
        <option>Other</option>

      </select>

    </div>

    {/* Employees */}

    <div className="form-group">

      <label>Employees</label>

      <select
        name="employees"
        value={formData.employees}
        onChange={handleChange}
      >

        <option value="">Select Employees</option>

        <option>Just Me</option>
        <option>2–5</option>
        <option>6–10</option>
        <option>11–25</option>
        <option>26–50</option>
        <option>51–100</option>
        <option>100+</option>

      </select>

    </div>

    {/* Years */}

    <div className="form-group">

      <label>Years in Business</label>

      <select
        name="yearsInBusiness"
        value={formData.yearsInBusiness}
        onChange={handleChange}
      >

        <option value="">Select</option>

        <option>Startup</option>
        <option>1–3 Years</option>
        <option>4–10 Years</option>
        <option>11–20 Years</option>
        <option>20+ Years</option>

      </select>

    </div>

    {/* Revenue */}

    <div className="form-group">

      <label>Annual Revenue (Optional)</label>

      <select
        name="annualRevenue"
        value={formData.annualRevenue}
        onChange={handleChange}
      >

        <option value="">Prefer not to answer</option>

        <option>Under $250K</option>
        <option>$250K – $500K</option>
        <option>$500K – $1M</option>
        <option>$1M – $5M</option>
        <option>$5M+</option>

      </select>

    </div>

  </div>

</section>

)}

{/* ==========================================
    STEP 2 — BUSINESS GROWTH
========================================== */}

{step === 2 && (

<section className="brief-section">

  <div className="section-title">

    <span className="step-number">
      Step 2 of 8
    </span>

    <h2>Business Growth</h2>

    <p>
      Help us understand how your business is performing in these key growth
      areas.
    </p>

  </div>

  <div className="brief-grid">

    <div className="form-group">

      <label>Revenue Growth</label>

      <select
        name="revenueGrowth"
        value={formData.revenueGrowth || ""}
        onChange={handleChange}
      >

        <option value="">Select Rating</option>

        <option value="1">1 - Needs Significant Improvement</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>

      </select>

    </div>

    <div className="form-group">

      <label>New Customer Growth</label>

      <select
        name="newCustomers"
        value={formData.newCustomers || ""}
        onChange={handleChange}
      >

        <option value="">Select Rating</option>

        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>

      </select>

    </div>

    <div className="form-group">

      <label>Lead Follow-up</label>

      <select
        name="followUp"
        value={formData.followUp || ""}
        onChange={handleChange}
      >

        <option value="">Select Rating</option>

        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>

      </select>

    </div>

    <div className="form-group">

      <label>Customer Retention</label>

      <select
        name="retention"
        value={formData.retention || ""}
        onChange={handleChange}
      >

        <option value="">Select Rating</option>

        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>

      </select>

    </div>

    <div className="form-group">

      <label>Referral Generation</label>

      <select
        name="referrals"
        value={formData.referrals || ""}
        onChange={handleChange}
      >

        <option value="">Select Rating</option>

        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>

      </select>

    </div>

    <div className="form-group">

      <label>Sales Process</label>

      <select
        name="salesProcess"
        value={formData.salesProcess || ""}
        onChange={handleChange}
      >

        <option value="">Select Rating</option>

        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>

      </select>

    </div>

  </div>

</section>

)}


{/* ==========================================
    STEP 3 — CUSTOMER EXPERIENCE
========================================== */}

{/* ==========================================
    STEP 3 — CUSTOMER EXPERIENCE
========================================== */}

{step === 3 && (

<section className="brief-section">

  <div className="section-title">

    <span className="step-number">
      Step 3 of 8
    </span>

    <h2>Customer Experience</h2>

    <p>
      Your customers often determine the long-term success of your business.
      Rate the following areas.
    </p>

  </div>

  <div className="brief-grid">

    <div className="form-group">
      <label>Website Effectiveness</label>

      <select
        name="websiteScore"
        value={formData.websiteScore}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1 - Needs Improvement</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>
    </div>

    <div className="form-group">
      <label>Online Reviews</label>

      <select
        name="reviews"
        value={formData.reviews}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>

    <div className="form-group">
      <label>Customer Response Time</label>

      <select
        name="response"
        value={formData.response}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>

    <div className="form-group">
      <label>Customer Communication</label>

      <select
        name="communication"
        value={formData.communication}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>

    <div className="form-group">
      <label>Customer Follow-Up</label>

      <select
        name="customerFollowup"
        value={formData.customerFollowup}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>

    <div className="form-group">
      <label>Overall Customer Satisfaction</label>

      <select
        name="customerSatisfaction"
        value={formData.customerSatisfaction}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>

  </div>

</section>

)}
{/* ==========================================
    STEP 4 — OPERATIONS
========================================== */}

{step === 4 && (

<section className="brief-section">

  <div className="section-title">

    <span className="step-number">
      Step 4 of 8
    </span>

    <h2>Business Operations</h2>

    <p>
      Efficient operations create a stronger customer experience and improve
      profitability.
    </p>

  </div>

  <div className="brief-grid">

    <div className="form-group">
      <label>Scheduling Process</label>

      <select
        name="scheduling"
        value={formData.scheduling}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1 - Needs Improvement</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>

    </div>

    <div className="form-group">

      <label>Workflow Efficiency</label>

      <select
        name="workflow"
        value={formData.workflow}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

    </div>

    <div className="form-group">

      <label>Business Automation</label>

      <select
        name="automation"
        value={formData.automation}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

    </div>

    <div className="form-group">

      <label>CRM / Lead Management</label>

      <select
        name="crm"
        value={formData.crm}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

    </div>

    <div className="form-group">

      <label>Business Reporting</label>

      <select
        name="reporting"
        value={formData.reporting}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

    </div>

    <div className="form-group">

      <label>Overall Operational Efficiency</label>

      <select
        name="operationsScore"
        value={formData.operationsScore}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

    </div>

  </div>

</section>

)}

{/* ==========================================
    STEP 5 — EMPLOYEE GROWTH
========================================== */}

{step === 5 && (

<section className="brief-section">

  <div className="section-title">

    <span className="step-number">
      Step 5 of 8
    </span>

    <h2>Employee Growth</h2>

    <p>
      Strong businesses are built by strong teams. Help us understand your
      current workforce challenges.
    </p>

  </div>

  <div className="brief-grid">

    <div className="form-group">

      <label>Recruiting New Employees</label>

      <select
        name="recruiting"
        value={formData.recruiting}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1 - Very Difficult</option>
        <option value="2">2 - Difficult</option>
        <option value="3">3 - Average</option>
        <option value="4">4 - Good</option>
        <option value="5">5 - Excellent</option>
      </select>

    </div>

    <div className="form-group">

      <label>Employee Retention</label>

      <select
        name="retentionEmployees"
        value={formData.retentionEmployees}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

    </div>

    <div className="form-group">

      <label>Leadership Development</label>

      <select
        name="leadership"
        value={formData.leadership}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

    </div>

    <div className="form-group">

      <label>Employee Morale</label>

      <select
        name="morale"
        value={formData.morale}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

    </div>

    <div className="form-group">

      <label>Employee Benefits</label>

      <select
        name="benefits"
        value={formData.benefits}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

    </div>

    <div className="form-group">

      <label>Overall Team Strength</label>

      <select
        name="teamStrength"
        value={formData.teamStrength}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

    </div>

  </div>

</section>

)}

{/* ==========================================
    STEP 6 — TECHNOLOGY & AI
========================================== */}

{step === 6 && (

<section className="brief-section">

  <div className="section-title">

    <span className="step-number">
      Step 6 of 8
    </span>

    <h2>Technology & AI</h2>

    <p>
      Technology should simplify your business, improve customer experience,
      and create efficiency—not add more work.
    </p>

  </div>

  <div className="brief-grid">

    <div className="form-group">

      <label>Website Performance</label>

      <select
        name="websiteTech"
        value={formData.websiteTech}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1 - Needs Improvement</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>

    </div>

    <div className="form-group">

      <label>CRM Utilization</label>

      <select
        name="crmTech"
        value={formData.crmTech}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

    </div>

    <div className="form-group">

      <label>AI & Automation Usage</label>

      <select
        name="ai"
        value={formData.ai}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">Not Using AI</option>
        <option value="2">Very Limited</option>
        <option value="3">Some AI</option>
        <option value="4">Using AI Regularly</option>
        <option value="5">AI is Core to Our Business</option>
      </select>

    </div>

    <div className="form-group">

      <label>Text / Email Automation</label>

      <select
        name="texting"
        value={formData.texting}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

    </div>

    <div className="form-group">

      <label>Phone & Customer Communication</label>

      <select
        name="phoneSystem"
        value={formData.phoneSystem}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

    </div>

    <div className="form-group">

      <label>Overall Technology Readiness</label>

      <select
        name="technologyScore"
        value={formData.technologyScore}
        onChange={handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

    </div>

  </div>

</section>

)}
{/* ==========================================
    STEP 7 — BUSINESS PRIORITIES
========================================== */}

{step === 7 && (

<section className="brief-section">

  <div className="section-title">

    <span className="step-number">
      Step 7 of 8
    </span>

    <h2>Your Business Priorities</h2>

    <p>
      Every business is different. Tell us what matters most to you over the
      next 12 months.
    </p>

  </div>

  <div className="brief-grid">

    <div className="form-group">

      <label>Primary Business Goal</label>

      <select
        name="primaryGoal"
        value={formData.primaryGoal}
        onChange={handleChange}
      >
        <option value="">Select One</option>
        <option>Increase Revenue</option>
        <option>Generate More Leads</option>
        <option>Improve Customer Experience</option>
        <option>Improve Operations</option>
        <option>Recruit Better Employees</option>
        <option>Retain Employees</option>
        <option>Implement AI</option>
        <option>Increase Profitability</option>
      </select>

    </div>

    <div className="form-group">

      <label>Biggest Challenge</label>

      <select
        name="biggestChallenge"
        value={formData.biggestChallenge}
        onChange={handleChange}
      >
        <option value="">Select One</option>
        <option>Finding New Customers</option>
        <option>Following Up With Leads</option>
        <option>Hiring Employees</option>
        <option>Keeping Employees</option>
        <option>Technology</option>
        <option>Marketing</option>
        <option>Time Management</option>
        <option>Operations</option>
      </select>

    </div>

    <div className="form-group">

      <label>Interested In Learning More About</label>

      <select
        name="interest"
        value={formData.interest}
        onChange={handleChange}
      >
        <option value="">Select One</option>
        <option>Smart Website™</option>
        <option>AI Big 3™</option>
        <option>Business Automation™</option>
        <option>Employee Growth Solutions™</option>
        <option>Revenue Growth Strategy™</option>
        <option>Everything</option>
      </select>

    </div>

    <div className="form-group">

      <label>Would You Like a Complimentary Strategy Session?</label>

      <select
        name="strategySession"
        value={formData.strategySession}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option>Yes</option>
        <option>No</option>
      </select>

    </div>

  </div>

</section>

)}

{/* ==========================================
    STEP 8 — REVIEW & SUBMIT
========================================== */}

{step === 8 && (

<section className="brief-section">

  <div className="section-title">

    <span className="step-number">
      Final Step
    </span>

    <h2>You're Almost Finished!</h2>

    <p>
      Thank you for completing your Business Growth IQ™ Assessment.
      Before generating your Executive Business Opportunity Brief™, here's what we've completed.
    </p>

  </div>

  <div className="summary-card">

    <h3>Assessment Complete</h3>

    <ul className="summary-checklist">

      <li>✅ Business Information Reviewed</li>

      <li>✅ Business Growth Evaluated</li>

      <li>✅ Customer Experience Evaluated</li>

      <li>✅ Business Operations Reviewed</li>

      <li>✅ Employee Growth Reviewed</li>

      <li>✅ Technology & AI Readiness Reviewed</li>

      <li>✅ Business Priorities Identified</li>

    </ul>

  </div>

  <div className="summary-card">

    <h3>Your Executive Business Opportunity Brief™ Will Include</h3>

    <ul className="summary-checklist">

      <li>📈 Revenue Growth Opportunities</li>

      <li>⚙ Operational Improvement Recommendations</li>

      <li>🤝 Customer Experience Insights</li>

      <li>👥 Employee Growth Recommendations</li>

      <li>🤖 AI & Technology Opportunities</li>

      <li>📊 Business Opportunity Score™</li>

      <li>🎯 Executive Recommendations</li>

    </ul>

  </div>

  <div className="summary-card">

    <h3>Next Step</h3>

    <p>

      Click the button below to generate your complimentary
      Executive Business Opportunity Brief™.

    </p>

  </div>

</section>

)}

        {/* ==========================================
            NAVIGATION
        ========================================== */}

        <div className="brief-buttons">

          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
            >
              Previous
            </button>
          )}

          {step < 8 ? (
         <button
  onClick={handleNext}
>
  Next
</button>
          ) : (
           <button
  onClick={() =>
    navigate("/snapshot", {
      state: formData,
    })
  }
>
  Generate My Executive Business Opportunity Brief™
</button>
          )}

        </div>
  </div> 
      </div>
    </main>
  );
}
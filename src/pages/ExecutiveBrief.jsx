import { useState } from "react";
import "../styles/executiveBrief.css";
import { useNavigate } from "react-router-dom";



export default function ExecutiveBrief() {

  const [step, setStep] = useState(0);
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

  return (
   <main className="brief-page">

  <div className="brief-layout">

    {/* ==========================================
        SIDEBAR
    ========================================== */}

    <aside className="brief-sidebar">

      <div className="sidebar-logo">

        <span className="eyebrow">
          12 Stone Consulting
        </span>

        <h2>
          Executive Business Opportunity Review™
        </h2>

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
            12 Stone Consulting
          </span>

          <h1>
            Business Growth IQ™ Assessment
          </h1>

          <p>
           Complete this assessment to receive your personalized
Executive Business Opportunity Brief™.
          </p>

        </header>

        {/* ==========================================
            PROGRESS BAR
        ========================================== */}

        <div className="progress-wrapper">

          <div
            className="progress-bar"
            style={{
              width: `${(step / 8) * 100}%`,
            }}
          />

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

<section className="brief-welcome">

  <div className="welcome-badge">
    12 Stone Consulting
  </div>

  <h1>
    Business Growth IQ™ Assessment
  </h1>

  <p className="welcome-lead">
    Every business has hidden opportunities.
    This complimentary assessment helps identify areas where your business may
    be able to grow, improve, and strengthen.
  </p>

  <div className="welcome-grid">

    <div className="welcome-card">
      <h3>📈 Grow</h3>
      <p>Revenue • Customers • Profitability</p>
    </div>

    <div className="welcome-card">
      <h3>⚙ Improve</h3>
      <p>Operations • AI • Customer Experience</p>
    </div>

    <div className="welcome-card">
      <h3>👥 Strengthen</h3>
      <p>Employees • Leadership • Long-Term Value</p>
    </div>

  </div>

  <div className="welcome-deliverable">

    <h2>
      What You'll Receive
    </h2>

    <ul>

      <li>✓ Business Growth IQ™ Summary</li>

      <li>✓ Executive Business Opportunity Brief™</li>

      <li>✓ Personalized Recommendations</li>

      <li>✓ Complimentary Strategy Session</li>

    </ul>

  </div>

  <button
    className="begin-button"
    onClick={() => setStep(1)}
  >
    Begin My Business Growth IQ™ Assessment →
  </button>

  <small>
    Estimated time: 7–10 minutes
  </small>

</section>

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
              onClick={() => setStep(step + 1)}
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
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
customerReactivation: "",
onlineReputation: "",

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
missedOpportunities: "",
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

  switch (step) {

    // Welcome Screen
    case 0:
      return true;

    // Business Information
 case 1:
  return (
    formData.businessName.trim() !== "" &&
    formData.contactName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.industry !== "" &&
    formData.employees !== "" &&
    formData.yearsInBusiness !== ""
  );

    // Business Growth
    case 2:
      return (
        formData.revenueGrowth !== "" &&
        formData.newCustomers !== "" &&
        formData.followUp !== "" &&
        formData.retention !== "" &&
        formData.referrals !== "" &&
        formData.customerReactivation !== "" &&
        formData.onlineReputation !== ""
      );

    // Customer Experience
    case 3:
      return (
        formData.websiteScore !== "" &&
        formData.reviews !== "" &&
        formData.response !== "" &&
        formData.communication !== "" &&
        formData.customerFollowup !== "" &&
        formData.customerSatisfaction !== ""
      );

    // Operations
    case 4:
  return (
    formData.scheduling !== "" &&
    formData.workflow !== "" &&
    formData.automation !== "" &&
    formData.missedOpportunities !== "" &&
    formData.crm !== "" &&
    formData.reporting !== "" &&
    formData.operationsScore !== ""
  );

    // Employee Growth
    case 5:
      return (
        formData.recruiting !== "" &&
        formData.retentionEmployees !== "" &&
        formData.leadership !== "" &&
        formData.morale !== "" &&
        formData.benefits !== "" &&
        formData.teamStrength !== ""
      );

    // Technology
    case 6:
      return (
        formData.websiteTech !== "" &&
        formData.crmTech !== "" &&
        formData.ai !== "" &&
        formData.texting !== "" &&
        formData.phoneSystem !== "" &&
        formData.technologyScore !== ""
      );

    // Priorities
    case 7:
      return (
        formData.primaryGoal !== "" &&
        formData.biggestChallenge !== "" &&
        formData.interest !== "" &&
        formData.strategySession !== ""
      );

    // Review
    case 8:
      return true;

    default:
      return true;
  }
};
const buildBusinessResults = () => {

  return {

    businessName: formData.businessName,

    contactName: formData.contactName,

    industry: formData.industry,

    employees: formData.employees,

    yearsInBusiness: formData.yearsInBusiness,

    annualRevenue: formData.annualRevenue,

    overallScore: 74,

    revenueScore: 72,

    customerScore: 84,

    operationsScore: 68,

    employeeScore: 59,

    technologyScore: 43

  };

};

const handleNext = () => {



  const isValid = validateStep();

  if (!isValid) {
    setValidationMessage(
      "⚠️ Please answer all required questions highlighted on this page before continuing."
    );
    return;
  }

  setValidationMessage("");
  setStep((prev) => prev + 1);

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
        <h3>✓ 8–10 Minutes</h3>
        <p>Quick business assessment.</p>
    </div>

    <div className="trust-card">
        <h3>📊 Personalized Report</h3>
        <p>Executive Business Opportunity Brief™.</p>
    </div>

    <div className="trust-card">
        <h3>🎯 Complimentary Strategy Session</h3>
        <p>Review your results with a strategist.</p>
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
        Executive Business Growth Assessment™
      </span>

      <h3>Business Growth Journey</h3>
    </div>

    <div className="progress-percent">
      {Math.round((step / 8) * 100)}%
    </div>

  </div>

  <div className="progress-score">
    Completion Score
  </div>

  <div className="progress-wrapper">
    <div
      className="progress-bar"
      style={{ width: `${(step / 8) * 100}%` }}
    />
  </div>

  <div className="progress-footer">
    <span>Estimated Time Remaining</span>

    <strong>
      {Math.max(1, 9 - step)} Minutes
    </strong>
  </div>

</div>

{step > 0 && (

<div className="rating-legend">

  <strong>Rating Guide:</strong>

  <span>1 • Needs Improvement</span>
  <span>2 • Fair</span>
  <span>3 • Good</span>
  <span>4 • Very Good</span>
  <span>5 • Excellent</span>

</div>

)}

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
    Executive Business Growth Discovery™
</h1>

<p className="welcome-lead">

    Every successful business begins with understanding where it is today.

    The <strong>Executive Business Growth Discovery™</strong> is a strategic
    discovery process designed to uncover hidden revenue opportunities,
    operational inefficiencies, customer experience gaps, technology
    limitations, and employee growth opportunities.

</p>

<div className="welcome-grid">

    <div className="welcome-card">

        <div className="card-icon">📊</div>

        <h3>Business Growth Snapshot™</h3>

        <p>
            Receive an executive-level snapshot highlighting your business's
            strengths, growth opportunities, and potential revenue gaps.
        </p>

    </div>

    <div className="welcome-card">

        <div className="card-icon">🤝</div>

        <h3>Complimentary Business Growth Overview™</h3>

        <p>
            Meet with a Business Growth Strategist to review your discovery,
            discuss opportunities, and answer your questions.
        </p>

    </div>

    <div className="welcome-card">

        <div className="card-icon">📘</div>

        <h3>Executive Business Growth Brief™</h3>

        <p>
            Receive a customized strategic roadmap with recommendations
            designed specifically for your business, goals, and future growth.
        </p>

    </div>

</div>

<div className="section-tip">

    💡 There are no right or wrong answers. The more accurately you answer,
    the more valuable your Business Growth Snapshot™ and Executive Business
    Growth Brief™ will be.

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


<button

    className="begin-button"
    onClick={() => setStep(1)}
>
    Begin Business Growth IQ™ Assessment →
</button>

<small className="begin-note">
    Average completion time:
    <strong> 8–10 minutes</strong>
</small>

</>

)}



{/* ==========================================
    STEP 1 — BUSINESS INFORMATION
========================================== */}

{step === 1 && (

<section className="brief-section">

  <div className="section-title">

    <span className="step-number">
      Business Profile
    </span>

<h2>
Tell Us About Your Business
</h2>

<p>

The more we understand about your business, the more personalized and valuable
your Executive Business Opportunity Brief™ will be. This information helps us
identify opportunities specific to your company, industry, and stage of growth.

</p>

  </div>

<div className="section-tip">
  <div className="profile-intro">

    <div className="intro-card">

        <h3>📊 Personalized Analysis</h3>

        <p>
            Every answer helps us generate recommendations that are tailored specifically to your business.
        </p>

    </div>

    <div className="intro-card">

        <h3>⏱ Takes Less Than 10 Minutes</h3>

        <p>
            Most business owners complete the assessment in under ten minutes.
        </p>

    </div>

</div>

    🔒 Your information is never shared or sold.
    It is used only to personalize your Executive Business Opportunity Brief™
    and your complimentary Business Growth Strategy Session.

</div>

<div className="profile-progress">

    <div className="profile-progress-card">

        <div className="progress-icon">📋</div>

        <div>

            <h3>Business Profile</h3>

            <p>
                This information personalizes your Executive Business Opportunity Brief™.
            </p>

        </div>

    </div>

    <div className="profile-progress-card">

        <div className="progress-icon">⏱</div>

        <div>

            <h3>About 2 Minutes</h3>

            <p>
                Complete this section to unlock your customized business analysis.
            </p>

        </div>

    </div>

</div>
  <div className="brief-grid business-profile-grid">

    {/* Business Name */}

    <div className="form-group">

     <label>
  Business Name *
  <small>
    Used throughout your Executive Business Opportunity Brief™
  </small>
</label>

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

    {/* Your Role */}

    <div className="form-group">

      <label>Your Role</label>

      <input
        type="text"
        name="yourRole"
        value={formData.yourRole}
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

    {/* Current Team Size */}

    <div className="form-group">

      <label>Current Team Size</label>

      <select
        name="employees"
        value={formData.employees}
        onChange={handleChange}
      >

        <option value="">Select Team Size</option>

        <option>Just Me</option>
        <option>2–5</option>
        <option>6–10</option>
        <option>11–25</option>
        <option>26–50</option>
        <option>51–100</option>
        <option>100+</option>

      </select>

    </div>

    {/* How Long Have You Been in Business? */}

    <div className="form-group">

      <label>How Long Have You Been in Business?</label>

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
            Revenue & Growth Performance™
        </span>

        <h2>
            Is Your Business Reaching Its Revenue Potential?
        </h2>

        <p>
            This section measures the core drivers of business growth. Your answers
            help identify hidden revenue opportunities, sales consistency, and
            business growth trends that will be analyzed in your Executive
            Business Opportunity Brief™.
        </p>
 </div>
   
   
    <div className="section-tip">

        📈 Answer based on your business over the last 12 months—not your best month
        or your worst month.

    </div>

    <div className="score-card">

        <label>

            Revenue Growth

            <small>
                How consistently has your business increased revenue during the
                past 12 months?
            </small>

        </label>

        <select
            name="revenueGrowth"
            value={formData.revenueGrowth}
            onChange={handleChange}
        >

            <option value="">Choose One</option>

            <option value="1">🔴 Needs Immediate Attention</option>
            <option value="2">🟠 Needs Improvement</option>
            <option value="3">🟡 Average</option>
            <option value="4">🟢 Strong</option>
            <option value="5">⭐ Industry Leader</option>

        </select>

    </div>

    <div className="score-card">

        <label>

           New Customer Acquisition

            <small>
                How consistently are you bringing in qualified new customers?
            </small>

        </label>

        <select
            name="newCustomers"
            value={formData.newCustomers}
            onChange={handleChange}
        >

            <option value="">Choose One</option>

            <option value="1">🔴 Needs Immediate Attention</option>
            <option value="2">🟠 Needs Improvement</option>
            <option value="3">🟡 Average</option>
            <option value="4">🟢 Strong</option>
            <option value="5">⭐ Industry Leader</option>

        </select>

    </div>

    <div className="score-card">

        <label>

            Lead Follow-Up

            <small>
                How effectively does your team follow up on every lead?
            </small>

        </label>

        <select
            name="followUp"
            value={formData.followUp}
            onChange={handleChange}
        >

            <option value="">Choose One</option>

            <option value="1">🔴 Needs Immediate Attention</option>
            <option value="2">🟠 Needs Improvement</option>
            <option value="3">🟡 Average</option>
            <option value="4">🟢 Strong</option>
            <option value="5">⭐ Industry Leader</option>

        </select>

    </div>

    <div className="score-card">

        <label>

            Customer Retention

            <small>
                How successful is your business at keeping existing customers?
            </small>

        </label>

        <select
            name="retention"
            value={formData.retention}
            onChange={handleChange}
        >

            <option value="">Choose One</option>

            <option value="1">🔴 Needs Immediate Attention</option>
            <option value="2">🟠 Needs Improvement</option>
            <option value="3">🟡 Average</option>
            <option value="4">🟢 Strong</option>
            <option value="5">⭐ Industry Leader</option>

        </select>

    </div>

    <div className="score-card">

        <label>

            Referral Generation

            <small>
                How often do your customers refer new business?
            </small>

        </label>

        <select
            name="referrals"
            value={formData.referrals}
            onChange={handleChange}
        >

            <option value="">Choose One</option>

            <option value="1">🔴 Needs Immediate Attention</option>
            <option value="2">🟠 Needs Improvement</option>
            <option value="3">🟡 Average</option>
            <option value="4">🟢 Strong</option>
            <option value="5">⭐ Industry Leader</option>

        </select>

    </div>
  
    <div className="score-card">

    <label>

        Customer Reactivation

        <small>
            How consistently do you stay in touch with past customers through follow-up, maintenance reminders, email, text messages, or special offers?
        </small>

    </label>

    <select
        name="customerReactivation"
        value={formData.customerReactivation}
        onChange={handleChange}
    >

        <option value="">Choose One</option>

        <option value="1">🔴 Needs Immediate Attention</option>
        <option value="2">🟠 Needs Improvement</option>
        <option value="3">🟡 Average</option>
        <option value="4">🟢 Strong</option>
        <option value="5">⭐ Industry Leader</option>

    </select>

</div>

<div className="score-card">

    <label>

      Online Presence & Reputation

        <small>
            How effectively does your business collect, manage, and respond to online reviews?
        </small>

    </label>

    <select
        name="onlineReputation"
        value={formData.onlineReputation}
        onChange={handleChange}
    >

        <option value="">Choose One</option>

        <option value="1">🔴 Needs Immediate Attention</option>
        <option value="2">🟠 Needs Improvement</option>
        <option value="3">🟡 Average</option>
        <option value="4">🟢 Strong</option>
        <option value="5">⭐ Industry Leader</option>

    </select>

</div>

</section>

)}


{/* ==========================================
    STEP 3 — CUSTOMER EXPERIENCE
========================================== */}

{step === 3 && (

<section className="brief-section">

  <div className="section-title">

  <span className="step-number">
    Customer Experience & Digital Presence™
</span>

<h2>
    How Easy Is It To Do Business With You?
</h2>

<p>
    Your customers judge your business long before they become loyal clients.
    This section evaluates the customer experience, communication, and digital
    presence that influence trust, referrals, online reputation, and long-term
    business growth.
</p>

  </div>

  <div className="section-tip">

    💡 Put yourself in your customer's shoes. Think about the entire experience—from finding your business online to the follow-up after the job is completed.

</div>

  <div className="brief-grid">

    <div className="form-group">
     <label>

    Smart Website Effectiveness

    <small>
        Does your website actively generate leads, build trust, answer questions, and encourage customers to contact your business?
    </small>

</label>

      <select
        name="websiteScore"
        value={formData.websiteScore}
        onChange={handleChange}
      >
        <option value="">-- Please Select --</option>
        <option value="1">1 - Needs Improvement</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>
    </div>

    <div className="form-group">
      <label>

    Online Reviews & Reputation

    <small>
        How effectively does your business generate positive reviews and manage its online reputation?
    </small>

</label>

      <select
        name="reviews"
        value={formData.reviews}
        onChange={handleChange}
      >
       <option value="">Select Your Rating</option>
<option value="1">1 - Needs Improvement</option>
<option value="2">2 - Fair</option>
<option value="3">3 - Good</option>
<option value="4">4 - Very Good</option>
<option value="5">5 - Excellent</option>
      </select>
    </div>

    <div className="form-group">
      <label>

    Response Speed

    <small>
        How quickly do potential customers receive a response when they contact your business?
    </small>

</label>

      <select
        name="response"
        value={formData.response}
        onChange={handleChange}
      >
    <option value="">Select Your Rating</option>
<option value="1">1 - Needs Improvement</option>
<option value="2">2 - Fair</option>
<option value="3">3 - Good</option>
<option value="4">4 - Very Good</option>
<option value="5">5 - Excellent</option>
      </select>
    </div>

    <div className="form-group">
     <label>

    Customer Communication

    <small>
        How well does your business keep customers informed before, during, and after the job?
    </small>

</label>

      <select
        name="communication"
        value={formData.communication}
        onChange={handleChange}
      >
       <option value="">Select Your Rating</option>
<option value="1">1 - Needs Improvement</option>
<option value="2">2 - Fair</option>
<option value="3">3 - Good</option>
<option value="4">4 - Very Good</option>
<option value="5">5 - Excellent</option>
      </select>
    </div>

    <div className="form-group">
      <label>

    Post-Service Follow-Up

    <small>
        How consistently do you follow up after completing a job to thank customers, request reviews, generate referrals, or encourage repeat business?
    </small>

</label>

      <select
        name="customerFollowup"
        value={formData.customerFollowup}
        onChange={handleChange}
      >
      <option value="">Select Your Rating</option>
<option value="1">1 - Needs Improvement</option>
<option value="2">2 - Fair</option>
<option value="3">3 - Good</option>
<option value="4">4 - Very Good</option>
<option value="5">5 - Excellent</option>
      </select>
    </div>

    <div className="form-group">
     <label>

    Overall Customer Experience

    <small>
        Based on the complete customer journey, how satisfied do you believe your customers are with doing business with you?
    </small>

</label>

      <select
        name="customerSatisfaction"
        value={formData.customerSatisfaction}
        onChange={handleChange}
      >
      <option value="">Select Your Rating</option>
<option value="1">1 - Needs Improvement</option>
<option value="2">2 - Fair</option>
<option value="3">3 - Good</option>
<option value="4">4 - Very Good</option>
<option value="5">5 - Excellent</option>
      </select>
    </div>

  </div>

</section>

)}
{/* ==========================================
    STEP 4 — BUSINESS OPERATIONS
========================================== */}

{step === 4 && (

<section className="brief-section">

  <div className="section-title">

    <span className="step-number">
      Business Operations & Systems™
    </span>

    <h2>
      How Efficiently Does Your Business Operate?
    </h2>

    <p>
      Strong systems help businesses save time, reduce costs, improve customer
      service, and create consistent growth. This section evaluates how
      efficiently your business operates behind the scenes.
    </p>

  </div>

  <div className="section-tip">
    ⚙️ Think about how work flows through your business—from the first customer
    call to scheduling, completing the work, collecting payment, and following up afterward.
  </div>

  <div className="brief-grid">

    {/* Scheduling */}

    <div className="form-group">

      <label>
        Scheduling & Dispatch
        <small>
          How efficiently are appointments scheduled, updated, and communicated to customers and your team?
        </small>
      </label>

      <select
        name="scheduling"
        value={formData.scheduling}
        onChange={handleChange}
      >
        <option value="">Select Your Rating</option>
        <option value="1">1 - Needs Improvement</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>

    </div>

    {/* Workflow */}

    <div className="form-group">

      <label>
        Workflow & Process Efficiency
        <small>
          How consistently does work move through your business without delays, confusion, or unnecessary manual steps?
        </small>
      </label>

      <select
        name="workflow"
        value={formData.workflow}
        onChange={handleChange}
      >
        <option value="">Select Your Rating</option>
        <option value="1">1 - Needs Improvement</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>

    </div>

    {/* Automation */}

    <div className="form-group">

      <label>
        Automation & Time Savings
        <small>
          How effectively does your business use automation to eliminate repetitive tasks and save valuable time?
        </small>
      </label>

      <select
        name="automation"
        value={formData.automation}
        onChange={handleChange}
      >
        <option value="">Select Your Rating</option>
        <option value="1">1 - Needs Improvement</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>

    </div>

    {/* Missed Opportunities */}

    <div className="form-group">

      <label>
        Missed Opportunities
        <small>
          How confident are you that your business captures every lead, answers every inquiry, and follows up on every opportunity?
        </small>
      </label>

      <select
        name="missedOpportunities"
        value={formData.missedOpportunities}
        onChange={handleChange}
      >
        <option value="">Select Your Rating</option>
        <option value="1">1 - Needs Improvement</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>

    </div>

    {/* CRM */}

    <div className="form-group">

      <label>
        Customer & Lead Management
        <small>
          How well does your business organize leads, customers, follow-ups, and communication in one central system?
        </small>
      </label>

      <select
        name="crm"
        value={formData.crm}
        onChange={handleChange}
      >
        <option value="">Select Your Rating</option>
        <option value="1">1 - Needs Improvement</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>

    </div>

    {/* Reporting */}

    <div className="form-group">

      <label>
        Business Insights & Reporting
        <small>
          How easily can you track important business information such as revenue, leads, sales, customer activity, and overall business performance?
        </small>
      </label>

      <select
        name="reporting"
        value={formData.reporting}
        onChange={handleChange}
      >
        <option value="">Select Your Rating</option>
        <option value="1">1 - Needs Improvement</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>

    </div>

    {/* Overall */}

    <div className="form-group">

      <label>
        Overall Business Efficiency
        <small>
          Considering your people, processes, and systems, how efficiently does your business operate on a day-to-day basis?
        </small>
      </label>

      <select
        name="operationsScore"
        value={formData.operationsScore}
        onChange={handleChange}
      >
        <option value="">Select Your Rating</option>
        <option value="1">1 - Needs Improvement</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
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
    Employee Growth & Leadership™
</span>

<h2>
    Is Your Team Helping You Grow Your Business?
</h2>

<p>
    Employees are one of the greatest assets—and often one of the biggest
    challenges—for small businesses. This section helps identify opportunities
    to improve recruiting, retention, leadership, employee well-being, and
    long-term business growth.
</p>

  </div>

  <div className="section-tip">

    👥 Great businesses are built by great people. Think about your team today—and where you want your business to be over the next 3–5 years.

</div>

  <div className="brief-grid">

    <div className="form-group">

      <label>

    Recruiting & Hiring

    <small>
        How successful is your business at attracting and hiring qualified employees?
    </small>

</label>

      <select
        name="recruiting"
        value={formData.recruiting}
        onChange={handleChange}
      >
        <option value="">-- Please Select --</option>
        <option value="1">1 - Very Difficult</option>
        <option value="2">2 - Difficult</option>
        <option value="3">3 - Average</option>
        <option value="4">4 - Good</option>
        <option value="5">5 - Excellent</option>
      </select>

    </div>

    <div className="form-group">

     <label>

    Employee Retention

    <small>
        How successful is your business at keeping good employees long-term?
    </small>

</label>

      <select
        name="retentionEmployees"
        value={formData.retentionEmployees}
        onChange={handleChange}
      >
        <option value="">-- Please Select --</option>
     <option value="1">1 - Needs Improvement</option>
<option value="2">2 - Fair</option>
<option value="3">3 - Good</option>
<option value="4">4 - Very Good</option>
<option value="5">5 - Excellent</option>
      </select>

    </div>

    <div className="form-group">

      <label>

    Leadership & Team Development

    <small>
        How effectively are you developing leaders and preparing your team for future growth?
    </small>

</label>

      <select
        name="leadership"
        value={formData.leadership}
        onChange={handleChange}
      >
        <option value="">-- Please Select --</option>
      <option value="1">1 - Needs Improvement</option>
<option value="2">2 - Fair</option>
<option value="3">3 - Good</option>
<option value="4">4 - Very Good</option>
<option value="5">5 - Excellent</option>
      </select>

    </div>

    <div className="form-group">

     <label>

    Employee Engagement

    <small>
        How engaged, motivated, and committed is your team to the success of your business?
    </small>

</label>

      <select
        name="morale"
        value={formData.morale}
        onChange={handleChange}
      >
        <option value="">-- Please Select --</option>
        <option value="1">1 - Needs Improvement</option>
<option value="2">2 - Fair</option>
<option value="3">3 - Good</option>
<option value="4">4 - Very Good</option>
<option value="5">5 - Excellent</option>
      </select>

    </div>

    <div className="form-group">

     <label>

    Employee Benefits & Wellness

    <small>
        How well does your current employee benefits and wellness strategy help you attract, retain, and support quality employees?
    </small>

</label>

      <select
        name="benefits"
        value={formData.benefits}
        onChange={handleChange}
      >
        <option value="">-- Please Select --</option>
       <option value="1">1 - Needs Improvement</option>
<option value="2">2 - Fair</option>
<option value="3">3 - Good</option>
<option value="4">4 - Very Good</option>
<option value="5">5 - Excellent</option>
      </select>

    </div>

    <div className="form-group">

      <label>

    Overall Team Strength

    <small>
        Considering recruiting, leadership, retention, and employee engagement, how would you rate the overall strength of your team?
    </small>

</label>

      <select
        name="teamStrength"
        value={formData.teamStrength}
        onChange={handleChange}
      >
        <option value="">-- Please Select --</option>
      <option value="1">1 - Needs Improvement</option>
<option value="2">2 - Fair</option>
<option value="3">3 - Good</option>
<option value="4">4 - Very Good</option>
<option value="5">5 - Excellent</option>
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
    Technology, Automation & Innovation™
</span>

<h2>
    Is Your Technology Helping Your Business Grow?
</h2>

<p>
    The right technology should help your business save time, improve customer
    service, increase efficiency, and support growth. This section evaluates
    how effectively your technology is working for your business.
</p>

  </div>

  <div className="section-tip">

    🚀 Technology should support your business—not slow it down. Think about how your current tools help your team, your customers, and your overall business growth.

</div>

  <div className="brief-grid">

    <div className="form-group">

  
<label>

    Website & Online Presence

    <small>
        How effectively does your website attract customers, answer questions, generate leads, and support your business?
    </small>

</label>
      <select
        name="websiteTech"
        value={formData.websiteTech}
        onChange={handleChange}
      >
        <option value="">-- Please Select --</option>
        <option value="1">1 - Needs Improvement</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>

    </div>

    <div className="form-group">

      <label>

    Customer & Lead Management

    <small>
        How effectively do you manage customer information, leads, follow-ups, and communication?
    </small>

</label>

      <select
        name="crmTech"
        value={formData.crmTech}
        onChange={handleChange}
      >
        <option value="">-- Please Select --</option>
        <option value="1">1 - Needs Improvement</option>
<option value="2">2 - Fair</option>
<option value="3">3 - Good</option>
<option value="4">4 - Very Good</option>
<option value="5">5 - Excellent</option>
      </select>

    </div>

    <div className="form-group">

      <label>

    AI & Business Automation

    <small>
        How effectively does your business use AI or automation to save time, improve customer service, or increase productivity?
    </small>

</label>

      <select
        name="ai"
        value={formData.ai}
        onChange={handleChange}
      >
        <option value="">-- Please Select --</option>
        <option value="1">Not Using AI</option>
        <option value="2">Very Limited</option>
        <option value="3">Some AI</option>
        <option value="4">Using AI Regularly</option>
        <option value="5">AI is Core to Our Business</option>
      </select>

    </div>

    <div className="form-group">

     <label>

    Customer Communication Automation

    <small>
        How effectively does your business automate customer communication through email, text messaging, reminders, or follow-up campaigns?
    </small>

</label>

      <select
        name="texting"
        value={formData.texting}
        onChange={handleChange}
      >
        <option value="">-- Please Select --</option>
       <option value="1">1 - Needs Improvement</option>
<option value="2">2 - Fair</option>
<option value="3">3 - Good</option>
<option value="4">4 - Very Good</option>
<option value="5">5 - Excellent</option>
      </select>

    </div>

    <div className="form-group">

     <label>

    Phone & Customer Communication

    <small>
        How effectively does your business answer calls, respond to inquiries, and communicate with customers throughout their journey?
    </small>

</label>

      <select
        name="phoneSystem"
        value={formData.phoneSystem}
        onChange={handleChange}
      >
        <option value="">-- Please Select --</option>
        <option value="1">1 - Needs Improvement</option>
<option value="2">2 - Fair</option>
<option value="3">3 - Good</option>
<option value="4">4 - Very Good</option>
<option value="5">5 - Excellent</option>
      </select>

    </div>

    <div className="form-group">

     <label>

    Overall Technology Readiness

    <small>
        Considering your website, automation, AI, customer communication, and business systems, how prepared is your business to support future growth?
    </small>

</label>

      <select
        name="technologyScore"
        value={formData.technologyScore}
        onChange={handleChange}
      >
        <option value="">-- Please Select --</option>
       <option value="1">1 - Needs Improvement</option>
<option value="2">2 - Fair</option>
<option value="3">3 - Good</option>
<option value="4">4 - Very Good</option>
<option value="5">5 - Excellent</option>
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
      Business Priorities & Future Growth™
    </span>

    <h2>
      Where Do You Want Your Business To Go Next?
    </h2>

    <p>
      Every business has different goals and challenges. Help us understand
      what matters most to you so your Executive Business Growth Brief™ reflects
      your priorities—not generic recommendations.
    </p>

  </div>

  <div className="section-tip">

    🎯 There are no right or wrong answers. Your responses help us prioritize
    the recommendations that will have the greatest impact on your business.

  </div>

  <div className="brief-grid">

    <div className="form-group">

      <label>Primary Business Goal</label>

      <select
        name="primaryGoal"
        value={formData.primaryGoal}
        onChange={handleChange}
      >

       
<option value="">-- Please Select --</option>
        <option>Increase Revenue</option>
        <option>Increase Profitability</option>
        <option>Improve Cash Flow</option>
        <option>Generate More Qualified Leads</option>
        <option>Improve Customer Retention</option>
        <option>Grow My Business</option>
        <option>Hire & Retain Better Employees</option>
        <option>Save Time Through Better Systems</option>
        <option>Prepare My Business for the Future</option>

      </select>

    </div>

    <div className="form-group">

      <label>Biggest Challenge</label>

      <select
        name="biggestChallenge"
        value={formData.biggestChallenge}
        onChange={handleChange}
      >

        <option value="">-- Please Select --</option>
        <option>Finding New Customers</option>
        <option>Customer Reactivation</option>
        <option>Following Up With Leads</option>
        <option>Hiring & Retaining Employees</option>
        <option>Increasing Profitability</option>
        <option>Saving Time</option>
        <option>Marketing</option>
        <option>Technology & Automation</option>
        <option>Business Operations</option>

      </select>

    </div>

    <div className="form-group">

      <label>What Would You Like To Improve Most?</label>

      <select
        name="interest"
        value={formData.interest}
        onChange={handleChange}
      >

        <option value="">Select One</option>

        <option>Finding Hidden Revenue Opportunities</option>
        <option>Customer Reactivation</option>
        <option>Improving Customer Experience</option>
        <option>Saving Time Through Automation</option>
        <option>Business Technology & AI</option>
        <option>Employee Growth & Retention</option>
        <option>Affordable Employee Wellness Options</option>
        <option>Overall Business Growth</option>

      </select>

    </div>

    <div className="form-group">

      <label>
        Would You Like A Complimentary Business Growth Overview™?
      </label>

      <select
        name="strategySession"
        value={formData.strategySession}
        onChange={handleChange}
      >

        <option value="">Select One</option>

        <option>Yes, I'd Like To Schedule One</option>
        <option>Maybe After Reviewing My Snapshot</option>
        <option>Not At This Time</option>

      </select>

    </div>

  </div>

</section>

)}

{/* ==========================================
    STEP 8 — EXECUTIVE REVIEW
========================================== */}

{step === 8 && (

  <section className="brief-section">

    <div className="section-title">

      <span className="step-number">
        Executive Business Growth Discovery™ Complete
      </span>

      <h2>
        Thank You!
      </h2>

      <p>
        Thank you for completing your Executive Business Growth Discovery™.
        Your responses provide valuable insight into your business and will
        help us identify opportunities to increase revenue, improve operations,
        strengthen customer relationships, leverage technology, and position
        your business for long-term growth.
      </p>

    </div>

    <div className="review-card">

      <h3>What Happens Next?</h3>

      <div className="review-list">

        <div className="review-item">
          ✅ We'll review your Executive Business Growth Discovery™.
        </div>

        <div className="review-item">
          ✅ We'll identify your greatest business growth opportunities.
        </div>

        <div className="review-item">
          ✅ We'll contact you to schedule your Complimentary Business Growth Overview™.
        </div>

        <div className="review-item">
          ✅ Following our overview, we'll prepare your customized Executive Business Growth Brief™ with recommendations tailored specifically to your business.
        </div>

      </div>

    </div>

    <div className="promise-card">

      <h3>The 12 Stone Promise™</h3>

      <p>
        Every business is unique. That's why we don't generate generic reports
        or cookie-cutter recommendations.
      </p>

      <p>
        Your Executive Business Growth Brief™ is professionally reviewed and
        customized based on your discovery, your business goals, your challenges,
        and your opportunities.
      </p>

      <p>
        <strong>
          Our mission is simple: Help you build a stronger, more profitable business.
        </strong>
      </p>

    </div>

  </section>

)}


{validationMessage && (
  <div
    className="validation-message"
    role="alert"
    aria-live="polite"
  >
    ⚠️ {validationMessage}
  </div>
)}

<div className="brief-navigation">

  {step > 0 && (
    <button
      type="button"
      className="secondary-button"
      onClick={() => {
        setStep(step - 1);
        setValidationMessage("");
      }}
    >
      ← Previous
    </button>
  )}

  {step < 8 ? (
    <button
      type="button"
      className="primary-button"
      onClick={handleNext}
    >
      Continue →
    </button>
  ) : (
    <button
      type="button"
      className="primary-button"
      onClick={() => {

        const growthProfile = buildBusinessResults();

        localStorage.setItem(
          "growthProfile",
          JSON.stringify(growthProfile)
        );

        navigate("/executive-snapshot");

      }}
    >
      Submit Assessment
    </button>
  )}


</div>

    </div>
  </div>
</main>

);

}


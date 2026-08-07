import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import { businessGrowthEngine } from "../utils/businessGrowthEngine";

import {
  FiTrendingUp,
  FiDollarSign,
  FiUsers,
  FiSettings,
  FiCpu,
  FiStar,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

import "../styles/businessOpportunitySnapshot.css";


const demoData = {

  //======================================================
  // REVENUE & GROWTH
  //======================================================

  revenueGrowth: 4,
  newCustomers: 3,
  followUp: 4,
  retention: 4,
  referrals: 3,
  salesProcess: 4,


  //======================================================
  // CUSTOMER EXPERIENCE
  //======================================================

  leadResponse: 3,
  onlineReviews: 4,
  customerCommunication: 4,
  customerFollowUp: 4,
  repeatBusiness: 4,
  customerSatisfaction: 5,


  //======================================================
  // BUSINESS OPERATIONS
  //======================================================

  scheduling: 3,
  dispatching: 3,
  workflow: 3,
  communication: 3,
  documentation: 2,
  operations: 3,


  //======================================================
  // EMPLOYEE GROWTH
  //======================================================

  recruiting: 2,
  retentionEmployees: 3,
  training: 3,
  benefits: 2,
  performance: 3,
  culture: 4,


  //======================================================
  // TECHNOLOGY & AI
  //======================================================

  website: 3,
  crm: 2,
  marketingAutomation: 2,
  ai: 1,
  reporting: 3,
  technologyIntegration: 2,


  //======================================================
  // BUSINESS PRIORITIES
  //======================================================

  revenuePriority: 3,
  leadGeneration: 3,
  profitability: 3,
  businessSystems: 3,
  growthReadiness: 3,
  businessConfidence: 4,

};

const getScoreRating = (score) => {
  if (score >= 80) {
    return {
      rating: "Excellent",
      opportunity: "Low Opportunity",
    };
  }

  if (score >= 60) {
    return {
      rating: "Strong",
      opportunity: "Growth Opportunity",
    };
  }

if (score >= 40) {
  return {
    rating: "Developing",
    opportunity: "High Opportunity",
  };
}

return {
  rating: "Priority Area",
  opportunity: "Immediate Opportunity",
};
};

export default function BusinessOpportunitySnapshot() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formData = location.state || demoData;

  const analysis = businessGrowthEngine(formData);

  return (

    <main className="snapshot-page">

      <div className="snapshot-container">

        {/* ==========================
            HEADER
        =========================== */}

<header className="snapshot-header">

          <span className="eyebrow">
            12 Stone Consulting
          </span>

    <h1>
  Executive Business Growth Report™
</h1>

          <p>
            Based on your Business Growth IQ™ Assessment,
            we've analyzed your responses and identified
            opportunities to strengthen your business.
          </p>

        </header>

        {/* ==========================
            BUSINESS GROWTH IQ
        =========================== */}

        <section className="overall-score">

          <span>
            Business Growth IQ™
          </span>

          <h2>

            {analysis.overallScore}

          </h2>

          <small>
            out of 100
          </small>

          <div className="growth-pill">

            <strong>

              {analysis.growthPotential}

            </strong>

          </div>

        </section>

       {/* ==========================
    DASHBOARD
=========================== */}

<section className="snapshot-dashboard">

  <div className="dashboard-title">

    <span className="section-eyebrow">
      Business Growth IQ™
    </span>

    <h2>
      Executive Dashboard
    </h2>

    <p>
      Your Business Growth IQ™ Dashboard provides an executive-level
      view of the five core areas that influence long-term business growth.
    </p>

  </div>

  <div className="dashboard-grid">

    <div className="dashboard-card">
      <div className="dashboard-icon">📈</div>

      <h3>Revenue Growth™</h3>

      <div className="dashboard-score">
        {getScoreRating(analysis.revenue).rating}
      </div>

      <small>
        {getScoreRating(analysis.revenue).opportunity}
      </small>
    </div>


    <div className="dashboard-card">
      <div className="dashboard-icon">🤝</div>

      <h3>Customer Experience™</h3>

      <div className="dashboard-score">
        {getScoreRating(analysis.customer).rating}
      </div>

      <small>
        {getScoreRating(analysis.customer).opportunity}
      </small>
    </div>


    <div className="dashboard-card featured">

      <small>
        Business Growth IQ™ Score
      </small>

      <div className="featured-score">
        {analysis.overallScore}
      </div>

      <span>
        Preliminary Assessment
      </span>

    </div>


    <div className="dashboard-card">
      <div className="dashboard-icon">⚙️</div>

      <h3>Business Operations™</h3>

      <div className="dashboard-score">
        {getScoreRating(analysis.operations).rating}
      </div>

      <small>
        {getScoreRating(analysis.operations).opportunity}
      </small>
    </div>


    <div className="dashboard-card">
      <div className="dashboard-icon">💻</div>

      <h3>Technology & AI™</h3>

      <div className="dashboard-score">
        {getScoreRating(analysis.technology).rating}
      </div>

      <small>
        {getScoreRating(analysis.technology).opportunity}
      </small>
    </div>


    <div className="dashboard-card">
      <div className="dashboard-icon">👥</div>

      <h3>Employee Growth™</h3>

      <div className="dashboard-score">
        {getScoreRating(analysis.employees).rating}
      </div>

      <small>
        {getScoreRating(analysis.employees).opportunity}
      </small>
    </div>

  </div>

</section>
        {/* ==========================
            REVENUE OPPORTUNITY
        =========================== */}

        <section className="revenue-opportunity">

         <h2>
  Business Growth Opportunity
</h2>

          <div className="revenue-box">

            <h1>

              {analysis.estimatedRevenueOpportunity}

            </h1>

          <p>
  Your assessment indicates opportunities to strengthen revenue,
  operations, customer experience, workforce performance, and technology.
  A strategy session can help quantify the potential financial impact.
</p>

          </div>

        </section>

        {/* ==========================
            EXECUTIVE SUMMARY
        =========================== */}

        <section className="executive-summary">

          <h2>

            Executive Summary

          </h2>

          <p>

            {analysis.executiveSummary}

          </p>

        </section>
                {/* ==========================
            STRONGEST AREAS
        =========================== */}

        <section className="strengths-section">

          <div className="section-heading-row">

            <div>

              <span className="section-kicker">
                Business Strengths
              </span>

              <h2>
                Your Strongest Areas
              </h2>

            </div>

          </div>

          <div className="insight-list">

            {analysis.strengths?.length > 0 ? (

              analysis.strengths.map((item) => (

                <div
                  key={item}
                  className="insight-item strength-item"
                >

                  <FiCheckCircle />

                  <span>{item}</span>

                </div>

              ))

            ) : (

              <div className="empty-insight">

                No areas scored above the current strength threshold.
                Your Business Growth Blueprint™ focuses on the highest-impact
                opportunities identified.

              </div>

            )}

          </div>

        </section>

        {/* ==========================
            OPPORTUNITY AREAS
        =========================== */}

        <section className="top-opportunities">

          <div className="section-heading-row">

            <div>

              <span className="section-kicker">
                Priority Findings
              </span>

              <h2>
                Your Top Opportunity Areas
              </h2>

            </div>

          </div>

          <div className="opportunity-list">

            {analysis.opportunities?.length > 0 ? (

              analysis.opportunities.map((item) => (

                <div
                  key={item}
                  className="opportunity-item"
                >

                  <FiTrendingUp />

                  <span>{item}</span>

                </div>

              ))

            ) : (

              <div className="empty-insight">

                No immediate opportunity areas were identified at the current
                scoring threshold.

              </div>

            )}

          </div>

        </section>

        {/* ==========================
            GROWTH BLUEPRINT
        =========================== */}

        <section className="growth-blueprint">

          <div className="section-heading-row">

            <div>

              <span className="section-kicker">
                Strategic Recommendations
              </span>

              <h2>
                Business Growth Blueprint™
              </h2>

            </div>

          </div>

          <p className="blueprint-intro">

            These recommendations are generated from your assessment results
            and prioritized around business impact, growth potential, and the
            areas that may deserve immediate attention.

          </p>

          <div className="blueprint-grid">

            {analysis.growthBlueprint?.length > 0 ? (

              analysis.growthBlueprint.map((item, index) => (

                <article
                  key={`${item.pillar}-${index}`}
                  className="blueprint-card"
                >

                  <div className="blueprint-card-header">

                    <span className="priority-badge">

                      Priority {item.priority ?? index + 1}

                    </span>

                    <span
                      className={`impact-badge impact-${(
                        item.impact || "medium"
                      ).toLowerCase()}`}
                    >

                      {item.impact || "Medium"} Impact

                    </span>

                  </div>

                  <h3>
                    {item.pillar}
                  </h3>

                  <div className="blueprint-detail">

                    <span>
                      Finding
                    </span>

                    <p>
                      {item.finding}
                    </p>

                  </div>

                  <div className="blueprint-detail">

                    <span>
                      Recommended Solution
                    </span>

                    <p className="blueprint-solution">
                      {item.solution}
                    </p>

                  </div>

                  <div className="blueprint-detail">

                    <span>
                      Expected Business Impact
                    </span>

                    <p>
                      {item.businessImpact}
                    </p>

                  </div>

                </article>

              ))

            ) : (

              <div className="empty-insight">

                Your detailed Business Growth Blueprint™ will be prepared after
                a strategist reviews your assessment responses.

              </div>

            )}

          </div>

        </section>

        {/* ==========================
            RECOMMENDATIONS
        =========================== */}

        <section className="recommendations-section">

          <div className="section-heading-row">

            <div>

              <span className="section-kicker">
                Recommended Next Steps
              </span>

              <h2>
                Strategic Growth Solutions
              </h2>

            </div>

          </div>

          <div className="recommendation-list">

            {analysis.recommendedServices?.length > 0 ? (

              analysis.recommendedServices.map((service, index) => (

                <div
                  key={service}
                  className="recommendation-item"
                >

                  <span className="recommendation-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>

                    <h3>{service}</h3>

                    <p>
                      Recommended based on the opportunities identified in your
                      Business Growth IQ™ Assessment.
                    </p>

                  </div>

                </div>

              ))

            ) : (

              <div className="empty-insight">

                No immediate solution recommendation was generated.

              </div>

            )}

          </div>

        </section>
                {/* ==========================
            STRATEGY SESSION
        =========================== */}

        <section className="snapshot-cta">

          <span className="section-kicker">
            Complimentary Consultation
          </span>

          <h2>
            Ready to Review Your Business Growth Blueprint™?
          </h2>

          <p>

            Schedule a complimentary Business Growth Strategy Session with
            a 12 Stone Consulting Business Growth Strategist. We'll review
            your assessment, discuss your opportunities, and identify the
            highest-impact actions you can take to grow your business.

          </p>

          <div className="cta-benefits">

            <div>

              <FiCheckCircle />

              <span>
                Review your Business Growth IQ™
              </span>

            </div>

            <div>

              <FiCheckCircle />

              <span>
                Identify hidden revenue opportunities
              </span>

            </div>

            <div>

              <FiCheckCircle />

              <span>
                Discuss workforce & employee strategies
              </span>

            </div>

            <div>

              <FiCheckCircle />

              <span>
                Explore AI, automation & technology improvements
              </span>

            </div>

          </div>

          <Link
  to="/contact"
  className="button button-primary"
>
  Review My Business Growth Report
  <FiArrowRight />
</Link>

        </section>

      </div>

    </main>

  );

}
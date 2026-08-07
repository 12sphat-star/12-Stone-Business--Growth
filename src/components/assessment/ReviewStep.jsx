import StepLayout from "./StepLayout";
import SectionHeader from "./SectionHeader";

export default function ReviewStep({ formData }) {
  return (
    <StepLayout>

      <SectionHeader
        badge="Executive Review"
        title="Review Your Business Growth Assessment"
        description="Please review your information before generating your Executive Business Snapshot™."
        tip="You can go back to make changes before continuing."
      />

      <div className="review-section">

        <div className="review-card">
          <h3>🏢 Business Profile</h3>

          <div className="review-row">
            <span>Business Name</span>
            <strong>{formData.businessName || "-"}</strong>
          </div>

          <div className="review-row">
            <span>Contact</span>
            <strong>{formData.contactName || "-"}</strong>
          </div>

          <div className="review-row">
            <span>Industry</span>
            <strong>{formData.industry || "-"}</strong>
          </div>

          <div className="review-row">
            <span>Employees</span>
            <strong>{formData.employees || "-"}</strong>
          </div>

          <div className="review-row">
            <span>Years in Business</span>
            <strong>{formData.yearsInBusiness || "-"}</strong>
          </div>

        </div>

        <div className="review-card">

          <h3>✅ Assessment Complete</h3>

          <div className="review-check">✓ Revenue & Growth</div>

          <div className="review-check">✓ Customer Experience</div>

          <div className="review-check">✓ Operations</div>

          <div className="review-check">✓ Employee Growth</div>

          <div className="review-check">✓ Technology</div>

          <div className="review-check">✓ Business Priorities</div>

        </div>

        <div className="review-card">

          <h3>Next Step</h3>

          <p>
            Your responses are now ready to be analyzed.
            The next step is generating your personalized
            Executive Business Snapshot™ where we'll identify
            your strongest opportunities for growth,
            operational improvement, customer experience,
            employee development, and technology adoption.
          </p>

        </div>

      </div>

    </StepLayout>
  );
}
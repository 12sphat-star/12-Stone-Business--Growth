import StepLayout from "./StepLayout";
import SectionHeader from "./SectionHeader";
import ScoreCard from "./ScoreCard";

export default function CustomerExperienceStep({
  formData,
  handleChange,
}) {
  return (
    <StepLayout>

      <SectionHeader
        badge="Customer Experience"
        title="Evaluate Your Customer Experience"
        description="Customer experience directly impacts referrals, online reputation, repeat business, and long-term revenue growth."
        tip="Choose the statement that best describes how your business operates today."
      />

      <ScoreCard
        label="Lead Response Time"
        description="Which statement best describes how quickly your business responds to new customer inquiries?"
        name="leadResponse"
        value={formData.leadResponse}
        onChange={handleChange}
        options={[
          "We usually respond the next business day or later.",
          "We usually respond within a few hours.",
          "We usually respond within about an hour.",
          "We usually respond within 15–30 minutes.",
          "We respond in under 5 minutes or automatically.",
        ]}
      />

      <ScoreCard
        label="Online Reviews"
        description="Which statement best describes your online review process?"
        name="onlineReviews"
        value={formData.onlineReviews}
        onChange={handleChange}
        options={[
          "We rarely ask customers for online reviews.",
          "We ask occasionally when we remember.",
          "We ask most satisfied customers for a review.",
          "Every customer is asked for a review as part of our process.",
          "Review requests are automated and our online reputation is actively managed.",
        ]}
      />

      <ScoreCard
        label="Customer Communication"
        description="Which statement best describes how you communicate with customers during a project?"
        name="customerCommunication"
        value={formData.customerCommunication}
        onChange={handleChange}
        options={[
          "Customers usually contact us for updates.",
          "We provide updates only when necessary.",
          "We communicate at key milestones during the project.",
          "Customers receive regular updates throughout the project.",
          "Communication is proactive, consistent, and supported by automation.",
        ]}
      />

      <ScoreCard
        label="Customer Follow-Up"
        description="Which statement best describes how you follow up after completing a job?"
        name="customerFollowUp"
        value={formData.customerFollowUp}
        onChange={handleChange}
        options={[
          "We rarely follow up after completing a job.",
          "We follow up occasionally.",
          "We follow up with many of our customers.",
          "Every customer receives a follow-up after service.",
          "Follow-up is fully automated with ongoing customer communication.",
        ]}
      />

      <ScoreCard
        label="Repeat Business"
        description="Which statement best describes your ability to generate repeat business?"
        name="repeatBusiness"
        value={formData.repeatBusiness}
        onChange={handleChange}
        options={[
          "Most customers only use us once.",
          "We occasionally receive repeat business.",
          "Many customers return when they need us again.",
          "Repeat customers are a major part of our business.",
          "We have systems that consistently generate repeat business automatically.",
        ]}
      />

      <ScoreCard
        label="Customer Satisfaction"
        description="Which statement best describes your customer satisfaction process?"
        name="customerSatisfaction"
        value={formData.customerSatisfaction}
        onChange={handleChange}
        options={[
          "We rarely measure customer satisfaction.",
          "We receive informal feedback from customers.",
          "We occasionally survey or ask customers for feedback.",
          "Customer satisfaction is consistently measured and reviewed.",
          "Customer satisfaction is actively tracked, measured, and continuously improved.",
        ]}
      />

    </StepLayout>
  );
}
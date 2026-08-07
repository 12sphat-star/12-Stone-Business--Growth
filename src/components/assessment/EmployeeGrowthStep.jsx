import StepLayout from "./StepLayout";
import SectionHeader from "./SectionHeader";
import ScoreCard from "./ScoreCard";

export default function EmployeeGrowthStep({
  formData,
  handleChange,
}) {
  return (
    <StepLayout>

      <SectionHeader
        badge="Employee Growth"
        title="Evaluate Your Team & Employee Development"
        description="Strong teams create better customer experiences, improve retention, and drive long-term business growth."
        tip="Choose the statement that best describes how your business operates today."
      />

      <ScoreCard
        label="Recruiting"
        description="Which statement best describes your recruiting process?"
        name="recruiting"
        value={formData.recruiting}
        onChange={handleChange}
        options={[
          "We are always looking for employees but have no recruiting process.",
          "We recruit only when we have an opening.",
          "We have a basic recruiting process.",
          "We consistently recruit qualified candidates.",
          "Recruiting is a continuous, strategic process supported by technology.",
        ]}
      />

      <ScoreCard
        label="Employee Retention"
        description="Which statement best describes your ability to retain good employees?"
        name="retentionEmployees"
        value={formData.retentionEmployees}
        onChange={handleChange}
        options={[
          "We experience frequent employee turnover.",
          "Retention is a challenge.",
          "Most employees stay with us.",
          "We have strong employee retention.",
          "Employee retention is one of our competitive advantages.",
        ]}
      />

      <ScoreCard
        label="Training"
        description="Which statement best describes your employee training program?"
        name="training"
        value={formData.training}
        onChange={handleChange}
        options={[
          "Training is mostly on-the-job with no structure.",
          "Some informal training is provided.",
          "We have a basic training process.",
          "Employees follow a structured training program.",
          "Training is ongoing, documented, and continuously improved.",
        ]}
      />

      <ScoreCard
        label="Employee Benefits"
        description="Which statement best describes the benefits you provide?"
        name="benefits"
        value={formData.benefits}
        onChange={handleChange}
        options={[
          "We offer little or no employee benefits.",
          "We offer only basic benefits.",
          "We provide competitive benefits.",
          "Benefits help us attract quality employees.",
          "Benefits are a major competitive advantage in recruiting and retention.",
        ]}
      />

      <ScoreCard
        label="Performance Management"
        description="Which statement best describes how employee performance is managed?"
        name="performance"
        value={formData.performance}
        onChange={handleChange}
        options={[
          "Performance is rarely discussed.",
          "Performance discussions happen only when problems arise.",
          "Employees receive periodic feedback.",
          "Performance is reviewed regularly with clear goals.",
          "Performance is measured, coached, and rewarded continuously.",
        ]}
      />

      <ScoreCard
        label="Company Culture"
        description="Which statement best describes your company culture?"
        name="culture"
        value={formData.culture}
        onChange={handleChange}
        options={[
          "Company culture has not been intentionally developed.",
          "Culture varies across the organization.",
          "We have a generally positive culture.",
          "Culture is one of our strengths.",
          "Our culture consistently attracts, develops, and retains exceptional employees.",
        ]}
      />

    </StepLayout>
  );
}
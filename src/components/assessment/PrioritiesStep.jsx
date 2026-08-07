import StepLayout from "./StepLayout";
import SectionHeader from "./SectionHeader";
import ScoreCard from "./ScoreCard";

export default function PrioritiesStep({
  formData,
  handleChange,
}) {
  return (
    <StepLayout>

      <SectionHeader
        badge="Business Priorities"
        title="Identify Your Highest Business Priorities"
        description="These questions help determine where the greatest opportunities exist to improve revenue, profitability, efficiency, and long-term growth."
        tip="Choose the statement that best describes your business today."
      />

      <ScoreCard
        label="Revenue Growth"
        description="Which statement best describes your current revenue growth?"
        name="revenuePriority"
        value={formData.revenuePriority}
        onChange={handleChange}
        options={[
          "Revenue has declined or remained flat.",
          "Revenue is growing slowly but inconsistently.",
          "Revenue is growing at a healthy pace.",
          "Revenue growth consistently exceeds expectations.",
          "Revenue growth is predictable, scalable, and supported by proven systems.",
        ]}
      />

      <ScoreCard
        label="Lead Generation"
        description="Which statement best describes your ability to generate qualified leads?"
        name="leadGeneration"
        value={formData.leadGeneration}
        onChange={handleChange}
        options={[
          "Finding new customers is our biggest challenge.",
          "Lead flow is inconsistent.",
          "We usually generate enough leads.",
          "We consistently generate qualified leads.",
          "Our lead generation system is predictable and scalable.",
        ]}
      />

      <ScoreCard
        label="Profitability"
        description="Which statement best describes your business profitability?"
        name="profitability"
        value={formData.profitability}
        onChange={handleChange}
        options={[
          "Profit margins are a constant concern.",
          "Profitability varies from month to month.",
          "Our business is consistently profitable.",
          "We closely monitor and improve profitability.",
          "Profitability is strong, predictable, and continually improving.",
        ]}
      />

      <ScoreCard
        label="Business Systems"
        description="Which statement best describes your business systems?"
        name="businessSystems"
        value={formData.businessSystems}
        onChange={handleChange}
        options={[
          "Most work depends on people rather than systems.",
          "Some systems are in place.",
          "We have documented systems for key areas.",
          "Our systems are consistent across the business.",
          "Our business runs on optimized, scalable systems.",
        ]}
      />

      <ScoreCard
        label="Growth Readiness"
        description="Which statement best describes your readiness for growth?"
        name="growthReadiness"
        value={formData.growthReadiness}
        onChange={handleChange}
        options={[
          "We are focused on solving day-to-day problems.",
          "We want to grow but lack a clear plan.",
          "We have a growth strategy in place.",
          "Our business is positioned for significant growth.",
          "We are fully prepared to scale our business.",
        ]}
      />

      <ScoreCard
        label="Overall Business Confidence"
        description="Which statement best describes your confidence in achieving your business goals over the next 12 months?"
        name="businessConfidence"
        value={formData.businessConfidence}
        onChange={handleChange}
        options={[
          "I'm uncertain about the future of the business.",
          "I have concerns about achieving our goals.",
          "I'm cautiously optimistic.",
          "I'm confident we'll achieve our goals.",
          "I'm extremely confident because we have the right strategy, systems, and team in place.",
        ]}
      />

    </StepLayout>
  );
}
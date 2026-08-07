import StepLayout from "./StepLayout";
import SectionHeader from "./SectionHeader";
import ScoreCard from "./ScoreCard";

export default function OperationsStep({
  formData,
  handleChange,
}) {
  return (
    <StepLayout>

      <SectionHeader
        badge="Operations"
        title="Evaluate Your Business Operations"
        description="Efficient operations reduce costs, improve customer satisfaction, and increase profitability."
        tip="Choose the statement that best describes how your business operates today."
      />

      <ScoreCard
        label="Scheduling"
        description="Which statement best describes your scheduling process?"
        name="scheduling"
        value={formData.scheduling}
        onChange={handleChange}
        options={[
          "Scheduling is handled manually and often creates conflicts.",
          "Scheduling is mostly manual with occasional issues.",
          "We have a fairly organized scheduling process.",
          "Scheduling is efficient and consistently managed.",
          "Scheduling is fully optimized and automated where possible.",
        ]}
      />

      <ScoreCard
        label="Job Dispatching"
        description="Which statement best describes how work is assigned to your team?"
        name="dispatching"
        value={formData.dispatching}
        onChange={handleChange}
        options={[
          "Assignments are handled informally.",
          "Assignments are mostly manual.",
          "We have a standard dispatch process.",
          "Dispatching is organized and efficient.",
          "Dispatching is technology-driven and optimized.",
        ]}
      />

      <ScoreCard
        label="Workflow Efficiency"
        description="Which statement best describes your daily workflow?"
        name="workflow"
        value={formData.workflow}
        onChange={handleChange}
        options={[
          "Our workflow is inconsistent and reactive.",
          "We have frequent bottlenecks.",
          "Most work flows smoothly.",
          "Our workflow is well documented and consistent.",
          "Our workflow is continuously measured and improved.",
        ]}
      />

      <ScoreCard
        label="Team Communication"
        description="Which statement best describes communication within your team?"
        name="communication"
        value={formData.communication}
        onChange={handleChange}
        options={[
          "Communication is mostly verbal and inconsistent.",
          "Communication varies between team members.",
          "We have regular communication processes.",
          "Communication is organized and dependable.",
          "Communication is standardized and supported by technology.",
        ]}
      />

      <ScoreCard
        label="Process Documentation"
        description="Which statement best describes your documented procedures?"
        name="documentation"
        value={formData.documentation}
        onChange={handleChange}
        options={[
          "Most processes are undocumented.",
          "Some procedures are written down.",
          "Key processes are documented.",
          "Most business processes are documented.",
          "Documentation is complete, current, and used for training.",
        ]}
      />

      <ScoreCard
        label="Operational Efficiency"
        description="Which statement best describes your overall business operations?"
        name="operations"
        value={formData.operations}
        onChange={handleChange}
        options={[
          "Daily operations frequently experience problems.",
          "Operations are improving but inconsistent.",
          "Operations generally run well.",
          "Operations are efficient and predictable.",
          "Operations are highly optimized and continuously improved.",
        ]}
      />

    </StepLayout>
  );
}
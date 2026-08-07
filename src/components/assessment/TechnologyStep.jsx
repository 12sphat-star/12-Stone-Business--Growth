import StepLayout from "./StepLayout";
import SectionHeader from "./SectionHeader";
import ScoreCard from "./ScoreCard";

export default function TechnologyStep({
  formData,
  handleChange,
}) {
  return (
    <StepLayout>

      <SectionHeader
        badge="Technology"
        title="Evaluate Your Business Technology"
        description="Technology should help your business attract more customers, improve efficiency, and increase profitability."
        tip="Choose the statement that best describes how your business operates today."
      />

      <ScoreCard
        label="Website Effectiveness"
        description="Which statement best describes your website?"
        name="website"
        value={formData.website}
        onChange={handleChange}
        options={[
          "We don't have a website or it provides little value.",
          "Our website is mostly an online brochure.",
          "Our website occasionally generates leads.",
          "Our website consistently generates qualified leads.",
          "Our website works as a 24/7 sales and customer acquisition system.",
        ]}
      />

      <ScoreCard
        label="Customer Relationship Management (CRM)"
        description="Which statement best describes how customer information is managed?"
        name="crm"
        value={formData.crm}
        onChange={handleChange}
        options={[
          "We don't use a CRM.",
          "Customer information is tracked manually.",
          "We use a CRM for basic customer records.",
          "Our CRM supports sales, service, and follow-up.",
          "Our CRM is fully integrated with automation and reporting.",
        ]}
      />

      <ScoreCard
        label="Marketing Automation"
        description="Which statement best describes your marketing automation?"
        name="marketingAutomation"
        value={formData.marketingAutomation}
        onChange={handleChange}
        options={[
          "We do not automate our marketing.",
          "We send occasional emails or text messages manually.",
          "Some marketing campaigns are automated.",
          "Most customer communication is automated.",
          "Our marketing runs through fully automated campaigns and workflows.",
        ]}
      />

      <ScoreCard
        label="Artificial Intelligence (AI)"
        description="Which statement best describes your use of AI in your business?"
        name="ai"
        value={formData.ai}
        onChange={handleChange}
        options={[
          "We are not using AI.",
          "We have experimented with AI tools.",
          "We use AI for a few business tasks.",
          "AI supports several areas of our business.",
          "AI is integrated throughout our operations and customer experience.",
        ]}
      />

      <ScoreCard
        label="Reporting & Business Insights"
        description="Which statement best describes how you monitor business performance?"
        name="reporting"
        value={formData.reporting}
        onChange={handleChange}
        options={[
          "We rarely track business performance.",
          "We review reports occasionally.",
          "We regularly review key business metrics.",
          "We use reports to guide business decisions.",
          "Real-time reporting drives continuous business improvement.",
        ]}
      />

      <ScoreCard
        label="Technology Integration"
        description="Which statement best describes how your business systems work together?"
        name="technologyIntegration"
        value={formData.technologyIntegration}
        onChange={handleChange}
        options={[
          "Most of our systems are separate and disconnected.",
          "Some systems share information.",
          "Several business systems are integrated.",
          "Most of our technology works together efficiently.",
          "Our business operates on a fully integrated technology platform.",
        ]}
      />

    </StepLayout>
  );
}
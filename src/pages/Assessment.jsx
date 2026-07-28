import { useState } from "react";

import AssessmentHeader from "../components/assessment/AssessmentHeader";
import AssessmentSidebar from "../components/assessment/AssessmentSidebar";

import BusinessProfileStep from "../components/assessment/BusinessProfileStep";
import BusinessGrowthStep from "../components/assessment/BusinessGrowthStep";
import CustomerExperienceStep from "../components/assessment/CustomerExperienceStep";
import OperationsStep from "../components/assessment/OperationsStep";
import EmployeeGrowthStep from "../components/assessment/EmployeeGrowthStep";
import TechnologyStep from "../components/assessment/TechnologyStep";
import PrioritiesStep from "../components/assessment/PrioritiesStep";
import ReviewStep from "../components/assessment/ReviewStep";

import "../styles/executiveBrief.css";

export default function Assessment() {

  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 7));
  };

  const previousStep = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const renderStep = () => {

    switch (step) {

      case 0:
        return (
          <BusinessProfileStep
            formData={formData}
            handleChange={handleChange}
          />
        );

      case 1:
        return (
          <BusinessGrowthStep
            formData={formData}
            handleChange={handleChange}
          />
        );

      case 2:
        return (
          <CustomerExperienceStep
            formData={formData}
            handleChange={handleChange}
          />
        );

      case 3:
        return (
          <OperationsStep
            formData={formData}
            handleChange={handleChange}
          />
        );

      case 4:
        return (
          <EmployeeGrowthStep
            formData={formData}
            handleChange={handleChange}
          />
        );

      case 5:
        return (
          <TechnologyStep
            formData={formData}
            handleChange={handleChange}
          />
        );

      case 6:
        return (
          <PrioritiesStep
            formData={formData}
            handleChange={handleChange}
          />
        );

      case 7:
        return <ReviewStep formData={formData} />;

      default:
        return null;
    }
  };

  return (

    <main className="brief-page">

      <AssessmentSidebar currentStep={step} />

      <section className="brief-container">

        <AssessmentHeader />

        {renderStep()}

        <div className="navigation-buttons">

          {step > 0 && (
            <button onClick={previousStep}>
              Previous
            </button>
          )}

          {step < 7 ? (
            <button onClick={nextStep}>
              Next
            </button>
          ) : (
            <button>
              Submit Assessment
            </button>
          )}

        </div>

      </section>

    </main>

  );

}
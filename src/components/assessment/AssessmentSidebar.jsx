export default function AssessmentSidebar({ currentStep }) {
  const steps = [
    "Business Profile",
    "Revenue & Growth",
    "Customer Experience",
    "Operations",
    "Employee Growth",
    "Technology",
    "Business Priorities",
    "Executive Review",
  ];

const progress = Math.round(((currentStep + 1) / steps.length) * 100);




  return (
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
            {progress}
          </span>

          <small>% Complete</small>

        </div>

        <div className="sidebar-mini-progress">

          <div
            className="sidebar-mini-progress-fill"
            style={{ width: `${progress}%` }}
          />

        </div>

        <div className="sidebar-time">
          ⏱ Approximately {Math.max(1, steps.length - currentStep)} Minutes Remaining
        </div>

      </div>

      <nav className="sidebar-nav">

        {steps.map((step, index) => (

          <div
            key={index}
            className={
              currentStep >= index
                ? "nav-item active"
                : "nav-item"
            }
          >

            <span>

              {currentStep > index ? "✓" : index + 1}

            </span>

            {step}

          </div>

        ))}

      </nav>

    </aside>
  );
}
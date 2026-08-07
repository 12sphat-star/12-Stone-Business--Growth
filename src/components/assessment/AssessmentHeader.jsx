export default function AssessmentHeader({ progress = 0 }) {
  return (
    <header className="brief-header">

      <span className="eyebrow">
        Powered by 12 Stone Smart Websites™
      </span>

      <h1>
        Discover Hidden Revenue Already Inside Your Business
      </h1>

      <p className="brief-lead">
        Complete this complimentary Business Growth Snapshot™ to identify
        hidden revenue opportunities, customer retention improvements,
        operational efficiencies, employee growth opportunities, and AI
        strategies customized for your business.
      </p>

      {/* Executive Benefits */}

      <div className="brief-trust">

        <div className="trust-card">
          <h3>✓ 8–10 Minutes</h3>
          <p>
            Complete your Business Growth IQ™ Assessment in less than
            ten minutes.
          </p>
        </div>

        <div className="trust-card">
          <h3>📊 Personalized Executive Snapshot™</h3>
          <p>
            Receive a customized analysis identifying your greatest
            revenue opportunities and business growth potential.
          </p>
        </div>

        <div className="trust-card">
          <h3>🎯 Complimentary Strategy Session</h3>
          <p>
            Review your Executive Snapshot™ with a 12 Stone Business
            Growth Strategist and discover your highest-impact next steps.
          </p>
        </div>

      </div>

      {/* Executive Progress */}

      <div className="executive-progress">

        <div className="progress-top">

          <div>

            <span className="progress-label">
              Assessment Progress
            </span>

            <h3>
              Business Growth IQ™ Assessment
            </h3>

          </div>

          <div className="progress-percent">
            {progress}%
          </div>

        </div>

        <div className="progress-wrapper">

          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />

        </div>

        <div className="progress-footer">

          <span>
            Complete all 8 sections to unlock your Executive Business
            Snapshot™.
          </span>

          <strong>
            Complimentary Business Growth Strategy Session Included
          </strong>

        </div>

      </div>

    </header>
  );
}
export default function BusinessProfileStep({
  formData,
  handleChange,
}) {
  return (
    <section className="brief-section">

      <div className="section-title">

        <span className="step-number">
          Business Profile™
        </span>

        <h2>
          Tell Us About Your Business
        </h2>

        <p>
          This information helps us customize your Business Growth Snapshot™
          and Executive Business Growth Brief™ specifically for your business.
        </p>

      </div>

      <div className="section-tip">

        🏢 Your information is kept confidential and used only to prepare your customized business recommendations.

      </div>

      <div className="brief-grid">

        <div className="form-group">

          <label>Business Name *</label>

          <input
            type="text"
            name="businessName"
            value={formData.businessName || ""}
            onChange={handleChange}
            placeholder="ABC Plumbing"
          />

        </div>

        <div className="form-group">

          <label>Contact Name *</label>

          <input
            type="text"
            name="contactName"
            value={formData.contactName || ""}
            onChange={handleChange}
            placeholder="John Smith"
          />

        </div>

        <div className="form-group">

          <label>Email *</label>

          <input
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            placeholder="john@email.com"
          />

        </div>

        <div className="form-group">

          <label>Phone *</label>

          <input
            type="tel"
            name="phone"
            value={formData.phone || ""}
            onChange={handleChange}
            placeholder="(555) 555-5555"
          />

        </div>

        <div className="form-group">

          <label>Website</label>

          <input
            type="text"
            name="website"
            value={formData.website || ""}
            onChange={handleChange}
            placeholder="www.yourbusiness.com"
          />

        </div>

        <div className="form-group">

          <label>Industry</label>

          <select
            name="industry"
            value={formData.industry || ""}
            onChange={handleChange}
          >

            <option value="">Select Industry</option>

            <option>HVAC</option>
            <option>Plumbing</option>
            <option>Electrical</option>
            <option>Roofing</option>
            <option>Landscaping</option>
            <option>Pest Control</option>
            <option>Restoration</option>
            <option>Construction</option>
            <option>Automotive</option>
            <option>Professional Services</option>
            <option>Healthcare</option>
            <option>Retail</option>
            <option>Restaurant</option>
            <option>Other</option>

          </select>

        </div>

        <div className="form-group">

          <label>Number of Employees</label>

          <select
            name="employees"
            value={formData.employees || ""}
            onChange={handleChange}
          >

            <option value="">Select</option>

            <option>1</option>
            <option>2–5</option>
            <option>6–10</option>
            <option>11–20</option>
            <option>21–35</option>
            <option>36–50</option>

          </select>

        </div>

        <div className="form-group">

          <label>Years in Business</label>

          <select
            name="yearsInBusiness"
            value={formData.yearsInBusiness || ""}
            onChange={handleChange}
          >

            <option value="">Select</option>

            <option>Less than 1 year</option>
            <option>1–3 Years</option>
            <option>4–7 Years</option>
            <option>8–15 Years</option>
            <option>16+ Years</option>

          </select>

        </div>

      </div>

    </section>
  );
}
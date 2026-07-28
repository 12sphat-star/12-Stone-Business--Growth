export default function ReviewStep({ formData }) {
  return (
    <section className="brief-section">
      <h2>Executive Review</h2>

      <p>
        Thank you for completing your Business Growth Snapshot™.
      </p>

      <pre>{JSON.stringify(formData, null, 2)}</pre>

    </section>
  );
}
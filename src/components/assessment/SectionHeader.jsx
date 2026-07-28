export default function SectionHeader({
  badge,
  title,
  description,
  tip,
}) {
  return (
    <>
      <div className="section-title">

        <span className="step-number">
          {badge}
        </span>

        <h2>{title}</h2>

        <p>{description}</p>

        {tip && (
          <div className="section-tip">
            {tip}
          </div>
        )}

      </div>
    </>
  );
}
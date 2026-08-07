import "../../styles/components/assessment/ScoreCard.css";

export default function ScoreCard({
  label,
  description,
  name,
  value,
  onChange,
  options,
}) {

  const defaultOptions = [
    "Needs Immediate Attention",
    "Needs Improvement",
    "Average",
    "Strong",
    "Industry Leader",
  ];

  const ratings = (options || defaultOptions).map((option, index) => ({
    value: String(index + 1),
    title: option,
    color: [
      "#dc2626",
      "#f59e0b",
      "#eab308",
      "#16a34a",
      "#2563eb",
    ][index],
  }));

  return (
    <div className="score-card">

      <h3>{label}</h3>

      <p>{description}</p>

      <div className="score-instruction">
        Choose the statement that best describes your business today.
      </div>

      <div className="score-options">

        {ratings.map((rating) => (

          <button
            key={rating.value}
            type="button"
            className={
              value === rating.value
                ? "score-option active"
                : "score-option"
            }
            style={{
              borderColor:
                value === rating.value
                  ? rating.color
                  : "#e5e7eb",
            }}
            onClick={() =>
              onChange({
                target: {
                  name,
                  value: rating.value,
                },
              })
            }
          >

            <span
              className="score-dot"
              style={{
                background: rating.color,
              }}
            />

            <span className="score-title">
              {rating.title}
            </span>

          </button>

        ))}

      </div>

    </div>
  );
}
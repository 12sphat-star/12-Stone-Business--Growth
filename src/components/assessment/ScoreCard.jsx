import "../../styles/components/assessment/ScoreCard.css";

export default function ScoreCard({
  label,
  description,
  name,
  value,
  onChange,
}) {
  const ratings = [
    { value: "1", title: "Needs Immediate Attention", color: "#dc2626" },
    { value: "2", title: "Needs Improvement", color: "#f59e0b" },
    { value: "3", title: "Average", color: "#eab308" },
    { value: "4", title: "Strong", color: "#16a34a" },
    { value: "5", title: "Industry Leader", color: "#2563eb" },
  ];

  return (
    <div className="score-card">

      <h3>{label}</h3>

      <p>{description}</p>

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

            {rating.title}

          </button>

        ))}

      </div>

    </div>
  );
}
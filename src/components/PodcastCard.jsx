function PodcastCard({ podcast }) {
  return (
    <div
      className="card"
      style={{
        cursor: "pointer",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <img
        src={podcast.image}
        alt={podcast.title}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h3>{podcast.title}</h3>
    </div>
  );
}

export default PodcastCard;
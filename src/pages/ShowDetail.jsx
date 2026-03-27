import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const genreMap = {
  1: "Personal Growth",
  2: "Investigative Journalism",
  3: "History",
  4: "Comedy",
  5: "Entertainment",
  6: "Business",
  7: "Fiction",
  8: "News",
  9: "Kids and Family",
};

function ShowDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [show, setShow] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setShow(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load show");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2>Loading... ⏳</h2>;
  if (error) return <p>{error}</p>;
  if (!show) return <p>No show found</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      {/* BACK */}
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      {/* TOP */}
      <div
  style={{
    display: "flex",
    gap: "30px",
    marginTop: "20px",
    alignItems: "flex-start",
    flexWrap: "wrap",
  }}
>
  {/* LEFT: IMAGE */}
  <img
    src={show.image}
    style={{
      width: "300px",
      borderRadius: "10px",
      flexShrink: 0,
    }}
  />

  {/* RIGHT: CONTENT */}
  <div style={{ flex: 1, minWidth: "250px" }}>
    <h1>{show.title}</h1>

    <p style={{ lineHeight: "1.6" }}>{show.description}</p>

    {/* GENRES */}
    <div style={{ marginTop: "10px" }}>
      <strong>Genres: </strong>
      {show.genres.map((g) => (
        <span
          key={g}
          style={{
            marginRight: "10px",
            padding: "5px 10px",
            border: "1px solid #ccc",
            borderRadius: "20px",
            fontSize: "12px",
          }}
        >
          {genreMap[g]}
        </span>
      ))}
    </div>

    {/* EXTRA INFO */}
    <div style={{ marginTop: "10px" }}>
      <p>
        <strong>Last Updated:</strong>{" "}
        {new Date(show.updated).toDateString()}
      </p>

      <p>
        <strong>Total Seasons:</strong> {show.seasons.length}
      </p>

      <p>
        <strong>Total Episodes:</strong>{" "}
        {show.seasons.reduce(
          (total, s) => total + s.episodes.length,
          0
        )}
      </p>
    </div>
  </div>
</div>
        <img src={show.image} style={{ width: "250px", borderRadius: "10px" }} />

        <div>
          <h1>{show.title}</h1>
          <p>{show.description}</p>

          <p>
            Last Updated: {new Date(show.updated).toDateString()}
          </p>

          {/* GENRES */}
          <h3>Genres</h3>
          {show.genres.map((g) => (
            <span
              key={g}
              style={{
                marginRight: "10px",
                border: "1px solid #ccc",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              {genreMap[g]}
            </span>
          ))}
        </div>
      </div>

      {/* SEASON SELECT */}
      <h2 style={{ marginTop: "30px" }}>Current Season</h2>

      <select
        value={selectedSeason}
        onChange={(e) => setSelectedSeason(Number(e.target.value))}
      >
        {show.seasons.map((season) => (
          <option key={season.season} value={season.season}>
            Season {season.season}
          </option>
        ))}
      </select>

      {/* SEASON DATA */}
      {show.seasons
        .filter((season) => season.season === selectedSeason)
        .map((season) => (
          <div key={season.season} style={{ marginTop: "20px" }}>
            <h3>Season {season.season}</h3>
            <p>{season.episodes.length} Episodes</p>

            {season.episodes.map((ep) => (
              <div
                key={ep.episode}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <p>
                  <strong>
                    Episode {ep.episode}: {ep.title}
                  </strong>
                </p>

                <p>
                  {ep.description.length > 100
                    ? ep.description.slice(0, 100) + "..."
                    : ep.description}
                </p>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default ShowDetail;
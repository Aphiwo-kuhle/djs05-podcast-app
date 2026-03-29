import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Genre mapping
const genreMap = {
  1: "Personal Growth",
  2: "Investigative Journalism",
  3: "History",
  4: "Comedy",
  5: "Entertainment",
  6: "Business",
  7: "Fiction",
  8: "News",
  9: "Kids & Family",
};

function ShowDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [show, setShow] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch show data
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

  // ✅ SAFE CHECKS
  if (loading) return <h2>Loading... ⏳</h2>;
  if (error) return <p>{error}</p>;
  if (!show) return <p>No show found</p>;

  const hasSeasons = show.seasons && show.seasons.length > 0;

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
      {/* 🔙 BACK */}
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      {/* 🔥 TOP */}
      <div style={{ display: "flex", gap: "30px", marginTop: "20px", flexWrap: "wrap" }}>
        <img
          src={show.image}
          alt={show.title}
          style={{ width: "300px", borderRadius: "10px" }}
        />

        <div style={{ flex: 1 }}>
          <h1>{show.title}</h1>
          <p>{show.description}</p>

          {/* 🎯 GENRES */}
          <div>
            <strong>Genres: </strong>
            {show.genres?.map((g) => (
              <span key={g}>{genreMap[g]} </span>
            ))}
          </div>

          {/* 📊 EXTRA INFO */}
          <p><strong>Seasons:</strong> {hasSeasons ? show.seasons.length : 0}</p>
          <p>
            <strong>Episodes:</strong>{" "}
            {hasSeasons
              ? show.seasons.reduce((total, s) => total + (s.episodes?.length || 0), 0)
              : 0}
          </p>
        </div>
      </div>

      {/* 🎛 SEASON SELECT */}
      {hasSeasons ? (
        <>
          <h2 style={{ marginTop: "30px" }}>Select Season</h2>
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

          {/* 📺 EPISODES */}
          {show.seasons
            .filter((season) => season.season === selectedSeason)
            .map((season) => (
              <div key={season.season} style={{ marginTop: "20px" }}>
                <h3>Season {season.season}</h3>
                {season.episodes?.map((ep) => (
                  <div
                    key={ep.episode}
                    style={{
                      border: "1px solid #ccc",
                      padding: "10px",
                      marginBottom: "10px",
                      borderRadius: "8px",
                    }}
                  >
                    <p>
                      <strong>
                        Episode {ep.episode}: {ep.title}
                      </strong>
                    </p>
                    <p>
                      {ep.description?.length > 100
                        ? ep.description.slice(0, 100) + "..."
                        : ep.description}
                    </p>
                  </div>
                ))}
              </div>
            ))}
        </>
      ) : (
        <p style={{ marginTop: "20px" }}>No season data available for this show.</p>
      )}
    </div>
  );
}

export default ShowDetail;
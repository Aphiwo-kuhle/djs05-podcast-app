import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// 👉 Genre map
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

function Home() {
  const navigate = useNavigate();

  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  // 👉 Fetch shows
  useEffect(() => {
    fetch("https://podcast-api.netlify.app")
      .then((res) => res.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load shows");
        setLoading(false);
      });
  }, []);

  // 👉 Filter logic
  const filteredShows = shows.filter((show) => {
    const matchesSearch = show.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre =
      selectedGenre === "" || show.genres.includes(Number(selectedGenre));

    return matchesSearch && matchesGenre;
  });

  if (loading) return <h2>Loading shows...</h2>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <h1>All Podcasts</h1>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search podcasts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />

      {/* 🎛 FILTER */}
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">All Genres</option>
        {Object.entries(genreMap).map(([id, name]) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>

      <hr />

      {/* 📺 GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredShows.length === 0 && <p>No shows found</p>}

        {filteredShows.map((show) => (
          <div
            key={show.id}
            onClick={() => navigate(`/show/${show.id}`)}
            style={{
              cursor: "pointer",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "10px",
              transition: "0.3s",
            }}
          >
            <h3>{show.title}</h3>

            <img
              src={show.image}
              style={{ width: "100%", borderRadius: "10px" }}
            />

            {/* GENRES */}
            <div style={{ marginTop: "10px" }}>
              {show.genres.map((g) => (
                <span
                  key={g}
                  style={{
                    marginRight: "8px",
                    fontSize: "12px",
                    border: "1px solid #ccc",
                    padding: "3px",
                  }}
                >
                  {genreMap[g]}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
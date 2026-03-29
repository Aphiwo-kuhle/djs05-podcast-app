import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PodcastCard from "../components/PodcastCard";

// 🎯 Genre map
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

function Home() {
  const navigate = useNavigate();

  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState(localStorage.getItem("search") || "");
  const [selectedGenre, setSelectedGenre] = useState(localStorage.getItem("genre") || "");

  // 💾 Save filters
  useEffect(() => {
    localStorage.setItem("search", search);
  }, [search]);

  useEffect(() => {
    localStorage.setItem("genre", selectedGenre);
  }, [selectedGenre]);

  // 📡 Fetch data
  useEffect(() => {
    fetch("https://podcast-api.netlify.app")
      .then((res) => res.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load podcasts");
        setLoading(false);
      });
  }, []);

  // 🔍 Filtered shows
  const filteredShows = shows.filter((show) => {
    const matchesSearch = show.title?.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = !selectedGenre || show.genres?.includes(Number(selectedGenre));
    return matchesSearch && matchesGenre;
  });

  if (loading) return <h2>Loading podcasts... ⏳</h2>;
  if (error) return <p>{error}</p>;
  if (filteredShows.length === 0) return <p>No podcasts found.</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <h1>All Podcasts 🎧</h1>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search podcasts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: "10px", padding: "8px" }}
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
        {filteredShows.map((show) => (
          <div
            key={show.id}
            onClick={() => navigate(`/show/${show.id}`)}
            style={{ cursor: "pointer" }}
          >
            <PodcastCard podcast={show} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
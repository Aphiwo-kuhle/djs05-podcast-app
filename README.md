🎧 Podcast App (DJS05)

🌐 Live Demo: https://podcast-djs05.netlify.app

📌 Project Overview

This is a Podcast Web Application built using React and React Router.

Users can:

Browse podcasts
Search and filter shows
View detailed show information
Explore seasons and episodes
🚀 Features
🔍 Homepage
Displays a list of podcasts
Search functionality to find shows
Filter podcasts by genre
Responsive grid layout
Entire show card is clickable (no separate button needed)
🔗 Navigation & Routing
Dynamic routing using React Router
Each show has its own page (/show/:id)
Back button returns to homepage
Search + filter state is preserved using localStorage
📄 Show Detail Page

Displays:

🎯 Podcast title
🖼️ Large cover image
📝 Full description
🏷️ Genre tags
📅 Last updated date (formatted)
🎛 Season Navigation
Dropdown to switch between seasons
Displays season number, number of episodes, and episode list
🎧 Episodes
Each episode shows:
Episode number
Episode title
✂️ Short description (trimmed for readability)
⚙️ Data Handling
Data fetched from: https://podcast-api.netlify.app
Handles:
⏳ Loading states
❌ Error states
⚠️ Empty states
📱 Responsive Design
Fully responsive across:
📱 Mobile
💻 Tablet
🖥️ Desktop
🛠 Technologies Used
React
React Router DOM
JavaScript (ES6)
CSS (Inline + responsive styles)
▶️ How to Run Locally
npm install
npm run dev

Then open: http://localhost:5173

📁 Project Structure
src/
 ├── pages/
 │   ├── Home.jsx
 │   └── ShowDetail.jsx
 ├── components/
 │   └── PodcastCard.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css
📌 Key Concepts Learned
React Hooks (useState, useEffect)
Dynamic Routing with React Router
API Data Fetching
State Persistence (localStorage)
Responsive Design
Component-based architecture
👨‍💻 Author

Aphiwokuhle

✅ Final Checklist
🔥 Functionality
Routing works
Dynamic pages
API data fetching
Loading + error states
Season switching
Episode list
🔥 UX
Search
Filter
Back button keeps state
🔥 UI
Responsive layout
Clickable cards
Clean design
🏁 Final Notes

This project demonstrates a complete React application with:

Navigation
Data handling
UI/UX design
Real-world functionality

🌐 Live Site: https://podcast-djs05.netlify.app
# 🎧 Podcast App (DJS05)

## 🌐 Live Demo

👉 https://podcast-djs05.netlify.app

---

## 📌 Project Overview

This project is a **Podcast Web Application** built using **React** and **React Router**.

Users can:

* Browse podcasts
* Search and filter shows
* View detailed show information
* Explore seasons and episodes

---

## 🚀 Features

### 🔍 Homepage

* Displays a list of podcasts
* Search functionality to find shows
* Filter podcasts by genre
* Responsive grid layout
* Entire show card is clickable (no button needed)

---

### 🔗 Navigation & Routing

* Dynamic routing using React Router
* Each show has its own page:

  ```
  /show/:id
  ```
* Clicking a show navigates to its detail page
* Back button returns to homepage
* ✅ Search + filter state is preserved (localStorage)

---

### 📄 Show Detail Page

Displays:

* 🎯 Podcast title
* 🖼️ Large cover image
* 📝 Full description
* 🏷️ Genre tags
* 📅 Last updated date (formatted)

---

### 🎛 Season Navigation

* Dropdown to switch between seasons
* Displays:

  * Season number
  * Number of episodes
  * Episode list

---

### 🎧 Episodes

Each episode shows:

* Episode number
* Episode title
* ✂️ Short description (trimmed for readability)

---

### ⚙️ Data Handling

Data is fetched from:
👉 https://podcast-api.netlify.app

Handles:

* ⏳ Loading states
* ❌ Error states
* ⚠️ Empty states

---

### 📱 Responsive Design

Fully responsive across:

* 📱 Mobile
* 💻 Tablet
* 🖥️ Desktop

---

## 🛠️ Technologies Used

* React
* React Router DOM
* JavaScript (ES6)
* CSS (Inline + responsive styles)

---

## ▶️ How to Run Locally

```bash
npm install
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## 📁 Project Structure

```
src/
 ├── pages/
 │   ├── Home.jsx
 │   └── ShowDetail.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## 📌 Key Concepts Learned

* React Hooks (`useState`, `useEffect`)
* Dynamic Routing with React Router
* API Data Fetching
* State Persistence (localStorage)
* Responsive Design
* Component-based architecture

---

## 👨‍💻 Author

**Aphiwokuhle**

---

## ✅ Final Checklist

### 🔥 Functionality

* [x] Routing works
* [x] Dynamic pages
* [x] API data fetching
* [x] Loading + error states
* [x] Season switching
* [x] Episode list

### 🔥 UX

* [x] Search
* [x] Filter
* [x] Back button keeps state

### 🔥 UI

* [x] Responsive layout
* [x] Clickable cards
* [x] Clean design

---

## 🏁 Final Notes

This project demonstrates a complete React application with:

* Navigation
* Data handling
* UI/UX design
* Real-world functionality

---

## 🚀 Live Site

👉 https://podcast-djs05.netlify.app

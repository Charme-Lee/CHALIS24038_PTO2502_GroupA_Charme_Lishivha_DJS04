# 🎧 DSJ04 React Podcast App: Search, Sort, Filter, and Pagination

## 📌 Project Overview

The Podcast App is an advanced podcast browsing interface built using **React**.
It allows users to **search**, **sort**, **filter**, and **paginate** podcast shows dynamically all while maintaining a seamless and consistent user experience.

This project demonstrates the ability to manage **complex UI state**, **synchronize multiple user interactions**, and write **clean, modular, and maintainable React code**.

---

## ⚙️ Tech Stack

- 🧱 **HTML5**
- 🎨 **CSS3 / Flexbox / Grid**
- 📜 **JavaScript (ES6+)**
- 🔡 **Google Fonts**
- 🧩 **React (UI framework)**
- 🧭 **Fetch API**

- <small><i>Use of some open source to unpack challenging topics</i></small>

## ✅ Core Features

### 🔍 Search Functionality

- Search any part of a podcast’s title.
- Results update dynamically as the user types.
- Search integrates smoothly with filters, sorting, and pagination, no state resets.

### 🔢 Sorting Options

- Sort podcasts by:
  - **Newest first** (based on last updated date)
  - **Title A–Z**
  - **Title Z–A**
- Sorting works in combination with all active filters and searches.

### 🏷️ Filtering

- Filter podcasts by **genre** using a dropdown or multi-select control.
- Genre IDs are mapped to their titles via `data.js`.
- Filters remain active when navigating between pages or updating the list.

### 📄 Pagination

- Display podcasts in **manageable chunks** using numbered pagination i.e “Load More,”
- Pagination respects active search, filter, and sorting states.
- User selections persist while navigating through pages.

### 🧠 State Synchronisation

- Centralised state management using React hooks & Context API.
- All UI controls (search, sort, filter, pagination) update instantly and stay in sync.

---

## 🧩 API Information

### API Endpoint

This endpoint returns an array of **podcast previews**.
| URL | |
| --------------------------------- | --------------------------- |
| `https://podcast-api.netlify.app` |
Example response:

```json
{
  "id": 1,
  "title": "Science Weekly",
  "genres": [3, 8],
  "updated": "2024-04-15T00:00:00Z",
  "image": "https://example.com/science.jpg"
}
```

## 🧹 Code Quality & Maintainability

- All major functions and components are documented with JSDoc.

- Modular, reusable React components.

- Consistent formatting, naming conventions, and indentation.

- Clean console (no errors or warnings).

- Version-controlled development with meaningful Git commit messages.

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/Charme-Lee/CHALIS24038_PTO2502_GroupA_Charme_Lishivha_DJS03.git

# 2. Navigate into the project
cd CHALIS24038_PTO2502_GroupA_Charme_Lishivha_DJS03

# 3. Open in browser
Open index.html in any modern browser
```

---

## ✨ Usage Example

Once the app is running, you can:

1. **Browse All Podcasts**  
   View all available podcasts fetched from the public API.

2. **Search Podcasts**  
   Type keywords in the search bar to find podcasts by title.  
   Example: typing “comedy” instantly filters to comedy-related shows.

3. **Filter by Genre**  
   Choose a specific genre from the dropdown (e.g., “History”, “Comedy”).  
   The list updates immediately without resetting the search.

4. **Sort Results**  
   Choose from:

   - Newest First
   - Title A–Z
   - Title Z–A

5. **Paginate**  
   Navigate through pages using “Next” and “Previous” buttons or infinite scroll.

---

© 2025 | DSJ04 React Podcast App | Developed by Charme

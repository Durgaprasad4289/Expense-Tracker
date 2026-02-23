<div align="center">

#  💸 Expense Tracker

### Turn daily spending into clear financial decisions

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Status-Building-orange?style=for-the-badge" alt="Status" />
</p>

</div>

---

## ✨ Overview
A clean and modern **Expense Tracker** web app built with **React + Vite**.  
This project currently includes routed pages for Home, Analysis, History, and Login, and is ready to grow into a full personal finance dashboard.

## 🖼️ Live Preview
> Add your screenshots/GIF below for a premium repo look.

| Home | Analysis |
|------|----------|
| <img width="474" height="514" alt="Image" src="https://github.com/user-attachments/assets/e4233c7e-ba21-413e-8eca-eea01d8a16b8" /> | <img width="474" height="414" alt="Image" src="https://github.com/user-attachments/assets/2aa20c4b-f7b9-42ea-b191-413f891ab1e2" /> |

## 🧩 Current Routes
- Multi-page navigation with `react-router-dom`
- Home layout with nested routes
- Dedicated Analysis page scaffold
- Dedicated History page scaffold
- Dedicated Login page scaffold
- Fast development workflow with Vite

## 🛠️ Tech Stack
| Category | Tools |
|----------|-------|
| Frontend | React 19 |
| Build Tool | Vite 7 |
| Routing | React Router DOM 7 |
| Charts Ready | react-chartjs-2 |
| Code Quality | ESLint |

## 📁 Project Structure
```bash
Expense_Tracker/
├── public/
├── src/
│   ├── components/
│   │   ├── Analysis.jsx
│   │   ├── History.jsx
│   │   ├── Home.jsx
│   │   └── Login.jsx
│   ├── Hero_page/
│   │   └── ExpenseTracker.jsx
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js

```
---
## 📩 Data-Storing  Flow Architecture (Very Important)

**Your program follows this lifecycle:**

###  🔁 First Load

- Read from localStorage

- Initialize state

- Render UI

### 🔁 User Adds Data

- Update React state

- useEffect triggers

- Save updated state to localStorage

### 🔁 Page Refresh

- Read from localStorage again

- Restore previous state

- UI stays consistent

- This is called:

- Client-side persistent state management

---

## 🚀 Quick Start
```bash
# 1) Go to project
cd Expense_Tracker

# 2) Install dependencies
npm install

# 3) Start dev server
npm run dev
```

## 📦 Production Build
```bash
npm run build
npm run preview
```
---

## 🎯 Roadmap
- [ ] Add transaction form (income/expense)
- [ ] Store transactions in localStorage/backend
- [ ] Add category charts and trend analytics
- [ ] Add monthly and yearly filters
- [ ] Add auth + protected routes

## 🤝 Contributing
Contributions are welcome.
Open an issue to discuss major improvements before creating a PR.

## 📄 License
This project is licensed under the **MIT License**.

---

<div align="center">

###  Built with focus, coffee, and React

</div>

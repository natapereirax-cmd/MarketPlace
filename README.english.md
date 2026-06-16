# MarketPlace

> **⚠️ Project under development — many features are still being implemented.**

A marketplace platform where users can create accounts, list products, and contact sellers quickly via WhatsApp or email. The goal is to provide a simple, practical, and efficient experience for buying and selling products online.

---

## Technologies Used

### Frontend

- [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- [React Router DOM v7](https://reactrouter.com/) — page navigation
- [Styled Components](https://styled-components.com/) — styling
- [Axios](https://axios-http.com/) — HTTP requests

### Backend

- [Node.js](https://nodejs.org/) with [Express 5](https://expressjs.com/)
- [MySQL2](https://github.com/sidorares/node-mysql2) — relational database
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) — password hashing
- [JSON Web Token (JWT)](https://jwt.io/) — authentication
- [dotenv](https://github.com/motdotla/dotenv) — environment variables
- [CORS](https://github.com/expressjs/cors) — access control

---

## Project Structure

```
MarketPlace/
├── backend/
│   ├── database/
│   │   └── schema.sql        # Database creation script
│   ├── db.js                 # MySQL connection
│   ├── server.js             # Express server
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/       # Reusable components
    │   │   ├── topbar/
    │   │   ├── logo/
    │   │   ├── search_bar/
    │   │   ├── profile_button/
    │   │   ├── botbar_btn/
    │   │   ├── Home_top/
    │   │   └── category_list/
    │   ├── containers/       # Application pages
    │   │   ├── home/
    │   │   ├── login/
    │   │   ├── signup/
    │   │   └── about_us/
    │   ├── assets/           # Images and fonts
    │   ├── styles/           # Global styles
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

---

## Running Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [MySQL](https://www.mysql.com/) (running locally)
- [Git](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/natapereirax-cmd/MarketPlace.git
cd MarketPlace
```

### 2. Set up the database

Create the database and tables by running the SQL script:

```bash
mysql -u root -p < backend/database/schema.sql
```

### 3. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=marketplace
JWT_SECRET=your_jwt_secret
PORT=3001
```

> **Note:** update `db.js` to read credentials from `.env` before running in production.

Start the server:

```bash
node server.js
```

The backend will be available at `http://localhost:3001`.

### 4. Set up the frontend

```bash
cd ../frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`.

---

## Features

### ✅ Implemented

- Route structure (Home, Login, Sign Up, About Us)
- Login screen (UI)
- Sign Up screen (UI)
- Topbar with logo, search bar, and profile button
- Category listing (UI)
- Database with users table
- Express server with CORS and JSON support

### 🔧 In Progress

- Frontend ↔ backend integration (functional Login and Sign Up)
- JWT authentication
- Product listing creation and display
- Contact seller via WhatsApp / email
- Product details page
- Search and filter by category
- Product image upload
- User dashboard

---

## License

This project does not yet have a defined license.


# PR-3 Admin Panel

This is a Node.js + Express.js based Admin Panel project using **EJS** as the templating engine and **Bootstrap** for the frontend UI.

---

## 📘 Project Overview

The **PR-3 Admin Panel** is a basic admin dashboard developed using Express.js and EJS. It is designed with modular EJS templates and supports Bootstrap styling for a responsive UI. The project structure is ready to be extended with employee management, form submissions, and database integration.

---

## 🚀 Features

- Express.js web server
- Dynamic pages using EJS templating
- Bootstrap-powered frontend
- Modular template structure (`header.ejs`, `footer.ejs`)
- Static file support (CSS, JS, Images)
- Easy to extend with employee management

---

## 🧰 Technologies Used

| Technology     | Use Case                        |
|----------------|----------------------------------|
| Node.js        | JavaScript runtime               |
| Express.js     | Web server framework             |
| EJS            | Templating engine                |
| Bootstrap      | Frontend UI styling              |
| Body-Parser    | Handling form data (middleware)  |

---

## 📁 Project Structure

```
PR-3-AdminPanel/
│
├── index.js               # Main Express server file
├── package.json           # Project metadata and dependencies
├── views/                 # EJS templates
│   ├── index.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
├── public/                # Static assets (CSS, JS, images)
└── node_modules/          # Installed dependencies
```

---

## 🔧 Setup Instructions

### 1. Install Node.js

Download and install from [https://nodejs.org](https://nodejs.org)

### 2. Install Dependencies

Open terminal in the project folder and run:

```bash
npm install
```

### 3. Run the Application

```bash
node index.js
```

### 4. View in Browser

Open [http://localhost:3000](http://localhost:3000)

---

## 📌 Future Enhancements

- Add MongoDB or MySQL integration
- Add authentication and user roles
- Employee CRUD operations
- Real-time dashboard metrics

---

## 🙌 Author

**Tisa Patel**

---


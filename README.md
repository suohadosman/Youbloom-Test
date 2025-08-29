# Youbloom User Management Dashboard

A professional **React** application built with **Vite**, **Tailwind CSS**, and **React Router**.  
This project demonstrates modern frontend development practices, responsive design, and user-friendly interfaces for managing users.

---

## **Project Overview**

- **Login Authentication**: Users log in with a predefined phone number. Authentication state is persisted in local storage to maintain login across page refreshes.  
- **Responsive Header/Navbar**: Reusable header with company logo and logout button.  
- **Users List Page**: Fetches users from a public API, displays them as uniform cards with first-letter avatars, name, and email.  
- **User Detail Page**: Shows complete user info including email, phone, website, company, and city. Includes a loading spinner while fetching data.  
- **Tailwind CSS Styling**: Modern, professional, responsive design with hover effects and animations.  

---

## **Technologies Used**

- **Vite** (Fast development and build tooling)  
- **React** (Functional components with hooks)  
- **React Router** (Client-side routing)  
- **Tailwind CSS** (Responsive and modern styling)  
- **Heroicons** (SVG icons for UI elements)  
- **LocalStorage** (Persist authentication state)  
- **Fetch API** (Data fetching from JSONPlaceholder)

---

## **Project Structure**

```

src/
├─ components/
│  └─ Header.jsx
├─ context/
│  └─ AuthContext.jsx
├─ utils/
│  └─ validators.js
├─ pages/
│  ├─ LoginPage.jsx
│  ├─ MainPage.jsx
│  └─ DetailPage.jsx
└─ App.jsx

````

- **components/** → Reusable UI components like Header.  
- **context/** → Authentication context for managing user state.  
- **utils/** → Utility functions (e.g., phone number validation).  
- **pages/** → Main application pages: Login, Users List, User Detail.  

---

## **Getting Started**

1. **Install dependencies**

```bash
npm install
````

2. **Run the development server**

```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## **Login Credentials**

* **Phone Number**: `+254712345678`
* Authentication is validated against this predefined phone number for demonstration purposes.

---

## **Future Enhancements**

* Integrate a real backend API for authentication and user management.
* Add functionality to create, edit, and delete users.
* Fully responsive mobile-friendly header with hamburger menu.
* Improved search functionality with debounce for better performance.
* Animations for cards and loading states for a better UX.

---




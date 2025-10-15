# 🌿 Foundation of the Energy Collective (FEC)

A complete, beginner-friendly website for **FEC (Foundation of the Energy Collective)** — built using **React** and **Next.js/Vite**, inspired by the official [feccanada.org](https://feccanada.org).  
The site combines sustainable design principles, accessibility, and modular simplicity with an **earthy, calm visual theme**.

---

## 🌍 About the Project

The **Foundation of the Energy Collective (FEC)** is a Canadian initiative that empowers individuals and communities through sustainable technology, renewable energy projects, and ecological collaboration.

This web project recreates and enhances the FEC digital experience — showcasing its mission, projects, team, and community initiatives through a clean, intuitive, and easy-to-extend architecture.

---

## 🧱 Tech Stack

- ⚛️ **React** (with either Next.js or Vite)
- 💅 **TailwindCSS / CSS Modules**
- 📡 **Mock API Routes** for Contact, Newsletter, and Donations
- 🧠 **React Hooks** (`useState`, `useEffect`)
- 🔄 **Dynamic Routing** for Projects, News, and Products
- 🧩 **JSON-based mock data** for easy learning and extension
- 🪶 **Lightweight animations & transitions** with CSS
- 🪴 **Responsive + Accessible (WCAG)** layout

---

## 🎨 Earthy Color Palette

All colors are defined in `:root` for simple, global theme control.

| Role | Color | Hex |
|------|--------|-----|
| Background | Light Beige | `#F5F3E7` |
| Primary | Earth Brown | `#8C7A5B` |
| Secondary | Sand Tone | `#D3C6A3` |
| Accent | Olive Green | `#A5B68D` |
| Text | Deep Soil | `#4B4237` |
| Contrast | White | `#FFFFFF` |

To change the site theme, just modify these CSS variables — the entire site will update instantly.

---

## 📂 Project Structure

```sh
src/
├── components/
│ ├── Header.jsx
│ ├── Footer.jsx
│ ├── Navbar.jsx
│ ├── ProjectCard.jsx
│ ├── TeamCard.jsx
│ ├── ContactForm.jsx
│ └── DonationBox.jsx
│
├── pages/
│ ├── index.jsx # Home
│ ├── about.jsx # About FEC
│ ├── team.jsx # Team
│ ├── projects.jsx # Projects List
│ ├── project/[id].jsx # Single Project
│ ├── news.jsx # News & Blog
│ ├── news/[id].jsx # News Detail
│ ├── contribute.jsx # Get Involved
│ ├── careers.jsx # Careers
│ ├── shop.jsx # Store
│ ├── donate.jsx # Donations
│ ├── contact.jsx # Contact
│ └── privacy.jsx # Privacy Policy
│
├── data/
│ ├── projects.json
│ ├── team.json
│ ├── news.json
│ └── products.json
│
├── api/
│ ├── contact.js
│ ├── newsletter.js
│ └── donate.js
│
└── styles/
├── globals.css
└── components.css
```


---

## ⚙️ Features

- 🌱 **Multi-page architecture** with clean navigation  
- 🧭 **Responsive Navbar** with sticky header  
- 💌 **Functional contact & newsletter forms** (mock API routes)  
- 🛒 **Shop system** with cart logic and dynamic routes  
- 💸 **Donation interface** (mocked for demo)  
- 🧑‍🔬 **Dynamic team and project pages**  
- 📰 **News/blog system** with JSON-based posts  
- 🔍 **Search & filter** in Projects and News  
- 💡 **SEO + Accessibility optimized**  
- 🪶 **Earthy minimalist aesthetic**  

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/fec-website.git
cd fec-website
```

###2. Install dependencies
```bash
npm install
```

###3. Run the dev server
```bash
npm run dev
```
---
 
## 🧠 Learning Focus
This project is designed for beginners who want to:
- Understand clean React structure and reusable components
- Learn how to use JSON as mock data before connecting real APIs
- Get comfortable with responsive layouts and CSS variable theming
- Practice routing, state management, and basic forms

---

## 📦 Future Integrations
- 🔐 Connect real Stripe donations
- 📬 Add Mailchimp newsletter signup
- 🗃️ Migrate data to a Headless CMS (like Sanity or Strapi)
- 🌎 Add multi-language (i18n) support
- 📸 Add media gallery and sustainability dashboard

---

## 🤝 Contributing
Contributions, ideas, and improvements are welcome!
If you find an issue or want to propose a feature:
- Fork the repo
- Create a new branch
- Submit a pull request

---

## 🪙 License
This project is open-source under the MIT License.
Feel free to use it for learning, customization, or non-profit projects.

---

## 💚 Credits
Built with purpose and passion for sustainability 🌿
Inspired by feccanada.org

Developed by [Aryan Bhanot](https://www.linkedin.com/in/aryan-bhanot-609650245/)

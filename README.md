# Instagram UI – 3 Screens

## 📱 Project Overview

This project is an interactive, pixel-perfect frontend replication of the Instagram mobile application interface distributed across three side-by-side device frame viewports:

- **Screen 1** — Profile Screen
- **Screen 2** — Home Feed Screen
- **Screen 3** — Explore Screen

It features a vibrant custom pink-and-purple design language and fully supports standard interaction micro-behaviors, such as tab switching (Posts, Reels, Tagged sections), like/heart status toggles that dynamically increment feed counters, and live navigation updates on the sticky bottom tab bar.

---

## ⚙️ Tech Used

| Technology | Purpose |
|---|---|
| **HTML5** | Structures the interactive phone frames, realistic hardware mockups (camera notches, status bars), and natively integrates vector-based custom SVG icons |
| **CSS3** | Manages layout via responsive patterns, custom CSS Grid/Flexbox containers, aspect-ratio clamping, and custom design variables for gradients (`--grad`, `--grad2`, etc.) |
| **JavaScript (Vanilla)** | Orchestrates DOM state manipulation — live like-count increments, profile-tab activation, and bottom nav item switching indicators |

---

## 📁 File Structure

```
instagram-ui/
├── index.html    → Full HTML structure (3 phone screens)
├── style.css     → All styling, design tokens & responsive rules
├── main.js       → Interactive behaviors (likes, tabs, nav)
└── README.md     → Project documentation
```

---

## 🚀 How to Run

Simply open the `index.html` file using any modern desktop or mobile web browser.

> Runs entirely client-side — no local servers, build tools, or asset compilation required.

```bash
# Or serve locally with:
npx serve .
# or
python3 -m http.server
```

---

## 🌐 Live Demo

[https://shayannaqvi45.github.io/instagram-ui](https://shayannaqvi45.github.io/instagram-ui)

---

## ✨ Features

- 3 side-by-side phone mockups with realistic notch & status bar
- Pink & purple gradient design system
- Clickable like button with live counter update
- Profile tab switching (Posts / Reels / Tagged)
- Active state on bottom navigation bar
- Story / highlight tap animation
- Fully responsive — stacks vertically on mobile

---

## 👨‍💻 Author

**Syed Muhammad Shayan Naqvi**

---

## 🏢 Internship Track

**Web Development — FentixTech Internship**

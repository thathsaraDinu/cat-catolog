# 🐱 Wiki Cat Catalog

A **Next.js** and **TypeScript**-powered cat catalog website that provides detailed information on various cat breeds. Built with **ShadCN UI** for a sleek and modern interface.

## ✨ Features
- Browse and search for cat breeds
- View detailed information about each breed
- Image carousel for breed photos
- Responsive and user-friendly UI

## 🚀 Tech Stack
- **Next.js** (App Router)
- **TypeScript**
- **ShadCN UI**
- **The Cat API**
- **Tailwind CSS**

---

## 📦 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/thathsaraDinu/cat-catolog.git
cd cat-catolog
```

### 2️⃣ Install Dependencies
```bash
npm install  # or yarn install
```

### 3️⃣ Set Up Environment Variables
Create a `.env.local` file in the root directory and add:
```env
CAT_API_KEY=your-api-key-here
```
> Get your API key from [The Cat API](https://thecatapi.com/)

### 4️⃣ Run the Development Server
```bash
npm run dev  # or yarn dev
```
Then open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🛠 API Routes
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/catbreeds` | GET | Fetch all cat breeds and details |
| `/api/breedimages/:id` | GET | Fetch images for a specific breed |

---

## 📸 Screenshots
![Homepage Preview](https://via.placeholder.com/800x400.png?text=Cat+Catalog+Homepage)

---

## 💡 Contributing
Feel free to fork this repository and submit pull requests! If you find a bug or want a new feature, open an issue. 😊


# 🛒 Food Boutique 🍏

## 📖 About the Project

**Food Boutique** is a modern web application for browsing and ordering food products.  
It is built as a **Single Page Application (SPA)** using React, with full integration of an external API, filtering
system, shopping cart, and order processing.

The main goal of the project is to provide a convenient way to explore a large assortment of products. Users can filter
items by category, search by keyword, view product details in a modal window, and manage their cart in real time.

---

## 🚀 Key Features

- 🔍 **Dynamic Filtering & Search**  
  Combined filtering (keyword + category + sorting)
- 🛍️ **Smart Cart**  
  Add/remove items, update quantity, and automatically sync total price
- 🔄 **Real-Time Sync**  
  Cart count and total price update instantly
- 🌐 **API Integration**  
  Fetch products, categories, popular items, discounts, and create orders
- 📱 **Responsive Design**  
  Fully адаптовано для mobile, tablet, desktop
- ⚡ **Optimized Loading UX**  
  Loaders (react-spinners) and lazy-loaded pages improve perceived performance
- 🎯 **Custom UI Logic**
  - Disabled cart button if item already exists
  - Event propagation handling (prevent modal opening on button click)
  - Infinite loop animation for discount products
- 📩 **Subscription**  
  Users can subscribe to product updates via footer form

---

## ⚙️ Technologies Used

- **React** — UI layer
- **Redux Toolkit** — global state management
- **React Router** — routing
- **Axios** — API communication
- **CSS Modules** — scoped styling
- **React Modal** — modal windows
- **React Spinners** — loading indicators
- **Redux Persist** — cart persistence
- **Create React App (CRA)** — project setup

---

## 🧠 Architecture Notes

- Global state is managed via **Redux Toolkit**
- Cart is persisted in **localStorage**
- API logic is separated into service files
- UI is split into reusable components
- Lazy loading is used for pages via `React.lazy`

---

## 🛠 How to Run the Project

```bash
# Clone repository
git clone https://github.com/darina202/food_boutique.git
# Go to project folder
cd food_boutique
# Install dependencies
npm install
# Run development server
npm start
```

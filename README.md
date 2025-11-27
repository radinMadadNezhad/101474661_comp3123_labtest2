# 101474661_comp3123_labtest2  
### Weather App – COMP3123 Lab Test 2

This project is a simple, responsive React Weather App built for **COMP3123 – Full Stack Development I (Lab Test 2)**.  
The app allows users to search for any city and view real-time weather information fetched from the **OpenWeatherMap API**.

---

## 🚀 Features

- Search weather by city name  
- Displays:
  - Temperature (°C)
  - Weather condition (description)
  - Weather icon
  - Feels like temperature
  - Humidity
  - Wind speed
- Clean UI/UX design  
- Uses React concepts:  
  ✔ `useState`  
  ✔ `useEffect` (optional for default load)  
  ✔ Passing props between components  
- Responsive design with gradients and weather-themed visuals  
- Fully deployed online  
- API integration using `fetch()`

---

## 🛠 Tech Stack

- **ReactJS**
- **OpenWeatherMap API**
- **CSS / custom styling**
- **Vercel (or Railway / Render) for hosting**
- **GitHub for version control**

---

## 📡 API Used

**OpenWeatherMap – Current Weather Endpoint**  
https://api.openweathermap.org/data/2.5/weather

Example request:
https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=a2cd1d09b7346e7a55190c5619bd5986&units=metric


---

## 📁 Project Structure

src/
├── components/
│ ├── SearchBar.jsx
│ └── WeatherCard.jsx
├── App.js
├── App.css
├── config.js
├── index.js
.env
README.md


---

## 🔧 How to Run the Project (Locally)

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/101474661_comp3123_labtest2.git
2. Install Dependencies:
    npm install
3. Create a .env file in the root folder:
    REACT_APP_WEATHER_API_KEY=your_api_key_here
4. start the app: 
    npm start
## Screenshot: 
![alt text](image.png)
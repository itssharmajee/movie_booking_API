# Movie Booking API 

🎬 Movie Booking API

A RESTful backend service for an online movie ticket booking system. This API allows users to browse movies, view show timings, select seats, and book tickets securely with real-time seat availability.

---

## 🚀 Features

- 🔐 User Authentication (JWT-based)
- 🎥 Movie Management (Admin)
- 🏢 Theater & Screen Management
- ⏰ Show Scheduling
- 💺 Seat Selection & Booking
- ❌ Prevent Double Booking
- 📜 Booking History
- 🧾 Ticket Generation

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** JWT
- **Passport hashing:** bcryptjs  
- **API Testing:** Postman  

---

## 📂 Project Structure

- src/
    - models
    - controllers
    - middlewares
    - routes
    - configs -> all config releted
- .env
- server.js
- .gitignore
- package.json

---

##  .env sample
- PORT
- MONGO_URI

--- 

### Creating a movie route
POST -- `/api/v1/movies`
### List out all movie route
GET -- `/api/v1/movies`
### Get a particular movie route
GET -- `/api/v1/movies/:movie_id`
### Get a movie based on name route
GET -- `/api/v1/movies ?name=some_name`
### Delete a particular movie route
DELETE -- `/api/v1/movies/:movie_id`
### Update a particular movie route
PUT -- `/api/v1/movies/:movie_id`

---

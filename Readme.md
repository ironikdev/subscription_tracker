# 🚀 Subscription Tracker API

A backend system to manage subscriptions and send automated reminders using workflows.

---

## 🔥 Features

- 🔐 JWT Authentication (Signup/Login)
- 📦 Subscription Management
- ⏰ Automated Reminder System (Upstash Workflow)
- 🚫 Rate Limiting & Bot Protection (Arcjet)
- 🗄️ MongoDB Database Integration

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Upstash QStash (Workflow Automation)
- Arcjet (Security & Rate Limiting)

---

## 📌 API Endpoints

### Auth
- POST `/api/v1/auth/sign-up`
- POST `/api/v1/auth/sign-in`

### Subscriptions
- POST `/api/v1/subscriptions`
- GET `/api/v1/subscriptions/user/:id`

---

## ⚙️ Setup Instructions

```bash
git clone https://github.com/ironikdev/subscription_tracker.git
cd subscription_tracker
npm install

PS: Still ongoing project adding some fetures like email reminders and doployment 

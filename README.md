# MERN Chat App

MERN Chat App is a real-time messaging application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.IO. It supports user authentication, live one-on-one chat, and shows which users are online, all in a sleek, responsive interface. The project demonstrates a full-stack approach to building scalable, interactive web apps with modern technology.

**Live demo:** [chatify-vn65.onrender.com](https://chatify-vn65.onrender.com/)

## Features

- User authentication
- Real-time one-on-one chat powered by Socket.IO
- Online users list
- Responsive interface that works across screen sizes

## Tech Stack

| Layer     | Technology                |
| --------- | ------------------------- |
| Database  | MongoDB                   |
| Backend   | Node.js, Express          |
| Frontend  | React                     |
| Real-time | Socket.IO                 |
| Hosting   | Render                    |

## Project Structure

```
mern-chat-app/
├── Backend/        # Express server, database and Socket.IO logic
├── Frontend/       # React client
├── package.json    # Root scripts and dependencies
└── .gitignore
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm
- A MongoDB database, either local or on [MongoDB Atlas](https://www.mongodb.com/atlas)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SwaroopDangal/mern-chat-app.git
   cd mern-chat-app
   ```

2. Install dependencies for the root, backend and frontend:

   ```bash
   npm install
   cd Backend && npm install
   cd ../Frontend && npm install
   ```

3. Add a `.env` file inside `Backend/` with the values the server needs: the port, your MongoDB connection string and the secret used for authentication.

### Running Locally

Start the backend:

```bash
cd Backend
npm start
```

In a second terminal, start the frontend:

```bash
cd Frontend
npm run dev
```

Open the local address shown in the terminal, create two accounts in separate browser windows, and start chatting.

## Deployment

The app is hosted on [Render](https://render.com/) at [chatify-vn65.onrender.com](https://chatify-vn65.onrender.com/). On Render's free tier, the first request after a period of inactivity can take a little while to respond.

## Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## Author

**Swaroop Dangal** — [@SwaroopDangal](https://github.com/SwaroopDangal)

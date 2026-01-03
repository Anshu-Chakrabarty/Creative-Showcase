  # ArtSpace

A responsive MERN stack application for artists to upload and showcase digital artwork in a masonry layout.

## Setup & Configuration
1. Backend (.env)
Create a file named .env inside the /server folder: 
MONGO_URI=mongodb+srv://admin:Anshu%4003@cluster0.gb7rr14.mongodb.net/artgallery?appName=Cluster0
JWT_SECRET=supersecretkey123
PORT=5000

2. Installation Commands
Run these commands to install dependencies for both sides.

Server:

Bash

cd server
npm install express mongoose dotenv cors bcryptjs jsonwebtoken
Client:

Bash

cd client
npm install react-router-dom axios react-masonry-css
How to Run
Option 1: Two Terminals (Recommended)

Terminal 1 (Backend):

Bash

cd server
node server.js
Terminal 2 (Frontend):

Bash

cd client
npm start
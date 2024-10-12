# Chatbot Backend

TO Login Admin panel : username : admin password : 123
This repository contains the backend code for a **Chatbot** application that integrates with a Large Language Model (LLM) API. It handles user queries, provides responses, saves user interactions, and features an admin panel for managing saved data.

## Features

- Integration with **LLM API** for processing user queries.
- **User authentication** (Login/Signup).
- Query response generation and **response parsing**.
- **Admin panel** to manage and view user-saved responses.
- **Error handling** for invalid requests or responses.
- Ability to save, view, and manage chatbot responses.

## Tech Stack

- **Node.js**: JavaScript runtime for server-side execution.
- **Express.js**: Web framework for Node.js to create API endpoints.
- **MongoDB**: NoSQL database for storing user data and responses.
- **Mongoose**: ODM for MongoDB to interact with the database.
- **JWT**: For authentication and authorization.
- **Axios**: To make HTTP requests to the LLM API.

## Installation and Setup

### Prerequisites

Make sure you have the following installed on your local machine:

- **Node.js** (version 18 or higher)
- **MongoDB** (local or Atlas)
- **NPM** (comes with Node.js)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aslahc/chatbot.git
   npm install
   node index.js

This project is an Express backend server written in TypeScript. It is set up with all necessary configurations and scripts to get you started quickly.

Table of Contents
Prerequisites
Installation
Running the Server
Project Structure
Available Scripts
License
Prerequisites
Ensure you have the following installed on your development machine:

Node.js (v14.x or later)
npm (v6.x or later)
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/aman-q/Window_app_backend.git
Navigate into the project directory:
bash
Copy code
cd Window_app_backend
Install the dependencies:
bash
Copy code
npm install
Running the Server
To start the server in development mode, simply run:

bash
Copy code
npm start
This will compile the TypeScript code and start the Express server.

Project Structure
Here is an overview of the project's structure:


Window_app_backend/
│
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── index.ts
│
│
├── node_modules/
│
├── package.json
├── README.md
├── tsconfig.json
└── tslint.json
src/: Contains all TypeScript source files.
controllers/: Controllers to handle incoming requests.
middlewares/: Middleware functions for the Express server.
models/: Data models.
routes/: Route definitions.
index.ts: Entry point to start the server.
.gitignore: Specifies which files to ignore in the git repository.
package.json: Manages project dependencies and scripts.
README.md: Project documentation.
tsconfig.json: TypeScript compiler configuration
Available Scripts
In the project directory, you can run:

npm start: Starts the server.
.

# Rubik's Cube Speed Records Web App

This project is a web application for recording Rubik's Cube solving times. Users can record their times for various cube types (2x2, 3x3, 4x4, and 5x5) by entering minutes and seconds. The application formats times for display—showing "X min Y sec" if the total time is 60 seconds or more, and just seconds if under 60—highlights the top 5 fastest records, and calculates statistics such as the average of the most recent 5 solves and the best consecutive 5-solve average. All records are stored on the server in a JSON file (`record.json`), which is automatically loaded on page refresh. The client auto-saves the current records to the server every 10 seconds, and manual save/load options are also available.

## Features

- **Cube Types:** Supports 2x2, 3x3, 4x4, and 5x5 cubes.
- **Dual Time Input:** Separate inputs for minutes and seconds (seconds must be less than 60).
- **Time Formatting:** If the total time is 60 seconds or more, it displays as "X min Y sec"; otherwise, it displays only in seconds.
- **Highlighting:** The top 5 fastest records in the list are highlighted with a distinct background color.
- **Statistics:** Displays the average of the most recent 5 records and the best consecutive 5-record average.
- **Server-Side Storage:** Records are stored in a JSON file (`record.json`) on the server, and are auto-loaded on page refresh.
- **Auto-Save:** The client automatically saves the current records to the server every 10 seconds.
- **Manual Save/Load:** Users can manually save to or load from a JSON file.

## Project Structure

myWebSiteNodeJS/
├── public/
│   └── index.html    # Front-end web application (HTML, CSS, JavaScript)
├── record.json       # Server-side records file (auto-created if not present)
└── server.js         # Node.js server code using Express




## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or later recommended)
- npm (Node Package Manager)

## Setup and Running Locally

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name

2. **Install Dependencies:**

   ```bash
   In the project root directory, run:

3. Start the Server:
   ```bash
    node server.js

  The server will run at http://localhost:8080/

4. Access the Application:
Open your web browser and navigate to http://localhost:8080/. 
The application will load the records from the server and allow you to interact with it.


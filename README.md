Adventour
Welcome to our Travel Planner web application! This application is designed to help users plan their trips by providing a platform for exploring itineraries, booking hotels, and managing their travel preferences. Additionally, it includes an admin interface for administrators to add new itineraries and manage user bookings.

Features:
Itinerary Exploration: Browse through a curated list of itineraries for various destinations, including popular tourist attractions, local experiences, and more.
Hotel Booking: Search and book hotels for your trip, with options ranging from budget accommodations to luxury resorts.
User Profiles: Users can create profiles to save their travel preferences, view their booking history, and manage their account settings.
Admin Panel: Administrators have access to an admin dashboard where they can add new itineraries, manage existing ones, and view booking details.


Technologies Used:
Frontend: HTML, CSS, JavaScript, React.js
Backend: Node.js, Express.js, MongoDB
Authentication & Authorization: JSON Web Tokens (JWT)
Database: MongoDB Atlas
Third-party APIs: Integration with external APIs for hotel booking and itinerary data

Getting Started:
Clone the repository: git clone https://github.com/your-username/travel-planner.git
Install dependencies: npm install
Set up environment variables: Create a .env file and add necessary configuration variables.
Run the server: npm start

Itinerary Server
To run the server-side of the application responsible for handling itineraries, navigate to the adv_itr directory and run the following command:
npm start
This will start the server on http://localhost:3000.

Client
To run the client-side of the application, navigate to the client directory and run the following command:
npm start
This will start the client on http://localhost:3001.

Admin
To run the admin-side of the application, navigate to the admin directory and run the following command:
npm start
This will start the admin interface on http://localhost:3002.

To run the backend:
PS D:\mern_final\mern_final> cd booking
PS D:\mern_final\mern_final\booking> cd api
PS D:\mern_final\mern_final\booking\api> nodemon index.js
[nodemon] 3.1.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
Conected to backend
Connected to mongoDB

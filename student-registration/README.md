# HCL Hackathon: Student Registration Portal

Hey everyone! This is my submission for the HCL Hackathon. It's a full-stack student registration system built using Angular for the frontend and a .NET 8 API with SQLite for the backend. 

I designed this to be a fast, clean, and responsive way to handle new student onboardings and give administrators a simple dashboard to review submissions.

## What it does

The application has two main parts:
1. **Student Registration Form**: A public-facing form where students can enter their personal details, academic info, and contact information. The form has built-in validation to make sure things like phone numbers and emails are formatted correctly.
2. **Admin Dashboard**: A secure area for administrators. Once logged in, admins can see a table of all the students who have successfully registered. 

## Tech Stack

- **Frontend**: Angular 17+ (using standalone components), plain CSS for styling so it's lightweight.
- **Backend**: .NET 8 Web API, Entity Framework Core.
- **Database**: SQLite (super easy for local testing since it just creates a file!).

---

## How to run it locally

You'll need both Node.js (for Angular) and the .NET 8 SDK installed on your machine.

### 1. Start the Backend API

First, let's get the database and API running:
1. Open up a terminal.
2. Navigate into the backend folder: `cd StudentRegistrationAPI`
3. Run the project: `dotnet run`
*(Note: Entity Framework will automatically create the `students.db` SQLite file for you on the first run, so you don't need to manually configure a database! It runs on `localhost:5050`)*

### 2. Start the Frontend (Angular App)

Now, let's boot up the UI:
1. Open a *new* terminal window.
2. Navigate into the frontend folder: `cd student-registration`
3. Install the dependencies: `npm install`
4. Start the dev server: `npm start` (or `ng serve` if you prefer the Angular CLI)

### 3. Test it out!

- Go to `http://localhost:4200` in your browser. You should see the registration form! Go ahead and fill out a test submission.
- **Admin Portal**: Head over to `http://localhost:4200/admin/login`. 
  - To test the dashboard, use these credentials:
    - **Username**: admin
    - **Password**: admin123
  - You should see the test submission you just made!

Let me know if you run into any issues running the code!

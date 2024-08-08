Mentor-Student API
This Node.js application provides a set of RESTful APIs to manage mentors and students using MongoDB. 
Key features include creating mentors and students, assigning students to mentors, and querying assignments. 
Built with Express.js for the server and Mongoose for MongoDB interactions. Deploys to Render for live usage.

Create Mentor: 
POST https://nodejs-task-03.onrender.com/api/mentors
Create a new mentor with a JSON body containing the name field.

Create Student: 
POST https://nodejs-task-03.onrender.com/api/students
Create a new student with a JSON body containing the name field.

Assign Mentor to Student:
POST https://nodejs-task-03.onrender.com/api/students/{studentId}/assign-mentor/{mentorId}
Assign a mentor to a student by specifying the studentId and mentorId in the URL.

Show Students for a Mentor: 
GET https://nodejs-task-03.onrender.com/api/mentors/{mentorId}/students
Retrieve all students assigned to a specific mentor using the mentorId.

Show Previously Assigned Mentor for a Student:
GET https://nodejs-task-03.onrender.com/api/students/{studentId}/mentor
Get the mentor assigned to a specific student by providing the studentId.

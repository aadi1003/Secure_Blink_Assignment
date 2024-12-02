<h2>Prerequisute</h2>
<hr/>
<ul>
  <li>VS CODE IDE</li>
  <li>Install Node Js latest</li>
  <li>Create two email id & set up in your device</li>
</ul>
<br/>

<p>Step 1 :- Clone the project in your local device using "git clone {url}"</p>

<p>Step 2 :- Open the Integrated Terminal for backend , Run "npm install" to install all the neccesary dependencies for backend</p>

<p>Step 3 :- Run "npm run dev" to start backend</p>

<p>Step 4 :- Execute Step 2 & 3 for frontend . NOTE: Frontend is only linited for Reset Password page .</p>

<br/>
<h3>Api Created in project:-</h3>
<hr/>
<ul>
  <li>Register User</li>
  <li>Login User</li>
  <li>Forgot Password</li>
  <li>Reset Password</li>
  <li>User Profile</li>
  <li>Admin Route (Only admin can access it)</li>
</ul>

<br/>
<h3>Step to test api on Postman</h3>
<hr/>

<h2>Register User</h2>
<ul>
  <li>API Request Method :-  POST</li>
  <li>url:- http://localhost:5000/api/auth/register</li>
  <h5>You have to pass email ,password ,role in the  "Body => raw" </h5>
  <li>
    {
    "email":"your email id",
    "password":"abcd1234",
    "role":"user" or "admin"
    }
  </li>
  <li>Click on send , Your will be succesfully register</li>
</ul>

<br/>

<h2>Login User</h2>
<ul>
  <li>API Request Method :-  POST</li>
  <li>url:- http://localhost:5000/api/auth/login</li>
  <h5>You have to pass email ,password  in the  "Body => raw" </h5>
  <li>Note :- Mention the email & password by which you have registered</li>
  <li>
    {
    "email":"your email id",
    "password":"abcd1234"
    }
  </li>
  <li>Click on send , Your will receive a token upon sucessfull login</li>
</ul>


<br/>

<h2>Forgot Password</h2>
<ul>
  <li>API Request Method :-  POST</li>
  <li>url:- http://localhost:5000/api/auth/forgot-password</li>
  <h5>You have to pass email  in the  "Body => raw" </h5>
  <li>Note :- Mention the email by which you have registered</li>
  <li>
    {
    "email":"your email id"
   }
  </li>
  <li>Click on send , Your will receive a link via email for forgot password.</li>
  <li>Copy the link & use it on your local host </li>
  <li>Enter the new Password & confirm Password</li>
  <li>Click on Reset , hence the password will reset succesfully</li>
  <li>Note :-  To cross verify , go to login api & send the request using old password , it will not generate the token</li>
</ul>




<br/>

<h2>Reset Password</h2>
<p>There is no need to test the api , because if you succesfully done with forgot password api, then this is working because the same reset password api is integrated in backend for reset password page</p>
<p>If you want to change the password manually the you can use this api</p>
<h5>Steps to check api manually :-</h5>
<ul>
  <li>API Request Method :-  POST</li>
  <li>url:- http://localhost:5000/api/auth/reset-password/"token"</li>
  <h5>You have to pass newPassword  in the  "Body => raw" </h5>
  <li>
    {
    "newPassword":"efgh5678"
    }
  </li>
  <li>Click on send , Password will reset successfully</li>
</ul>



<br/>

<h2>User Profile Api</h2>
<ul>
  <li>This can be used by any role whether it is user or admin</li>
  <li>API Request Method :-  GET</li>
  <li>url:- http://localhost:5000/api/user/profile</li>
  <h5>You have to pass token in  "Authorization => AuthType = Bearer Token , Then paste the token"</h5>
  <li>Click on send , Your will receive a id , role , message in response</li>
</ul>


<br/>

<h2>Admin Api</h2>
<ul>
  <li>This can be used by only Admin (This is a restricted route)</li>
  <li>API Request Method :-  GET</li>
  <li>url:- http://localhost:5000/api/user/admin</li>
  <h5>You have to pass token in  "Authorization => AuthType = Bearer Token , Then paste the token"</h5>
  <li>Click on send , Your will receive a succesfull response if you are admin , else the access will be denied</li>
</ul>

<br/>
<br/>
<h2>Libraries Used :-</h2>
<ol>
  <li>bcrypt js</li>
  <p>bcryptjs is used to securely hash user passwords before storing them in the database. It adds a cryptographic salt to the password, making it resistant to         common attacks like rainbow table and brute force. This ensures that even if the database is compromised, user passwords remain protected.</p>
  <br/>
  <li>cors</li>
  <p>cors (Cross-Origin Resource Sharing) is used to enable secure communication between the server and a frontend hosted on a different domain. It controls which   domains can access the server, helping prevent unauthorized requests and ensuring the application adheres to web security standards when serving APIs to           external clients.</p>
  <br/>
  <li>crypto</li>
  <p>crypto is used in Node.js for cryptographic operations such as generating secure random tokens, encrypting data, and creating hashes. It ensures data              integrity and security, making it useful for tasks like password resets, API key generation, and securing sensitive operations within the application.</p>
  <br/>
  <li>dotenv</li>
  <p>dotenv is used to load environment variables from a .env file into the application. It keeps sensitive data like API keys, database credentials, and JWT secrets secure by separating them from the codebase. This makes the application more secure, configurable, and easier to deploy across environments.</p>
  <br/>
  <li>express</li>
  <p>express is used to build the server and manage HTTP requests and responses efficiently. It provides a robust framework for creating APIs and web applications with middleware support, routing capabilities, and integration with third-party libraries. This simplifies the development process and ensures scalability and maintainability of the application.</p>
  <br/>
  <li>express-rate-limit</li>
  <p>express-rate-limit is used to limit the number of requests a client can make to the server within a specified time. It helps prevent abuse, such as brute-force attacks or denial-of-service (DoS) attacks, by throttling excessive requests, ensuring better security, and maintaining server stability under heavy load.</p>
  <br/>
  <li>helmet</li>
  <p>helmet is used to enhance security in Express applications by setting various HTTP headers. It helps prevent common vulnerabilities like Cross-Site Scripting (XSS), Clickjacking, and MIME type sniffing. By configuring these headers, helmet ensures the application is more resistant to web-based attacks and adheres to best security practices.
</p>
  <br/>
  <li>jsonwebtoken</li>
  <p>jsonwebtoken is used to create and verify JSON Web Tokens (JWTs) for secure user authentication. It enables stateless authentication by encoding user information in a token, which is then sent with each request. This ensures secure access control and session management without storing session data on the server.</p>
  <br/>
  <li>mongoose</li>
  <p>mongoose is used to interact with MongoDB databases in a more structured and efficient way. It provides a schema-based solution to model data, offers built-in validation, and simplifies database operations like querying, inserting, and updating. It streamlines the database management process in Node.js applications.
</p>
  <br/>
  <li>nodemailer</li>
  <p>nodemailer is used to send emails from a Node.js application. It facilitates email functionality like password reset links, notifications, and user confirmations. By supporting various email services, nodemailer enables secure and reliable email delivery, crucial for features like account verification and communication with users.
</p>
  <br/>
  <li>nodemon</li>
  <p>nodemon is used during development to automatically restart the server whenever code changes are made. This improves the development workflow by eliminating the need to manually stop and restart the server, saving time and ensuring that changes are immediately reflected without requiring manual intervention.
</p>
  <br/>
  <li>winston</li>
  <p>winston is used for logging in Node.js applications. It provides flexible logging options, allowing logs to be stored in different formats (e.g., JSON, plain text) and outputs (e.g., console, files). It helps track application activities, errors, and security events, ensuring better debugging and monitoring in production environments.
</p>
  <br/>
</ol>



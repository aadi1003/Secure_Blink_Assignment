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
    "password":"abcd1234",
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
    "email":"your email id",
   }
  </li>
  <li>Click on send , Your will receive a link via email for forgot password.</li>
  <li>Copy the link & use it on your local host </li>
  <li>Enter the new Password & confirm Password</li>
  <li>Click on Reset , hence the password will reset succesfully</li>
  <li>Note :-  To cross verify , go to login api & send the request using old password , it will not generate the token</li>
</ul>









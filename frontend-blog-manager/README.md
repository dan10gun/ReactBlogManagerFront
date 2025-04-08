npm start     to run project
-------------------------------
packages needed:

npm install react-router-dom
npm install axios
npm install bootstrap

---------------Run environment tested in---------------
Due to issues with certificate and cors, project was run under following change:

chrome without web security cmd command:
"C:\Program Files\Google\Chrome\Application\chrome.exe" --user-data-dir="C:/Chrome dev session" --disable-web-security

powershell:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned

------------------------About project---------------
the project is separted into pages and components
Modify the api url in blogapi for backend url
Request context is used to access commonly used variables for loading pages.

---------------------------------------------------
note: register user and adding/removing favourite not completed....manually input values in db to test 
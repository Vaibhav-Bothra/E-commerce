# E-commerce
Ecommerce website in which we can add to cart and buy it. There are both sides: client side and admin side.
index.js is the main file which starts the server and all the ejs files are in the ejs folder. the schema of mongodb collection is in models. 
The controllers folder includes all the controller files which contains the callback functions which gets executed after the middleware. 
The MongoDB database contains all the data of the items that is fetched from MonogDB and displayed on the website.The code above does not contain the data of items as they are stored in my localhost MongoDB which can't be shared but it is visible in the video that data gets fetched from the MongoDB and displayed on the website for adding it to cart or increasing its quantity or decreasing its quantity or deleting the added items.
It is the complete code which gets executed on writing "npm start" in the terminal and localhost:8000 will have the website run on that port
All the links are working and there are flash messages as well that pops up to acknowledge the action.
The admin side contains all the information related to all users i.e. their reviews and their orders.

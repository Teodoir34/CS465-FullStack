# CS465-FullStack
Fullstack Development w/ MEAN

ARCHITECTURE 

1. Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA). 

SPA. JavaScript, HTML, CSS, Jode.JS, and Angular Javascript were all used together to create the fullstack project. The client facing side of the website heavily relied on html and JavaScript while JavaScript was used on the backend as well for routing, controllers, models, and configurations. The SPA portion of the application was on the server side and allowed for there to be user authentication and admin controls that were not necessarily available to a client without the appropriate credentials. The SPA portion runs on a single page and is mainly concerned with easy functioning for website maintainence.  

2. Why did the backend use a NoSQL MongoDB database? 

We used a NoSQL database on MongoDB because we only needed to store a limited amount of information and desired quicker loading times. Because NoSQL doesn’t rely heavily on schemas it is easier to follow the CRUD methodology for this specific application. Ultimately this use case allows easy storing and updating of information.

FUNCTIONALITY 

1. How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces? 

JavaScript can utilize functions and objects whereas JSON can not. However, JSON is great for the use case of data storage and can be used by other programming languages where JavaScript is primarily stuck with itself. JSON works well with JavaScript to provide data storage and allow for easy transfer of that stored data between the front and back ends. 

2. Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components.

While I had to essentially start from scratch I did take time to try and improve the HBS files and remove html where I could. Unfortunately this was not able to be fully implemented in the capacity I hd hoped for sake of time constraints but I found that I had a better experience with load times and structuring in the code by utilizing the HBS vs the html files. In the future I would definitely write the code from the beginning with HBS more strictly utilized to reduce work load and loading times across the board. Going back in to refactor definitely caused some stress with frequent breakage when trying to point to a specific page.  

TESTING 

1. Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application. 

Using the API in this application we were able to validate users via authentication in the stored system and also only allow authenticated users to change data in the application - ie. the stored Trips. By utilizing the CRUD methodology (or in this case very specifically the get/post/put/delete) we were able to allow logged in users to adjust and amend the trips without fear of some random user coming in and ruining the entire website or causing fraudulent pricing. 

REFLECTION 

1. How has this course helped you in reaching your professional goals? 

This course has helped me by providing a very strong foundational knowledge of MEAN stack and how it all works together. My company utilizes a multitude of websites and I am now able to officially update certain areas provided I have the information reviewed by a coworker. I also received a promotion almost 6 months ahead of a previously communicated timeline and i feel tha this was heavily in part due to the sheer amount of information I learned and was able to apply at work with confidence and accuracy. 

2. What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field? 

Because my job already heavily utilizes databases and website development I learned an abundance of terminology, implementation skills, database management practices and more. Ultimately anything I can get into my brain will help me advance my career and with this course, and the two others I am currently in, has already showcased it’s ability to help me move forward with an early promotion. 

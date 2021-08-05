QUELUE

   README

        Quelue is an application meant to recreate certain functionalities of Hulu and improve on the user experience. Specifically, we have found that navigating to a list of episodes in Hulu is rather confusing. In our application, we aimed to make this process easier and more convenient for the user.
   
   USER STORIES

        The user can register for an account for an online streaming service. They will be able to discover shows, watch shows, and have a personal queue of shows. 
        
        They will have the option to view the details of a series before they start watching, or they can start watching with a single click for easy access. 
        
        The user will be able to easily navigate between different episodes of a series, which is something that other major streaming services can benefit from.

        If the user has shows in their queue, they will see them on their homepage for easy access.

   TECHNOLOGIES USED

        This application was created from scratch using Express/Node.js to build the basic server functionality. 
        
        We are using MongoDB to hold our database, and Mongoose was used as the Object Data Modeling library for Node.js and MongoDB. 
        
        Express-session is used to create cookies to store session id's for the user currently logged in. Connect-mongo stores the sessions when users log out. 
        
        We used dotenv to separate our secrets from our source code, and bcryptjs was used to hash and salt all passwords for security. 
        
        All pages are rendered dynamically with EJS, and method-override is used to provide the PUT and DELETE methods.

   APPROACH
        
        Quelue was built beginning with the server and models of the three Schema that organize all of our data: Users, Shows, and Episodes. Shows share a one-to-many relationship with Episodes, and Users share a many-to-many relationship with Shows.

   UNSOLVED PROBLEMS



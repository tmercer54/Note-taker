# Note-taker

## Description
This is a note taker that uses express and the file system to store the notes as json on the back-end.  The front-end shows a simple interface with two pages.  The first is an introductory page with a button to direct the user to the actual note taking page. Users will initially see a relatively blank screen with 'Note Title' and 'Note Text' on the right side of the screen.  As users input their notes, they will show on the left side of the screen as a list.  The user can click on these to show all details that were originally written.

This project showed me how simple databases from .json files can be created.  While this simple project didn't need it, it is obvious that making your routes modular can make organization much simpler.  If you are working on a project with hundreds of routes, each with their own CRUD functionality, this can quickly disorganize a server.js file.  It is much better to keep each route separate and link them all to a single index.js router and feed that into your root server.js.

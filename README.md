typescript-modularization-demo
==============================

##A demonstration of techniques for importing JavaScript modules in TypeScript via AMD in the browser.

This project was created to demonstrate some of the ways that TypeScript can import JavaScript modules via AMD in the browser.  This is a critical capability for TypeScript, considering the wealth of third-party libraries out there to be leveraged.  

I described a couple of ways of accomplishing this in a [blog post](http://brettjonesdev.com/modularization-in-typescript/), and decided to create this simple project in response to a couple of readers asking for an example of what I meant.  



###Running the Application

Note that this is a Node JS application.  If you do not wish to use Node, simply point a local Apache instance at the /public directory.  (Script loading does not work in raw file system - must use web server of some sort)

1. Install Node dependencies  - run `npm install` in the directory 
2. Compile TypeScript to JavaScript - build in VS 2012 or compile from command line with `tsc --module AMD .\public\script\app.ts`
3. Start Express server - run `node server\server.js` 
4. Point your browser at `http://localhost:8001` and you're good to go!
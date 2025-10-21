REACT is made of mainly two libraries - REACT-DOM and REACT-NATIVE. REACT-DOM is used for web applications. REACT-NATIVE is used for mobile applications
- With react you have problem with SEO because in HTML file there's only root and everything is in js
- There's only one index file in public folder, and everything happens in that one page that's why its called Single Page Application
  
NPM is node package manager. Sometimes you want to execute a package without installing it, then you can use npx
npm create vite@latest - to create react using vite bundler
npx create-react-app nameinsmallcasesofthefolder 


- devDependencies are the packages that are only needed for development, not for production. It does not go into the production build.
- package-lock.json - is basically a package.json with locked stable versions of dependencies


Note : Components and functions that we import/export to main.jsx should start with Capital letter and all component function files should be .jsx in vite. These are best practices. In create method, we can keep both js and jsx but according to convention, we use jsx if the file is returning some HTML, and js if its only some javascript code.

We can use variables in jsx using {} in innerHTML.




React is a Library - Unlike frameworks it doesn't have a lot rules, it has more freedom and it is a little small compared to other frameworks
React-Router-DOM - React creates SinglePageApplications(Page never reloads), so to go to new page we use router to manipulate url using this library React Router DOM. 
React did not have state management before so it has various external libraries for it like Redux, Zustand. 
Class based component - legacy code - React was class based components before
Backend As A Service - Firebase, Superbase, AppWrite - You can directly use backend from these applications

React is not a complete solution, no SEO, browser renders JS and has no routing
To solve this, there's a new framework Next JS. 




UNDERSTANDING PACKAGE.JSON

{
  "name": "basic_react",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/dom": "^10.4.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.3.0",
    "@testing-library/user-event": "^13.5.0", TESTING LIBRARIES USING JEST
    "react": "^19.1.0",
    "react-dom": "^19.1.0", TWO MAIN LIBRARIES FOR REACT
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"   // MEASURES PERFORMANCE OF THE APPLICATION
  },
  "scripts": {
    "start": "react-scripts start", // STARTS THE PROJECT IN DEVELOPMENT ENVIRONMENT
    "build": "react-scripts build", // PROJECT BEHAVES DIFFERENTLY IN PRODUCTION, WHEN WE USE BUILD, WE ARE CONVERTING THEM TO JS, HTML, CSS WHICH IS WHAT BROWSER UNDERSTANDS
    "test": "react-scripts test",   // RUNS ALL THE TESTS IN THE PROJECT
    "eject": "react-scripts eject" // EJECTS THE PROJECT FROM REACT-SCRIPTS, THIS IS A ONE WAY PROCESS, YOU CANNOT GO BACK 
  },
  "eslintConfig": { // Linting is used to show those red lines which is not generally error but something which you can do better
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": { // Lists the browsers that the application supports
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}


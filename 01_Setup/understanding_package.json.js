/*{
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
  */

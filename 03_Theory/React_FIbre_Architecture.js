// React Fibre is react's core algorithm, It's goal is to increase suitablity for areas like animation, layout, gestures. It's headline feature is incremental rendering: the ability to split rendering into chunks and spread it into various chunks. It includes ability to pause, abort, reuse work as new updates come in and ability to assign priority to different types of updates. Hydration is a term used for the process when web elements are made but their functionality comes when javascript is injected known as hydration. 

// What is Reconcilliation?
// Algorithm that React uses to differentiate one tree with another to determine which parts are needed to be changed

// Update
// A change in the data used to render in React app, usually the result of setState. Eventually result in re render

// Developer does not think how state changes occur and how variable updation will occur while using React
// re rendering whole app for every change is high cost in terms of performance which is omitted using React

// Reconcilliation is algorithm behind what is popularly understood as " Virtual DOM "
// Step 1 : You render a react application, a new tree is created with all the nodes as described in the app, saved in memory
// Step 2 : This tree is flushed to rendering environment, like a Browser where it's translated to a set of DOM operations. 
// Step 3 : When the app is updated, new tree is created.
// Step 4 : The new tree is diffed with the old tree to compute which operations are needed to update the rendered app.
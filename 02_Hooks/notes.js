// Summary of the chapter
// Why do we need hooks in our life?
// Simple answer to this is, there are multiple instances in our life where we need to update some variable at multiple instances and in normal JS, we were doing this by DOM Manipulation. 
// So how do we use hooks?
// When we define a function, before returning html, we define a [variable, variable_updation_function] = useState(defaultValueOfTheVariable)
// Thing to remember is we update the variable counter using setCounter function, i.e We pass the value in function that we want counter to show. 
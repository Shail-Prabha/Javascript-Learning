/* Immediately Invoked Function Expression (IIFE) */

/* An IIFE executes immediately and creates a private scope to avoid polluting the global namespace. */

/* named */
(function study(){
    console.log(`DB CONNECTED`);  
})();

/* unnamed iife */
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('shail')






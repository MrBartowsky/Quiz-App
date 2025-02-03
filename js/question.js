// creating an array and passing the number, questions, options and answers
let questions = [
    {
        numb: 1,
        question:"What is the Primary function of Javascript?",
        answer: "Creating dynamic behaviours",
        options: [
            "Creating dynamic behaviours",
            "Styling web pages",
            "Sending emails",
            "Managing databases"
        ]
    },

    {
        numb: 2,
        question: "Which keyword is used to declare a variable in JavaScript?",
        answer: "var, let, and const",
        options: [
            "int",
            "variable",
            "var, let, and const",
            "define"
        ]
    },
    {
        numb: 3,
        question: "Which of the following is NOT a JavaScript data type?",
        answer: "Character",
        options: [
            "Number",
            "String",
            "Boolean",
            "Character"
        ]
    },
    {
        numb: 4,
        question: "What is the output of `typeof null` in JavaScript?",
        answer: "object",
        options: [
            "null",
            "undefined",
            "object",
            "string"
        ]
    },
    {
        numb: 5,
        question: "Which method is used to write HTML output in JavaScript?",
        answer: "document.write()",
        options: [
            "console.log()",
            "document.write()",
            "alert()",
            "window.print()"
        ]
    },
    {
        numb: 6,
        "question": "Which of the following is used to define an anonymous function in JavaScript?",
        "answer": "function() {}",
        "options": [
            "anonymous function() {}",
            "function() {}",
            "lambda function() {}",
            "def function() {}"
        ]
    },
    {
        "numb": 7,
        "question": "Which JavaScript framework/library is primarily used for front-end development?",
        "answer": "React",
        "options": [
            "Django",
            "Node.js",
            "React",
            "Flask"
        ]
    },
    {
        "numb": 8,
        "question": "Which operator is used for strict comparison in JavaScript?",
        "answer": "===",
        "options": [
            "==",
            "===",
            "=",
            "!="
        ]
    },
    {
        "numb": 9,
        "question": "What is an array in JavaScript?",
        "answer": "A collection of values",
        "options": [
            "A function",
            "A collection of values",
            "A single variable",
            "A string method"
        ]
    },
    {
        "numb": 10,
        "question": "Which built-in method removes the last element from an array?",
        "answer": "pop()",
        "options": [
            "pop()",
            "shift()",
            "push()",
            "slice()"
        ]
    },
    {
        "numb": 11,
        "question": "How do you declare an arrow function in JavaScript?",
        "answer": "() => {}",
        "options": [
            "() => {}",
            "function => {}",
            "def() => {}",
            "arrow() => {}"
        ]
    },
    {
        "numb": 12,
        "question": "What is the purpose of JSON in JavaScript?",
        "answer": "To store and exchange data",
        "options": [
            "To style web pages",
            "To execute server-side code",
            "To store and exchange data",
            "To create animations"
        ]
    },
    {
        "numb": 13,
        "question": "What does the `map()` method do in JavaScript?",
        "answer": "Creates a new array by transforming elements",
        "options": [
            "Filters elements in an array",
            "Creates a new array by transforming elements",
            "Sorts an array",
            "Removes elements from an array"
        ]
    },
    {
        "numb": 14,
        "question": "What does `NaN` stand for in JavaScript?",
        "answer": "Not a Number",
        "options": [
            "Null and None",
            "Not an Object",
            "New Array Notation",
            "Not a Number"
        ]
    },
    {
        "numb": 15,
        "question": "Which statement is used to handle exceptions in JavaScript?",
        "answer": "try...catch",
        "options": [
            "if...else",
            "try...catch",
            "for...loop",
            "throw"
        ]
    },

    {
        "numb": 16,
        "question": "Which keyword is used to define a constant variable in JavaScript?",
        "answer": "const",
        "options": [
            "var",
            "let",
            "const",
            "define"
        ]
    },
    {
        "numb": 17,
        "question": "What will `console.log(typeof [])` return?",
        "answer": "object",
        "options": [
            "array",
            "object",
            "undefined",
            "function"
        ]
    },
    {
        "numb": 18,
        "question": "Which method is used to add an element to the end of an array?",
        "answer": "push()",
        "options": [
            "pop()",
            "shift()",
            "push()",
            "unshift()"
        ]
    },
    {
        "numb": 19,
        "question": "Which function is used to parse a JSON string into an object?",
        "answer": "JSON.parse()",
        "options": [
            "JSON.parse()",
            "JSON.stringify()",
            "parseJSON()",
            "JSON.toObject()"
        ]
    },
    {
        "numb": 20,
        "question": "What will `console.log(3 + '3')` output?",
        "answer": "33",
        "options": [
            "6",
            "33",
            "3+3",
            "NaN"
        ]
    },
    {
        "numb": 21,
        "question": "Which loop executes at least once before checking the condition?",
        "answer": "do...while",
        "options": [
            "for",
            "while",
            "do...while",
            "foreach"
        ]
    },
    {
        "numb": 22,
        "question": "Which object method allows you to iterate over an array?",
        "answer": "forEach()",
        "options": [
            "loop()",
            "map()",
            "forEach()",
            "iterate()"
        ]
    },
    {
        "numb": 23,
        "question": "Which of the following is not a falsy value in JavaScript?",
        "answer": "'false'",
        "options": [
            "0",
            "false",
            "''",
            "'false'"
        ]
    },
    {
        "numb": 24,
        "question": "What is the purpose of `localStorage` in JavaScript?",
        "answer": "To store data persistently in the browser",
        "options": [
            "To store session-based data",
            "To store cookies",
            "To store data persistently in the browser",
            "To store server-side data"
        ]
    },
    {
        "numb": 25,
        "question": "Which function is used to execute a function at a given interval repeatedly?",
        "answer": "setInterval()",
        "options": [
            "setTimeout()",
            "setInterval()",
            "repeatFunction()",
            "runEvery()"
        ]
    },
    {
        "numb": 26,
        "question": "Which symbol is used for the ternary operator in JavaScript?",
        "answer": "? :",
        "options": [
            "??",
            "? :",
            "::",
            "=>"
        ]
    },
    {
        "numb": 27,
        "question": "Which method converts a string to an integer in JavaScript?",
        "answer": "parseInt()",
        "options": [
            "toInteger()",
            "parseInt()",
            "toNumber()",
            "parseFloat()"
        ]
    },
    {
        "numb": 28,
        "question": "Which method can be used to merge two arrays?",
        "answer": "concat()",
        "options": [
            "merge()",
            "concat()",
            "combine()",
            "append()"
        ]
    },
    {
        "numb": 29,
        "question": "What does `this` refer to in a JavaScript function?",
        "answer": "The object that called the function",
        "options": [
            "The function itself",
            "The global object",
            "The object that called the function",
            "The parent object"
        ]
    },
    {
        "numb": 30,
        "question": "What will `console.log(1 == '1')` return?",
        "answer": "true",
        "options": [
            "true",
            "false",
            "undefined",
            "NaN"
        ]
    },
    {
        "numb": 31,
        "question": "What will `console.log(1 === '1')` return?",
        "answer": "false",
        "options": [
            "true",
            "false",
            "undefined",
            "NaN"
        ]
    },
    {
        "numb": 32,
        "question": "What is a closure in JavaScript?",
        "answer": "A function that retains access to its outer scope",
        "options": [
            "A function that cannot be called",
            "A function that returns another function",
            "A function that retains access to its outer scope",
            "A function that runs only once"
        ]
    },
    {
        "numb": 33,
        "question": "Which method is used to remove the first element of an array?",
        "answer": "shift()",
        "options": [
            "pop()",
            "shift()",
            "splice()",
            "slice()"
        ]
    },
    {
        "numb": 34,
        "question": "Which of the following is NOT a JavaScript framework?",
        "answer": "Laravel",
        "options": [
            "React",
            "Vue",
            "Angular",
            "Laravel"
        ]
    },
    {
        "numb": 35,
        "question": "What is the output of `console.log(typeof undefined)`?",
        "answer": "undefined",
        "options": [
            "null",
            "undefined",
            "object",
            "string"
        ]
    },
    {
        "numb": 36,
        "question": "What will `console.log(Boolean(''))` return?",
        "answer": "false",
        "options": [
            "true",
            "false",
            "undefined",
            "null"
        ]
    },
    {
        "numb": 37,
        "question": "Which method converts an array into a string?",
        "answer": "join()",
        "options": [
            "toString()",
            "join()",
            "concat()",
            "split()"
        ]
    },
    {
        "numb": 38,
        "question": "Which of the following executes code asynchronously?",
        "answer": "setTimeout()",
        "options": [
            "while loop",
            "setTimeout()",
            "for loop",
            "if statement"
        ]
    },
    {
        "numb": 39,
        "question": "Which JavaScript function is used to round a number to the nearest integer?",
        "answer": "Math.round()",
        "options": [
            "Math.floor()",
            "Math.round()",
            "Math.ceil()",
            "Math.trunc()"
        ]
    },
    {
        "numb": 40,
        "question": "Which function can be used to generate a random number between 0 and 1?",
        "answer": "Math.random()",
        "options": [
            "random()",
            "Math.random()",
            "generateRandom()",
            "rand()"
        ]
    },

    {
        "numb": 41,
        "question": "Which method is used to check if a string contains a specific substring?",
        "answer": "includes()",
        "options": [
            "contains()",
            "has()",
            "includes()",
            "find()"
        ]
    },
    {
        "numb": 42,
        "question": "What does the `filter()` method do in JavaScript?",
        "answer": "Returns a new array with elements that meet a condition",
        "options": [
            "Sorts an array",
            "Filters elements from an array",
            "Returns a new array with elements that meet a condition",
            "Merges two arrays"
        ]
    },
    {
        "numb": 43,
        "question": "Which JavaScript keyword is used to define a class?",
        "answer": "class",
        "options": [
            "define",
            "function",
            "class",
            "object"
        ]
    },
    {
        "numb": 44,
        "question": "Which method is used to convert an object into a JSON string?",
        "answer": "JSON.stringify()",
        "options": [
            "JSON.stringify()",
            "JSON.parse()",
            "convertToJSON()",
            "toJSON()"
        ]
    },
    {
        "numb": 45,
        "question": "What does the `reduce()` method do?",
        "answer": "Executes a reducer function on each element of an array to return a single value",
        "options": [
            "Filters elements from an array",
            "Executes a reducer function on each element of an array to return a single value",
            "Creates a new array",
            "Concatenates two arrays"
        ]
    },
    {
        "numb": 46,
        "question": "What is the default behavior of `sort()` in JavaScript?",
        "answer": "Sorts elements as strings",
        "options": [
            "Sorts elements as numbers",
            "Sorts elements as strings",
            "Sorts elements randomly",
            "Sorts elements in reverse order"
        ]
    },
    {
        "numb": 47,
        "question": "Which JavaScript keyword is used to create an object?",
        "answer": "new",
        "options": [
            "class",
            "object",
            "new",
            "create"
        ]
    },
    {
        "numb": 48,
        "question": "Which JavaScript function is used to delay the execution of code?",
        "answer": "setTimeout()",
        "options": [
            "setTimeout()",
            "setInterval()",
            "delay()",
            "wait()"
        ]
    },
    {
        "numb": 49,
        "question": "Which of the following is a JavaScript boolean value?",
        "answer": "true",
        "options": [
            "yes",
            "true",
            "1",
            "on"
        ]
    },
    {
        "numb": 50,
        "question": "Which of the following correctly declares an empty array?",
        "answer": "[]",
        "options": [
            "{}",
            "[]",
            "new Array()",
            "emptyArray()"
        ]
    }
]
const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
        question: "What is capital of india?",
        options: ["New Delhi", "UP", "Agra", "Bangalore"],
        answer: "New Delhi",   
    },

        {
          question: "What does HTML stand for?",
          options: [
            "Hyper Transfer Markup Language",
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyperlink and Text Management Language"
          ],
          answer: "Hyper Text Markup Language",
        },
        {
          question: "Which HTML tag is used to define an internal stylesheet?",
          options: ["<script>", "<css>", "<style>", "<link>"],
          answer: "<style>",
        },
        {
          question: "What does CSS stand for?",
          options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets",
            "Computer Style Sheets"
          ],
          answer: "Cascading Style Sheets",
        },
        {
          question: "Which CSS property controls the text size?",
          options: ["text-size", "font-style", "text-style", "font-size"],
          answer: "font-size",
        },
        {
          question: "What is the correct syntax for referring to an external CSS file?",
          options: [
            "<stylesheet> styles.css </stylesheet>",
            "<style src='styles.css'>",
            "<link rel='stylesheet' href='styles.css'>",
            "<css>styles.css</css>"
          ],
          answer: "<link rel='stylesheet' href='styles.css'>",
        },
        {
          question: "Which HTML tag is used to create a hyperlink?",
          options: ["<link>", "<a>", "<href>", "<hlink>"],
          answer: "<a>",
        },
        {
          question: "Which CSS property is used to change the background color?",
          options: ["background-color", "color", "bgcolor", "background"],
          answer: "background-color",
        },
        {
          question: "What is the default display property of a <div> element?",
          options: ["inline", "block", "inline-block", "none"],
          answer: "block",
        },
        {
          question: "Which of the following is a JavaScript framework?",
          options: ["Django", "Laravel", "React", "Spring Boot"],
          answer: "React",
        },
        {
          question: "Which JavaScript function is used to print something to the console?",
          options: ["console.log()", "print()", "log()", "display()"],
          answer: "console.log()",
        },
        {
          question: "What does the DOM stand for?",
          options: [
            "Document Object Model",
            "Data Object Model",
            "Document Oriented Model",
            "Digital Object Model"
          ],
          answer: "Document Object Model",
        },
        {
          question: "Which HTML element is used to define a footer for a document?",
          options: ["<footer>", "<bottom>", "<end>", "<section>"],
          answer: "<footer>",
        },
        {
          question: "Which JavaScript keyword is used to declare a variable?",
          options: ["var", "let", "const", "All of the above"],
          answer: "All of the above",
        },
        {
          question: "What is the correct way to write a JavaScript array?",
          options: [
            "let colors = (1:'red', 2:'green', 3:'blue')",
            "let colors = ['red', 'green', 'blue']",
            "let colors = {'red', 'green', 'blue'}",
            "let colors = 'red', 'green', 'blue'"
          ],
          answer: "let colors = ['red', 'green', 'blue']",
        },
        {
          question: "Which of the following is a backend language?",
          options: ["HTML", "CSS", "JavaScript", "Node.js"],
          answer: "Node.js",
        },
        {
          question: "What does API stand for?",
          options: [
            "Application Programming Interface",
            "Advanced Programming Interface",
            "Automated Program Integration",
            "Application Process Integration"
          ],
          answer: "Application Programming Interface",
        },
        {
          question: "What is the purpose of the 'alt' attribute in an <img> tag?",
          options: [
            "Defines an alternative text for an image",
            "Changes the size of an image",
            "Links an image to another page",
            "Applies styles to the image"
          ],
          answer: "Defines an alternative text for an image",
        },
        {
          question: "What is the correct way to comment out multiple lines in CSS?",
          options: [
            "// This is a comment",
            "/* This is a comment */",
            "' This is a comment",
            "<!-- This is a comment -->"
          ],
          answer: "/* This is a comment */",
        },
        {
          question: "Which HTTP method is used to retrieve data from a server?",
          options: ["POST", "DELETE", "PUT", "GET"],
          answer: "GET",
        },
        {
          question: "Which of the following is NOT a valid JavaScript data type?",
          options: ["String", "Boolean", "Float", "Undefined"],
          answer: "Float",
        },
        {
          question: "Which CSS property is used to make an element invisible but still take up space?",
          options: ["visibility: hidden;", "display: none;", "opacity: 0;", "hide: true;"],
          answer: "visibility: hidden;",
        },
        {
          question: "Which of the following is a correct way to fetch data using JavaScript?",
          options: [
            "fetch('https://api.example.com/data')",
            "get('https://api.example.com/data')",
            "callAPI('https://api.example.com/data')",
            "fetchData('https://api.example.com/data')"
          ],
          answer: "fetch('https://api.example.com/data')",
        },
        {
          question: "Which tag is used to create a table in HTML?",
          options: ["<table>", "<grid>", "<tab>", "<tr>"],
          answer: "<table>",
        },
        {
          question: "What is Bootstrap?",
          options: [
            "A JavaScript framework",
            "A CSS framework for responsive design",
            "A database management system",
            "A version control system"
          ],
          answer: "A CSS framework for responsive design",
        },
        {
          question: "Which HTML tag is used to define a form?",
          options: ["<form>", "<input>", "<submit>", "<fieldset>"],
          answer: "<form>",
        },
        {
          question: "Which of the following is a relational database?",
          options: ["MongoDB", "Redis", "PostgreSQL", "Firebase"],
          answer: "PostgreSQL",
        },
        {
          question: "Which JavaScript function is used to parse JSON?",
          options: ["JSON.parse()", "parseJSON()", "JSON.stringify()", "parse()"],
          answer: "JSON.parse()",
        },
        {
          question: "Which of the following is NOT a CSS preprocessor?",
          options: ["SASS", "LESS", "Tailwind", "Stylus"],
          answer: "Tailwind",
        },
      ];
      
      export default questions;
      

  
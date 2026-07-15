const questions = [

{
    question: "Which setting is modified to print a worksheet in letterhead?",
    options: [
        "Paper",
        "Margin",
        "Layout",
        "Orientation"
    ],
    answer: 1
},

{
    question: "What is the extension of files created in MS-Excel 2007-2016?",
    options: [
        ".XLX",
        ".XLSX",
        ".XLS",
        ".TXT"
    ],
    answer: 1
},

{
    question: "What arranges data in Ascending (A-Z) or Descending (Z-A) order?",
    options: [
        "Filtering",
        "Sorting",
        "Custom Filter",
        "Clear Rules"
    ],
    answer: 1
},

{
    question: "Which chart shows proportions of data elements?",
    options: [
        "XY Chart",
        "Pie Chart",
        "Line Chart",
        "Column Chart"
    ],
    answer: 1
},

{
    question: "What is the full form of CSV?",
    options: [
        "Compact Serial Value",
        "Control Space Value",
        "Comma Separated Values",
        "Comma Standard Values"
    ],
    answer: 2
},

{
    question: "Identify the file type: Roll No, Name, Theory, Practical",
    options: [
        "Dataframe",
        "MySQL",
        "CSV",
        "Excel"
    ],
    answer: 2
},

{
    question: "Which box is present in Pivot Table fields list?",
    options: [
        "Column Labels",
        "View",
        "Layout",
        "Formulas"
    ],
    answer: 0
},

{
    question: "Which Excel analysis tool is best for solving a problem with one variable?",
    options: [
        "Goal Seek",
        "Scenario",
        "Trendline",
        "Solver"
    ],
    answer: 0
},

{
    question: "Which view displays pages exactly as they appear while printing?",
    options: [
        "Custom View",
        "Full Screen View",
        "Page Break View",
        "Page Layout View"
    ],
    answer: 3
},

{
    question: "Which item contains text, graphics, charts, sound, and video in PowerPoint?",
    options: [
        "Slides",
        "Folder",
        "Handout",
        "Desktop Screen"
    ],
    answer: 0
},

{
    question: "Which button is used to add instant animation to the presentation?",
    options: ["Add Button", "Start Button", "Insert Button", "Action Button"],
    answer: 3
},

{
    question: "Which type of software is PowerPoint?",
    options: ["Word Processor", "Spreadsheet", "Presentation Graphics", "Database Management"],
    answer: 2
},

{
    question: "Which tool allows the user to select different layouts for slides?",
    options: ["Apply Design", "Bullets", "New Slide", "Slide Layout"],
    answer: 3
},

{
    question: "Which key stops a PowerPoint presentation?",
    options: ["ESC", "Tab", "Ctrl", "Enter"],
    answer: 0
},

{
    question: "How many panes are there in Backstage View of PowerPoint 2010?",
    options: ["3", "5", "7", "9"],
    answer: 0
},

{
    question: "Which menu applies various effects to text in a slide?",
    options: ["Animation", "Design", "Transitions", "Slide Show"],
    answer: 0
},

{
    question: "Which dialog box changes slides automatically for a specific time?",
    options: ["Action Setting", "Slide Transition", "Slide Animation", "Custom Animation"],
    answer: 1
},

{
    question: "Which option creates a presentation automatically in PowerPoint?",
    options: ["Template", "Blank Presentation", "Auto Content Wizard", "Standard Test Bar"],
    answer: 2
},

{
    question: "Which option offers a built-in design through a dialog box?",
    options: ["Auto Content Wizard", "Blank Presentation", "Standard Tool Bar", "Template"],
    answer: 3
},

{
    question: "Which function key runs a PowerPoint presentation?",
    options: ["F3", "F5", "F7", "F9"],
    answer: 1
},

{
    question: "What is the file extension of Microsoft PowerPoint?",
    options: [".txt", ".pptx", ".docx", ".xlsx"],
    answer: 1
},

{
    question: "Which PowerPoint tab has themes?",
    options: ["Transition Tab", "Design Tab", "Insert Tab", "Animation Tab"],
    answer: 1
},

{
    question: "Which is the default page setup orientation of PowerPoint slides?",
    options: ["Landscape", "Portrait", "Vertical", "Horizontal"],
    answer: 0
},

{
    question: "Which shortcut key is used to print slides in MS PowerPoint?",
    options: ["Ctrl + O", "Ctrl + P", "Ctrl + Alt + O", "Ctrl + Alt + P"],
    answer: 1
},

{
    question: "Which option prints four slides on a single page?",
    options: ["Handouts", "Print Layout", "Custom Range", "Print All Slides"],
    answer: 0
},

{
    question: "What are the dotted areas in an empty slide of MS PowerPoint?",
    options: ["Template", "Placard", "Placeholders", "Themes"],
    answer: 2
},

{
    question: "Which phase designs and characterizes the data needs of database users?",
    options: ["Initial Phase", "Execution Phase", "Maintenance Phase", "Closure Phase"],
    answer: 0
},

{
    question: "What is the full form of DDL?",
    options: ["Data Describe Language", "Definition Data Language", "Data Definition Language", "Data Distinct Language"],
    answer: 2
},

{
    question: "What is the full form of DML?",
    options: ["Data Multiplication Language", "Data Manipulation Language", "Data Modify Language", "Data Mapping Language"],
    answer: 1
},

{
    question: "Why should a query be executed successfully on an existing view?",
    options: [
        "The specified table contains data",
        "SELECT privilege only on the specified table",
        "Table must be in the same database",
        "SELECT privilege on the view"
    ],
    answer: 3
},

{
    question: "Which is the best way to represent attributes in a large database?",
    options: ["Relational", "Dot Representation", "Concatenation", "Customization"],
    answer: 1
},

{
    question: "Which query calculates sum, average and groups results by values?",
    options: ["Cross-tab", "Snapshot", "Both Cross-tab and Snapshot", "Across-tabs"],
    answer: 0
},

{
    question: "Which is a type of database?",
    options: ["Transition", "Relational", "Outlook", "Decentralized"],
    answer: 1
},

{
    question: "Which of the following is TRUE about DDL commands?",
    options: [
        "Controls the database system",
        "Insert, modify, delete and view records",
        "Creation, deletion and alteration",
        "Retrieve data from database"
    ],
    answer: 2
},

{
    question: "What does the SQL statement DROP TABLE student; do?",
    options: [
        "Deletes a table called student",
        "Creates a table called student",
        "Checks if table exists",
        "Deletes only records from the table"
    ],
    answer: 0
},

{
    question: "What does the SQL statement ALTER TABLE STUDENT ADD (ADDRESS VARCHAR2(20)); do?",
    options: [
        "Invalid Syntax",
        "Deletes ADDRESS column",
        "Adds a column ADDRESS in the table",
        "Adds records in ADDRESS column"
    ],
    answer: 2
},

{
    question: "Which are TCL commands?",
    options: [
        "COMMIT and ROLLBACK",
        "UPDATE and TRUNCATE",
        "SELECT and INSERT",
        "GRANT and REVOKE"
    ],
    answer: 0
},

{
    question: "Which collection of operations forms a single logical unit of work?",
    options: [
        "Views",
        "Networks",
        "Units",
        "Transactions"
    ],
    answer: 3
},

{
    question: "Which database aspect preserves execution of transactions in isolation?",
    options: [
        "Atomicity",
        "Consistency",
        "Durability",
        "Integrity"
    ],
    answer: 1
},

{
    question: "Which scheme controls interaction between executing transactions?",
    options: [
        "Concurrency Control Scheme",
        "Multiprogramming Scheme",
        "Serialization Scheme",
        "Schedule Scheme"
    ],
    answer: 0
},

{
    question: "Which is the logical design of the database?",
    options: [
        "Instance",
        "Relation",
        "Domain",
        "Schema"
    ],
    answer: 3
},

{
    question: "Which unit is considered if the domain of the element is atomic?",
    options: [
        "Different Units",
        "Indivisible Units",
        "Constant Units",
        "Divisible Units"
    ],
    answer: 1
},

{
    question: "What is the order for tuples of relations?",
    options: [
        "Any",
        "Same",
        "Sorted",
        "Constant"
    ],
    answer: 0
},

{
    question: "What does the term 'attribute' refer to in a table?",
    options: [
        "Record",
        "Column",
        "Tuple",
        "Key"
    ],
    answer: 1
},

{
    question: "What is the error in the given SQL function?",
    options: [
        "Return type missing",
        "Dept_name is mismatched",
        "Reference relation not mentioned",
        "Error in function name"
    ],
    answer: 0
},

{
    question: "Which has the highest precedence in an expression?",
    options: [
        "Division",
        "Subtraction",
        "Power",
        "Parentheses"
    ],
    answer: 3
},

{
    question: "Which is the correct operator for power (a^b) in Python?",
    options: [
        "a ^ b",
        "a ** b",
        "a ^^ b",
        "a ^ * b"
    ],
    answer: 1
},

{
    question: "Which is a valid Python if statement?",
    options: [
        "if a >= 2 :",
        "if (a >= 2)",
        "if (a => 22)",
        "if a >= 22"
    ],
    answer: 0
},

{
    question: "Which is used as a loop in Python?",
    options: [
        "for loop",
        "if else",
        "do-while loop",
        "loop"
    ],
    answer: 0
},

{
    question: "Which function accepts input from the user in Python?",
    options: [
        "raw_input()",
        "rawinput()",
        "input()",
        "string()"
    ],
    answer: 2
}

];
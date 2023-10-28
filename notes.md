# Basic Markdown Language Syntax

## Styling Text
- **this is bold text**
- _this is italicized text_
- ~~this text has a strike through it~~
- **bold with _italicized text_**
- ***this text is bold and italicized***
- This is a <sub>subscript</sub> text
- This is a <sup>superscript</sup> text

Text that is not a quote
> Text that is a quote

## Links
This is a link to the [README.md](https://github.com/tylerhiatt/startup/blob/0664745902d5a11085191eba0f12555b2b856b25/README.md)

See [this gihub page](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) for more markdwon language syntax tips.

# Website and Domain notes
- SSH into the Server
➜  ssh -i [key pair file] ubuntu@[ip address]

- Elastic IP Address: 54.208.238.109
- Domain Name: https://fernwehsup.com

- Modify Caddy file to make website secure under https, i.e.
myfunkychickens.click {
   root * /usr/share/caddy
   file_server
   header Cache-Control no-store
   header -etag
   header -server
   }


startup.myfunkychickens.click {
   reverse_proxy * localhost:4000
   header Cache-Control no-store
   header -server
   header -etag
   header Access-Control-Allow-Origin *
}

simon.myfunkychickens.click {
   reverse_proxy * localhost:3000
   header Cache-Control no-store
   header -server
   header -etag
   header Access-Control-Allow-Origin *
}
- sudo service caddy restart

- Great resource Websites:
   - https://www.pexels.com - free pictures
   - https://canva.com - brainstorming design website


# Midterm Study Guide
The following questions are examples of what you may see on the midterm exam:
1. In the following code, what does the link element do?
<head> 
	<meta charset="UTF-8"> 
	<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
	<title>Sample Page</title> 
	<!-- Linking an external stylesheet --> 
	<link rel="stylesheet" href="styles.css"> 
	<!-- Linking a favicon for the webpage --> 
	<link rel="icon" href="favicon.ico" type="image/x-icon">
 </head>

In this code example:
The first <link> element is used to link an external stylesheet named "styles.css" to the HTML document. This means that the styles defined in "styles.css" will be applied to the content of this HTML page.

The second <link> element is used to specify a favicon for the webpage. The favicon is the small icon that appears in the tab or address bar of the browser. Here, "favicon.ico" is the favicon image file.

Both of these <link> elements provide metadata about the document and won't display content by themselves. However, they affect the presentation and behavior of the webpage by linking to external resources.

2. In the following code,  what does a div tag do?
<style>
        .highlight{
            background-color: yellow;
            padding: 10px;
            border: 1pxsolid black;
        }
    </style>
<body> 
	<h1>Welcome to the Div Example Page!</h1> 
	<div class="highlight"> This is a div element with the class "highlight". It's used to group content together and can be styled using CSS.
	 </div>
	 <p>Here's some other content outside the div.</p> 
</body>

The <div> element is a generic container used to group block-level content together, making it easier to apply styles or manipulate with scripts. It does not inherently represent anything, but can be useful for creating structure and applying CSS styles or JavaScript actions.

In the example, the <div> tag with the class "highlight" is used to group a block of text together. This text is then styled with a yellow background, padding, and a border using the associated CSS in the <style> block.

Overall, <div> tags are essential for structuring content, especially when used with CSS and JavaScript to achieve specific layouts or behaviors on a webpage.

3. In the following code, what is the difference between the #title and .grid selector?

/* This is an ID selector for an element with the id "title" */
#title{ 
	font-size: 24px; 
	color: blue; 
	text-align: center; 
	} 
/* This is a class selector for all elements with the class "grid" */
.grid{ 
	display: grid; 
	grid-template-columns: 1fr 1fr 1fr; 
	gap: 10px; 
	} 

<h1 id="title">This is a Title</h1> 
<div class="grid"> 
	<div>Grid Item 1</div> 
	<div>Grid Item 2</div> 
	<div>Grid Item 3</div> 
</div>
In this code example:

#title is an ID selector. It selects and applies styles to the single HTML element with the id attribute set to "title". ID selectors are unique and are meant to select only one element on a page. In our example, it styles an <h1> element to have a font size of 24px, a blue color, and centered text.

.grid is a class selector. It selects and applies styles to all HTML elements that have the class attribute set to "grid". Class selectors are not unique and can be used on multiple elements on a page. In our example, it applies a grid layout to a <div> element, making its children arranged in three columns.

The primary difference is their use: #title is specific to one unique element, whereas .grid can be applied to multiple elements.

4. In the following code, what is the difference between padding and margin?
.box {
	border: 3px solid black; 
	padding: 20px; /* Space inside the box, between content and border */ 
	margin: 30px; /* Space outside the box, between box and other elements */ 
	width: 100px; 
	height: 100px; 
	}

<div class="box">Content</div>

In this code example:

padding: Refers to the space inside an element, between its content and its border. In this example, the .box class has a padding of 20px, which means there is a 20-pixel space between the text "Content" and its surrounding black border.

margin: Refers to the space outside an element, between the element itself (including its border) and any adjacent elements. In our example, the .box class has a margin of 30px, creating a 30-pixel space outside of the black border, separating it from other nearby elements.

Visually, if you think of an element as a box, padding can be considered as the cushion inside the box, while margin is the space outside the box. They are essential properties in CSS for controlling layout and appearance of elements on a webpage.

5. Given this HTML and this CSS how will the images be displayed using flex?
<div class="flex-container"> 
	<imgsrc="image1.jpg"alt="Image 1"> 
	<imgsrc="image2.jpg"alt="Image 2"> 
	<imgsrc="image3.jpg"alt="Image 3"> 
</div>

.flex-container { 
	display: flex; 
	justify-content: center; /* Align items horizontally in the center */ 
	align-items: center; /* Align items vertically in the center */ 
	gap: 10px; /* Space between each image */ 
	} 
.flex-container img { 
	width: 100px; 
	height: auto; 
	}
In this code example:

The .flex-container class sets the parent <div> to a flex container using display: flex;. This means the child elements (in this case, the <img> elements) will be laid out in a row by default.

The result will be three images in a row, spaced out evenly across the flex container's width, and vertically centered. If the flex container's width was adjustable, the images would continue to be evenly spaced regardless of the container's width, thanks to the flex properties.

6. What does the following padding CSS do?
padding: 15px 20px 25px 30px;
Here, padding: 15px 20px 25px 30px; means:
	• Top padding is 15px
	• Right padding is 20px
	• Bottom padding is 25px
	• Left padding is 30px

7. What does the following code using arrow syntax function declaration do?
const multiplyByTwo = (number) => { 
	return number * 2; }
console.log(multiplyByTwo(5)); // Outputs: 10

8. What does the following code using map with an array output do?
constnumbers = [1, 2, 3, 4, 5]; 
constdoubledNumbers = numbers.map(num=>num * 2); 
console.log(doubledNumbers); // Outputs: [2, 4, 6, 8, 10]

The map method creates a new array populated with the results of calling the provided function (num => num * 2) on every element in the calling array. In this case, it doubles each number.

The map method is a higher-order function that applies a function to each item in an array and returns a new array with the results. It does not modify the original array.

9. What does the following code output using getElementByID and addEventListener?
<body> 
	<button id="myButton">Click Me!</button> 
	<script>
        // Get the element with the ID 'myButton'
		Const button = document.getElementById('myButton');
	// Add an event listener to the button for the 'click' event
	button.addEventListener('click', function() {
            alert('Button was clicked!');
        });
    </script> 
</body>

In the script, the getElementById function is used to select the button element by its ID.

The addEventListener method is then used to attach a 'click' event listener to the button.

When the button is clicked, the anonymous function provided as the second argument to addEventListener will be executed. This function displays an alert saying "Button was clicked!"

So, when you run this code in a browser and click the button, you'll see an alert pop up with the message "Button was clicked!".

10. What does the following line of Javascript do using a # selector?
document.querySelector("#myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});
Selects element by its ID 

11. Which of the following are true? (mark all that are true about the DOM)
	- The DOM stands for Document Object Model. ✅
	- The DOM represents the structure of an XML document. ❌ (While this statement is partially true, the DOM is most commonly associated with representing the structure of an HTML document in the context of web browsers.)
	- Elements in the DOM can be added, modified, or deleted using JavaScript. ✅
	- The DOM is a linear representation of an HTML document. ❌ (The DOM is hierarchical, not linear.)
	- DOM nodes can be elements, attributes, text, etc. ✅
	- The DOM is case-sensitive. ❌ (HTML is generally not case-sensitive, but XML is. Therefore, the DOM's case sensitivity largely depends on the type of document it's representing.)
	- document.getElementById is a method to access elements in the DOM using their ID. ✅

12. By default, the HTML span element has a default CSS display property value of: 
By default, the <span> element in HTML has a CSS display property value of inline. This means that the element will be displayed inline with the surrounding content and will not break onto a new line. It's often used to apply styles or scripts to a specific portion of text within a block-level element.

13. How would you use CSS to change all the div elements to have a background color of red?
div { 
	background-color: red; 
	}

14. How would you display an image with a hyperlink in HTML?
<a href="https://www.example.com">
    <img src="path_to_image.jpg" alt="Description of Image">
</a>


15. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
The ordering of the box layers in the CSS box model, starting from the inside and working out, is:
	- Content
	- Padding
	- Border
	- Margin

16. Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
<p> This is <span class="highlight">trouble</span> and this is double. </p>

.highlight { color: green; }

17. What will the following code output when executed using a for loop and console.log?
let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

apple 
banana 
cherry

18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
// Select the element with the id "byu" 
var element = document.getElementById("byu"); 
// Change the text color of the selected element to green 
element.style.color = "green";

19. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
• Paragraph: <p>
• Ordered List: <ol>
• Unordered List: <ul>
• First Level Heading: <h1>
• Second Level Heading: <h2>
• Third Level Heading: <h3>

20. How do you declare the document type to be html?
<!DOCTYPE html>

21. What is valid javascript syntax for if, else, for, while, switch statements?
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if neither condition is true
}

for (initialization; condition; increment/decrement) {
    // code to be executed for each iteration
}

while (condition) {
    // code to be executed as long as condition is true
}

switch(expression) {
    case value1:
        // code to be executed if expression is value1
        break;
    case value2:
        // code to be executed if expression is value2
        break;
    //... more cases ...
    default:
        // code to be executed if expression doesn't match any case
}

22. What is the correct syntax for creating a javascript object?
let objectName = {
    key1: value1,
    key2: value2,
    // ... more key-value pairs ...
};

23. Is is possible to add new properties to javascript objects?
Yes
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

car.color = "blue";

24. If you want to include JavaScript on an HTML page, which tag do you use?
<script></script>

25. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
<div>
    <span>animal</span>
    <span>fish</span>
</div>

document.querySelector('span').textContent = "crow";

This code will select the first <span> element it finds (which contains the text "animal") and set its text content to "crow". The second <span> element (which contains the text "fish") will remain unaffected.

26. Which of the following correctly describes JSON?
- JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
- JSON is a text-based format often used to transmit data in web applications, deriving its syntax from JavaScript object notation, but it is language agnostic and can be used in many programming languages.
- JSON is primarily used to transfer data between a server and a web application or between different layers of an application. It is a popular alternative to XML.
- In JSON, data is represented using key-value pairs, and it supports data structures like arrays and objects. It does not support functions, dates, or comments directly.

27. What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
Sure, let's break down what each of these console commands does:
- chmod: Stands for "change mode". It is used to change the permissions of a file or directory. Permissions define who can read, write, or execute the file or directory.
- pwd: Stands for "print working directory". It displays the current directory you are in.
- cd: Stands for "change directory". It allows you to navigate to another directory.
- ls: Lists the contents of the current directory.
- vim: Vim is a text editor. When invoked with a filename, vim opens that file for text editing.
- nano: Nano is another text editor, known for its simplicity compared to Vim.
- mkdir: Stands for "make directory". It creates a new directory.
- mv: Stands for "move". It can be used to move or rename files and directories.
- rm: Stands for "remove". It is used to delete files and directories.
- man: Displays the manual or help files for a command. For example, man ls will display the manual page for the ls command.
- ssh: Stands for "secure shell". It is used to securely log into another machine over a network.
- ps: Stands for "process status". It displays information about currently running processes.
- wget: A command-line utility to download files from the internet.
- sudo: Stands for "superuser do". It allows a permitted user to execute a command as the superuser or another user, as specified in the sudoers file.


28. Which of the following console command creates a remote shell session?

ssh [username]@[hostname or IP address] 
➜  ssh -i [key pair file] ubuntu@[ip address]

29. Which of the following is true when the -la parameter is specified for the ls console command?
• The -l option displays the files and directories in a long format, which includes details such as file permissions, number of links, owner, group, size, and timestamp.
• The -a option lists all entries, including those starting with a dot (.), which are usually hidden files and directories in UNIX-like systems.

Therefore, using -la with ls provides a detailed listing of all files and directories, including the hidden ones, in the current directory.

30. Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
• Top-Level Domain (TLD): "click"
• Subdomains: "banana," "fruit," and "bozo"
• Root Domain: "click"

31. Is a web certificate necessary to use HTTPS.
Yes

32. Can a DNS A record can point to an IP address or another A record?
A DNS A (Address) record is used to map a domain name to an IPv4 address. It cannot directly point to another A record. A records are used to resolve domain names to IP addresses, and they provide the actual IP address where a resource is located.

33. Port 443, 80, 22 is reserved for which protocol?
- Port 443: HTTPS (Hypertext Transfer Protocol Secure)
- Port 80: HTTP (Hypertext Transfer Protocol)
- Port 22: SSH (Secure Shell)

34. What will the following code using Promises output when executed?
function delayedMessage(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

console.log("Start");

delayedMessage("Hello, World!", 2000)
  .then((message) => {
    console.log("Received message:", message);
    return delayedMessage("How are you?", 1000);
  })
  .then((message) => {
    console.log("Received message:", message);
    return delayedMessage("I'm doing fine, thanks!", 1500);
  })
  .then((message) => {
    console.log("Received message:", message);
    console.log("End");
  });

Start 
Received message: Hello, World! 
Received message: How are you? 
Received message: I'm doing fine, thanks! 
End

Here's the expected sequence of events:
• "Start" is logged immediately.
• After 2 seconds, "Received message: Hello, World!" is logged.
• After 1 second (from the previous message), "Received message: How are you?" is logged.
• After 1.5 seconds (from the previous message), "Received message: I'm doing fine, thanks!" is logged.
• Finally, "End" is logged when all Promises have resolved.

This demonstrates how Promises can be used to handle asynchronous operations and control the flow of execution in a structured manner.




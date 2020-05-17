JavaScrpit
===========
Part 10 : DOM
-----------
The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

### DOM and JavaScript

The DOM is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, XML documents, and their component parts (e.g. elements).

### How DOM is composed?

#### Document
is the Whole Html File you create or genrated after lunching the browser.It helps acces to elmend insde of it:
    
    document
    document.head
    document.body

#### how to select elements?
1. using children attribute:

        document.body.children;

2. using tag name:

        document.getElementsByTagName("h1");
        document.getElementsByTagName("img");

3. using class name:

        document.getElementsByClassName("animal");

4. using tag name:

        document.getElementById("special");
    you can select only one element using Id, thats why we recommend using Id for One Element.
5. using Selectors like CSS:

        document.querySelector("h1");
        document.querySelector("h1#special");
        document.querySelectorAll("div img");
        document.querySelectorAll(".title");
### How to manipulate DOM Content?
1. We have to select the element like we previously shown.
2. We now use text attribute to manuplite the textContent

        var animal= document.querySelector(".container h2");
        animal.textContent=prompt("Rename the Animal");

        var description= animal.nextElementSibling.nextElementSibling;

### How to manipulate DOM CSS?
1. We have to select the element like we previously shown.
2. We now use style attribute to manuplite the css

        var p= document.querySelector("p");
        p.style.backgroundColor = "red";
        p.style.color = "white";

### How to add/remove Classes?
1. We have to select the element like we previously shown.
2. We now use style attribute to manuplite the css

        var ListOfli= document.querySelectorAll("ul li");
        ListOfli.forEach(function(el){
            el.classList.add("newClass");
            el.classList.remove("oldClass");
        });


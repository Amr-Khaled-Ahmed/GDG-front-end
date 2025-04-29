# JavaScript DOM Manipulation and Events: Combined Teaching Session Script


**Objective**: Explain DOM manipulation (selectors, class names, attributes, styles, element creation/appending/deletion) and event handling (event types, catching events, `e.preventDefault`, `e.target`), then outline how to apply these to build a To-Do List app. Demonstrate concepts using a teaching demo.

---

## Session Outline

### 1. Introduction to DOM and Events 

- **Welcome and Objectives** :

  - "Hello everyone! Today, we’ll master JavaScript’s ability to make web pages interactive using the Document Object Model (DOM) and event handling. We’ll first cover key concepts like selecting elements, manipulating classes, attributes, and styles, and handling user interactions. Then, we’ll outline how to build a To-Do List app using these skills."
  - Objectives: Understand each DOM and event concept, see them in a teaching demo, and learn how to apply them to a practical app.

- **What is the DOM?** :

  - "The DOM is a tree-like structure created by the browser from HTML, representing elements as objects JavaScript can interact with."
  - Capabilities (from `code.js`):
    - Change HTML elements, attributes, and CSS styles.
    - Add or remove elements and attributes.
  - Analogy: "Think of the DOM as a blueprint of your webpage—JavaScript can read, edit, or add to it."
  - Note: "Most web apps are CRUD systems (Create, Read, Update, Delete) for DOM elements."

- **What are Events?** :

  - "Events are user actions (clicks, keypresses, hovers) or browser actions (page load, resize) that JavaScript can detect and respond to."
  - Examples (from `code.js`): `click`, `contextmenu`, `mouseenter`, `mouseleave`, `focus`, `blur`, `load`, `scroll`, `resize`, `submit`.
  - Methods: `.onclick` for single handlers, `addEventListener` for multiple, `e.preventDefault` to stop default behavior, `e.target` to identify the triggered element.
  - Analogy: "Events are like doorbells—JavaScript answers when they ring."

---

### 2. Explaining DOM Manipulation and Events Concepts 

#### a. DOM Selectors 

- **Explanation**:

  - **What are Selectors?**:

    - "Selectors are methods to find HTML elements in the DOM so we can interact with them."

  - **Types and Examples**:

    - `getElementById(id)`: Finds one element by its `id`. Fast and specific.
      - Example: `document.getElementById('todoInput')` gets the input field.
    - `querySelector(selector)`: Finds the first element matching a CSS selector (e.g., `#id`, `.class`, `tag`).
      - Example: `document.querySelector('#todoList')` gets the `<ul>`.
    - `querySelectorAll(selector)`: Returns a NodeList of all matching elements.
      - Example: `document.querySelectorAll('.todo-item')` gets all task `<li>` elements.
    - `getElementsByClassName(class)`: Gets elements by class name (live HTMLCollection).
      - Example: `document.getElementsByClassName('todo-item')`.
    - `getElementsByTagName(tag)`: Gets elements by tag (e.g., `li`, `button`).
      - Example: `document.getElementsByTagName('li')`.



  

- **Live Coding** (using `dom_teaching_demo.html`):

  - **1.** `getElementById`:

    ```javascript
    let demoDiv = document.getElementById('demoDiv');
    console.log(demoDiv); // <div id="demoDiv">Demo Div</div>
    ```

    - Explain: "Selects one element by its `id`. Fast for unique IDs like `demoDiv`."

  - **2.** `getElementsByTagName` :

    ```javascript
    let paragraphs = document.getElementsByTagName('p');
    console.log(paragraphs); // HTMLCollection [p, p]
    console.log(paragraphs[0]); // <p>Paragraph 1</p>
    ```

    - Explain: "Gets all elements by tag name as a live HTMLCollection. Access the first `<p>` with index 0."

  - **3.** `getElementsByClassName` :

    ```javascript
    let spans = document.getElementsByClassName('my-span');
    console.log(spans); // HTMLCollection [span.my-span.special, span.my-span]
    console.log(spans[1]); // <span class="my-span">Span 2</span>
    ```

    - Explain: "Selects elements by class name, also a live HTMLCollection."

  - **4.** `querySelector` and `querySelectorAll` :

    ```javascript
    let special = document.querySelector('.special');
    console.log(special); // <span class="my-span special">Span 1</span>
    let allSpans = document.querySelectorAll('.my-span');
    console.log(allSpans); // NodeList [span.my-span.special, span.my-span]
    ```

    - Explain: "`querySelector` gets the first match for a CSS selector (e.g., `.class`, `#id`). `querySelectorAll` gets all matches as a static NodeList."


- **When to Use**:

    - Use `getElementById` for unique IDs.
    - Use `querySelector`/`querySelectorAll` for flexibility (classes, attributes, etc.).
    - Use `getElementsByClassName`/`getElementsByTagName` for specific class or tag collections.


####  Other DOM Properties 

- **Explanation**:

  - "We can access properties like `title`, `body`, `forms`, and `links` to get page metadata or elements."

- **Code Context**:

  - "The code also accesses other DOM properties like `title`, `body`, `forms`, and `links`."

- **Live Coding and Explanation**:

  ```javascript
  console.log(document.title); // "Dom"
  console.log(document.body); // <body>...</body>
  console.log(document.forms); // HTMLCollection [form, form]
  console.log(document.forms[0].one.value); // "Hello from one"
  console.log(document.links); // HTMLCollection [a.link, a]
  console.log(document.links[0].href); // "https://google.com"
  ```

  - Explain:
    - `document.title`: Gets the page’s `<title>`.
    - `document.body`: Accesses the `<body>` element.
    - `document.forms`: Gets all `<form>` elements.
    - `document.forms[0].one.value`: Gets the `value` of the input named `one` in the first form.
    - `document.links`: Gets all `<a>` elements with `href`.
  - Note: "These are less common but useful for specific tasks, like accessing form data or links."

- **Demo**:

  - Run in console, show outputs.


#### c. DOM Manipulation (Class Names, Styles, Attributes, Create/Append) 

- **Code Context**:

  - "Now we manipulate a `<h1>`, `<button>`, and `<input>` with ID/class selectors, change styles, classes, attributes, and create/append elements."

- **Live Coding and Explanation**:

  - **1. Changing Content and Styles** :

    ```javascript
    let head = document.querySelector('#id01');
    console.log(head.innerHTML); // "Old Heading"
    console.log(head.textContent); // "Old Heading"
    head.innerHTML = 'new head';
    head.style.color = 'red';
    head.style.setProperty("font-size", "50px");
    head.style.removeProperty('font-size');
    ```

    - Explain:
      - `innerHTML`: Gets/sets HTML content (includes tags).
      - `textContent`: Gets/sets plain text (safer, no HTML).
      - `style.property`: Sets CSS styles (e.g., `color`).
      - `style.setProperty`/`removeProperty`: Alternative for CSS properties.
    - Demo: Change `<h1>` text to "new head" and color to red.

  - **2. Manipulating Class Names** :

    ```javascript
    // head.className = 'Head';
    head.classList.add('new');
    head.classList.add('new-2');
    console.log(head.classList.contains('new-2')); // true
    head.classList.remove('new-2');
    console.log(head.classList.contains('new-2')); // false
    head.classList.toggle('new'); // removes 'new'
    head.classList.toggle('new-2'); // adds 'new-2'
    ```

    - Explain:
      - `className`: Sets all classes (overwrites existing).
      - `classList.add/remove/toggle/contains`: Manipulates classes individually.
      - `toggle`: Adds if absent, removes if present.
      - `contains`: Checks for a class.
    - Demo: Add/remove classes, check with `contains`.

  - **3. Attributes** :

    ```javascript
    let myBtn = document.querySelector('.btn');
    let myInput = document.querySelector('#input');
    console.log(myBtn.getAttribute('title')); // null (no title attribute)
    myBtn.setAttribute("ahmed", "reda");
    console.log(myBtn.attributes); // NamedNodeMap {..., ahmed="reda"}
    console.log(myInput.hasAttribute('placeholder')); // true
    myInput.removeAttribute('name');
    console.log(myInput); // <input> without name
    ```

    - Explain:
      - `getAttribute(name)`: Gets an attribute’s value.
      - `setAttribute(name, value)`: Adds/updates an attribute.
      - `hasAttribute(name)`: Checks if an attribute exists.
      - `removeAttribute(name)`: Deletes an attribute.
      - `attributes`: Lists all attributes.
    - Demo: Add custom attribute, remove `name`, check `placeholder`.

  - **4. Creating and Appending Elements** :

    ```javascript
    let span = document.createElement('span');
    span.setAttribute("ahmed", "reda");
    span.innerHTML = 'Click me 2';
    myBtn.append(span);
    ```

    - Explain:
      - `createElement(tag)`: Creates a new element.
      - `setAttribute`: Adds attributes to the new element.
      - `innerHTML`: Sets content.
      - `append`: Adds the element as a child (also: `before`, `after`, `prepend`).
    - Demo: Append `<span>` inside `<button>`.

#### d. Event Handling 

- **Code Context**:

  - "The code attaches event handlers to the button, input, window, and form using `.on` and `addEventListener`, and demonstrates `e.preventDefault` and `e.target`."

- **Live Coding and Explanation**:

  - **1.** `.on` **Event Handlers** :

    ```javascript
    myBtn.onclick = function () {
        console.log('Got Clicked');
    };
    myBtn.oncontextmenu = () => {
        console.log("shown");
    };
    myBtn.onmouseleave = () => {
        console.log("leave");
    };
    myBtn.onmouseenter = () => {
        console.log("enter");
    };
    myInput.onfocus = () => {
        console.log("focused");
    };
    myInput.onblur = () => {
        console.log("out");
    };
    this.onload = () => {
        console.log('loaded');
    };
    window.onscroll = () => {
        console.log("Scroll");
    };
    window.onresize = () => {
        console.log("Resized");
    };
    ```

    - Explain:
      - `.onclick`, `.oncontextmenu`, etc.: Assign a single handler for specific events.
      - Events:
        - `click`: Left-click.
        - `contextmenu`: Right-click.
        - `mouseenter`/`mouseleave`: Mouse enters/leaves element.
        - `focus`/`blur`: Input gains/loses focus.
        - `load`: Page finishes loading.
        - `scroll`: Page is scrolled.
        - `resize`: Window is resized.
    - Demo: Click button, right-click, hover, focus input, scroll, resize.

  - **2.** `addEventListener` :

    ```javascript
    myBtn.addEventListener('click', () => {
        console.log('clicked');
    });
    ```

    - Explain: "Unlike `.onclick`, `addEventListener` allows multiple handlers for the same event. More flexible."
    - Demo: Click button to see both `onclick` and `addEventListener` logs.

  - **3.** `e.preventDefault` **and Form Submission** :

    ```javascript
    document.querySelector('.ev').addEventListener('click', (e) => {
        console.log(e);
        e.preventDefault();
    });
    let form = document.querySelector('.form');
    form.onsubmit = (e) => {
        let userValid = false;
        let ageValid = false;
        let userInput = document.querySelector("[name='username']");
        let ageInput = document.querySelector("[name='age']");
        if (userInput.value !== '' && userInput.value.length >= 10) {
            userValid = true;
        }
        if (ageInput.value !== "") {
            ageValid = true;
        }
        if (userValid === false || ageValid === false) {
            e.preventDefault();
        }
    };
    ```

    - Explain:
      - `e.preventDefault()`: Stops default behavior (e.g., link navigation, form submission).
      - `<a class="ev">`: Prevents navigating to Google.
      - `<form>`: Validates inputs; prevents submission if username &lt; 10 chars or age empty.
    - Demo: Click `<a>` (no navigation), submit form with invalid inputs (stops).

  - **4.** `e.target` **and Event Delegation** :

    ```javascript
    document.addEventListener("click", function (e) {
        if (e.target.className === 'intro') {
            console.log(`i am intro`);
        } else {
            console.log('i am not intro');
        }
    });
    ```

    - Explain:
      - `e.target`: The element that triggered the event.
      - Delegation: Listens on `document` to catch clicks on `.intro` `<div>`s.
    - Demo: Click `<div class="intro">` vs. elsewhere.

---

### 3. Building a To-Do List App 

## Phase 1: Core Functionality

1. **Basic HTML Structure**
   - Create input field and Add button
   - Set up container for tasks list

2. **Add Tasks**
   - Implement `addTask()` function
   - Basic validation (empty input)

3. **Render Tasks**
   - Create `renderTasks()` function
   - Display tasks in the DOM

4. **LocalStorage Integration**
   - Implement `loadTasks()` and `saveTasks()`

## Phase 2: Task Management

5. **Delete Tasks**
   - Add delete button functionality
   - Implement `deleteTask()`

6. **Toggle Completion**
   - Add checkbox/click handler
   - Implement `toggleTaskCompletion()`
   - Update localStorage

## Phase 3: Enhanced UI/UX

7. **Filtering System**
   - Add radio buttons for filtering
   - Implement `filterTasks()`

8. **Empty State Handling**
   - Show message when no tasks

## Phase 4: Advanced Features

9. **Edit Functionality**
   - Add edit/save buttons
   - Implement `startEditingTask()` and `saveEditedTask()`
   - Handle edit state management

10. **Keyboard Support**
    - Add Enter key support for adding tasks

## Phase 5: Polish & Refinement

11. **UI Styling**
    - Add CSS for better visual presentation
    - Hover/focus states

12. **Animations/Transitions**
    - Smooth state changes

13. **Error Handling**
    - Better input validation

## Implementation Order Rationale

1. Start with the absolute minimum (add/display tasks)
2. Add persistence (localStorage)
3. Build basic CRUD operations (Create, Read, Delete)
4. Add Update functionality (editing)
5. Enhance with filtering
6. Polish UI/UX




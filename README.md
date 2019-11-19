# l26-component-based-ui
Create and style a counter application using React components.
# l26-component-based-ui

https://github.com/401-advanced-javascript-kimball/l26-component-based-ui/pull/1
https://travis-ci.com/401-advanced-javascript-kimball/l26-component-based-ui

# LAB - 

## Project Name

### Author: Student/Group Name

### Links and Resources
* [submission PR](http://xyz.com)
* [travis](http://xyz.com)
* [back-end](http://xyz.com) (when applicable)
* [front-end](http://xyz.com) (when applicable)

#### Documentation
* [api docs](http://xyz.com) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)
* [styleguide](http://xyz.com) (React assignments)

### Modules
#### `modulename.js`
##### Exported Values and Methods

###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.
  
#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

#### UML
Link to an image of the UML for your application and response to events

----------

# LAB - Component Based UI

Create and style a counter application using React components.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

Starter code has been provided for you in the `/lab/starter-code` folder. 

Open [Code Sandbox](http://codesandbox.io) and Create a new application. When prompted, choose "From GitHub" and then paste in the URL to today's starter code folder from your fork of the class repository.

You will be submitting the URL to this working sandbox as part of your assignment.


## Requirements

### Modularize and Refactor

Refactor the application given by first modularizing it, and then altering it's basic functionality of generating a random number into a proper counter application that tracks a number based on button clicks.

* Move the `Header` and `Footer` components to separate files
* Properly `export` them as defaults
* Import them into the `App` Component using ES6 `import` statement
* Convert the `Header` component to an ES6 Class
* Rename the `Main` component to `Counter` and render it properly
* Change the state declaration to track a `counter` instead of `stuff`
* Change the button handler to increment the counter instead of returning a random number.
* Add a second button that, when clicked, would decrement the counter

### Design Implementation
* Create a file called `app.scss` and `import` that into the `App` component
* Add some creatove styling for the header, making use of SASS nesting
* Alter the `app.scss` as follows:
  * Alter your css rules to use a variable (i.e. $backgroundColor)
  * Start getting creative about styling the basic layout of the app
    * Might things change visually when the counter is `> 0` or `< 0`?
    * Where would the buttons look best?
    * Can you make the number "pop"

### Assignemnt Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations

----------


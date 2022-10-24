React JS

* Props
* State
* Life cycle methods
* Router
* Portals

This guys sounds like Chef John.

You can access all script files belonging to the applications we will make during the course by going to this links;

https://github.com/OakAcademy/react-router/tree/master/react-router

https://github.com/OakAcademy/blog-posts

https://github.com/OakAcademy/hemisphere

https://github.com/OakAcademy/first-app

https://github.com/OakAcademy/image-list

https://github.com/OakAcademy/Context-Hooks/tree/master/contextapi

# Section 2 ** (2022-09-25)

Let, Const, and Var

    Let and Const are block-scope. They only exist within the block where they are defined.
    Const variables are immutable. We cannot change or redefine it.

npm = Node Package Manager

What get generated when you run create-react-app {app name} ?

    src => Folder where we put all the source code we write
    public => Folder that stores static files like images, music
    node_modules => Folder that contains all of our project dependencies
    package.json => Records our project dependencies and configures our project
    package-lock.json or yarn.lock => Records the exact version of packages that we install
    README.md => Instructions on how to use this project

What is a react component?

    A COMPONENT is a function or a class that uses JSX (which produces/displays HTML to user) and uses event handlers to do something with feedback/input from user.

# Section 3 ** (2022-09-29)

What is JSX?

    Technically, it's javascript, gets compiled by Babel into straight JS

What kind of JS variables can we access in JSX blocks?

    strings
    ints
    strings and numbers inside an array will get concatenated together and displayed
    NOT OBJECTS (but text from an object is ok)

# Section 4 ** (2022-09-29)

Component Nesting - A component can be shown inside of another component

Component Reusability - We want to make components reused throughout the application

Component Configuration - We should be able to configure (customize) a component when it is created

Props (Properties)

    Props is a system for passing data from a parent component to a child component.
    Its purpose is to customize or configure a child component.

# Section 5 ** (2022-10-19)

### Functional vs Class Components

**Functional**
- used for simple content

**Class-based**
- used for anything more complicated (complex logic, needs to respond to user input, makes network requests, etc.)
- easier code organization
- can use react 'state' system -> easier to handle user input
- can use lifecycle methods -> easier to do things when the app first starts

## Rules of Class Based Components
- Must be a javascript class
- Must extend React.Component
- Must define a 'render' method

## Rules about State
- Only usable with **class-based** components
- 'State' is a JS object that contains data relevant to a component
- Updating state on a component causes the component to rerender
- State must be initialized when a component is created
- State can only be updated using the funciton 'setState'

# Section 7 (2022-10-21)
## Rectac Lifecycle Methods in ReactJS with Redux

**Component Lifecycle Methods**

*constructor* -> Good place to do one time setup
*render* -> Just return JSX (NOT OPTIONAL, MUST BE DEFINED)
*componentDidMount* -> Good place to data loading, invoked only one time
*componentDidUpdate* -> Good place to do more data loading when state/props change
*componentWillUnmount* -> Good place to do clean up

# Section 8 (2022-10-21)
## React Forms (handling user events)










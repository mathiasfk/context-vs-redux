# React Props vs Context API vs Redux

This project is intended to explore the usage of Context API and compare it to other ways of accomplishing the same result.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Comparison

| | ContextAPI | Redux |
| -- | -- | -- |
| What is it? | A way of passing data (values, states, functions) through the component tree without having to pass props down manually at every level. |A library for managing and updating application state in a predictable and testable way. |
| What is it NOT? | A state management system. | Just a way of sharing global state. |
| When should you use it? | - You need to share some global state across multiple components. | - You need to share large amounts of global state across multiple components.<br>- The logic to update that state may be complex.<br>- The app has a medium or large-sized codebase, and might be worked on by many people.<br>- You need more sofisticated debug tools. |
| When should you NOT use it? | - Only one or two components use it.<br>- Passing props would do the job just as fine.<br>- The components need to be reusable. | - Small applications with a only a few global states.<br>- All you need is just sharing global state.
| What libs would you install? | - React | - React<br>- Redux<br>- React Redux<br>- React Toolkit (optional)<br>- React Devtools Extension (optional)

## Sources

* https://medium.com/@devluispereira/react-context-api-typescript-507eec884549
* https://github.com/devluispereira/context-api-example
* https://github.com/rodrigoxavier/using-react-hooks
* https://changelog.com/posts/when-and-when-not-to-reach-for-redux
* https://redux.js.org/
* https://react-redux.js.org/
* https://redux-toolkit.js.org/

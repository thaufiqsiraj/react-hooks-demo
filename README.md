# React Hooks Demo

This project demonstrates the usage of React's essential hooks: `useState`, `useEffect`, `useRef`, and `useReducer`. Each hook serves a unique purpose, and in this simple app, we showcase how they can be combined to manage state, side effects, and mutable values effectively.

## Features
- **`useState`**: Manage local state (e.g., name input).
- **`useEffect`**: Handle side effects like logging.
- **`useRef`**: Track mutable values without re-rendering.
- **`useReducer`**: Manage complex state logic (e.g., counter with actions).

## Demo

- **`useState`**: Used for handling the name input field. It updates the UI as the user types.
- **`useEffect`**: Logs the `name` whenever it's updated.
- **`useRef`**: Tracks how many times the component has re-rendered without causing re-renders.
- **`useReducer`**: Handles a counter with `increment`, `decrement`, and `reset` actions.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/thaufiqsiraj/react-hooks-demo.git
   ```
2. Install dependencies:

  ```bash 
    cd react-hooks-demo
    npm install
  ```

3. Start the app:

```bash
  npm start
```
Open your browser and go to http://localhost:3000

## How It Works
This demo uses four React hooks:

`useState`:

The `useState` hook is used to store and update the `name` state.
When the user types into the input field, the `name` state is updated, and the displayed text below changes accordingly.

`useEffect`:

The `useEffect` hook is used to log the updated `name` to the console every time it changes.
This demonstrates how side effects like logging or fetching data can be handled in React.

`useRef`:

The `useRef` hook is used to track how many times the component has rendered without causing re-renders.
It keeps a mutable reference (`renderCount`) that increments each time the component renders.

`useReducer`:

The `useReducer` hook is used to manage more complex state logic, specifically for a counter.
The reducer function handles actions like `increment`, `decrement`, and `reset`, making it more scalable for managing complex state.

## Code Walkthrough
`useState`:

The `name` state and `setName` function are created by calling `useState`.
The input field updates the `name` state on every keystroke.

`useEffect`:

A side effect is triggered every time the `name` state changes.
The `console.log` statement inside useEffect logs the updated value of `name`.

`useRef`:

The `renderCount` ref keeps track of how many times the component has rendered.
`useEffect` is used to increment the `renderCount` on every render.

`useReducer`:

The `reducer` function is used to manage the `count` state with three actions: `increment`, `decrement`, and `reset`.
The `dispatch` function is used to send actions to the reducer to update the state.

## Conclusion
This demo provides a hands-on look at how the four hooks can be used in a single component to handle various aspects of state management, side effects, and tracking mutable values. It's a great starting point for understanding how to build scalable and maintainable React applications.

#### Feel free to modify the code to experiment with different hook combinations and learn more!


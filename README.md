# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying state within the hook's body without proper dependency management.  The `bug.js` file contains the erroneous code, resulting in an infinite loop and potentially crashing the application. The solution is provided in `bugSolution.js`.
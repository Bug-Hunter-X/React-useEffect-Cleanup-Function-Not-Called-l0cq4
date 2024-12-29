# React useEffect Cleanup Function Not Called

This repository demonstrates a common issue in React applications involving the `useEffect` hook's cleanup function not being called as expected.  This can often lead to memory leaks, especially when dealing with event listeners, timers, or subscriptions.

The `bug.js` file contains the problematic code, showcasing the effect without proper cleanup. The `bugSolution.js` file provides a corrected version with a properly implemented cleanup function.

## Problem

The original code lacks an appropriate cleanup function.  This is important when using `useEffect` for anything that requires resources to be released – subscriptions, timers etc.   Without a cleanup function, these resources remain active after the component unmounts, leading to memory leaks and potential performance issues.

## Solution

The solution adds a cleanup function to the `useEffect` hook that addresses this resource management issue. This ensures that resources such as event listeners or timers are properly released when the component is unmounted, thus preventing memory leaks.
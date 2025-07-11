// Event Loop Explanation
// The event loop is a mechanism that allows JavaScript to handle asynchronous operations.
// It processes tasks from the call stack and the message queue, enabling non-blocking behavior.
// Let's walk through a simple example step by step.


export function eventLoopExample() {
  console.log('Start');
  setTimeout(() => {
    console.log('Timeout');
  }, 0);
  console.log('End');
}

// Step-by-step:
// 1. 'Start' is logged first.
// 2. setTimeout schedules 'Timeout' to run after the current call stack is empty.
// 3. 'End' is logged next.
// 4. After the stack is clear, 'Timeout' is logged.
// The event loop enables JavaScript to handle async tasks efficiently.

// 🌐 Extra Resources
// 1. Jake Archibald: In the Loop (YouTube) - https://www.youtube.com/watch?v=cCOL7MC4Pl0
// 2. MDN Web Docs: Event Loop - https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

// EventLoop list
# 🚦 Full Priority Order Summary

| Global Order | Phase             | Description / Examples                               |
|-------------|-----------------|-----------------------------------------------------|
| 1️⃣          | Synchronous code  | Runs immediately                                    |
| 2️⃣          | Microtasks        | Runs right after synchronous code                  |
|             | ↳ process.nextTick() (Node.js only) | Highest among microtasks                  |
|             | ↳ Promise.then()  | Normal microtasks                                   |
|             | ↳ queueMicrotask()| Manual microtasks                                   |
|             | ↳ fetch().then()  | Fetch callbacks run as microtasks after network resolves |
| 3️⃣          | Macrotasks        | After microtasks, one per event loop cycle         |
|             | ↳ setTimeout, setInterval | Timer callbacks                                |
|             | ↳ I/O callbacks   | File/network operations                             |
|             | ↳ setImmediate() (Node.js) | After I/O polling                             |
|             | ↳ UI / message events | Browser tasks                                     |
| 4️⃣          | Rendering phase   | Browser updates view                                |
| 5️⃣          | Loop repeats      | Start next event loop tick                           |

# 🚦 JavaScript Event Loop Priority with Examples

| Global Order | Phase             | Description / Examples                               |
|-------------|-----------------|-----------------------------------------------------|
| 1️⃣          | Synchronous code  | Runs immediately. Examples:                       |
|             |                  | ```js                                           |
|             |                  | console.log('Sync start');                       |
|             |                  | let a = 5;                                      |
|             |                  | function greet() { return 'Hi'; }               |
|             |                  | console.log('Sync end');                         |
|             |                  | ```                                              |
| 2️⃣          | Microtasks        | Runs **right after synchronous code**, before macrotasks. |
|             | ↳ process.nextTick() (Node.js only) | Highest priority microtask. Example: |
|             |                  | ```js                                           |
|             |                  | process.nextTick(() => console.log('NextTick'));|
|             |                  | ```                                              |
|             | ↳ Promise.then()  | Normal microtasks. Example:                      |
|             |                  | ```js                                           |
|             |                  | Promise.resolve().then(() => console.log('Promise microtask'));|
|             |                  | ```                                              |
|             | ↳ queueMicrotask()| Manually queued microtasks. Example:            |
|             |                  | ```js                                           |
|             |                  | queueMicrotask(() => console.log('Manual microtask'));|
|             | ↳ fetch().then()  | Fetch callbacks are queued as microtasks after the network request resolves. Example: |
|             |                  | ```js                                           |
|             |                  | fetch('https://example.com').then(() => console.log('Fetch microtask'));|
| 3️⃣          | Macrotasks        | Run **after all microtasks**, one per event loop tick. |
|             | ↳ setTimeout, setInterval | Timer callbacks. Example:                 |
|             |                  | ```js                                           |
|             |                  | setTimeout(() => console.log('Timer callback'), 0);|
|             | ↳ I/O callbacks   | File/network operations (Node.js). Example:     |
|             |                  | ```js                                           |
|             |                  | const fs = require('fs');                        |
|             |                  | fs.readFile('file.txt', () => console.log('I/O callback'));|
|             | ↳ setImmediate() (Node.js) | Runs after I/O polling. Example:         |
|             |                  | ```js                                           |
|             |                  | setImmediate(() => console.log('Immediate callback'));|
|             | ↳ UI / message events | Browser events (click, input, etc.). Example: |
|             |                  | ```js                                           |
|             |                  | button.addEventListener('click', () => console.log('Click event'));|
| 4️⃣          | Rendering phase   | Browser updates the UI/view after macrotasks. Example: |
|             |                  | ```html                                         |
|             |                  | <div id="box"></div>                            |
|             |                  | <script>                                       |
|             |                  |   box.style.width = '200px';                   |
|             |                  | </script>                                      |
| 5️⃣          | Loop repeats      | Event loop starts the next tick for new tasks. |

---

## ✅ Quick Example: Full Execution Flow
```js
console.log('Sync start');

Promise.resolve().then(() => console.log('Promise microtask'));

setTimeout(() => console.log('Timer macrotask'), 0);

fetch('https://example.com').then(() => console.log('Fetch microtask'));

console.log('Sync end');

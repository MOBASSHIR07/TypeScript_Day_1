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

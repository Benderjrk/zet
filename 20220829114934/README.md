# Writing one code and using it everywhere
## Monday, August 29, 2022, 8:48:02AM EDT
---

## Using WASI or WASM

* How can I make this portability work?

You can't yet.

* What tools should I use?

wasmtime and wasmer seem like interesting options

* Should I use WASI at all?

It doesn't seem like a good idea right now because it bloats the files. This might be something we need to do more research on.

I'm going to need to get a little more information on the topic. From my understanding I might just have to create a monolith of Rust and compile it in every OS. 

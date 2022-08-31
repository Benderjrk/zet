# Let's Start Learning About Rust

## What is Rust?

Rust is a programming language.
---
* Strictly typed
* Complied
* Borrow and Ownership
* Radical

## Should you get into Rust? What is it even good for?

* Low Level systems
  * Memory management
  * Data representation
  * Concurrency
* Polish tooling
* Prevents common pitfalls
* Compiler designed to give you towards completed code


For example introducing parallelism in Rust is a relatively low-risk operation. the compiler will catch the classical mistakes for you. Giving you the ability to focus on more agressive optimizations.

## The Rust Programming Language

Welcome to the beginning of my text based Rust journey. Let's learn everything we can about Rust.

## Chapter 1

* Installing Rust
* Weiting a program that prints Hello, world!
* Using cargo, Rust's package manager and build system

### Installation

* rustup - cli for managing Rust versions and associated tools
* Other Rust Installation Methods page  
  <https://forge.rust-lang.org/infra/other-installation-methods.html>
 
### Command Line Notation

In these notes, we'll show some commands used in the terminal. Lines that you should enter in a terminal all start with `$`. You don't need to type in the `$` character; it's the command line prompt shown to indicate the start of ech command. Lines that don't start with `$` typically show the output of the previous command. Additionally PowerShell-specific examples will use `>` rather than `$`.

### Installing `rustup` on Linux or macOS

Mac or Linux
`$ curl --proto '=https' --tlsv1.3 https://sh.rustup.rs -sSf | sh`

The command downloads the script and starts the installation of the `rustup` tool. Which installs the latest stable version of Rust.

Honestly, just go read the docs for the rest of chapter one. It's a waste of my time to copy this part.
You need `xcode-select --install` or `build-essential` package

## Learn More

* The Rust Programming Language - The Rust Programming Language  
  <https://doc.rust-lang.org/stable/book/>

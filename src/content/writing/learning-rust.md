---
title: "Learning Rust in 2024"
date: 2024-02-10
category: Note
---

## The Borrow Checker

Rust's memory safety guarantees are built around the concept of ownership and the borrow checker. It’s notoriously difficult to grasp at first, but once it clicks, it fundamentally changes how you think about memory management.

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1;

    // This will cause a compile-time error!
    // println!("{}, world!", s1); 
}
```

Instead of relying on a garbage collector, the compiler ensures that references are always valid. It’s a paradigm shift that takes patience, but the performance and safety payoffs are massive.

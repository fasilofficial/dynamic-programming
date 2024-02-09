# Dynamic Progamming


This repository is designed as a beginner-friendly resource to delve into the world of Dynamic Programming. Through a collection of problems, it aims to demystify concepts like memoization and tabulation, making them easy to understand.

Each problem in the repository is presented with both traditional and optimized solutions, allowing learners to explore different approaches. While the code is written in JavaScript, the concepts discussed are applicable across programming languages, making it accessible to a wide programmers out there.


## Fibonacci
    
<b>Question:</b>
Create a function named fib(n) that accepts a number as an argument. This function should compute and return the n-th number of the Fibonacci sequence. In the Fibonacci sequence, the first and second numbers are both 1. To generate subsequent numbers in the sequence, we sum the two preceding numbers.
    
<b>Solutions:</b>
- [Brute Force solution](./brute-force/fib.js)
- [Memoized solution](./memoized/fib.js)

## Graph Travaler

<b>Question:</b>
Imagine you're a traveler navigating a 2D grid. Starting from the top-left corner, your objective is to reach the bottom-right corner. You can only move downwards or towards the right. How many distinct ways can you accomplish this journey on a grid with dimensions m * n? Write a function called gridTraveler(m, n) to compute this.

<b>Solutions:</b>
- [Brute Force solution](./brute-force/grid-travaler.js)
- [Memoized solution](./memoized/grid-travaler.js)

## Can Sum
    
<b>Question:</b>
Create a function called canSum(targetSum, numbers) that accepts a targetSum and an array of numbers as inputs. The function should determine whether it's feasible to achieve the targetSum using elements from the array. It should return a boolean value indicating the possibility of reaching the targetSum. Each element in the array can be utilized multiple times, and it's assumed that all input numbers are non-negative.

<b>Solutions:</b>
- [Brute Force solution](./brute-force/can-sum.js)
- [Memoized solution](./memoized/can-sum.js)

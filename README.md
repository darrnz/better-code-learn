# My Exercises Repo

This repository contains a series of JavaScript/TypeScript exercises on various topics like Big O Complexity, Data Structures, and Functional Programming. The exercises include corresponding tests that can be run to verify the correctness of the implementations.

## Project Structure

The project is organized into different directories based on the subject, each containing:

- `README.md`: Theory and examples for the topic.
- `exercises.ts`: A file containing exercises to solve.
- `exercises.test.ts`: A file with corresponding tests for the exercises.
- `index.html`: A web interface to run and see the results of the exercises and tests.

## Getting Started

To get started, clone the repository and install the dependencies.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd my-exercises-repo
```

2. Install the dependencies:

```bash
npm install
```

## Running the Exercises

3. Running the TypeScript Compiler

To compile TypeScript files into JavaScript, run:

```bash
npm run compile
```

4. Running Test
The exercises come with tests to verify their correctness using Jest. You can run the tests with the following command:

```bash
npm test
```
If you want Jest to watch for file changes and re-run the tests when files are updated, use:

```bash
npm run test:watch
```


5. Viewing the Exercises and Results in the Browser
You can view the exercises and test results via an HTML interface.

Start a local development server using Vite:
```bash
npx vite
```

Open your browser and go to the following address:
http://localhost:5173


From the web interface, you can select the subject and run the tests. The results will be displayed directly on the page.
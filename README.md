# My Exercises Repo 🚀📚

Welcome! 👋 This repository is designed to help you learn and practice key programming concepts in JavaScript/TypeScript, including Big O Complexity, Data Structures, and Functional Programming. Each topic includes friendly explanations, hands-on exercises, and automated tests you can run in your browser or locally. 🧑‍💻✨

## Project Structure 🗂️

The project is organized into subject folders. Each subject contains:

- `README.md`: Theory, analogies, and examples for the topic. 📖
- `explanation.ts`: Friendly, step-by-step technical explanations and usage notes. 📝
- `exercises.ts`: Arrow function skeletons for you to fill in and practice. 🏋️‍♂️
- `exercises.test.ts`: Automated tests for each exercise, using [Vitest](https://vitest.dev/). ✅

At the root, you'll find:
- `index.html`: A web interface to select a topic and run its tests in your browser. 🌐
- `index.ts`: Handles loading and running tests from the browser UI. 🖥️
- `package.json`, `tsconfig.json`, `vite.config.js`, `vitest.config.ts`: Project configuration files. ⚙️

## Getting Started 🚦

### Prerequisites 🛠️

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later) 🟢
- [npm](https://www.npmjs.com/) (comes with Node.js) 📦

### Installation 📥

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd my-exercises-repo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## How to Learn and Practice 🧠

### 1. Read the Explanations 📖
- Open any subject folder (e.g., `src/data-structures/arrays/`).
- Start with `explanation.ts` and `README.md` for friendly theory, analogies, and step-by-step examples.

### 2. Solve the Exercises 🏋️‍♂️
- Open `exercises.ts` in each subject folder.
- Fill in the arrow function skeletons with your solutions.

### 3. Run the Tests ✅

#### Option A: In Your Browser 🌐
- Open `index.html` in your browser (use a local server for best results, e.g., with Vite).
- Select a subject from the dropdown and click "Run Tests".
- See instant feedback and results for your solutions. 🎉

#### Option B: In Your Terminal 🖥️
- Run all tests with:

  ```bash
  npm test
  ```

- Or run tests in watch mode (auto-reloads on file changes):

  ```bash
  npm run test:watch
  ```

#### Option C: Compile TypeScript 🛠️
- To compile all TypeScript files to JavaScript:

  ```bash
  npm run compile
  ```

## How the Web Interface Works 🌐

- The web interface (`index.html` + `index.ts`) lets you select a topic and runs its tests using Vitest's browser runner. 🧪
- Results are displayed instantly in the browser. ⚡
- Great for interactive learning and quick feedback! 🙌

## Tips for Success 💡

- Read the explanations for analogies and key points before starting exercises. 📝
- Try solving exercises on your own, then run the tests to check your work. 🏆
- Use the browser interface for instant feedback, or the terminal for more advanced workflows. 🔄
- All exercises use arrow function skeletons—just fill in the logic! ✍️

## Troubleshooting 🛠️

- If you see errors about missing dependencies, run `npm install` again. 🔄
- If tests don't run in the browser, make sure you're using a local server (e.g., `vite` or `npx vite`). 🌐
- For TypeScript errors, check your code and refer to the explanations for guidance. 🧐

## Contributing 🤝

Pull requests and suggestions are welcome! Feel free to add new topics, improve explanations, or create new exercises and tests. 💡

---
Happy learning and coding! 🚀🎉

// ...existing code...
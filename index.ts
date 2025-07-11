import { run } from "node:test";


document.getElementById('runTestsButton')?.addEventListener('click', async function () {
  const subjectSelector = document.getElementById('subjectSelector') as HTMLSelectElement;
  const subject = subjectSelector.value;

  if (!subject) {
    alert('Please select a subject!');
    return;
  }

  const testResultsDiv = document.getElementById('test-results');
  if (testResultsDiv) {
    testResultsDiv.innerHTML = ''; // Clear previous results
  }

  // Map subject to test file path
  const testFileMap: Record<string, string> = {
    'big-O-complexity': './src/big-O-complexity/exercises.test.ts',
    'data-structures/arrays': './src/data-structures/arrays/exercises.test.ts',
    'data-structures/linked-list': './src/data-structures/linked-list/exercises.test.ts',
    'data-structures/hash-table': './src/data-structures/hash-table/exercises.test.ts',
    'data-structures/stacks': './src/data-structures/stacks/exercises.test.ts',
    'data-structures/queues': './src/data-structures/queues/exercises.test.ts',
    'data-structures/trees': './src/data-structures/trees/exercises.test.ts',
    'data-structures/event-loop': './src/data-structures/event-loop/exercises.test.ts',
  };

  const testFile = testFileMap[subject];
  if (!testFile) {
    if (testResultsDiv) {
      testResultsDiv.innerHTML = 'Test file not found for selected subject.';
    }
    return;
  }

  try {
    await run({ files: [testFile] });
    if (testResultsDiv) {
      testResultsDiv.innerHTML = 'Tests executed. See Vitest UI for results.';
    }
  } catch (error: any) {
    if (testResultsDiv) {
      testResultsDiv.innerHTML = 'Failed to run tests: ' + error.message;
    }
  }
});
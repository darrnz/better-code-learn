import { runTests, TestResultType } from './src/big-O-complexity/exercises.test';

document.getElementById('runTestsButton')?.addEventListener('click', function () {
    const subjectSelector = document.getElementById('subjectSelector') as HTMLSelectElement;
    const subject = subjectSelector.value;

    if (!subject) {
        alert('Please select a subject!');
        return;
    }

    const testResultsDiv = document.getElementById('test-results');
    if (testResultsDiv) {
        testResultsDiv.innerHTML = '';  // Clear previous results
    }

    try {
        const results = runTests();
        displayResults(results);
    } catch (error) {
        if (testResultsDiv) {
            testResultsDiv.innerHTML = 'Failed to load the test file: ' + error.message;
        }
    }
});

// Function to display test results
function displayResults(results: TestResultType[]) {
    const testResultsDiv = document.getElementById('test-results');
    if (!testResultsDiv) return;
    results.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.style.color = result.passed ? 'green' : 'red';
        resultDiv.innerHTML = result.passed
            ? `✅ ${result.description}`
            : `❌ ${result.description} - ${result.error?.message}`;
        testResultsDiv?.appendChild(resultDiv);
    });
}
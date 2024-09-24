// Test runner function
import { linearSearch, binarySearch } from './exercises';

type TestResultType = {
    description: string
    passed: boolean
    error?: Error
}

export function runTests(): TestResultType[] {
    const results: TestResultType[] = [];

    function test(description: string, callback: () => void) {
        try {
            callback();
            results.push({ description, passed: true });
        } catch (error) {
            results.push({ description, passed: false, error: error as Error});
        }
    }

    function expect<T>(received: T) {
        return {
            toBe(expected: T) {
                if (received !== expected) {
                    throw new Error(`Expected ${expected} but received ${received}`);
                }
            }
        };
    }

    // Linear search tests
    test('linearSearch should return correct index for existing target', () => {
        expect(linearSearch([1, 2, 3, 4, 5], 3)).toBe(2);
        expect(linearSearch([1, 2, 3, 4, 5], 5)).toBe(4);
        expect(linearSearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    });

    // Binary search tests
    test('binarySearch should return correct index for existing target', () => {
        expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)).toBe(3);
        expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toBe(8);
        expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)).toBe(-1);
    });

    return results;
};

Please write a typescript project with unit test:

For implementing function with this interface
    merge (int[] collection_1, int[] collection_2, int[] collection_3) : int []
That returns sorted array by ascending.

given
     collection_1, collection_3 already sorted from min(0) to max
     collection_2 already sorted from max to min(0)

Please provide accessible repo of typescript project with unit test
and provide how to setup dependency and execute code and unit test

Note: Don't allow to use any sort function


**Project Structure**

    - `src/` — Contains the main TypeScript source files (`index.ts`, `merge.ts`).
    - `test/` — Contains unit tests (`merge.test.ts`).
    - `package.json` — Project metadata and scripts.
    - `tsconfig.json` — TypeScript configuration.
    - `jest.config.js` — Jest configuration for running tests.


## Running Tests

To run the tests, use the following command:

```powershell
npm test
```

Or, if you prefer:

```powershell
npm run test
```

This will execute all tests using Jest as configured in the project.


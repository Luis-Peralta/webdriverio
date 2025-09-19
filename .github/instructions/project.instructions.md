---
applyTo: '**'
---
When creating a new page class file in the `test/pages` directory, ensure that the file name ends with `Page.ts` (e.g., `HomePage.ts`, `LoginPage.ts`). This naming convention helps maintain consistency and clarity across the project.
All pages should have the following structure:
```
const selectors = {
    exampleElement: 'selector',
};
export default class PageName {
    // Constructor
    constructor() {}
    // Selectors
    public get exampleElement() { return $('selector'); }

    // Methods
    public async exampleMethod() {
        await this.exampleElement.click();
    }
}
```
Ensure that all page classes are exported as default exports to maintain consistency and ease of import throughout the project.
For tests, ensure that all test files are located in the `test/specs` directory and follow the naming convention of ending with `.test.ts` (e.g., `login.test.ts`, `home.test.ts`). This helps in easily identifying test files.
When writing test cases, ensure that each test case is wrapped in a `describe` block for better organization and readability. Each individual test should be defined using the `it` function following this structure:
```
import PageName from '../pages/PageName';
const pageName = new PageName();

describe('Testing page', () => {
  beforeEach(async () => {
    // pre-test setup
  });

  it('User should ...', async () => {
    // test steps
  });
});
```
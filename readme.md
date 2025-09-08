## WebDriverIO-Framework


A TypeScript-based end-to-end testing framework using WebdriverIO, Mocha, and Chai, designed for scalable browser automation. Includes Docker support for isolated and reproducible test runs.

### Design Patterns & Architecture

#### Page Object Model (POM)
This project uses the **Page Object Model** pattern to organize test code. Each page or feature of the application is represented by a class in `test/pages/`, encapsulating selectors and actions as methods. This:
- Promotes code reuse and maintainability
- Keeps test logic separate from UI structure
- Makes tests more readable and easier to update

Example:
```ts
// test/pages/Main.ts
class Main {
	async login() { /* ... */ }
	async openUrl() { /* ... */ }
}
```
Test specs then use these page objects to perform actions, keeping test files clean and focused on behavior.

#### WDIO Utility Wrappers
The framework provides custom wrappers in `test/utils/Wdio.ts` for common WebdriverIO actions (e.g., `waitAndClick`, `waitAndType`, `goTo`). These wrappers:
- Isolate and standardize browser interactions
- Add custom waits and error handling
- Make test and page object code concise and robust

By using these wrappers, all browser commands are kept isolated, making maintenance and debugging easier, and ensuring consistent behavior across tests.

### Features
- **WebdriverIO** with Mocha and Chai for BDD-style tests
- **TypeScript** for type safety
- **Page Object Model** for scalable test code
- **Custom WDIO wrappers** for isolated, reusable browser actions
- **Docker & Docker Compose** for containerized test execution

### Project Structure

```
├── test/
│   ├── pages/   # Page Object classes
│   ├── specs/   # Test specifications
│   └── utils/   # Utility helpers
├── wdio.conf.ts # WebdriverIO configuration
├── docker-compose.yml
├── Dockerfile
├── package.json
└── ...
```

### Scripts
- `npm run test` — Run all tests
- `npm run lint` — Lint code
- `npm run build` — Build Docker image
- `npm run docker` — Start Docker Compose (Selenium + test container)
- `npm run container` — Open a shell in the running test container

### Running Tests Locally
1. Install dependencies: `npm install`
2. Run tests: `npm test`

### Running with Docker
1. Build the Docker image:
	```sh
	npm run build
	```
2. Start services:
	```sh
	npm run docker
	```
3. Open a shell in the test container (optional):
	```sh
	npm run container
	```

See `docker_instructions.md` for more details.

---
**Author:** Luis Peralta

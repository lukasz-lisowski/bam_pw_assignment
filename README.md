# Playwright assignment

## Installation and execution instructions

### Prerequisites:

NodeJS version 18.x and upwards.

### Installing Playwright and other dependencies:

Get started by installing dependencies using npm in root folder.

```sh
npm install
```

This command will install Playwright itself and all necessary browsers.

```sh
npx playwright install
```

### Running tests:

```sh
npx playwright test
```

### Running tests in UI mode:

```sh
npx playwright test --ui
```

### Generating HTML test report:

```sh
npx playwright show-report
```

## Additional scenarios

### 1. Navigation scenario

- **Test steps:**
  - Navigate to "Locations" page
  - Find "Locations" section
  - Read `aria` attributes of the section
- **Expected result:** result matches structure and content of baseline aria snapshot
- **Spec file:** `locations.spec.ts`

### 2. Business Infrastructure scenario

- **Test steps:**
  - Navigate to "Business Infrastructure" page
  - Find "Business Infrastructure" section
  - Read `aria` attributes of the section
- **Expected result:** result matches structure and content of baseline aria snapshot
- **Spec file:** `business-infrastructure.spec.ts`

## Solution

- This project file runs tests against browser engines:
  - chromium
  - webkit
  - firefox (gecko)
- Resolution is set to 1920x1080.
- Tests run in parallel and, by default in `headless` mode.
- Source code is statically checked against standard `eslint` rules.
- Source code is formatted against configurable rules kept in `.prettierrc`.
- Elements timeout is cinfigured in `.env` file.
- Solution is build around Page Object Model to improve readability and maintanability.
- Custom types are used to improve code readability and maintainability.
- Test report is generated in HTML format.

## Folder structure

```
tests/
├── fixtures/
│   └── base.ts
├── pages/
│   ├── contact-us.page.ts
│   └── landing.page.ts
├── specs/
│   ├── contact-form.spec.ts
│   └── locations.spec.ts
└── types/
    └── types.ts
```

- `fixtures` - contains reusable fixtures for tests.
- `pages` - contains page objects.
- `specs` - contains test scenarios.
- `types` - contains custom types (in this case only data for _Contact Us_ form).

## HTML Report location

`playwright-report/index.html`

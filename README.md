# Cypress Project for Automated Testing

This project is set up to run automated tests using Cypress with TypeScript, including features like Mochawesome for test reporting. The project follows the Page Object Model (POM) and uses custom assertions for test validation.

## Prerequisites

Before running the tests, make sure you have the following installed:

- **Node.js** (version 14.x or later)
- **npm** (Node Package Manager)
- **Cypress**

## Installation

Follow these steps to set up the project:

1. **Clone the repository**:

```bash
git https://github.com/gabycavalli/prediktive.git
cd your-repository-folder
```

2. **Install dependencies**:

```bash
npm install
```

This will install all the required packages, including Cypress, TypeScript, and Mochawesome for test reporting.

## Running the Tests

The tests can be run in both **UI mode** and **CLI mode**.

### Running Tests in UI Mode

To run the tests using the Cypress UI, use the following command:

```bash
npx cypress open
```

This will launch Cypress in interactive mode where you can select and run tests from the Cypress UI.

### Running Tests in Headless Mode (CLI)

To run the tests in headless mode via the terminal, use the following command:

```bash
npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports,overwrite=false
```

This command will run the tests in headless mode and generate Mochawesome reports in the `cypress/reports` folder.

### Generating and Merging Mochawesome Reports

After running the tests, you can merge the Mochawesome JSON reports and generate an HTML report using the following script:

1. **For UI mode**:

   - Run tests via the Cypress UI and manually generate reports.

2. **For CLI mode**:
   - Run the following script to automatically merge test reports and generate an HTML report.

```bash
./run_cli_test.sh
```

This will clean the `cypress/reports` folder, run the tests, merge the results, and generate a Mochawesome HTML report.

## Folder Structure

- **cypress/e2e/**: Contains all the test cases for your application.
- **cypress/pages/**: Contains Page Object Model (POM) files for easier test maintenance.
- **cypress/reports/**: Stores the generated test reports.
- **tsconfig.json**: TypeScript configuration file.
- **cypress.config.ts**: Cypress configuration file.
- **run_cli_test.sh**: Shell script to run tests and generate reports.

## Custom Commands and Assertions

The project utilizes custom Cypress commands and assertions to simplify test writing. For example:

- **Custom assertions**:
  ```javascript
  cy.get(".some-element").should("have.length.greaterThan", 10);
  ```

## Troubleshooting

1. **Missing node:test module**:
   If you encounter issues related to the `node:test` module, ensure that you have the correct dependencies installed and that the `node:test` module is removed from your project.

2. **Report merging issues**:
   If the reports are not merging properly, check the contents of the `cypress/reports` directory and ensure the `output.json` file is valid and not empty.

#!/bin/bash

# Report directory
REPORT_DIR="cypress/reports"

# If the report directory exists, remove it
if [ -d "$REPORT_DIR" ]; then
    echo "Removing existing report directory..."
    rm -rf "$REPORT_DIR"
fi

# Create the report directory
mkdir -p "$REPORT_DIR"

# Run Cypress tests in headless mode
echo "Running Cypress Tests in Headless Mode..."
npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports,overwrite=false

# Merge Cypress test reports
    echo "Merging Cypress test reports..."
    npx mochawesome-merge cypress/reports/*.json > cypress/reports/output.json

# Generate the HTML report
    echo "Generating the HTML report..."
    npx mochawesome-report-generator cypress/reports/output.json

    echo "Tests completed. You can find the HTML report at cypress/reports."
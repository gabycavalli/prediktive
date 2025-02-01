#!/bin/bash

# Ruta de la carpeta de reportes
REPORT_DIR="cypress/reports"

# Verificar si la carpeta de reportes ya existe y borrarla
if [ -d "$REPORT_DIR" ]; then
    echo "Removing existing report directory..."
    rm -rf "$REPORT_DIR"
fi

# Crear la carpeta de reportes (si no existe)
mkdir -p "$REPORT_DIR"

# Ejecutar Cypress en modo headless (consola)
echo "Running Cypress Tests in Headless Mode..."
npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports,overwrite=false

# Fusionar los reportes generados
    echo "Merging Cypress test reports..."
    npx mochawesome-merge cypress/reports/*.json > cypress/reports/output.json

# Generar el reporte HTML
    echo "Generating the HTML report..."
    npx mochawesome-report-generator cypress/reports/output.json

    echo "Tests completed. You can find the HTML report at cypress/reports."
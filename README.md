# NSW Playwright Automation Assessment

This repository contains automated tests implemented using Playwright (TypeScript) for:

- Task 2 – UI automation of the Service NSW Motor Vehicle Stamp Duty calculator
- Task 3 – API automation of OpenLibrary author endpoint
- Task 4 – CI/CD pipeline using GitHub Actions with HTML reporting

---

## Tech Stack

- Playwright Test
- TypeScript
- GitHub Actions
- dotenv (for local environment variables)

---

## Project Structure

pages/
stampDuty.page.ts

tests/
task2-stamp-duty.spec.ts

task3-openlibrary-api.spec.ts

.github/workflows/
playwright.yml


---

## Setup (Local)

### 1️⃣ Install dependencies

npm install

### 2️⃣ Create a `.env` file

BASE_URL=https://www.service.nsw.gov.au


### 3️⃣ Install Playwright browsers

npx playwright install


### 4️⃣ Run tests

Headed (local debugging):

npx playwright test --headed


---

## Running Specific Suites

UI only:

npm run test:ui


API only:

npm run test:api


---

## Reporting

After execution:

npx playwright show-report


The HTML report includes:
- Screenshots on failure
- Video recordings on failure
- Trace files for retried failed tests

---

## CI/CD

The GitHub Actions pipeline:

- Runs on push to `main`
- On pull requests
- Manually via workflow dispatch
- Uses Node 20
- Installs Playwright browsers
- Executes UI and API tests
- Uploads Playwright HTML report as an artifact

In CI:
- `BASE_URL` is injected via workflow
- Headless mode is enabled automatically

---

## Notes

- UI tests validate navigation, form interaction, and modal results.
- API tests validate JSON response structure and content.
- Environment configuration is managed locally via `.env` and in CI via workflow variables.



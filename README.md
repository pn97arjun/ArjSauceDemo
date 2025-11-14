Scenario1: Login test using stand user and Locked out user
Description: Validates user is able to login or user is locked out with screenshot
commamd to run: npx playwright test --grep "Loginvalidation"
Sceanrio 2: Place order using stand user and glitch user
Description: Validates both standard and glitch user is able to place order
commamd to run: npx playwright test --grep "placeorder"
Sceanrio 3: Validate api using playwright
Description: API is supported in playwright and manifest.json, url status is validated
commamd to run: npx playwright test --grep "apitest"

Note: To run all test cases use command npx playwright test --grep "smoke"   or npx playwright test  in Terminal
To encrypt password run encrypto.js file in the utility folder

Key feature in framework:
1. Page object Model
2. Used API for validation
3. Used encryption for password
4. Used csv for test data
5. Used dotenv to store environment variables
6. No hardcoding of test data in the framework
7. Locator strategy by xpath, css and getByTestId(inbuilt playwright)
8. Tag based execution is used by using grep command
9. Expect used for assertion

Commands to install dependencies:
npx playwright install --with-deps
npm install dotenv
npm i csv-parse
npm install crypto-js
npm i --save-dev @types/crypto-js

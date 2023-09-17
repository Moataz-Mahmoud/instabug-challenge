# What's in this repo?
This repo contains the results of the technical task. The automated tests (both the frontend and backend) are added to the folder called `automated tests`. And the manual tests plus the bugs are added to the markdown file called `test_cases.md`  

# Automated Tests

Both of the automated tasks the frontend and backend are being automated in the same project using the same automation framework which is **Cypress**. I could automate them separately, but I just put them in the same project to make it easier for the reviewer to set up and run. Just set it up once and you will be able to run both.
In the automated tests directory, here is the file structure:

- `Cypress` folder which contains the test specs. Two test specs are inside the `e2e` folder. 
- Two configuration files; one for the API tests `best_buy.config.js` and another for the UI ones `facebook.config.js`
- `package.json` file which contains all the global configurations and dependencies needed.

### How to install and run

To install the project, all you need is to just open a terminal, navigate to the root of the project, and type `npm install`. This will install the test framework `Cypress` for you. And I kept the installation minimal to cut it short for you. No linting, no more add-ons to make it straightforward.

Once the dependencies are set up (you have the `node_module` directory generated) you need to choose which spec file you want to run:

- If you want to run the `facebook.cy.js` spec, you just run its script by typing `npm run facebook-test`. This will open the `Cypress` runner for you. Click on **E2E Testing** box and it will load all the available specs. Just click on the `facebook.cy.js` spec and it will run interactively.
- If you want to run the `best_buy.cy.js` spec, just run the script by typing `npm run best-buy-test`. 
**NOTE:** Make sure that the [`api-playground`](https://github.com/%20bestbuy/api-playground/) project is running on the `localhost` to make sure that the tests are passing.

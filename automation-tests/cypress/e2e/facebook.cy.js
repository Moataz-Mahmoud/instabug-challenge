describe('facebook login and registration', () => {
  const env = Cypress.env();

  beforeEach(() => {
    cy.visit('/');
  });

  it('check that user can register a new account', () => {
    cy.get('[data-testid="open-registration-form-button"]').click(); // start registration

    // filling in the personal info
    cy.get('input[name="firstname"]').type(env.profile.first_name);
    cy.get('input[name="lastname"]').type(env.profile.last_name);
    cy.get('input[name="reg_email__"]').type(env.profile.email);
    cy.get('input[name="reg_email_confirmation__"]').type(env.profile.email);
    cy.get('#password_step_input').type(env.profile.password);  
    cy.get('#day').select(env.profile.birth_date.day);
    cy.get('#month').select(env.profile.birth_date.month);
    cy.get('#year').select(env.profile.birth_date.year);
    cy.contains(`${env.profile.gender}`).click();

    cy.get('button').contains('Sign Up').click();

    // wait the next screen to load implicitely
    cy.get('#recovery_code_entry');

    /// using a Facebook test account, the below assertion should pass.
    /// if you want to pass this assertion, change the value of the login parameters
    /// in the facebook.config.js file.
    cy.url().then((url) => {
      expect(url).to.contain('/recover/code')
    })
  })

  it('check that user can login with the new created account', () => {
    
    // no logout is needed here because the registration process is not complete

    cy.get('[data-testid="royal_email"]').type(env.profile.email);
    cy.get('#passContainer').type(env.profile.password);
    cy.get('[data-testid="royal_login_button"]').click();

    // using a Facebook test account, the below assertion should pass.
    // the test cass will be marked as green if you removed the below assertion.
    cy.url().then((url) => {
      expect(url).to.eq('https://www.facebook.com');
    })
  })
})
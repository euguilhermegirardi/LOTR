describe('App', () => {
  it('should allow a typical user flow', () => {
    // arrange
    cy.visit('http://localhost:3000')

    // act
    cy.findByRole('textbox', {ariaLabel: /username/i}).type('gui')
    cy.findByLabelText(/password/i).type('xxx')
    cy.findByRole('button', {name: /submit-btn/i}).click()
    
    // assert
    cy.findByRole('navigation').within(() => {
      cy.findByRole('link', {name: /link/i}).click()
    })
    
    cy.url().should('include', '/books')
    cy.get('div', {ariaLabel: /books__buttons-container/i}, {timeout: 15000})
    cy.get('button', {ariaLabel: /books__button/i}, {timeout: 15000})

    cy.findByRole('button', {name: /the two towers/i}).click()
    cy.findByRole('button', {name: /return/i}).click()

    cy.wait(2000)

    cy.findByRole('button', {name: /logout/i}).click()
    cy.debug()
  })
})

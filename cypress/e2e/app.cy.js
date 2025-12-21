describe('Chat page', () => {
  it('allows the user to type and submit a message', () => {
    // Visit the page that renders <Chat />
    cy.visit('http://localhost:3000/')

    // Find the input
    cy.get('input[placeholder="Say something..."]')
      .should('exist')
      .type('Hello AI')

    // Submit the form (press Enter)
    cy.get('input[placeholder="Say something..."]').type('{enter}')

    // Input should be cleared after submit
    cy.get('input[placeholder="Say something..."]').should('have.value', '')
  })
})

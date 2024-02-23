Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
    cy.get('select')
});

Cypress.Commands.add('selecionarProduto' , (Men) => {
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .select-category > .SumoSelect > .CaptionCont > span').type(Men)
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()

});
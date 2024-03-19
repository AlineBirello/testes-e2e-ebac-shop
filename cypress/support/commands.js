Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('selecProduto', (tamanho, cor, quantidade) => {
    cy.get('.post-3111 > .product-block')
    .contains('Aero Daily Fitness Tee')
    .click()
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.plus').click(quantidade)
    cy.get('.single_add_to_cart_button').click()       
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
})

Cypress.Commands.add('selecCadastro', (nome,sobrenome,País,Endereço,Cidade,Estado,CEP,Telefone,Email) => {
    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').type(sobrenome)
    cy.get('#select2-billing_country-container').should('have.text', País)
    cy.get('#billing_address_1').clear().type(Endereço)
    cy.get('#billing_city').clear().type(Cidade)    
    cy.get('#select2-billing_state-container').should('have.text', Estado)    
    cy.get('#billing_postcode').clear().type(CEP)
    cy.get('#billing_phone').clear().type(Telefone)
    cy.get('#billing_email').clear().type(Email)
    cy.get('#terms').click()
    cy.get('#place_order').click()

});
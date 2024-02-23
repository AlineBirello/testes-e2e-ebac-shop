///// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')

    })

    it('Quero acessar a Loja EBAC', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Bigas testes maneiros (não é Bigas testes maneiros? Sair)')
        
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
        cy.get('.products > .row')
            //.first()
            //.last()
            //.eq(2)
            .contains('Augusta Pullover Jacket')
            .click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(4)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', ' 4 × “Augusta Pullover Jacket” foram adicionados no seu carrinho.')
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('.woocommerce-info').should('contain', 'Você tem um cupom de desconto?')
        cy.get('#billing_first_name').clear().type('Aline')
        cy.get('#billing_last_name').clear().type('teste')
        cy.get('#select2-billing_country-container').should('have.text', 'Brasil')
        cy.get('#billing_address_1').clear().type('RUA')
        cy.get('#billing_city').clear().type('Osasco')    
        cy.get('#select2-billing_state-container').should('have.text', 'São Paulo')    
        cy.get('#billing_postcode').clear().type('06112040')
        cy.get('#billing_phone').clear().type('945474845')
        cy.get('#billing_email').clear().type('aluno.teste@ebac.com.br')
        cy.get('#terms').click()
        cy.get('#place_order').click()

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
     
    });
});
/// <reference types="cypress" />

import produtosPage from "../support/page_objects/produtos.page";
context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
        cy.visit('produtos')
                    
    })

    it('Quero fazer pedido', () => {
        cy.get('.post-3111 > .product-block').should('contain', 'Aero Daily Fitness Tee')
        cy.selecProduto('S', 'Black', 2)
        cy.get('.woocommerce-info').should('contain', 'Você tem um cupom de desconto?')
        cy.selecCadastro('Aluno','Ebac','Brasil','Rua','Osasco','Mato Grosso do Sul', '06112040', '11947587485','aluno_ebac@teste.com')
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
     
    });
});
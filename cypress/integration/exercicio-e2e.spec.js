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
        produtosPage.buscarProduto
                
    })

    it('Quero fazer pedido', () => {
        produtosPage.buscarProdutoLista('Josie Yoga Jacket')
        produtosPage.addProdutoCarrinho('S','Black', '2')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', ' 2 × “Augusta Pullover Jacket” foram adicionados no seu carrinho.')
        cy.get('.woocommerce-info').should('contain', 'Você tem um cupom de desconto?')

        cy.selecCadastro('Aluno','Ebac','Brasil','Rua','Osasco','São Paulo', '06112040', '11947587485','aluno_ebac@teste.com')
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
     
    });
});
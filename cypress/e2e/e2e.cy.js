/// <reference types="cypress" />



context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        //Adicionar Produto

        cy.adicionarProduto('Atlas Fitness Tank')
        cy.adicionarProduto2('Ajax Full-Zip Sweatshirt')
        cy.adicionarProduto3('Arcadio Gym Short')
        cy.adicionarProduto4('Atomic Endurance Running Tee (Crew-Neck)')


        //checkout

        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('#billing_first_name').type('Mauricio')
        cy.get('#billing_last_name_field > label').type('Figueiredo')
        cy.get('#billing_company').type('TESTES')
        cy.get('#billing_country_field > label').click()     
        cy.get('#billing_address_1').type('Teste endereço')
        cy.get('#billing_city').type('Martinópolis')
        cy.get('#billing_postcode').type('19500-000')
        cy.get('#billing_phone').type('(18)99752-3382')
        cy.get('#billing_email').type('mauricio@teste.com.br')
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado.Seu pedido foi recebido')
       







    });


})
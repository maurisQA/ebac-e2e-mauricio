/// <reference types="cypress" />

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});


Cypress.Commands.add('adicionarProduto', (produto) => {

    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.contains(produto).click()
    cy.get('.button-variable-item-XS').click()
    cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
    cy.get('.single_add_to_cart_button').click()

})

Cypress.Commands.add('adicionarProduto2', (produto) => {

    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.contains(produto).click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.single_add_to_cart_button').click()


})

Cypress.Commands.add('adicionarProduto3', (produto) => {

    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.contains(produto).click()
    cy.get('.button-variable-item-32').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('adicionarProduto4', (produto) => {

    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(2) > .page-numbers').click()
    cy.contains(produto).click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Black').click()
    cy.get('.single_add_to_cart_button').click()
})

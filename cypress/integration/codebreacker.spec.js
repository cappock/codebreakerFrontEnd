describe('My first e2e testing', function(){

    it('prueba entera', function(){
        cy.visit('http://localhost:3000/')
        cy.get('input')
            .type('1234')
            .should('have.value', '1234')
        cy.get('#setsecret')
            .click()
        cy.contains('ok, let the game begins')

        cy.get('input')
            .clear()
            .type('1234')
            .should('have.value', '1234')
        cy.get('#guess')
            .click()
        cy.contains('XXXX')
    })


})
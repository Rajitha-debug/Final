/// <reference types='cypress'/>

describe('Window',function(){

it('Window',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    //cy.get('.mouse-hover').contains('Top').click({force:true})
    cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
   // cy.url().should('contain.text','top')
    //equ(url).to.includes('top')
})

})
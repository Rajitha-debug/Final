/// <reference types='cypress'/>
describe ('basics',function()
{
 
    it('First Basics Test',()=>
    {
 
        cy.visit(Cypress.env('url')+"/AutomationPractice/");
    cy.get('#opentab').invoke('removeAttr','target').click()
    cy.origin('https://www.qaclickacademy.com/',function()
{

    cy.contains('Home')
})
   
    

    })

    

})
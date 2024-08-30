/// <reference types='cypress'/>
describe ('basics',function()
{
 
    it('First Basics Test',()=>
    {
 
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#opentab').invoke('removeAttr','fdprocessedid').click()
    cy.get("#opentab").then(function(e)
{
     const url=e.prop('href')
     cy.visit(url)
     cy.origin(url,function(){

        cy.contains('Home')

     })
})
    

    })

})

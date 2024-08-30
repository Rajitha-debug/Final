/// <reference types='cypress'/>
/// <reference types='cypress-iframe'/>


import 'cypress-iframe';
describe ('basics',function()
{
 
    it('First Basics Test',()=>
    {
 
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded('#courses-iframe')
        cy.iframe().contains('Mentorship').click()
    

    })

})





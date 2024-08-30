/// <reference types='cypress'/>
//import HomePage from '../Practice/HomePage';


describe('Test data ',function()
{
    
    

    before(function () {
        // runs once before all tests in the block
        cy.fixture('example').then(function (data) {
          this.data = data
        })
      })

it('data',function()
{
   
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("[id='name']").type(this.data.name)

   



})
})
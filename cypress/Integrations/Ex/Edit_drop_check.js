/// <reference types='cypress'/>
describe ('basics',function()
{


    before(function () {
        // runs once before all tests in the block
        cy.fixture('example').then(function (data) {
          this.data = data
        })
      })
 
    it('First Basics Test',function()
    {


 
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // Page Title
    cy.title().should('contain','Practice Page');
    //Radio buttons
    //cy.get("[value='radio2']").check().should('be.selected');
    //check box checking and assertions
    cy.get("[type='checkbox']").check().should('be.checked');
    //Edit box
   // cy.get("#name").type(this.data.name)

    //Static dropdown

    cy.get('#dropdown-class-example').select('option1')

    // Dynamic drop down

    cy.get("#autocomplete").type("ca")
    cy.get(".ui-menu-item").each(function($el,Index,list){

      const Name=$el.text()

      if(Name.includes('Canada')){

        cy.wrap($el).click()
      }

    })

    

    })

})

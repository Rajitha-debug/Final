/// <reference types='cypress'/>
describe ('basics',function()
{
 
    it('First Basics Test',()=>
    {
 
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca')
    cy.get('.product').each(($el,Index,list)=>{

        const Name= $el.text()
        if (Name.includes('Cauliflower')){

            cy.wrap($el).contains('ADD TO CART').click()
        }
    })
})
})

   



          

    
    

    



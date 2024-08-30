/// <reference types='cypress'/>
describe ('basics',function()
{
 
    it('First Basics Test',()=>
    {
 
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('tr td:nth-child(2)').each(($el,Index,list) =>{

          const course= $el.text()

          if(course=== 'Learn JMETER from Scratch - (Performance + Load) Testing Tool'){

            cy.wrap($el).next().then(function(price){

                const cost = price.text()
                cy.log(cost)



            })



          }

    })
    

    })

})

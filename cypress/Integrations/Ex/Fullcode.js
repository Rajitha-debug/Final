/// <reference types='cypress'/>

import Check from "../Page object design Pattern/Check";
import form from "../Page object design Pattern/Check";

describe ('Full',function()
{
    before(function(){

        cy.fixture('example').then(function(data){
            this.data= data
        })
    })

    
    it('Full', function()
    {
        const check=new Check()
 
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    check.getname().type(this.data.name)
    

    })

})

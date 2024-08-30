    
  const Exceljs= require('exceljs')
    const workbook= new Exceljs.workbook()
    workbook.xlsx.readfile("Filepath")

    const sheet= workbook.getworksheet('sheet1')

    sheet.roweach((row,rowNumber),function(){
   let replacetext = "Cherry"
      let output= {row:-1,col:-1}
       row. coleach({cell,cellNumber},function(){

           if( cell.value = 'Apple'){
            
           output.row=rowNumber
           output.col=cellNumber

             cy.log(rowNumber);
             cy.log(cellNumber)
           }


        })

        workbook.xlsx.writeFile("Filepath")
        cell.value(output.row,output.col)= replacetext



    })


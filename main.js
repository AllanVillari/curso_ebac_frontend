$(document).ready(function(){


    $('form').on('submit',function(e){
        e.preventDefault();

        const inserirTarefa = $('#insertTask').val();

        $(`<li>${inserirTarefa}</li>`).appendTo('ul');
       
        $('#insertTask').val('')


        $('li').click(function(){

            $( this ).css("text-decoration", "line-through");
            
    
            })
     
      })

     
   
     







  })






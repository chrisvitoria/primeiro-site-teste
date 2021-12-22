$ ("#button") .on ( "click",function() {
    var  numCep  =  $ ( "#cep" ) . val ();
    var  url  =  "https://viacep.com.br/ws/" + numCep + "/ json";

    $.ajax({
        url: url ,
        digite: "get" ,
        dataType: "json" ,

        sucesso:function(dados){
            console.log(dados);
            $("#cidade").val(dados.localidade);
            $("#bizzona").val(dados.bairro);
        }
    })


})
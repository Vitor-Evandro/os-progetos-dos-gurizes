
// função que será executada quando o botão for clicado

function adicionandoGiria(){
    // pegando o valor inserido o input

    giria = document.getElementById("giriasInput").value
    // selecionado a div aonde os resultados (girias) serão exibidas

    resultadoDiv = document.getElementById("resultado")
    if(giria){
        //criando um novo elemento <p> quecontará a giria adicionada
        novaGiria = document.createElement("p")

        //definindo o coneúdode texto do <p>
        novaGiria.textContent =`Giria adicionada: ${giria}`

        //adicionando o <p> dentro do div de resultados
        resultadoDiv.appendChild(novaGiria)

        //linpando o camp de texto,após a giria ser adicionada 
        document.getElementById("giriasInput").value = ''


     }else{
        //alertando o usuário caso o campo esteja vazio
        alert("bota a gíria ae seu leguelhé!")
     }
}
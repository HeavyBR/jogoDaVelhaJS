var player = 'x';
var numberOfMoves = 0;
function makeMove(id) {
    let src = checkSource(id);
    numberOfMoves++;
    if(src === "blank.png")
    {
        document.getElementById(id).src = "images/" + player + ".png";
        console.log("Trocando imagem para: " + player + ".png");
        if(checkStatus())
        {
            alert("O jogador " + player + " venceu a partida!");
            location.reload(); // Reinicia a página
        }
        if(player === 'x')
            player = 'o';
        else
            player = 'x';
        document.getElementById("vez").innerText = player;
    }
    else
    {
        console.log("Célula já foi preenchida por algum jogador, portanto não será efetuada a troca de imagem");
    }
    if (numberOfMoves >= 9)
    {
        alert("A partida terminou empatada!");
        location.reload();
    }
}

function checkSource(id)
{
    /* Irá retornar os últimos 9 caracteres da string do path da imagem */
    /* Se o local estiver livre a função irá retornar blank.png         */

    let src = document.getElementById(id);
    src = src.getAttribute("src");
    console.log("A imagem que está contida na celula clicada é: " + src.substring(src.length - 9, src.length));
    return src.substring(src.length - 9, src.length);
}

function checkStatus()
{
    //Linha 0 horizontal
    if((checkSource('00') == checkSource('01')) && (checkSource('01') ==
        checkSource('02')) && (checkSource('00') != 'blank.png')){
        return true;
    }
    //Linha 1 horizontal
    if((checkSource('10') == checkSource('11')) && (checkSource('11') ==
        checkSource('12')) && (checkSource('10') != 'blank.png')){
        return true;
    }
    //Linha 2 horizontal
    if((checkSource('20') == checkSource('21')) && (checkSource('21') ==
        checkSource('22')) && (checkSource('20') != 'blank.png')){
        return true;
    }
    //Linha 0 vertical
    if((checkSource('00') == checkSource('10')) && (checkSource('10') ==
        checkSource('20')) && (checkSource('00') != 'blank.png')){
        return true;
    }
    //Linha 1 vertical
    if((checkSource('01') == checkSource('11')) && (checkSource('11') ==
        checkSource('21')) && (checkSource('01') != 'blank.png')){
        return true;
    }
    //Linha 2 vertical
    if((checkSource('02') == checkSource('12')) && (checkSource('12') ==
        checkSource('22')) && (checkSource('02') != 'blank.png')){
        return true;
    }
    //Diagonal esquerda pra direita
    if((checkSource('00') == checkSource('11')) && (checkSource('11') ==
        checkSource('22')) && (checkSource('00') != 'blank.png')){
        return true;
    }
    //Diagonal direita pra esquerda
    if((checkSource('02') == checkSource('11')) && (checkSource('11') ==
        checkSource('20')) && (checkSource('02') != 'blank.png')){
        return true;
    }
    return false; // Se nenhum jogador atingiu condição de vitória, retorna falso.

}
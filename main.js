var listaFilmes = ["https://img.elo7.com.br/product/zoom/1E0EB9C/poster-cartaz-o-poderoso-chefao-chefao.jpg", "https://br.web.img3.acsta.net/pictures/16/10/06/23/05/054278.jpg", "https://waltermattos.com/site2/wp-content/uploads/2014/11/tut_Analise_Grafica_Cartaz_Interstellar_05_011.png", "https://br.web.img3.acsta.net/medias/nmedia/18/87/02/76/19871246.jpg", "https://i.pinimg.com/474x/b4/25/97/b4259768165c3d8d8365d9c495b507e2.jpg"];

var listaNomeFilmes = ["O Poderoso Chefão", "A Chegada", "Interestelar", "Cidade de Deus", "Sussurros do Coração"]

function verificaLink() {
    for (i = 0; i < listaFilmes.length; i++) {
        if (listaFilmes[i].endsWith(".jpg") == false) {
            alert(`Você colocou o formato errado de link no seu ${i + 1}° filme.\nPor favor, insira a url correta no formato válido de imagem (.jpg).`);
        }
    }
}

document.write("<div id='container-todos-filmes'>")

for (i = 0; i < listaFilmes.length; i++) {
    document.write(`<div id='container-filme-${i + 1}' class='container-filme'>`)
    document.write(`<img src =${listaFilmes[i]}>`);
    document.write(`<p class='nomes-filmes'>${listaNomeFilmes[i]}</p>`);
    document.write("</div>");
}
document.write("</div>")

var i = 6;

function inserirFilme() {
    var nomeFilme = document.getElementById("nome-filme").value;
    var imagemFilme = document.getElementById("imagem-filme").value;

    for (j = 0; j < listaFilmes.length; j++) {
        if (nomeFilme == listaNomeFilmes[j]) {
            alert("Filme repetido!")
        }
    }
    
    listaNomeFilmes.push(nomeFilme);
    
    var containerTodosFilmes = document.getElementById("container-todos-filmes");
    
    containerTodosFilmes.innerHTML = containerTodosFilmes.innerHTML + `<div id='container-filme-${i}' class='container-filme'></div>`;
    
    var containerFilme = document.getElementById(`container-filme-${i}`);
    
    containerFilme.innerHTML = `<img src=${imagemFilme}>`;
    containerFilme.innerHTML = containerFilme.innerHTML + `<p class="nomes-filmes">${nomeFilme}</p>`;
    
    document.getElementById("nome-filme").value = "";
    document.getElementById("imagem-filme").value = "";
    
    i++;
    
    console.log(listaNomeFilmes);
}
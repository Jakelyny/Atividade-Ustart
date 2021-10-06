var listaFilmes = [
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/95/62/20122008.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/72/73/89/20535463.jpg",
    "https://br.web.img3.acsta.net/c_310_420/pictures/16/10/05/19/59/363613.jpg",
    "https://br.web.img3.acsta.net/c_310_420/pictures/14/10/31/20/39/476171.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/08/82/20128877.JPG",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/32/20224832.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/31/05/20139182.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/05/56/20369174.jpg",
    "https://br.web.img2.acsta.net/c_310_420/pictures/14/06/03/21/11/122582.jpg",
    "https://br.web.img3.acsta.net/c_310_420/pictures/210/544/21054460_2013103118041242.jpg",
    "https://br.web.img3.acsta.net/c_310_420/pictures/15/03/26/21/14/132057.jpg",
    "https://br.web.img3.acsta.net/c_310_420/pictures/210/506/21050637_20131017235623573.jpg"
    
];

for (let filme = 0; filme < listaFilmes.length; filme++) {

    document.write('<a href="https://www.youtube.com/watch?v=xm3YgoEiEDc"><img class="filmes" src=' + listaFilmes[filme] + "></a>");
}
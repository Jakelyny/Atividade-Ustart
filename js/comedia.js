var listaFilmes = [
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27139996.jpeg%27&ImageUrl=%27139996.jpeg%27&EntityType=%27Item%27&EntityId=%273517%27&device=web_browser&subscriptions=Anonymous&Width=540&Height=800",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27189090.jpeg%27&ImageUrl=%27189090.jpeg%27&EntityType=%27Item%27&EntityId=%2713256%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27151034.jpeg%27&ImageUrl=%27151034.jpeg%27&EntityType=%27Item%27&EntityId=%276654%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27232753.jpg%27&ImageUrl=%27232753.jpg%27&EntityType=%27Item%27&EntityId=%2722623%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=85&ImageId=%27177520.png%27&ImageUrl=%27177520.png%27&EntityType=%27Item%27&EntityId=%276794%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27146560.jpeg%27&ImageUrl=%27146560.jpeg%27&EntityType=%27Item%27&EntityId=%274834%27&device=web_browser&subscriptions=Anonymous&Width=540&Height=800",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27151027.jpeg%27&ImageUrl=%27151027.jpeg%27&EntityType=%27Item%27&EntityId=%276652%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27203373.jpg%27&ImageUrl=%27203373.jpg%27&EntityType=%27Item%27&EntityId=%2716906%27&device=web_browser&subscriptions=Anonymous&Width=386&Height=578",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27243352.jpg%27&ImageUrl=%27243352.jpg%27&EntityType=%27Item%27&EntityId=%2724663%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27227752.jpg%27&ImageUrl=%27227752.jpg%27&EntityType=%27Item%27&EntityId=%276980%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27222436.jpg%27&ImageUrl=%27222436.jpg%27&EntityType=%27Item%27&EntityId=%276074%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27237097.jpg%27&ImageUrl=%27237097.jpg%27&EntityType=%27Item%27&EntityId=%2723371%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540"
];

for (let filme = 0; filme < listaFilmes.length; filme++) {

    document.write('<a href="https://www.youtube.com/watch?v=xm3YgoEiEDc"><img class="filmes" src=' + listaFilmes[filme] + "></a>");
}
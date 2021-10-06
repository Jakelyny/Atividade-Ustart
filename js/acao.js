var listaFilmes = [
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27155377.jpeg%27&ImageUrl=%27155377.jpeg%27&EntityType=%27Item%27&EntityId=%277352%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27182135.jpeg%27&ImageUrl=%27182135.jpeg%27&EntityType=%27Item%27&EntityId=%2711925%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27202723.jpg%27&ImageUrl=%27202723.jpg%27&EntityType=%27Item%27&EntityId=%2716869%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27206272.jpg%27&ImageUrl=%27206272.jpg%27&EntityType=%27Item%27&EntityId=%274457%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27208247.jpg%27&ImageUrl=%27208247.jpg%27&EntityType=%27Item%27&EntityId=%2717589%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27219612.jpg%27&ImageUrl=%27219612.jpg%27&EntityType=%27Item%27&EntityId=%2719812%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=85&ImageId=%27216170.png%27&ImageUrl=%27216170.png%27&EntityType=%27Item%27&EntityId=%277841%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27188265.jpeg%27&ImageUrl=%27188265.jpeg%27&EntityType=%27Item%27&EntityId=%2713218%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27185958.jpeg%27&ImageUrl=%27185958.jpeg%27&EntityType=%27Item%27&EntityId=%2712801%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27158552.jpeg%27&ImageUrl=%27158552.jpeg%27&EntityType=%27Item%27&EntityId=%277843%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27155776.jpeg%27&ImageUrl=%27155776.jpeg%27&EntityType=%27Item%27&EntityId=%277416%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
    "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27189462.jpeg%27&ImageUrl=%27189462.jpeg%27&EntityType=%27Item%27&EntityId=%2713026%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540"
];

for (let filme = 0; filme < listaFilmes.length; filme++) {

    document.write('<a href="https://www.youtube.com/watch?v=xm3YgoEiEDc"><img class="filmes" src=' + listaFilmes[filme] + "></a>");
}
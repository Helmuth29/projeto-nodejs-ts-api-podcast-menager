# Podcast Menager

### Descrição
Um app ao estilo Netflix, onde possa centralizar diferetentes episodios podcast separados por categoria

### Dominio 
Podcasts feitos em video

### Features
- Listar os podcasts em sessões de categorias
  - [ saúde, bodybuilder, mentalidade, humor]
- Filtrar episodios por nome de podcast

## Como

### Feature:
 Listar os podcasts em sessões de categorias

### Como vou implementar:

GET: retorna lista de episidios:


response:

```js
{
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoId:"pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30&pp=ygUQZmxvd3BvZGNhc3QgQ0JVTQ%3D%3D",
    category: ["saúde", "bodybuilder", "esporte"]
},
{
    podcastName: "flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I"
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    category: ["esporte", "corrida"]
},

```


GET: retorna lista de episidios: retorna lista de episidios baseado em uma paremetro enviado a um cliente.
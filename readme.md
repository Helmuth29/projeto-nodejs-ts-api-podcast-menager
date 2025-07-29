# 🎙️ Podcast Manager

Um aplicativo ao estilo **Netflix**, focado em podcasts em vídeo, que permite centralizar, organizar e visualizar episódios por **categorias**.

## 📌 Descrição

O Podcast Manager tem como objetivo fornecer uma plataforma que agrupe episódios de podcasts de diferentes fontes, organizando-os de forma intuitiva por categorias como saúde, bodybuilder, mentalidade e humor.

## 🌐 Domínio

Plataforma especializada em **podcasts em vídeo**.

## 🚀 Funcionalidades

- ✅ Listar episódios por sessões de **categorias**
  - Ex: saúde, bodybuilder, mentalidade, humor
- 🔍 Filtro de episódios por **nome do podcast**
- 🖼️ Exibição de capas, links e informações do vídeo

---

## 🔧 Como Funciona

### 📂 Listagem de episódios

- **Endpoint:** `GET /podcasts`
- **Descrição:** Retorna a lista de episódios com informações como nome do podcast, episódio, ID do vídeo, capa, link e categorias.

#### Exemplo de resposta:

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30&pp=ygUQZmxvd3BvZGNhc3QgQ0JVTQ%3D%3D",
    "category": ["saúde", "bodybuilder", "esporte"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    "category": ["esporte", "corrida"]
  }
]

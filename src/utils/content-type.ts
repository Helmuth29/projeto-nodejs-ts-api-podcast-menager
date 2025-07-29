export enum contentType {
    // Formatos mais comuns em APIs
    JSON = "application/json",
    TEXT = "text/plain",
    HTML = "text/html",
    XML = "application/xml",

    // Formulários
    FORM_URLENCODED = "application/x-www-form-urlencoded",
    FORM_DATA = "multipart/form-data",

    // Arquivos e mídia
    OCTET_STREAM = "application/octet-stream", // binários ou downloads
    PDF = "application/pdf",
    ZIP = "application/zip",
    CSV = "text/csv",

    // Imagens
    JPEG = "image/jpeg",
    PNG = "image/png",
    GIF = "image/gif",
    WEBP = "image/webp",
    SVG = "image/svg+xml",

    // Áudio e vídeo
    MP3 = "audio/mpeg",
    MP4 = "video/mp4",
    MPEG = "video/mpeg",

    // Web (para SSE, JavaScript, etc)
    JAVASCRIPT = "application/javascript",
    NDJSON = "application/x-ndjson", // JSON stream (linha por linha)
    EVENT_STREAM = "text/event-stream" // Server-Sent Events
}
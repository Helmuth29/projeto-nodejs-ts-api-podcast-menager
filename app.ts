
import * as http from "http";


import { getFilterEpisodes, getListEpisodes } from "./src/controlllers/podcasts-controlle";
import { Routes } from "./src/routes/routes";
import { httpMethod } from "./src/utils/http-method";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
   
   const baseURL = request.url?.split("?")[0];

   
   // listar podcats
    if (request.method === httpMethod.GET && baseURL === Routes.LIST) {
       await getListEpisodes(request, response)};
     
    if(request.method === httpMethod.GET && baseURL === Routes.EPISODE) {
        await getFilterEpisodes(request, response)
    }}
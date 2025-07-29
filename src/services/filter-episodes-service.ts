
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { statusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {
 
    //defube a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }

     // buscando os dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

      //verifico se tem conteudo
     responseFormat.statusCode = data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT
    
  
      responseFormat.body = data

    return responseFormat;
}

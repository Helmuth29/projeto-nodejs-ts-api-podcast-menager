import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { statusCode } from "../utils/status-code";




export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {


    // define contrato
      let responseFormat: PodcastTransferModel = {
            statusCode: 0,
            body: [],
        }

//busco os dados
    const data = await repositoryPodcast();


    //verifico o tipo de resposta
    responseFormat = {
        statusCode: data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT,
        body:data
    }

     
 
 return responseFormat;
};

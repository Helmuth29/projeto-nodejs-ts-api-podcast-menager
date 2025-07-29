import fs from "fs"
import path from "path"
import  {PodcastModel}  from "../models/podcast-model";
import { utf8 } from "../utils/utf-8";






const pathData = path.join(__dirname, "../repositories/podcasts.json");


export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    
    const language = utf8.UTF
    
    
    const rawdata = fs.readFileSync(pathData, language)
     let jsonFile = JSON.parse(rawdata)

     if(podcastName) {
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName)
     }

      if(podcastName) {
         jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName)
      }
    
    
     return jsonFile;
}


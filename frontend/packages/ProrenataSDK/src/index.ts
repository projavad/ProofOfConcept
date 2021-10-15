import * as openapi from "openapi-typescript";
import axios, { AxiosResponse } from 'axios'

const openapiTS =  openapi.default;

const config = {
    BASE_URL : 'http://127.0.0.1:9000/',
    PATH : 'schema.json'
}




/* creating a global library sdk that could be use by app developer around the world to work with tight coupling */
export function ChooseAndSync( schemaAPI : string ,schemas : string[]) {


    axios({
        method: 'GET',
        url: `${config.BASE_URL}/${config.PATH}`,
      }).then((res: AxiosResponse) => {
        return res.data
      }).then((data: any) => {
            /* trying to generate the typescript */



      }).catch((err: any) => {
        console.log('err: ', err);
      });
    return console.log(schemaAPI);
};

export default function Create(template : string) {
    return console.log(template);
};


ChooseAndSync('Api', ['user','record','test']);
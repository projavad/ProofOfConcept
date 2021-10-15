import * as openapi from "openapi-typescript"
import axios, { AxiosResponse } from 'axios'
import * as fs from 'fs';
import * as path from 'path'

const openapiTS =  openapi.default;

const config = {
    BASE_URL : 'http://127.0.0.1:9000',
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
                console.log(data);
                const dirPath = path.resolve(__dirname, '../../commons') ;
                console.log(dirPath);
                const output = openapiTS(data).then((output:string) => {
                    
                    if (!fs.existsSync(dirPath)){
                        fs.mkdirSync(dirPath);
                    }

                    fs.writeFile(dirPath + '/models.ts', output, 'utf8', ()=>{
                        return console.log('done');
                    });
                   
                }); 
      }).catch((err: any) => {
        console.log('err: ', err);
      });
    return console.log(schemaAPI);
};

export default function Create(template : string) {
    return console.log(template);
};


ChooseAndSync('Api', ['user','record','test']);
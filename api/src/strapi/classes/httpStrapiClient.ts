import { AxiosError } from 'axios';
import Strapi, { StrapiRequestParams, StrapiResponse } from 'strapi-sdk-js';

export abstract class HttpStrapiClient {
  private strapiHttpService = new Strapi({
    url: process.env.STRAPI_URL,
  })

  protected pluralName: string;
  protected singularName: string;

  async findAll(config?: StrapiRequestParams): Promise<StrapiResponse<any>> {
    return await this.strapiHttpService
      .find(this.pluralName, config)
      .catch((error: AxiosError) => {
        console.log(error)
        throw 'An error happened!'
      })
  }

  async findOne(id: number): Promise<StrapiResponse<any>> {
    return await this.strapiHttpService
      .findOne(this.pluralName, id)
      .catch((error: AxiosError) => {
          console.log(error.response.data);
          throw 'An error happened!';
        });
  }
}

import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

export abstract class HttpStrapiClient {
  private httpService = new HttpService();

  protected pluralName: string;
  protected singularName: string;

  async findAll(config?: any) {
    const { data } = await firstValueFrom(
      this.httpService
        .get(`${process.env.STRAPI_URL}${this.pluralName}`, config)
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }

  async findOne(id: number) {
    const { data } = await firstValueFrom(
      this.httpService
        .get(`${process.env.STRAPI_URL}${this.pluralName}/${id}`)
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }
}

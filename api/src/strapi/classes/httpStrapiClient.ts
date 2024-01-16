import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

export abstract class HttpStrapiClient {
  private httpService = new HttpService();

  protected pluralName: string;
  protected singularName: string;

  async findAll() {
    const { data } = await firstValueFrom(
      this.httpService.get(`${process.env.STRAPI_URL}${this.pluralName}`).pipe(
        catchError((error: AxiosError) => {
          console.log(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}

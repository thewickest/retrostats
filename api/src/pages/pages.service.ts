import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class PagesService {
  private httpService = new HttpService();
  async findOne(slug: string) {
    const { data } = await firstValueFrom(
      this.httpService.get(`${process.env.STRAPI_URL}${slug}`).pipe(
        catchError((error: AxiosError) => {
          console.log(error);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}

import { HttpException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';
import { StrapiService } from 'src/strapi/strapi.service';
import { StrapiResponse } from 'strapi-sdk-js';
import { StrapiPlayerDto } from './dto/strapi-player.dto';

@Injectable()
export class PlayersService {
  constructor(private prismaService: PrismaService, private strapiService: StrapiService) {}
  async findOne(nfc: string) {
    try {
      const users = await this.prismaService.game_users.findFirst({
        where: {
          nfc: {
            equals: nfc,
          },
        },
      });
      return users ? users : {}
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new HttpException(
          {
            statusCode: 500,
            message: 'Some error happened while finding the user',
          },
          500,
        );
      }
    }
  }

  async findOneByEmail(email: string): Promise<StrapiResponse<StrapiPlayerDto> | {}>{
    try {
      const params = {
        filters: {
          email: {
            $eq: email
          }
        },
        populate: {
          profilePicture: true,
          badges: {
            populate: {
              image: true,
            }
          },
          featuredBadges: {
            populate: {
              image: true,
            }
          },
        }
      }
      const users = await this.strapiService.players.findAll(params)
      

      return users ? users : {}
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new HttpException(
          {
            statusCode: 500,
            message: 'Some error happened while finding the user',
          },
          500,
        );
      }
    }
  }
}

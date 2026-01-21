import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common'
import { prisma } from '@lib/db'

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  readonly client = prisma

  async onModuleInit() {
    await this.client.$connect()
  }

  async onModuleDestroy() {
    await this.client.$disconnect()
  }
}


export const prismaService = new PrismaService().client
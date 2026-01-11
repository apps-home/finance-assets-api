import { OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@lib/db'

export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      adapter: new PrismaPg(process.env.DATABASE_URL)
    })
  }

  onModuleInit() {
    this.$connect()
  }

  onModuleDestroy() {
    this.$disconnect()
  }
}

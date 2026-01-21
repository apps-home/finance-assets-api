import { Global, Module } from '@nestjs/common'
import { prismaFinanceAssets } from '@lib/db'

const FinanceAssetsProvider = { provide: 'prismaFinanceAssets', useValue: prismaFinanceAssets }

@Global()
@Module({
  providers: [FinanceAssetsProvider],
  exports: [FinanceAssetsProvider]
})
export class PrismaModule {}

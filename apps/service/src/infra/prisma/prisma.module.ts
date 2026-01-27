import { prismaFinanceAssets } from '@lib/db'
import { Global, Module } from '@nestjs/common'

const FinanceAssetsProvider = {
  provide: 'prismaFinanceAssets',
  useValue: prismaFinanceAssets
}

@Global()
@Module({
  providers: [FinanceAssetsProvider],
  exports: [FinanceAssetsProvider]
})
export class PrismaModule {}

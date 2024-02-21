import { Module } from '@nestjs/common';
import { DB } from './db';

@Module({
  providers: [DB],
  exports: [DB]
})
export class DbModule {}

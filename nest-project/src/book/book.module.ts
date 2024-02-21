import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { DbModule } from '../db/db.module'

@Module({
  controllers: [BookController],
  imports: [DbModule]
})
export class BookModule {}

import { Controller, Get, Param } from '@nestjs/common';
import type { BookDTO } from '../share/types/book.dto'
import { DB } from '../db/db'

@Controller('book')
export class BookController {
  constructor(private db: DB) {}

  @Get()
  async list(): Promise<BookDTO[]> {
    return this.db.getCollection('books').find()
  }

//  @Get(':id')
//  async show(@Param('id') id: string): Promise<BookDTO> {
//  }
}

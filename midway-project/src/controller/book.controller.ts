import { Controller, Get, Inject } from '@midwayjs/core'
import { BookDTO } from '../share/types/book.dto'
import type { DB } from '../service/db.service'

@Controller('/book')
export class BookController {
  @Inject()
  db: DB

  @Get('/')
  async list(): Promise<BookDTO[]> {
    return this.db.getCollection('books').find()
  }
}

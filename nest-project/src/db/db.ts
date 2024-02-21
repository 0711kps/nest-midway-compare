import { Injectable } from '@nestjs/common'
import * as Loki from 'lokijs'

@Injectable()
export class DB extends Loki {
  async onApplicationBootstrap(): Promise<void> {
    this.addCollection('books')
    this.getCollection('books').on('insert', input => { input.id = input.$loki })
    for (let i = 0; i < 10000; i++) {
      this.getCollection('books').insert({ title: `Book-${Math.floor(Math.random() * 99999)}`, stock: Math.floor(Math.random() * 100) + 1 })
    }
  }
}

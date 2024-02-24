import { Provide, Scope, ScopeEnum } from '@midwayjs/core'
import * as Loki from 'lokijs'

@Provide()
@Scope(ScopeEnum.Singleton)
export class DB extends Loki {}

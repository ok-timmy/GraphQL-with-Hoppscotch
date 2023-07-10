/// <reference types="@platformatic/db" />
import { EntityTypes, Note,User } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Note' | 'User'>(schemaId: T): {
      '$id': string,
      title: string,
      description: string,
      type: string,
      properties: {
        [x in keyof EntityTypes[T]]: { type: string, nullable?: boolean }
      },
      required: string[]
    };
  }
}

declare module '@platformatic/sql-mapper' {
  interface Entities {
    note: Entity<Note>,
    user: Entity<User>,
  }
}

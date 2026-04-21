import { type SchemaTypeDefinition } from 'sanity'
import { eventType } from './event'
import { galleryImageType } from './galleryImage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, galleryImageType],
}
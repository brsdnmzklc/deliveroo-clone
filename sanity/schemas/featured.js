import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured Category Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short descriptionh',
      type: 'string',
      validation: (Rule) => Rule.max(400),
    }),
    defineField({
      name: 'restaurant',
      title: 'Restaurants',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    }),
  ],
})

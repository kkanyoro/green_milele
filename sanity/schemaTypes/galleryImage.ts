import { defineField, defineType } from 'sanity'

export const galleryImageType = defineType({
    name: 'galleryImage',
    title: 'Gallery Image',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'alt',
            title: 'Alternative Text (for accessibility)',
            type: 'string',
            description: 'Briefly describe what is happening in the image.',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'relatedEvent',
            title: 'Related Event (Optional)',
            type: 'reference',
            to: [{ type: 'event' }],
            description: 'Link this photo to a specific event if applicable.',
        }),
    ],
})
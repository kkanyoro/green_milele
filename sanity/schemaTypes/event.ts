import { defineField, defineType } from 'sanity'

export const eventType = defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Event Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Event Date & Time',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'rsvpLink',
            title: 'RSVP / External Link',
            type: 'url',
            description: 'Link to Tuqo, Google Forms, etc.',
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true, // Allows directors to select the focal point of the image
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
})
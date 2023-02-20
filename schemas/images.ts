export default{
    name: 'images',
    title: 'Images',
    type: 'document',
    options:{
        hotspot:true
    },
    fields: [
        {
            name: 'image',
            title: 'image Title',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,

            },
            
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'altText',
            title: 'Alt tag text',
            type: 'string'
        },
        {
            name: 'tag',
            title: 'Tag',
            type: 'string',
        },

    ]
}

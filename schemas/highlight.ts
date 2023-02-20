export default{
    name: 'HighlightImage',
    title: 'Highlight Image',
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
            name: 'caption',
            title: 'Caption',
            type: 'string'
        },

    ]
}

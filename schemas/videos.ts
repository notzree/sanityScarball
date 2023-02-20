
export default {
    name: 'videos',
    title: 'Videos',
    type: 'document',
    
    fields: [
      {title: 'Title', name: 'title', type: 'string'},
      {
        title: 'Video file',
        name: 'video',
        type: 'mux.video',
      },
    ],
  }

import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {muxInput} from 'sanity-plugin-mux-input'
export default defineConfig({
  name: 'default',
  title: 'sanity-scarball',

  projectId: '3dupdlu3',
  dataset: 'production',

  plugins: [deskTool(), visionTool(),muxInput({mp4_support: 'standard'})],

  schema: {
    types: schemaTypes,
  },
})

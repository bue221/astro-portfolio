import contentful from 'contentful'

// Only create client if credentials are available
const spaceId = import.meta.env.CONTENTFUL_SPACE_ID
const accessToken = import.meta.env.DEV
  ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
  : import.meta.env.CONTENTFUL_DELIVERY_TOKEN

export const contentfulClient =
  spaceId && accessToken
    ? contentful.createClient({
        space: spaceId,
        accessToken: accessToken,
        host: import.meta.env.DEV
          ? 'preview.contentful.com'
          : 'cdn.contentful.com',
      })
    : null

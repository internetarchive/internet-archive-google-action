module.exports = {
  endpoints: {
    ALBUM_DETAIL: 'https://archive.org/details/{{album.id}}',
    ALBUMS_OF_CREATOR_URL: 'https://{{platformSubDomain}}.archive.org/advancedsearch.php' +
    '?q=collection:({{creatorId}})' +
    '&fl[]={{fields}}' +
    '&sort[]={{order}}' +
    '&rows={{limit}}' +
    '&page={{page}}' +
    '&output=json',
    COLLECTION_ITEMS_URL: 'https://{{platformSubDomain}}.archive.org/advancedsearch.php' +
    '?q=collection:({{id}})' +
    '&fl[]={{fields}}' +
    '&sort[]={{order}}' +
    '&rows={{limit}}' +
    '&page={{page}}' +
    '&output=json',
    COLLECTION_URL: 'https://{{platformSubDomain}}.archive.org/metadata/{{id}}',
    QUERY_COLLECTIONS_URL: 'https://{{platformSubDomain}}.archive.org/advancedsearch.php' +
    '?q={{condition}}' +
    '&fl[]={{fields}}' +
    '{{#order}}&sort[]={{order}}{{/order}}' +
    '&rows={{limit}}' +
    '{{#page}}&page={{page}}{{/page}}' +
    '&output=json',
    SONG_URL: 'https://archive.org/download/{{albumId}}/{{filename}}',
  },

  media: {
    POSTER_OF_ALBUM: 'https://archive.org/services/img/{{id}}',
    DEFAULT_SONG_IMAGE: 'http://archive.org/images/notfound.png',
  },

  wayback: {
    ARCHIVE: 'http://web.archive.org/__wb/search/metadata?q={{url}}',
    ALEXA: 'http://data.alexa.com/data?cli=10&url={{url}}',
  },

  /**
   * settings specific for supported platforms
   */
  platforms: {
    alexa: {
      /**
       * substitute to endpoint
       */
      endpoint: {
        platformSubDomain: 'askills-api',
      },
    },

    assistant: {
      /**
       * substitute to endpoint
       */
      endpoint: {
        platformSubDomain: 'gactions-api',
      },
    },
  },

  request: {
    userAgent: '{{name}} ({{platform}}) / {{version}}',
  },

  feeders: {
    'albums-async': {
      chunk: {
        size: 4,
      },

      defaults: {
        chunk: {
          // how many albums we would fetch in one chunk
          albums: 1,
          // how many songs we would sample in one chunk
          songs: 2,
        },
      },

      random: {
        chunk: {
          // how many albums we would fetch in one chunk
          albums: 2,
          // how many songs we would sample in one chunk
          songs: 2,
        }
      },
    }
  },
};

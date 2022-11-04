/** @type {import('houdini').ConfigFile} */
const config = {
  client: "./src/lib/graphql/client",
  schemaPath: './schema.graphql',
  include: "./src/**/*.{svelte,gql,graphql}",
  apiUrl: 'http://localhost:3000/shop-api',
  scalars: {
    DateTime: {
      type: 'string',
    },
  },
  disableMasking: true,
    plugins: {
        "houdini-svelte": {
            client: "./src/lib/graphql/client"
        }
    },
}

export default config;
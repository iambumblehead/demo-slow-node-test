import esmock from 'esmock'

export default async () => {
  const { ApolloServer } = await esmock(`@apollo/server`, {}, {
    loglevel: {
      getLogger: () => ({
        setLevel: () => {},
        name: 'apollo-server-test'
      })
    }
  })

  return new ApolloServer({
    typeDefs: `#graphql
      type Query {
        hello: String
      }`,
    resolvers: {
      Query: {
        hello: () => 'world'
      }
    }
  })
}

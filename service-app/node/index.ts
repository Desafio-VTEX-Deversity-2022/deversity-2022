import { method, RecorderState, ServiceContext } from '@vtex/api'
import { Service } from '@vtex/api'

import { Clients } from './clients'
import { changeMeMiddleware } from './middlewares/changeMeMiddleware'
// import { changeMeResolver } from './resolvers/changeMeResolver'
import { jsonplaceholder } from './middlewares/jsonplaceholder'

const MEDIUM_TIMEOUT_MS = 2 * 1000

declare global {
  type Context = ServiceContext<Clients, State>

  interface State extends RecorderState {
    code: number
  }
}

// Export a service that defines resolvers and clients' options
export default new Service({
  clients: {
    implementation: Clients,
    options: {
      default: {
        timeout: MEDIUM_TIMEOUT_MS,
      },
    },
  },
  routes: {
    changeMe: method({
      GET: [changeMeMiddleware]
    }),
    jsonplaceholder: method({
      GET: [jsonplaceholder]
    })
    // otherRoute: method({
    //   POST: [otherMiddleware, anotherMiddleware]
    // })
  },
  // graphql: {
  //   // Field resolvers usually go here
  //   resolvers: {
  //     Query: {
  //       // Change the names
  //       queryOne: changeMeResolver
  //     },
  //     Mutation: {
  //       // Do you have mutation resolvers?
  //     },
  //   },
  // },
})

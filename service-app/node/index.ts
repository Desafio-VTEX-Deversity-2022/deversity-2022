import { method, ParamsContext, RecorderState, ServiceContext } from '@vtex/api'
import { Service } from '@vtex/api'

import { Clients } from './clients'
import { status } from './middlewares/status'
import { StatusResolver } from './resolvers/resolvers'


const MEDIUM_TIMEOUT_MS = 2 * 1000

declare global {

 /type Context = ServiceContext<Clients>
}


export default new Service<Clients, RecorderState, ParamsContext>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        timeout: MEDIUM_TIMEOUT_MS,
      }, 
    }),
  },
  graphql: {
    resolvers: {
      Query: {
        users, 
      },
      Mutation: {
        createUser,
      },
    },
  },
})

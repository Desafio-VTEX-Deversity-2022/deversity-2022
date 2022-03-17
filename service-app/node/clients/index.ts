import { IOClients } from '@vtex/api'
import { Catalog } from '@vtex/clients'

export class Clients extends IOClients {
  public get catalog() {
    return this.getOrSet('catalog', Catalog)
  }
  // public get jsonPlaceholder() {
  //   return this.getOrSet('jsonPlaceholder', JsonPlaceholderClient)
  // }

  // public get externalMasterdata() {
  //   return this.getOrSet('externalMasterdata', ExternalMasterdata)
  // }
}

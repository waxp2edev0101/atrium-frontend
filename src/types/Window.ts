import type { Contract } from 'near-api-js'
// export interface CWindow {
//   name: string;
// }
;(window as any)['global'] = window
export interface CWindow extends Window {
  walletConnection: any
  accountId: string
  contract: Contract
  location: any
  near: any
  nearInitPromise: any
}

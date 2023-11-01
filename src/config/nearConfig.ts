export const CONTRACT_NAME = process.env.VITE_CONTRACT_ID || 'atrium-contract'
// const CONTRACT_NAME = 'contract-name';
// import { Configure } from '../types';

interface Configure {
  networkId: string
  nodeUrl: string
  contractName: string
  walletUrl: string
  helperUrl: string
  explorerUrl: string
  keyPath: string
  masterAccount: string
}
interface NFT {
  name: string
}

export type { Configure, NFT }

function getConfig(env: string): Configure {
  const configure: Configure = {
    contractName: '',
    explorerUrl: '',
    helperUrl: '',
    keyPath: '',
    masterAccount: '',
    networkId: '',
    nodeUrl: '',
    walletUrl: '',
  }
  switch (env) {
    case 'production':
      return { ...configure }
    case 'mainnet':
      return {
        contractName: CONTRACT_NAME,
        explorerUrl: 'https://explorer.mainnet.near.org',
        helperUrl: 'https://helper.mainnet.near.org',
        networkId: 'mainnet',
        nodeUrl: 'https://rpc.mainnet.near.org',
        walletUrl: 'https://wallet.near.org',
      } as Configure
    case 'development':
      return {
        contractName: CONTRACT_NAME,
        explorerUrl: 'https://explorer.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org',
        networkId: 'testnet',
        nodeUrl: 'https://rpc.testnet.near.org',
        walletUrl: 'https://wallet.testnet.near.org',
      } as Configure
    case 'testnet':
      return {
        contractName: CONTRACT_NAME,
        explorerUrl: 'https://explorer.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org',
        networkId: 'testnet',
        nodeUrl: 'https://rpc.testnet.near.org',
        walletUrl: 'https://wallet.testnet.near.org',
      } as Configure
    case 'betanet':
      return {
        contractName: CONTRACT_NAME,
        explorerUrl: 'https://explorer.betanet.near.org',
        helperUrl: 'https://helper.betanet.near.org',
        networkId: 'betanet',
        nodeUrl: 'https://rpc.betanet.near.org',
        walletUrl: 'https://wallet.betanet.near.org',
      } as Configure
    case 'local':
      return {
        contractName: CONTRACT_NAME,
        keyPath: `${process.env.HOME}/.near/validator_key.json`,
        networkId: 'local',
        nodeUrl: 'http://localhost:3030',
        walletUrl: 'http://localhost:4000/wallet',
      } as Configure
    case 'test':
    case 'ci':
      return {
        contractName: CONTRACT_NAME,
        masterAccount: 'test.near',
        networkId: 'shared-test',
        nodeUrl: 'https://rpc.ci-testnet.near.org',
      } as Configure
    case 'ci-betanet':
      return {
        contractName: CONTRACT_NAME,
        masterAccount: 'test.near',
        networkId: 'shared-test-staging',
        nodeUrl: 'https://rpc.ci-betanet.near.org',
      } as Configure
    default:
      throw Error(
        `Unconfigured environment '${env}'. Can be configured in src/config.js.`
      )
  }
}

export default getConfig

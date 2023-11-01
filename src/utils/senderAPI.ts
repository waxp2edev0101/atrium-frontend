const CONTRACT_ID = process.env.VITE_CONTRACT_ID || 'atrium-contract'
interface CWindow extends Window {
  near: any
}

declare let window: CWindow
export const loginSender = async (cb?: () => void) => {
  console.log('-----sender login-----')
  if (!window.near) {
    console.log('you should install sender wallet')
    return
  }
  await window.near.requestSignIn({
    contractId: CONTRACT_ID, // contract requesting access
  })

  // Or add `methodNames` if you only allow the key to call some of the methods

  await window.near
    .requestSignIn({
      contractId: CONTRACT_ID, // contract requesting access
      methodNames: ['addMessage'], // (optional) changed methods the app allowed to use
    })
    .then((res: any) => {
      console.log('login succeed by sender wallet ', res)
      if (cb) cb()
    })
    .catch((e: any) => {
      console.log('an error occurred during login by sender wallet ', e)
    })

  return window.near.isSignedIn() // t
}
export const logoutSender = async () => {
  if (window.near.isSignedIn()) {
    window.near.signOut() // true
  } // false
}

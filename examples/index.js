const { Signer } = require('grvt-signer')
const { ContractTypes } = require('grvt-signer/types')

// fill in your private key
const PRIVATE_KEY = 'b66df1531a4675a43bec48b5e6947c55f4b954fe220424846bc3592e30b1c57e'

const signer = new Signer(PRIVATE_KEY)

const nonce = 720948655

const signCreateAccount =  () => {
  const message = {
    accountID: '0x5E4c35548e7057274057388bcf10aff5E3AddC09',
    nonce: String(nonce)
  }

  signer.sign(ContractTypes.CreateAccount, message)
    .then((signature) => console.log('CreateAccount signature:', signature))
    .catch((error) => console.log('error', error))
}

signCreateAccount()

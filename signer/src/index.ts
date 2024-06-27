import { ethers } from 'ethers'
import { type TContractTypesUnion } from './types'
import { domain } from './types/types'

export class Signer {
  private readonly _wallet: ethers.Wallet

  /**
   * @param privateKey wallet private key
   */
  constructor (privateKey: string) {
    this._wallet = new ethers.Wallet(
      privateKey.startsWith('0x')
        ? privateKey
        : '0x' + privateKey
    )
  }

  static decode (signResult: string): {
    r: string
    s: string
    v: number
  } {
    const bytes: number[] = []
    for (let i = 0; i < signResult.length; i += 2) {
      const parseByte = parseInt(signResult.substr(i, 2), 16)
      if (!Number.isNaN(parseByte)) {
        bytes.push(parseByte)
      }
    }
    const r = Array.from(
      bytes.slice(0, 32),
      (byte: number) => ('0' + (byte & 0xFF).toString(16)).slice(-2)
    ).join('')
    const s = Array.from(
      bytes.slice(32, 64),
      (byte: number) => ('0' + (byte & 0xFF).toString(16)).slice(-2)
    ).join('')
    return {
      r: `0x${r}`,
      s: `0x${s}`,
      v: bytes.slice(-1)[0]
    }
  }

  async sign (contractType: TContractTypesUnion, message: Record<string, any>) {
    // Remove EIP712Domain from types
    const { EIP712Domain, ...types } = contractType.types
    const signature = await this._wallet.signTypedData(domain, types, message)
    return Signer.decode(signature)
  }
}

export default Signer

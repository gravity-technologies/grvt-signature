import * as types from './types'

export const { domain, domainWithoutContract, EIP712Domain, EIP712DomainWithoutContract, ...ContractTypes } = types

export type TContractTypes = Readonly<typeof ContractTypes>

export type TContractTypesUnion = TContractTypes[keyof TContractTypes]

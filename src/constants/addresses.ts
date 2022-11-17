import { AddressMap } from '../types'
import { ChainId } from '../enums'

export const USDC_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  [ChainId.ROPSTEN]: '0x0D9C8723B343A8368BebE0B5E89273fF8D712e3C',
  [ChainId.KOVAN]: '0xb7a4F3E9097C08dA09517b5aB877F7a917224ede',
  [ChainId.MATIC]: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  [ChainId.FANTOM]: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
  [ChainId.BSC]: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  [ChainId.HARMONY]: '0x985458E523dB3d53125813eD68c274899e9DfAb4',
  [ChainId.HECO]: '0x9362Bbef4B8313A8Aa9f0c9808B80577Aa26B73B',
  [ChainId.OKEX]: '0xc946DAf81b08146B1C7A8Da2A851Ddf2B3EAaf85',
  [ChainId.XDAI]: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
  [ChainId.ARBITRUM]: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
  [ChainId.AURORA]: '0xB12BFcA5A55806AaF64E99521918A4bf0fC40802'
}

export const FACTORY_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
  [ChainId.ROPSTEN]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.RINKEBY]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.GÖRLI]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.KOVAN]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.MATIC_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.XDAI]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.BSC]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.BSC_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.ARBITRUM]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.ARBITRUM_TESTNET]: '0x8Ab7a812B6Ece1BC0a3EB1eFb9c9169286eF4D1d',
  [ChainId.MOONBEAM_TESTNET]: '0x2Ce3F07dD4c62b56a502E223A7cBE38b1d77A1b5',
  [ChainId.AVALANCHE]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.AVALANCHE_TESTNET]: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
  [ChainId.HECO]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.HECO_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.HARMONY]: '0x9014B937069918bd319f80e8B3BB4A2cf6FAA5F7',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.OKEX_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.CELO]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.PALM]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.PALM_TESTNET]: '',
  [ChainId.MOONRIVER]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.AURORA]: '0x78f406B41C81eb4144C321ADa5902BBF5de28538',
  [ChainId.AURORA_TESTNET]: '0x73E3B9e3584358a39c48DE028A6039DB2e38a896',
  [ChainId.AURORA_PRIVATENET]: '0x78f406B41C81eb4144C321ADa5902BBF5de28538'
}

export const ROUTER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
  [ChainId.RINKEBY]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.ROPSTEN]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.GÖRLI]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.KOVAN]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.MATIC_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.XDAI]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.BSC]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.BSC_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.ARBITRUM]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.ARBITRUM_TESTNET]: '0xC77a03327f3a19d3705889F78fDB40DD14C07524',
  [ChainId.MOONBEAM_TESTNET]: '0xeB5c2BB5E83B51d83F3534Ae21E84336B8B376ef',
  [ChainId.AVALANCHE]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.AVALANCHE_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.HECO]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.HECO_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.HARMONY]: '0x24ad62502d1C652Cc7684081169D04896aC20f30',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.OKEX_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.CELO]: '0x1421bDe4B10e8dd459b3BCb598810B1337D56842',
  [ChainId.PALM]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.PALM_TESTNET]: '',
  [ChainId.MOONRIVER]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.AURORA]: '0xcCC7B6CD8764E84Be19BD13b25850C4ac24aa2C0',
  [ChainId.AURORA_TESTNET]: '0xb165D400794BEF40cEd89B784920EB952cedE024',
  [ChainId.AURORA_PRIVATENET]: '0xcCC7B6CD8764E84Be19BD13b25850C4ac24aa2C0'
}

export const SUSHI_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
  [ChainId.ROPSTEN]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.RINKEBY]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.GÖRLI]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.KOVAN]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '0x2995D1317DcD4f0aB89f4AE60F3f020A4F17C7CE',
  [ChainId.BSC]: '0x947950BcC74888a40Ffa2593C5798F11Fc9124C4',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '0xd4d42F0b6DEF4CE0383636770eF773390d85c61A',
  [ChainId.ARBITRUM_TESTNET]: '0x852d0c45912Ab85eA3C7bB1fEA1cF5C77ad9529b',
  [ChainId.MOONBEAM_TESTNET]: '',
  [ChainId.AVALANCHE]: '0x39cf1BD5f15fb22eC3D9Ff86b0727aFc203427cc',
  [ChainId.AVALANCHE_TESTNET]: '',
  [ChainId.HECO]: '0x52E00B2dA5Bd7940fFe26B609A42F957f31118D5',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '0x8D760497554eecC3B9036fb0364156ef2F0D02BC',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '0x2218E0D5E0173769F5b4939a3aE423f7e5E4EAB7',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.CELO]: '',
  [ChainId.PALM]: '',
  [ChainId.PALM_TESTNET]: '',
  [ChainId.AURORA]: '0xa685F488DEe49b75469E9e866965daBc8Ed6083d',
  [ChainId.AURORA_TESTNET]: '0x597c3b35fe89af28f0338B63d7d8e3319501393e',
  [ChainId.AURORA_PRIVATENET]: '0xa685F488DEe49b75469E9e866965daBc8Ed6083d'
}

export const MASTERCHEF_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd',
  [ChainId.ROPSTEN]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.RINKEBY]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.GÖRLI]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.KOVAN]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.ARBITRUM_TESTNET]: '0x8B77F7c1E2dD5f1691e3C63ae9d8EcDA92b59383',
  [ChainId.MOONBEAM_TESTNET]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.AVALANCHE_TESTNET]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.CELO]: '',
  [ChainId.PALM]: '',
  [ChainId.PALM_TESTNET]: '',
  [ChainId.AURORA]: '0xe653f898b1F216884bC1Fdd5B47b9933B5F4e5FB',
  [ChainId.AURORA_TESTNET]: '0xc58a0FF26AB29587A0D9e24131c9f23D51B6C67f',
  [ChainId.AURORA_PRIVATENET]: '0xe653f898b1F216884bC1Fdd5B47b9933B5F4e5FB'
}

export const BAR_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
  [ChainId.ROPSTEN]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.RINKEBY]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.GÖRLI]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.KOVAN]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.ARBITRUM_TESTNET]: '0x256761F297d8140C9752974A208c7c18AB7dafd2',
  [ChainId.MOONBEAM_TESTNET]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.AVALANCHE_TESTNET]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.CELO]: '',
  [ChainId.PALM]: '',
  [ChainId.PALM_TESTNET]: '',
  [ChainId.AURORA]: '0xbe334d7208366B3E4Fb40348576227b524d8CBA0',
  [ChainId.AURORA_TESTNET]: '0xd61a5f2Eda48F2e141fBD1496F7B4aE34a1cD2E1',
  [ChainId.AURORA_PRIVATENET]: '0xbe334d7208366B3E4Fb40348576227b524d8CBA0'
}

export const MAKER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xE11fc0B43ab98Eb91e9836129d1ee7c3Bc95df50',
  [ChainId.ROPSTEN]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.RINKEBY]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.GÖRLI]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.KOVAN]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.ARBITRUM_TESTNET]: '0xDa96E629d999b806A6A08B2AEfD81E33578213B0',
  [ChainId.MOONBEAM_TESTNET]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.AVALANCHE_TESTNET]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.CELO]: '',
  [ChainId.PALM]: '',
  [ChainId.PALM_TESTNET]: '',
  [ChainId.AURORA]: '0x274676D087B066beD2d0010b89e763BBfAC8a1b2',
  [ChainId.AURORA_TESTNET]: '0xbA01db73cE9b1e0Ea48E3363Ab63fccf1eedC8e0',
  [ChainId.AURORA_PRIVATENET]: '0x274676D087B066beD2d0010b89e763BBfAC8a1b2'
}

export const MULTICALL2_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.ROPSTEN]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.RINKEBY]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.GÖRLI]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.KOVAN]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.ARBITRUM]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.ARBITRUM_TESTNET]: '0xA220d148C34784865A2C4BDA2C729B7472d0eBf1',
  [ChainId.CELO]: '0x9aac9048fC8139667D6a2597B902865bfdc225d3',
  [ChainId.FANTOM]: '0x22D4cF72C45F8198CfbF4B568dBdB5A85e8DC0B5',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x02817C1e3543c2d908a590F5dB6bc97f933dB4BD',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287',
  [ChainId.BSC]: '0xa9193376D09C7f31283C54e56D013fCF370Cd9D9',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.MOONBEAM_TESTNET]: '',
  [ChainId.AVALANCHE]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.AVALANCHE_TESTNET]: '',
  [ChainId.HECO]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.PALM]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.MOONRIVER]: '0x270f2F35bED92B7A59eA5F08F6B3fd34c8D9D9b5',
  [ChainId.AURORA]: '0xD4A13F9F555b15CaB14738F1dA6f654845F68e4b',
  [ChainId.AURORA_TESTNET]: '0x05f928E1EA9D0398790FbB4e6ED0d5719fF6aBB7',
  [ChainId.AURORA_PRIVATENET]: '0xD4A13F9F555b15CaB14738F1dA6f654845F68e4b'
}

export const WETH9_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  [ChainId.ROPSTEN]: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  [ChainId.RINKEBY]: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  [ChainId.GÖRLI]: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
  [ChainId.KOVAN]: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
  [ChainId.ARBITRUM]: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
  [ChainId.ARBITRUM_TESTNET]: '0x6d6599f8004817BC38A57Fc2fF7B714dbd6a5d3B',
  [ChainId.BSC]: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  [ChainId.FANTOM]: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
  [ChainId.MATIC]: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  [ChainId.OKEX]: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  [ChainId.HECO]: '0x64FF637fB478863B7468bc97D30a5bF3A428a1fD',
  [ChainId.HARMONY]: '0x6983D1E6DEf3690C4d616b13597A09e6193EA013',
  [ChainId.XDAI]: '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1',
  [ChainId.AVALANCHE]: '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15',
  [ChainId.AURORA]: '0xfDFfbb456257B5423770e37E43725fEF1DDD0B68',
  [ChainId.AURORA_TESTNET]: '0xbE911044046fBe5F9B2783702661A5C87F5ECbD8',
  [ChainId.AURORA_PRIVATENET]: '0xfDFfbb456257B5423770e37E43725fEF1DDD0B68'
}

export const WNATIVE_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: WETH9_ADDRESS[ChainId.MAINNET],
  [ChainId.ROPSTEN]: WETH9_ADDRESS[ChainId.ROPSTEN],
  [ChainId.RINKEBY]: WETH9_ADDRESS[ChainId.RINKEBY],
  [ChainId.GÖRLI]: WETH9_ADDRESS[ChainId.GÖRLI],
  [ChainId.KOVAN]: WETH9_ADDRESS[ChainId.KOVAN],
  [ChainId.ARBITRUM]: WETH9_ADDRESS[ChainId.ARBITRUM],
  [ChainId.ARBITRUM_TESTNET]: WETH9_ADDRESS[ChainId.ARBITRUM_TESTNET],
  [ChainId.FANTOM]: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
  [ChainId.FANTOM_TESTNET]: '0xf1277d1Ed8AD466beddF92ef448A132661956621',
  [ChainId.MATIC]: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  [ChainId.MATIC_TESTNET]: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  [ChainId.XDAI]: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
  [ChainId.BSC]: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  [ChainId.BSC_TESTNET]: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
  [ChainId.MOONBEAM_TESTNET]: '0xe73763DB808ecCDC0E36bC8E32510ED126910394',
  [ChainId.AVALANCHE]: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
  [ChainId.AVALANCHE_TESTNET]: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
  [ChainId.HECO]: '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F',
  [ChainId.HECO_TESTNET]: '0x5B2DA6F42CA09C77D577a12BeaD0446148830687',
  [ChainId.HARMONY]: '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
  [ChainId.HARMONY_TESTNET]: '0x7a2afac38517d512E55C0bCe3b6805c10a04D60F',
  [ChainId.OKEX]: '0x8F8526dbfd6E38E3D8307702cA8469Bae6C56C15',
  [ChainId.OKEX_TESTNET]: '0x2219845942d28716c0F7C605765fABDcA1a7d9E0',
  [ChainId.CELO]: '0x471EcE3750Da237f93B8E339c536989b8978a438',
  [ChainId.PALM]: '0xF98cABF0a963452C5536330408B2590567611a71',
  [ChainId.MOONRIVER]: '0xf50225a84382c74CbdeA10b0c176f71fc3DE0C4d',
  [ChainId.AURORA]: WETH9_ADDRESS[ChainId.AURORA],
  [ChainId.AURORA_TESTNET]: WETH9_ADDRESS[ChainId.AURORA_TESTNET],
  [ChainId.AURORA_PRIVATENET]: WETH9_ADDRESS[ChainId.AURORA_PRIVATENET]
}

export const CELL_WNEAR: AddressMap = {
  [ChainId.AURORA]: '0xcA5eD5745890C66026400F9b805466fB3984A345',
  [ChainId.AURORA_TESTNET]: '0x6fA71f29e5c00116AA510930648C612Fa5587165',
  [ChainId.AURORA_PRIVATENET]: '0xcA5eD5745890C66026400F9b805466fB3984A345'
}

export const CELL_WETH: AddressMap = {
  [ChainId.AURORA]: '0xD305204424F1232473aaD082111c2750f6d3e485',
  [ChainId.AURORA_TESTNET]: '0x3313a8c97aE89eAa408C1E794f29c2B432c4C6eE',
  [ChainId.AURORA_PRIVATENET]: '0xD305204424F1232473aaD082111c2750f6d3e485'
}

export const CELL_RUSD: AddressMap = {
  [ChainId.AURORA]: '0x7EB3c48b9d2A50d394686C95582C1ed22d6aa457',
  [ChainId.AURORA_TESTNET]: '0x40bDD43044E8E3dBB8E94CC67b0AB2442C51C0BC',
  [ChainId.AURORA_PRIVATENET]: '0x7EB3c48b9d2A50d394686C95582C1ed22d6aa457'
}

export const CELL_WBTC: AddressMap = {
  [ChainId.AURORA]: '0x96c9C452D06d1c3086A23A2Bf3C0Fb8176edE76F',
  [ChainId.AURORA_TESTNET]: '0x8D8A94588D092C3B4Acd6Bb8BF009b6258320eed',
  [ChainId.AURORA_PRIVATENET]: '0x96c9C452D06d1c3086A23A2Bf3C0Fb8176edE76F'
}

export const WETH_USDC: AddressMap = {
  [ChainId.ARBITRUM]: '0x96c9C452D06d1c3086A23A2Bf3C0Fb8176edE76F',
  [ChainId.ARBITRUM_TESTNET]: '0x96c9C452D06d1c3086A23A2Bf3C0Fb8176edE76F'
}

export const TIMELOCK_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x9a8541Ddf3a932a9A922B607e9CF7301f1d47bD1',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.ARBITRUM_TESTNET]: '',
  [ChainId.MOONBEAM_TESTNET]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.AVALANCHE_TESTNET]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.CELO]: '',
  [ChainId.PALM]: '',
  [ChainId.PALM_TESTNET]: ''
}

export const BENTOBOX_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.ROPSTEN]: '0x6BdD85290001C8Aef74f35A7606065FA15aD5ACF',
  [ChainId.RINKEBY]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.GÖRLI]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.KOVAN]: '0x9A0D9920D92c178a58D99B455898Df2df22A2eE4',
  [ChainId.FANTOM]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x0319000133d3AdA02600f0875d2cf03D442C3367',
  [ChainId.MATIC_TESTNET]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.XDAI]: '0xE2d7F5dd869Fc7c126D21b13a9080e75a4bDb324',
  [ChainId.BSC]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.BSC_TESTNET]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.ARBITRUM]: '0x74c764D41B77DBbb4fe771daB1939B00b146894A',
  [ChainId.ARBITRUM_TESTNET]: '',
  [ChainId.MOONBEAM_TESTNET]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.AVALANCHE_TESTNET]: '',
  [ChainId.HECO]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.CELO]: '',
  [ChainId.PALM]: '',
  [ChainId.PALM_TESTNET]: ''
}

export const KASHI_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '0x7a6DA9903d0a481F40b8336c1463487BC8C0407e',
  [ChainId.BSC]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '0xa010eE0226cd071BeBd8919A1F675cAE1f1f5D3e',
  [ChainId.ARBITRUM_TESTNET]: '',
  [ChainId.MOONBEAM_TESTNET]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.AVALANCHE_TESTNET]: '',
  [ChainId.HECO]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.CELO]: '',
  [ChainId.PALM]: '',
  [ChainId.PALM_TESTNET]: ''
}

export const SUSHISWAP_SWAPPER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x1766733112408b95239aD1951925567CB1203084',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0xe9589382130Ded5DF2397E2fD7A3E9b41DD2701D',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '0xE02BDb31C353CE95A1D74F81C93eEa70Bf7371B9',
  [ChainId.BSC]: '0x1766733112408b95239aD1951925567CB1203084',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '0x0bFcD5dD76218bF9e3BE8A1055f9e6D27E5745eb',
  [ChainId.ARBITRUM_TESTNET]: '',
  [ChainId.MOONBEAM_TESTNET]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.AVALANCHE_TESTNET]: '',
  [ChainId.HECO]: '0x1766733112408b95239aD1951925567CB1203084',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.CELO]: '',
  [ChainId.PALM]: '',
  [ChainId.PALM_TESTNET]: ''
}

export const SUSHISWAP_MULTISWAPPER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x545820d5Cc05248da112419fEfb18522c63C8e12',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0xc0c1649b2c67f1a9f5ff1dd618188165e2555bcf',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x73BE093B84c773fe8eE0f76DDc0829E45c215415',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '0x735f0FbEb3b6389986BcaAf073Af07D2F8be2b93',
  [ChainId.BSC]: '0x86c655cAc122e9A2fd9Ae1f79Df27b30E357968c',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '0xbe7D5968296843756109D42946D01195320922EF',
  [ChainId.ARBITRUM_TESTNET]: '',
  [ChainId.MOONBEAM_TESTNET]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.AVALANCHE_TESTNET]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.CELO]: '',
  [ChainId.PALM]: '',
  [ChainId.PALM_TESTNET]: ''
}

export const SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0x75AE0Aa596D39b20addC921DeB5EE3c96279dABE',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0xDB6C4EDd9545d3b815dA85E6429B699c418886f9',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '0x07b6e34EeCF38B02e83b6B4702699717e298967E',
  [ChainId.BSC]: '0x1B16149Edaf1EFa6ADE6aEEF33e63C6e08c9bB1B',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '0x860D841bfD1cfEf72A14B2b734005799F07dC7ED',
  [ChainId.ARBITRUM_TESTNET]: '',
  [ChainId.MOONBEAM_TESTNET]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.AVALANCHE_TESTNET]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.CELO]: '',
  [ChainId.PALM]: '',
  [ChainId.PALM_TESTNET]: ''
}

export const PEGGED_ORACLE_ADDRESS = '0x6cbfbB38498Df0E1e7A4506593cDB02db9001564'
export const SUSHISWAP_TWAP_0_ORACLE_ADDRESS = '0x66F03B0d30838A3fee971928627ea6F59B236065'
export const SUSHISWAP_TWAP_1_ORACLE_ADDRESS = '0x0D51b575591F8f74a2763Ade75D3CDCf6789266f'

export const CHAINLINK_ORACLE_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB',
  [ChainId.MATIC]: '0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB',
  [ChainId.XDAI]: '0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB',
  [ChainId.BSC]: '0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB',
  [ChainId.ARBITRUM]: '0xB2B5C26B6868be10fF77e4E233fD231ceB90162a'
}

export const BORING_HELPER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x11Ca5375AdAfd6205E41131A4409f182677996E6',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0x11Ca5375AdAfd6205E41131A4409f182677996E6',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0xA77a7fD5a16237B85E0FAd02C51f459D18AE93Cd',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '0x97e4a0fb71243A83A6FbaEF7Cf73617594e4cF2F',
  [ChainId.BSC]: '0x11Ca5375AdAfd6205E41131A4409f182677996E6',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '0x37B3287292De241278fB5FCa514a756E0BE924f8',
  [ChainId.ARBITRUM_TESTNET]: '',
  [ChainId.MOONBEAM_TESTNET]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.AVALANCHE_TESTNET]: '',
  [ChainId.HECO]: '0x11Ca5375AdAfd6205E41131A4409f182677996E6',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.CELO]: '',
  [ChainId.PALM]: '',
  [ChainId.PALM_TESTNET]: ''
}

export const STOP_LIMIT_ORDER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0xce9365dB1C99897f04B3923C03ba9a5f80E8DB87',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x1aDb3Bd86bb01797667eC382a0BC6A9854b4005f',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.ARBITRUM_TESTNET]: '',
  [ChainId.MOONBEAM_TESTNET]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.AVALANCHE_TESTNET]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.CELO]: '',
  [ChainId.PALM]: '',
  [ChainId.PALM_TESTNET]: ''
}

export const ARCHER_ROUTER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x9917C083FF9FbD29Df1367FBF7F2388A9a202431'
}

export const MINICHEF_ADDRESS: AddressMap = {
  [ChainId.MATIC]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.XDAI]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.HARMONY]: '0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287',
  [ChainId.ARBITRUM]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3'
}

export const MASTERCHEF_V2_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xEF0881eC094552b2e128Cf945EF17a6752B4Ec5d'
}

export const ENS_REGISTRAR_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [ChainId.GÖRLI]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [ChainId.ROPSTEN]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [ChainId.RINKEBY]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
}

export const ZAPPER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xcff6eF0B9916682B37D80c19cFF8949bc1886bC2',
  [ChainId.ROPSTEN]: '0xcff6eF0B9916682B37D80c19cFF8949bc1886bC2'
}

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xcBE6B83e77cdc011Cc18F6f0Df8444E5783ed982',
  [ChainId.ROPSTEN]: '0x84d1f7202e0e7dac211617017ca72a2cb5e2b955'
}

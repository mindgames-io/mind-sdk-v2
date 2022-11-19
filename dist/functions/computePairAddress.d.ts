import { Token } from '../entities';
import { ChainId } from 'enums';
export declare const computePairAddress: ({ factoryAddress, tokenA, tokenB, chainId }: {
    factoryAddress: string;
    tokenA: Token;
    tokenB: Token;
    chainId: ChainId;
}) => string;

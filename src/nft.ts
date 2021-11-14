import {
  Attributes,
  AttributeType,
  Attribute,
  AttributeFactory as AF,
} from "./attributes";

type AttributeName = string;

interface NFT {
  id: number;
  attributes: Record<AttributeName, Attribute>;
}

export interface NFTs extends Array<NFT> {}

export function getAll(): NFTs {
  // get all attribute types
  let figures: Attributes = AF.createAttributes(AttributeType.Figure);
  let backgrounds: Attributes = AF.createAttributes(AttributeType.Background);

  const nfts: NFTs = [];
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      let nft = {
        id: i + 1,
        attributes: {
          [AttributeType.Background]: backgrounds[i],
          [AttributeType.Figure]: figures[j],
        },
      };
      console.log(`created nft id: ${i + 1}`);
      nfts.push(nft);
    }
  }

  return nfts;
}

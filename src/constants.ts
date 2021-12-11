import { AttributeFactory } from "./attributes";
import { Distributions } from "./interfaces/distributions";
import { Metadata } from "./metadata";

export const IPFS_NFT_IMAGES_NAME = "dmall-test-images";
export const IPFS_NFT_METADATA_NAME = "dmall-test-metadata";
export const LOCAL_NFT_IMAGES_PATH = "./output/images";
export const LOCAL_NFT_METADATA_PATH = "./output/metadata";

export enum TraitType {
  Background = "background",
  Figure = "figure",
  Disposition = "disposition",
}

export function getSpecialNFTsMetadata(): Metadata[] {
  return [
    {
      description: "St. Jar Jar Binks",
      image: "./input/special/1.png",
      attributes: AttributeFactory.getSpecialNFTsAttributes([
        { value: "St. Jar Jar", trait_type: TraitType.Figure },
        { value: "Mega Church", trait_type: TraitType.Background },
        { value: "Holy", trait_type: TraitType.Disposition },
      ]),
    },
    {
      description: "Is that legal?",
      image: "./input/special/2.png",
      attributes: AttributeFactory.getSpecialNFTsAttributes([
        { value: "The Trade Federation", trait_type: TraitType.Figure },
        {
          value: "Lucrehulk-class Battleship",
          trait_type: TraitType.Background,
        },
        { value: "Confused", trait_type: TraitType.Disposition },
      ]),
    },
    {
      description: "On ETH right?",
      image: "./input/special/3.png",
      attributes: AttributeFactory.getSpecialNFTsAttributes([
        { value: "Anakin", trait_type: TraitType.Figure },
        { value: "Naboo", trait_type: TraitType.Background },
        { value: "Kekkkk", trait_type: TraitType.Disposition },
      ]),
    },
    {
      description: "Meesa Dissapointed",
      image: "./input/special/4.png",
      attributes: AttributeFactory.getSpecialNFTsAttributes([
        { value: "Senator Palpatine", trait_type: TraitType.Figure },
        { value: "Courisant", trait_type: TraitType.Background },
        { value: "Sad boi", trait_type: TraitType.Disposition },
      ]),
    },
    {
      description: "Get in loser we're going shopping",
      image: "./input/special/5.png",
      attributes: AttributeFactory.getSpecialNFTsAttributes([
        { value: "Regina", trait_type: TraitType.Figure },
        { value: "The mall, of course", trait_type: TraitType.Background },
        { value: "Being very mean", trait_type: TraitType.Disposition },
      ]),
    },
    {
      description: "Pondering My Mall",
      image: "./input/special/6.png",
      attributes: AttributeFactory.getSpecialNFTsAttributes([
        { value: "Darth Mall", trait_type: TraitType.Figure },
        { value: "Orb", trait_type: TraitType.Background },
        { value: "Pondering", trait_type: TraitType.Disposition },
      ]),
    },
    {
      description: "Visible Happiness",
      image: "./input/special/7.png",
      attributes: AttributeFactory.getSpecialNFTsAttributes([
        { value: "Obi Wan", trait_type: TraitType.Figure },
        { value: "Somewhere happy", trait_type: TraitType.Background },
        { value: "Happy", trait_type: TraitType.Disposition },
      ]),
    },
  ];
}

export function getBackgrounds(): Distributions {
  return [
    { name: "AMC", path: "./input/bg/amc", total_number: 1 },
    { name: "Costco", path: "./input/bg/costco", total_number: 1 },
    { name: "The Food Court", path: "./input/bg/food_court", total_number: 1 },
    { name: "Gamestop", path: "./input/bg/gamestop", total_number: 1 },
    { name: "Harrods", path: "./input/bg/harrods", total_number: 1 },
    { name: "Macys", path: "./input/bg/macys", total_number: 1 },
    {
      name: "Panda Express",
      path: "./input/bg/panda_express",
      total_number: 1,
    },
    {
      name: "The Parking Lot",
      path: "./input/bg/parking_lot",
      total_number: 1,
    },
    { name: "Sephora", path: "./input/bg/amc", total_number: 1 },
    { name: "7-11", path: "./input/bg/seven_eleven", total_number: 1 },
    { name: "Target", path: "./input/bg/target", total_number: 1 },
    { name: "The Aria", path: "./input/bg/the_aria", total_number: 1 },
    { name: "The City", path: "./input/bg/the_city", total_number: 1 },
    {
      name: "The Courtyard",
      path: "./input/bg/the_courtyard",
      total_number: 1,
    },
    {
      name: "The Escalator",
      path: "./input/bg/the_escalator",
      total_number: 1,
    },
    { name: "The Gallery", path: "./input/bg/the_gallery", total_number: 1 },
    { name: "The Mall", path: "./input/bg/the_mall", total_number: 1 },
    { name: "The Sign", path: "./input/bg/the_sign", total_number: 1 },
    {
      name: "The Strip Mall",
      path: "./input/bg/the_strip_mall",
      total_number: 1,
    },
    { name: "TJ Maxx", path: "./input/bg/tj_maxx", total_number: 1 },
    { name: "The Ginza", path: "./input/bg/tokyo", total_number: 1 },
  ];
}

export function getFigures(): Distributions {
  return [
    { name: "Anakin", path: "./input/figure/dark/anakin", total_number: 1 },
    {
      name: "Asajj Ventress",
      path: "./input/figure/dark/asajj_ventress",
      total_number: 1,
    },
    { name: "Cad Bane", path: "./input/figure/dark/cad_bane", total_number: 1 },
    {
      name: "Chancellor Palpatine",
      path: "./input/figure/dark/chancellor_palpatine",
      total_number: 1,
    },
    {
      name: "Count Dooku",
      path: "./input/figure/dark/count_dooku",
      total_number: 1,
    },
    {
      name: "Darth Maul",
      path: "./input/figure/dark/darth_maul",
      total_number: 1,
    },
    {
      name: "Darth Maul Saber",
      path: "./input/figure/dark/darth_maul_saber",
      total_number: 1,
    },
    {
      name: "Emperor Palpatine",
      path: "./input/figure/dark/emperor_palpatine",
      total_number: 1,
    },
    { name: "Jawa", path: "./input/figure/dark/jawa", total_number: 1 },
    {
      name: "Kylo Ren Saber",
      path: "./input/figure/dark/kylo_ren_saber",
      total_number: 1,
    },
    {
      name: "Moff Gideon",
      path: "./input/figure/dark/moff_gideon",
      total_number: 1,
    },
    {
      name: "Rune Haako",
      path: "./input/figure/dark/rune_haako",
      total_number: 1,
    },
    {
      name: "Darth Vader",
      path: "./input/figure/dark/vader_saber",
      total_number: 1,
    },
    {
      name: "Ventress Saber",
      path: "./input/figure/dark/ventress_saber",
      total_number: 1,
    },
    {
      name: "Viceroy Gunray",
      path: "./input/figure/dark/viceroy_gunray",
      total_number: 1,
    },
    {
      name: "Admiral Thrawn",
      path: "./input/figure/light/admiral_thrawn",
      total_number: 1,
    },
    {
      name: "Battle Droid",
      path: "./input/figure/light/battle_droid",
      total_number: 1,
    },
    {
      name: "Boba Fett",
      path: "./input/figure/light/boba_fett",
      total_number: 1,
    },
    {
      name: "Clonetrooper",
      path: "./input/figure/light/clonetrooper",
      total_number: 1,
    },
    {
      name: "First Order Trooper",
      path: "./input/figure/light/first_order_trooper",
      total_number: 1,
    },
    {
      name: "Jabba The Hutt",
      path: "./input/figure/light/jabba_the_hutt",
      total_number: 1,
    },
    {
      name: "Jar Jar Binks",
      path: "./input/figure/light/jar_jar_binks",
      total_number: 1,
    },
    {
      name: "Little Anakin",
      path: "./input/figure/light/little_anakin",
      total_number: 1,
    },
    {
      name: "The Mandalorian",
      path: "./input/figure/light/mandalorian",
      total_number: 1,
    },
    {
      name: "Moff Tarkin",
      path: "./input/figure/light/moff_tarkin",
      total_number: 1,
    },
    {
      name: "Stormtrooper",
      path: "./input/figure/light/stormtrooper",
      total_number: 1,
    },
    {
      name: "Tusken Raider",
      path: "./input/figure/light/tusken_raider",
      total_number: 1,
    },
  ];
}

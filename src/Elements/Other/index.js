import React from "react";
import Select from 'react-select';
import { useState, useLayoutEffect } from 'react';
import '../../index.css'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const imagesArts = importAll(require.context('../../ImagesArtifact/', false, /\.(png|jpe?g|svg)$/));

const mainstats = [
  {
    value: "HP",
    label: "HP",
    id: "10001"
  }, {
    value: "HP%",
    label: "HP%",
    id: "10002"
  }, {
    value: "ATK",
    label: "ATK",
    id: "10003"
  }, {
    value: "ATK%",
    label: "ATK%",
    id: "10004"
  }, {
    value: "DEF",
    label: "DEF",
    id: "10005"
  }, {
    value: "DEF%",
    label: "DEF%",
    id: "10006"
  }, {
    value: "Energy Recharge",
    label: "Energy Recharge",
    id: "10007"
  }, {
    value: "Elemental Mastery",
    label: "Elemental Mastery",
    id: "10008"
  }, {
    value: "CRIT Rate",
    label: "CRIT Rate",
    id: "13007"
  }, {
    value: "CRIT DMG",
    label: "CRIT DMG",
    id: "13008"
  }, {
    value: "Healing Bonus",
    label: "Healing Bonus",
    id: "13009"
  }, {
    value: "Pyro RES",
    label: "Pyro RES",
    id: "10009 "
  }, {
    value: "Electro RES",
    label: "Electro RES",
    id: "10010"
  }, {
    value: "Cryo RES",
    label: "Cryo RES",
    id: "10011"
  }, {
    value: "Hydro RES",
    label: "Hydro RES",
    id: "10012"
  }, {
    value: "Anemo RES",
    label: "Anemo RES",
    id: "10013"
  }, {
    value: "Geo RES",
    label: "Geo RES",
    id: "10014"
  }, {
    value: "Dendro RES",
    label: "Dendro RES",
    id: "10015"
  }, {
    value: "Pyro DMG Bonus",
    label: "Pyro DMG Bonus",
    id: "15008"
  }, {
    value: "Electro DMG Bonus",
    label: "Electro DMG Bonus",
    id: "15009"
  }, {
    value: "Cryo DMG Bonus",
    label: "Cryo DMG Bonus",
    id: "15010"
  }, {
    value: "Hydro DMG Bonus",
    label: "Hydro DMG Bonus",
    id: "15011"
  }, {
    value: "Anemo DMG Bonus",
    label: "Anemo DMG Bonus",
    id: "15012"
  }, {
    value: "Geo DMG Bonus",
    label: "Geo DMG Bonus",
    id: "15013"
  }, {
    value: "Dendro DMG Bonus",
    label: "Dendro DMG Bonus",
    id: "15014"
  }, {
    value: "Physical DMG Bonus",
    label: "Physical DMG Bonus",
    id: "15015"
  }
];

const substasts = [
  {
    value: "HP",
    label: "HP",
    id: "501024"
  }, {
    value: "HP%",
    label: "HP%",
    id: "501034"
  }, {
    value: "ATK",
    label: "ATK",
    id: "501054"
  }, {
    value: "ATK%",
    label: "ATK%",
    id: "501064"
  }, {
    value: "DEF",
    label: "DEF",
    id: "501084"
  }, {
    value: "DEF%",
    label: "DEF%",
    id: "501094"
  }, {
    value: "Energy Recharge",
    label: "Energy Recharge",
    id: "501234"
  }, {
    value: "Elemental Mastery",
    label: "Elemental Mastery",
    id: "501244"
  }, {
    value: "CRIT Rate",
    label: "CRIT Rate",
    id: "501204"
  }, {
    value: "CRIT DMG",
    label: "CRIT DMG",
    id: "501224"
  }, {
    value: "CD Reduction",
    label: "CD Reduction",
    id: "989001"
  }, {
    value: "Healing Bonus",
    label: "Healing Bonus",
    id: "991001"
  }, {
    value: "Incoming Healing Bonus",
    label: "Incoming Healing Bonus",
    id: "990001"
  }, {
    value: "Shield Strength",
    label: "Shield Strength",
    id: "992001"
  }, {
    value: "Movement Speed",
    label: "Movement Speed",
    id: "988001"
  }, {
    value: "Pyro DMG Bonus",
    label: "Pyro DMG Bonus",
    id: "987001"
  }, {
    value: "Electro DMG Bonus",
    label: "Electro DMG Bonus",
    id: "986001"
  }, {
    value: "Hydro DMG Bonus",
    label: "Hydro DMG Bonus",
    id: "985001"
  }, {
    value: "Dendro DMG Bonus",
    label: "Dendro DMG Bonus",
    id: "984001"
  }, {
    value: "Anemo DMG Bonus",
    label: "Anemo DMG Bonus",
    id: "983001"
  }, {
    value: "Cryo DMG Bonus",
    label: "Cryo DMG Bonus",
    id: "981001"
  }, {
    value: "Geo DMG Bonus",
    label: "Geo DMG Bonus",
    id: "982001"
  }, {
    value: "Physical DMG Bonus",
    label: "Physical DMG Bonus",
    id: "980001"
  }, {
    value: "Pyro RES",
    label: "Pyro RES",
    id: "979001"
  }, {
    value: "Electro RES",
    label: "Electro RES",
    id: "978001"
  }, {
    value: "Hydro RES",
    label: "Hydro RES",
    id: "977001"
  }, {
    value: "Dendro RES",
    label: "Dendro RES",
    id: "976001"
  }, {
    value: "Anemo RES",
    label: "Anemo RES",
    id: "975001"
  }, {
    value: "Cryo RES",
    label: "Cryo RES",
    id: "973001"
  }, {
    value: "Geo RES",
    label: "Geo RES",
    id: "974001"
  }, {
    value: "Phys RES",
    label: "Phys RES",
    id: "972001"
  }, {
    value: "DMG Bonus",
    label: "DMG Bonus",
    id: "971001"
  }, {
    value: "DMG Reduction",
    label: "DMG Reduction",
    id: "970001"
  }
]

const options = [
  {
    value: "Witch's Flower of Blaze",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15006_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Witch's Flower of Blaze</span></div>,
    id: "80544"
  }, {
    value: "Witch's Ever-Burning Plume",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15006_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Witch's Ever-Burning Plume</span></div>,
    id: "80524"
  }, {
    value: "Witch's End Time",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15006_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Witch's End Time</span></div>,
    id: "80554"
  }, {
    value: "Witch's Heart Flames",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15006_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Witch's Heart Flames</span></div>,
    id: "80514"
  }, {
    value: "Witch's Scorching Hat",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15006_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Witch's Scorching Hat</span></div>,
    id: "80534"
  }, {
    value: "Snowswept Memory",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_14001_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Snowswept Memory</span></div>,
    id: "71544"
  }, {
    value: "Icebreaker's Resolve",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_14001_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Icebreaker's Resolve</span></div>,
    id: "71524"
  }, {
    value: "Frozen Homeland's Demise",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_14001_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Frozen Homeland's Demise</span></div>,
    id: "71554"
  }, {
    value: "Frost-Weaved Dignity",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_14001_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Frost-Weaved Dignity</span></div>,
    id: "71514"
  }, {
    value: "Broken Rime's Echo",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_14001_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Broken Rime's Echo</span></div>,
    id: "71534"
  }, {
    value: "Soulscent Bloom",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15024_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Soulscent Bloom</span></div>,
    id: "23614"
  }, {
    value: "Jade Leaf",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15024_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Jade Leaf</span></div>,
    id: "23612"
  }, {
    value: "Symbol of Felicitation",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15024_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Symbol of Felicitation</span></div>,
    id: "23615"
  }, {
    value: "Chalice of the Font",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15024_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Chalice of the Font</span></div>,
    id: "23611"
  }, {
    value: "Flowing Rings",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15024_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Flowing Rings</span></div>,
    id: "23613"
  }, {
    value: "Magnificent Tsuba",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15020_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Magnificent Tsuba</span></div>,
    id: "24804"
  }, {
    value: "Sundered Feather",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15020_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Sundered Feather</span></div>,
    id: "24802"
  }, {
    value: "Storm Cage",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15020_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Storm Cage</span></div>,
    id: "24805"
  }, {
    value: "Scarlet Vessel",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15020_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Scarlet Vessel</span></div>,
    id: "24801"
  }, {
    value: "Ornate Kabuto",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15020_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Ornate Kabuto</span></div>,
    id: "24803"
  }, {
    value: "Gladiator's Nostalgia",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15001_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Gladiator's Nostalgia</span></div>,
    id: "75544"
  }, {
    value: "Gladiator's Destiny",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15001_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Gladiator's Destiny</span></div>,
    id: "75524"
  }, {
    value: "Gladiator's Longing",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15001_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Gladiator's Longing</span></div>,
    id: "75554"
  }, {
    value: "Gladiator's Intoxication",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15001_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Gladiator's Intoxication</span></div>,
    id: "75514"
  }, {
    value: "Gladiator's Triumphus",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15001_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Gladiator's Triumphus</span></div>,
    id: "75534"
  }, {
    value: "Gilded Corsage",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15016_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Gilded Corsage</span></div>,
    id: "90544"
  }, {
    value: "Gust of Nostalgia",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15016_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Gust of Nostalgia</span></div>,
    id: "90524"
  }, {
    value: "Copper Compass",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15016_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Copper Compass</span></div>,
    id: "90554"
  }, {
    value: "Goblet of Thundering Deep",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15016_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Goblet of Thundering Deep</span></div>,
    id: "90514"
  }, {
    value: "Wine-Stained Tricorne",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15016_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Wine-Stained Tricorne</span></div>,
    id: "90534"
  }, {
    value: "Bloom Times",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15021_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Bloom Times</span></div>,
    id: "24824"
  }, {
    value: "Plume of Luxury",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15021_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Plume of Luxury</span></div>,
    id: "24822"
  }, {
    value: "Song of Life",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15021_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Song of Life</span></div>,
    id: "24825"
  }, {
    value: "Calabash of Awakening",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15021_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Calabash of Awakening</span></div>,
    id: "24821"
  }, {
    value: "Skeletal Hat",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15021_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Skeletal Hat</span></div>,
    id: "24823"
  }, {
    value: "Royal Flora",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15007_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Royal Flora</span></div>,
    id: "81544"
  }, {
    value: "Royal Plume",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15007_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Royal Plume</span></div>,
    id: "81524"
  }, {
    value: "Royal Pocket Watch",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15007_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Royal Pocket Watch</span></div>,
    id: "81554"
  }, {
    value: "Royal Silver Urn",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15007_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Royal Silver Urn</span></div>,
    id: "81514"
  }, {
    value: "Royal Masque",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15007_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Royal Masque</span></div>,
    id: "81534"
  }, {
    value: "Sea-Dyed Blossom",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15022_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Sea-Dyed Blossom</span></div>,
    id: "96544"
  }, {
    value: "Deep Palace's Plume",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15022_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Deep Palace's Plume</span></div>,
    id: "96524"
  }, {
    value: "Cowry of Parting",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15022_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Cowry of Parting</span></div>,
    id: "96554"
  }, {
    value: "Pearl Cage",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15022_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Pearl Cage</span></div>,
    id: "96514"
  }, {
    value: "Crown of Watatsumi",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15022_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Crown of Watatsumi</span></div>,
    id: "96534"
  }, {
    value: "Stainless Bloom",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15018_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Stainless Bloom</span></div>,
    id: "92544"
  }, {
    value: "Wise Doctor's Pinion",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15018_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Wise Doctor's Pinion</span></div>,
    id: "95224"
  }, {
    value: "Moment of Cessation",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15018_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Moment of Cessation</span></div>,
    id: "92554"
  }, {
    value: "Surpassing Cup",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15018_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Surpassing Cup</span></div>,
    id: "92514"
  }, {
    value: "Mocking Mask",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15018_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Mocking Mask</span></div>,
    id: "92534"
  }, {
    value: "Entangling Bloom",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15019_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Entangling Bloom</span></div>,
    id: "24194"
  }, {
    value: "Shaft of Remembrance",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15019_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Shaft of Remembrance</span></div>,
    id: "24192"
  }, {
    value: "Morning Dew's Moment",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15019_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Morning Dew's Moment</span></div>,
    id: "24195"
  }, {
    value: "Hopeful Heart",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15019_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Hopeful Heart</span></div>,
    id: "24191"
  }, {
    value: "Capricious Visage",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15019_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Capricious Visage</span></div>,
    id: "24193"
  }, {
    value: "Summer Night's Bloom",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15015_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Summer Night's Bloom</span></div>,
    id: "89544"
  }, {
    value: "Summer Night's Finale",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15015_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Summer Night's Finale</span></div>,
    id: "89524"
  }, {
    value: "Summer Night's Moment",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15015_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Summer Night's Moment</span></div>,
    id: "89554"
  }, {
    value: "Summer Night's Waterballoon",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15015_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Summer Night's Waterballoon</span></div>,
    id: "89514"
  }, {
    value: "Summer Night's Mask",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15015_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Summer Night's Mask</span></div>,
    id: "89534"
  }, {
    value: "Flower of Accolades",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15017_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Flower of Accolades</span></div>,
    id: "24224"
  }, {
    value: "Ceremonial War-Plume",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15017_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Ceremonial War-Plume</span></div>,
    id: "24222"
  }, {
    value: "Orichalceous Time-Dial",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15017_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Orichalceous Time-Dial</span></div>,
    id: "24225"
  }, {
    value: "Noble's Pledging Vessel",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15017_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Noble's Pledging Vessel</span></div>,
    id: "24221"
  }, {
    value: "General's Ancient Helm",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15017_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;General's Ancient Helm</span></div>,
    id: "24223"
  }, {
    value: "Thunderbird's Mercy",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15005_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Thunderbird's Mercy</span></div>,
    id: "79544"
  }, {
    value: "Survivor of Catastrophe",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15005_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Survivor of Catastrophe</span></div>,
    id: "79524"
  }, {
    value: "Hourglass of Thunder",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15005_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Hourglass of Thunder</span></div>,
    id: "79554"
  }, {
    value: "Omen of Thunderstorm",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15005_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Omen of Thunderstorm</span></div>,
    id: "79514"
  }, {
    value: "Thunder Summoner's Crown",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15005_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Thunder Summoner's Crown</span></div>,
    id: "79534"
  }, {
    value: "Thundersoother's Heart",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_14002_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Thundersoother's Heart</span></div>,
    id: "23444"
  }, {
    value: "Thundersoother's Plume",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_14002_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Thundersoother's Plume</span></div>,
    id: "23442"
  }, {
    value: "Hour of Soothing Thunder",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_14002_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Hour of Soothing Thunder</span></div>,
    id: "23445"
  }, {
    value: "Thundersoother's Goblet",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_14002_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Thundersoother's Goblet</span></div>,
    id: "23441"
  }, {
    value: "Thundersoother's Diadem",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_14002_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Thundersoother's Diadem</span></div>,
    id: "23443"
  }, {
    value: "Flowering Life",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15023_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Flowering Life</span></div>,
    id: "97544"
  }, {
    value: "Feather of Nascent Light",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15023_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;MFeather of Nascent Light</span></div>,
    id: "97524"
  }, {
    value: "Solar Relic",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15023_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Solar Relic</span></div>,
    id: "97554"
  }, {
    value: "Moment of the Pact",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15023_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Moment of the Pact</span></div>,
    id: "97514"
  }, {
    value: "Thundering Poise",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15023_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Thundering Poise</span></div>,
    id: "97534"
  }, {
    value: "In Rememberence of Viridescent Fields",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15002_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;In Rememberence of Viridescent Fields</span></div>,
    id: "24654"
  }, {
    value: "Viridescent Arrow Feather",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15002_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Viridescent Arrow Feather</span></div>,
    id: "24652"
  }, {
    value: "Viridescent Venerer's Determination",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15002_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Viridescent Venerer's Determination</span></div>,
    id: "24655"
  }, {
    value: "Viridescent Venerer's Vessel",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15002_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Viridescent Venerer's Vessel</span></div>,
    id: "24651"
  }, {
    value: "Viridescent Venerer's Diadem",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15002_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Viridescent Venerer's Diadem</span></div>,
    id: "24653"
  }, {
    value: "Troupe's Dawnlight",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15003_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Troupe's Dawnlight</span></div>,
    id: "77544"
  }, {
    value: "Bard's Arrow Feather",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15003_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Bard's Arrow Feather</span></div>,
    id: "77524"
  }, {
    value: "Concert's Final Hour",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15003_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Concert's Final Hour</span></div>,
    id: "77554"
  }, {
    value: "Wanderer's String-Kettle",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15003_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Wanderer's String-Kettle</span></div>,
    id: "77514"
  }, {
    value: "Conductor's Top Hat",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15003_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Conductor's Top Hat</span></div>,
    id: "77534"
  }, {
    value: "Lavawalker's Resolution",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_14003_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Lavawalker's Resolution</span></div>,
    id: "73544"
  }, {
    value: "Lavawalker's Salvation",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_14003_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Lavawalker's Salvation</span></div>,
    id: "73524"
  }, {
    value: "Lavawalker's Torment",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_14003_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Lavawalker's Torment</span></div>,
    id: "73554"
  }, {
    value: "Lavawalker's Epiphany",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_14003_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Lavawalker's Epiphany</span></div>,
    id: "73514"
  }, {
    value: "Lavawalker's Wisdom",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_14003_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Lavawalker's Wisdom</span></div>,
    id: "73534"
  }, {
    value: "Bloodstained Flower of Iron",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15008_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Bloodstained Flower of Iron</span></div>,
    id: "82544"
  }, {
    value: "Bloodstained Black Plume",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15008_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Bloodstained Black Plume</span></div>,
    id: "82524"
  }, {
    value: "Bloodstained Final Hour",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15008_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Bloodstained Final Hour</span></div>,
    id: "82554"
  }, {
    value: "Bloodstained Chevalier's Goblet",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15008_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Bloodstained Chevalier's Goblet</span></div>,
    id: "82514"
  }, {
    value: "Bloodstained Iron Mask",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15008_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Bloodstained Iron Mask</span></div>,
    id: "82534"
  }, {
    value: "Flower of the Creviced Cliff",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15014_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Flower of the Creviced Cliff</span></div>,
    id: "88544"
  }, {
    value: "Feather of Jagged Peaks",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15014_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Feather of Jagged Peaks</span></div>,
    id: "88524"
  }, {
    value: "Sundial of Enduring Jade",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15014_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Sundial of Enduring Jade</span></div>,
    id: "88554"
  }, {
    value: "Goblet of Chiseled Crag",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15014_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Goblet of Chiseled Crag</span></div>,
    id: "88514"
  }, {
    value: "Mask of Solitude Basalt",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15014_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Mask of Solitude Basalt</span></div>,
    id: "88534"
  }, {
    value: "Labyrinth Wayfarer",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15025_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Labyrinth Wayfarer</span></div>,
    id: "20544"
  }, {
    value: "Scholar of Vines",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15025_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Scholar of Vines</span></div>,
    id: "20524"
  }, {
    value: "A Time of Insight",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15025_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;A Time of Insight</span></div>,
    id: "20554"
  }, {
    value: "Lamp of the Lost",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15025_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Lamp of the Lost</span></div>,
    id: "20514"
  }, {
    value: "Laurel Coronet",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15025_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Laurel Coronet</span></div>,
    id: "20534"
  }, {
    value: "Dreaming Steelbloom",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15026_4.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Dreaming Steelbloom</span></div>,
    id: "21544"
  }, {
    value: "Feather of Judgment",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15026_2.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Feather of Judgment</span></div>,
    id: "21524"
  }, {
    value: "The Sunken Years",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15026_5.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;The Sunken Years</span></div>,
    id: "21554"
  }, {
    value: "Honeyed Final Feast",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15026_1.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Honeyed Final Feast</span></div>,
    id: "21514"
  }, {
    value: "Shadow of the Sand King",
    label: <div style={{ display: 'inline-block' }}><img src={imagesArts['UI_RelicIcon_15026_3.png'].default}
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Shadow of the Sand King</span></div>,
    id: "21534"
  },
];

const numbersubstat = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

function Other() {

  const [artifact, setArtifact] = useState(0)

  const [mainstat, setMainStat] = useState(0)

  const [substat, setSubstat] = useState({
    sub_1: '',
    sub_2: '',
    sub_3: '',
    sub_4: ''
  })

  const [times, setTimes] = useState({
    time_1: '',
    time_2: '',
    time_3: '',
    time_4: ''
  })

  const [level, setLevel] = useState(20)

  useLayoutEffect(() => {
    if (level < 1) {
      setLevel(1)
    }
  }, [level])

  const handleInputChangeStat = (e, type) => {
    switch (type) {
      case 1:
        return setSubstat({
          ...substat,
          'sub_1': e.id
        })
      case 2:
        return setSubstat({
          ...substat,
          'sub_2': e.id
        })
      case 3:
        return setSubstat({
          ...substat,
          'sub_3': e.id
        })
      case 4:
        return setSubstat({
          ...substat,
          'sub_4': e.id
        })
      default:
        return '';
    }
  }

  const handleInputChangeTime = (e, type) => {
    switch (type) {
      case 1:
        return setTimes({
          ...times,
          'time_1': "," + e.target.value
        })
      case 2:
        return setTimes({
          ...times,
          'time_2': "," + e.target.value
        })
      case 3:
        return setTimes({
          ...times,
          'time_3': "," + e.target.value
        })
      case 4:
        return setTimes({
          ...times,
          'time_4': "," + e.target.value
        })
      default:
        return '';
    }
  }

  return (
    <div className="formDiv">
      <h3 style={{ textAlign: "center" }} >Artifact Command Generator
      </ h3>
      <div>
        <form>

          <div style={{ paddingBottom: '10px' }}>
            <label htmlFor="studName">Artifact</label>
            <Select options={options} onChange={(e) => setArtifact(e.id)} />
          </div>

          <div style={{ paddingBottom: '10px' }}>
            <label htmlFor="emailId">Mainstat</label>
            <Select options={mainstats} onChange={(e) => setMainStat(e.id)} />
          </div>


          {numbersubstat.map(num => (
            <div key={num.id}>
              <div style={{ paddingBottom: '10px', width: '97%', float: 'left' }}>
                <label htmlFor="text">Substat-{num.id}</label>
                <Select options={substasts} onChange={(e) => handleInputChangeStat(e, num.id)} />
              </div>
              <div style={{ paddingBottom: '10px', width: '3%', float: 'right' }}>
                <label htmlFor="text">Times</label>
                <input
                  type='number' min='1' defaultValue='1'
                  style={{ width: '50px', height: '38px' }}
                  onChange={(e) => handleInputChangeTime(e, num.id)}
                />
              </div>
            </div>
          ))}

          <div>
            <label htmlFor="text">Level Artifact: &ensp;</label>
            <input
              type='number' min='1' max='20' defaultValue='20'
              style={{ width: '100px', height: '38px' }}
              onChange={(e) => setLevel(e.target.value)}
            />
            <b style={{ color: 'red' }}>&ensp; *Note: </b>
            The maximum artifact in-game level can only be 20
          </div>

          <div style={{ paddingBottom: '10px' }}>
            <label htmlFor="text" style={{ color: 'red' }}>Command</label>
            <p>
              !g {artifact} {mainstat} {substat.sub_1}{times.time_1} {substat.sub_2}{times.time_2} {substat.sub_3}{times.time_3} {substat.sub_4}{times.time_4} lv{Number(level)}
            </p>
          </div>
        </form>
      </div>
    </div >
  )

}

export default Other;
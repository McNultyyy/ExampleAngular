export interface EquipmentItem {
  name: String;
  id: number;
  slotname: String;
  requirements: Levels;
  offence: Stats;
  defence: Stats;
  others: OtherStats;
  hand: number;
  ammo_type: String;
  ammo_tier: String;
  weapon_type: String;
}

interface Levels {
  attack: number;
  strength: number;
  defence: number;
  hitpoints: number;
  magic: number;
  ranged: number;
  prayer: number;
}

interface Stats {
  stab: number;
  slash: number;
  crush: number;
  ranged: number;
  magic: number;
}

interface OtherStats {
  strength: number;
  ranged_strength: number;
  magic_damage: number;
  prayer: number;
}

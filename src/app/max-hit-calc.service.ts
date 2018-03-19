import {Injectable} from '@angular/core';
import {MeleePotion, MeleePrayer, MeleeStanceType} from './max-hit-calc/max-hit-calc.component';

@Injectable()
export class MaxHitCalcService {

  constructor() {
  }

  getMaxMeleeHit(strengthLevel: number, stance: MeleeStanceType, potion: MeleePotion, prayer: MeleePrayer, strengthBonus: number): number {
    console.log('in Service');
    console.log(`strengthLevel ${strengthLevel}, stance ${stance}, potion ${potion} prayer ${prayer} strengthBonus ${strengthBonus}`);

    let maxHit = 0;

    let potionFunc = (s: number, p: MeleePotion): number => {
      return s + p.strengthIncrease + Math.floor(p.strengthPercentage * s);
    };

    let otherBonusMultipler = 1.00;

    let effectiveStrength = Math.trunc(
      (strengthLevel + potionFunc(strengthLevel, potion)) *
      prayer.strengthMultiplier * otherBonusMultipler
    ) + stance.strengthIncrease;

    let baseDamage = 1.3 + (effectiveStrength / 10) + (strengthBonus / 80) + ((effectiveStrength * strengthBonus) / 640);

    maxHit = Math.trunc(baseDamage);

    return maxHit;
  }

}

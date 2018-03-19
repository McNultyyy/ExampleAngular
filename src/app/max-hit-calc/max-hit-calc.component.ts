import {Component, OnInit} from '@angular/core';
import {MaxHitCalcService} from '../max-hit-calc.service';
import {glovesslot} from '../../assets/data/data.js';
import {EquipmentItem} from '../models/equipment-item';

@Component({
  selector: 'app-max-hit-calc',
  template: `
    <h1>max-hit-calc works!</h1>

    <div class="row">
      <div class="form-group col-md-6 col-sm-12">
        <label for="strengthLevel">Strength Level</label>
        <input class="form-control" type="number" id="strengthLevel" [(ngModel)]="strengthLevel"/>
      </div>

      <div class="form-group col-md-6 col-sm-12">
        <label for="stanceType">Stance</label>
        <select class="form-control" id="stanceType" [(ngModel)]="meleeStanceType">
          <option *ngFor="let stance of meleeStanceTypes" [ngValue]="stance">{{stance.name}}</option>
        </select>
      </div>

      <div class="form-group col-md-6 col-sm-12">
        <label for="prayerType">Prayer</label>
        <select class="form-control" id="prayerType" [(ngModel)]="meleePrayer">
          <option *ngFor="let prayer of meleePrayers" [ngValue]="prayer">{{prayer.name}}</option>
        </select>
      </div>

      <div class="form-group col-md-6 col-sm-12">
        <label for="potionType">Potion</label>
        <select class="form-control" id="potionType" [(ngModel)]="meleePotion">
          <option *ngFor="let potion of meleePotions" [ngValue]="potion">{{potion.name}}</option>
        </select>
      </div>

      <div class="form-group col-md-6 col-sm-12">
        <label for="strengthBonus">Strength Bonus</label>
        <input class="form-control" type="number" id="strengthBonus" [(ngModel)]="strengthBonus"/>
      </div>
    </div>
    
    <div class="row">
      <div class="form-group col-md-6 col-sm-12">
        <label for="gloveSlot">Glove Slot</label>
        <select>
          
        </select>
      </div>
    </div>

    <button type="button" (click)="calculateMaxHit()">Calculate</button>

    {{maxHit}}

    <pre>{{this | json}}</pre>
  `,
  styles: [``]
})
export class MaxHitCalcComponent implements OnInit {

  maxHit: number;

  strengthLevel: number = 0;
  strengthBonus: number = 0;

  meleeStanceTypes: MeleeStanceType[] = [
    {name: 'Accurate', strengthIncrease: 0},
    {name: 'Aggressive', strengthIncrease: 3},
    {name: 'Controlled', strengthIncrease: 1},
    {name: 'Defensive', strengthIncrease: 0}
  ];
  meleeStanceType: MeleeStanceType = this.meleeStanceTypes[0];

  meleePrayers: MeleePrayer[] = [
    {name: 'Burst of Strength', strengthMultiplier: 1.05},
    {name: 'Superhuman Strength', strengthMultiplier: 1.10},
    {name: 'Ultimate Strength', strengthMultiplier: 1.15},
    {name: 'Piety', strengthMultiplier: 1.23}
  ];
  meleePrayer: MeleePrayer = this.meleePrayers[0];

  meleePotions: MeleePotion[] = [
    {name: 'Strength Potion', strengthIncrease: 3, strengthPercentage: 0.10},
    {name: 'Super Strength Potion', strengthIncrease: 5, strengthPercentage: 0.15}
  ];
  meleePotion: MeleePotion = this.meleePotions[0];

  constructor(private maxHitCalcService: MaxHitCalcService) {

  }

  toEquipmentArray(slot: any): EquipmentItem[] {
    let items: EquipmentItem[];

    slot.items.forEach((x, y) => {
      items.push(y);
    });

    return items;
  }


  ngOnInit() {
  }

  calculateMaxHit() {
    let newMaxHit = this.maxHitCalcService.getMaxMeleeHit(
      this.strengthLevel, this.meleeStanceType,
      this.meleePotion, this.meleePrayer, this.strengthBonus
    );
    this.maxHit = newMaxHit;
  }

}

export interface MeleeStanceType {
  name: String;
  // attackIncrease: number;
  strengthIncrease: number;
  // defenceIncrease: number;
}

export interface MeleePrayer {
  name: String;
  strengthMultiplier: number;
}

export interface MeleePotion {
  name: String;
  strengthIncrease: number;
  strengthPercentage: number;
}

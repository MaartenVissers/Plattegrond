/*OPMERKING: niet echt behorende tot het model*/

export class Ruimte {
  id: string;
  name: string;
  plattegrondCoördinaat: number;
  cssId: string;
  type: string;
  capaciteit: number;
  beamer: boolean;
  bezet: boolean;
  drukte: number;
  gereserveerd: boolean;
  startDatumReservatie: Date;
  eindDatumReservatie: Date;
  verdieping: number;
  campus: number;

}

/*OPMERKING: niet echt behorende tot het model*/

import {Ruimte} from './ruimte';

export interface Verdieping {
  id: string;
  name: string;
  ruimtes: Ruimte[];
}

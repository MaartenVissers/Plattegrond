import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const verdiepingen = [
      {
        'id': 'eersteVerdieping',
        'name': 'Eerste Verdieping',
        'ruimtes': [{
          'id': 'refterVd1',
          'plattegrondCoördinaat': 1,
          'name': 'REFTER',
          'cssId': 'boven',
          'type': 'Cafetaria',
          'capaciteit': '100',
          'beamer': 'false',
          'drukte': '0'
        },
          {
            'id': 'GR101',
            'name': 'GR101',
            'plattegrondCoördinaat': 2,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'gangVd1Links',
            'name': 'GANG',
            'plattegrondCoördinaat': 3,
            'cssId': 'linkseGang',
            'type': 'gang'
          },
          {
            'id': 'middenVd1',
            'name': 'MIDDEN',
            'plattegrondCoördinaat': 4,
            'cssId': 'midden',
            'type': 'gang'
          },
          {
            'id': 'gangVd1Rechts',
            'name': 'GANG',
            'plattegrondCoördinaat': 5,
            'cssId': 'rechtseGang',
            'type': 'gang'
          },
          {
            'id': 'GR112',
            'name': 'GR112',
            'plattegrondCoördinaat': 6,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'true'
          },
          {
            'id': 'GR102',
            'name': 'GR102',
            'plattegrondCoördinaat': 7,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR111',
            'name': 'GR111',
            'plattegrondCoördinaat': 8,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR103',
            'name': 'GR103',
            'plattegrondCoördinaat': 9,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR110',
            'name': 'GR110',
            'plattegrondCoördinaat': 10,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR104',
            'name': 'GR104',
            'plattegrondCoördinaat': 11,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR109',
            'name': 'GR109',
            'plattegrondCoördinaat': 12,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'false',
            'bezet': 'false'
          },
          {
            'id': 'GR105',
            'name': 'GR105',
            'plattegrondCoördinaat': 13,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'false',
            'bezet': 'true'
          },
          {
            'id': 'GR108',
            'name': 'GR108',
            'plattegrondCoördinaat': 14,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'true'
          },
          {
            'id': 'GR106',
            'name': 'GR106',
            'plattegrondCoördinaat': 15,
            'cssId': 'linksOnderLokaal',
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR107',
            'name': 'GR107',
            'plattegrondCoördinaat': 16,
            'cssId': 'rechtsOnderLokaal',
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          }]
      }, {
        'id': 'tweedeVerdieping',
        'name': 'Tweede Verdieping',
        'ruimtes': [{
          'id': 'theview',
          'name': 'THE VIEW',
          'plattegrondCoördinaat': 1,
          'cssId': 'boven',
          'type': 'Studielandschap',
          'capaciteit': '100',
          'beamer': 'false',
          'drukte': '0'
        },
          {
            'id': 'GR201',
            'name': 'GR201',
            'plattegrondCoördinaat': 2,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'gangVd2Links',
            'name': 'GANG',
            'plattegrondCoördinaat': 3,
            'cssId': 'linkseGang',
            'type': 'gang'
          },
          {
            'id': 'middenVd2',
            'name': 'MIDDEN',
            'plattegrondCoördinaat': 4,
            'cssId': 'midden',
            'type': 'gang'
          },
          {
            'id': 'gangVd2Rechts',
            'name': 'GANG',
            'plattegrondCoördinaat': 5,
            'cssId': 'rechtseGang',
            'type': 'gang'
          },
          {
            'id': 'GR212',
            'name': 'GR212',
            'plattegrondCoördinaat': 6,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'true'
          },
          {
            'id': 'GR202',
            'name': 'GR202',
            'plattegrondCoördinaat': 7,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR211',
            'name': 'GR211',
            'plattegrondCoördinaat': 8,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR203',
            'name': 'GR203',
            'plattegrondCoördinaat': 9,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'false',
            'bezet': 'true'
          },
          {
            'id': 'GR210',
            'name': 'GR210',
            'plattegrondCoördinaat': 10,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR204',
            'name': 'GR204',
            'plattegrondCoördinaat': 11,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR209',
            'name': 'GR209',
            'plattegrondCoördinaat': 12,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'true'
          },
          {
            'id': 'GR205',
            'name': 'GR205',
            'plattegrondCoördinaat': 13,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR208',
            'name': 'GR208',
            'plattegrondCoördinaat': 14,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR206',
            'name': 'GR206',
            'plattegrondCoördinaat': 15,
            'cssId': 'linksOnderLokaal',
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR207',
            'name': 'GR207',
            'plattegrondCoördinaat': 16,
            'cssId': 'rechtsOnderLokaal',
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          }]
      }, {
        'id': 'derdeVerdieping',
        'name': 'Derde Verdieping',
        'ruimtes': [{
          'id': 'vergaderzaal',
          'name': 'VERGADERZAAL',
          'plattegrondCoördinaat': 1,
          'cssId': 'boven',
          'type': 'vergaderzaal',
          'capaciteit': '30',
          'beamer': 'true',
          'bezet': 'false'
        },
          {
            'id': 'GR301',
            'name': 'GR301',
            'plattegrondCoördinaat': 2,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'true'
          },
          {
            'id': 'gangVd3Links',
            'name': 'GANG',
            'plattegrondCoördinaat': 3,
            'cssId': 'linkseGang',
            'type': 'gang'
          },
          {
            'id': 'middenVd3',
            'name': 'MIDDEN',
            'plattegrondCoördinaat': 4,
            'cssId': 'midden',
            'type': 'gang'
          },
          {
            'id': 'gangVd3Rechts',
            'name': 'GANG',
            'plattegrondCoördinaat': 5,
            'cssId': 'rechtseGang',
            'type': 'gang'
          },
          {
            'id': 'GR312',
            'name': 'GR312',
            'plattegrondCoördinaat': 6,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR302',
            'name': 'GR302',
            'plattegrondCoördinaat': 7,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR311',
            'name': 'GR311',
            'plattegrondCoördinaat': 8,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR303',
            'name': 'GR303',
            'plattegrondCoördinaat': 9,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR310',
            'name': 'GR310',
            'plattegrondCoördinaat': 10,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR304',
            'name': 'GR304',
            'plattegrondCoördinaat': 11,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR309',
            'name': 'GR309',
            'plattegrondCoördinaat': 12,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR305',
            'name': 'GR305',
            'plattegrondCoördinaat': 13,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR308',
            'name': 'GR308',
            'plattegrondCoördinaat': 14,
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR306',
            'name': 'GR306',
            'plattegrondCoördinaat': 15,
            'cssId': 'linksOnderLokaal',
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'true',
            'bezet': 'false'
          },
          {
            'id': 'GR307',
            'name': 'GR307',
            'plattegrondCoördinaat': 16,
            'cssId': 'rechtsOnderLokaal',
            'type': 'klaslokaal',
            'capaciteit': '30',
            'beamer': 'false',
            'bezet': 'true'
          }]
      }
    ];
    return {verdiepingen};
  }
}

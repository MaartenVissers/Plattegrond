import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

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
        'name': 'REFTER',
        'cssId': 'boven'
      },
      {
        'id': 'GR101',
        'name': 'GR101'
      },
      {
        'id': 'gangVd1Links',
        'name': 'GANG',
        'cssId': 'linkseGang'
      },
      {
        'id': 'middenVd1',
        'name': 'MIDDEN',
        'cssId': 'midden'
      },
      {
        'id': 'gangVd1Rechts',
        'name': 'GANG',
        'cssId': 'rechtseGang'
      },
      {
        'id': 'GR112',
        'name': 'GR112'
      },
      {
        'id': 'GR102',
        'name': 'GR102'
      },
      {
        'id': 'GR111',
        'name': 'GR111'
      },
      {
        'id': 'GR103',
        'name': 'GR103'
      },
      {
        'id': 'GR110',
        'name': 'GR110'
      },
      {
        'id': 'GR104',
        'name': 'GR104'
      },
      {
        'id': 'GR109',
        'name': 'GR109'
      },
      {
        'id': 'GR105',
        'name': 'GR105'
      },
      {
        'id': 'GR108',
        'name': 'GR108'
      },
      {
        'id': 'GR106',
        'name': 'GR106',
        'cssId': 'linksOnderLokaal'
      },
      {
        'id': 'GR107',
        'name': 'GR107',
        'cssId': 'rechtsOnderLokaal'
      }]}, {
        'id': 'tweedeVerdieping',
        'name': 'Tweede Verdieping',
        'ruimtes': [ {
          'id': 'theview',
          'name': 'THE VIEW',
          'cssId': 'boven'
        },
          {
            'id': 'GR201',
            'name': 'GR201'
          },
          {
            'id': 'gangVd2Links',
            'name': 'GANG',
            'cssId': 'linkseGang'
          },
          {
            'id': 'middenVd2',
            'name': 'MIDDEN',
            'cssId': 'midden'
          },
          {
            'id': 'gangVd2Rechts',
            'name': 'GANG',
            'cssId': 'rechtseGang'
          },
          {
            'id': 'GR212',
            'name': 'GR212'
          },
          {
            'id': 'GR202',
            'name': 'GR202'
          },
          {
            'id': 'GR211',
            'name': 'GR211'
          },
          {
            'id': 'GR203',
            'name': 'GR203'
          },
          {
            'id': 'GR210',
            'name': 'GR210'
          },
          {
            'id': 'GR204',
            'name': 'GR204'
          },
          {
            'id': 'GR209',
            'name': 'GR209'
          },
          {
            'id': 'GR205',
            'name': 'GR205'
          },
          {
            'id': 'GR208',
            'name': 'GR208'
          },
          {
            'id': 'GR206',
            'name': 'GR206',
            'cssId': 'linksOnderLokaal'
          },
          {
            'id': 'GR207',
            'name': 'GR207',
            'cssId': 'rechtsOnderLokaal'
          }]}, {
        'id': 'derdeVerdieping',
        'name': 'Derde Verdieping',
        'ruimtes': [ {
          'id': 'floor',
          'name': 'THE FLOOR',
          'cssId': 'boven'
        },
          {
            'id': 'GR201',
            'name': 'GR201'
          },
          {
            'id': 'gangVd2Links',
            'name': 'GANG',
            'cssId': 'linkseGang'
          },
          {
            'id': 'middenVd2',
            'name': 'MIDDEN',
            'cssId': 'midden'
          },
          {
            'id': 'gangVd2Rechts',
            'name': 'GANG',
            'cssId': 'rechtseGang'
          },
          {
            'id': 'GR212',
            'name': 'GR212'
          },
          {
            'id': 'GR202',
            'name': 'GR202'
          },
          {
            'id': 'GR211',
            'name': 'GR211'
          },
          {
            'id': 'GR203',
            'name': 'GR203'
          },
          {
            'id': 'GR210',
            'name': 'GR210'
          },
          {
            'id': 'GR204',
            'name': 'GR204'
          },
          {
            'id': 'GR209',
            'name': 'GR209'
          },
          {
            'id': 'GR205',
            'name': 'GR205'
          },
          {
            'id': 'GR208',
            'name': 'GR208'
          },
          {
            'id': 'GR206',
            'name': 'GR206',
            'cssId': 'linksOnderLokaal'
          },
          {
            'id': 'GR207',
            'name': 'GR207',
            'cssId': 'rechtsOnderLokaal'
          }]}
    ]   ;
    return {verdiepingen};
  }
}

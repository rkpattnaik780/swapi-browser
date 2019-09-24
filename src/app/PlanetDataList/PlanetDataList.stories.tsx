import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { PlanetDataList } from '@app/PlanetDataList/PlanetDataList';

const stories = storiesOf('PlanetDataList', module);

export const samplePlanets = [
  {
    "name": "Alderaan",
    "rotation_period": "24",
    "orbital_period": "364",
    "diameter": "12500",
    "climate": "temperate",
    "gravity": "1 standard",
    "terrain": "grasslands, mountains",
    "surface_water": "40",
    "population": "2000000000",
    "residents": [
      "https://swapi.co/api/people/5/",
      "https://swapi.co/api/people/68/",
      "https://swapi.co/api/people/81/"
    ],
    "films": [
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/1/"
    ],
    "created": "2014-12-10T11:35:48.479000Z",
    "edited": "2014-12-20T20:58:18.420000Z",
    "url": "https://swapi.co/api/planets/2/"
  },
  {
    "name": "Yavin IV",
    "rotation_period": "24",
    "orbital_period": "4818",
    "diameter": "10200",
    "climate": "temperate, tropical",
    "gravity": "1 standard",
    "terrain": "jungle, rainforests",
    "surface_water": "8",
    "population": "1000",
    "residents": [],
    "films": [
      "https://swapi.co/api/films/1/"
    ],
    "created": "2014-12-10T11:37:19.144000Z",
    "edited": "2014-12-20T20:58:18.421000Z",
    "url": "https://swapi.co/api/planets/3/"
  }
];

stories.add(
  'PlanetDataList',
  () => <PlanetDataList planets={samplePlanets} />,
  { info: { inline: true } }
).add(
  'Loading',
  () => <PlanetDataList planets={[]} />,
  { info: { inline: true } }
)
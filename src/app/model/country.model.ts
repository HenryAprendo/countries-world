interface Flag {
  png: string;
  svg: string;
  alt: string;
}

interface NameCountry {
  common: string;
  official: string;
  nativeName: object;
}

export interface Country {
  name: NameCountry;
  native: string;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: object;
  currency: string;
  idd: object;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: object;
  listLanguages: string[];
  translations: object;
  latlng: string[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: object;
  flag:string;
  maps:object;
  population: number;
  gini:object;
  fifa: string;
  car:object;
  timezones: string[];
  continents: string[];
  flags:Flag;
  coatOfArms: object;
  startOfWeek: string;
  capitalInfo:object;
  postalCode: object;
}
























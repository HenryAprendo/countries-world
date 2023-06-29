interface Currencies {
  [key:string]: { name: string, symbol: string }
}

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

  tld: string[];

  currencies: Currencies;

  capital: string[];

  region: string;

  subregion: string;

  languages: object;

  borders: string[];

  population: number;

  flags:Flag;

}

  // name: {
  //   common: string,
  //   official: string,
  //   nativeName: {
  //     // [key:string]: {
  //     //   official: string,
  //     //   common: string
  //     // };
  //     // Dos mas
  //   }
  // };






export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  cca3: string; 
  capital?: string[];
  region: string;
  subregion?: string;
  languages?: {
    [key: string]: string;
  };
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  population: number;
  maps?: {
    googleMaps: string;
    openStreetMaps: string;
  };

}

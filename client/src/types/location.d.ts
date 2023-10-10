export interface LocationsType {
  id: string;
  content: string;
  value?: LocationType[];
}

export interface LocationType {
  image: string;
  countryName?: string;
  stateName?: string;
  cityName?: string;
  population?: number;
}

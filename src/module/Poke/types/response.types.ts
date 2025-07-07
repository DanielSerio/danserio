export interface PokemonListResponse<ItemType extends UnnamedItem> {
  count: number;
  next: null | string;
  previous: null | string;
  results: ItemType[];
}

export interface UnnamedItem {
  [k: string]: any;
  url: string;
  name?: string;
}

export interface NamedItem extends UnnamedItem {
  name: string;
}
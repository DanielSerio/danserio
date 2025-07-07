export interface PokemonListResponse<ItemType extends NamedItem> {
  count: number;
  next: null | string;
  previous: null | string;
  results: ItemType[];
}

export interface NamedItem {
  name: string;
  url: string;
}
import { ApiService } from "#core/service";
import type { PokemonListResponse, UnnamedItem } from "./types/response.types";

class PokeApiService extends ApiService {
  constructor() {
    super('https://pokeapi.co/api/v2/');
  }

  public async list<NamedItemType extends UnnamedItem>({ path, search }: { path: string; search: URLSearchParams; }) {
    const response = await this.GET(`${path}?${search}`);

    return await response.json() as PokemonListResponse<NamedItemType>;
  }
}

export const PokeService = new PokeApiService();
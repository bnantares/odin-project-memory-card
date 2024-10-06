// export type PokemonListDto = {
//     offcet: number;
//     limit: number;
// }

export type PokemonListItem = {
    name: string;
    url: string;
}

export type SpritesType = {
    back_default?: string;
    front_default?: string;
}

export type PokemonType = {
    res: string;
    id: number;
    name: string;
    order: number;
    sprites: SpritesType;
}
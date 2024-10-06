function loadPokemonList(url: string, init?: RequestInit) {
    const res = fetch(url, init).then(res => res.json());
    return res;
}

function getPokemonById(url: string, init?: RequestInit) {
    const res = fetch(url, init).then(res => res.json());
    return res;
}

export const pokemonService = {
    loadPokemonList,
    getPokemonById,
}
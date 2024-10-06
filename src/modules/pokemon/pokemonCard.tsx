import { FC, useEffect } from "react";
import { pokemonService } from "../../services/pokemon";
import useSWR from "swr";
import { PokemonType } from "../../types/pokemon";
import pokemonCardStyle from "../../styles/pokemonCardStyle.module.css"

interface PokemonCardProps {
    name?: string;
    url: string;
    pokemonSelected: any;
}

export const PokemonCard: FC<PokemonCardProps> = (result) => {
    const urlParts = result.url.split('/');
    
    const id = urlParts[urlParts.length - 2]

    const {data, isLoading, error} = useSWR<PokemonType>(`https://pokeapi.co/api/v2/pokemon/${id}`, pokemonService.getPokemonById);

    useEffect(() => {
        if(error) {
            console.log(error);
            alert('Ошибка');
        }
    }, [error]);

    if (isLoading) return null;

    const pokemonName = data?.name.toUpperCase()

    return (
        <>  
            <div onClick={() => result.pokemonSelected(data?.id)} className={pokemonCardStyle.pokemon__element}>
                <img className={pokemonCardStyle.pokemon__image} src={data!.sprites.front_default}></img>
                <div className={pokemonCardStyle.pokemon__name}>{pokemonName}</div>
            </div>
        </>
    )
}
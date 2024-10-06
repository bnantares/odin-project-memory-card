import useSWR from 'swr';
import { pokemonService } from '../../services/pokemon';
import { FC, useEffect } from 'react';
import { PokemonListItem } from '../../types/pokemon';
import { LoadListType } from '../../types';
import { PokemonCard } from './pokemonCard';
import pokemonListStyle from "../../styles/pokemonListStyle.module.css"

interface Props {
    pokemonSelected: (arg: number) => void;
}

export const PokemonList: FC<Props> = ({pokemonSelected}) => {
    const {data, isLoading, error} = useSWR<LoadListType<PokemonListItem>>('https://pokeapi.co/api/v2/pokemon', pokemonService.loadPokemonList);

    useEffect(() => {
        if(error) {
            console.log(error);
            alert('Ошибка');
        }
    }, [error]);

    if (isLoading) return null;

    // Шаффлим массив с покемонами с помощью алгоритма Фишера — Йетса
    shuffle(data?.results);

    return (
        <div className={pokemonListStyle.pokemon__list}> 
            {data?.results.map(result => <PokemonCard key={result.url} {...result} pokemonSelected={pokemonSelected}/>)}
        </div>
    )
}

function shuffle(array: Array<PokemonListItem> | undefined) {
    if (array) {
        let currentIndex = array.length;
        while (currentIndex != 0) {
            const randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    else console.log(`Не удалось перетасовать покемонов в массиве`);
}
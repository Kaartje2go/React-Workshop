import { useQuery } from 'react-query';

function usePlanet(id) {
    const queryOptions = {
        enabled: !!id
    }

     const { data } = useQuery(['planets', id], () => {
        return fetch(`https://swapi.dev/api/planets/${id}`).then(response => response.json());
    }, queryOptions);

    return {
        planet: data
    }
}

export default usePlanet;

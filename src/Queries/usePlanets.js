import { useQuery } from 'react-query';


function usePlanet() {
    // We'll get all the planets from the API here, using this URL: https://swapi.dev/api/planets
    
    /**
     * SWAPI does not provide resources with an 'id'.
     * We can make things a bit easier for ourselves by adding it to every resource with this function.
     * It uses the 'url' property of a resource to determine the 'id'.
     * @param {string} resourceUrl 
     * @returns {string}
     */
    const findIdByResourceUrl = (resourceUrl) => {
        return resourceUrl.match(/\d+/)[0];
    }

    // To retrieve the data with React Query, we'll be using the 'useQuery' hook. You can find the basics here: https://react-query.tanstack.com/guides/queries 
    // To handle the http call itself, we'll use the Fetch API that JS provides: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

    return {
        planets: [] // Here we'll return the data
    };
}

export default usePlanet;

import { useEffect, useState } from "react"

const localCache = {};
export const useFetch = (url) => {

    
    const [state, setState] = useState({
        //Inicializamos useState
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    useEffect(() => {
        getFetch();
    }, [url]) //cuando el url cambie

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }
    const getFetch = async () => {

        if ( localCache[url] ) {
            console.log('usando cahe');
            //console.log(localCache[url]);
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }

        setLoadingState();

        const resp = await fetch(url);

        //dar dos segundos a la peticion
        await new Promise(resolve => setTimeout(resolve, 1500))

        if (!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            })
            return;
        }

        const data = await resp.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })

        //Manejo de cache
        localCache[url] = data;
        console.log(localCache[url]);
        console.log({ data });
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}

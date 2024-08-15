
export const getAllCharactersDispatcher = async () => {
    try{
        const response = await fetch(`https://swapi.dev/api/people`,{
            method: 'GET',
            headers:{
                "Content-Type": "application/json"
            }
        });

        const data = await response.json()
        if(response.ok){
            return{
                ok:true,
                characters:data.results
            }
        }
        return{
            ok:false,
        }
    }catch(error){
        console.error(error)
        return{
            ok:false
        }
    }
}

export const getAllPlanetsDispatcher = async () => {

    try{
        const response = await fetch(`https://swapi.dev/api/planets`,{
            method: 'GET',
            headers:{
                "Content-Type": "application/json"
            }
        });

        const data = await response.json()
        if(response.ok){
            return{
                ok:true,
                planets:data.results
            }
        }
        return{
            ok:false,
        }
    }catch(error){
        console.error(error)
        return{
            ok:false
        }
    }

}

export const getAllStarshipsDispatcher = async () => {

    try{
        const response = await fetch(`https://swapi.dev/api/starships`,{
            method: 'GET',
            headers:{
                "Content-Type": "application/json"
            }
        });

        const data = await response.json()
        if(response.ok){
            return{
                ok:true,
                starships:data.results
            }
        }
        return{
            ok:false,
        }
    }catch(error){
        console.error(error)
        return{
            ok:false
        }
    }

}
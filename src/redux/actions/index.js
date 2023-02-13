export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'
export const GET_JOBS = 'GET_JOBS'

export const removeFromFavoritesAction = (i) => {
    return {
        type: "REMOVE_FROM_FAVORITES",
        payload: i,
    }
}

export const addToFavoritesAction = (data) => {
    return {
        type: "ADD_TO_FAVORITES",
        payload: data,
    }
}

export const getJobsActionAsync = () => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(baseEndpoint + query + "&limit=20");
            if (response.ok) {
                let { data } = await response.json();
                dispatch({
                    type: GET_JOBS,
                    payload: fetchedJobs,
                })
                console.log(data);
            } else {
                alert("Error fetching results");
            }
        } catch (error) {
            console.log(error);
        }
    }
}
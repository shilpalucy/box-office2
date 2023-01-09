const BaseUrl = "https://api.tvmaze.com";

export async function apiGet(queryString){

    const response = await fetch(`${BaseUrl}${queryString}`)
    .then(r=>r.json());
    return(response);

}
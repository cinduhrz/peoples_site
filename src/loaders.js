const URL = "https://peoples-api.onrender.com"

export const peopleLoader = async () => {
    const response = await fetch(URL + "/people")
    const people = await response.json()
    return people
}
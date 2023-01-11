import { redirect } from "react-router-dom"

const URL = "https://peoples-api.onrender.com"

// pull request object from the object provided to us by the react-router-dom Form component
export const createAction = async({request}) => {
    // get data from form
    const formData = await request.formData()

    // setup new person to match schema
    const newPerson = {
        // .get() is a method inside of request object
        name: formData.get('name'),
        image: formData.get('image'),
        title: formData.get('title')
    }

    // send new person to our API
    await fetch(URL + "/people", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPerson) // convert to json string before sending to API
    })

    // redirect to index
    return redirect("/")
}

// update has two arguments:
// 1) request object from the form
// 2) params object from the url to specify which person to update
export const updateAction = async ({request, params}) => {
    const formData = await request.formData()
    const updatedPerson = {
        name: formData.get("name"),
        image: formData.get("image"),
        title: formData.get("title")
    }

    await fetch(URL + `/people/${params.id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPerson)
    })

    return redirect("/")
}
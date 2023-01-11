import { useLoaderData } from "react-router-dom"
import { Form } from "react-router-dom"

function Show(props){
    const person = useLoaderData()

    return (<>
        <div className="person">
            {console.log(person)}
            <h1>{person.name}</h1>
            <h2>{person.title}</h2>
            <img src={person.img} alt={person.name} />

            <h2>Update {person.name}</h2>
            <Form action={`/update/${person._id}`}>
                <input type="input" name="name" placeholder="person's name" value={person.name}/>
                <input type="input" name="image" placeholder="person's image" value={person.image}/>
                <input type="input" name="title" placeholder="person's title" value={person.title}/>
                <input type="submit" value={`update ${person.name}`} />
            </Form>

        </div>
    </>)
}

export default Show
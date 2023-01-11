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
            {/* every form element NEEDS A METHOD ATTRIBUTE (put POST even if its put or delete, that you put in the action function later) */}
            <Form action={`/update/${person._id}`} method="POST">
                <input type="input" name="name" placeholder="person's name" defaultValue={person.name}/>
                <input type="input" name="image" placeholder="person's image" defaultValue={person.image}/>
                <input type="input" name="title" placeholder="person's title" defaultValue={person.title}/>
                <input type="submit" value={`update ${person.name}`} />
            </Form>

            <Form action={`/delete/${person._id}`} method="POST">
                <input type="submit" value={`delete ${person.name}`} />
            </Form>
        </div>
    </>)
}

export default Show
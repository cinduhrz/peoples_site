import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'
import App from './App'
import Index from './pages/Index'
import Show from './pages/Show'
import { peopleLoader } from './loaders'
import { personLoader } from './loaders'
import { createAction } from './actions'
import { updateAction } from './actions'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route 
                path=""
                loader={peopleLoader}
                element={<Index/>}/>
            <Route
                path=":id"
                loader={personLoader}
                element={<Show/>}/>
            <Route path="create" action={createAction}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" />
        </Route>
    )
)

export default router
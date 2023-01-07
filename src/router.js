import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'
import App from './App'
import Index from './pages/Index'
import Show from './pages/Show'
import { peopleLoader } from './loaders'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" loader={peopleLoader} element={<Index/>}/>
            <Route path=":id" element={<Show/>}/>
            <Route path="create" />
            <Route path="update/:id" />
            <Route path="delete/:id" />
        </Route>
    )
)

export default router
import { Routes, Route } from 'react-router-dom'

import DetailsPage from '../pages/DetailsPage'
import ListPage from '../pages/ListPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<ListPage />} />
            <Route path='/:id' element={<DetailsPage />} />
        </ Routes>
    )
}

export default AppRoutes
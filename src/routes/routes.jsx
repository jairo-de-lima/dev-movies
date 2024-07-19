import { Route, Routes } from 'react-router-dom'

import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import DefaultLayout from '../layout/defaultLayout'
import Detail from '../components/Detail'
import DetailSerie from '../components/SeriesDetail'
import DetailPerson from '../components/DetailPerson'

function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
<<<<<<< HEAD
            <Route path="/dev-movies" element={<Home />}/>
=======
            <Route path="/" element={<Home />}/>
>>>>>>> e8937acf44c57c938ba91aa546f00b088323f4b1
            <Route path='/filmes' element={<Movies />} />
            <Route path='/series' element={<Series />} />
            <Route path='/detalhe/:id' element={<Detail />} />
            <Route path='/serie/detalhe/:id' element={<DetailSerie />} />
            <Route path='/person/:id' element={<DetailPerson />} />
            </Route>
        </Routes>

    )
}

export default Router
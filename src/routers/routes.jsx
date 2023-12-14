
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {LandingPage} from '../pages/LandingPage'
import {PageNoFound} from '../pages/PageNoFound'


export function routes() {
  return (
    
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<LandingPage/>}/>
           
                <Route  path='*' element={<PageNoFound/>} />
            </Routes>
        </BrowserRouter>
    
  )
}

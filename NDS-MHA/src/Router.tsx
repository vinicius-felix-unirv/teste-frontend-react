import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/login'
import { Home } from './pages/home'

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
        </Routes>
    )
}
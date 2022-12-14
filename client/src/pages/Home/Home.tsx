import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom' 

import './styles.css'
import {
    Detail,
    Char,
    Shop,
    Loop
} from '../../components'
import {
    useAppSelector
} from '../../state/hooks'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="page">
        <Routes>
            {/* loop, char, and shop routes */}
            <Route path="loop" element={<Loop/>} />
            <Route path="char" element={<Char/>} />
            <Route path="shop" element={<Shop/>} />

            {/* skill routes */}
            <Route path=":id" element={<Detail/>} />
        </Routes>

        <Outlet/>
    </div>
  )
}

export default Home
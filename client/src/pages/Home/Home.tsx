import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom' 

import {
    Detail,
    Char,
    Shop
} from '../../components'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
        <Routes>
            {/* char and shop routes */}
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
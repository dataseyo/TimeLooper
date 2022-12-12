import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom' 

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
    const loop = useAppSelector(state => state.loop)
  return (
    <div>
        <Routes>
            {/* loop, char, and shop routes */}
            <Route path="loop" element={<Loop {...loop}/>} />
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
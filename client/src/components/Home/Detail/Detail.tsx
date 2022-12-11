import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './styles.css'

type Task = {
    id: number,
    name: string,
    xp: number
}

type Skill = {
    id: number,
    name: string,
    asset: string,
    level: number,
    tasks: Task[]
}

const Detail = () => {
    const data = useLocation()
    const state: Skill = data.state

    return (
        <div>
            <h2>{state.name}</h2>
            <p>Level: {state.level}</p>
        </div>
    )
}

export default Detail
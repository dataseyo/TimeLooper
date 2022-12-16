import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './styles.css'
import TaskCard from './TaskCard/TaskCard'

type Task = {
    id: number,
    name: string,
    xp: number,
    asset: string
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
        <div className="detail__container">
            <div className="detail__header">
                <h2>{state.name}</h2>
                <p>Lv: {state.level} / 99</p>
            </div>
            
            <div className="detail-tasks">
                {
                    state.tasks.map(task => {
                        return (
                            <TaskCard
                                key={task.id}
                                {...task}
                            />
                        )
                        
                    })
                }
            </div>
        </div>
    )
}

export default Detail
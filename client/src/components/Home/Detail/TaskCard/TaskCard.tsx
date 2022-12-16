import React from 'react'

import './styles.css'
import icons from '../../../../assets/icons.png'

type Task = {
    id: number,
    name: string,
    xp: number,
    asset: string
}

type TaskBarType = {
    time: number,
    style: React.CSSProperties
}

const TaskBar = ({
    time,
    style
}: TaskBarType) => {
    return (
        <div style={style}>
            <div 
                className="task-bar-fill"
                style={{
                    width: "100%",
                    backgroundColor: "blue"
                }}
            >

            </div>
        </div>
    )
}

const TaskCard = ({
    id,
    name,
    xp,
    asset
}: Task) => {
    const taskBarStyle = { 
        gridRow: "4", 
        width: "100%", 
        border: "1px solid black", 
        borderRadius: "5px",
        maxHeight: "50px"
    }

  return (
    <div className="task-card__container">
        <div className="task-card-header">
            <div 
                className="task-card-asset"
                style={{
                        background: `url(${icons}) ${asset}`,
                        height: '32px', 
                        width: '32px'
                    }}
            />
            <h3 className="task-card-name">{name}</h3>
            <p className="task-card-xp">{xp} XP</p>
        </div>
        <TaskBar
            time={4}
            style={taskBarStyle}
        />
    </div>
  )
}

export default TaskCard
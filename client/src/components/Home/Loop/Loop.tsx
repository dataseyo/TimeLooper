/*
    LOOP
    - full loop component that displays all loop info on main game page
*/
import React from 'react'

import './styles.css'
import {
    useAppSelector
} from '../../../state/hooks'
import CircleSVG from './Circle/Circle'

type Props = {
    days: number,
    currentDay: number
}

const Loop = () => {
    const loop = useAppSelector(state => state.loop)
    const { currentDay, days } = loop

    const percentage: number = currentDay / days * 100
    const text = `Day ${currentDay} / ${days}`
  return (
    <div className="loop__container">
        <h2 className="loop-title">Loop</h2>
        <div className="loop-tracker">
            <CircleSVG percentage={percentage} colour="blue" text={text}/>
            {/* add turn tracker */}
        </div>

        <div className="loop-event">

        </div>
    </div>
  )
}

export default Loop
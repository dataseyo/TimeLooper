/*
    NAVLOOP
    - small loop component that displays turn, days left, etc. in navbar
*/
import React from 'react'
import { 
    BsSunFill,
    BsSunriseFill,
    BsSunsetFill,
    BsFillMoonFill,
} from 'react-icons/bs'

import './styles.css'

type Props = {
    days: number,
    currentDay: number,
    turns: number,
    currentTurn: number
}

const NavLoop = ({
    days,
    currentDay,
    turns,
    currentTurn
}: Props) => {
  return (
    <div className="nav-loop__container">
        <div className="nav-loop-days__container">
            <p className="nav-loop-days-label">
                Day: {currentDay} / {days}
            </p>
            <div className="nav-loop-days">
            </div>
        </div>

        <div className="nav-loop-turns__container">
            <p className="nav-loop-turns-label">
                Turn: {currentTurn} / {turns}
            </p>
            <div className="nav-loop-turns">
                {
                    currentTurn == 1 && <BsSunriseFill className="nav-loop-days-icon"/>
                }

                {
                    currentTurn == 2 && <BsSunFill className="nav-loop-days-icon"/>
                }

                {
                    currentTurn == 3 && <BsSunsetFill className="nav-loop-days-icon"/>
                }

                {
                    currentTurn == 4 && <BsFillMoonFill className="nav-loop-days-icon"/>
                }
                
            </div>
        </div>
    </div>
  )
}

export default NavLoop
import React from 'react'

import './styles.css'
import Equipment from './Equipment/Equipment'
import Inventory from './Inventory/Inventory'

type Props = {}

const Char = (props: Props) => {
  return (
    <div className="char__container">
        <h2 className="char-title">Char</h2>
        <div className="char-menus">
            <Equipment/>
            <Inventory/>
        </div>
    </div>
  )
}

export default Char
import React from 'react'
import './Button.css'

export default props => {

    let classes = 'Button'
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button
            /* Recebe conteúdo do botão clicado */
            /* Realizar confirmação antes de chamar função */
            onClick={e => props.click && props.click(props.label)} 
            className={classes}>
            {props.label}
        </button>
    )
}

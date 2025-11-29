import PropTypes from 'prop-types'
import { useState } from 'react'

const Button = ({ padding, br, children, fontSize  }) => {
    const [hover, setHover] = useState(false)
    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '.5rem',
        color: 'white',
        backgroundColor: hover ? '#e75c00' : 'var(--color-orange)',
        padding: padding,
        borderRadius: br,
        fontSize: fontSize,
        cursor: 'pointer',
        transition: '.1s linear',
    }
  return (
    <button style={styles} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {children}
    </button>
  )
}

Button.propTypes = {
    padding : PropTypes.string,
    br: PropTypes.string,
    fontSize: PropTypes.string,
    children: PropTypes.node
}

export default Button
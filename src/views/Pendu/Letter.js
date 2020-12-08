import React from 'react'
import PropTypes from 'prop-types'


const Letter = ({letter, index, onClick}) => (
    <button className="letter" key={index}  onClick={() => onClick(letter)}>{letter}</button>
)

Letter.propTypes = {
    letter: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,

}

export default Letter;
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
    <button className={props.className} onClick={props.onClick}>
        <i className={props.icon}></i>
    </button>
);


Button.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;

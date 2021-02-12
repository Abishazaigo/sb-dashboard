import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({props}) => {
    return(
        <button className={props.className} id={props.id}>
             {props.label}
        </button>
    );
};

Button.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
  };
  

Button.defaultProps = {
    className="btn btn-danger btn-user btn-block",
    label="Register"
  };
  
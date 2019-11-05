import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
    <header>
        <h1 className="text-center pt-3">{props.titulo}</h1>
    </header>
);

Header.propTypes = {
    titulo : PropTypes.string.isRequired
}

export default Header;
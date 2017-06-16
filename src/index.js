/**
 * Created by rouven on 12.04.17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'

import Symbol from 'react-symbol'

const BackLink = ({children, className, goBack}) =>
    <button className={className} onClick={goBack}>
        {children}
    </button>;

const mapDispatchToProps = dispatch => ({
    goBack: (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        return dispatch(goBack());
    }
});

const BackLinkContainer = connect(null, mapDispatchToProps)(BackLink);

BackLinkContainer.defaultProps = {
    children: <span><Symbol symbol="arrow-circle-left"/> zurück</span>,
    className: 'btn btn-primary'
};

BackLinkContainer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default BackLinkContainer;
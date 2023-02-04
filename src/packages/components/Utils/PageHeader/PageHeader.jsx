import React from 'react';
import PropTypes from 'prop-types';
import Style from './pageHeader.module.css';

const PageHeader = ({ children }) => (
  <h2 className={Style.page_title}>
    {children}
    <div className={Style.lineblock} />
  </h2>
);

PageHeader.propTypes = {
  children: PropTypes.node,
};

PageHeader.defaultProps = {
  children: null,
};

export default PageHeader;

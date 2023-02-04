import React from 'react';
import { Space } from 'antd';
import PropTypes from 'prop-types';
import Style from './sectionHeader.module.css';

const SectionHeader = ({ children, suffix }) => (
  <Space size="middle">
    <div className={Style.section_title}>{children}</div>
    {suffix && <span className={Style.suffix}>{suffix}</span>}
  </Space>
);

SectionHeader.propTypes = {
  children: PropTypes.node,
  suffix: PropTypes.string,
};

SectionHeader.defaultProps = {
  children: null,
  suffix: null,
};

export default SectionHeader;

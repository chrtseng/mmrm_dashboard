import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Heading = styled.div(({ fontSize, lineHeight }) => ({
  fontSize: `${fontSize || 20}px`,
  fontWeight: 500,
  lineHeight: `${lineHeight || 23}px`,
  color: '#292929',
}));

const SectionHeader = ({ children, fontSize, lineHeight }) => (
  <div>
    <Heading fontSize={fontSize} lineHeight={lineHeight}>
      {' '}
      {children}{' '}
    </Heading>
    <span>最後更新時間： 2023/02/03 23:59:59</span>
  </div>
);

SectionHeader.propTypes = {
  children: PropTypes.node,
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
};

SectionHeader.defaultProps = {
  children: null,
  fontSize: 16,
  lineHeight: 20,
};

export default SectionHeader;

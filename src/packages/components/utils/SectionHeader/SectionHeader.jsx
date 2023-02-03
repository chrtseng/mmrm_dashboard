import React from 'react';
import { Space } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Heading = styled.div(({ fontSize, lineHeight }) => ({
  fontSize: `${fontSize || 20}px`,
  fontWeight: 500,
  lineHeight: `${lineHeight || 23}px`,
  color: '#292929',
}));

const SuffixText = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #888888;
`;

const SectionHeader = ({ children, fontSize, lineHeight, suffix }) => (
  <Space size="middle">
    <Heading fontSize={fontSize} lineHeight={lineHeight}>
      {' '}
      {children}{' '}
    </Heading>
    {suffix && <SuffixText>{suffix}</SuffixText>}
  </Space>
);

SectionHeader.propTypes = {
  children: PropTypes.node,
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  suffix: PropTypes.string,
};

SectionHeader.defaultProps = {
  children: null,
  fontSize: null,
  lineHeight: null,
  suffix: null,
};

export default SectionHeader;

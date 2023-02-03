import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LineBlock = styled.div`
  margin-left: 15px;
  width: 100%;
  height: 1.5px;
  background-color: rgba(21, 73, 134, 0.1);
`;

const Heading = styled.h1`
  font-size: 18px;
  color: #788195;
  font-weight: 500;
  line-height: 40px;
  margin-top: 0px;
  margin-bottom: 0px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 15px;
  white-space: nowrap;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    width: 5px;
    background-color: #e4e6e9;
  }
`;

const PageHeader = ({ children }) => (
  <Heading>
    {children}
    <LineBlock />
  </Heading>
);

PageHeader.propTypes = {
  children: PropTypes.node,
};

PageHeader.defaultProps = {
  children: null,
};

export default PageHeader;

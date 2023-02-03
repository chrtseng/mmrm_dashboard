import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const StyledCard = styled(Card)`
  box-shadow: unset !important;
  display: flex;
  flex-direction: column;

  .ant-card-body {
    border-radius: 8px;
    padding: 32px 36px;
  }
`;

const OverviewCard = () => (
  <StyledCard bordered={false}>
    <div>title , need custom theme</div>
    <div>key - value area</div>
  </StyledCard>
);

export default OverviewCard;

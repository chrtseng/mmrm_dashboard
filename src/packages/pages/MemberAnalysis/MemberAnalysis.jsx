import React from 'react';
import { Space } from 'antd';
import PageHeader from '../../components/utils/PageHeader';
import SectionHeader from '../../components/utils/SectionHeader';

const MemberAnalysis = () => (
  <div>
    <Space direction="vertical" size={20}>
      <PageHeader>會員分析</PageHeader>
      <SectionHeader>顧客分群圖表</SectionHeader>
    </Space>
  </div>
);

export default MemberAnalysis;

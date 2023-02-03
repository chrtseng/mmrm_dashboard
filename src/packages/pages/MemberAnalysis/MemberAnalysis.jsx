import React from 'react';
import { Space, Layout, Row, Col } from 'antd';
import PageHeader from '../../components/utils/PageHeader';
import SectionHeader from '../../components/utils/SectionHeader';
import OverviewCard from '../../components/OverViewCard';

const MemberAnalysis = () => (
  <Layout.Content>
    <Space style={{ width: '100%' }} direction="vertical" size={20}>
      <PageHeader>會員分析</PageHeader>
      <SectionHeader fontSize={20} suffix="最後更新時間： 2023/02/03 23:59:59">
        數據總覽
      </SectionHeader>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={12} lg={6}>
          <OverviewCard />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <OverviewCard />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <OverviewCard />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <OverviewCard />
        </Col>
      </Row>
    </Space>
  </Layout.Content>
);

export default MemberAnalysis;

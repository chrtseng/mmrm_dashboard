import React from 'react';
import { Space, Layout, Row, Col } from 'antd';
import PageHeader from '../../components/Utils/PageHeader';
import SectionHeader from '../../components/Utils/SectionHeader';
import OverviewCard from '../../components/OverviewCard';
import Card from '../../components/Utils/Card';
import PieChart from '../../components/Charts/PieChart';

const MemberAnalysis = () => (
  <Layout.Content>
    <Space style={{ width: '100%' }} direction="vertical" size={20}>
      <PageHeader>會員分析</PageHeader>
      <SectionHeader suffix="最後更新時間： 2023/02/03 23:59:59">數據總覽</SectionHeader>
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
        <Col xs={24} sm={12} lg={6}>
          <OverviewCard />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <OverviewCard />
        </Col>
      </Row>
      <SectionHeader suffix="最後更新時間： 2023/02/03 23:59:59">顧客分群圖表</SectionHeader>
      <Row gutter={[30, 30]}>
        <Col xs={24} sm={12}>
          <Card title="會員性別分布">
            <PieChart />
          </Card>
        </Col>
      </Row>
    </Space>
  </Layout.Content>
);

export default MemberAnalysis;

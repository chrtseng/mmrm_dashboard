import React from 'react';
// import PropTypes from 'prop-types';
import { Typography } from 'antd';
import Style from './overviewCard.module.css';

const OverviewCard = () => (
  <div className={Style.overview_card_wrap}>
    <div className={Style.overview_card_title}>交易金額</div>
    <div className={Style.overview_card_statistics}>112,893</div>
    <div className={Style.overview_card_keyValueWrap}>
      <div className={Style.overview_card_keyValue}>
        <span>增長率</span>
        <Typography.Text type="success">70.5%</Typography.Text>
      </div>
      <div className={Style.overview_card_keyValue}>
        <span>增長率</span>
        <Typography.Text type="danger">70.5%</Typography.Text>
      </div>
    </div>
  </div>
);

// OverviewCard.propTypes = {

// };

// OverviewCard.defaultProps = {

// }

export default OverviewCard;

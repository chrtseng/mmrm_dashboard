/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Card as AntdCard } from 'antd';
import Style from './card.module.css';

const Card = (props) => {
  const { title, children, ...rest } = props;

  return (
    <AntdCard {...rest}>
      <h5 className={Style.chart_card_title}>{title}</h5>
      {children}
    </AntdCard>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  title: null,
  children: null,
};

export default Card;

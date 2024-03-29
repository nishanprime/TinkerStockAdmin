import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { LI, UL } from '../../../../AbstractElements';
import { ContextualClasses } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const ContextualClass = () => {
  return (
    <Col sm="12" xl="12">
      <Card>
        <HeaderCard title={ContextualClasses} />
        <CardBody>
          <UL>
            <LI attrLI={{ className: 'list-group-item' }} >{'Dapibus ac facilisis in'}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-primary' }}  >{'This is a primary list group item'}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-secondary' }} >{'This is a secondary list group item'}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-success' }}  >{'This is a success list group item'}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-danger' }}  >{'This is a danger list group item'}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-warning' }}  >{'This is a warning list group item'}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-info' }}  >{'This is a info list group item'}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-light' }}  >{'This is a light list group item'}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-dark' }}  >{'This is a dark list group item'}</LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextualClass;

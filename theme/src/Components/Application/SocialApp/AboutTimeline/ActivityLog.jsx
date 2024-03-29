import React, { Fragment } from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import { ActivityLog } from '../../../../Constant';
import { H5, H6 } from '../../../../AbstractElements';
import Activity from '../Common/Activity';

const ActivityLogg = () => {
    return (
        <Fragment>
            <Col sm="12" >
                <Card>
                    <CardHeader>
                        <H5>{ActivityLog}</H5>
                    </CardHeader>
                    <CardBody>
                        <div className="activity-log">
                            <div className="my-activity">
                                <H6 attrH6={{ className: 'f-w-600' }}>{'Today'}</H6>
                                <Activity />
                            </div>
                            <div className="my-activity">
                                <Activity />
                            </div>
                            <div className="my-activity">
                                <H6 attrH6={{ className: 'f-w-600' }}>{'8 september'}</H6>
                                <Activity />
                            </div>
                            <div className="my-activity">
                                <H6 attrH6={{ className: 'f-w-600' }}>{'6 June'}</H6>
                                <Activity />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment >
    );
};
export default ActivityLogg;
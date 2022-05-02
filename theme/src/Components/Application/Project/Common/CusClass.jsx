import React from 'react';
import { Col, Row, Progress } from 'reactstrap';
import { H6, Image, LI, P, UL } from '../../../../AbstractElements';
import { Issues, Resolved, Comment, Done } from '../../../../Constant';

const CusClass = ({ item }) => {
    return (
        <Col className="col-xxl-4" lg="6">
            <div className="project-box">
                <span className={`badge ${item.badge === 'Done' ? 'badge-secondary' : 'badge-success'}`}>{item.badge}</span>
                <H6>{item.title}</H6>
                <div className="media">
                    <Image attrImage={{ className: 'img-20 me-1 rounded-circle', src: `${require(`../../../../assets/images/${item.img}`)}`, alt: '' }} />
                    <div className="media-body">
                        <P>{item.sites}</P>
                    </div>
                </div>
                <P>{item.desc}</P>
                <Row className="details">
                    <Col xs="6"><span>{Issues} </span></Col>
                    <Col xs="6" className={item.badge === 'Done' ? 'font-secondary' : 'font-primary'}>{item.issue}</Col>
                    <Col xs="6"> <span>{Resolved}</span></Col>
                    <Col xs="6" className={item.badge === 'Done' ? 'font-secondary' : 'font-primary'}>{item.resolved}</Col>
                    <Col xs="6"> <span>{Comment}</span></Col>
                    <Col xs="6" className={item.badge === 'Done' ? 'font-secondary' : 'font-primary'}>{item.comment}</Col>
                </Row>
                <div className="customers">
                    <UL>
                        <LI attrLI={{ className: 'd-inline-block' }}>
                            <Image attrImage={{ className: 'img-30 rounded-circle', src: `${require(`../../../../assets/images/${item.customers_img1}`)}`, alt: '' }} />
                        </LI>
                        <LI attrLI={{ className: 'd-inline-block' }}>
                            <Image attrImage={{ className: 'img-30 rounded-circle', src: `${require(`../../../../assets/images/${item.customers_img2}`)}`, alt: '' }} />
                        </LI>
                        <LI attrLI={{ className: 'd-inline-block' }}>
                            <Image attrImage={{ className: 'img-30 rounded-circle', src: `${require(`../../../../assets/images/${item.customers_img3}`)}`, alt: '' }} />
                        </LI>
                        <LI attrLI={{ className: 'd-inline-block ms-2' }}>
                            <p className="f-12">{`+${item.like} More`}</p>
                        </LI>
                    </UL>
                </div>
                <div className="project-status mt-4">
                    <div className="media mb-0">
                        <P>{item.progress}% </P>
                        <div className="media-body text-end"><span>{Done}</span></div>
                    </div>
                    {item.progress === '100' ?
                        <Progress className="sm-progress-bar" color="secondary" value={item.progress} style={{ height: '5px' }} />
                        :
                        <Progress className="sm-progress-bar" striped color="success" value={item.progress} style={{ height: '5px' }} />
                    }
                </div>
            </div>
        </Col>

    );
};

export default CusClass;

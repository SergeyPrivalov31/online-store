import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import { DEVICE_ROUTE, SHOP_ROUTE } from "../utils/consts";
import star from '../assets/star.png'

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();
  return (
    <Col md={3} className="mt-3" onClick={() => navigate(DEVICE_ROUTE + '/' + device.id, { replace: true })}>
      <Card style={{ width: 150, cursor: "pointer", padding: '5px' }}  border="light">
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
        <div className="text-black-50 mt-1 d-flex justify-content-between alighn-items-center">
          <div>{device.name}</div>
          <div className='d-flex align-items-center'>
                <div>{device.raiting}</div>
                <Image width={18} height={18} src={star} />
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;

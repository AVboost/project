import React from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import star from '../assets/star.png'
import { useNavigate } from "react-router-dom"
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
	const history = useNavigate()
	return (
		<Col md={3} className="mt-3" onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
			<Card style={{ width: 150, cursor: 'pointer' }} border="light">
				<Image width={150} src={process.env.REACT_APP_API_URL + device.img} />
				<div className="text-black-50 d-flex justify-content-between align-items-center mt-1">
					<div>Apple</div>
					<div className="d-flex align-items-center">
						<div>{device.rating}</div>
						<Image src={star} width={18} height={18} />
					</div>

				</div>
				<div>{device.name}</div>
			</Card>
		</Col>
	);
};

export default DeviceItem;
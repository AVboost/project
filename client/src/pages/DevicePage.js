import bigStar from "../assets/bigStar.png"
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { fetchOndeDevice } from "../http/deviceAPI";

const DevicePage = () => {
	const [device, setDevice] = useState({info: []})
	const {id} = useParams()
	useEffect(() => {
		fetchOndeDevice(id).then(data => setDevice(data))
	}, [])

	// const device = { id: 1, name: "iphone 15 pro", price: 1200, rating: 5, img: 'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Black_Titanium_PDP_Image_Position-1__en-IN_ad326452-186a-484a-99a4-82dc80c280fb.jpg?v=1694759404' }
	// const description = [
	// 	{ id: 1, title: 'Дисплей', description: `6.1" (2556x1179), 2K QHD, OLED` },
	// 	{ id: 2, title: 'Разрешение основной камеры', description: '48 МП' },
	// 	{ id: 3, title: 'Разрешение фронтальной камеры', description: '12 МП' },
	// 	{ id: 4, title: 'Процессор', description: 'Apple A17 Pro' },
	// 	{ id: 5, title: 'Характеристики процессора', description: '6-ядерный CPU: 2 производительных и 4 энергоэффективных ядра; 6-ядерный Apple GPU; 16-ядерный сопроцессор Neural Engine' },
	// 	{ id: 6, title: 'Встроенная память', description: '128 ГБ' },
	// ]
	return (
		<Container className="mt-3">
			<Row>
				<Col md={4}>
					<Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
				</Col>
				<Col md={4}>
					<Row className="d-flex flex-column align-middle">
						<h2>{device.name}</h2>
						<div
							className="d-flex align-items-center justify-content-center"
							style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 60 }}
						>
							{device.rating}
						</div>
					</Row>
				</Col>
				<Col md={4}>
					<Card
						className="d-flex flex-column align-items-center justify-content-around"
						style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
					>
						<h3>От: {device.price} $</h3>
						<Button variant="outline-dark">Добавить в корзину</Button>
					</Card>
				</Col>
			</Row>
			<Row className="d-flex flex-column m-3">
				<h1>Характеристики</h1>
				{device.info.map((info, index) =>
					<Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
						{info.title}: {info.description}
					</Row>	
				)}
			</Row>

		</Container>
	);
};

export default DevicePage;

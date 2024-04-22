import React, { useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const BrandBar = observer(() => {
	const { device } = useContext(Context)

	return (
		<Row className="d-flex">
			{device.brands.map(brand =>
				<Col>
					<Card
						key={brand.id}
						className="p-3"
						style={{ cursor: 'pointer' }}
						onClick={() => device.setSelectedBrand(brand)}
						border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
					>
						{brand.name}
					</Card>
				</Col>
			)}
		</Row>
	);
});

export default BrandBar;

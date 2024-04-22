import React, { useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite"
import Row from 'react-bootstrap/Row';
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
	const { device } = useContext(Context)
	// debugger;
	return (
		<Row className="d-flex">
			{device.devices.map(device =>
				<DeviceItem key={device.id} device={device} />
			)}
		</Row>
	);
});

export default DeviceList;
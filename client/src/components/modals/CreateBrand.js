import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { createBrand } from "../../http/deviceAPI";

const CreateBrand = ({ show, onHide }) => {
	const [value, setValue] = useState('')

	const addBrand = () => {
		createBrand({ name: value }).then(data => {
			setValue('')
			onHide()
		})
	}
	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Add new brand
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						value={value}
						onChange={e => setValue(e.target.value)}
						placeholder="введите название девайса"
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outrline-danger" onClick={onHide}>Close</Button>
				<Button variant="outrline-green" onClick={addBrand}>Add</Button>
			</Modal.Footer>
		</Modal>
	)
};

export default CreateBrand;
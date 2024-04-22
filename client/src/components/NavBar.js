import React, { useContext } from "react";
import { Context } from "..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import Button from 'react-bootstrap/Button';
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom"


const NavBar = observer(() => {
	const { user } = useContext(Context)
	const history = useNavigate()

	const logOut = () => {
		user.setUser({})
		user.setIsAuth(false)
	}

	return (
		<Navbar bg="dark" data-bs-theme="dark">
			<Container>
				<NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>Shop</NavLink>
				{user.isAuth ?
					<Nav className="ml-auto">
						<Button
							variant="dark"
							onClick={() => history(ADMIN_ROUTE)}
						>
							Админ
						</Button>
						<Button
							variant="dark"
							onClick={() => logOut()}
							className="ml-2"
						>
							Выйти
						</Button>
					</Nav>
					:
					<Nav className="ml-auto">
						<Button variant="dark" onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>
					</Nav>
				}
			</Container>
		</Navbar>
	)
})

export default NavBar;

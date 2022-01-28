import ironLogo from '../img/ironhack-logo-xs.png';
import menu from '../img/menu-top-xs.png'

function Header() {
	return (
		<>
			<img src={ironLogo} width={75}/>
			<img src={menu} width={40}/>
		</>
		)
}

export default Header;
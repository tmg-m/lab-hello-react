import logo from '../logo.svg'

function BgImag() {
	return (
		<>
			<img className="bg-img-controller img-L" src={logo} /> {/* Large */}
			<img className="bg-img-controller img-M img-M1" src={logo} /> {/* Medium */}
			<img className="bg-img-controller img-M img-M2" src={logo} /> {/* Medium */}
			<img className="bg-img-controller img-S img-S1" src={logo} /> {/* Small */}
			<img className="bg-img-controller img-S img-S2" src={logo} /> {/* Small */}
			<img className="bg-img-controller img-S img-S3" src={logo} /> {/* Small */}
		</>
	)
}

export default BgImag;
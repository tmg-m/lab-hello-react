import icon1 from '../img/icon1.png'
import icon2 from '../img/icon2.png'
import icon3 from '../img/icon3.png'
import icon4 from '../img/icon4.png'



function Card(feature) {
	let icon;
	let title;
	let discription;

	if (feature.name == "declarative") {
		icon = icon1;
		title = "Declarative";
		discription = "React makes it panless to create interactive UI's.";
	} else if (feature.name === "components") {
		icon = icon2;
		title = "Components"
		discription = "Build encapsulated components that manage their state.";
	} else if (feature.name === "single-way") {
		icon = icon3;
		title = "Single-Way";
		discription = "A set of immutable values are passed to the component's.";
	} else if (feature.name === "jsx") {
		icon = icon4;
		title = "JSX";
		discription = "Statically-typed, designed to run on modern browsers.";
	}
	return (
		<div className='card-layout'>
			<img src={icon} />
			<div>
				<h1>{title}</h1>
				<p>{discription}</p>
			</div>
		</div>
	)
}

export default Card;
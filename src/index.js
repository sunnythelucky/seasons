import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// const App = () => {
// 	window.navigator.geolocation.getCurrentPosition((position) => console.log(position), (err) => console.log(err));

// 	return <div>Latitude: </div>;
// };

class App extends React.Component {
	//JS initialize the state -> Constructor

	// constructor(props) {
	// 	super(props);
	// 	//this is the only time we do direct assignment to this.state
	// 	this.state = { lat: null, errorMessage: "" };
	// }

	state = { lat: null, errorMessage: "" };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}
		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}
		return <Spinner />;
	}

	// componentDidUpdate() {}

	// React says we have to define render!!!
	// just do JSX ** return **
	render() {
		return <div className="border gray">{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

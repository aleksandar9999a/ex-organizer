import ExF, { Component, CustomElement } from 'exf-ts';

@CustomElement({
	selector: 'exf-app'
})
export class App extends Component {

	render() {
		return (
			<div>
				<exf-header />
			</div>
		)
	}
}
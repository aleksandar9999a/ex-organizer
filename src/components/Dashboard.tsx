import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
  selector: 'exf-dashboard',
  dependencyInjection: true
})
export class Dashboard extends Component {
	render() {
		return (
      <div>
        dashboard
      </div>
		)
	}
}
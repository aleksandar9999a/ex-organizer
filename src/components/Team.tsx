import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
  selector: 'exf-team',
  dependencyInjection: true
})
export class Team extends Component {
	render() {
		return (
      <div>
        team
      </div>
		)
	}
}
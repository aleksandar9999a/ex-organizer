import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
  selector: 'exf-projects',
  dependencyInjection: true
})
export class Projects extends Component {
	render() {
		return (
      <div>
        projects
      </div>
		)
	}
}
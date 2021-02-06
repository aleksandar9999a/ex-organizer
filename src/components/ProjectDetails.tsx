import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
  selector: 'exf-project-details',
  dependencyInjection: true
})
export class ProjectDetails extends Component {
	render() {
		return (
      <div>
        project details
      </div>
		)
	}
}
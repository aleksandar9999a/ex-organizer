import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
  selector: 'exf-project-create',
  dependencyInjection: true
})
export class ProjectCreate extends Component {
	render() {
		return (
      <div>
        project create
      </div>
		)
	}
}
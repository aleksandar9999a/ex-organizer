import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
  selector: 'exf-task-details',
  dependencyInjection: true
})
export class TaskDetails extends Component {
	render() {
		return (
      <div>
        task details
      </div>
		)
	}
}
import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
  selector: 'exf-task-create',
  dependencyInjection: true
})
export class TaskCreate extends Component {
	render() {
		return (
      <div>
        task create
      </div>
		)
	}
}
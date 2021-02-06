import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
  selector: 'exf-tasks',
  dependencyInjection: true
})
export class Tasks extends Component {
	render() {
		return (
      <div>
        tasks
      </div>
		)
	}
}
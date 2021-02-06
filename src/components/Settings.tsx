import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
  selector: 'exf-settings',
  dependencyInjection: true
})
export class Settings extends Component {
	render() {
		return (
      <div>
        settings
      </div>
		)
	}
}
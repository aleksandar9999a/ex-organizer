import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
  selector: 'exf-profile',
  dependencyInjection: true
})
export class Profile extends Component {
	render() {
		return (
      <div>
        profile
      </div>
		)
	}
}
import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
  selector: 'exf-footer',
  dependencyInjection: true
})
export class Footer extends Component {
  stylize () {
    return (
      <styles>
        <style>
          .footer {
            {
              background: '#00c292',
              padding: '.7rem',
              'text-align': 'center',
              color: '#fff'
            }
          }
        </style>
      </styles>
    )
  }

	render() {
		return (
      <footer className="footer">
        ExO - by Alexander Todorov
      </footer>
		)
	}
}
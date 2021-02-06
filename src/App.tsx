import ExF, { Component, CustomElement } from 'exf-ts';

@CustomElement({
	selector: 'exf-app'
})
export class App extends Component {
	stylize () {
		return (
			<style>
				.app {
					{
						'.app__inner': {
							display: 'flex',
							'min-height': '100vh',
						},

						'.app__content': {
							width: '100%'
						},

						'.app__container': {
							padding: '1rem',
							'min-height': '100%',
						}
					}
				}
			</style>
		)
	}

	render() {
		return (
			<div className="app">
				<div className="app__inner">
					<div>
						<exf-sidebar />
					</div>

					<div className="app__content">
						<exf-header />

						<exf-breadcrumb />

						<div className="app__container">
							Template
						</div>
					</div>
				</div>

				<exf-footer />
			</div>
		)
	}
}
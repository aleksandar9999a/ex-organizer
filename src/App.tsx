import { IRoute } from 'exf-router/lib/interfaces/interfaces';
import ExF, { Component, CustomElement } from 'exf-ts';
import { RoutesController } from './controllers/Routes';

@CustomElement({
	selector: 'exf-app',
	dependencyInjection: true
})
export class App extends Component {
	routes: IRoute[] = [];

	constructor (private routesController: RoutesController) {
		super();
		this.routes = this.routesController.routes;
	}
	
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
							padding: '1rem'
						}
					}
				}

				@media screen and (max-width: 700px) {
          {
            '.app': {
							'.app__container': {
								padding: '1rem'
							}
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

						<exf-page-title />

						<div className="app__container">
							<exf-router routes={this.routes} />
						</div>
					</div>
				</div>

				<exf-footer />
			</div>
		)
	}
}
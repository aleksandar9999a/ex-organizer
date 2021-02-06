import { IRoute } from 'exf-router/lib/interfaces/interfaces';
import ExF, { Component, CustomElement } from 'exf-ts';

@CustomElement({
	selector: 'exf-app'
})
export class App extends Component {
	routes: IRoute[] = [
		{
			component: 'exf-dashboard',
			path: '/'
		},
		{
			component: 'exf-projects',
			path: '/projects'
		},
		{
			component: 'exf-project-create',
			path: '/project/create'
		},
		{
			component: 'exf-project-details',
			path: '/project/details/:id'
		},
		{
			component: 'exf-tasks',
			path: '/tasks'
		},
		{
			component: 'exf-task-create',
			path: '/task/create'
		},
		{
			component: 'exf-task-details',
			path: '/task/details/:id'
		},
		{
			component: 'exf-team',
			path: '/team'
		},
		{
			component: 'exf-profile',
			path: '/profile'
		},
		{
			component: 'exf-settings',
			path: '/settings'
		}
	]

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
							<exf-router routes={this.routes} />
						</div>
					</div>
				</div>

				<exf-footer />
			</div>
		)
	}
}
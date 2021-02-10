import ExF, { Component, CustomElement, State } from 'exf-ts';


@CustomElement({
  selector: 'exf-dashboard',
  dependencyInjection: true
})
export class Dashboard extends Component {
  stylize () {
    return (
      <style>
        .dashboard {
          {
            '.dashboard__content': {
              display: 'flex',
              'flex-wrap': 'wrap',
              width: '100%'
            },

            '.dashboard__entity': {
              transition: 'width .3s',
              flex: '0 0 calc(50% - 0.5rem)',
              margin: '0 0.5rem'
            },

            '.dashboard__entity:first-child': {
              'margin-left': 0
            },

            '.dashboard__entity:last-child': {
              'margin-right': 0
            }
          }
        }

        @media screen and (max-width: 700px) {
          {
            '.dashboard': {
              '.dashboard__entity': {
                flex: '0 0 100%',
                margin: '0 0 1rem'
              }
            }
          }
        }
      </style>
    )
  }

	render() {
		return (
      <div className="dashboard">
        <div className="dashboard__content">
          <div className="dashboard__entity">
            <exf-projects-table />
          </div>

          <div className="dashboard__entity">
            <exf-tasks-table />
          </div>
        </div>
      </div>
		)
	}
}
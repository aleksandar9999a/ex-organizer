import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
  selector: 'exf-task-create',
  dependencyInjection: true
})
export class TaskCreate extends Component {
	stylize () {
    return (
      <styles>
        <style>
          .task {
            {
              display: 'flex',
              'flex-wrap': 'wrap',

              '.task__main': {
                flex: '0 0 calc(35% - 1rem)',
                'margin-right': '1rem',
                'margin-bottom': '1rem',
                'min-height': '400px'
              },

              '.task__details': {
                flex: '0 0 65%',
                'margin-bottom': '1rem',
                'min-height': '400px'
              }
            }
          }
        </style>

        <style>
          @media screen and (max-width: 700px) {
            {
              '.task': {
                '.task__main': {
                  flex: '0 0 100%'
                },

                '.task__details': {
                  flex: '0 0 100%'
                }
              }
            }
          }
        </style>
      </styles>
    )
  }
	render() {
		return (
      <div className="task">
        <div className="task__main">
          <div className="card">
            <h3>Main</h3>
          </div>
        </div>

        <div className="task__details">
          <div className="card">
            <h3>Details</h3>
          </div>
        </div>
      </div>
		)
	}
}
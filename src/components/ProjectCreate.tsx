import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
  selector: 'exf-project-create',
  dependencyInjection: true
})
export class ProjectCreate extends Component {
  stylize () {
    return (
      <styles>
        <style>
          .project {
            {
              display: 'flex',
              'flex-wrap': 'wrap',

              '.project__main': {
                flex: '0 0 calc(35% - 1rem)',
                'margin-right': '1rem',
                'margin-bottom': '1rem',
                'min-height': '400px'
              },

              '.project__details': {
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
              '.project': {
                '.project__main': {
                  flex: '0 0 100%'
                },

                '.project__details': {
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
      <div className="project">
        <div className="project__main">
          <div className="card">
            <h3>Main</h3>
          </div>
        </div>

        <div className="project__details">
          <div className="card">
            <h3>Details</h3>
          </div>
        </div>
      </div>
		)
	}
}
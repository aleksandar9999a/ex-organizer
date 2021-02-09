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
              padding: '0 0.5rem 0.5rem',
              display: 'flex',
              'flex-wrap': 'wrap',

              '.project__main': {
                flex: '0 0 calc(35% - 2rem)',
                'margin-right': '2rem',
                'margin-bottom': '2rem',
                'min-height': '400px'
              },

              '.project__details': {
                flex: '0 0 65%',
                'margin-bottom': '2rem',
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
import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
  selector: 'exf-profile',
  dependencyInjection: true
})
export class Profile extends Component {
	stylize () {
    return (
      <styles>
        <style>
          .profile {
            {
              display: 'flex',
              'flex-wrap': 'wrap',

              '.profile__main': {
                flex: '0 0 calc(35% - 1rem)',
                'margin-right': '1rem',
                'margin-bottom': '1rem',
                'min-height': '400px'
              },

              '.profile__details': {
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
              '.profile': {
                '.profile__main': {
                  flex: '0 0 100%'
                },

                '.profile__details': {
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
      <div className="profile">
        <div className="profile__main">
          <div className="card">
            <h3>Profile</h3>
          </div>
        </div>

        <div className="profile__details">
          <div className="card">
            <h3>Company</h3>
          </div>
        </div>
      </div>
		)
	}
}
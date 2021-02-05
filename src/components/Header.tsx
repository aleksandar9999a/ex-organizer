import ExF, { Component, CustomElement } from 'exf-ts';
import { openClose, SidebarController } from '../controllers/SidebarCotroller';


@CustomElement({
  selector: 'exf-header',
  dependencyInjection: true
})
export class Header extends Component {
  constructor (private sidebarController: SidebarController) {
    super();
  }

  openClose = () => {
    openClose()
  }

  stylize () {
    return (
      <styles>
        <style>
          .navbar {
            {
              background: '#00c292',
          
              ul: {
                display: 'flex',
                width: '100%',
                'justify-content': 'space-between',
                'list-style': 'none',
                padding: '0',
          
                a: {
                  color: '#fff',
                  'text-decoration': 'none'
                },
          
                li: {
                  padding: '1rem',
                  transition: 'background .2s'
                },
          
                'li:hover': {
                  background: 'rgba(0,0,0,.1)'
                }
              },

              '.navbar__menu': {
                background: 'transparent',
                cursor: 'pointer',
                
                'div': {
                  width: '15px',
                  height: '1px',
                  'background-color': '#fff',
                  margin: '4px 0',
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
      <nav className="navbar">
        <ul>
          <li>
            <button
              className="navbar__menu"
              onClick={this.openClose}
            >
              <div></div>
              <div></div>
              <div></div>
            </button>
          </li>

          <li>
            <a href="#">
              Log Out
            </a>
          </li>
        </ul>
      </nav>
		)
	}
}
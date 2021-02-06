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
              background: '#00926e',
              display: 'flex',
              width: '100%',
              'justify-content': 'space-between',
              padding: '0',

              a: {
                display: 'inline-block',
                color: '#fff',
                'text-decoration': 'none',
                padding: '1rem',
                transition: 'background .2s'
              },
              
              'a:hover': {
                background: 'rgba(0,0,0,.1)'
              },
            }
          }

          .menu {
            {
              background: 'transparent',
              transition: 'background .2s',
              padding: '1rem',
              cursor: 'pointer',
              
              'div': {
                width: '15px',
                height: '1px',
                'background-color': '#fff',
                margin: '4px 0',
              }
            }
          }

          .menu:hover {
            {
              background: 'rgba(0,0,0,.1)'
            }
          }
        </style>
      </styles>
    )
  }

	render() {
		return (
      <nav className="navbar">
        <div className="navbar__start">
          <button
            className="menu"
            onClick={this.openClose}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>

        <div className="navbar__end">
          <button className="btn">
            <i className="fas fa-bell" />
          </button>

          <a href="#">
            <i className="fas fa-sign-out-alt" />
          </a>
        </div>
      </nav>
		)
	}
}
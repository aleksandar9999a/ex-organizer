import ExF, { Component, CustomElement } from 'exf-ts';
import { NavbarStyles } from '../styles/NavbarStyles';


@CustomElement({
  selector: 'exf-header',
  dependencyInjection: true
})
export class Header extends Component {
  constructor (private navbarStyles: NavbarStyles) {
    super();
  }

  stylize () {
    return (
      <styles>
        <style>
          .navbar {
            { ...this.navbarStyles.style }
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
            <a className="navbar__menu" href="#">
              <div></div>
              <div></div>
              <div></div>
            </a>
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
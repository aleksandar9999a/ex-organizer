import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
	selector: 'exf-header'
})
export class Header extends Component {
	render() {
		return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav d-flex justify-content-between w-100">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Menu
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Log Out
            </a>
          </li>
        </ul>
      </nav>
		)
	}
}
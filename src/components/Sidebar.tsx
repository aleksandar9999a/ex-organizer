import ExF, { Component, CustomElement, State } from 'exf-ts';
import { isOpenSidebar, SidebarController } from '../controllers/SidebarCotroller';


@CustomElement({
  selector: 'exf-sidebar',
  dependencyInjection: true
})
export class Sidebar extends Component {
  @State()
  isOpenSidebar: boolean = true;

  constructor (private sidebarController: SidebarController) {
    super();

    isOpenSidebar.subscribe(val => {
      this.isOpenSidebar = val;
    })
  }

  stylize () {
    return (
      <style>
        .sidebar {
          {
            background: '#1a2229',
            height: '100%',
            width: this.isOpenSidebar
              ? '220px'
              : '50px',
            transition: 'width .5s'
          }
        }

        @media screen and (max-width: 700px) {
          {
            '.sidebar': {
                'width': this.isOpenSidebar
                ? '200px'
                : '0'
            }
          }
        }
      </style>
    )
  }

	render() {
		return (
      <div className="sidebar">
        {this.isOpenSidebar ? 'template' : 'sidebar'}
      </div>
		)
	}
}
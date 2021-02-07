import ExF, { Component, CustomElement, State } from 'exf-ts';
import { Subscription } from 'rxjs';
import { RoutesController } from '../../controllers/Routes';
import { isOpenSidebar, SidebarController } from '../../controllers/SidebarCotroller';
import './../../assets/logo.png';

@CustomElement({
  selector: 'exf-sidebar',
  dependencyInjection: true
})
export class Sidebar extends Component {
  @State()
  isOpenSidebar: boolean = false;

  subscriber: Subscription;

  constructor (
    private sidebarController: SidebarController,
    private routesController: RoutesController
  ) {
    super();

    this.subscriber = isOpenSidebar.subscribe(val => {
      this.isOpenSidebar = val;
    })
  }

  onDestroy () {
    this.subscriber.unsubscribe();
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
              : '70px',
            transition: 'width .5s',

            '.logo': {
              transition: 'padding .5s',
              'padding-left': this.isOpenSidebar
                ? '0.5rem'
                : '0.75rem'
            },

            h1: {
              transition: 'opacity .1s, left .3s',
              opacity: this.isOpenSidebar
                ? '1'
                : '0',
              left: this.isOpenSidebar
                ? '60px'
                : '-100px'
            },

            ul: {
              'list-style': 'none'
            },

            '.sidebar__content': {
              margin: '1rem 0'
            }
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
        <div className="logo">
          <img src="src/assets/logo.png" alt=""/>

          <h1>Ex-Organizer</h1>
        </div>

        <div className="sidebar__content">
          <ul>
            {this.routesController.tabs.map(tab => {
              return (
                <exf-sidebar-tab
                  id={tab.id}
                  data={tab}
                />
              )
            })}
          </ul>
        </div>
      </div>
		)
	}
}
import ExF, { Component, CustomElement, State } from 'exf-ts';
import { isOpenSidebar, SidebarController } from '../../controllers/SidebarCotroller';
import { ITab } from '../../interfaces/interfaces';
import './../../assets/logo.png';

@CustomElement({
  selector: 'exf-sidebar',
  dependencyInjection: true
})
export class Sidebar extends Component {
  @State()
  isOpenSidebar: boolean = true;
  tabs: ITab[] = [
    {
      id: 'dashboar',
      title: 'Dashboard',
      pathname: '/',
      icon: 'fas fa-columns'
    },
    {
      id: 'projects',
      title: 'Projects',
      icon: 'fas fa-calendar',
      tabs: [
        {
          id: 'projects_search',
          pathname: '/projects',
          title: 'Search'
        },
        {
          id: 'projects_create',
          pathname: '/project/create',
          title: 'Create Project'
        }
      ]
    },
    {
      id: 'tasks',
      icon: 'fas fa-tasks',
      title: 'Tasks',
      tabs: [
        {
          id: 'tasks_search',
          pathname: '/tasks',
          title: 'Search'
        },
        {
          id: 'tasks_create',
          pathname: '/task/create',
          title: 'Create Task'
        }
      ]
    },
    {
      id: 'team',
      icon: 'fas fa-users',
      pathname: '/team',
      title: 'Team'
    },
    {
      id: 'profile',
      icon: 'fas fa-user',
      pathname: '/profile',
      title: 'Profile'
    },
    {
      id: 'settings',
      icon: 'fas fa-cog',
      pathname: '/settings',
      title: 'Settings'
    }
  ]

  @State()
  activeTab: ITab = {
    id: 'dashboard',
    title: 'Dashboard',
    pathname: '/'
  }

  constructor (private sidebarController: SidebarController) {
    super();

    isOpenSidebar.subscribe(val => {
      this.isOpenSidebar = val;
    })
  }

  handleRoute (tab: ITab) {
    if (!tab.pathname) {
      return;
    }

    window.history.pushState(null, '', tab.pathname);
    window.dispatchEvent(new Event('locationchange'));
    this.activeTab = tab;
  }

  handleOutsideRouteChange = (tab: ITab) => {
    this.activeTab = tab;
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
            {this.tabs.map(tab => {
              return (
                <div onClick={() => this.handleRoute(tab)}>
                  <exf-sidebar-tab
                    id={tab.id}
                    data={tab}
                    isActive={this.activeTab.id === tab.id}
                    onClick={(data: ITab) => this.handleOutsideRouteChange(data)}
                  />
                </div>
              )
            })}
          </ul>
        </div>
      </div>
		)
	}
}
import { IRoute } from 'exf-router/lib/interfaces/interfaces';
import { Injectable } from 'exf-ts';
import { match } from 'path-to-regexp';
import { BehaviorSubject } from 'rxjs';
import { ITab } from '../interfaces/interfaces';


@Injectable()
export class RoutesController {
  routes: IRoute[];
  tabs: ITab[];
  
  currentRoute: BehaviorSubject<IRoute | undefined>;
  currentTab: BehaviorSubject<ITab>;

  constructor () {
    this.tabs = [
      {
        id: 'dashboard',
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

    this.routes = [
      {
        title: 'Dashboard',
        component: 'exf-dashboard',
        path: '/'
      },
      {
        title: 'Projects',
        component: 'exf-projects',
        path: '/projects'
      },
      {
        title: 'Create Project',
        component: 'exf-project-create',
        path: '/project/create'
      },
      {
        title: 'Project',
        component: 'exf-project-details',
        path: '/project/details/:id'
      },
      {
        title: 'Tasks',
        component: 'exf-tasks',
        path: '/tasks'
      },
      {
        title: 'Create Task',
        component: 'exf-task-create',
        path: '/task/create'
      },
      {
        title: 'Task',
        component: 'exf-task-details',
        path: '/task/details/:id'
      },
      {
        title: 'Team',
        component: 'exf-team',
        path: '/team'
      },
      {
        title: 'Profile',
        component: 'exf-profile',
        path: '/profile'
      },
      {
        title: 'Settings',
        component: 'exf-settings',
        path: '/settings'
      }
    ];


    this.currentRoute = new BehaviorSubject(this.findRoute());
    this.currentTab = new BehaviorSubject(this.findTab() as ITab);

    window.addEventListener('locationchange', () => {
      const route = this.findRoute();
      this.currentRoute.next(route);
    });

    window.addEventListener('locationchange', () => {
      const tab = this.findTab();
      this.currentTab.next(tab as ITab);
    });
  }

  pushRoute (path: string) {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new Event('locationchange'));

    return this.routes.find(route => {
      const matchFn = match(route.path, { decode: decodeURIComponent });
      return matchFn(path);
    })
  }

  findTab () {
    const pathname = window.location.pathname;

    return this.tabs.find(tab => {
      if (!tab.pathname) {
        return (tab.tabs || []).find(child => {
          const matchFn = match(child.pathname as string, { decode: decodeURIComponent });
          return matchFn(pathname);
        });
      }

      const matchFn = match(tab.pathname, { decode: decodeURIComponent });
      return matchFn(pathname);
    })
  }

  findRoute () {
    const pathname = window.location.pathname;

    return this.routes.find(route => {
      const matchFn = match(route.path, { decode: decodeURIComponent });
      return matchFn(pathname);
    })
  }
}
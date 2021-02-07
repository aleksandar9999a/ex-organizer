import { IRoute } from 'exf-router/lib/interfaces/interfaces';
import { Injectable } from 'exf-ts';
import { match } from 'path-to-regexp';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class RoutesController {
  routes: IRoute[];
  
  currentRoute: BehaviorSubject<IRoute | undefined>;

  constructor () {
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

    window.addEventListener('locationchange', () => {
      const route = this.findRoute();
      this.currentRoute.next(route);
    });
  }

  findRoute () {
    const pathname = window.location.pathname;

    return this.routes.find(route => {
      const matchFn = match(route.path, { decode: decodeURIComponent });
      return matchFn(pathname);
    })
  }
}
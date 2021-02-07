export interface ITab {
  id: string | number,
  title: string,
  icon?: string,
  tabs?: ITab[],
  pathname?: string
}

export interface IUser {
  id: string | number,
  name: string
}

export interface ITask {
  id: string | number,
  title: string,
  assign: IUser,
  created: string,
  until: string,
  project: IProject,
  priority: string,
  progress: number
}

export interface IProject {
  id: string | number,
  title: string,
  by: IUser,
  created: string,
  priority: string,
  progress: number
}

export interface IBreadcrumbTab {
  id: string | number,
  title: string,
  path: string
}

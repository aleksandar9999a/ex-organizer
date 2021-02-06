export interface ITab {
  id: string | number,
  title: string,
  icon?: string,
  tabs?: ITab[],
  pathname?: string
}

export interface ITask {
  id: string | number,
  title: string
}

export interface IUser {
  id: string | number,
  name: string
}

export interface IProject {
  id: string | number,
  title: string
}

export interface IProjectTableRow {
  id: string | number,
  task: ITask,
  assign: IUser,
  created: string,
  until: string,
  project: IProject,
  priority: string,
  progress: number
}

export interface ITaskTableRow {
  id: string | number,
  project: IProject,
  by: IUser,
  created: string,
  priority: string,
  progress: number
}

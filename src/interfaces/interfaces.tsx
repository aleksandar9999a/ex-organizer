export interface ITab {
  id: string | number,
  title: string,
  icon?: string,
  tabs?: ITab[],
  pathname?: string
}
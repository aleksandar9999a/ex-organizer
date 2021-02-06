import ExF, { Component, CustomElement, State } from 'exf-ts';
import { IProjectTableRow } from './../interfaces/interfaces';



@CustomElement({
  selector: 'exf-projects-table',
  dependencyInjection: true
})
export class ProjectsTable extends Component {
  @State('state')
  rows: IProjectTableRow[] = [
    {
      id: 1,
      task: {
        id: 1,
        title: 'Start'
      },
      assign: {
        id: 1,
        name: 'Alexander'
      },
      created: 'jan 31 2021',
      until: '-',
      project: {
        id: 1,
        title: 'Ex-Organizer'
      },
      priority: 'high',
      progress: 25
    },
    {
      id: 2,
      task: {
        id: 1,
        title: 'Start'
      },
      assign: {
        id: 1,
        name: 'Alexander'
      },
      created: 'jan 31 2021',
      until: '-',
      project: {
        id: 1,
        title: 'Ex-Organizer'
      },
      priority: 'high',
      progress: 25
    },
    {
      id: 3,
      task: {
        id: 1,
        title: 'Start'
      },
      assign: {
        id: 1,
        name: 'Alexander'
      },
      created: 'jan 31 2021',
      until: '-',
      project: {
        id: 1,
        title: 'Ex-Organizer'
      },
      priority: 'high',
      progress: 25
    }
  ];

  render() {
    return (
      <div className="statistic-table">
        <table>
          <thead>
            <tr>
              <th>
                ID
              </th>

              <th>
                Task
              </th>

              <th>
                Assign
              </th>

              <th>
                Created
              </th>

              <th>
                Until
              </th>

              <th>
                Project
              </th>

              <th>
                Priority
              </th>

              <th>
                Progress
              </th>
            </tr>
          </thead>

          <tbody>
            {
              this.rows.map(({id, task, assign, created, until, project, priority, progress }) => {
                return (
                  <tr id={id}>
                    <td>
                      {id}
                    </td>

                    <td className="statistic-table__extended-cell">
                      {task.title}
                    </td>

                    <td className="statistic-table__extended-cell">
                      {assign.name}
                    </td>

                    <td className="statistic-table__extended-cell">
                      {created}
                    </td>

                    <td className="statistic-table__extended-cell">
                      {until}
                    </td>

                    <td className="statistic-table__extended-cell">
                      {project.title}
                    </td>
                    
                    <td>
                      {priority}
                    </td>
                    
                    <td>
                      {`${progress}%`}
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
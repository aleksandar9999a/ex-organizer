import ExF, { Component, CustomElement, State } from 'exf-ts';
import { IProject } from './../interfaces/interfaces';



@CustomElement({
  selector: 'exf-projects-table',
  dependencyInjection: true
})
export class ProjectsTable extends Component {
  @State('state')
  rows: IProject[] = [
    {
      id: 1,
      title:'Ex-Organizer',
      by: {
        id: 1,
        name: 'Alexander'
      },
      created: 'jan 31 2021',
      priority: 'high',
      progress: 25
    },
    {
      id: 5,
      title: 'Ex-Organizer',
      by: {
        id: 1,
        name: 'Alexander'
      },
      created: 'jan 31 2021',
      priority: 'high',
      progress: 25
    },
    {
      id: 2,
      title: 'Ex-Organizer',
      by: {
        id: 1,
        name: 'Alexander'
      },
      created: 'jan 31 2021',
      priority: 'high',
      progress: 25
    },
    {
      id: 3,
      title: 'Ex-Organizer',
      by: {
        id: 1,
        name: 'Alexander'
      },
      created: 'jan 31 2021',
      priority: 'high',
      progress: 25
    }
  ]

  render() {
    return (
      <div className="statistic-table">
        <h2>Projects</h2>

        <table>
          <thead>
            <tr>
              <th>
                ID
              </th>

              <th>
                Project
              </th>

              <th>
                By
              </th>

              <th>
                Created
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
              this.rows.map(({ id, title, by, created, priority, progress}) => {
                return (
                  <tr id={id}>
                    <td>
                      {id}
                    </td>

                    <td className="statistic-table__extended-cell">
                      {title}
                    </td>

                    <td className="statistic-table__extended-cell">
                      {by.name}
                    </td>

                    <td className="statistic-table__extended-cell">
                      {created}
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
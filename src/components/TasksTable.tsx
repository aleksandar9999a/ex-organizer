import ExF, { Component, CustomElement, State } from 'exf-ts';
import { ITaskTableRow } from '../interfaces/interfaces';


@CustomElement({
  selector: 'exf-tasks-table',
  dependencyInjection: true
})
export class TasksTable extends Component {
  @State('state')
  rows: ITaskTableRow[] = [
    {
      id: 1,
      project: {
        id: 1,
        title: 'Ex-Organizer'
      },
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
      project: {
        id: 1,
        title: 'Ex-Organizer'
      },
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
      project: {
        id: 1,
        title: 'Ex-Organizer'
      },
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
      project: {
        id: 1,
        title: 'Ex-Organizer'
      },
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
              this.rows.map(({ id, project, by, created, priority, progress}) => {
                return (
                  <tr id={id}>
                    <td>
                      {id}
                    </td>

                    <td className="statistic-table__extended-cell">
                      {project.title}
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
import ExF, { Component, CustomElement, State } from 'exf-ts';
import { RoutesController } from '../controllers/Routes';
import { ITask } from '../interfaces/interfaces';

const demoProject = {
  id: 1,
  title:'Ex-Organizer',
  by: {
    id: 1,
    name: 'Alexander'
  },
  created: 'jan 31 2021',
  priority: 'high',
  progress: 25
}

@CustomElement({
  selector: 'exf-tasks-table',
  dependencyInjection: true
})
export class TasksTable extends Component {
  @State('state')
  rows: ITask[] =  [
    {
      id: 1,
      title: 'Start',
      assign: {
        id: 1,
        name: 'Alexander'
      },
      created: 'jan 31 2021',
      until: '-',
      project: demoProject,
      priority: 'high',
      progress: 25
    },
    {
      id: 2,
      title: 'Start',
      assign: {
        id: 1,
        name: 'Alexander'
      },
      created: 'jan 31 2021',
      until: '-',
      project: demoProject,
      priority: 'high',
      progress: 25
    },
    {
      id: 3,
      title: 'Start',
      assign: {
        id: 1,
        name: 'Alexander'
      },
      created: 'jan 31 2021',
      until: '-',
      project: demoProject,
      priority: 'high',
      progress: 25
    }
  ];

  constructor (
    private routesController: RoutesController
  ) {
    super();
  }

	render() {
		return (
      <div className="statistic-table">
        <h2>Tasks</h2>

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
              this.rows.map(({id, title, assign, created, until, project, priority, progress }) => {
                return (
                  <tr id={id} onClick={() => this.routesController.pushRoute(`/task/details/${id}`)}>
                    <td>
                      {id}
                    </td>

                    <td className="statistic-table__extended-cell">
                      {title}
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
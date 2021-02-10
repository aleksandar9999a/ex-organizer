import ExF, { Component, CustomElement } from 'exf-ts';
import { IUser } from '../interfaces/interfaces';


@CustomElement({
  selector: 'exf-team',
  dependencyInjection: true
})
export class Team extends Component {
  rows: IUser[] = [
    {
      id: 1,
      name: 'Alexander'
    }
  ];

	render() {
		return (
      <div className="statistic-table">
        <h2>Members</h2>

        <table>
          <thead>
            <tr>
              <th>
                ID
              </th>

              <th>
                Name
              </th>
            </tr>
          </thead>

          <tbody>
            {
              this.rows.map(({ id, name }) => {
                return (
                  <tr id={id}>
                    <td>
                      {id}
                    </td>

                    <td className="statistic-table__extended-cell">
                      {name}
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
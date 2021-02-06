import ExF, { Component, CustomElement, Prop } from 'exf-ts';


@CustomElement({
  selector: 'exf-chart',
  dependencyInjection: true
})
export class Chart extends Component {
  @Prop('state')
  type: string = 'line';

  @Prop('state')
  data: [string | number, string | number][] = [];

  stylize () {
    return (
      <style>
        div {
          {
            height: '200px',
            width: '100%'
          }
        }

        @media screen and (max-width: 700px) {
          {
            div: {
              height: '150px'
            }
          }
        }
      </style>
    )
  }

	render() {
		return (
      <div>
        <google-chart
          style={{ width: '100%', height: '100%' }}
          type={this.type}
          data={JSON.stringify(this.data)}
        />
      </div>
		)
	}
}
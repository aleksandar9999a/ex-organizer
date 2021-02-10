import { IRoute } from 'exf-router/lib/interfaces/interfaces';
import ExF, { Component, CustomElement, Prop, State } from 'exf-ts';
import { Subscription } from 'rxjs';
import { RoutesController } from '../controllers/Routes';


@CustomElement({
  selector: 'exf-page-title',
  dependencyInjection: true
})
export class PageTitle extends Component {
  @State('state')
  currentRoute: IRoute | undefined;

  subscriber: Subscription;

  constructor (private routesController: RoutesController) {
    super();

    this.subscriber = this.routesController.currentRoute.subscribe(route => {
      this.currentRoute = route;
    })
  }

  onDestroy () {
    this.subscriber.unsubscribe;
  }

  stylize () {
    return (
      <style>
        .page-title {
          {
            'box-shadow': '0px 0px 20px -10px rgba(0,0,0,0.5)',
            color: '#5e7aa7',
            'font-size': '1.2rem',
            margin: '1rem 1rem 0rem',
            padding: '1rem',
            background: '#fff',
            display: 'flex',
            'border-radius': '0.3rem',
            width: '350px',
            transition: 'width .3s, margin .3s'
          }
        }

        @media screen and (max-width: 700px) {
          {
            '.page-title': {
              width: 'auto',
              margin: '1rem',
            }
          }
        }
      </style>
    )
  }

	render() {
		return (
      <div className="page-title">
        {
          this.currentRoute
            ? this.currentRoute.title
            : ''
        }
      </div>
		)
	}
}
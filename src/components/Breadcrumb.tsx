import ExF, { Component, CustomElement, Prop } from 'exf-ts';

interface IBreadcrumbTab {
  id: string | number,
  title: string,
  path: string
}


@CustomElement({
  selector: 'exf-breadcrumb',
  dependencyInjection: true
})
export class Breadcrumb extends Component {
  @Prop('state')
  tabs: IBreadcrumbTab[] = [
    {
      id: 1,
      title: 'Home',
      path: '/'
    },
    {
      id: 2,
      title: 'Project',
      path: '/projects'
    }
  ];

  handleClick (tab: IBreadcrumbTab) {
    window.history.pushState(null, '', tab.path);
    window.dispatchEvent(new Event('locationchange'));
  }

  stylize () {
    return (
      <style>
        .breadcrumb {
          {
            'box-shadow': '0px 0px 20px -10px rgba(0,0,0,0.5)',
            margin: '1rem',
            padding: '1rem',
            background: '#fff',
            display: 'flex',
            width: 'auto',
            'border-radius': '2rem',

            button: {
              color: '#000',
              transition: 'color .2s',
              background: 'transparent',
              cursor: 'pointer'
            },

            'button:hover': {
              color: '#fc7303'
            },

            '.active': {
              color: '#00b6b6'
            }
          }
        }

        @media screen and (max-width: 700px) {
          {
            '.breadcrumb': {
                display: 'none'
            }
          }
        }
      </style>
    )
  }

	render() {
		return (
      <div className="breadcrumb">
        {
          this.tabs.map(tab => {
            const activeClass = window.location.pathname === tab.path
              ? 'active'
              : ''

            return (
              <div id={tab.id}>
                <span>/</span>

                <button className={activeClass} onClick={() => this.handleClick(tab)}>
                  {tab.title}
                </button>
              </div>
            )
          })
        }
      </div>
		)
	}
}
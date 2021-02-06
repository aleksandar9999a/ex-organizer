import ExF, { Component, CustomElement, Prop, State } from 'exf-ts';
import { isOpenSidebar, SidebarController } from '../../controllers/SidebarCotroller';
import { ITab } from '../../interfaces/interfaces';
import './../../assets/logo.png';


@CustomElement({
  selector: 'exf-sidebar-tab',
  dependencyInjection: true
})
export class SidebarTab extends Component {
  @State()
  isOpenSidebar: boolean = true;

  @State()
  isOpenTab: boolean = false;

  @Prop()
  data: ITab = {
    id: '1',
    title: 'Test'
  }

  @Prop()
  isActive: boolean = false;

  @Prop()
  onClick?: (data: ITab) => void;

  constructor (private sidebarController: SidebarController) {
    super();

    isOpenSidebar.subscribe(val => {
      this.isOpenSidebar = val;

      if (!val) {
        this.isOpenTab = false;
      }
    })
  }

  handleRoute (pathname: string) {
    window.history.pushState(null, '', pathname);
    window.dispatchEvent(new Event('locationchange'));
    this.isOpenTab = false;

    if (this.onClick) {
      this.onClick(this.data);
    }
  }

  handleClick = () => {
    if (!this.data.tabs) {
      return;
    }

    this.isOpenTab = !this.isOpenTab
  }

  stylize () {
    return (
      <style>
        li {
          {
            color: '#fff',
            cursor: 'pointer',
            'font-size': '14px',
            
            div: {
              padding: '1rem',
              background: 'transparent',
              transition: 'border-width .05s, width .1s, transform .3s',
              display: 'flex',
              width: '100%',
              'border-left': '2px solid transparent',
              'align-items': 'center',
              'justify-content': 'space-between'
            },

            'div:hover': {
              'border-left': '2px solid #45aaf2'
            },

            i: {
              transition: 'margin .3s',
              'margin-left': this.isOpenSidebar
                ? '0'
                : '0.5rem'
            },

            span: {
              position: 'absolute',
              transition: 'left .3s, opacity .2s',
              opacity: this.isOpenSidebar
                ? '1'
                : '0',
              left: this.isOpenSidebar
                ? '44px'
                : '-200px'
            }
          }
        }

        @media screen and (max-width: 700px) {
          {
            li: {
              div: {
                transform: this.isOpenSidebar
                  ? 'translateX(0)'
                  : 'translateX(-200px)',
                width: this.isOpenSidebar
                  ? '100%'
                  : '0'
              }
            }
          }
        }

        .active {
          {
            'border-left': '2px solid #00b6b6'
          }
        }

        ul {
          {
            'list-style': 'none',
            
            li: {
              transition: 'opacity .5s, padding .3s, height .3s, width .1s, border-width .05s, background .3s',
              background: 'transparent',
              height: this.isOpenTab
                ? 'auto'
                : '0',
              padding: this.isOpenTab
                ? '1rem 1.5rem'
                : '0 1.5rem',
              opacity: this.isOpenTab
                ? '1'
                : '0'
            },

            'li:hover': {
              'border-left': '2px solid #fc7303'
            }
          }
        }
      </style>
    )
  }

	render() {
    const icon = this.isOpenTab
      ? 'arrow-down arrow--up'
      : 'arrow-down'

    const activeClass = this.isActive
      ? 'active'
      : ''

		return (
      <li onClick={this.handleClick}>
        <div className={activeClass}>
          <legend>
            <i className={this.data.icon} />

            <span>
              {this.data.title}
            </span>
          </legend>

          {
            this.data.tabs && this.isOpenSidebar
              ? <i className={icon} />
              : <span />
          }
        </div>

        {
          this.data.tabs
            ? (
              <ul>
                {this.data.tabs.map(tab => {
                  const className = tab.pathname === window.location.pathname
                    ? 'active'
                    : ''

                  return (
                    <li
                      id={tab.id}
                      className={className}
                      onClick={() => this.handleRoute(tab.pathname || '')}
                    >
                      {tab.title}
                    </li>
                  )
                })}
              </ul>
            )
            : <span />
        }
      </li>
		)
	}
}
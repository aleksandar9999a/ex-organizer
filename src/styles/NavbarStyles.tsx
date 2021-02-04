import { Injectable } from "exf-ts";

@Injectable()
export class NavbarStyles {
  style = {
    background: '#00c292',

    ul: {
      display: 'flex',
      width: '100%',
      'justify-content': 'space-between',
      'list-style': 'none',
      padding: '0',

      a: {
        color: '#fff',
        'text-decoration': 'none'
      },

      li: {
        padding: '1rem',
        transition: 'background .2s'
      },

      'li:hover': {
        background: 'rgba(0,0,0,.1)'
      }
    },

    '.navbar__menu div': {
      width: '15px',
      height: '1px',
      'background-color': '#fff',
      margin: '4px 0',
    }
  };
}
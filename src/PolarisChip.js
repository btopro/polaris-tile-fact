import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      tile: {type: String}
    };
  }

  static get styles() {
    return css`
      :host {
      display: inline-block;
      
      }

     .tile{
      display: inline-block;
      height: 280.8px;
      width: 336px;
      font-family:Roboto, 'Franklin Gothic Medium', Tahoma, sans-serif;
      font-size: 32px;
     
     }

      .white-on-navy{
        background-color: rgb(30, 64, 124);
        
      }

      .white-on-blue{
        background-color: blue;
        
      }
      .white-on-gradient-blue{
        background-color: orange;
        
      }
      .white-on-picture{
        background-color: red;
        
      }
      navy-on-white{
        background-color: brown;
       
      }
    `;
  }

  constructor() {
    super();
    this.name = "default"

  }

  render() {
//If multine==true{return code with extra HTML lines for white box}
//Else return what you already have
  return html`
      <div class="tile ${this.tile}">
        <div class="name">
          ${this.name}
        </div>
  </div>
    `;
  }
}


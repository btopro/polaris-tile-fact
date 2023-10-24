import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      tile: {type: String}
    };
  }

  static get styles() {
    return css`
      :host {
        display: flex;
      height: 360px;
      width: 419.8px;
      font-family: 'Roboto', 'Franklin Gothic Medium', 'Tahoma', sans-serif;
      font-size: 40px;
      margin: 0 0 16px 0;
      padding: 0 60px;
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
        font-family: 'Arial', sans-serif; 
        color: green;
        height: 299.80px;
        width: 92px;
      }
      navy-on-white{
        background-color: brown;
       
      }
    `;
  }

  constructor() {
    super();
    this.title = "88k students"

  }

  render() {
//If multine==true{return code with extra HTML lines for white box}
//Else return what you already have
  return html`
      <div class="tile ${this.tile}">
        <div class="title">
          ${this.title}
        </div>
      </div>
    `;
  }
}


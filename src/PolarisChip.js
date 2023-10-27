import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      tile: {type: String},
      backgroundImage: {type: String},
      link: {type: String},
      clickable:{type: Boolean},
      additionalText: {type: Boolean}
    };
  }

  static get styles() {
    return css`
      :host {
      display: inline-block;
      }

      .tile.clickable:hover {
        cursor: pointer;
      }

     .tile{
      display: flex; 
      justify-content: center; 
      align-items: center; 
      height: 281px;
      width: 336px;
      font-family:Roboto, 'Franklin Gothic Medium', Tahoma, sans-serif;
      font-size: 32px;
      color: white;
      box-shadow: rgba(0, 3, 33, 0.1) 0px 8px 16px 0px;
      
     }
     

     .name{
      margin: 0 0 16px 0;
      border: 0;
      padding: 0 47px;
      
     }

      .white-on-navy{
        background-color: rgb(0, 30, 68); 
      }

      .white-on-blue{
        background-color: rgb(30, 64, 124);
        
      }
      .white-on-gradient-blue{
      background-color: rgba(0, 0, 0, 0);
      background-image: linear-gradient(rgb(30, 64, 124) 0%, rgb(0, 30, 68) 65%, rgb(0, 30, 68) 100%);
        
      }
      .white-on-picture{
      background-blend-mode: multiply;
      background-color:rgba(0, 3, 33, 0.5);
      background-position: 50% 50%;
      background-size: cover;
      
      }
      .navy-on-white{
      background-color: rgb(255, 255, 255);
      color: rgb(0, 30, 68); 
      }
    `;
  }

  constructor() {
    super();
    this.name = "default";
    this.backgroundImage = '';
    this.link = '';
    this.clickable = false;
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.clickable) {
      this.addEventListener('click', () => {
        if (this.link) {
          window.open(this.link, '_blank');
        }
      });
    }


  }
  render() {
//If multine==true{return code with extra HTML lines for white box}
//Else return what you already have
  return html`
      <div class="tile ${this.tile} ${this.clickable ? 'clickable' : ''}">
        <div class="name">
          ${this.name}
        </div>
  </div>
  <style>
      .tile.white-on-picture {
        background-image: url(${this.backgroundImage});
      }
    </style>
    `;
  }
}


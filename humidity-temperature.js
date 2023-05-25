import { LitElement } from "card-tools/src/lit-element";
//https://github.com/thomasloven/lovelace-card-tools

customElements.whenDefined('card-tools').then(() => {
    var cardTools = customElements.get('card-tools');
  
    class HumidityTemperature extends cardTools.LitElement {
      setConfig(config) {
        this.name = config.name;
      }
  
      render() {
        return cardTools.LitHtml`
          ${this.name}
        `;
      }
    }
  
    customElements.define("humidity-temperature", MyPlugin);
  }); // END OF .then(() => {
  
  setTimeout(() => {
    if(customElements.get('card-tools')) return;
    customElements.define('humidity-temperature', class extends HTMLElement{
      setConfig() { throw new Error("Can't find card-tools. See https://github.com/thomasloven/lovelace-card-tools");}
    });
  }, 2000);

  console.info("%c  HUMIDITY-TEMPERATURE  \n%c Version 1.0.0 ", "color: orange; font-weight: bold; background: black", "color: white; font-weight: bold; background: dimgray"),
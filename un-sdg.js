/**
 * Copyright 2024 chirasvigowda
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import { directive } from "lit-html/directive.js";

//this constructor is going to set default values for the following properties: goal, width, height, label, image, loading, fitchPrority, and colorOnly
constructor() {
    super();
    this.goal = "circle"; 
    this.width = "254px"; 
    this.height = "254px"; 
    this.label = "Sustainable Developements Logo"; 
    this.image = "../lib/svgs/circle.png"; 
    this.loading = "lazy"; 
    this.fetchPriority = "low";
    this.colorOnly = false; 
  }
  //this portion of the code is going to define the properties that were set above 
  static get Properties() {
    return {
      goal: {type:String}, 
      width: {type:String},
      height: {type:String},
      label: {type:String},
      image: {type:String},
      loading: {type:String},
      fetchPriority: {type:String, reflect: true},
      colorOnly: {type:Boolean},
    }
    ; 
  }
  //this portion of the code is going to define the styles 
  static get styles() {
    return [
      super.styles, 
      css`
      :host {
        //this defines the colors for different goals 
        --goal-1: rgb(235, 28, 44); 
        --goal-2: rgb(210, 160, 42);
        --goal-3: rgb(44, 155, 72);
        --goal-4: rgb(194, 31, 51);
        --goal-5: rgb(239, 64, 42);
        --goal-6: rgb(0, 173, 216);
        --goal-7: rgb(253, 183, 19);
        --goal-8: rgb(232, 78, 12);
        --goal-9: rgb(243, 109, 36);
        --goal-10: rgb(224, 21, 131);
        --goal-11: rgb(249, 157, 37);
        --goal-12: rgb(207, 141, 42);
        --goal-13: rgb(72, 119, 61);
        --goal-14: rgb(0, 125, 187);
        --goal-15: rgb(63, 175, 73);
        --goal-16: rgb(1, 85, 138);
        --goal-17: rgb(25, 54, 103);
        //this defines how the goals should visually look on the basis of proportions
        width: var(--width, 254px); 
        height: var(--height, 254px); 
        padding: 0; 
        margin: 0; 

      }
      img {
        width: 100%;
        height: 100%; 

      }
      `,
    ];
  }
  //this method is for when the properties have to change
  updated(changedProperties) {
    if (changedProperties.has("goal")) {
      this.updateEverything();
    }
  }
  //this method is for updating a component based on the goal 
  updateEverything() {
    //this line enables it to get the current value of the goal attribute 
    const goal = this.getAttribute("goal"); 
    //this line updates the image source based on the goal 
    if (this.goal === "all") {
      this.image = new URL(
        `../lib/svgs/${this.goal}.svg`, 
        import.meta.url
      ).href
    } else if (this.goal === "circle") {
      his.image = new URL(
        `../lib/svgs/${this.goal}.svg`, 
        import.meta.url
      ).href
    }
  }
  //this switch statement is to set the label based on the goal 
  switch (goal) {
    case "circle":
      this.label = "Sustainable Developements Logo"; 
      break; 
    case "all": 
      this.label = "Goal 1: No Poverty, Goal 2: Zero Hunger, Goal 3: Good Health and Well, Goal 4: Quality Education, Goal 5: Gender Equality, Goal 6: Clean Water and Sanitation, Goal 7: Affordable and Clean Energy, Goal 8: Decent Work and Economic Growth, Goal 9: Industry, Innovation, and Infrastructure, Goal 10: Reduced Inequalities, Goal 11: Sustainable Cities and Communities, Goal 12: Responsible Consumption and Production, Goal 13: Climate Actions, Goal 14: Life Below Water, Goal 15: Life on Land, Goal 16: Peace, Justice, and Strong Institutions, Goal 17: Partnerships for the Goals";
      break;
    case "1": 
      this.label = "Goal 1: No Poverty"; 
      break; 
    case "2": 
      this.label = "Goal 2: Zero Hunger"; 
      break;

    case "3": 
      this.label = "Goal 3: Good Health and Well-Being"; 
      break;
    case "4": 
      this.label = "Goal 4: Quality Education"; 
      break;
    case "5": 
      this.label = "Goal 5: Gender Equality"; 
      break;
    case "6": 
      this.label = "Goal 6: Clean Water and Sanitation"; 
      break;
    case "7": 
      this.label = "Goal 7: Affordable and Clean Energy"; 
      break;
    case "8": 
      this.label = "Goal 8: Decent Work and Economic Growth"; 
      break;
    case "9": 
      this.label = "Goal 9: Industry, Innovation, and Infrastructure"; 
      break;
    case "10": 
      this.label = "Goal 10: Reduced Inequalities"; 
      break;
    case "11": 
      this.label = "Goal 11: Sustainable Cities and Communities"; 
      break;
    case "12": 
      this.label = "Goal 12: Responsible Consumption and Production"; 
      break;
    case "13": 
      this.label = "Goal 13: Climate Actions"; 
      break;
    case "14": 
      this.label = "Goal 14: Life Below Water"; 
      break;
    case "15": 
      this.label = "Goal 15: Life on Land"; 
      break;
    case "16": 
      this.label = "Goal 16: Peace, Justice, and Strong Institutions"; 
      break;
    case "17": 
      this.label = "Goal 17: Partnerships for the Goals"; 
      break;

  }
  //the render method is to make the component's HTML
  render() {
    return html`
    <style>
      :host {
        --width: ${this.width}; 
        --height: ${this.height}; 
      }
    </style>`
    //this is a wrapper div thats for the SDG icon
    <div 
      class="svg-wrapper"
      style="background-color: var(--goal-${this.goal});"
    >
      ${this.colorOnly
      ?``
    :html`
    <img
      src="${this.image}"
      alt="${this.label}"
      loaging="${this.loading}"
      fetchpriority="${this.fetchPriority}"
     /> 
     `}
    </div>
    `
    ;
  }
    static get haxProperties(){
        return new URL('./lib/${this.tag}.haxProperties.json`, import.metaurl)
          .href
    }
  }

globalThis.customElements.define(unSdg.tag, unSdg);
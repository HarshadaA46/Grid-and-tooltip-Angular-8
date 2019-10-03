import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itr : string[];
  

  constructor(){

    this.itr = ["http://www.google.com", "http://www.yahoo.com", 
    "http://www.linkedin.com", "http://twitter.com","https://www.w3schools.com", 
    "https://stackoverflow.com", "https://github.com", "http://tutorials.jenkov.com", "http://embed.plnkr.co"];
  }
  
  title = 'app works!';
  setVisible = "hidden";
  display = "none";
  checkValue = false;
  //set a property that holds a random color for our style.
  randomcolor=this.getRandomColor();
  //declare the fontsize and background color properties
  public font_size="12px";
  public background_color="grey ";
  closeDelay = "1000";
  //function to get random colors
  public getRandomColor(){
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++){
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
  //function to set a new random color
  setColor(){
      this.randomcolor=this.getRandomColor();
  }

  public getPopup(){
    this.setVisible = "visible";
    this.display = "block";
  }

  public close(){

    console.log("close");
    this.display = "none";
    this.setVisible = "hidden";
  }

  gridValue:any;
  public setGridPopupValue(i:any){
    for(i=0;i<=this.itr.length;i++){

      this.gridValue = i;
    }
  }

  public toggleTimer(){

    if(this.checkValue = false){
      console.log(this.checkValue);
      this.checkValue = true;
      console.log(this.checkValue);
      this.closeDelay = "300000";
    } else{
      this.checkValue = false;
      this.closeDelay = "100";
    }
  }
}

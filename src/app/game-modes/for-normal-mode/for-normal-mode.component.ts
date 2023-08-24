import { Component, Renderer2 } from '@angular/core';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-for-normal-mode',
  templateUrl: './for-normal-mode.component.html',
  styleUrls: ['./for-normal-mode.component.css']
})
export class ForNormalModeComponent {

  randomColors: string[] = [];
  showColor!: string;
  colorMatch: boolean | null = null;


  constructor(private service: GameService,private renderer:Renderer2) {
    this.gameStart();
  }

  gameStart(){
    this.randomColors = this.service.generateRandomColors(6);
    this.showColor = this.randomColors[Math.floor(Math.random() * 6)];
    console.log(this.showColor);
    console.log(this.randomColors);
    this.colorMatch = null;
  }

  checkIfCorrect(color:string,event:MouseEvent){

    const colorElement = event.target as HTMLElement;

    if(color){
      this.colorMatch = this.service.checkColor(color,this.showColor);

      if (!this.colorMatch) {
        this.renderer.setStyle(colorElement, 'background' , 'transparent');
      }
    } else {
      this.colorMatch = null;
    }

  }

}

import { Component, Renderer2 } from '@angular/core';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-for-hard-mode',
  templateUrl: './for-hard-mode.component.html',
  styleUrls: ['./for-hard-mode.component.css']
})
export class ForHardModeComponent {

  randomColors: string[] = [];
  showColor!: string;
  colorMatch: boolean | null = null;


  constructor(private service: GameService,private renderer:Renderer2) {
    this.gameStart();
  }

  gameStart(){
    this.randomColors = this.service.generateRandomColors(9);
    this.showColor = this.randomColors[Math.floor(Math.random() * 9)];
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

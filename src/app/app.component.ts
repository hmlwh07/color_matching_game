import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {

  title = 'Color_Match_Game';

  @ViewChild('backgroundAudio', { static: false }) backgroundAudioRef!: ElementRef<HTMLAudioElement>;
  
  audio: HTMLAudioElement | null = null;

  ngAfterViewInit(): void {
    this.toggleSound(true);
    setTimeout(() => {
      this.initAudio();
    }, 1000); // Delay in milliseconds
  }

  initAudio() {
    this.audio = this.backgroundAudioRef.nativeElement;
    this.audio.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  }

  toggleSound(play: boolean): void {
    if (this.audio) {
      if (play) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    }
  }

}

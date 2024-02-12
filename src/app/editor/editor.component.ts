import { Component, ElementRef, ViewChild } from '@angular/core';
const CELL_SIZE = 20; // px
const NUMBER_CELLS = 10;
const CANVAS_ID = 'editor-area';


@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})

export class EditorComponent {
  @ViewChild('canvas', {static: true}) canvasRef!: ElementRef;

  private canvas: HTMLCanvasElement|undefined;
  private ctx2d: CanvasRenderingContext2D|null = null;

  ngOnInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx2d = this.canvas !== undefined ? this.canvas.getContext('2d') : null;
  }

  onClick(ev: MouseEvent) {
    console.log(ev);
  }
}

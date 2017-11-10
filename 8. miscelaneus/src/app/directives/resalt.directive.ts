import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResalt]'
})
export class ResaltDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('appResalt') newColor: string;
  constructor(private _elementRef: ElementRef) {
    // _elementRef.nativeElement.style.backgroundColor = 'yellow';
    console.log('Directiva llamada');
  }
  @HostListener('mouseenter') mouseEnter() {
    this.resalt( this.newColor || 'yellow' );
  }
  @HostListener('mouseleave') mouseLeave() {
    this.resalt(null);
  }

  private resalt(color: string) {
    this._elementRef.nativeElement.style.backgroundColor = color;
  }
}

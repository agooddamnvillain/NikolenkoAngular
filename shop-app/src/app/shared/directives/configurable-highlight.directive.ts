import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlightColor]',
  standalone: true
})
export class ConfigurableHighlightDirective {

  // 🔹 вхідний параметр з дефолтним значенням
  @Input() highlightColor: string = 'yellow';

  constructor(private el: ElementRef) {}

  // 🔹 наведення миші
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.highlight(this.highlightColor);
  }

  // 🔹 вихід миші
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.highlight('');
  }

  // 🔹 застосування стилю
  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
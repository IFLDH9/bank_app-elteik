import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { Role } from 'src/domain/role';
import { AuthService } from './auth-service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective implements OnInit {

  @Input() appRole: Role[];

  constructor(
    private elementRef: ElementRef,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (!this.authService.hasRole(this.appRole)) {
      this.elementRef.nativeElement.style = 'display: none;';
    }
  }

}
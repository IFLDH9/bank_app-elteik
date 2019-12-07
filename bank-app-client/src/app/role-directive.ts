import {Directive, Input, ElementRef, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import { Role } from 'src/domain/role';
import { AuthService } from './auth-service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective implements OnInit {

  @Input() appRole: Role[];

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    if (this.authService.hasRole(this.appRole)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}

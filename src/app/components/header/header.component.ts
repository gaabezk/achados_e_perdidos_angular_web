import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { transition, trigger, useAnimation } from '@angular/animations';
import { ButtonModule } from 'primeng/button';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuModule, ToolbarModule, TieredMenuModule, CommonModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  showHeader = true;
  profileMenu!: MenuItem[];


  constructor(private authService: AuthService, private router: Router) {
    // Assina as alterações de rota para controlar visibilidade do header
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = !event.url.includes('/login'); // Oculta header na rota de login
      }
    });
  }

  ngOnInit() {
    // Defina as opções do menu de perfil
    this.profileMenu = [
      {
        label: 'Perfil',
        icon: 'pi pi-user',
        items: [
          { label: 'Editar Perfil', icon: 'pi pi-pencil', routerLink: '/profile/edit' },
          { label: 'Configurações', icon: 'pi pi-cog', routerLink: '/profile/settings' },
          { separator: true },
          { label: 'Sair', icon: 'pi pi-sign-out', command: () => this.authService.logout() }
        ]
      }
    ];
  }
}

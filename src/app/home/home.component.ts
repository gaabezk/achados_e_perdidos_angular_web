import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../services/item-service/item-service.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule, ImageModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  items: any[] = [];

  constructor(private itemService: ItemServiceService) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    this.itemService.getAllItems().subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (err) => {
        console.error('Erro ao buscar itens:', err);
      },
    });
  }
}

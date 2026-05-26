import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [CommonModule, RouterLink],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() imageUrl!: string;
  @Input() link!: string;
}

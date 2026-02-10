import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidate-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidate-preview.component.html',
  styleUrls: ['./candidate-preview.component.css']
})
export class CandidatePreviewComponent {
  // Données reçues du parent
  @Input() candidateData: any = {
    name: '',
    email: '',
    level: '',
    preferences: {
      contractType: '',
      available: false
    },
    bio: ''
  };

  // Événement émis vers le parent quand on clique sur "Nouvelle candidature"
  @Output() newApplication = new EventEmitter<void>();

  onNewApplication() {
    this.newApplication.emit();
  }
}
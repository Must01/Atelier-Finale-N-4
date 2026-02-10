import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-candidate-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent {
  // Initialisation complète pour éviter les erreurs "undefined"
  candidate = {
    name: '',
    email: '',
    level: 'Junior',
    preferences: {
      contractType: 'CDI', 
      available: false
    },
    bio: '' // Initialisé à vide pour que .length fonctionne immédiatement
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Données envoyées :', this.candidate);
      
      // Reset complet du formulaire [FORM-01]
      form.resetForm({
        name: '',
        email: '',
        level: 'Junior',
        preferences: {
          contractType: 'CDI',
          available: false
        }
        level: 'Junior',
        bio: ''
      });
    }
  }
}
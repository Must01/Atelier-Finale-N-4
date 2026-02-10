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
  candidate = {
    name: '',
    email: '',
    level: 'Junior',
    preferences: {
      contractType: 'CDI', 
      available: false
    }
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      form.resetForm({
        name: '',
        email: '',
        level: 'Junior',
        preferences: {
          contractType: 'CDI',
          available: false
        }
      });
    }
  }
}

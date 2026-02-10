import { Component, Output, EventEmitter } from '@angular/core';
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
    },
    bio: ''
  };

  @Output() ngSubmitForm = new EventEmitter<any>();

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.ngSubmitForm.emit({ ...this.candidate });
      form.resetForm({
        name: '',
        email: '',
        level: 'Junior',
        preferences: {
          contractType: 'CDI',
          available: false
        },
        bio: ''
      });
    }
  }
}
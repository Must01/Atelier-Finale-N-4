import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateFormComponent } from './components/candidate-form/candidate-form.component';
import { CandidatePreviewComponent } from './components/candidate-preview/candidate-preview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CandidateFormComponent, CandidatePreviewComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  candidateData: any = {
    name: '',
    email: '',
    level: 'Junior',
    preferences: {
      contractType: 'CDI',
      available: false
    },
    bio: ''
  };
  showPreview = true;
  isFirstSubmissionDone = false;

  handleCandidateChange(candidate: any) {
    // Show live preview only before first submission
    if (!this.isFirstSubmissionDone) {
      this.candidateData = { ...candidate };
    }
  }

  handleSubmit(candidate: any) {
    this.candidateData = { ...candidate };
    this.showPreview = true;
    this.isFirstSubmissionDone = true;
  }

  handleNewApplication() {
    this.candidateData = {
      name: '',
      email: '',
      level: 'Junior',
      preferences: {
        contractType: 'CDI',
        available: false
      },
      bio: ''
    };
    this.showPreview = false;
    this.isFirstSubmissionDone = false;
  }
}

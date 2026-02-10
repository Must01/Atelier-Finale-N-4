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
  candidateData: any = null;
  showPreview = false;

  handleSubmit(candidate: any) {
    this.candidateData = { ...candidate };
    this.showPreview = true;
  }

  handleNewApplication() {
    this.candidateData = null;
    this.showPreview = false;
  }
}

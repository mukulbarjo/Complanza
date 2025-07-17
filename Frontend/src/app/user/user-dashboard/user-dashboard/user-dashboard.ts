import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.html',
  styleUrls: ['./user-dashboard.css'],
  imports: [CommonModule, FormsModule]
})
export class UserDashboard {
  complaints = [
    { id: 12347, title: 'Noise pollution', status: 'Pending' },
    { id: 12345, title: 'Water leakage', status: 'Resolved' },
    { id: 12346, title: 'Broken streetlight', status: 'Pending' },
    { id: 12344, title: 'Waste management', status: 'Pending' }
  ];

  notifications = [
    'Complaint #12346 has been resolved',
    'New update on complaint #67344',
    'Service request #67890 is pending'
  ];

  feedback: string = '';

  get resolvedCount(): number {
    return this.complaints.filter(c => c.status === 'Resolved').length;
  }

  get pendingCount(): number {
    return this.complaints.filter(c => c.status === 'Pending').length;
  }

  submitFeedback() {
    if (this.feedback.trim()) {
      console.log('Feedback submitted:', this.feedback);
      this.feedback = '';
    }
  }
}

import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-talk2-me',
  templateUrl: './talk2-me.component.html',
  styleUrls: ['./talk2-me.component.css'],
  imports: [FormsModule, CommonModule]
})
export class Talk2MeComponent {
  textInput: string = '';
  topK: string = '';
  response: string | null = null;

  constructor(private apiService: ApiService) {}

  submitText(): void {
    if (this.textInput.trim()) {
      this.apiService.postText(this.textInput, this.topK).subscribe(
        (res) => {
          console.log("Received: " + res.answer);
          console.log("Received ", res.answer);
          this.response = res.answer;
        },
        (err) => {
          console.log(err);
          this.response = 'Error occurred: ' + err.message;
        }
      );
    } else {
      this.response = 'Please enter text before submitting.';
    }
  }
}


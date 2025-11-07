import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="center-container">

      <div class="form-box">

        <h2>User Registration Form</h2>

        <form #regForm="ngForm" (ngSubmit)="onSubmit(regForm)" class="form-style">

       
          <label>Name:</label>
          <input type="text" name="name" [(ngModel)]="user.name" required />
          <span *ngIf="regForm.submitted && !user.name" class="error">
            Name is required
          </span>

       
          <label>Email:</label>
          <input type="email" name="email" [(ngModel)]="user.email" required email />
          <span *ngIf="regForm.submitted && !user.email" class="error">
            Email is required
          </span>

      
          <label>Password:</label>
          <input type="password" name="password" [(ngModel)]="user.password" required minlength="6" />
          <span *ngIf="regForm.submitted && (!user.password || user.password.length < 6)" class="error">
            Password must be at least 6 characters
          </span>

          <button type="submit">Register</button>
        </form>

        <hr />

 
        <div *ngIf="submitted">
          <h3>Submitted Data</h3>
          <p><strong>Name:</strong> {{ user.name }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Password:</strong> {{ user.password }}</p>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .center-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .form-box {
      width: 350px;
      text-align: center;
    }

    .form-style {
      text-align: left;
      display: flex;
      flex-direction: column;
    }

    input {
      padding: 8px;
      margin-bottom: 6px;
    }

    button {
      padding: 8px;
      margin-top: 10px;
    }

    .error {
      color: red;
      font-size: 12px;
      margin-bottom: 10px;
      display: block;
    }
  `]
})
export class App {
  user = {
    name: '',
    email: '',
    password: ''
  };

  submitted = false;

  onSubmit(form: any) {

    if (form.invalid) {
      alert("Please enter all required details!");
      this.submitted = false;
      return;
    }

    this.submitted = true;
  }
}

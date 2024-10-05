import { Component, OnInit } from '@angular/core';
import { EmailService } from '@services/email/email.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent  implements OnInit {
  contactFormData = {
    name:'',
    email:'',
    phone:'',
    subject:'', 
    message:''
  }
  pageTitle : string = ''; 
  imgUrl : string = ''
  
  constructor(private emailService : EmailService) { 
    
  }
  
  sendEmail() {
    this.emailService.sendEmail(this.contactFormData)
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    })
    .catch((error: any) => {
      console.error('Error object:', error);  // Log the full error object
      alert('There was an error sending your message.');
    });
  }
  ngOnInit(): void {
    this.pageTitle="Contact"
    this.imgUrl = 'assets/img/banner2.png'
  }
}

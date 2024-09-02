import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})

export class EmailService {
  constructor() { }
  serviceID  = "service_22lsdzb"; 
  templateID: string = "template_ur6qcuj"; 
  userID: string = "WcE0IY0fzBht1jKMQ";
  
  sendEmail(templateParams : any) : Promise<EmailJSResponseStatus> {
    
    return emailjs.send(this.serviceID, this.templateID, templateParams, this.userID);
  }
}
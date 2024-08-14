import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CardModule, FormsModule, InputTextModule, RouterLink],
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent {

  username: string = "";
  email: string = "";
  password: string = "";
  image: string = "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsb2ZmaWNlM19pbGx1c3RyYXRpb25fZ2VvbWV0cmljX3NoYXBlX2Jhc2ljX3NoYXBlX2xvZ29fbV9lOWI0NTBmNy0yODZjLTQzNmItOWEwNC05NTRhYmNkYjQ3MzQucG5n.png";

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}

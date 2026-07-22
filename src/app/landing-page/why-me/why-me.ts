import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-why-me',
  imports: [TranslatePipe],
  templateUrl: './why-me.html',
  styleUrls: ['./why-me.scss'],
})
export class WhyMe {
}
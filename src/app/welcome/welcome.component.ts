import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  name = ''
  message = 'Some Welcome Message'
  constructor(private route :ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
    console.log(this.message)
    // console.log(this.route.snapshot.params['name'])

  }
}

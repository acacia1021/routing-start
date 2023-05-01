import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    //params is an Observable, allowing you to work with asynchronous tasks.
    //An Observable allows you to subscribe to an event that MIGHT happen in the future, without having to wait for it
    this.route.params.subscribe(
      //Checks for params changes
      (params: Params) => {
        //What will be executed when params changes
        this.user.id = params['id'];
        this.user.name = params['name'];

      }
    );
  }

}

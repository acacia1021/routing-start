import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //The + signs change the params to a number
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(1);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

  onEdit() {
    // this.router.navigate(['edit'], {relativeTo: this.route});

    // We would use merge if we wanted to merge previous params with current ones, but since we do not, we will ise preserve instead
    // this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'merge'});

    // Preserve would override default behaviour and keep the old params
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });

  }

}

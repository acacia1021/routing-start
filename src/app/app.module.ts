import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

// const appRoutes: Routes = [
//   //TYPICALLY, if you have more than 3 routes, you will create an entirely new file to hold the routes


//   //Example for localhost:4200/users
//   // {
//   //   path: 'users', component: UsersComponent
//   // },
//   {
//     path: '', component: HomeComponent
//   },
//   {
//     path: 'users', component: UsersComponent, children: [
//       {
//         path: ':id/:name', component: UserComponent
//       },
//     ]
//   },
//   // {
//   //   path: 'users/:id/:name', component: UserComponent
//   // },

//   {
//     path: 'servers', component: ServersComponent, children: [
//       {
//         path: ':id', component: ServerComponent
//       },
//       {
//         path: ':id/edit', component: EditServerComponent
//       }
//     ]
//   },
//   // {
//   //   path: 'servers/:id', component: ServerComponent
//   // },
//   // {
//   //   path: 'servers/:id/edit', component: EditServerComponent
//   // },
//   {
//     path: 'not-found', component: PageNotFoundComponent
//   },
//   {
//     path: 'something', redirectTo: '/not-found'
//   },

//   // //You would need to add the pathMatch: part if your main path will collide with another
//   // { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' },

//   //This is the catch all wildcard for paths -- needs to be the last one in the array of routes, as the routes are parsed from top to bottom
//   {
//     path: '**', redirectTo: '/not-found'
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [ServersService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

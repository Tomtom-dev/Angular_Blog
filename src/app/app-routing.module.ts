import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  // redirection
  {path: "", redirectTo: "users", pathMatch: "full"},
  // Routes pour la section utilisateur
  {path: "users", component: UserListComponent, pathMatch: "full"},
  {path: "posts", component: PostListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

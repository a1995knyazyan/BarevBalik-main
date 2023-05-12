import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {
  //   path: '',
  //   component: MainLayoutComponent,
  //   loadChildren: () => import('@layouts/main-layout/main-layout.module').then((m) => m.MainLayoutModule),
  //   canActivate: [authGuard]
  // },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

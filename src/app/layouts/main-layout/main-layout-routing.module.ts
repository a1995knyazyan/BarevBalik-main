import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
    },
    {
        path: 'cards',
        loadChildren: () => import('./../../features/cards/cards.module').then((m) => m.CardsModule)
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainLayoutRoutingModule {}

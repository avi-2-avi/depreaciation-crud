import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvBienListaComponent } from './components/cv-bien-lista/cv-bien-lista.component';
import { CvFacturaComponent } from './components/cv-factura/cv-factura.component';

const routes: Routes = [
  { path: 'lista', component: CvBienListaComponent },
  { path: 'factura', component: CvFacturaComponent },
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

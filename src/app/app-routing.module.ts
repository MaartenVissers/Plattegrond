import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // Add your component here
import { PlattegrondComponent} from './components/plattegrond/plattegrond.component';

const routes: Routes = [
  {
    path: '',
    component: PlattegrondComponent
  },
  {
    path: 'plattegrond',
    component: PlattegrondComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

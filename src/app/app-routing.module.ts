import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStartedComponent } from './get-started/get-started.component';
import { UsageCategoryComponent } from './usage-category/usage-category.component';
import { BudgetComponent } from './budget/budget.component';
import { ResultComponent } from './result/result.component';
import { CpuSelectionComponent } from './cpu-selection/cpu-selection.component';
import { GpuSelectionComponent } from './gpu-selection/gpu-selection.component';
import { HeaderStepperComponent } from './header-stepper/header-stepper.component';
import { PreferenceRamComponent } from './preference-ram/preference-ram.component';


const routes: Routes = [
  {path: 'start', component: GetStartedComponent},
  {path: 'usage', component: UsageCategoryComponent},
  {path: 'budget', component: BudgetComponent},
  {path: 'cpu', component: CpuSelectionComponent},
  {path: 'gpu', component: GpuSelectionComponent},
  {path: 'ram', component: PreferenceRamComponent},
  {path: 'summary', component: ResultComponent},
  {path: 'header', component: HeaderStepperComponent},
  {path: '**', redirectTo: 'start'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

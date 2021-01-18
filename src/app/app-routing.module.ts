import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from "./pages/test/test.component";
import {Test2Component} from "./pages/test2/test2.component";

const routes: Routes = [
  {
    path: '', data: {title: 'test'}, children:
      [
        {path: '', redirectTo: 'test', pathMatch: 'full'},
        {path: 'test', component: TestComponent},
      ],
  },
  {
    path: 'test2', data: {title: 'Test2'}, children:
  [
    {path: '', component: Test2Component},
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { SubpagePage } from '../subpage/subpage.page';
import { PagetwoPage } from '../pagetwo/pagetwo.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'subpage',
        outlet: 'home',
        component: SubpagePage
      },
      {
        path: 'subpage',
        outlet: 'about',
        component: SubpagePage
      },
      {
        path: 'pagetwo',
        outlet: 'home',
        component: PagetwoPage
      },
      {
        path: 'pagetwo',
        outlet: 'about',
        component: PagetwoPage
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  },
  { path: 'about', component: AboutPage },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

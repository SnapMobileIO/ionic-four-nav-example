import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { AboutPageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';
import { SubpagePageModule } from '../subpage/subpage.module';
import { ModalPageModule } from '../modal/modal.module';
import { PagetwoPageModule } from '../pagetwo/pagetwo.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    ContactPageModule,
    SubpagePageModule,
    ModalPageModule,
    PagetwoPageModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

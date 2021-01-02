import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // If You need animations
import { LightBoxModule, CarouselModule, ModalModule, WavesModule } from 'ng-uikit-pro-standard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import { SideBarNavComponent } from './side-bar-nav/side-bar-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragGridComponent } from './drag-grid/drag-grid.component';
import { ChartComponent } from './drag-grid/chart/chart.component';
import { DragCardComponent } from './drag-grid/drag-card/drag-card.component';
import { TableComponent } from './drag-grid/table/table.component';

import{HttpClientModule} from '@angular/common/http'

import {FormsModule} from '@angular/forms';

import {LayoutModule} from '@angular/cdk/layout';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';




import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';






@NgModule({
  declarations: [
    AppComponent,
    SideBarNavComponent,
    DashboardComponent,
    DragGridComponent,
    ChartComponent,
    DragCardComponent,
    TableComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    CarouselModule,
    ModalModule,
    WavesModule,
    LightBoxModule,
    HttpClientModule,
    DragDropModule,
    MatDialogModule,
    FormsModule,
    LayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatMenuModule,
    MatTooltipModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    MatProgressSpinnerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

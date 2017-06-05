// Класс AppModule - точка входа в данное приложение 
// Angular модуль - класс с декоратором NgModule

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import {RouterModule} from '@angular/router';

import { ProductListComponent, AdminComponent, HomeComponent, routes, DataSource, ProductDetailComponent } from './index';

// @NgModule - декоратор, который определяет данные для создаваемого модуля.
// Для того чтобы приложение могло выполняться в браузере, текущий модуль (корневой модуль)
// должен выполнить импорт модуля BrowserModule взятого из @angular/platform-browser 
// Задача BrowserModule зарегистрировать основные сервис провайдеры приложения, 
// а также добавить общие директивы такие как ngIf и ngFor
@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot(routes)],
  declarations: [ AppComponent, HomeComponent, ProductListComponent, AdminComponent, ProductDetailComponent ], // корневой компонент данного приложения
  bootstrap:    [ AppComponent ],  // компонент с которого начинается отображение приложения
  providers:    [ DataSource ]
})

export class AppModule { } 

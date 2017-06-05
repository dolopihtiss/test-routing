// импорт декоратора Component из модуля @angular/core
import { Component } from '@angular/core';

// Применение декоратора Component
// Декоратор используется для присвоения метаданных для класса AppComponent
@Component({
    moduleId: module.id,
    selector: 'my-home',                       // Селектор, который определяет какой элемент DOM дерева будет представлять компонент.
    templateUrl: 'home.component.html' // HTML разметка определяющая представление текущего компонента
})
export class HomeComponent { } // Класс определяющий поведение компонента
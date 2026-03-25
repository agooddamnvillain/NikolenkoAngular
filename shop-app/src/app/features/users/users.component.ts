import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ApiService, User, Post } from '../../shared/services/api.service';

@Component({
  selector: 'shop-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  imports: [CommonModule]
})
export class UsersComponent implements OnInit {

  users$!: Observable<User[]>;
  posts$!: Observable<Post[]>;

  // 🔹 обраний користувач
  private selectedUserId$ = new BehaviorSubject<number>(1);

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {

    // 🔹 отримуємо користувачів
    this.users$ = this.apiService.getUsers();

    // 🔥 RXJS CHAIN (головна частина лабораторної)
    this.posts$ = this.selectedUserId$.pipe(
      switchMap(userId =>
        this.apiService.getPostsByUserId(userId)
      )
    );
  }

  // 🔹 зміна користувача
  selectUser(id: number): void {
    this.selectedUserId$.next(id);
  }
}
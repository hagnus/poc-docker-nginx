import database from '../database/connection';
import {User} from '../types/user';


export function create(user: User): Promise<number[]> {
  return database('users')
      .insert(user);
}

export function findById(userId: string): Promise<User> {
  return database<number, User>('users')
      .where('id', userId);
}

export function getAll(): Promise<User[]> {
  return database.select().from('users').limit(50);
}

export function update(userId: string, user: User): Promise<number> {
  user.update_at = database.fn.now();

  return database('users')
      .where({id: userId})
      .update(user);
}

export function remove(userId: string): Promise<number> {
  return database('users')
      .where('id', userId)
      .del();
}

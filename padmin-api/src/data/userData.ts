import database from '../database/connection';
import {User} from '../utils/types';

const exposedFields = ['id', 'name', 'active'];

export function create(user: User): Promise<User[]> {
  return database('users')
      .returning(exposedFields)
      .insert(user);
}

export function findById(userId: string): Promise<User> {
  return database<number, User>('users')
      .where('id', userId);
}

export function getAll(): Promise<User[]> {
  return database.select().from('users').limit(50);
}

export function update(userId: string, user: User): Promise<User[]> {
  user.update_at = database.fn.now();

  return database('users')
      .where({id: userId})
      .returning(exposedFields)
      .update(user);
}

export function remove(userId: string): Promise<User[]> {
  return database('users')
      .where('id', userId)
      .returning(exposedFields)
      .del();
}

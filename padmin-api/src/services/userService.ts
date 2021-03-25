import * as UserData from '../data/userData';
import { User } from '../utils/types';

export function create (user: User): Promise<User[]> {
  return UserData.create(user);
}

export function getAll(): Promise<User[]> {
  return UserData.getAll();
}

export function findById(id: string): Promise<User> {
  return UserData.findById(id);
}

export function update(id: string, user: User): Promise<User[]> {
  return UserData.update(id, user);
}

export function remove(id: string): Promise<User[]> {
  return UserData.remove(id);
}

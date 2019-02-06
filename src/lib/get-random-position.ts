import { getRandomNumber } from './get-random-number';
import { Vector2 } from '../types/vector';

export const getRandomPosition = (): Vector2 => [
  getRandomNumber(0, 3),
  getRandomNumber(0, 3),
];

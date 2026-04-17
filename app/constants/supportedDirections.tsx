export type Direction = 'north' | 'east' | 'south' | 'west';

export const supportedDirections: Direction[] = ['north', 'east', 'south', 'west'];

export const directionToArrowIconMap: Record<Direction, string> = {
    'north': '0',
    'east': '90',
    'south': '180',
    'west': '270',
}
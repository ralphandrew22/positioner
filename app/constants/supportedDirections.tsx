export type Direction = 'NORTH' | 'EAST' | 'SOUTH' | 'WEST';

export const supportedDirections: Direction[] = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

export const directionToArrowIconMap: Record<Direction, string> = {
    'NORTH': '0',
    'EAST': '90',
    'SOUTH': '180',
    'WEST': '270',
}
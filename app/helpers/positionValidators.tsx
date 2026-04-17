import { supportedDirections, type Direction } from '~/constants/supportedDirections';

export const isCoordinateValid = (coordinate: number) => {
    return coordinate >= 0 && coordinate <= 4;
}

export const isDirectionValid = (direction: string) => {
    return supportedDirections.includes(direction as unknown as Direction);
}

export const parseCoordinatesAndDirection = (coordinatesAndDirection: string) => {
    const [coordinates, direction] = coordinatesAndDirection.trim().split(' ');
    const [xCoordinate, yCoordinate] = coordinates.split(',').map(coordinate => parseInt(coordinate, 10));

    if (
        isCoordinateValid(xCoordinate) &&
        isCoordinateValid(yCoordinate) &&
        isDirectionValid(direction)
    ) {
        return {
            xCoordinate,
            yCoordinate,
            direction
        }
    } else {
        return null;
    }
}
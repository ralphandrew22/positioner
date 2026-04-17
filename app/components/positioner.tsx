import React, { useEffect, useState } from "react";
import { Box, Grid, Alert } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import type { PositionerProps } from "~/interfaces/positionerProps";
import { parseCoordinatesAndDirection } from "~/helpers/positionValidators";
import CheckIcon from '@mui/icons-material/Check';
import { directionToArrowIconMap } from "~/constants/supportedDirections";

export const Positioner: React.FC<PositionerProps> = ({coordinates}) => {
    const [parsed, setParsed] = useState<{xCoordinate: number, yCoordinate: number, direction: string} | null>(null);
    const [areInvalidCoordinatesAndDirection, setAreInvalidCoordinatesAndDirection] = useState<boolean>(false);

    useEffect(() => {
        if (!coordinates) return;
        const parsedCoordinatesAndDirection = parseCoordinatesAndDirection(coordinates);

        if (!parsedCoordinatesAndDirection) {
            setAreInvalidCoordinatesAndDirection(true);
        } else {
            setAreInvalidCoordinatesAndDirection(false);
            setParsed(parsedCoordinatesAndDirection);
        }
    }, [coordinates])

    return (
        <Box
            sx={{
                my: 4,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: '100%',
                height: '100%',
            }}>
                <Grid
                    container
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 60px)",
                        gridTemplateRows: "repeat(5, 60px)",
                        gap: '2px',
                        backgroundColor: '#000000',
                        padding: '2px'
                    }}>
                        {
                            [...Array(25)].map((_, index) => {
                                const row = Math.floor(index / 5);
                                const col = index % 5;

                                const isObjectHere = row === (4 - parsed?.yCoordinate) && col === parsed?.xCoordinate;
                                return (
                                    <div
                                        style={{
                                            backgroundColor: '#fff',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            {isObjectHere && (
                                                <ArrowUpwardIcon
                                                    sx={{
                                                        transform: `rotate(${directionToArrowIconMap[parsed.direction as keyof typeof directionToArrowIconMap]}deg)`,
                                                    }}
                                                />
                                            )}
                                    </div>
                                )
                            })
                        }
                </Grid>
                {areInvalidCoordinatesAndDirection && (
                    <div>
                        <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
                            Invalid coordinates and/or position. Please check your inputs and try again.
                        </Alert>
                    </div>
                )}
        </Box>
    )
}
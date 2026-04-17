import { Alert, Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, type SelectChangeEvent } from '@mui/material';
// import Positioner from '../components/Positioner'
import { useEffect, useState } from 'react';
import type { Direction } from '~/constants/supportedDirections';
import { supportedDirections } from '~/constants/supportedDirections';
import CheckIcon from '@mui/icons-material/Check';
import { Positioner } from '~/components/positioner';

export default function Home() {
    const [xCoordinate, setXCoordinate] = useState<string>('');
    const [yCoordinate, setYCoordinate] = useState<string>('');
    const [direction, setDirection] = useState<Direction>();
    const [appliedCoordinatesAndDirection, setAppliedCoordinatesAndDirection] = useState<string>('');
    const [areInputsFilled, setAreInputsFilled] = useState<boolean>(false);

    const onXCoordinateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setXCoordinate(event.target.value);
    }

    const onYCoordinateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setYCoordinate(event.target.value);
    }

    const onDirectionChange = (event: SelectChangeEvent) => {
        setDirection(event.target.value as Direction);
    }

    const onApplyCoordinatesAndDirection = () => {
        setAppliedCoordinatesAndDirection(`${xCoordinate},${yCoordinate} ${direction}`);
    }

    const isInputFilled = (inputValue: any) => !!inputValue?.toString()?.trim()

    useEffect(() => {
        const areInputsFilled = isInputFilled(xCoordinate) &&
            isInputFilled(yCoordinate) &&
            isInputFilled(direction)
        setAreInputsFilled(areInputsFilled);
    }, [
        xCoordinate,
        yCoordinate,
        direction
    ])

    
    return (
        <Box
            sx={{
                my: 4,
            }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: '100%',
                        height: '100%',
                    }}>
                    
                    <Positioner coordinates={appliedCoordinatesAndDirection} />
                </Box>
                <Box
                    sx={{
                        display: "display-listitem",
                        justifyContent: "center",
                    }}>
                    <TextField
                        id="x-coordinate-input"
                        type="number"
                        label="Enter X coordinate"
                        variant="filled"
                        onChange={onXCoordinateChange}/>
                    <TextField
                        id="y-coordinate-input"
                        type="number"
                        label="Enter Y coordinate"
                        variant="filled"
                        onChange={onYCoordinateChange}/>
                    <FormControl
                        fullWidth
                        sx={{ my: 2}}>
                        <InputLabel id="directions-select-label">Select Direction</InputLabel>
                        <Select
                            labelId="directions-select-label"
                            id="directions-select"
                            value={direction}
                            label="Age"
                            onChange={onDirectionChange}
                        >
                            {supportedDirections.map((direction) => (
                                <MenuItem key={direction} value={direction}>{direction.toUpperCase()}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button
                        disabled={!areInputsFilled}
                        onClick={onApplyCoordinatesAndDirection}>
                            Apply coordinates and position
                    </Button>
                </Box>

        </Box>
        
    );
}
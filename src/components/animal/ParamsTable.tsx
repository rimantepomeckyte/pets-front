import React from 'react';
import { Box, Typography } from '@material-ui/core';

export default function ParamsTable({ items }: ParamTableProps) {
    return (
        <Typography>
            {items.map((item: ParamsTableRow, index: number) => (
                <Box key={index}>
                    <h3>{item.title}</h3>
                    <h3>{item.value}</h3>
                </Box>
            ))}
        </Typography>
    );
}
interface ParamTableProps {
    items: ParamsTableRow[];
}
interface ParamsTableRow {
    title: string;
    value: number;
}

import { SearchRounded } from "@mui/icons-material";
import { Box, Button, Container, InputAdornment, Stack, TextField, Typography } from "@mui/material";

export default function Hero() {
    return (
        <Box sx={{ py: { xs: 6, md: 10 }, textAlign: 'center' }}>
            <Container>
            <Typography variant="h1" component="h1" gutterBottom>
                Discover Your Next Favorite Recipe
            </Typography>

            <Typography color="text.secondary" sx={{ maxWidth: 720, mx: 'auto', mb: 4 }}>
                Explore thousands of delicious recipes from around the world, curated just for you.
            </Typography>

            <Stack
                direction="row"
                spacing={1.5}
                sx={{ maxWidth: 640, mx: 'auto' }}
            >
                <TextField
                fullWidth
                placeholder="Search by recipe name or ingredient…"
                slotProps={{
                    input: {
                    startAdornment: (
                        <InputAdornment position="start">
                        <SearchRounded fontSize="small" />
                        </InputAdornment>
                    ),
                    },
                }}
                />
                <Button variant="contained" color="primary">
                Search
                </Button>
            </Stack>
            </Container>
        </Box>
    )

}
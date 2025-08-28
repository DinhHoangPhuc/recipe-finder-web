import { Box, Chip, Container, Stack, Typography } from "@mui/material";

export default function Categories() {
    return (
        <Box sx={{ py: 6, borderTop: (t) => `1px solid ${t.palette.divider}`, backgroundColor: 'background.paper' }}>
            <Container>
            <Typography variant="h5" fontWeight={700} textAlign="center" mb={3}>
                Filter by Category
            </Typography>

            <Stack
                direction="row"
                spacing={1}
                useFlexGap
                flexWrap="wrap"
                justifyContent="center"
            >
                {['Breakfast','Lunch','Dinner','Dessert','Vegan','Gluten-Free','Quick & Easy','Italian','Mexican','Asian','Soups','Salads','Baking']
                .map((c, i) => (
                    <Chip
                    key={c}
                    label={c}
                    color={i === 0 ? 'primary' : 'default'} // highlight "Breakfast" like your mock
                    clickable
                    />
                ))}
            </Stack>
            </Container>
        </Box>
    )
}
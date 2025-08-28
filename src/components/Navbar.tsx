// import AppBar from "@mui/material/AppBar";
// import Container from "@mui/material/Container";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Box from '@mui/material/Box';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// export default function Navbar() {
//   return (
//     <AppBar 
//         position="fixed"
//         sx={{
//             background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//             boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//             '&:hover': {
//                 background: 'linear-gradient(45deg, #FE6B8B 60%, #FF8E53 100%)',
//                 boxShadow: '0 4px 8px 2px rgba(255, 105, 135, .4)',
//             },
//         }}
//     >
//         <Container maxWidth="lg">
//             <Toolbar variant="dense" disableGutters>
//                 <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
//                     <Typography variant="h6" noWrap component="div" color="white/80">
//                         Recipe Finder
//                     </Typography>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
//                         <Typography variant="subtitle1" noWrap component="div">
//                             Favorites
//                         </Typography>
//                         <ShoppingCartOutlinedIcon/>
//                     </Box>
//                 </Box>
//             </Toolbar>
//         </Container>
//     </AppBar>
//   );
// }


// src/HomePage.tsx
import {
  AppBar, Box, Link, Stack, Toolbar
} from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="sticky" color="default">
      <Toolbar sx={{ gap: 3 }}>
        <Box sx={{ fontWeight: 800, fontSize: 20 }}>★ logo</Box>
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" spacing={3}>
          <Link underline="none" color="text.secondary" href="#">Home</Link>
          <Link underline="none" color="text.secondary" href="#">Favorites</Link>
          <Link underline="none" color="text.secondary" href="#">Shopping List</Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
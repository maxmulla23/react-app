import { Box, Grid, Typography } from "@mui/material";


export default function Home() {
    return(
        <>
        <Box sx={{ backgroundColor: "#c8dad7", minHeight: "100vh"}}>
            <Grid container sx={{ height: "100%", paddingInline: 12}}>
                <Grid item sm= {12} md={6}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: 4,
                            paddingInline: 5,

                            height: "100%",
                        }}>
                        <Typography component="h2" variant="h2">
                            lorem ipsum
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            </Box>
        </>
    )
}

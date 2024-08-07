import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Rating,
  CircularProgress,
  IconButton,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const DarkCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#1e1e2d",
  color: "white",
}));

const StatsCard = styled(DarkCard)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  //   height: '100%',
  padding: "8px",
}));

const ActivityChart = styled(Box)(({ theme }) => ({
  height: 200,
  display: "flex",
  alignItems: "flex-end",
  "& .bar": {
    width: 20,
    backgroundColor: "#3f51b5",
    marginRight: 4,
  },
}));

function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#151521", color: "white", p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Box container>
        <Grid container spacing={2} sx={{ mb: "20px" }}>
          {/* Stats Cards */}
          <Grid item xs={9}>
            <Grid container spacing={2}>
              {[
                {
                  title: "Total Orders",
                  value: "75",
                  change: 3,
                  icon: "📦",
                  color: "#3f51b5",
                },
                {
                  title: "Total Delivered",
                  value: "70",
                  change: -3,
                  icon: "✅",
                  color: "#4caf50",
                },
                {
                  title: "Total Cancelled",
                  value: "05",
                  change: 3,
                  icon: "❌",
                  color: "#f44336",
                },
                {
                  title: "Total Revenue",
                  value: "$12k",
                  change: -3,
                  icon: "💰",
                  color: "#9c27b0",
                },
              ].map((stat) => (
                <Grid item xs={3} key={stat.title}>
                  <StatsCard>
                    <Stack direction={"column"}>
                      <Box
                        image
                        sx={{
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "32px",
                        }}
                      >
                        {stat.icon}
                      </Box>
                      <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                        {stat.title}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography variant="h4" component="div">
                        {stat.value}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        {stat.change > 0 ? (
                          <ArrowUpwardIcon color="success" />
                        ) : (
                          <ArrowDownwardIcon color="error" />
                        )}
                        <Typography variant="body2">
                          {Math.abs(stat.change)}%
                        </Typography>
                      </Box>
                    </Stack>
                  </StatsCard>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Net Profit */}
          <Grid item xs={3}>
            <DarkCard>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="h6">Net Profit</Typography>
                  <Typography variant="h4">$ 6759.25</Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <ArrowUpwardIcon color="success" />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      3%
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ position: "relative", display: "inline-flex" }}>
                  <CircularProgress
                    variant="determinate"
                    value={70}
                    size={80}
                  />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Stack>
                      <Typography
                        variant="caption"
                        component="div"
                        color="#fff"
                        sx={{ ml: "20px" }}
                      >
                        70%
                      </Typography>
                      <Typography
                        variant="caption"
                        component="div"
                        color="#fff"
                        style={{ fontSize: "7px" }}
                      >
                        Goals Completed
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </CardContent>
            </DarkCard>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ alignItems: "center", mb: "20px" }}>
          {/* Activity Chart */}
          <Grid item xs={9}>
            <DarkCard>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Activity
                </Typography>
                <ActivityChart>
                  {[
                    5, 3, 7, 8, 4, 6, 9, 12, 15, 10, 8, 6, 4, 7, 9, 11, 13, 10,
                    8, 5,
                  ].map((height, index) => (
                    <div
                      key={index}
                      className="bar"
                      style={{ height: `${height * 10}px` }}
                    />
                  ))}
                </ActivityChart>
              </CardContent>
            </DarkCard>
          </Grid>

          {/* Menu Items */}
          <Grid item xs={3}>
            <DarkCard>
              <CardContent>
                {[
                  { title: "Goals", icon: "🎯", color: "#8B3E2F" },
                  { title: "Popular Dishes", icon: "🍔", color: "#3A4CA8" },
                  { title: "Menus", icon: "🍽️", color: "#3B7B9E" },
                ].map((item) => (
                  <Box
                    key={item.title}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "16px",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      spacing={"24px"}
                      alignItems={"center"}
                    >
                      <Box
                        sx={{
                          width: "10px",
                          height: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "32px",
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography>{item.title}</Typography>
                    </Stack>
                    <IconButton size="small" sx={{ color: "white" }}>
                      <ChevronRightIcon />
                    </IconButton>
                  </Box>
                ))}
              </CardContent>
            </DarkCard>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {/* Recent Orders */}
          <Grid item xs={9}>
            <DarkCard>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Recent Orders
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ color: "white" }}>Customer</TableCell>
                        <TableCell sx={{ color: "white" }}>Order No.</TableCell>
                        <TableCell sx={{ color: "white" }}>Amount</TableCell>
                        <TableCell sx={{ color: "white" }}>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[
                        {
                          name: "Wade Warren",
                          orderNo: "15478256",
                          amount: "$124.00",
                          status: "Delivered",
                          img: "https://i.pravatar.cc/150?img=4",
                        },
                        {
                          name: "Jane Cooper",
                          orderNo: "48965786",
                          amount: "$365.02",
                          status: "Delivered",
                          img: "https://i.pravatar.cc/150?img=5",
                        },
                        {
                          name: "Guy Hawkins",
                          orderNo: "78958215",
                          amount: "$45.88",
                          status: "Cancelled",
                          img: "https://i.pravatar.cc/150?img=6",
                        },
                        {
                          name: "Kristin Watson",
                          orderNo: "20965732",
                          amount: "$85.00",
                          status: "Pending",
                          img: "https://i.pravatar.cc/150?img=7",
                        },
                        {
                          name: "Cody Fisher",
                          orderNo: "95715620",
                          amount: "$545.00",
                          status: "Delivered",
                          img: "https://i.pravatar.cc/150?img=8",
                        },
                      ].map((row) => (
                        <TableRow key={row.orderNo}>
                          <TableCell sx={{ color: "white" }}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Avatar sx={{ mr: 2 }} src={row?.img} />
                              {row.name}
                            </Box>
                          </TableCell>
                          <TableCell sx={{ color: "white" }}>
                            {row.orderNo}
                          </TableCell>
                          <TableCell sx={{ color: "white" }}>
                            {row.amount}
                          </TableCell>
                          <TableCell sx={{ color: "white" }}>
                            {row.status}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </DarkCard>
          </Grid>

          {/* Customer Feedback */}
          <Grid item xs={3}>
            <DarkCard>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Customer's Feedback
                </Typography>
                {[
                  {
                    name: "Jenny Wilson",
                    rating: 4,
                    comment: "The food was excellent and so was the service...",
                    img: "https://i.pravatar.cc/150?img=1",
                  },
                  {
                    name: "Dianne Russell",
                    rating: 5,
                    comment:
                      "We enjoyed the Eggs Benedict served on homemade focaccia bread...",
                    img: "https://i.pravatar.cc/150?img=2",
                  },
                  {
                    name: "Davin Lane",
                    rating: 3,
                    comment:
                      "I like the fodd it was very testy .We enjoyed the Food Benedict served ad...",
                    img: "https://i.pravatar.cc/150?img=3",
                  },
                ].map((feedback, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <Avatar sx={{ mr: 2 }} src={feedback.img} />
                      <Typography variant="subtitle1">
                        {feedback.name}
                      </Typography>
                    </Box>
                    <Rating value={feedback.rating} readOnly />
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {feedback.comment}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </DarkCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;

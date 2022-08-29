/**
=========================================================
* Soft UI Dashboard PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiBadgeDot from "components/SuiBadgeDot";

// Images
import team1 from "assets/images/team-1.jpg";
import team8 from "assets/images/team8.jpg";
import team4 from "assets/images/team-4.jpg";

export default {
  columns: [
    { name: "name", align: "left" },
    { name: "function", align: "left" },
    { name: "review", align: "left" },
    { name: "email", align: "center" },
    { name: "employed", align: "center" },
    { name: "id", align: "center" },
  ],

  rows: [
    {
      name: [team8, "Raja Srivastava"],
      function: "Manager",
      review: (
        <SuiBox ml={-1.325}>
          <SuiBadgeDot size="small" badgeContent="positive" />
        </SuiBox>
      ),
      email: "john@user.com",
      employed: "23/04/18",
      id: "43431",
    },
    {
      name: [team4, "Alexa Liras"],
      function: "Programator",
      review: (
        <SuiBox ml={-1.325}>
          <SuiBadgeDot size="small" badgeContent="positive" />
        </SuiBox>
      ),
      email: "alexa@user.com",
      employed: "11/01/19",
      id: "93021",
    },
    {
      name: [team1, "Laurent Perrier"],
      function: "Executive",
      review: (
        <SuiBox ml={-1.325}>
          <SuiBadgeDot color="dark" size="small" badgeContent="neutral" />
        </SuiBox>
      ),
      email: "laurent@user.com",
      employed: "19/09/17",
      id: "10392",
    },
    {
      name: [team4, "Michael Levi"],
      function: "Backend Developer",
      review: (
        <SuiBox ml={-1.325}>
          <SuiBadgeDot size="small" badgeContent="positive" />
        </SuiBox>
      ),
      email: "michael@user.com",
      employed: "24/12/08",
      id: "34002",
    },
    {
      name: [team8, "Richard Gran"],
      function: "Manager",
      review: (
        <SuiBox ml={-1.325}>
          <SuiBadgeDot color="error" size="small" badgeContent="negative" />
        </SuiBox>
      ),
      email: "richard@user.com",
      employed: "04/10/21",
      id: "91879",
    },
    {
      name: [team4, "Miriam Eric"],
      function: "Programtor",
      review: (
        <SuiBox ml={-1.325}>
          <SuiBadgeDot size="small" badgeContent="positive" />
        </SuiBox>
      ),
      email: "miriam@user.com",
      employed: "14/09/20",
      id: "23042",
    },
  ],
};

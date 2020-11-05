import { Employees } from "./employees"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import { DataGrid } from "@material-ui/data-grid"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstname", headerName: "First name", width: 130 },
  { field: "lastname", headerName: "Last name", width: 130 },
  { field: "department", headerName: "Department", width: 180 },
  { field: "position", headerName: "Position", width: 160 },
  { field: "salary", headerName: "Salary", width: 130 },
]
function App() {
  const classes = useStyles()
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            My Employees
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <h1>Employees List</h1>
        <Paper style={{ height: 700, width: "100%" }}>
          <DataGrid rows={Employees} columns={columns} pageSize={11} checkboxSelection />
        </Paper>
      </Container>
    </>
  )
}

export default App

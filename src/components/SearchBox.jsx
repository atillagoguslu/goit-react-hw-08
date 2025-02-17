import { useDispatch, useSelector } from "react-redux";
import {
  changeNameFilter,
  changeNumberFilter,
  changeSearchType,
  changeSortType,
} from "../redux/filters/slice";
import { Formik, Form } from "formik";
import { Box, TextField, MenuItem, Stack } from "@mui/material";

function SearchBox() {
  const dispatch = useDispatch();
  const { name, searchType, sortType } = useSelector((state) => state.filters);
  const contacts = useSelector((state) => state.contacts.items);

  const initialValues = {
    searchType: "name",
    search: name || "",
    sortType: "creationDate",
  };

  return (
    <Box>
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        {({ handleChange }) => (
          <Form>
            <Stack direction="row" spacing={2}>
              <TextField
                select
                name="searchType"
                value={searchType}
                onChange={(e) => dispatch(changeSearchType(e.target.value))}
                size="small"
                sx={{ minWidth: 160 }}
              >
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="number">Number</MenuItem>
              </TextField>

              <TextField
                type="text"
                name="search"
                placeholder={`Search by ${searchType}`}
                size="small"
                fullWidth
                onChange={(e) => {
                  handleChange(e);
                  if (searchType === "name") {
                    dispatch(
                      changeNameFilter({
                        filter: e.target.value,
                        contacts,
                      })
                    );
                  } else if (searchType === "number") {
                    dispatch(
                      changeNumberFilter({
                        filter: e.target.value,
                        contacts,
                      })
                    );
                  }
                }}
              />
              <TextField
                select
                name="sortType"
                value={sortType}
                onChange={(e) => dispatch(changeSortType(e.target.value))}
                size="small"
                sx={{ minWidth: 160 }}
              >
                <MenuItem value="creationDate">Creation Date</MenuItem>
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="number">Number</MenuItem>
              </TextField>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default SearchBox;

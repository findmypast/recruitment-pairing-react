import React, { useState } from "react";
import { Stack, Heading, Box, Columns } from "./design-system";
import { searchResults } from "./data/search-results.json";
import { constructBirthDate, sortSearchResults } from "./utils";

function App() {
  const [sort, setSort] = useState({
    direction: "ascending",
    column: "FirstName",
  });

  const onClickColumnHeader = (column) => () => {
    setSort({ column });
  };

  return (
    <Box as="main" padding={5} maxWidth="1280px" margin="auto">
      <Stack space={3}>
        <Heading variant="primary" as="h1">
          Search results for Adele Buckley
        </Heading>
        <Box padding={3} bg="indigo" color="coral" fontWeight="bold">
          <Columns>
            <Box onClick={onClickColumnHeader("FirstName")}>First Name</Box>
            <Box>Last Name</Box>
            <Box>Location</Box>
            <Box>Date of Birth</Box>
          </Columns>
        </Box>
        {sortSearchResults(searchResults, sort).map(({ fields }) => (
          <Box padding={3} bg="white">
            <Columns>
              <Box>{fields.find((x) => x.key === "FirstName")?.value}</Box>
              <Box>{fields.find((x) => x.key === "LastName")?.value}</Box>
              <Box>{fields.find((x) => x.key === "DisplayAddress")?.value}</Box>
              <Box>{constructBirthDate(fields)}</Box>
            </Columns>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default App;

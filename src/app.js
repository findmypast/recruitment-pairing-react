import React from "react";
import { Stack, Heading, Box, Columns } from "./design-system";
import { searchResults } from "./data/results-expanded.json";
import { constructBirthDate } from "./utils";

function App() {
  return (
    <Box as="main" padding={5} maxWidth="1280px" margin="auto">
      <Stack space={3}>
        <Heading variant="primary" as="h1">
          Search results for John Smith
        </Heading>
        <Box padding={3} bg="indigo" color="coral" fontWeight="bold">
          <Columns>
            <Box>First Name</Box>
            <Box>Last Name</Box>
            <Box>Location</Box>
            <Box>Date of Birth</Box>
          </Columns>
        </Box>
        {searchResults.map(({ fields }) => (
          <Box padding={3} bg="white">
            <Columns>
              <Box>{fields.find(x => x.key === "FirstName")?.value}</Box>
              <Box>{fields.find(x => x.key === "LastName")?.value}</Box>
              <Box>{fields.find(x => x.key === "DisplayAddress")?.value}</Box>
              <Box>{constructBirthDate(fields)}</Box>
            </Columns>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default App;

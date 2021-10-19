import { Button, Box, Typography, CircularProgress } from "@mui/material";
import { useTranslation } from "../hooks/useTranslation";

const centerStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center"
};

const TranslationOutput = ({ text, setIsTranslating, type }) => {
  let { data, isLoading, isError, error } = useTranslation(type, text);

  if (isLoading) {
    return (
      <Box sx={centerStyle}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={centerStyle}>
        <Typography variant="h3" gutterBottom>
          Error
        </Typography>
        <Typography variant="p" sx={{ marginBottom: "15px" }}>
          {error?.message}
        </Typography>
        <Button variant="outlined" onClick={() => setIsTranslating(false)}>
          Reset
        </Button>
      </Box>
    );
  }

  if (data) {
    return (
      <Box sx={centerStyle}>
        <Typography variant="p">{data.contents?.translated}</Typography>
        <Button variant="outlined" onClick={() => setIsTranslating(false)}>
          Reset
        </Button>
      </Box>
    );
  }

  return null;
};

export default TranslationOutput;

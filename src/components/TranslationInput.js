import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";

const TranslationInput = ({
  handleSubmit,
  text,
  setTextToTranslate,
  setSelectedLanguage
}) => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "500px"
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        fullWidth
        label="Enter text to translate"
        value={text}
        onChange={(e) => {
          if (e.target instanceof HTMLInputElement) {
            setTextToTranslate(e.target.value);
          }
        }}
        sx={{ marginBottom: "15px" }}
      />
      <FormControl fullWidth sx={{ marginBottom: "15px" }}>
        <InputLabel id="translation-select-label">Language</InputLabel>
        <Select
          labelId="translation-select-label"
          id="translation-select"
          label="Language"
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <MenuItem value="yoda">Yoda</MenuItem>
          <MenuItem value="sith">Sith</MenuItem>
          <MenuItem value="dothraki">Dothraki</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleSubmit}>
        Translate
      </Button>
    </Box>
  );
};

export default TranslationInput;

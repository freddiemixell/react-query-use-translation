import { Paper, Typography } from "@mui/material";
import { useState } from "preact/hooks";
import TranslationInput from "./TranslationInput";
import TranslationOutput from "./TranslationOutput";

const Home = () => {
  let [textToTranslate, setTextToTranslate] = useState("");
  let [isTranslating, setIsTranslating] = useState(false);
  let [selectedLanguage, setSelectedLanguage] = useState("");

  const handleSubmit = (e) => {
    if (typeof e.preventDefault === "function") {
      e.preventDefault();
    }
    switch (true) {
      case !textToTranslate:
        alert("Enter text to translate!");
        return;
      case !selectedLanguage:
        alert("Select a language!");
        return;
      default:
        setIsTranslating(true);
        return;
    }
  };

  return (
    <div style={styles.wrapper}>
      <Typography variant="h1" mb={5}>
        (p)React Query Translator!
      </Typography>
      <Typography variant="h4" gutterBottom>
        Creator:{" "}
        <a
          href="https://github.com/freddiemixell"
          target="_blank"
          rel="noreferrer"
        >
          Freddie Mixell
        </a>
      </Typography>
      <Paper sx={styles.paper}>
        {isTranslating ? (
          <TranslationOutput
            type={selectedLanguage}
            text={textToTranslate}
            setIsTranslating={setIsTranslating}
          />
        ) : (
          <TranslationInput
            handleSubmit={handleSubmit}
            text={textToTranslate}
            setTextToTranslate={setTextToTranslate}
            setSelectedLanguage={setSelectedLanguage}
          />
        )}
      </Paper>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "60vh"
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    minHeight: "200px",
    minWidth: "500px"
  }
};

export default Home;

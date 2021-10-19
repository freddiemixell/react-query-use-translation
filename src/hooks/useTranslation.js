import { useQuery } from "react-query";
import axios from "axios";

const apiRoot = "https://api.funtranslations.com/translate";

const getTranslationWithText = async (type, text) => {
  const { data } = await axios.get(`${apiRoot}/${type}.json?text=${text}`);
  return data;
};

export const useTranslation = (type, text) => {
  return useQuery(["translation", type, text], () =>
    getTranslationWithText(type, text)
  );
};

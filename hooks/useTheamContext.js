import { useContext } from "react";
import { TheamContext } from "../contexts/TheamContext";

const useTheamContext = () => useContext(TheamContext)

export default useTheamContext
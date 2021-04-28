import axios from "axios";

export const getPier = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}/about/Pierdomenico`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

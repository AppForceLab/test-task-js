export const createNewObject = ({ details, adults, transmission, engine }) => {
    const newObj = { adults, [transmission]: 1, [engine]: 1, ...details };
  
    return newObj;
  };
export const settingActiveTypeCar = ({
    id,
    activeTypeCar,
    setActiveTypeCar,
  }) => {
    let updateIdElements;
    const isActive = activeTypeCar === id;
  
    if (isActive) {
      updateIdElements = '';
    } else {
      updateIdElements = id;
    }
  
    setActiveTypeCar(updateIdElements);
  };
export const settingActiveElements = ({
    id,
    activeElements,
    setActiveElements,
  }) => {
    let updateIdElements;
    const isActive = activeElements.includes(id);
  
    if (isActive) {
      updateIdElements = activeElements.filter(idEl => idEl !== id);
    } else {
      updateIdElements = [...activeElements, id];
    }
  
    setActiveElements(updateIdElements);
  };
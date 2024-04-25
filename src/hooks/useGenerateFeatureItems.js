export const useGenerateFeatureItems = (camper) => {
  const { adults, transmission, engine, details } = camper;

  const featuresObject = Object.entries({
    adults,
    transmission,
    engine,
    ...details,
  }).reduce((acc, cur) => {
    if (cur[1]) acc[cur[0]] = cur[1];
    return acc;
  }, {});

  return Object.entries(featuresObject).map((feature) => {
    const [key, value] = feature;

    if (key === 'airConditioner') return [key, `${value} air conditioner`];
    if (
      key === 'transmission' ||
      key === 'engine' ||
      key === 'gas' ||
      key === 'water'
    )
      return [key, `${value}`];

    return [key, `${value} ${key}`];
  });
};

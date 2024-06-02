export const deepmerge = (object1: object, object2: object) =>
  [object1, object2].reduce((deepmerged, object) => {
    Object.entries(object).forEach(([key, value]) => {
      const deepmergedKeyValue = deepmerged[key];

      if (deepmergedKeyValue) {
        if (["class", "className"].includes(key))
          return (deepmerged[key] = `${deepmergedKeyValue} ${value}`);

        const deepmergedKeyValueType = typeof deepmergedKeyValue;
        const objectKeyValueType = typeof value;

        if (
          deepmergedKeyValueType === "object" &&
          objectKeyValueType === "object"
        ) {
          if (Array.isArray(deepmergedKeyValue) && Array.isArray(value))
            return (deepmerged[key] = [...deepmergedKeyValue, ...value]);
          else
            return (deepmerged[key] = {
              ...deepmergedKeyValue,
              ...(value as object),
            });
        } else return (deepmerged[key] = value);
      }

      return (deepmerged[key] = value);
    });

    return deepmerged;
  }, {});

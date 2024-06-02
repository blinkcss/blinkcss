import { Deepmerge } from "./types";

export const deepmerge = <
  Object1Type extends object,
  Object2Type extends object,
>(
  object1: Object1Type,
  object2: Object2Type,
): Deepmerge<Object1Type, Object2Type> =>
  [
    object1 as Deepmerge<Object1Type, Object2Type>,
    object2 as Deepmerge<Object1Type, Object2Type>,
  ].reduce((deepmerged, object) => {
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
  });

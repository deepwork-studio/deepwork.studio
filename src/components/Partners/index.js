import React from "react";
import { useNumber } from "react-hanger";

import useInterval from "../../hooks/useInterval";
import useSiteMetadata from "../../hooks/useSiteMetadata";

const Partners = () => {
  const { partners } = useSiteMetadata();

  const cycle = useNumber(0, {
    upperLimit: partners.length - 1,
    lowerLimit: 0,
    loop: true
  });

  useInterval(() => cycle.increase(), 2500);

  return <>{partners[cycle.value]}</>;
};

export default Partners;

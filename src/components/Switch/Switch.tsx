import { useState } from "react";

import { css } from "@emotion/react";
import { Switch } from "@rebass/forms";

const switchBaseCss = css`
  align-self: flex-end;
`;

const SwitchAdapter = () => {
  const [toggle, setToggle] = useState(false);

  const handleSwitchOnClick = (e: any) => {
    e.stopPropagation();

    console.log("Switch click");
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <Switch
      checked={toggle}
      onClick={handleSwitchOnClick}
      // @ts-ignore
      css={switchBaseCss}
    />
  );
};

export default SwitchAdapter;

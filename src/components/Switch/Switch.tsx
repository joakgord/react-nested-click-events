import { useState } from "react";

import { Switch } from "@rebass/forms";

import { css } from "@emotion/react";

const switchBaseCss = css`
  align-self: flex-end;
`;

function SwitchAdapter() {
  const [toggle, setToggle] = useState(false);

  const handleSwitchOnClick = (e: any) => {
    e.stopPropagation();

    console.log("Switch click");
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <>
      <Switch
        checked={toggle}
        onClick={handleSwitchOnClick}
        // @ts-ignore
        css={switchBaseCss}
      />
    </>
  );
}

export default SwitchAdapter;

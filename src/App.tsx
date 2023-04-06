import { Image } from "rebass";

import { ThemeProvider } from "@emotion/react";
import { css } from "@emotion/react";
// @ts-ignore
import theme from "@rebass/preset";

const mainCss = css`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

import Card from "./components/Card";
import Switch from "./components/Switch";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main css={mainCss}>
        <section>
          <Card>
            <Image
              src="https://placehold.jp/3d4070/ffffff/250x150.png"
              sx={{
                borderRadius: 8,
              }}
            />
            <p>MasterCard</p>
            <Switch />
          </Card>
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;

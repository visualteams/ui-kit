![VisualTeams](https://www.visualteams.fr/wp-content/uploads/2020/04/path14.png)

# @visualteams/ui-kit

> UI components and theme for VisualTeams Plugins

[![npm package](https://img.shields.io/npm/v/@visualteams/ui-kit/latest.svg)](https://www.npmjs.com/package/@visualteams/ui-kit)
[![NPM Downloads](https://img.shields.io/npm/dm/@visualteams/ui-kit.svg?style=flat)](https://npmcharts.com/compare/@visualteams/ui-kit?minimal=true)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

## Installation

```bash
yarn add @visualteams/ui-kit
```

## Usage

### Colors

The UI-Kit export all colors used in the VisualTeams App

```javascript
import COLORS from '@visualteams/ui-kit/colors'

const App = () => {
  return <div style={{ color: COLORS.primary }}>Welcome to the jungle !</div>
}
```

| Color Name  | Description  |
|---|---|
|primary| Primary color of the App|
|secondary| Secondary color of the App|
|success| Indicate a success event, block, …|
|danger| Indicate an error, a warning, …|

### Material-ui theming

The UI-Kit export a [Material-ui theme object](https://material-ui.com/customization/theming) which help you to use the same component design as the VisualTeams App

```javascript
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import theme from "@visualteams/ui-kit/theme";

const App = () => {
    return <MuiThemeProvider theme={theme}>
      <Button>Click me !</Button>
    </MuiThemeProvider>
}
```

### Components

Some components (based on Material-ui) are available to help you maintain graphical consistency

@TODO

## Contributors

Contributions, issues and feature requests are welcome!
Feel free to check the issues page.

### Code Contributors

[//]: contributor-faces
<a href="https://github.com/Sylchauf"><img src="https://avatars2.githubusercontent.com/u/5569487?v=4" title="Sylchauf" width="80" height="80"></a>

[//]: contributor-faces

### Financial Contributors

<a href="https://github.com/techexmachina"><img src="https://avatars3.githubusercontent.com/u/36532333?v=4" title="Tech Ex Machina" width="80" height="80"></a>

## License

This project is licensed under the terms of the [MIT license](/LICENSE).

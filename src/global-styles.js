import { injectGlobal } from 'styled-components';
import { siteTheme } from './utils/variables';
import reset from 'styled-reset'

const baseStyles = () => injectGlobal`
  ${reset};
  body {
    font-family: ${siteTheme.textStyle.fontFamily};
  }

  button {
    border: none;
    outline: none;
  }

`
export default baseStyles;


/**
 * This module is used at providing an easy way to override material-ui
 * `shadows` properties.
 * material-ui expects the shadows to be following a certain pattern.
 * (source: https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/shadows.js)
 * This file is a slight adaptation (for colours) of the above material-ui source file.
 *
 * This module exports a `createShadows(hexColor: string): Array<string>` method
 * that takes a hex color (presumably from the configuration) and returns an array
 * of the 25 possible shadows matching the 25 elevations in material-ui.
 *
 * It’s convoluted, but it’s the official way:
 *   https://github.com/mui-org/material-ui/issues/8780#issuecomment-338480079
 */
/**
 * Returns the {r, g, b} version of an hex color
 * Source: https://stackoverflow.com/a/5624139/4075255
 *
 * Exported for testing purposes only.
 */
export declare const hexToRgb: (hex: any) => {
    r: number;
    g: number;
    b: number;
};
/**
 * Takes a hex color (presumably from the configuration) and returns an array
 * of the 25 possible shadows matching the 25 elevations in material-ui.
 */
declare const createShadows: (hexColor: string) => string[];
export default createShadows;

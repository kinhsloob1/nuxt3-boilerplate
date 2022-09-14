import { useGrid as mainUseGrid } from 'vue-screen';

export const grid = {
  xxs: 0,
  xs: 350,
  xi: 380,
  sl: 477,
  sm: 576,
  md: 768,
  msl: 868,
  lg: 992,
  xx: 1000,
  xl: 1200,
  xxl: 1400,
};

export { useScreen } from 'vue-screen';

export const useGrid = (): ReturnType<typeof mainUseGrid> => {
  return mainUseGrid(grid);
};

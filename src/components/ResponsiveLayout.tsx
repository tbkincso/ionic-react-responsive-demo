import { useWindowDimensions } from "./WindowDimensionProvider";

const ResponsiveLayout = ({
  breakPoint = 414,
  renderMobile,
  renderDesktop,
}: any) => {
  const { width } = useWindowDimensions() as any;
  return width > breakPoint ? renderDesktop() : renderMobile();
};

export default ResponsiveLayout;

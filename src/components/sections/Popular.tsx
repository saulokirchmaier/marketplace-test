import { Shopify } from "../Shopify";
import { Spotlight } from "../Spotligth";
import { TreandingSection } from "../Treanding";
import { Box } from "../ui/Box";

export const PopularSection = () => {
  return (
    <Box $direction="column" $alignItems="flex-start" $gap={24.37} style={{ flex: 1 }}>
      <Shopify />
      <Spotlight />
      <TreandingSection />
    </Box>
  );
};

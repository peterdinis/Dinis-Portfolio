import { VStack, Button, Link } from "@chakra-ui/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const HeroSmallBanner: FC = () => {
    const { t } = useTranslation();
  return (
    <VStack
      m="auto"
      my={{ base: 4, md: 10 }}
      mt={{ base: 4, md: 10 }}
      zIndex="100"
    >
      <Link
        href="https://github.com/peterdinis"
        textDecoration="none"
        isExternal={true}
        style={{ textDecoration: "none" }}
      >
        <Button
          borderRadius="full"
          borderColor="blue.600"
          borderWidth="2px"
          px={{ base: 4, md: 8 }}
          py={{ base: 2, md: 4 }}
        >
          {t("description.welcome")}
        </Button>
      </Link>
    </VStack>
  );
};

export default HeroSmallBanner;

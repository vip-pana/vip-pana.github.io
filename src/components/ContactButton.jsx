import { Icon, IconButton, Link, Stack } from "@chakra-ui/react";

import { motion } from "framer-motion";

import contactsItems from "../assets/mock/mockContacts";

export const ContactButton = (props) => {
  return (
    <Stack
      direction={props.columnDirection ? "column" : "row"}
      position={props.columnDirection ? "fixed" : "block"}
      marginLeft={props.columnDirection ? 0 : "20%"}
      marginTop={props.columnDirection ? 0 : "10%"}
      bottom={props.columnDirection ? "10%" : "0"}
      left={props.columnDirection ? "5%" : "0"}
      spacing={5}
    >
      {contactsItems.map((item, index) => (
        <motion.div
          key={index}
          initial={props.initialAnimation.initial}
          animate={props.initialAnimation.animate}
          transition={props.initialAnimation.transition}
        >
          <Link href={item.link} isExternal>
            <motion.button
              whileHover={props.initialAnimation.whileHover}
              whileTap={props.initialAnimation.whileTap}
            >
              <IconButton
                aria-label={item.ariaLabel}
                icon={<Icon as={item.icon} />}
                colorScheme={props.colorOptions.selectedColorScheme}
                color={props.colorOptions.buttonColor}
                variant={props.colorOptions.buttonVariant}
                boxShadow={props.colorOptions.buttonBoxShadow}
                _hover={props.colorOptions.hoverColor}
                border={"transparent"}
                size={"lg"}
                isRound
              />
            </motion.button>
          </Link>
        </motion.div>
      ))}
    </Stack>
  );
};

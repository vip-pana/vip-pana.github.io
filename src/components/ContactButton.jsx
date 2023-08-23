import { Icon, IconButton, Link, VStack } from "@chakra-ui/react";

import { motion } from "framer-motion";
import contactsItems from "../assets/mockContacts";

export const ContactButton = (props) => {
  return (
    <VStack position={"fixed"} bottom={"10%"} left={"5%"} spacing={5}>
      {contactsItems.map((item, index) => (
        <motion.div
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
                key={index}
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
    </VStack>
  );
};

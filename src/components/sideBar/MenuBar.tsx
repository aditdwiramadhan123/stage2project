import React from "react";
import { Box } from "@chakra-ui/react";
import {Text} from "@chakra-ui/react";

interface BarMenuProps {
  menu: string;
  icon: React.ElementType; // Menggunakan tipe React.ElementType untuk menunjukkan bahwa properti 'icon' menerima sebuah komponen React
}

const BarMenu: React.FC<BarMenuProps> = ({ menu, icon: Icon }) => {
  return (
    <a href="">
      <Box
        display={"flex"}
        height={59}
        padding={5}
        justifyContent={"flex-start"}
        alignItems={"center"}
        boxShadow="0px 2px 2px 2px rgba(0, 0, 0, 0.1)"
        bg={"#2C3A47"}
        marginY={1}
        sx={{
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Adjust the value to get the desired lightness
            transition: "background-color 0.3s ease", // Smooth transition effect
          },
        }}
      >
        <Icon size={15} style={{ marginRight: "10px", color: "white" }} />{" "}
        {/* Me-render komponen 'icon' sebagai sebuah elemen JSX */}
        <Text fontSize={15} style={{ color: "white" }}>{menu}</Text>
      </Box>
    </a>
  );
};

export default BarMenu

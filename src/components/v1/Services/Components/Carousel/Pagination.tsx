import * as React from "react";
import { Props as CardProps } from "../Card"
import useStyles from "../../style" 
import { Box, Button, Chip, IconButton } from "@mui/material";

type Props = {
    page: any;
    pages: Array<Props["page"]>;
    onClick: (page: Props["page"]) => void
    activePage: any;
};

const Pagination = ({ pages, activePage, onClick }: any) => {

    return (
      <Box
        display="flex"
        gap={1}>
          {pages.map((page: any) => {
            const isActivePage = activePage === page
            return (
                <Chip
                    key={page}
                    label=""
                    onClick={() => onClick(page)}
                    sx={{
                      width: isActivePage ? 20 : 12,
                      height: 8,
                      borderRadius: 50,
                      backgroundColor: "#ffbb36",
                      opacity: isActivePage ? 1 : 0.4
                    }}
                    />
            )
          })}
      </Box>
    )};

export default Pagination;


import { Topics } from "@/types/types";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList, ListChildComponentProps } from "react-window";

function RenderRow(props: ListChildComponentProps) {
  const { index, style, itemList } = props;

  return (
    <ListItem
      style={style}
      key={index}
      sx={{ pl: 4 }}
      component="div"
      disablePadding
    >
      <ListItemButton>
        <ListItemText primary={itemList[index]} />
      </ListItemButton>
    </ListItem>
  );
}

interface Props {
  itemList: Topics;
}

export default function ScrollableList({ itemList }: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: 200,
        bgcolor: "background.paper",
        overflowY: "auto",
      }}
    >
      <FixedSizeList
        height={200}
        itemSize={46}
        itemCount={itemList.length}
        overscanCount={5}
      >
        {(props) => <RenderRow {...props} itemList={itemList} />}
      </FixedSizeList>
    </Box>
  );
}
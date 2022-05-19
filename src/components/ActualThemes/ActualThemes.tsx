import { CircularProgress } from "@mui/material";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsTagsLoaded, selectTagsItem } from "../../store/ducks/tags/selectors";
// import { ActualThemeProps } from './ActualTheme.Props';
import {
  ActualThemeContainer,
  ActualThemeTextItems,
  ActualThemeTitle,
  ActualThemeTweetCount
} from "./ActulaTheme.styles";

export const ActualTheme: FC = (): React.ReactElement => {

  const tagsItem = useSelector(selectTagsItem);
  const isLoadedTags = useSelector(selectIsTagsLoaded);

  if (isLoadedTags) return <CircularProgress />
  return (
    <div style={{ ...ActualThemeContainer }}>
      <div style={{ ...ActualThemeTitle }}>Актуальные темы</div>
      {/* theme items  */}
      {tagsItem.map((tag, index) => (
        <div style={{ ...ActualThemeTextItems }} key={`${tag._id}&${index}`}>
          <Link to={`/home/search?q=${tag.name}`} style={{ textDecoration: "none", color: "inherit" }}>
            <h4>{tag.name}</h4>
            <span style={{ ...ActualThemeTweetCount }} >Твитов {tag.count}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}
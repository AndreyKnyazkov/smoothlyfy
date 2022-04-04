import {PlaylistItem, PlayListTracks, PlayListGenre, PlayListItemIcon} from "components/lib";
import {Play} from "components/icons";

function PlaylistItemTemplate({ color, cover, tracksTotal, genre, playlistHeight }) {
  return (
    <PlaylistItem color={color} cover={cover} playlistHeight={playlistHeight ? `${playlistHeight}` : null}>
      <PlayListTracks>{tracksTotal} tracks</PlayListTracks>
      <PlayListGenre>{genre}</PlayListGenre>
      <PlayListItemIcon>
        <Play />
      </PlayListItemIcon>
    </PlaylistItem>
  )
}

export {PlaylistItemTemplate}
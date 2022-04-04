import React from "react";
import {css} from '@emotion/css'
import {Play} from "components/icons";
import {PlaylistItem, PlayListTracks, PlayListGenre, PlayListItemIcon, Greeting, PlayListItems} from "components/lib";
import {recommendedList} from "screens/recommended/recommended-list"
import {PlaylistItemTemplate} from 'components/playlist-item'
// images

function Recommended() {
  return (
    <>
      <Greeting>Good Evening</Greeting>
      <PlayListItems>
        {recommendedList.slice(0, 4).map(({id, ...props}) => (
          <PlaylistItemTemplate key={id} {...props} />
        ))}
      </PlayListItems>
    </>
  )
}

export {Recommended, PlaylistItemTemplate}
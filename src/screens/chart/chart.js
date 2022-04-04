import React from "react";
import {css} from '@emotion/css'
import {ChartBlock, ChartBlocks, ChartTrackImage, ChartTrackAuthor, ChartTrackInfo, ChartTrackName, InterfaceDspr, InterfaceTitle, ChartTrack} from 'components/lib'
import {chart} from 'screens/chart/chart-list'

function ChartTrackTemplate({author, name, img, id}) {
  return (
    <ChartTrack key={id}>
      <ChartTrackImage number={id}>
        <img src={img} alt={`${author} - ${name}`} />
      </ChartTrackImage>
      <ChartTrackInfo>
        <ChartTrackAuthor>{name}</ChartTrackAuthor>
        <ChartTrackName>{author}</ChartTrackName>
      </ChartTrackInfo>
    </ChartTrack>
  )
}

function Chart() {
  return (
    <>
      <InterfaceTitle>Smoothlyfy Chart</InterfaceTitle>
      <InterfaceDspr>Trending on Smoothlyfy</InterfaceDspr>
      <ChartBlocks>
        <ChartBlock>
          {chart.slice(0, 5).map((props) => (
            <ChartTrackTemplate key={props.id} {...props} />
          ))}
        </ChartBlock>
        <ChartBlock>
          {chart.slice(5, 10).map((props) => (
            <ChartTrackTemplate key={props.id} {...props} />
          ))}
        </ChartBlock>
      </ChartBlocks>
    </>
  )
}

export {Chart}
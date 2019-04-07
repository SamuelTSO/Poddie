import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { 
  BodyWrapper,
  LeftPanel,
  RightPanel,
  TranscriptHeader,
  TranscriptText
} from './content_cmpnts';
import './content.css';

import Truck from '../../assets/test.png';

export default function Content() {
  return (
    <>
      <BodyWrapper>
        <LeftPanel>
          <Card>
            <CardActionArea className="card_actionarea">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={Truck}
                title="Contemplative Reptile"
                className="cardmedia"
              />
              <CardContent>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </LeftPanel>

        <RightPanel>
          <TranscriptHeader>This is a header</TranscriptHeader>
          <TranscriptText>This is a body</TranscriptText>
        </RightPanel>
      </BodyWrapper>
    </>
  );
  }
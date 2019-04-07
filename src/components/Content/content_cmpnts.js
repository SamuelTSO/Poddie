import styled from "styled-components";

const BodyWrapper = styled.div`
  display: flex;
  background: lightpink;
  padding-top: 80px;
  height: auto;
  width: 100vw;
  flex-direction: row;
`;

const LeftPanel = styled.div`
  background: #e8e8e8;
  width: 35%;
  border-right: 2.5px solid #8e8e8e;
  padding: 0 85px;
  padding-top: 60px;
  height: auto;
`;

const RightPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;

const RightPanel = styled.div`
  background: #FFFFFF;
  padding-left: 60px;
  padding-top: 40px;
  height: auto;
`;

const Header = styled.div`
  background: lightblue;
  height: auto;
`;

const HeaderOpaque = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.4);
  margin: auto auto;
  padding: 55px 100px;

`;

const EpisodeInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const EpCover = styled.div`
  height: 100px;
  width: 100px;
  background: lightblue;
`;

const EpText = styled.div`
  padding: 0 30px;
`;

const Title = styled.div`
  font-size: 28px;
  letter-spacing: 0.1em;
  color: white;
  font-family: 'Roboto';

  font-weight: 600;
  margin-bottom: 20px;
`;

const Author = styled.div`
  font-size: 22px;
  letter-spacing: 0.1em;
  color: white;
  font-family: 'Roboto';

  font-weight: 400;
`;

const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TranscriptText = styled.div`
  font-size: 18px;
  letter-spacing: 0.05em;
  line-height: 2em;
  font-family: 'Roboto';
  margin-bottom: 1em;
  width: 65%;
`;

const Category = styled.div`
  width: 35%;
  text-align: center;
  padding: 20px 25px;
`;

const CategoryButton = styled.div`
  font-size: 15px;
  letter-spacing: 0.05em;
  line-height: 2em;
  font-family: 'Roboto';
  background: #F0F0F0;
  padding: 0px 5px;
  color: black;
  border-radius: 15px;
`;

export {
  BodyWrapper,
  LeftPanel,
  RightPanelWrapper,
  RightPanel,

  Header,
  HeaderOpaque,
  EpisodeInfo,
  EpCover,
  EpText,
  Title,
  Author,
  
  ParagraphWrapper,
  TranscriptText,
  Category,
  CategoryButton
}
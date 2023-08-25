import { Space, Table, Tag } from "antd";
import { styled } from "styled-components";
import Sort from "./svg/SortSvg";
import UserSvg from "./svg/userSvg";
import Response from "./svg/Response";
import Progress from "./svg/Progress";
import Star from "./svg/Star";
import HalfStar from "./svg/HalfStar";
import NoStar from "./svg/NoStar";
import Triple from "./svg/TripleDot";
import Progress1 from "./svg/Progress1";
import Progress2 from "./svg/Progress2";
import {
  ColumnSpan,
  SortSvg,
  Container,
  AppSurvey,
  Line,
  IconSurvey,
  UserSpan,
  Recipient,
  Number,
  ResponseIcon,
  Number2,
  ResponseWord,
  Container1,
  ProgressDiv,
  Rate,
  Container2,
  StarDiv,
  RateNumber,
  Status,
  Modified,
  Dot,
  ProgressDiv2,
  ContainerSurvey
} from "./TableStyles";
const columns = [
  {
    title: (
      <div>
        <ColumnSpan>Name</ColumnSpan>
        <SortSvg>
          <Sort />
        </SortSvg>
      </div>
    ),
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: <ColumnSpan>Completion Rate</ColumnSpan>,
    dataIndex: "CompletionRate",
    key: "Completion Rate",
  },
  {
    title: <ColumnSpan>Average Score</ColumnSpan>,
    dataIndex: "AverageScore",
    key: "Average Score",
  },
  {
    title: <ColumnSpan>Status</ColumnSpan>,
    key: "Status",
    dataIndex: "Status",
  },
  {
    title: (
      <div>
        <ColumnSpan>Last Modified</ColumnSpan>
        <SortSvg>
          <Sort />
        </SortSvg>
      </div>
    ),
    key: "Last Modified",
    dataIndex: "LastModified",
  },
  {
    title: (
      <div>
        <ColumnSpan>Last Activated</ColumnSpan>
        <SortSvg>
          <Sort />
        </SortSvg>
      </div>
    ),
    key: "Last Activated",
    dataIndex: "LastActivated",
  },
  {
    title: <ColumnSpan>Actions</ColumnSpan>,
    key: "Actions",
    dataIndex: "Actions",
  },
];
const data = [
  {
    key: "1",
    name: (
      <Container>
        <AppSurvey>Application Survey</AppSurvey>
        <IconSurvey>
          <UserSpan>
            <UserSvg />
          </UserSpan>
          <Recipient>Recipients</Recipient>
          <Number>100</Number>
          <Line></Line>
          <ResponseIcon>
            <Response />
          </ResponseIcon>
          <ResponseWord>Responses </ResponseWord>
          <Number2>20</Number2>
        </IconSurvey>
      </Container>
    ),
    CompletionRate: (
      <Container1>
        <Rate>23.1%</Rate>
        <ProgressDiv>
          <Progress />
        </ProgressDiv>
      </Container1>
    ),
    AverageScore: (
      <Container2>
        <StarDiv>
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <HalfStar></HalfStar>
          <NoStar></NoStar>
        </StarDiv>
        <RateNumber>3.42</RateNumber>
      </Container2>
    ),
    Status: <Status>Active</Status>,
    LastModified: <Modified>Oct 25, 2021</Modified>,
    LastActivated: <Modified>Oct 25, 2021</Modified>,
    Actions: (
      <Dot>
        <Triple></Triple>
      </Dot>
    ),
  },
  {
    key: "1",
    name: (
      <Container>
        <AppSurvey>Application Survey</AppSurvey>
        <IconSurvey>
          <UserSpan>
            <UserSvg />
          </UserSpan>
          <Recipient>Recipients</Recipient>
          <Number>100</Number>
          <Line></Line>
          <ResponseIcon>
            <Response />
          </ResponseIcon>
          <ResponseWord>Responses </ResponseWord>
          <Number2>20</Number2>
        </IconSurvey>
      </Container>
    ),
    CompletionRate: (
      <Container1>
        <Rate>61.2%</Rate>
        <ProgressDiv>
          <Progress1 />
        </ProgressDiv>
      </Container1>
    ),
    AverageScore: (
      <Container2>
        <StarDiv>
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <HalfStar></HalfStar>
        </StarDiv>
        <RateNumber>4.37</RateNumber>
      </Container2>
    ),
    Status: <Status>Active</Status>,
    LastModified: <Modified>Sep 20, 2021</Modified>,
    LastActivated: <Modified>Sep 20, 2021</Modified>,
    Actions: (
      <Dot>
        <Triple></Triple>
      </Dot>
    ),
  },
  {
    key: "1",
    name: (
      <Container>
        <AppSurvey>Application Survey</AppSurvey>
        <IconSurvey>
          <UserSpan>
            <UserSvg />
          </UserSpan>
          <Recipient>Recipients</Recipient>
          <Number>100</Number>
          <Line></Line>
          <ResponseIcon>
            <Response />
          </ResponseIcon>
          <ResponseWord>Responses </ResponseWord>
          <Number2>20</Number2>
        </IconSurvey>
      </Container>
    ),
    CompletionRate: (
      <Container1>
        <Rate>100%</Rate>
        <ProgressDiv>
          <Progress2 />
        </ProgressDiv>
      </Container1>
    ),
    AverageScore: (
      <Container2>
        <StarDiv>
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star>
        </StarDiv>
        <RateNumber>5.00</RateNumber>
      </Container2>
    ),
    Status: <Status>Active</Status>,
    LastModified: <Modified>Sep 20, 2021</Modified>,
    LastActivated: <Modified>Sep 20, 2021</Modified>,
    Actions: (
      <Dot>
        <Triple></Triple>
      </Dot>
    ),
  },

  {
    key: "1",
    name: (
      <Container>
        <AppSurvey>Application Survey</AppSurvey>
        <IconSurvey>
          <UserSpan>
            <UserSvg />
          </UserSpan>
          <Recipient>Recipients</Recipient>
          <Number>100</Number>
        </IconSurvey>
      </Container>
    ),
    CompletionRate: (
      <Container1>
        {/* <Rate>
           23.1%
            </Rate> */}
        <ProgressDiv2>No Survey</ProgressDiv2>
      </Container1>
    ),
    AverageScore: <ContainerSurvey>No Survey</ContainerSurvey>,
    Status: <Status>Active</Status>,
    LastModified: <Modified>Oct 25, 2021</Modified>,
    LastActivated: <Modified>Oct 25, 2021</Modified>,
    Actions: (
      <Dot>
        <Triple></Triple>
      </Dot>
    ),
  },
];

const CampaignTable = () => <Table columns={columns} dataSource={data} />;
export default CampaignTable;

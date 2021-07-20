import React from 'react';
import { Container, Center, LogsCard, AutoLayout } from 'components';
import { styled } from 'stitches';

const Title = styled('h2', {
  color: '#222222',
  fontSize: 38,
});
const Text = styled('p', {
  color: '#222222',
  fontSize: 16,
});
const Logs = () => {
  return (
    <Container css={{ marginTop: 100, padding: 20, minHeight: '60vh' }}>
      <AutoLayout y space={1}>
        <AutoLayout y space={0.8}>
          <Title>Logs</Title>
          <Text>
            Here you will see all the incoming operations, in real time
          </Text>
        </AutoLayout>
        <LogsCard logs={logs} />
      </AutoLayout>
    </Container>
  );
};

export default Logs;

type TLogs = Array<{
  text: string;
  status: 'SUCCESS' | 'ERROR';
  before: '$' | '_';
}>;

const logs: TLogs = [
  { text: 'Cloning your project...', status: 'SUCCESS', before: '$' },
  {
    text: 'Retrieving data from bitFountDataSource',
    status: 'SUCCESS',
    before: '$',
  },
  { text: 'Importing data...', status: 'SUCCESS', before: '$' },
  { text: '...', status: 'SUCCESS', before: '$' },

  { text: 'Formating data...', status: 'SUCCESS', before: '$' },
  { text: '...', status: 'SUCCESS', before: '$' },

  { text: '.env', status: 'SUCCESS', before: '$' },
  { text: 'Retrieving .env file', status: 'SUCCESS', before: '$' },
  { text: 'Ignoring empty ENV VARS ', status: 'SUCCESS', before: '$' },
  {
    text: 'ERROR: Reading environement variable. At line 24:12 ',
    status: 'ERROR',
    before: '$',
  },
  {
    text: 'CLIENT_SECRET: "@-D86%-8FD9&-As9fd8A"',
    status: 'ERROR',
    before: '_',
  },
  {
    text: 'ACCESS_TOKEN: "2222-DD6%-8F549&-A566-545=45/s9fd8A"',
    status: 'ERROR',
    before: '_',
  },
  {
    text: 'BASE_INDEX: "A-12"',
    status: 'ERROR',
    before: '_',
  },

  {
    text: ' > At line 24:12 HASH_SHA:"AS #@-D86%8FD9&-As9fd8A_"',
    status: 'ERROR',
    before: '_',
  },
  {
    text: 'FAILED TO COMPILE.',
    status: 'ERROR',
    before: '$',
  },
];

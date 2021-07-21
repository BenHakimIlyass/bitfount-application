import { AutoLayout, MotionWrapper, MotionChild } from 'components';
import { styled } from 'stitches';

const Playground = styled('div', {
  padding: '30px',
  backgroundColor: '#222222',
  borderRadius: 8,
});
const Text = styled('code', {
  color: '#fff',
  fontFamily: '$code',
});

type Props = {
  logs: Array<{ text: string; status: 'SUCCESS' | 'ERROR'; before: '$' | '_' }>;
};
const LogsCard = ({ logs }: Props) => {
  return (
    <Playground>
      <AutoLayout y space={0.4} as={MotionWrapper}>
        {logs.map((item, key) => (
          <MotionChild key={key}>
            <Text
              css={{
                color: item.status === 'ERROR' ? '$orange' : '#fff',
                marginLeft: item.before === '_' ? 80 : 0,
              }}
            >
              {item.before === '$' ? '$' : null} {item.text}
            </Text>
          </MotionChild>
        ))}
      </AutoLayout>
    </Playground>
  );
};
export default LogsCard;

import { RichText, Skills, Slider, Works } from './blocks'
import PageTitle from "@/components/page-title/page-title";

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {
    case 'blocks.rich-text':
      Block = RichText;
      break;
    case 'blocks.skills':
      Block = Skills;
      break;
    case 'blocks.slider':
      Block = Slider;
      break;
    case 'blocks.works':
      Block = Works;
      break;
    case 'blocks.page-title':
      Block = PageTitle;
      break;
  }

  return Block ? <Block key={`block-${index}`} {...rest} /> : null;
};

const BlockManager = ({ blocks }) => {
  return <div>{blocks.map(getBlockComponent)}</div>;
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;

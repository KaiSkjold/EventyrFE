import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './Button';
import './Button.css'
import Sun from '../../Svg/Sun';
import Moon from '../../Svg/Moon';
import Heart from '../../Svg/Heart';
import AdjustLevels from '../../Svg/AdjustLevels';
import { ArrowNarrowLeft } from '../../Svg/ArrowNarrowLeft';
import ArrowNarrowRight from '../../Svg/ArrowNarrowRight';
import Bookmark from '../../Svg/Bookmark';
import BurgerMenu from '../../Svg/BurgerMenu';
import ChangeLanguage from '../../Svg/ChangeLanguage';
import Cogwheel from '../../Svg/Cogwheel';
import ColorPalette from '../../Svg/ColorPalette';
import Font from '../../Svg/Font';
import Logo from '../../Svg/Logo';
import Xmark from '../../Svg/Xmark';


const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'Black', value: '#000' },
        gray: { name: 'White', value: '#fff' },
      },
    },
    initialGlobals: {
    // Set the initial background color
    backgrounds: { value: 'white' },
  },
  },
  
};

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gap: 12,
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      alignItems: 'start',
      padding: 12,
    }}>
      <Button borderStyle="with-border" onClick={() => {}}>Click Me</Button>
      <Button borderStyle="no-border" onClick={() => {}}>Click Me</Button>

      <Button borderStyle="no-border"><AdjustLevels width={24} height={24} /></Button>
      <Button borderStyle="no-border"><ArrowNarrowLeft width={24} height={24} /></Button>
      <Button borderStyle="no-border"><ArrowNarrowRight width={24} height={24} /></Button>
      <Button borderStyle="no-border"><Bookmark width={24} height={24} bookmarkType="outlined" /></Button>
      <Button borderStyle="no-border"><Bookmark width={24} height={24} bookmarkType="filled" /></Button>
      <Button borderStyle="no-border"><BurgerMenu width={24} height={24} /></Button>
      <Button borderStyle="no-border"><ChangeLanguage width={24} height={24} /></Button>
      <Button borderStyle="no-border"><Cogwheel width={24} height={24} /></Button>
      <Button borderStyle="no-border"><ColorPalette width={24} height={24} /></Button>
      <Button borderStyle="no-border"><Font width={24} height={24} /></Button>
      <Button borderStyle="no-border"><Heart width={24} height={24} heartType="outlined" /></Button>
      <Button borderStyle="no-border"><Heart width={24} height={24} heartType="filled" /></Button>
      <Button borderStyle="no-border"><Logo width={24} height={24} /></Button>
      <Button borderStyle="no-border"><Moon width={24} height={24} /></Button>
      <Button borderStyle="no-border"><Sun width={24} height={24} /></Button>
      <Button borderStyle="no-border"><Xmark width={24} height={24} /></Button>
    </div>
  ),
};

export const WithBorder: Story = {
    args: {
        children: 'Click Me',
        onClick: () => alert('Button clicked'),
        borderStyle: 'with-border',
    },
};

export const WithoutBorder: Story = {
    args: {
        children: 'Click Me',
        onClick: () => alert('Button clicked'),
        borderStyle: 'no-border',
    },
};

export const WithAdjustLevelsIcon: Story = {
    args: {
        borderStyle: 'no-border',
        children: <AdjustLevels width={50} height={50} />,
    },
};

export const WithArrowNarrowLeftIcon: Story = {
    args: {
        borderStyle: 'no-border',
        children: <ArrowNarrowLeft width={50} height={50} />,
    },
};

export const WithArrowNarrowRightIcon: Story = {
    args: {
        borderStyle: 'no-border',
        children: <ArrowNarrowRight width={50} height={50} />,
    },
};

export const WithBookmarkEmptyIcon: Story = {
    args: {
        borderStyle: 'no-border',
        children: <Bookmark width={50} height={50} bookmarkType='outlined'/>,
    },
};

export const WithBookmarkFilledIcon: Story = {
    args: {
        borderStyle: 'no-border',
        children: <Bookmark width={50} height={50} bookmarkType='filled'/>,
    },
};

export const WithBurgerMenuIcon: Story = {
    args: {
        borderStyle: 'no-border',
        children: <BurgerMenu width={50} height={50} />,
    },
};

export const WithChangeLanguageIcon: Story = {
    args: {
        borderStyle: 'no-border',
        children: <ChangeLanguage width={50} height={50} />,
    },
};

export const WithCogwheelIcon: Story = {
    args: {
        borderStyle: 'no-border',
        children: <Cogwheel width={50} height={50} />,
    },
};

export const WithColorPaletteIcon: Story = {
    args: {
        borderStyle: 'no-border',
        children: <ColorPalette width={50} height={50} />,
    },
};

export const WithFontIcon: Story = {
    args: {
        borderStyle: 'no-border',
        children: <Font width={50} height={50} />,
    },
};

export const WithHeartEmptyIcon: Story = {
    args: {
        borderStyle: 'no-border',
        children: <Heart width={50} height={50} heartType='outlined'/>,
    },
};

export const WithHeartFilledIcon: Story = {
    args: {
        borderStyle: 'no-border',
        children: <Heart width={50} height={50} heartType='filled'/>,
    },
};

export const WithLogoIcon: Story = {
    args: {
        borderStyle: 'no-border',
        children: <Logo width={50} height={50} />,
    },
};

export const WithMoonIcon: Story = {
    args: {
        borderStyle: 'no-border',
        children: <Moon width={50} height={50} />,
    },
};

export const WithSunIcon: Story = {
    args: {
        borderStyle: 'no-border',
        children: <Sun width={50} height={50} />,
    },
};

export const WithXmarkIcon: Story = {
    args: {
        borderStyle: 'no-border',
        children: <Xmark width={50} height={50} />,
    },
};



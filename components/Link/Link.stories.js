import { CapsuleIcon, CapsuleLink } from './CapsuleLink';
import DiscordIcon from '../../assets/DiscordIcon.svg'

export default {
  title: 'Link',
  component: CapsuleLink,
  argTypes: {
    variant: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
      defaultValue: 'medium'
    }
  }
}

const LinkTemplate = (args) => (
  <CapsuleLink {...args} />
);

export const Link = LinkTemplate.bind({});
Link.args = {
  children: "Hei maailma"
}

const IconLinkTemplate = (args) => (
  <CapsuleLink {...args} />
);

export const IconLink = IconLinkTemplate.bind({});
IconLink.args = {
  children: (
    <>
      <CapsuleIcon src={DiscordIcon} />
      Discord
    </>
  )
}
import Button from '../components/Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClick: { action: 'HandleCLick_Action' } }, //action will be logged onClick
}

const Template = (args) => <Button {...args} />

// export const Red = () => <Button label="Press me" backgroundColor="red" />

export const Red = Template.bind({}) //story 1
Red.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'md',
}

export const Green = Template.bind({}) //story 2
Green.args = {
  backgroundColor: 'green',
  label: 'Press',
  size: 'md',
}

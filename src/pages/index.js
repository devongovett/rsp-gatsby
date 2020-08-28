import {SSRProvider} from '@react-aria/ssr';
import NotFound from '@spectrum-icons/illustrations/NotFound';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  ActionButton,
  Button,
  LogicButton,
  ActionGroup,
  ToggleButton,
  Breadcrumbs,
  ButtonGroup,
  Flex,
  Form,
  Heading,
  Text,
  IllustratedMessage,
  Image,
  Item,
  Section,
  Link,
  ListBox,
  Menu,
  MenuTrigger,
  Picker,
  TextField,
  RadioGroup,
  Radio,
  SearchField,
  StatusLight,
  Switch,
  View,
  Content,
  Well,
  Checkbox,
  Dialog,
  DialogTrigger,
  Divider,
  ProgressBar,
  ProgressCircle,
  Meter,
  Provider,
  defaultTheme
} from '@adobe/react-spectrum';

let sections = [
  {name: 'Animals', children: [
    {name: 'Aardvark'},
    {name: 'Kangaroo'},
    {name: 'Snake'}
  ]},
  {name: 'People', children: [
    {name: 'Danni'},
    {name: 'Devon'},
    {name: 'Ross'}
  ]}
];

export default function Home() {
  return (
    <SSRProvider>
      <Provider theme={defaultTheme} minHeight="100%">
        <View padding="size-250">
          <Flex direction="column" alignItems="center" gap="size-250">
            <Form width={300}>
              <Flex>
                <TextField label="First Name" placeholder="John" marginEnd="size-100" />
                <TextField label="Last Name" placeholder="Smith" />
              </Flex>
              <TextField label="Street Address" placeholder="123 Any Street" />
              <TextField label="Zip code" placeholder="12345" />
              <Picker label="Items" items={sections}>
                {section =>
                  <Section key={section.name} items={section.children} title={section.name}>
                    {item => <Item key={item.name}>{item.name}</Item>}
                  </Section>
                }
              </Picker>
              <RadioGroup label="Favorite pet">
                <Radio value="dogs">
                  Dogs
                </Radio>
                <Radio value="cats">
                  Cats
                </Radio>
                <Radio value="dragons">
                  Dragons
                </Radio>
              </RadioGroup>
              <Divider />
              <Switch>Time machine</Switch>
              <Checkbox>Test</Checkbox>
              <SearchField label="Search" placeholder="What are you looking for?" />
            </Form>
            <StatusLight variant="celery">Valid</StatusLight>
            <View marginBottom="size-250">
              <ButtonGroup>
                <Button variant="cta">Submit</Button>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
              </ButtonGroup>
            </View>
            <View marginBottom="size-250">
              <ButtonGroup orientation="vertical">
                <Button variant="cta">Submit</Button>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
              </ButtonGroup>
            </View>
            <ActionButton>Action!</ActionButton>
            <ActionButton isQuiet>Quiet Action!</ActionButton>
            <LogicButton variant="and">AND</LogicButton>
            <LogicButton variant="or">OR</LogicButton>
            <ToggleButton>Toggle me</ToggleButton>
            <ToggleButton isQuiet>Toggle me</ToggleButton>
            <ToggleButton isEmphasized>Toggle me</ToggleButton>
            <Well>Well well well</Well>
            <ProgressBar label="Progress" value={33} />
            <ProgressBar aria-label="Progress" isIndeterminate />
            <ProgressCircle aria-label="Loading" value={33} />
            <ProgressCircle aria-label="Loading" isIndeterminate />
            <Meter label="Progress" variant="positive" value={33} />
            <ActionGroup>
              <Item>One</Item>
              <Item>Two</Item>
              <Item>Three</Item>
            </ActionGroup>
            <Breadcrumbs>
              <Item>One</Item>
              <Item>Two</Item>
              <Item>Three</Item>
            </Breadcrumbs>
            <Flex marginTop="size-250" gap="size-100">
              <DialogTrigger isDismissable>
                <ActionButton>Modal</ActionButton>
                <Dialog>
                  <Image slot="hero" src="https://i.imgur.com/Z7AzH2c.png" objectFit="cover" />
                  <Heading>Heading</Heading>
                  <Divider />
                  <Content>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique risus. In sit amet suscipit lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In condimentum imperdiet metus non condimentum. Duis eu velit et quam accumsan tempus at id velit. Duis elementum elementum purus, id tempus mauris posuere a. Nunc vestibulum sapien pellentesque lectus commodo ornare.</Text>
                  </Content>
                </Dialog>
              </DialogTrigger>
              <DialogTrigger type="popover">
                <ActionButton>Popover</ActionButton>
                <Dialog>
                  <Heading>Heading</Heading>
                  <Divider />
                  <Content>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique risus. In sit amet suscipit lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In condimentum imperdiet metus non condimentum. Duis eu velit et quam accumsan tempus at id velit. Duis elementum elementum purus, id tempus mauris posuere a. Nunc vestibulum sapien pellentesque lectus commodo ornare.</Text>
                  </Content>
                </Dialog>
              </DialogTrigger>
              <DialogTrigger type="tray">
                <ActionButton>Tray</ActionButton>
                <Dialog>
                  <Heading>Heading</Heading>
                  <Divider />
                  <Content>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique risus. In sit amet suscipit lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In condimentum imperdiet metus non condimentum. Duis eu velit et quam accumsan tempus at id velit. Duis elementum elementum purus, id tempus mauris posuere a. Nunc vestibulum sapien pellentesque lectus commodo ornare.</Text>
                  </Content>
                </Dialog>
              </DialogTrigger>
            </Flex>
            <View width={200}>
              <IllustratedMessage>
                <NotFound />
                <Heading>No Results</Heading>
                <Content>See <Link><a href="https://adobe.com" target="_blank">the docs</a></Link> for info.</Content>
              </IllustratedMessage>
            </View>
            <View borderColor="gray-500" borderWidth="thin" width={200}>
              <ListBox items={sections} maxHeight={200}>
                {section =>
                  <Section key={section.name} items={section.children} title={section.name}>
                    {item => <Item key={item.name}>{item.name}</Item>}
                  </Section>
                }
              </ListBox>
            </View>
            <MenuTrigger>
              <ActionButton>Menu</ActionButton>
              <Menu>
                <Item>One</Item>
                <Item>Two</Item>
                <Item>Three</Item>
              </Menu>
            </MenuTrigger>
          </Flex>
        </View>
      </Provider>
    </SSRProvider>
  );
}

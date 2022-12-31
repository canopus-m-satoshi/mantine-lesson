import {
  Badge,
  Button,
  Card,
  CardSection,
  Group,
  Image,
  Text,
} from '@mantine/core'
import { FC } from 'react'

type Props = {
  title: string
  content: string
  status: string
  postUrl: string
}

export const CustomCard: FC<Props> = ({ title, content, status, postUrl }) => {
  return (
    <Card shadow="md">
      <CardSection>
        <Image
          src={postUrl}
          height={160}
          alt="With default placeholder"
          withPlaceholder
        />
      </CardSection>
      <Group position="apart" my="md">
        <Text weight={800}>{title}</Text>
        <Badge color="pink" radius="lg" variant="filled">
          {status}
        </Badge>
      </Group>
      <Text size="sm">{content}</Text>
      <Button mt="md" size="xs" variant="light" color="indigo" fullwidth>
        Subscribe
      </Button>
    </Card>
  )
}

import { ReplyIcon } from '@heroicons/react/solid'
import { Button, Center, Group } from '@mantine/core'
import Link from 'next/link'

import { Layout } from '../components/Layout'
const GroupDemo = () => {
  return (
    <Layout title="Group">
      <Group my="md" grow>
        <Button color="indigo">1</Button>
        <Button color="teal">2</Button>
        <Button color="orange">3</Button>
      </Group>
      <Group my="md" position="right" direction="column">
        <Button color="indigo">1</Button>
        <Button color="teal">2</Button>
        <Button color="orange">3</Button>
      </Group>
      <Group my="md" align="start">
        <Button color="indigo" className="h-10">
          1
        </Button>
        <Button color="teal" className="h-20">
          2
        </Button>
        <Button color="orange" className="h-32">
          3
        </Button>
      </Group>
      <Center>
        <Link href="/">
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Center>
    </Layout>
  )
}
export default GroupDemo

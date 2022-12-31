import { LogoutIcon } from '@heroicons/react/outline'
import { ShieldCheckIcon } from '@heroicons/react/solid'
import { ActionIcon, Center, Menu } from '@mantine/core'
import { NextLink } from '@mantine/next'
import { Settings } from 'tabler-icons-react'

import { Layout } from '../components/Layout'
import { supabase } from '../utils/supabase'

export const DashBoard = () => {
  const signOut = () => {
    supabase.auth.signOut()
  }

  return (
    <Layout title="DashBoard">
      <Center>
        <ShieldCheckIcon className="mb-4 h-14 w-14 text-teal-500" />
      </Center>
      <Center>
        <Menu trigger="hover" size="xl">
          <Menu.Label>UI Components</Menu.Label>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/button"
          >
            Button
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/grid"
          >
            Grid
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/group"
          >
            Group
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/multi-select"
          >
            Multi Select
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/fetch-api"
          >
            Data loader
          </Menu.Item>{' '}
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/dialog"
          >
            Dialog
          </Menu.Item>
        </Menu>
      </Center>
      <Center>
        <ActionIcon my="md" size="lg" onClick={signOut}>
          <LogoutIcon />
        </ActionIcon>
      </Center>
    </Layout>
  )
}
// components
import { ActionIcon, Button, Menu } from '@mantine/core'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
// hooks
import { useMantineTheme } from '@mantine/core'

export default function TheMenu() {
  const theme = useMantineTheme()

  return (
    <Menu shadow="md" width={150}>
      <Menu.Target>
        <ActionIcon>
          <MoreVertIcon />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item icon={<AccountCircleIcon />}>Profile</Menu.Item>
        <Menu.Item icon={<SettingsIcon />}>Settings</Menu.Item>
        <Menu.Item icon={<LogoutIcon />}>Log out</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

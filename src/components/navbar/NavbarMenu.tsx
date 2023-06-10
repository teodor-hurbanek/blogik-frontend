// components
import { Button, Menu } from '@mantine/core'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
// hooks
import { useMantineTheme } from '@mantine/core'

export default function TheMenu() {
  const theme = useMantineTheme()

  return (
    <Menu shadow="md" width={150}>
      <Menu.Target>
        <Button variant="subtle" color={theme.primaryColor} leftIcon={<AccountCircleIcon />}>
          Login
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Profile</Menu.Label>
        <Menu.Item icon={<AccountCircleIcon />}>Profile</Menu.Item>
        <Menu.Item icon={<SettingsIcon />}>Settings</Menu.Item>
        <Menu.Item icon={<LogoutIcon />}>Log out</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

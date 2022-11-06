import type { FontAwesome } from '@expo/vector-icons'

export type TabBarIconProps = {
    color: string
    name: React.ComponentProps<typeof FontAwesome>['name']
}

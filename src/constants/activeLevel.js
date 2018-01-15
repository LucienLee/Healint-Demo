import colors from './colors'

export default {
  FULL: {
    value: 'Full',
    brief: 'Active',
    label: 'No Affected',
    icon: 'battery-full',
    color: colors.blue
  },
  HALF: {
    value: 'Half',
    brief: 'Slowed',
    label: 'Slowed Down',
    icon: 'battery-half',
    color: colors.yellow
  },
  NONE: {
    value: 'None',
    brief: 'Missed',
    label: 'Missed Actitivies',
    icon: 'battery-empty',
    color: colors.orange
  }
}

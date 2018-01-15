<template lang="pug">
.box(:id="currentRecord.date", @click="handleClick")
  div(v-if="!isEditing")
    .columns.is-mobile(v-if="currentRecord.dayExists")
      .column.is-3.has-text-centered
        .card-status
          FontAwesomeIcon.card-statusItem.icon.is-large(
            :icon="mapDayTypeToIcon(currentRecord.dayType)",
            :class="mapDayTypeToClass(currentRecord.dayType)"
          )
          span.card-statusItem.levelTag.tag(:class="mapActiveLevelToClass(currentRecord.activeLevel)")
            | {{ mapActiveLevelToBrief(currentRecord.activeLevel) }}
      .column
        p.card-date {{ normalizeDate(currentRecord.date) }}
        .tags(v-if="currentRecord.treatment.length !== 0")
          span.tag.is-dark.is-small(v-for="tag in currentRecord.treatment") {{ tag }}
        .p(v-else) No treatment
    p.card-title.card-title--empty(v-else)
      FontAwesomeIcon.icon(icon="question-circle")
      span.is-size-7.is-size-5-desktop {{ `How was your ${normalizeDate(currentRecord.date)}?` }}
  .field.is-clearfix(v-else)
    label.label.card-section
      h2.title.is-6.is-size-5-desktop.has-text-centered {{ `How was your ${normalizeDate(currentRecord.date)}?` }}
      IconRadio(v-model="currentRecord.dayType", :options="dayTypeOptions", :styles="dayTypeStyles", :highlightOnInit="true")
    div(v-if="currentRecord.dayExists || currentRecord.dayType")
      label.label.card-section
        p.is-size-7.is-size-6-desktop.card-label Were your activities affected?
        IconRadio(v-model="currentRecord.activeLevel", :options="activeLevelOptions", :styles="activeLevelStyles")
      label.label.card-section
        p.is-size-7.is-size-6-desktop.card-label Treatment(s) Used
        TagSelect(v-model="currentRecord.treatment", :options="treatmentOptions")
      label.label.card-section
        p.is-size-7.is-size-6-desktop.card-label Notes
        textarea.textarea(placeholder="Your notes", rows="3", v-model="currentRecord.notes")
      button.button.is-pulled-right(@click.stop="handleSubmit") Done

</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import moment from 'moment'
import dayType from '@/constants/dayType'
import activeLevel from '@/constants/activeLevel'
import colors from '@/constants/colors'

import IconRadio from '@/components/IconRadio'
import TagSelect from '@/components/TagSelect'

export default {
  name: 'RecordCard',
  components: {
    FontAwesomeIcon,
    IconRadio,
    TagSelect
  },
  props: {
    record: {
      type: Object,
      required: true
    }
  },
  data () {
    const { record } = this
    return {
      isEditing: false,
      currentRecord: {
        date: record.date,
        dayExists: record.dayExists ? record.dayType : false,
        dayType: record.dayType ? record.dayType : '',
        activeLevel: record.activeLevel ? record.activeLevel : activeLevel.FULL.value,
        treatment: record.treatment ? record.treatment : [],
        notes: record.notes ? record.notes : ''
      }
    }
  },
  computed: {
    dayTypeOptions () {
      return Object.values(dayType)
    },
    activeLevelOptions () {
      return Object.values(activeLevel)
    },
    treatmentOptions () {
      return this.$store.state.settings
    },
    dayTypeStyles () {
      return Object.values(dayType).map(type => ({
        icon: {
          on: {
            color: type.color
          },
          off: {
            color: colors.grey,
            backgroundColor: colors.grey,
            borderRadius: '50%'
          }
        },
        label: {
          on: {
            color: type.color
          },
          off: {
            color: type.color
          }
        }
      }))
    },
    activeLevelStyles () {
      return Object.values(activeLevel).map(level => ({
        icon: {
          on: {
            color: level.color
          },
          off: {
            color: colors.grey
          }
        },
        label: {
          on: {
            color: level.color
          },
          off: {
            color: level.color
          }
        }
      }))
    }
  },
  methods: {
    normalizeDate (date) {
      return moment(date).format('dddd, MMMM D')
    },
    mapDayTypeToIcon (type) {
      return dayType[type.toUpperCase()].icon
    },
    mapDayTypeToClass (type) {
      return [`dayIcon--${type.toLowerCase()}`]
    },
    mapActiveLevelToBrief (level) {
      return activeLevel[level.toUpperCase()].brief
    },
    mapActiveLevelToClass (level) {
      return [`levelTag--${level.toLowerCase()}`]
    },
    handleClick () {
      this.isEditing = true
    },
    handleSubmit () {
      this.isEditing = false
      this.currentRecord.dayExists = true
      this.$emit('submit', this.currentRecord)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/variables'
@import '~bulma/sass/utilities/mixins'

.card-date
  margin-bottom: 0.5em

.card-section
  margin-bottom: 1em

.card-label
  line-height: 2.5em

.card-title--empty
  font-weight: normal

  .icon
    margin-right: 0.5em

  .icon, span
    vertical-align: middle

.card-status
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center

.card-statusItem
  max-width: 100%
  margin: 0 auto
  &:not(:last-child)
    margin-bottom: 0.5em

.dayIcon--good
  color: $blue

.dayIcon--okay
  color: $yellow

.dayIcon--mig
  color: $orange

.levelTag
  height: 1.6em

.levelTag--full
  background-color: $blue

.levelTag--half
  background-color: $yellow

.levelTag--none
  background-color: $orange

</style>

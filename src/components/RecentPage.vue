<template lang="pug">
.container
  RecordCard(v-for="(record, index) in records",
    :record="record", :key="index", @submit="handleSubmit(index, $event)")
  PopNotification(:show="message.length !== 0")
    p {{ message }}
</template>

<script>
import moment from 'moment'
import RecordCard from '@/components/RecordCard'
import PopNotification from '@/components/PopNotification'

const popUpTime = 1500

export default {
  name: 'RecentPage',
  components: {
    RecordCard,
    PopNotification
  },
  data () {
    return {
      message: ''
    }
  },
  computed: {
    records () {
      return this.$store.state.records
    }
  },
  methods: {
    async handleSubmit (id, record) {
      this.$nextTick(() => {
        document.getElementById(record.date).scrollIntoView({
          block: 'center',
          behavior: 'smooth'
        })
      })
      try {
        await this.$store.dispatch('changeRecord', {
          id,
          ...record
        })
        this.message = `Changes to ${moment(record.date).format('dddd, MMMM D')} are saved`
        setTimeout(() => {
          this.message = ''
        }, popUpTime)
      } catch (e) {
        this.message = `Can't save changes: ${e}`
      }
    }
  }
}
</script>

<style lang="sass" scoped>
</style>

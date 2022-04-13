const app = new Vue({
    el: '#app',

    data () {
        return {
            courses: [
                { id: 1, title: 'Curso 1', time: 10 },
                { id: 2, title: 'Curso 2', time: 15 },
                { id: 3, title: 'Curso 3', time: 25 },
                { id: 4, title: 'Curso 4', time: 50 },
                { id: 24, title: 'Curso 5', time: 100 }
            ],
            title: null,
            time: null,
            warning: false
        }
    },

    computed: {
        totalTime () {
            if (!this.courses.length) {
                return 0
            }
            return this.courses.reduce((a, b) => a + parseInt(b.time), 0)
        }
    },

    methods: {
        addCourse () {
            if (this.title && this.time && this.time > 0) {
                let newId = 1
                if (this.courses.length != 0) {
                    aIds = []
                    this.courses.forEach(course => aIds.push(course.id))
                    newId = Math.max(...aIds) + 1
                }
                this.courses.push({ id: newId, title: this.title, time: this.time })
                // console.log(courses)
            } else {
                // console.log('title: ' + this.title)
                // console.log('time: ' + this.time)
                this.showWarning()
            }
        },

        showWarning () {
            this.warning = !this.warning
            setTimeout(
                () => this.warning = !this.warning,
                4000
            )
        }
    }
})
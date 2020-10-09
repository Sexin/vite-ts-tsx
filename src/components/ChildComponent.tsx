import { defineComponent } from 'vue'

export default defineComponent({
    name: 'child',
    props: {
        name: {
            type: String,
            default: 'child'
        }
    },
    setup(prop) {
        return () => (
            <>
                <h1>{prop.name}</h1>
            </>
        )
    }
})
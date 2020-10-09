import { defineComponent, watchEffect, reactive } from 'vue';
import { useStore } from 'vuex';
import ChildComponent from '../components/ChildComponent'
import HelloWord from '../components/HelloWorld';
import { Button } from 'ant-design-vue';

interface Book {
    title: string
}

export default defineComponent({
    name: 'App',
    setup(props) {
        const store = useStore()
        
        const book_title: Book = reactive<Book>({
            title: '书名'
        })

        watchEffect(onInvalidate => {
            let title = book_title.title
            let st = setTimeout(() => {
                console.log(title)
            }, 1000); 
            onInvalidate(() => {
                clearTimeout(st);
            })
        })

        const inputChange = (e: Event) => {
            book_title.title = (e.target as HTMLInputElement).value
        }

        return () => (
            <>
                <h1>Home</h1>
                <h1 style={titleStyle}>{book_title.title}</h1>
                <Button type="primary">Primary</Button>
                <a-input type="text" value={book_title.title} onInput={(e: Event) => inputChange(e)}/>
                <ChildComponent name={book_title.title} />
                <HelloWord></HelloWord>
            </>
        );
    }
});

const titleStyle = {
    color: '#f60'
}
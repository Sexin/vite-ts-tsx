import { defineComponent } from 'vue';
import HelloWord from '../components/HelloWorld';
import Logo from '../assets/logo.png';

interface Book {
    title: string
}

export default defineComponent({
    name: 'App',
    setup() {
        const bookobj: Book = {
            title: '🌲的名字'
        }
        return () => (
            <>
                <h1>About</h1>
                <img src={Logo} />
                <h3>{bookobj.title}</h3>
                <HelloWord />
            </>
        );
    }
});
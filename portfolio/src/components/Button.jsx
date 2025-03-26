import { Link } from 'react-router';
export default function Button({ text, link }) {
    return (
        <Link to={`${link}`}>
            <button className='hide bg-beige text-alt-black rounded-lg pl-(--spacing-s) pr-(--spacing-s) pt-(--spacing-xs) pb-(--spacing-xs) hover:bg-shade hover:text-alt-white transition duration-300 ease-in-out'>
            {text}
            </button>
        </Link>
    )
}
import Link from 'next/link';
import { usePageTitles } from '../context/PageTitleContext';

const Navigation = () => {
  const { home, about, blog } = usePageTitles();
    return (
        <nav className="p-4 bg-gray-800 text-white">
        <ul className="flex space-x-4 justify-center md:justify-start">
            <li>
            <Link href="/" className="hover:underline">
                {home}
            </Link>
            </li>
            <li>
            <Link href="/about" className="hover:underline">
                {about}
            </Link>
            </li>
            <li>
            <Link href="/blog" className="hover:underline">
                {blog}
            </Link>
            </li>
        </ul>
        </nav>
    );
    };
      
  
export default Navigation;
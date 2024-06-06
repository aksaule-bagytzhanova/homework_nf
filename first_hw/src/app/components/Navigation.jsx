import Link from 'next/link';
import { pageTitle as homeTitle } from '../pages/index';
import { pageTitle as aboutTitle } from '../pages/about';
import { pageTitle as blogTitle } from '../pages/blog';

const Navigation = () => {
    return (
        <nav className="p-4 bg-gray-800 text-white">
        <ul className="flex space-x-4 justify-center md:justify-start">
            <li>
            <Link href="/" className="hover:underline">
                {homeTitle}
            </Link>
            </li>
            <li>
            <Link href="/about" className="hover:underline">
                {aboutTitle}
            </Link>
            </li>
            <li>
            <Link href="/blog" className="hover:underline">
                {blogTitle}
            </Link>
            </li>
        </ul>
        </nav>
    );
    };
      
  
export default Navigation;
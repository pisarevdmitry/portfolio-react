import Home from './components/Home';
import Main from './components/Main';
import AboutPage from './components/AboutPage'
import MyWorksPage from './components/MyWorksPage';
import BlogPage from './components/Blog/BlogSection';

export default [{
    path: '/',
    exact:true,
    component: Home
},{
    path: '/(my-works|about|blog)/',
    exact: true,
    component: Main
}]

export const mainRoutes = [
    {
        path: '/about',
        exact:true,
        component: AboutPage
    },
    {
        path: '/my-works',
        exact:true,
        component: MyWorksPage
    },
    {
        path: '/blog',
        exact:true,
        component: BlogPage
    }
]
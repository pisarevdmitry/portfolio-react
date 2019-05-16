import Home from './components/Home';
import Main from './components/Main';
import AboutPage from './components/AboutPage'
import AdminPage from './components/admin/AdminPage'
import MyWorksPage from './components/MyWorksPage';
import BlogPage from './components/Blog/BlogSection';
import BlogForm from './components/admin/BlogForm';
import WorkForm from './components/admin/WorkForm';
import SkillsBlock from './components/admin/SkillsBlock'

export default [{
    path: '/',
    exact:true,
    component: Home
},{
    path: '/(my-works|about|blog)/',
    exact: true,
    component: Main
},
{
    path: '/admin',
    exact: false,
    component: AdminPage,
    authRequired: true
}    
]

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
export const adminRoutes = [
    
    {
        path: '/admin/blog',
        exact:true,
        component: BlogForm
    },
    
    {
        path: '/admin/works',
        exact:true,
        component: WorkForm
    },
    {
        path: '/admin/',
        exact:true,
        component: SkillsBlock,
    }
]
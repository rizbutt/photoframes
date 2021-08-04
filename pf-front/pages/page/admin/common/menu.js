import {
    Home,
    Box,
    DollarSign,
    Tag,
    Clipboard,
    Camera,
    AlignLeft,
    UserPlus,
    Users,
    Chrome,
    BarChart,Settings,Archive, LogIn
} from 'react-feather';

export const MENUITEMS = [
    {
        path: 'main', title: 'Dashboard', icon: Home, type: 'link', badgeType: 'primary', active: false
    },
    {
        title: 'Frames', icon: Box, type: 'sub', active: false, children: [
                    { path: 'frame/frames', title: 'Frames', type: 'link' },
                    { path: 'frame/add_frame', title: 'Add Frame', type: 'link' },
            
        ]
    },
    
    
    {
        title: 'Users', icon: UserPlus, type: 'sub', active: false, children: [
            { path: '/users/list-user', title: 'User List', type: 'link' },
            { path: '/users/create-user', title: 'Create User', type: 'link' },
        ]
    },
    
    
    
    {
        title: 'Login',path:'/page/account/login', icon: LogIn, type: 'link', active: false
    }
]

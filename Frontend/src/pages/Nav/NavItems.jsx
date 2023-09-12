export const navItems = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        cName: 'nav-item',
    },
    {
        id: 2,
        title: 'Fitness',
        path: '/',                      //// FIX
        cName: 'nav-item',
    },
    {
        id: 3,
        title: 'Nutrition',
        path: 'nutrition',                      //// FIX
        cName: 'nav-item',
    },
    {
        id: 4,
        title: 'My Plan',
        path: '/',                      //// FIX
        cName: 'nav-item',
    },
]

export const fitnessDropdown = [
    {
        id: 1,
        title: 'Programs',
        path: '/workout_programs/',                      //// FIX
        cName: 'submenu-item',
    },
    {
        id: 2,
        title: 'Excercises',
        path: "exercises/:searchParameters",                //// FIX
        cName: 'submenu-item',
    },
    // {
    //     id: 3,
    //     title: '',
    //     path: '/',
    //     cName: 'nav-item',
    // },
]

export const nutritionDropdown = [
    {
        id: 1,
        title: 'Dashboard',
        path: 'nutrition',                      //// FIX
        cName: 'submenu-item',
    },
    {
        id: 2,
        title: 'other things',
        path: '/',                      //// FIX
        cName: 'submenu-item',
    },
]

export const userDropdown = [
    {
        id: 1,
        title: 'My Info',
        path: '/',                      //// FIX
        cName: 'submenu-item',
    },
    {
        id: 2,
        title: 'My Plan',
        path: '/users/',                      //// FIX
        cName: 'submenu-item',
    },
]
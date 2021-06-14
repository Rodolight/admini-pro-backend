const getMenuFrontEnd = (route = 'USER_ROLE') => {
  const  menu = [
        {title: 'Dashboard',
         icon: 'mdi mdi-gauge',
         subMenu: [ 
           {title: 'Main',url: '/'},
           {title: 'ProgressBar',url: 'progress'},
           {title: 'Charts',url: 'graphic1'},
           {title: 'Promises', url: 'promises'},
           {title: 'Rxjs', url: 'rxjs'}
         ]
        },
        {title: 'Mantenimientos',
         icon: 'mdi mdi-folder-lock-open',
        subMenu: [ 
         
          {title: 'Hospitales',url: 'hospitals'},
          {title: 'Médicos',url: 'doctors'},
        ]
       },
      ];

      if(route === 'ADMIN_ROLE'){
          menu[1].subMenu.unshift( {title: 'Usuarios',url: 'users'},)
      }

      return menu;
}

module.exports = {
    getMenuFrontEnd
}
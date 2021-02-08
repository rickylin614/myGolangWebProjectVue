import home from '@/components/Nav'
import userManage from '@/views/user/userManage'
import loginRecord from '@/views/user/loginRecord'
import onlineMember from '@/views/user/onlineMember'

export default {
    router:
    {
        path:'/user',
        name: 'user',
        component: home,
        hidden: true,
        children: [
          {
            path:'/userManager',
            name:'用戶查詢',  
            component:userManage
          },
          {
            path:'/loginRecord',
            name:'登入記錄',
            component:loginRecord
          },
          {
            path:'/onlineMember',
            name:'在線會員',
            component:onlineMember
          }
        ]
    }
}
  
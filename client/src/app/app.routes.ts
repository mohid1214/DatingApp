import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { MemberList } from '../features/members/member-list/member-list';
import { MemberDetailed } from '../features/members/member-detailed/member-detailed';
import { Lists } from '../features/lists/lists';
import { Messages } from '../features/messages/messages';
import { authGuard } from '../core/guards/auth-guard';
import { MemberProfile } from '../features/members/member-profile/member-profile';
import { MemberPhotos } from '../features/members/member-photos/member-photos';
import { MemberMessages } from '../features/members/member-messages/member-messages';
import { memberResolver } from '../features/members/member-resolver';

export const routes: Routes = [
    { path: 'home', component: Home },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            { path: 'members', component: MemberList },

            {
                path: 'members/:id', 
                component: MemberDetailed,
                resolve: {member: memberResolver},
                runGuardsAndResolvers: 'always',
                children:[
                    {path:'',redirectTo: 'profile',pathMatch: 'full'},
                    {path:'profile',component:MemberProfile, title:'Profile'},
                    {path:'photos',component:MemberPhotos, title:'Photos'},
                    {path:'messages',component:MemberMessages, title:'Messages'}
                ]
            },

            { path: 'lists', component: Lists },
            { path: 'messages', component: Messages },
        ]
    },


    { path: '**', component: Home }
];

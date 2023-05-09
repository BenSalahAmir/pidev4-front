import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { AddDeliveryComponent } from './backOffice/add-delivery/add-delivery.component';
import { DeliverysmenComponent } from './backOffice/deliverysmen/deliverysmen.component';
import { DeliverysComponent } from './backOffice/deliverys/deliverys.component';
import { ListuserComponent } from './backOffice/user/listuser/listuser.component';
import { AdduserComponent } from './frontOffice/user/adduser/adduser.component';
import { LoginComponent } from './frontOffice/user/login/login.component';
import { UpdateuserComponent } from './frontOffice/user/updateuser/updateuser.component';
import { ListForumFrontComponent } from './frontOffice/forum/list-forum-front/list-forum-front.component';
import { AddPostFrontComponent } from './frontOffice/forum/add-post-front/add-post-front.component';
import { PostDetailsComponent } from './frontOffice/forum/post-details/post-details.component';
import { UpdatePostComponent } from './frontOffice/forum/update-post/update-post.component';

const routes: Routes = [{
  path:'admin',
  component:AllTemplateAdminComponent,
  children:[
    {
      path:'admin',
      component:BodyAdminComponent
    },
    {
      path:'adddelivery',
      component:AddDeliveryComponent
    },
    {
      path:'deliverysmen',
      component:DeliverysmenComponent
    },
    {
      path:'deliverys',
      component:DeliverysComponent
    },
    {
      path:'listeusers',
      component:ListuserComponent
    },
  ]

},
{
  path:'',
  component:AllTemplateUserComponent, pathMatch: 'full'
 
},
{
  path:'signup',
  component: AdduserComponent
},

{
  path:'signin',
  component: LoginComponent
},








{
  path:'front',
  component: AllTemplateUserComponent,
  children:[
    {
      path:'profile',
      component: UpdateuserComponent
    },
    {
      path:'listforum',
      component:ListForumFrontComponent
    },
    {
      path:'addpost',
      component:AddPostFrontComponent
    },
    {
      path:'detailpost/:id',
      component: PostDetailsComponent
    },
    {
      path:'edit/:id',
      component: UpdatePostComponent
    }

    
  ]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

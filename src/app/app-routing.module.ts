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
import { ProductsComponent } from './frontOffice/shop/products/products.component';
import { DetailsproductComponent } from './frontOffice/shop/detailsproduct/detailsproduct.component';
import { RecommandedproductsComponent } from './frontOffice/shop/recommandedproducts/recommandedproducts.component';
import { ListeFavorisComponent } from './frontOffice/shop/liste-favoris/liste-favoris.component';
import { AddproductComponent } from './backOffice/shopAdmin/addproduct/addproduct.component';
import { ModifyproductComponent } from './backOffice/shopAdmin/modifyproduct/modifyproduct.component';
import { ListproductsComponent } from './backOffice/shopAdmin/listproducts/listproducts.component';

const routes: Routes = [{
  path:'admin',
  component:AllTemplateAdminComponent,
  children:[
    {
      path:'addproduct',
      component:AddproductComponent
    },
    {
      path:'modifyproduct/:id',
      component:ModifyproductComponent
    },
    {
      path:'listproducts',
      component:ListproductsComponent
    },
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
      path:'shop',
      component: ProductsComponent
    },
    {
       path:'detailproduct/:id',
      component: DetailsproductComponent
    },
    {
      path:'recommandedproducts',
     component: RecommandedproductsComponent
   },
   {
    path:'listefavoris',
   component: ListeFavorisComponent
 }
    ,
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAdminComponent } from './backOffice/header-admin/header-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { SideAdminComponent } from './backOffice/side-admin/side-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { FooterComponent } from './frontOffice/footer/footer.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { BodyComponent } from './frontOffice/body/body.component';
import { HeaderComponent } from './frontOffice/header/header.component';
import { AddDeliveryComponent } from './backOffice/add-delivery/add-delivery.component';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeliverysmenComponent } from './backOffice/deliverysmen/deliverysmen.component';
import { DeliverysComponent } from './backOffice/deliverys/deliverys.component';
import { ListuserComponent } from './backOffice/user/listuser/listuser.component';
import { AdduserComponent } from './frontOffice/user/adduser/adduser.component';
import { LoginComponent } from './frontOffice/user/login/login.component';
import { UpdateuserComponent } from './frontOffice/user/updateuser/updateuser.component';
import { AddPostFrontComponent } from './frontOffice/forum/add-post-front/add-post-front.component';
import { ListForumFrontComponent } from './frontOffice/forum/list-forum-front/list-forum-front.component';
import { PostDetailsComponent } from './frontOffice/forum/post-details/post-details.component';
import { UpdatePostComponent } from './frontOffice/forum/update-post/update-post.component';
import { FilterComponent } from './frontOffice/forum/filter/filter.component';
import { ProductsComponent } from './frontOffice/shop/products/products.component';
import { AddproductComponent } from './backOffice/shopAdmin/addproduct/addproduct.component';
import { ModifyproductComponent } from './backOffice/shopAdmin/modifyproduct/modifyproduct.component';
import { ListproductsComponent } from './backOffice/shopAdmin/listproducts/listproducts.component';
import { DetailsproductComponent } from './frontOffice/shop/detailsproduct/detailsproduct.component';
import { RecommandedproductsComponent } from './frontOffice/shop/recommandedproducts/recommandedproducts.component';
import { QrCodeServiceComponent } from './frontOffice/shop/qr-code-service/qr-code-service.component';
import { ListeFavorisComponent } from './frontOffice/shop/liste-favoris/liste-favoris.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListebillComponent } from './backOffice/bill/listebill/listebill.component';
import { AddbillComponent } from './backOffice/bill/addbill/addbill.component';
import { UpdatebillComponent } from './backOffice/bill/updatebill/updatebill.component';
import { DetailsbillComponent } from './backOffice/bill/detailsbill/detailsbill.component';
import { AddClaimComponent } from './backOffice/Claim/add-claim/add-claim.component';
import { UpdateClaimComponent } from './backOffice/Claim/update-claim/update-claim.component';
import { ListClaimComponent } from './backOffice/Claim/list-claim/list-claim.component';
import { DetailclaimComponent } from './backOffice/Claim/detailclaim/detailclaim.component';
import { DeleteClaimComponent } from './backOffice/Claim/delete-claim/delete-claim.component';
import { UpdatefactureamComponent } from './updatefactuream/updatefactuream.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SideAdminComponent,
    BodyAdminComponent,
    AllTemplateAdminComponent,
    FooterComponent,
    AllTemplateUserComponent,
    BodyComponent,
    HeaderComponent,
    AddDeliveryComponent,
    DeliverysmenComponent,
    DeliverysComponent,
    ListuserComponent,
    AdduserComponent,
    LoginComponent,
    UpdateuserComponent,
    AddPostFrontComponent,
    ListForumFrontComponent,
    PostDetailsComponent,
    UpdatePostComponent,
    FilterComponent,
    ProductsComponent,
    AddproductComponent,
    ModifyproductComponent,
    ListproductsComponent,
    DetailsproductComponent,
    RecommandedproductsComponent,
    QrCodeServiceComponent,
    ListeFavorisComponent,
    ListebillComponent,
    AddbillComponent,
    UpdatebillComponent,
    DetailsbillComponent,
    AddClaimComponent,
    UpdateClaimComponent,
    ListClaimComponent,
    DetailclaimComponent,
    DeleteClaimComponent,
    UpdatefactureamComponent,
    AddClaimComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

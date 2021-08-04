import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import App from "./app";
import PerfectScrollbar from "react-perfect-scrollbar";
import Login from "../account/login";
import Datatable from "../account/login";

import Dashboard from "../admin/main";
import Add_frame from "./frame/add-frame";
import Add_Frames from "./frame/add-frame";

const Root = () => {
    const token =  localStorage.getItem("token"); 
    if(!token) return <Redirect to="page/account/login" />;
    console.log(token);  

    return (
        <BrowserRouter basename={"/"}>
        <PerfectScrollbar>
        <Switch>
					<Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/login`}
						component={Login}
					/>

					<App>
						<Route 
							path={`${process.env.PUBLIC_URL}/page/admin/main`}
							component={Dashboard}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}page/admin/frame/frames`}
							component={Add_Frames}
						/>
						{/* <Route
							path={`${process.env.PUBLIC_URL}/products/physical/sub-category`}
							component={Sub_category}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/physical/product-list`}
							component={Product_list}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/physical/product-detail`}
							component={Product_detail}
						/> */}
						<Route
							path={`http://localhost:3000/page/admin/frame/addframe`}
							component={Add_frame}
						/>

						{/* <Route
							path={`${process.env.PUBLIC_URL}/products/digital/digital-category`}
							component={Digital_category}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/digital/digital-sub-category`}
							component={Digital_sub_category}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/digital/digital-product-list`}
							component={Digital_pro_list}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/digital/digital-add-product`}
							component={Digital_add_pro}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/sales/orders`}
							component={Orders}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/sales/transactions`}
							component={Transactions_sales}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/coupons/list-coupons`}
							component={ListCoupons}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/coupons/create-coupons`}
							component={Create_coupons}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/pages/list-page`}
							component={ListPages}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/pages/create-page`}
							component={Create_page}
						/>

						<Route path={`${process.env.PUBLIC_URL}/media`} component={Media} />

						<Route
							path={`${process.env.PUBLIC_URL}/menus/list-menu`}
							component={List_menu}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/menus/create-menu`}
							component={Create_menu}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/users/list-user`}
							component={List_user}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/users/create-user`}
							component={Create_user}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/vendors/list_vendors`}
							component={List_vendors}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/vendors/create-vendors`}
							component={Create_vendors}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/localization/transactions`}
							component={Translations}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/localization/currency-rates`}
							component={Rates}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/localization/taxes`}
							component={Taxes}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/reports/report`}
							component={Reports}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/settings/profile`}
							component={Profile}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/invoice`}
							component={Invoice}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/data-table`}
							component={Datatable}
						/> */}
						
					</App>
				</Switch>
        </PerfectScrollbar>

        </BrowserRouter>
    )
}
// ReactDOM.render(<Root />, document.getElementById("root"));
export default Root;
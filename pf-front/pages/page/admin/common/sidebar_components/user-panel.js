import React from "react";
import man from "../../../../../public/assets/images/user.png";

const UserPanel = () => {
	const userlevel = localStorage.getItem("user");
	const usert  = localStorage.getItem("token");

	return (
		<div>
			<div className="sidebar-user text-center">
				<div>
					<img
						className="img-60 rounded-circle lazyloaded blur-up"
						src={man}
						alt="#"
					/>
				</div>
				<h6 className="mt-3 f-14">JOHN</h6>
				<p>{userlevel}</p>
			</div>
		</div>
	);
};

export default UserPanel;

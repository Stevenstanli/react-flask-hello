import React, { useContext, Fragment } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Histories = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container p-5 border-top border-bottom border-secondary">
			<div className="row">
				<div className="col-sm">
					<div className="first-heading-img">
						<img
							src="https://i.picsum.photos/id/237/300/300.jpg?hmac=9iUR3VHqf0Y9abGyuPZTpEIxHJL0sSvyNtJtDIMSylM"
							className="rounded-circle"
							alt="..."
						/>
					</div>
				</div>
				<div className="col-sm">
					<div className="first-heading-text">
						<h4>
							The Second Heading
							<span className="text-muted">Is Pretty Cool Too </span>
						</h4>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos et reprehenderit hic.
							Quibusdam sint minima hic ipsum assumenda unde, sapiente ratione, beatae totam, earum
							voluptas! Quasi laborum nobis eius minima?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

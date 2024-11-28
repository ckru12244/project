import data from "../data";

function Customer () {
	let {infoList, info2Text, infoContactText, notice}=data.customer;

	return (
		<div id="customer">
			<div className="inner">
				<div className="info">
					<ul>
						{infoList.map((d, i) => <li key={i}>{d}</li>)}
					</ul>
				</div>
				<div className="info2">
					<div className="text">
						<ul>
							{info2Text.map((d, i) => <li key={i}>{d}</li>)}
						</ul>
					</div>
					<div className="contact_btn"><a href="">{infoContactText}</a></div>
				</div>
			</div>
			<div className="notice">{notice}</div>
		</div>
	);
}

export default Customer;

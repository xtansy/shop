type HeadphoneType = "wired" | "wireless";

export interface Headphone {
	_id: string;
	img: string;
	title: string;
	price: number;
	rate: number;
	type: HeadphoneType;
}

export interface HeadphoneModel {
	headphones: Headphone[];
	isLoading: boolean;
	errorMessage: null | string;
}

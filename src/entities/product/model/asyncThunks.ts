import { createAsyncThunk } from "@reduxjs/toolkit";

import { Headphone } from "./slice";
import { getHeadphones } from "shared/api";

export const getHeadphonesAsync = createAsyncThunk<Headphone[]>(
	"headphone/getHeadphoneList",
	() => {
		return getHeadphones();
	}
);

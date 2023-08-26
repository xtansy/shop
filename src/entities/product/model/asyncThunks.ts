import { createAsyncThunk } from "@reduxjs/toolkit";

import { type Headphone } from "./types";
import { getHeadphones } from "shared/api";

export const getHeadphonesAsync = createAsyncThunk<Headphone[]>(
	"headphone/getHeadphoneList",
	() => {
		return getHeadphones();
	}
);

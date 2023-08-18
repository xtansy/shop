export const useHeadphonesSelector = (state: RootState) =>
	state.headphone.headphones;

export const useHeadphonesIsLoadingSelector = (state: RootState) =>
	state.headphone.isLoading;

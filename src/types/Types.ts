type HomeParams = {
    userId: string;
};


export type TabParamList = {
    Home: HomeParams;
    Portal: undefined;
    Wallet: undefined;
};


export type IHomePageTypes = {
    Home: undefined;
};

export type ISpacer = {
    paddingHorizontal?: number,
    paddingVertical?: number
}

export type ISingleType = {
    image: string,
    title: string,
    buttonHex: string,
    index: number,
    onPress?: () => void | void
}
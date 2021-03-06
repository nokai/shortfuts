export type Direction = 'up' | 'down';

export default interface Provider {
    back: () => void;
    buyBronzePack: () => void;
    buyNow: () => void;
    comparePrice: () => void;
    decreaseMaxBidPrice: () => void;
    decreaseMinBidPrice: () => void;
    // futbin: () => void; // Disabled in FUT 19... unable to get item ID.
    increaseMaxBidPrice: () => void;
    increaseMinBidPrice: () => void;
    list: () => void;
    listMinBin: () => void;
    makeBid: () => void;
    move: (direction: Direction) => void;
    pageNext: () => void;
    pagePrevious: () => void;
    quickSell: () => void;
    quickSellAll: () => void;
    search: () => void;
    sendToTransferList: () => void;
    storeAllInClub: () => void;
    storeInClub: () => void;
    watch: () => void;
}

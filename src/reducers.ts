import accountReducer, { AccountStore } from './reducers/accountReducer';
import cartReducer, { CartStore } from './reducers/cartReducer';
import topCategoryReducer, { TopCategoryStore } from './reducers/topCategoryReducer';
import recentlyViewedReducer, { RecentlyViewedStore } from './reducers/recentlyViewedReducer';
import promoProductsReducer, { PromoProductsStore } from './reducers/promoProductsReducer';
import inboxReducer, { InboxStore } from './reducers/inboxReducer';
import pagesReducer, { PagesStore } from './reducers/pagesReducer';

export interface CombinedStore {
  account: AccountStore;
  cart: CartStore;
  promoProducts: PromoProductsStore;
  topCategory: TopCategoryStore;
  recentlyViewed: RecentlyViewedStore;
  inbox: InboxStore;
  pageBuilder: PagesStore;
}

export default {
  account: accountReducer,
  cart: cartReducer,
  promoProducts: promoProductsReducer,
  topCategory: topCategoryReducer,
  recentlyViewed: recentlyViewedReducer,
  inbox: inboxReducer,
  pageBuilder: pagesReducer
};

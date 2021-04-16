import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** DateTime */
  DateTime: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  /** Raw JSON value */
  Json: any;
};

/** A prismic document */
export type _Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
   __typename?: '_DocumentConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<_DocumentEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type _DocumentEdge = {
   __typename?: '_DocumentEdge';
  /** The item at the end of the edge. */
  node: _Document;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** An external link */
export type _ExternalLink = _Linkable & {
   __typename?: '_ExternalLink';
  url: Scalars['String'];
  target?: Maybe<Scalars['String']>;
  _linkType?: Maybe<Scalars['String']>;
};

/** A linked file */
export type _FileLink = _Linkable & {
   __typename?: '_FileLink';
  name: Scalars['String'];
  url: Scalars['String'];
  size: Scalars['Long'];
  _linkType?: Maybe<Scalars['String']>;
};

/** A linked image */
export type _ImageLink = _Linkable & {
   __typename?: '_ImageLink';
  name: Scalars['String'];
  url: Scalars['String'];
  size: Scalars['Long'];
  height: Scalars['Int'];
  width: Scalars['Int'];
  _linkType?: Maybe<Scalars['String']>;
};

/** A prismic link */
export type _Linkable = {
  _linkType?: Maybe<Scalars['String']>;
};

export type Category = _Document & _Linkable & {
   __typename?: 'Category';
  title?: Maybe<Scalars['Json']>;
  parent_category?: Maybe<_Linkable>;
  featured?: Maybe<Scalars['Json']>;
  image?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['Json']>;
  link?: Maybe<_Linkable>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type CategoryConnectionConnection = {
   __typename?: 'CategoryConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CategoryConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type CategoryConnectionEdge = {
   __typename?: 'CategoryConnectionEdge';
  /** The item at the end of the edge. */
  node: Category;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type Common = _Document & _Linkable & {
   __typename?: 'Common';
  header_notice_switch?: Maybe<Scalars['Json']>;
  special_notice_title?: Maybe<Scalars['Json']>;
  top_header_color?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['Json']>;
  search_placeholder?: Maybe<Scalars['Json']>;
  shopping_cart_title?: Maybe<Scalars['Json']>;
  total_amount_text?: Maybe<Scalars['Json']>;
  checkout_button_text?: Maybe<Scalars['Json']>;
  copyright_text?: Maybe<Scalars['Json']>;
  social_links?: Maybe<Array<CommonSocial_Links>>;
  ad_blocks?: Maybe<Array<CommonAd_Blocks>>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

export type CommonAd_Blocks = {
   __typename?: 'CommonAd_blocks';
  block_image?: Maybe<Scalars['Json']>;
  badge_title?: Maybe<Scalars['Json']>;
  badge_color?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['Json']>;
  short_description?: Maybe<Scalars['Json']>;
  add_a_button?: Maybe<Scalars['Json']>;
  button_title?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type CommonConnectionConnection = {
   __typename?: 'CommonConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CommonConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type CommonConnectionEdge = {
   __typename?: 'CommonConnectionEdge';
  /** The item at the end of the edge. */
  node: Common;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type CommonSocial_Links = {
   __typename?: 'CommonSocial_links';
  social_type?: Maybe<Scalars['String']>;
  social_link?: Maybe<_Linkable>;
};


export type Home = _Document & _Linkable & {
   __typename?: 'Home';
  banner?: Maybe<Scalars['Json']>;
  banner_slider?: Maybe<Array<HomeBanner_Slider>>;
  banner_title?: Maybe<Scalars['Json']>;
  banner_subtitle?: Maybe<Scalars['Json']>;
  banner_button_text?: Maybe<Scalars['Json']>;
  trending_block_title?: Maybe<Scalars['Json']>;
  view_more_text?: Maybe<Scalars['Json']>;
  how_it_works_title?: Maybe<Scalars['Json']>;
  how_it_works_subtitle?: Maybe<Scalars['Json']>;
  how_it_works_group?: Maybe<Array<HomeHow_It_Works_Group>>;
  call_us_banner?: Maybe<Scalars['Json']>;
  call_us_title?: Maybe<Scalars['Json']>;
  call_us_button_text?: Maybe<Scalars['Json']>;
  category_section_title?: Maybe<Scalars['Json']>;
  category_section_short_intro?: Maybe<Scalars['Json']>;
  category_block?: Maybe<Array<HomeCategory_Block>>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

export type HomeBanner_Slider = {
   __typename?: 'HomeBanner_slider';
  image?: Maybe<Scalars['Json']>;
  banner_title1?: Maybe<Scalars['Json']>;
  banner_subtitle1?: Maybe<Scalars['Json']>;
  banner_description?: Maybe<Scalars['Json']>;
};

export type HomeCategory_Block = {
   __typename?: 'HomeCategory_block';
  image?: Maybe<Scalars['Json']>;
  category_title?: Maybe<Scalars['Json']>;
  category_slug?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type HomeConnectionConnection = {
   __typename?: 'HomeConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<HomeConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type HomeConnectionEdge = {
   __typename?: 'HomeConnectionEdge';
  /** The item at the end of the edge. */
  node: Home;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type HomeHow_It_Works_Group = {
   __typename?: 'HomeHow_it_works_group';
  image?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['Json']>;
};

export type Homeminimal = _Document & _Linkable & {
   __typename?: 'Homeminimal';
  banner_image?: Maybe<Scalars['Json']>;
  banner_title?: Maybe<Scalars['Json']>;
  banner_subtitle?: Maybe<Scalars['Json']>;
  banner_button_text?: Maybe<Scalars['Json']>;
  call_us_banner?: Maybe<Scalars['Json']>;
  call_us_banner_content?: Maybe<Scalars['Json']>;
  call_us_button_text?: Maybe<Scalars['Json']>;
  how_it_works?: Maybe<Array<HomeminimalHow_It_Works>>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type HomeminimalConnectionConnection = {
   __typename?: 'HomeminimalConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<HomeminimalConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type HomeminimalConnectionEdge = {
   __typename?: 'HomeminimalConnectionEdge';
  /** The item at the end of the edge. */
  node: Homeminimal;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type HomeminimalHow_It_Works = {
   __typename?: 'HomeminimalHow_it_works';
  thumbnail?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
  short_description?: Maybe<Scalars['Json']>;
};

export type Homemodern = _Document & _Linkable & {
   __typename?: 'Homemodern';
  banner_image?: Maybe<Scalars['Json']>;
  banner_title?: Maybe<Scalars['Json']>;
  banner_subtitle?: Maybe<Scalars['Json']>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type HomemodernConnectionConnection = {
   __typename?: 'HomemodernConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<HomemodernConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type HomemodernConnectionEdge = {
   __typename?: 'HomemodernConnectionEdge';
  /** The item at the end of the edge. */
  node: Homemodern;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};



export type Meta = {
   __typename?: 'Meta';
  /** The id of the document. */
  id: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The tags of the document. */
  tags: Array<Scalars['String']>;
  /** The language of the document. */
  lang: Scalars['String'];
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  /** The last publication date of the document. */
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
   __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  _allDocuments: _DocumentConnection;
  allHomeminimals: HomeminimalConnectionConnection;
  allHomes: HomeConnectionConnection;
  allCommons: CommonConnectionConnection;
  category?: Maybe<Category>;
  allCategorys: CategoryConnectionConnection;
  allHomemoderns: HomemodernConnectionConnection;
};


export type Query_AllDocumentsArgs = {
  sortBy?: Maybe<SortDocumentsBy>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllHomeminimalsArgs = {
  sortBy?: Maybe<SortHomeminimaly>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereHomeminimal>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllHomesArgs = {
  sortBy?: Maybe<SortHomey>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereHome>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllCommonsArgs = {
  sortBy?: Maybe<SortCommony>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereCommon>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCategoryArgs = {
  uid: Scalars['String'];
  lang: Scalars['String'];
};


export type QueryAllCategorysArgs = {
  sortBy?: Maybe<SortCategoryy>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereCategory>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllHomemodernsArgs = {
  sortBy?: Maybe<SortHomemoderny>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereHomemodern>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type RelatedDocument = {
   __typename?: 'RelatedDocument';
  /** The id of the document. */
  id: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
};

export type Similar = {
  documentId: Scalars['String'];
  max: Scalars['Int'];
};

export enum SortCategoryy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC'
}

export enum SortCommony {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  SpecialNoticeTitleAsc = 'special_notice_title_ASC',
  SpecialNoticeTitleDesc = 'special_notice_title_DESC',
  SearchPlaceholderAsc = 'search_placeholder_ASC',
  SearchPlaceholderDesc = 'search_placeholder_DESC',
  ShoppingCartTitleAsc = 'shopping_cart_title_ASC',
  ShoppingCartTitleDesc = 'shopping_cart_title_DESC',
  TotalAmountTextAsc = 'total_amount_text_ASC',
  TotalAmountTextDesc = 'total_amount_text_DESC',
  CheckoutButtonTextAsc = 'checkout_button_text_ASC',
  CheckoutButtonTextDesc = 'checkout_button_text_DESC',
  CopyrightTextAsc = 'copyright_text_ASC',
  CopyrightTextDesc = 'copyright_text_DESC'
}

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortHomeminimaly {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  BannerTitleAsc = 'banner_title_ASC',
  BannerTitleDesc = 'banner_title_DESC',
  BannerSubtitleAsc = 'banner_subtitle_ASC',
  BannerSubtitleDesc = 'banner_subtitle_DESC',
  BannerButtonTextAsc = 'banner_button_text_ASC',
  BannerButtonTextDesc = 'banner_button_text_DESC',
  CallUsBannerContentAsc = 'call_us_banner_content_ASC',
  CallUsBannerContentDesc = 'call_us_banner_content_DESC',
  CallUsButtonTextAsc = 'call_us_button_text_ASC',
  CallUsButtonTextDesc = 'call_us_button_text_DESC'
}

export enum SortHomemoderny {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  BannerTitleAsc = 'banner_title_ASC',
  BannerTitleDesc = 'banner_title_DESC',
  BannerSubtitleAsc = 'banner_subtitle_ASC',
  BannerSubtitleDesc = 'banner_subtitle_DESC'
}

export enum SortHomey {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  BannerTitleAsc = 'banner_title_ASC',
  BannerTitleDesc = 'banner_title_DESC',
  BannerSubtitleAsc = 'banner_subtitle_ASC',
  BannerSubtitleDesc = 'banner_subtitle_DESC',
  BannerButtonTextAsc = 'banner_button_text_ASC',
  BannerButtonTextDesc = 'banner_button_text_DESC',
  TrendingBlockTitleAsc = 'trending_block_title_ASC',
  TrendingBlockTitleDesc = 'trending_block_title_DESC',
  ViewMoreTextAsc = 'view_more_text_ASC',
  ViewMoreTextDesc = 'view_more_text_DESC',
  HowItWorksTitleAsc = 'how_it_works_title_ASC',
  HowItWorksTitleDesc = 'how_it_works_title_DESC',
  HowItWorksSubtitleAsc = 'how_it_works_subtitle_ASC',
  HowItWorksSubtitleDesc = 'how_it_works_subtitle_DESC',
  CallUsTitleAsc = 'call_us_title_ASC',
  CallUsTitleDesc = 'call_us_title_DESC',
  CallUsButtonTextAsc = 'call_us_button_text_ASC',
  CallUsButtonTextDesc = 'call_us_button_text_DESC',
  CategorySectionTitleAsc = 'category_section_title_ASC',
  CategorySectionTitleDesc = 'category_section_title_DESC',
  CategorySectionShortIntroAsc = 'category_section_short_intro_ASC',
  CategorySectionShortIntroDesc = 'category_section_short_intro_DESC'
}

export type WhereCategory = {
  /** title */
  title_fulltext?: Maybe<Scalars['String']>;
  /** parent_category */
  parent_category?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  /** description */
  description_fulltext?: Maybe<Scalars['String']>;
  /** link */
  link?: Maybe<Scalars['String']>;
};

export type WhereCommon = {
  header_notice_switch?: Maybe<Scalars['Boolean']>;
  /** special_notice_title */
  special_notice_title_fulltext?: Maybe<Scalars['String']>;
  /** search_placeholder */
  search_placeholder_fulltext?: Maybe<Scalars['String']>;
  /** shopping_cart_title */
  shopping_cart_title_fulltext?: Maybe<Scalars['String']>;
  /** total_amount_text */
  total_amount_text_fulltext?: Maybe<Scalars['String']>;
  /** checkout_button_text */
  checkout_button_text_fulltext?: Maybe<Scalars['String']>;
  /** copyright_text */
  copyright_text_fulltext?: Maybe<Scalars['String']>;
};

export type WhereHome = {
  /** banner_title */
  banner_title_fulltext?: Maybe<Scalars['String']>;
  /** banner_subtitle */
  banner_subtitle_fulltext?: Maybe<Scalars['String']>;
  /** banner_button_text */
  banner_button_text_fulltext?: Maybe<Scalars['String']>;
  /** trending_block_title */
  trending_block_title_fulltext?: Maybe<Scalars['String']>;
  /** view_more_text */
  view_more_text_fulltext?: Maybe<Scalars['String']>;
  /** how_it_works_title */
  how_it_works_title_fulltext?: Maybe<Scalars['String']>;
  /** how_it_works_subtitle */
  how_it_works_subtitle_fulltext?: Maybe<Scalars['String']>;
  /** call_us_title */
  call_us_title_fulltext?: Maybe<Scalars['String']>;
  /** call_us_button_text */
  call_us_button_text_fulltext?: Maybe<Scalars['String']>;
  /** category_section_title */
  category_section_title_fulltext?: Maybe<Scalars['String']>;
  /** category_section_short_intro */
  category_section_short_intro_fulltext?: Maybe<Scalars['String']>;
};

export type WhereHomeminimal = {
  /** banner_title */
  banner_title_fulltext?: Maybe<Scalars['String']>;
  /** banner_subtitle */
  banner_subtitle_fulltext?: Maybe<Scalars['String']>;
  /** banner_button_text */
  banner_button_text_fulltext?: Maybe<Scalars['String']>;
  /** call_us_banner_content */
  call_us_banner_content_fulltext?: Maybe<Scalars['String']>;
  /** call_us_button_text */
  call_us_button_text_fulltext?: Maybe<Scalars['String']>;
};

export type WhereHomemodern = {
  /** banner_title */
  banner_title_fulltext?: Maybe<Scalars['String']>;
  /** banner_subtitle */
  banner_subtitle_fulltext?: Maybe<Scalars['String']>;
};

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  PrismicImageThumbnailsType: any;
};










export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Url = 'url',
  PublicUrl = 'publicURL',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type IdQueryOperatorInput = {
  eq?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Auto = 'AUTO',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
  Avif = 'AVIF'
}

export enum ImageLayout {
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
  Constrained = 'CONSTRAINED'
}

export enum ImagePlaceholder {
  DominantColor = 'DOMINANT_COLOR',
  TracedSvg = 'TRACED_SVG',
  Blurred = 'BLURRED',
  None = 'NONE'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  GatsbyImageData = 'gatsbyImageData',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImgixUrlParamsInput = {
  /** Specifies an aspect ratio to maintain when resizing and cropping the image. [See docs](https://docs.imgix.com/apis/url/size/ar). */
  ar?: Maybe<Scalars['String']>;
  /** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
  auto?: Maybe<Scalars['String']>;
  /** Colors the background of padded and partially-transparent images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/bg). */
  bg?: Maybe<Scalars['String']>;
  /** Changes the blend alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/blending/blend-align). */
  blendAlign?: Maybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  blendalign?: Maybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  ba?: Maybe<Scalars['String']>;
  /** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
  blendAlpha?: Maybe<Scalars['Int']>;
  /** Alias for `blendAlpha`. */
  blendalpha?: Maybe<Scalars['Int']>;
  /** Alias for `blendAlpha`. */
  balph?: Maybe<Scalars['Int']>;
  /** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
  blendColor?: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendcolor?: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendClr?: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendclr?: Maybe<Scalars['String']>;
  /** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
  blendCrop?: Maybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  blendcrop?: Maybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  bc?: Maybe<Scalars['String']>;
  /** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
  blendFit?: Maybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  blendfit?: Maybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  bf?: Maybe<Scalars['String']>;
  /** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
  blendH?: Maybe<Scalars['Int']>;
  /** Alias for `blendH`. */
  blendh?: Maybe<Scalars['Int']>;
  /** Alias for `blendH`. */
  bh?: Maybe<Scalars['Int']>;
  /** Sets the blend mode for a blend image. Default: `overlay`. [See docs](https://docs.imgix.com/apis/url/blending/blend-mode). */
  blendMode?: Maybe<Scalars['String']>;
  /** Alias for `blendMode`. */
  blendmode?: Maybe<Scalars['String']>;
  /** Alias for `blendMode`. */
  bm?: Maybe<Scalars['String']>;
  /** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
  blendPad?: Maybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  blendpad?: Maybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  bp?: Maybe<Scalars['Int']>;
  /** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
  blendSize?: Maybe<Scalars['String']>;
  /** Alias for `blendSize`. */
  blendsize?: Maybe<Scalars['String']>;
  /** Alias for `blendSize`. */
  bs?: Maybe<Scalars['String']>;
  /** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
  blendW?: Maybe<Scalars['Int']>;
  /** Alias for `blendW`. */
  blendw?: Maybe<Scalars['Int']>;
  /** Alias for `blendW`. */
  bw?: Maybe<Scalars['Int']>;
  /** Adjusts the x-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-x). */
  blendX?: Maybe<Scalars['Int']>;
  /** Alias for `blendX`. */
  blendx?: Maybe<Scalars['Int']>;
  /** Alias for `blendX`. */
  bx?: Maybe<Scalars['Int']>;
  /** Adjusts the y-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-y). */
  blendY?: Maybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  blendy?: Maybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  by?: Maybe<Scalars['Int']>;
  /** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
  blend?: Maybe<Scalars['String']>;
  /** Alias for `blend`. */
  b?: Maybe<Scalars['String']>;
  /** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
  blur?: Maybe<Scalars['Int']>;
  /** Sets bottom border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom). */
  borderBottom?: Maybe<Scalars['Int']>;
  /** Sets left border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-left). */
  borderLeft?: Maybe<Scalars['Int']>;
  /** Sets the inner radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner). */
  borderRadiusInner?: Maybe<Scalars['String']>;
  /** Sets the outer radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius). */
  borderRadius?: Maybe<Scalars['String']>;
  /** Sets right border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-right). */
  borderRight?: Maybe<Scalars['Int']>;
  /** Sets top border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-top). */
  borderTop?: Maybe<Scalars['Int']>;
  /** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
  border?: Maybe<Scalars['String']>;
  /** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
  bri?: Maybe<Scalars['Int']>;
  /** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
  ch?: Maybe<Scalars['String']>;
  /** Specifies the output chroma subsampling rate. Default: `420`. [See docs](https://docs.imgix.com/apis/url/format/chromasub). */
  chromasub?: Maybe<Scalars['Int']>;
  /** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
  colorquant?: Maybe<Scalars['Int']>;
  /** Specifies how many colors to include in a palette-extraction response. Default: `6`. [See docs](https://docs.imgix.com/apis/url/color-palette/colors). */
  colors?: Maybe<Scalars['Int']>;
  /** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
  con?: Maybe<Scalars['Int']>;
  /** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
  cornerRadius?: Maybe<Scalars['String']>;
  /** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
  crop?: Maybe<Scalars['String']>;
  /** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
  cs?: Maybe<Scalars['String']>;
  /** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
  dl?: Maybe<Scalars['String']>;
  /** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
  dpi?: Maybe<Scalars['Int']>;
  /** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
  dpr?: Maybe<Scalars['Float']>;
  /** Changes the alpha of the duotone effect atop the source image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha). */
  duotoneAlpha?: Maybe<Scalars['Int']>;
  /** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
  duotone?: Maybe<Scalars['String']>;
  /** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
  exp?: Maybe<Scalars['Int']>;
  /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. [See docs](https://docs.imgix.com/apis/url/expires). */
  expires?: Maybe<Scalars['String']>;
  /** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
  faceindex?: Maybe<Scalars['Int']>;
  /** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
  facepad?: Maybe<Scalars['Float']>;
  /** Specifies that face data should be included in output when combined with `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces). */
  faces?: Maybe<Scalars['Int']>;
  /** Sets the fill color for images with additional space created by the fit setting. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/fill/fill-color). */
  fillColor?: Maybe<Scalars['String']>;
  /** Alias for `fillColor`. */
  fillcolor?: Maybe<Scalars['String']>;
  /** Determines how to fill in additional space created by the fit setting. [See docs](https://docs.imgix.com/apis/url/fill/fill). */
  fill?: Maybe<Scalars['String']>;
  /** Specifies how to map the source image to the output image dimensions. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit). */
  fit?: Maybe<Scalars['String']>;
  /** Alias for `fit`. */
  f?: Maybe<Scalars['String']>;
  /** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
  flip?: Maybe<Scalars['String']>;
  /** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
  fm?: Maybe<Scalars['String']>;
  /** Displays crosshairs identifying the location of the set focal point. Default: `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug). */
  fpDebug?: Maybe<Scalars['Boolean']>;
  /** Sets the relative horizontal value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x). */
  fpX?: Maybe<Scalars['Int']>;
  /** Sets the relative vertical value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y). */
  fpY?: Maybe<Scalars['Int']>;
  /** Sets the relative zoom value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z). */
  fpZ?: Maybe<Scalars['Float']>;
  /** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
  gam?: Maybe<Scalars['Int']>;
  /** Sets grid colors for the transparency checkerboard grid. */
  gridColors?: Maybe<Scalars['String']>;
  /** Sets grid size for the transparency checkerboard grid. */
  gridSize?: Maybe<Scalars['Int']>;
  /** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
  h?: Maybe<Scalars['Int']>;
  /** Alias for `h`. */
  height?: Maybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
  high?: Maybe<Scalars['Int']>;
  /** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
  htn?: Maybe<Scalars['Int']>;
  /** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
  hue?: Maybe<Scalars['Int']>;
  /** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
  invert?: Maybe<Scalars['Boolean']>;
  /** Alias for `invert`. */
  inv?: Maybe<Scalars['Boolean']>;
  /** Specifies that the output image should be a lossless variant. Default: `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless). */
  lossless?: Maybe<Scalars['Boolean']>;
  /** Changes the watermark alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-align). */
  markAlign?: Maybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  ma?: Maybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  markalign?: Maybe<Scalars['String']>;
  /** Changes the alpha of the watermark image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-alpha). */
  markAlpha?: Maybe<Scalars['Int']>;
  /** Alias for `markAlpha`. */
  markalpha?: Maybe<Scalars['Int']>;
  /** Alias for `markAlpha`. */
  malph?: Maybe<Scalars['Int']>;
  /** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
  markBase?: Maybe<Scalars['String']>;
  /** Alias for `markBase`. */
  mb?: Maybe<Scalars['String']>;
  /** Alias for `markBase`. */
  markbase?: Maybe<Scalars['String']>;
  /** Specifies the fit mode for watermark images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-fit). */
  markFit?: Maybe<Scalars['String']>;
  /** Alias for `markFit`. */
  mf?: Maybe<Scalars['String']>;
  /** Alias for `markFit`. */
  markfit?: Maybe<Scalars['String']>;
  /** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
  markH?: Maybe<Scalars['Int']>;
  /** Alias for `markH`. */
  mh?: Maybe<Scalars['Int']>;
  /** Alias for `markH`. */
  markh?: Maybe<Scalars['Int']>;
  /** Applies padding to the watermark image. Default: `5`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
  markPad?: Maybe<Scalars['Int']>;
  /** Alias for `markPad`. */
  mp?: Maybe<Scalars['Int']>;
  /** Alias for `markPad`. */
  markpad?: Maybe<Scalars['Int']>;
  /** Rotates a watermark or tiled watermarks by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot). */
  markRot?: Maybe<Scalars['Float']>;
  /** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
  markScale?: Maybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  ms?: Maybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  markscale?: Maybe<Scalars['Int']>;
  /** Adds tiled watermark. [See docs](https://docs.imgix.com/apis/url/watermark/mark-tile). */
  markTile?: Maybe<Scalars['String']>;
  /** Alias for `markTile`. */
  mtile?: Maybe<Scalars['String']>;
  /** Alias for `markTile`. */
  marktile?: Maybe<Scalars['String']>;
  /** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
  markW?: Maybe<Scalars['Int']>;
  /** Alias for `markW`. */
  mw?: Maybe<Scalars['Int']>;
  /** Alias for `markW`. */
  markw?: Maybe<Scalars['Int']>;
  /** Adjusts the x-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-x). */
  markX?: Maybe<Scalars['Int']>;
  /** Alias for `markX`. */
  mx?: Maybe<Scalars['Int']>;
  /** Alias for `markX`. */
  markx?: Maybe<Scalars['Int']>;
  /** Adjusts the y-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-y). */
  markY?: Maybe<Scalars['Int']>;
  /** Alias for `markY`. */
  my?: Maybe<Scalars['Int']>;
  /** Alias for `markY`. */
  marky?: Maybe<Scalars['Int']>;
  /** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
  mark?: Maybe<Scalars['String']>;
  /** Alias for `mark`. */
  m?: Maybe<Scalars['String']>;
  /** Colors the background of the transparent mask area of images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/mask/mask-bg). */
  maskBg?: Maybe<Scalars['String']>;
  /** Alias for `maskBg`. */
  maskbg?: Maybe<Scalars['String']>;
  /** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
  mask?: Maybe<Scalars['String']>;
  /** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
  maxH?: Maybe<Scalars['Int']>;
  /** Alias for `maxH`. */
  maxHeight?: Maybe<Scalars['Int']>;
  /** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
  maxW?: Maybe<Scalars['Int']>;
  /** Alias for `maxW`. */
  maxWidth?: Maybe<Scalars['Int']>;
  /** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
  minH?: Maybe<Scalars['Int']>;
  /** Alias for `minH`. */
  minHeight?: Maybe<Scalars['Int']>;
  /** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
  minW?: Maybe<Scalars['Int']>;
  /** Alias for `minW`. */
  minWidth?: Maybe<Scalars['Int']>;
  /** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
  monochrome?: Maybe<Scalars['String']>;
  /** Alias for `monochrome`. */
  mono?: Maybe<Scalars['String']>;
  /** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
  nr?: Maybe<Scalars['Int']>;
  /** Provides a threshold by which to sharpen an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nrs). */
  nrs?: Maybe<Scalars['Int']>;
  /** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
  orient?: Maybe<Scalars['Int']>;
  /** Alias for `orient`. */
  or?: Maybe<Scalars['Int']>;
  /** Sets bottom padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom). */
  padBottom?: Maybe<Scalars['Int']>;
  /** Sets left padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left). */
  padLeft?: Maybe<Scalars['Int']>;
  /** Sets right padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right). */
  padRight?: Maybe<Scalars['Int']>;
  /** Sets top padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top). */
  padTop?: Maybe<Scalars['Int']>;
  /** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
  pad?: Maybe<Scalars['Int']>;
  /** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf/page). */
  page?: Maybe<Scalars['Int']>;
  /** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
  palette?: Maybe<Scalars['String']>;
  /** Enables or disables PDF annotation. Default: `true`. [See docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation). */
  pdfAnnotation?: Maybe<Scalars['Boolean']>;
  /** Alias for `pdfAnnotation`. */
  annotation?: Maybe<Scalars['Boolean']>;
  /** Specifies a CSS prefix for all classes in palette-extraction. Default: `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix). */
  prefix?: Maybe<Scalars['String']>;
  /** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
  px?: Maybe<Scalars['Int']>;
  /** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
  q?: Maybe<Scalars['Int']>;
  /** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
  rect?: Maybe<Scalars['String']>;
  /** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
  rot?: Maybe<Scalars['Float']>;
  /** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
  sat?: Maybe<Scalars['Int']>;
  /** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
  sepia?: Maybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
  shad?: Maybe<Scalars['Float']>;
  /** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
  sharp?: Maybe<Scalars['Float']>;
  /** Adds checkerboard behind images which support transparency. [See docs](https://docs.imgix.com/apis/url/fill/transparency). */
  transparency?: Maybe<Scalars['String']>;
  /** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
  trimColor?: Maybe<Scalars['String']>;
  /** Alias for `trimColor`. */
  trimcolor?: Maybe<Scalars['String']>;
  /** Specifies the mean difference on a trim operation. Default: `11`. [See docs](https://docs.imgix.com/apis/url/trim/trim-md). */
  trimMd?: Maybe<Scalars['Float']>;
  /** Alias for `trimMd`. */
  trimmd?: Maybe<Scalars['Float']>;
  /** Pads the area of the source image before trimming. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-pad). */
  trimPad?: Maybe<Scalars['Int']>;
  /** Alias for `trimPad`. */
  trimpad?: Maybe<Scalars['Int']>;
  /** Specifies the standard deviation on a trim operation. Default: `10`. [See docs](https://docs.imgix.com/apis/url/trim/trim-sd). */
  trimSd?: Maybe<Scalars['Float']>;
  /** Alias for `trimSd`. */
  trimsd?: Maybe<Scalars['Float']>;
  /** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
  trimTol?: Maybe<Scalars['Float']>;
  /** Alias for `trimTol`. */
  trimtol?: Maybe<Scalars['Float']>;
  /** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
  trim?: Maybe<Scalars['String']>;
  /** Sets the vertical and horizontal alignment of rendered text relative to the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align). */
  txtAlign?: Maybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  txtalign?: Maybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  ta?: Maybe<Scalars['String']>;
  /** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
  txtClip?: Maybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  txtclip?: Maybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  tcl?: Maybe<Scalars['String']>;
  /** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
  txtColor?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtcolor?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtClr?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtclr?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  tc?: Maybe<Scalars['String']>;
  /** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
  txtFit?: Maybe<Scalars['String']>;
  /** Alias for `txtFit`. */
  txtfit?: Maybe<Scalars['String']>;
  /** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
  txtFont?: Maybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  tf?: Maybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  txtfont?: Maybe<Scalars['String']>;
  /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-lead). */
  txtLead?: Maybe<Scalars['Int']>;
  /** Alias for `txtLead`. */
  txtlead?: Maybe<Scalars['Int']>;
  /** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
  txtLig?: Maybe<Scalars['Int']>;
  /** Alias for `txtLig`. */
  txtlig?: Maybe<Scalars['Int']>;
  /** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
  txtLineColor?: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtlinecolor?: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtLineClr?: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtlineclr?: Maybe<Scalars['String']>;
  /** Outlines the rendered text with a specified color. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-line). */
  txtLine?: Maybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  txtline?: Maybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  tl?: Maybe<Scalars['Int']>;
  /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-pad). */
  txtPad?: Maybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  txtpad?: Maybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  tp?: Maybe<Scalars['Int']>;
  /** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
  txtShad?: Maybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  txtshad?: Maybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  tsh?: Maybe<Scalars['Float']>;
  /** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
  txtSize?: Maybe<Scalars['Int']>;
  /** Alias for `txtSize`. */
  tsz?: Maybe<Scalars['Int']>;
  /** Alias for `txtSize`. */
  txtsize?: Maybe<Scalars['Int']>;
  /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-track). */
  txtTrack?: Maybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  txttrack?: Maybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  tt?: Maybe<Scalars['Int']>;
  /** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
  txtWidth?: Maybe<Scalars['Int']>;
  /** Alias for `txtWidth`. */
  txtwidth?: Maybe<Scalars['Int']>;
  /** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
  txt?: Maybe<Scalars['String']>;
  /** Alias for `txt`. */
  t?: Maybe<Scalars['String']>;
  /** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
  usm?: Maybe<Scalars['Int']>;
  /** Specifies the radius for an unsharp mask operation. Default: `2.5`. [See docs](https://docs.imgix.com/apis/url/adjustment/usmrad). */
  usmrad?: Maybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
  vib?: Maybe<Scalars['Int']>;
  /** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
  w?: Maybe<Scalars['Int']>;
  /** Alias for `w`. */
  width?: Maybe<Scalars['Int']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type PrismicAllDocumentTypes = PrismicHome | PrismicCommon | PrismicCategory | PrismicHomeMinimal | PrismicHomeModern;

export type PrismicCategory = PrismicDocument & Node & {
  __typename?: 'PrismicCategory';
  data?: Maybe<PrismicCategoryDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  _previewable: Scalars['ID'];
  uid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicCategoryFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicCategoryLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicCategoryConnection = {
  __typename?: 'PrismicCategoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicCategoryEdge>;
  nodes: Array<PrismicCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicCategoryGroupConnection>;
};


export type PrismicCategoryConnectionDistinctArgs = {
  field: PrismicCategoryFieldsEnum;
};


export type PrismicCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicCategoryFieldsEnum;
};

export type PrismicCategoryDataType = {
  __typename?: 'PrismicCategoryDataType';
  title?: Maybe<PrismicStructuredTextType>;
  parent_category?: Maybe<PrismicLinkType>;
  featured?: Maybe<Scalars['Boolean']>;
  image?: Maybe<PrismicImageType>;
  description?: Maybe<PrismicStructuredTextType>;
  link?: Maybe<PrismicLinkType>;
};

export type PrismicCategoryDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  parent_category?: Maybe<PrismicLinkTypeFilterInput>;
  featured?: Maybe<BooleanQueryOperatorInput>;
  image?: Maybe<PrismicImageTypeFilterInput>;
  description?: Maybe<PrismicStructuredTextTypeFilterInput>;
  link?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicCategoryEdge = {
  __typename?: 'PrismicCategoryEdge';
  next?: Maybe<PrismicCategory>;
  node: PrismicCategory;
  previous?: Maybe<PrismicCategory>;
};

export enum PrismicCategoryFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataParentCategoryLinkType = 'data___parent_category___link_type',
  DataParentCategoryIsBroken = 'data___parent_category___isBroken',
  DataParentCategoryUrl = 'data___parent_category___url',
  DataParentCategoryTarget = 'data___parent_category___target',
  DataParentCategorySize = 'data___parent_category___size',
  DataParentCategoryId = 'data___parent_category___id',
  DataParentCategoryType = 'data___parent_category___type',
  DataParentCategoryTags = 'data___parent_category___tags',
  DataParentCategoryLang = 'data___parent_category___lang',
  DataParentCategorySlug = 'data___parent_category___slug',
  DataParentCategoryUid = 'data___parent_category___uid',
  DataParentCategoryRaw = 'data___parent_category___raw',
  DataFeatured = 'data___featured',
  DataImageAlt = 'data___image___alt',
  DataImageCopyright = 'data___image___copyright',
  DataImageDimensionsWidth = 'data___image___dimensions___width',
  DataImageDimensionsHeight = 'data___image___dimensions___height',
  DataImageUrl = 'data___image___url',
  DataImageFixedBase64 = 'data___image___fixed___base64',
  DataImageFixedSrc = 'data___image___fixed___src',
  DataImageFixedSrcSet = 'data___image___fixed___srcSet',
  DataImageFixedSrcWebp = 'data___image___fixed___srcWebp',
  DataImageFixedSrcSetWebp = 'data___image___fixed___srcSetWebp',
  DataImageFixedSizes = 'data___image___fixed___sizes',
  DataImageFixedWidth = 'data___image___fixed___width',
  DataImageFixedHeight = 'data___image___fixed___height',
  DataImageFluidBase64 = 'data___image___fluid___base64',
  DataImageFluidSrc = 'data___image___fluid___src',
  DataImageFluidSrcSet = 'data___image___fluid___srcSet',
  DataImageFluidSrcWebp = 'data___image___fluid___srcWebp',
  DataImageFluidSrcSetWebp = 'data___image___fluid___srcSetWebp',
  DataImageFluidSizes = 'data___image___fluid___sizes',
  DataImageFluidAspectRatio = 'data___image___fluid___aspectRatio',
  DataImageLocalFileSourceInstanceName = 'data___image___localFile___sourceInstanceName',
  DataImageLocalFileAbsolutePath = 'data___image___localFile___absolutePath',
  DataImageLocalFileRelativePath = 'data___image___localFile___relativePath',
  DataImageLocalFileExtension = 'data___image___localFile___extension',
  DataImageLocalFileSize = 'data___image___localFile___size',
  DataImageLocalFilePrettySize = 'data___image___localFile___prettySize',
  DataImageLocalFileModifiedTime = 'data___image___localFile___modifiedTime',
  DataImageLocalFileAccessTime = 'data___image___localFile___accessTime',
  DataImageLocalFileChangeTime = 'data___image___localFile___changeTime',
  DataImageLocalFileBirthTime = 'data___image___localFile___birthTime',
  DataImageLocalFileRoot = 'data___image___localFile___root',
  DataImageLocalFileDir = 'data___image___localFile___dir',
  DataImageLocalFileBase = 'data___image___localFile___base',
  DataImageLocalFileExt = 'data___image___localFile___ext',
  DataImageLocalFileName = 'data___image___localFile___name',
  DataImageLocalFileRelativeDirectory = 'data___image___localFile___relativeDirectory',
  DataImageLocalFileDev = 'data___image___localFile___dev',
  DataImageLocalFileMode = 'data___image___localFile___mode',
  DataImageLocalFileNlink = 'data___image___localFile___nlink',
  DataImageLocalFileUid = 'data___image___localFile___uid',
  DataImageLocalFileGid = 'data___image___localFile___gid',
  DataImageLocalFileRdev = 'data___image___localFile___rdev',
  DataImageLocalFileIno = 'data___image___localFile___ino',
  DataImageLocalFileAtimeMs = 'data___image___localFile___atimeMs',
  DataImageLocalFileMtimeMs = 'data___image___localFile___mtimeMs',
  DataImageLocalFileCtimeMs = 'data___image___localFile___ctimeMs',
  DataImageLocalFileAtime = 'data___image___localFile___atime',
  DataImageLocalFileMtime = 'data___image___localFile___mtime',
  DataImageLocalFileCtime = 'data___image___localFile___ctime',
  DataImageLocalFileBirthtime = 'data___image___localFile___birthtime',
  DataImageLocalFileBirthtimeMs = 'data___image___localFile___birthtimeMs',
  DataImageLocalFileBlksize = 'data___image___localFile___blksize',
  DataImageLocalFileBlocks = 'data___image___localFile___blocks',
  DataImageLocalFileUrl = 'data___image___localFile___url',
  DataImageLocalFilePublicUrl = 'data___image___localFile___publicURL',
  DataImageLocalFileChildrenImageSharp = 'data___image___localFile___childrenImageSharp',
  DataImageLocalFileId = 'data___image___localFile___id',
  DataImageLocalFileChildren = 'data___image___localFile___children',
  DataImageThumbnails = 'data___image___thumbnails',
  DataDescriptionHtml = 'data___description___html',
  DataDescriptionText = 'data___description___text',
  DataDescriptionRaw = 'data___description___raw',
  DataLinkLinkType = 'data___link___link_type',
  DataLinkIsBroken = 'data___link___isBroken',
  DataLinkUrl = 'data___link___url',
  DataLinkTarget = 'data___link___target',
  DataLinkSize = 'data___link___size',
  DataLinkId = 'data___link___id',
  DataLinkType = 'data___link___type',
  DataLinkTags = 'data___link___tags',
  DataLinkLang = 'data___link___lang',
  DataLinkSlug = 'data___link___slug',
  DataLinkUid = 'data___link___uid',
  DataLinkRaw = 'data___link___raw',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Uid = 'uid',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicCategoryFilterInput = {
  data?: Maybe<PrismicCategoryDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicCategoryGroupConnection = {
  __typename?: 'PrismicCategoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicCategoryEdge>;
  nodes: Array<PrismicCategory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicCategorySortInput = {
  fields?: Maybe<Array<Maybe<PrismicCategoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicCommon = PrismicDocument & Node & {
  __typename?: 'PrismicCommon';
  data?: Maybe<PrismicCommonDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  _previewable: Scalars['ID'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicCommonFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicCommonLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicCommonAdBlocksGroupType = {
  __typename?: 'PrismicCommonAdBlocksGroupType';
  block_image?: Maybe<PrismicImageType>;
  badge_title?: Maybe<PrismicStructuredTextType>;
  badge_color?: Maybe<Scalars['String']>;
  title?: Maybe<PrismicStructuredTextType>;
  short_description?: Maybe<PrismicStructuredTextType>;
  add_a_button?: Maybe<Scalars['Boolean']>;
  button_title?: Maybe<PrismicStructuredTextType>;
};

export type PrismicCommonAdBlocksGroupTypeFilterInput = {
  block_image?: Maybe<PrismicImageTypeFilterInput>;
  badge_title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  badge_color?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  short_description?: Maybe<PrismicStructuredTextTypeFilterInput>;
  add_a_button?: Maybe<BooleanQueryOperatorInput>;
  button_title?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicCommonAdBlocksGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicCommonAdBlocksGroupTypeFilterInput>;
};

export type PrismicCommonConnection = {
  __typename?: 'PrismicCommonConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicCommonEdge>;
  nodes: Array<PrismicCommon>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicCommonGroupConnection>;
};


export type PrismicCommonConnectionDistinctArgs = {
  field: PrismicCommonFieldsEnum;
};


export type PrismicCommonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicCommonFieldsEnum;
};

export type PrismicCommonDataType = {
  __typename?: 'PrismicCommonDataType';
  header_notice_switch?: Maybe<Scalars['Boolean']>;
  special_notice_title?: Maybe<PrismicStructuredTextType>;
  top_header_color?: Maybe<Scalars['String']>;
  logo?: Maybe<PrismicImageType>;
  search_placeholder?: Maybe<PrismicStructuredTextType>;
  shopping_cart_title?: Maybe<PrismicStructuredTextType>;
  total_amount_text?: Maybe<PrismicStructuredTextType>;
  checkout_button_text?: Maybe<PrismicStructuredTextType>;
  copyright_text?: Maybe<PrismicStructuredTextType>;
  social_links?: Maybe<Array<Maybe<PrismicCommonSocialLinksGroupType>>>;
  ad_blocks?: Maybe<Array<Maybe<PrismicCommonAdBlocksGroupType>>>;
};

export type PrismicCommonDataTypeFilterInput = {
  header_notice_switch?: Maybe<BooleanQueryOperatorInput>;
  special_notice_title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  top_header_color?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<PrismicImageTypeFilterInput>;
  search_placeholder?: Maybe<PrismicStructuredTextTypeFilterInput>;
  shopping_cart_title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  total_amount_text?: Maybe<PrismicStructuredTextTypeFilterInput>;
  checkout_button_text?: Maybe<PrismicStructuredTextTypeFilterInput>;
  copyright_text?: Maybe<PrismicStructuredTextTypeFilterInput>;
  social_links?: Maybe<PrismicCommonSocialLinksGroupTypeFilterListInput>;
  ad_blocks?: Maybe<PrismicCommonAdBlocksGroupTypeFilterListInput>;
};

export type PrismicCommonEdge = {
  __typename?: 'PrismicCommonEdge';
  next?: Maybe<PrismicCommon>;
  node: PrismicCommon;
  previous?: Maybe<PrismicCommon>;
};

export enum PrismicCommonFieldsEnum {
  DataHeaderNoticeSwitch = 'data___header_notice_switch',
  DataSpecialNoticeTitleHtml = 'data___special_notice_title___html',
  DataSpecialNoticeTitleText = 'data___special_notice_title___text',
  DataSpecialNoticeTitleRaw = 'data___special_notice_title___raw',
  DataTopHeaderColor = 'data___top_header_color',
  DataLogoAlt = 'data___logo___alt',
  DataLogoCopyright = 'data___logo___copyright',
  DataLogoDimensionsWidth = 'data___logo___dimensions___width',
  DataLogoDimensionsHeight = 'data___logo___dimensions___height',
  DataLogoUrl = 'data___logo___url',
  DataLogoFixedBase64 = 'data___logo___fixed___base64',
  DataLogoFixedSrc = 'data___logo___fixed___src',
  DataLogoFixedSrcSet = 'data___logo___fixed___srcSet',
  DataLogoFixedSrcWebp = 'data___logo___fixed___srcWebp',
  DataLogoFixedSrcSetWebp = 'data___logo___fixed___srcSetWebp',
  DataLogoFixedSizes = 'data___logo___fixed___sizes',
  DataLogoFixedWidth = 'data___logo___fixed___width',
  DataLogoFixedHeight = 'data___logo___fixed___height',
  DataLogoFluidBase64 = 'data___logo___fluid___base64',
  DataLogoFluidSrc = 'data___logo___fluid___src',
  DataLogoFluidSrcSet = 'data___logo___fluid___srcSet',
  DataLogoFluidSrcWebp = 'data___logo___fluid___srcWebp',
  DataLogoFluidSrcSetWebp = 'data___logo___fluid___srcSetWebp',
  DataLogoFluidSizes = 'data___logo___fluid___sizes',
  DataLogoFluidAspectRatio = 'data___logo___fluid___aspectRatio',
  DataLogoLocalFileSourceInstanceName = 'data___logo___localFile___sourceInstanceName',
  DataLogoLocalFileAbsolutePath = 'data___logo___localFile___absolutePath',
  DataLogoLocalFileRelativePath = 'data___logo___localFile___relativePath',
  DataLogoLocalFileExtension = 'data___logo___localFile___extension',
  DataLogoLocalFileSize = 'data___logo___localFile___size',
  DataLogoLocalFilePrettySize = 'data___logo___localFile___prettySize',
  DataLogoLocalFileModifiedTime = 'data___logo___localFile___modifiedTime',
  DataLogoLocalFileAccessTime = 'data___logo___localFile___accessTime',
  DataLogoLocalFileChangeTime = 'data___logo___localFile___changeTime',
  DataLogoLocalFileBirthTime = 'data___logo___localFile___birthTime',
  DataLogoLocalFileRoot = 'data___logo___localFile___root',
  DataLogoLocalFileDir = 'data___logo___localFile___dir',
  DataLogoLocalFileBase = 'data___logo___localFile___base',
  DataLogoLocalFileExt = 'data___logo___localFile___ext',
  DataLogoLocalFileName = 'data___logo___localFile___name',
  DataLogoLocalFileRelativeDirectory = 'data___logo___localFile___relativeDirectory',
  DataLogoLocalFileDev = 'data___logo___localFile___dev',
  DataLogoLocalFileMode = 'data___logo___localFile___mode',
  DataLogoLocalFileNlink = 'data___logo___localFile___nlink',
  DataLogoLocalFileUid = 'data___logo___localFile___uid',
  DataLogoLocalFileGid = 'data___logo___localFile___gid',
  DataLogoLocalFileRdev = 'data___logo___localFile___rdev',
  DataLogoLocalFileIno = 'data___logo___localFile___ino',
  DataLogoLocalFileAtimeMs = 'data___logo___localFile___atimeMs',
  DataLogoLocalFileMtimeMs = 'data___logo___localFile___mtimeMs',
  DataLogoLocalFileCtimeMs = 'data___logo___localFile___ctimeMs',
  DataLogoLocalFileAtime = 'data___logo___localFile___atime',
  DataLogoLocalFileMtime = 'data___logo___localFile___mtime',
  DataLogoLocalFileCtime = 'data___logo___localFile___ctime',
  DataLogoLocalFileBirthtime = 'data___logo___localFile___birthtime',
  DataLogoLocalFileBirthtimeMs = 'data___logo___localFile___birthtimeMs',
  DataLogoLocalFileBlksize = 'data___logo___localFile___blksize',
  DataLogoLocalFileBlocks = 'data___logo___localFile___blocks',
  DataLogoLocalFileUrl = 'data___logo___localFile___url',
  DataLogoLocalFilePublicUrl = 'data___logo___localFile___publicURL',
  DataLogoLocalFileChildrenImageSharp = 'data___logo___localFile___childrenImageSharp',
  DataLogoLocalFileId = 'data___logo___localFile___id',
  DataLogoLocalFileChildren = 'data___logo___localFile___children',
  DataLogoThumbnails = 'data___logo___thumbnails',
  DataSearchPlaceholderHtml = 'data___search_placeholder___html',
  DataSearchPlaceholderText = 'data___search_placeholder___text',
  DataSearchPlaceholderRaw = 'data___search_placeholder___raw',
  DataShoppingCartTitleHtml = 'data___shopping_cart_title___html',
  DataShoppingCartTitleText = 'data___shopping_cart_title___text',
  DataShoppingCartTitleRaw = 'data___shopping_cart_title___raw',
  DataTotalAmountTextHtml = 'data___total_amount_text___html',
  DataTotalAmountTextText = 'data___total_amount_text___text',
  DataTotalAmountTextRaw = 'data___total_amount_text___raw',
  DataCheckoutButtonTextHtml = 'data___checkout_button_text___html',
  DataCheckoutButtonTextText = 'data___checkout_button_text___text',
  DataCheckoutButtonTextRaw = 'data___checkout_button_text___raw',
  DataCopyrightTextHtml = 'data___copyright_text___html',
  DataCopyrightTextText = 'data___copyright_text___text',
  DataCopyrightTextRaw = 'data___copyright_text___raw',
  DataSocialLinks = 'data___social_links',
  DataSocialLinksSocialType = 'data___social_links___social_type',
  DataSocialLinksSocialLinkLinkType = 'data___social_links___social_link___link_type',
  DataSocialLinksSocialLinkIsBroken = 'data___social_links___social_link___isBroken',
  DataSocialLinksSocialLinkUrl = 'data___social_links___social_link___url',
  DataSocialLinksSocialLinkTarget = 'data___social_links___social_link___target',
  DataSocialLinksSocialLinkSize = 'data___social_links___social_link___size',
  DataSocialLinksSocialLinkId = 'data___social_links___social_link___id',
  DataSocialLinksSocialLinkType = 'data___social_links___social_link___type',
  DataSocialLinksSocialLinkTags = 'data___social_links___social_link___tags',
  DataSocialLinksSocialLinkLang = 'data___social_links___social_link___lang',
  DataSocialLinksSocialLinkSlug = 'data___social_links___social_link___slug',
  DataSocialLinksSocialLinkUid = 'data___social_links___social_link___uid',
  DataSocialLinksSocialLinkRaw = 'data___social_links___social_link___raw',
  DataAdBlocks = 'data___ad_blocks',
  DataAdBlocksBlockImageAlt = 'data___ad_blocks___block_image___alt',
  DataAdBlocksBlockImageCopyright = 'data___ad_blocks___block_image___copyright',
  DataAdBlocksBlockImageUrl = 'data___ad_blocks___block_image___url',
  DataAdBlocksBlockImageThumbnails = 'data___ad_blocks___block_image___thumbnails',
  DataAdBlocksBadgeTitleHtml = 'data___ad_blocks___badge_title___html',
  DataAdBlocksBadgeTitleText = 'data___ad_blocks___badge_title___text',
  DataAdBlocksBadgeTitleRaw = 'data___ad_blocks___badge_title___raw',
  DataAdBlocksBadgeColor = 'data___ad_blocks___badge_color',
  DataAdBlocksTitleHtml = 'data___ad_blocks___title___html',
  DataAdBlocksTitleText = 'data___ad_blocks___title___text',
  DataAdBlocksTitleRaw = 'data___ad_blocks___title___raw',
  DataAdBlocksShortDescriptionHtml = 'data___ad_blocks___short_description___html',
  DataAdBlocksShortDescriptionText = 'data___ad_blocks___short_description___text',
  DataAdBlocksShortDescriptionRaw = 'data___ad_blocks___short_description___raw',
  DataAdBlocksAddAButton = 'data___ad_blocks___add_a_button',
  DataAdBlocksButtonTitleHtml = 'data___ad_blocks___button_title___html',
  DataAdBlocksButtonTitleText = 'data___ad_blocks___button_title___text',
  DataAdBlocksButtonTitleRaw = 'data___ad_blocks___button_title___raw',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicCommonFilterInput = {
  data?: Maybe<PrismicCommonDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicCommonGroupConnection = {
  __typename?: 'PrismicCommonGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicCommonEdge>;
  nodes: Array<PrismicCommon>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicCommonSocialLinksGroupType = {
  __typename?: 'PrismicCommonSocialLinksGroupType';
  social_type?: Maybe<Scalars['String']>;
  social_link?: Maybe<PrismicLinkType>;
};

export type PrismicCommonSocialLinksGroupTypeFilterInput = {
  social_type?: Maybe<StringQueryOperatorInput>;
  social_link?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicCommonSocialLinksGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicCommonSocialLinksGroupTypeFilterInput>;
};

export type PrismicCommonSortInput = {
  fields?: Maybe<Array<Maybe<PrismicCommonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicDocument = {
  /** The document's data object without transformations exactly as it comes from the Prismic API. */
  dataRaw: Scalars['JSON'];
  /**
   * The document's data object without transformations. The object is stringified via `JSON.stringify` to eliminate the need to declare subfields.
   * @deprecated Use `dataRaw` instead which returns JSON.
   */
  dataString?: Maybe<Scalars['String']>;
  /** The document's initial publication date. */
  first_publication_date?: Maybe<Scalars['Date']>;
  /** The document's Prismic API URL. */
  href?: Maybe<Scalars['String']>;
  /** The document's URL derived via the link resolver. */
  url?: Maybe<Scalars['String']>;
  /** Globally unique identifier. Note that this differs from the `prismicID` field. */
  id: Scalars['ID'];
  /** The document's language. */
  lang: Scalars['String'];
  /** The document's most recent publication date */
  last_publication_date?: Maybe<Scalars['Date']>;
  /** The document's list of tags. */
  tags: Array<Scalars['String']>;
  /** Alternate languages for the document. */
  alternate_languages: Array<PrismicLinkType>;
  /** The document's Prismic API ID type. */
  type: Scalars['String'];
  /** The document's Prismic ID. */
  prismicId: Scalars['ID'];
  /** Marks the document as previewable using Prismic's preview system. Include this field if updates to the document should be previewable by content editors before publishing. **Note: the value of this field is not stable and should not be used directly**. */
  _previewable: Scalars['ID'];
};


export type PrismicDocumentFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicDocumentLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Embed videos, songs, tweets, slices, etc. */
export type PrismicEmbedType = {
  __typename?: 'PrismicEmbedType';
  /** The ID of the resource author. Fetched via oEmbed data. */
  author_id?: Maybe<Scalars['ID']>;
  /** The name of the author/owner of the resource. Fetched via oEmbed data. */
  author_name?: Maybe<Scalars['String']>;
  /** A URL for the author/owner of the resource. Fetched via oEmbed data. */
  author_url?: Maybe<Scalars['String']>;
  /** The suggested cache lifetime for this resource, in seconds. Consumers may choose to use this value or not. Fetched via oEmbed data. */
  cache_age?: Maybe<Scalars['String']>;
  /** The URL of the resource. */
  embed_url?: Maybe<Scalars['String']>;
  /** The HTML required to display the resource. The HTML should have no padding or margins. Consumers may wish to load the HTML in an off-domain iframe to avoid XSS vulnerabilities. Fetched via oEmbed data. */
  html?: Maybe<Scalars['String']>;
  /** The name of the resource. */
  name?: Maybe<Scalars['String']>;
  /** The name of the resource provider. Fetched via oEmbed data. */
  provider_name?: Maybe<Scalars['String']>;
  /** The URL of the resource provider. Fetched via oEmbed data. */
  provider_url?: Maybe<Scalars['String']>;
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  thumbnail_height?: Maybe<Scalars['Int']>;
  /** A URL to a thumbnail image representing the resource. Fetched via oEmbed data. */
  thumbnail_url?: Maybe<Scalars['String']>;
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  thumbnail_width?: Maybe<Scalars['Int']>;
  /** A text title, describing the resource. Fetched via oEmbed data. */
  title?: Maybe<Scalars['String']>;
  /** The resource type. Fetched via oEmbed data. */
  type?: Maybe<Scalars['String']>;
  /** The oEmbed version number. */
  version?: Maybe<Scalars['String']>;
  /** The source URL of the resource. Fetched via oEmbed data. */
  url?: Maybe<Scalars['String']>;
  /** The width in pixel of the resource. Fetched via oEmbed data. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixel of the resource. Fetched via oEmbed data. */
  height?: Maybe<Scalars['Int']>;
  /** The ID of the resource media. Fetched via oEmbed data. */
  media_id?: Maybe<Scalars['ID']>;
  /** A description for the resource. */
  description?: Maybe<Scalars['String']>;
  /** The ID of a video. */
  video_id?: Maybe<Scalars['ID']>;
};

/** A field for storing geo-coordinates. */
export type PrismicGeoPointType = {
  __typename?: 'PrismicGeoPointType';
  /** The latitude value of the geo-coordinate. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude value of the geo-coordinate. */
  longitude?: Maybe<Scalars['Float']>;
};

export type PrismicHome = PrismicDocument & Node & {
  __typename?: 'PrismicHome';
  data?: Maybe<PrismicHomeDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  _previewable: Scalars['ID'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicHomeFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicHomeLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicHomeBannerSliderGroupType = {
  __typename?: 'PrismicHomeBannerSliderGroupType';
  image?: Maybe<PrismicImageType>;
  banner_title1?: Maybe<PrismicStructuredTextType>;
  banner_subtitle1?: Maybe<PrismicStructuredTextType>;
  banner_description?: Maybe<PrismicStructuredTextType>;
};

export type PrismicHomeBannerSliderGroupTypeFilterInput = {
  image?: Maybe<PrismicImageTypeFilterInput>;
  banner_title1?: Maybe<PrismicStructuredTextTypeFilterInput>;
  banner_subtitle1?: Maybe<PrismicStructuredTextTypeFilterInput>;
  banner_description?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicHomeBannerSliderGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicHomeBannerSliderGroupTypeFilterInput>;
};

export type PrismicHomeCategoryBlockGroupType = {
  __typename?: 'PrismicHomeCategoryBlockGroupType';
  image?: Maybe<PrismicImageType>;
  category_title?: Maybe<PrismicStructuredTextType>;
  category_slug?: Maybe<Scalars['String']>;
};

export type PrismicHomeCategoryBlockGroupTypeFilterInput = {
  image?: Maybe<PrismicImageTypeFilterInput>;
  category_title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  category_slug?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeCategoryBlockGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicHomeCategoryBlockGroupTypeFilterInput>;
};

export type PrismicHomeConnection = {
  __typename?: 'PrismicHomeConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeEdge>;
  nodes: Array<PrismicHome>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicHomeGroupConnection>;
};


export type PrismicHomeConnectionDistinctArgs = {
  field: PrismicHomeFieldsEnum;
};


export type PrismicHomeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicHomeFieldsEnum;
};

export type PrismicHomeDataType = {
  __typename?: 'PrismicHomeDataType';
  banner?: Maybe<PrismicImageType>;
  banner_slider?: Maybe<Array<Maybe<PrismicHomeBannerSliderGroupType>>>;
  banner_title?: Maybe<PrismicStructuredTextType>;
  banner_subtitle?: Maybe<PrismicStructuredTextType>;
  banner_button_text?: Maybe<PrismicStructuredTextType>;
  trending_block_title?: Maybe<PrismicStructuredTextType>;
  view_more_text?: Maybe<PrismicStructuredTextType>;
  how_it_works_title?: Maybe<PrismicStructuredTextType>;
  how_it_works_subtitle?: Maybe<PrismicStructuredTextType>;
  how_it_works_group?: Maybe<Array<Maybe<PrismicHomeHowItWorksGroupGroupType>>>;
  call_us_banner?: Maybe<PrismicImageType>;
  call_us_title?: Maybe<PrismicStructuredTextType>;
  call_us_button_text?: Maybe<PrismicStructuredTextType>;
  category_section_title?: Maybe<PrismicStructuredTextType>;
  category_section_short_intro?: Maybe<PrismicStructuredTextType>;
  category_block?: Maybe<Array<Maybe<PrismicHomeCategoryBlockGroupType>>>;
};

export type PrismicHomeDataTypeFilterInput = {
  banner?: Maybe<PrismicImageTypeFilterInput>;
  banner_slider?: Maybe<PrismicHomeBannerSliderGroupTypeFilterListInput>;
  banner_title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  banner_subtitle?: Maybe<PrismicStructuredTextTypeFilterInput>;
  banner_button_text?: Maybe<PrismicStructuredTextTypeFilterInput>;
  trending_block_title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  view_more_text?: Maybe<PrismicStructuredTextTypeFilterInput>;
  how_it_works_title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  how_it_works_subtitle?: Maybe<PrismicStructuredTextTypeFilterInput>;
  how_it_works_group?: Maybe<PrismicHomeHowItWorksGroupGroupTypeFilterListInput>;
  call_us_banner?: Maybe<PrismicImageTypeFilterInput>;
  call_us_title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  call_us_button_text?: Maybe<PrismicStructuredTextTypeFilterInput>;
  category_section_title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  category_section_short_intro?: Maybe<PrismicStructuredTextTypeFilterInput>;
  category_block?: Maybe<PrismicHomeCategoryBlockGroupTypeFilterListInput>;
};

export type PrismicHomeEdge = {
  __typename?: 'PrismicHomeEdge';
  next?: Maybe<PrismicHome>;
  node: PrismicHome;
  previous?: Maybe<PrismicHome>;
};

export enum PrismicHomeFieldsEnum {
  DataBannerAlt = 'data___banner___alt',
  DataBannerCopyright = 'data___banner___copyright',
  DataBannerDimensionsWidth = 'data___banner___dimensions___width',
  DataBannerDimensionsHeight = 'data___banner___dimensions___height',
  DataBannerUrl = 'data___banner___url',
  DataBannerFixedBase64 = 'data___banner___fixed___base64',
  DataBannerFixedSrc = 'data___banner___fixed___src',
  DataBannerFixedSrcSet = 'data___banner___fixed___srcSet',
  DataBannerFixedSrcWebp = 'data___banner___fixed___srcWebp',
  DataBannerFixedSrcSetWebp = 'data___banner___fixed___srcSetWebp',
  DataBannerFixedSizes = 'data___banner___fixed___sizes',
  DataBannerFixedWidth = 'data___banner___fixed___width',
  DataBannerFixedHeight = 'data___banner___fixed___height',
  DataBannerFluidBase64 = 'data___banner___fluid___base64',
  DataBannerFluidSrc = 'data___banner___fluid___src',
  DataBannerFluidSrcSet = 'data___banner___fluid___srcSet',
  DataBannerFluidSrcWebp = 'data___banner___fluid___srcWebp',
  DataBannerFluidSrcSetWebp = 'data___banner___fluid___srcSetWebp',
  DataBannerFluidSizes = 'data___banner___fluid___sizes',
  DataBannerFluidAspectRatio = 'data___banner___fluid___aspectRatio',
  DataBannerLocalFileSourceInstanceName = 'data___banner___localFile___sourceInstanceName',
  DataBannerLocalFileAbsolutePath = 'data___banner___localFile___absolutePath',
  DataBannerLocalFileRelativePath = 'data___banner___localFile___relativePath',
  DataBannerLocalFileExtension = 'data___banner___localFile___extension',
  DataBannerLocalFileSize = 'data___banner___localFile___size',
  DataBannerLocalFilePrettySize = 'data___banner___localFile___prettySize',
  DataBannerLocalFileModifiedTime = 'data___banner___localFile___modifiedTime',
  DataBannerLocalFileAccessTime = 'data___banner___localFile___accessTime',
  DataBannerLocalFileChangeTime = 'data___banner___localFile___changeTime',
  DataBannerLocalFileBirthTime = 'data___banner___localFile___birthTime',
  DataBannerLocalFileRoot = 'data___banner___localFile___root',
  DataBannerLocalFileDir = 'data___banner___localFile___dir',
  DataBannerLocalFileBase = 'data___banner___localFile___base',
  DataBannerLocalFileExt = 'data___banner___localFile___ext',
  DataBannerLocalFileName = 'data___banner___localFile___name',
  DataBannerLocalFileRelativeDirectory = 'data___banner___localFile___relativeDirectory',
  DataBannerLocalFileDev = 'data___banner___localFile___dev',
  DataBannerLocalFileMode = 'data___banner___localFile___mode',
  DataBannerLocalFileNlink = 'data___banner___localFile___nlink',
  DataBannerLocalFileUid = 'data___banner___localFile___uid',
  DataBannerLocalFileGid = 'data___banner___localFile___gid',
  DataBannerLocalFileRdev = 'data___banner___localFile___rdev',
  DataBannerLocalFileIno = 'data___banner___localFile___ino',
  DataBannerLocalFileAtimeMs = 'data___banner___localFile___atimeMs',
  DataBannerLocalFileMtimeMs = 'data___banner___localFile___mtimeMs',
  DataBannerLocalFileCtimeMs = 'data___banner___localFile___ctimeMs',
  DataBannerLocalFileAtime = 'data___banner___localFile___atime',
  DataBannerLocalFileMtime = 'data___banner___localFile___mtime',
  DataBannerLocalFileCtime = 'data___banner___localFile___ctime',
  DataBannerLocalFileBirthtime = 'data___banner___localFile___birthtime',
  DataBannerLocalFileBirthtimeMs = 'data___banner___localFile___birthtimeMs',
  DataBannerLocalFileBlksize = 'data___banner___localFile___blksize',
  DataBannerLocalFileBlocks = 'data___banner___localFile___blocks',
  DataBannerLocalFileUrl = 'data___banner___localFile___url',
  DataBannerLocalFilePublicUrl = 'data___banner___localFile___publicURL',
  DataBannerLocalFileChildrenImageSharp = 'data___banner___localFile___childrenImageSharp',
  DataBannerLocalFileId = 'data___banner___localFile___id',
  DataBannerLocalFileChildren = 'data___banner___localFile___children',
  DataBannerThumbnails = 'data___banner___thumbnails',
  DataBannerSlider = 'data___banner_slider',
  DataBannerSliderImageAlt = 'data___banner_slider___image___alt',
  DataBannerSliderImageCopyright = 'data___banner_slider___image___copyright',
  DataBannerSliderImageUrl = 'data___banner_slider___image___url',
  DataBannerSliderImageThumbnails = 'data___banner_slider___image___thumbnails',
  DataBannerSliderBannerTitle1Html = 'data___banner_slider___banner_title1___html',
  DataBannerSliderBannerTitle1Text = 'data___banner_slider___banner_title1___text',
  DataBannerSliderBannerTitle1Raw = 'data___banner_slider___banner_title1___raw',
  DataBannerSliderBannerSubtitle1Html = 'data___banner_slider___banner_subtitle1___html',
  DataBannerSliderBannerSubtitle1Text = 'data___banner_slider___banner_subtitle1___text',
  DataBannerSliderBannerSubtitle1Raw = 'data___banner_slider___banner_subtitle1___raw',
  DataBannerSliderBannerDescriptionHtml = 'data___banner_slider___banner_description___html',
  DataBannerSliderBannerDescriptionText = 'data___banner_slider___banner_description___text',
  DataBannerSliderBannerDescriptionRaw = 'data___banner_slider___banner_description___raw',
  DataBannerTitleHtml = 'data___banner_title___html',
  DataBannerTitleText = 'data___banner_title___text',
  DataBannerTitleRaw = 'data___banner_title___raw',
  DataBannerSubtitleHtml = 'data___banner_subtitle___html',
  DataBannerSubtitleText = 'data___banner_subtitle___text',
  DataBannerSubtitleRaw = 'data___banner_subtitle___raw',
  DataBannerButtonTextHtml = 'data___banner_button_text___html',
  DataBannerButtonTextText = 'data___banner_button_text___text',
  DataBannerButtonTextRaw = 'data___banner_button_text___raw',
  DataTrendingBlockTitleHtml = 'data___trending_block_title___html',
  DataTrendingBlockTitleText = 'data___trending_block_title___text',
  DataTrendingBlockTitleRaw = 'data___trending_block_title___raw',
  DataViewMoreTextHtml = 'data___view_more_text___html',
  DataViewMoreTextText = 'data___view_more_text___text',
  DataViewMoreTextRaw = 'data___view_more_text___raw',
  DataHowItWorksTitleHtml = 'data___how_it_works_title___html',
  DataHowItWorksTitleText = 'data___how_it_works_title___text',
  DataHowItWorksTitleRaw = 'data___how_it_works_title___raw',
  DataHowItWorksSubtitleHtml = 'data___how_it_works_subtitle___html',
  DataHowItWorksSubtitleText = 'data___how_it_works_subtitle___text',
  DataHowItWorksSubtitleRaw = 'data___how_it_works_subtitle___raw',
  DataHowItWorksGroup = 'data___how_it_works_group',
  DataHowItWorksGroupImageAlt = 'data___how_it_works_group___image___alt',
  DataHowItWorksGroupImageCopyright = 'data___how_it_works_group___image___copyright',
  DataHowItWorksGroupImageUrl = 'data___how_it_works_group___image___url',
  DataHowItWorksGroupImageThumbnails = 'data___how_it_works_group___image___thumbnails',
  DataHowItWorksGroupTitleHtml = 'data___how_it_works_group___title___html',
  DataHowItWorksGroupTitleText = 'data___how_it_works_group___title___text',
  DataHowItWorksGroupTitleRaw = 'data___how_it_works_group___title___raw',
  DataHowItWorksGroupDescriptionHtml = 'data___how_it_works_group___description___html',
  DataHowItWorksGroupDescriptionText = 'data___how_it_works_group___description___text',
  DataHowItWorksGroupDescriptionRaw = 'data___how_it_works_group___description___raw',
  DataCallUsBannerAlt = 'data___call_us_banner___alt',
  DataCallUsBannerCopyright = 'data___call_us_banner___copyright',
  DataCallUsBannerDimensionsWidth = 'data___call_us_banner___dimensions___width',
  DataCallUsBannerDimensionsHeight = 'data___call_us_banner___dimensions___height',
  DataCallUsBannerUrl = 'data___call_us_banner___url',
  DataCallUsBannerFixedBase64 = 'data___call_us_banner___fixed___base64',
  DataCallUsBannerFixedSrc = 'data___call_us_banner___fixed___src',
  DataCallUsBannerFixedSrcSet = 'data___call_us_banner___fixed___srcSet',
  DataCallUsBannerFixedSrcWebp = 'data___call_us_banner___fixed___srcWebp',
  DataCallUsBannerFixedSrcSetWebp = 'data___call_us_banner___fixed___srcSetWebp',
  DataCallUsBannerFixedSizes = 'data___call_us_banner___fixed___sizes',
  DataCallUsBannerFixedWidth = 'data___call_us_banner___fixed___width',
  DataCallUsBannerFixedHeight = 'data___call_us_banner___fixed___height',
  DataCallUsBannerFluidBase64 = 'data___call_us_banner___fluid___base64',
  DataCallUsBannerFluidSrc = 'data___call_us_banner___fluid___src',
  DataCallUsBannerFluidSrcSet = 'data___call_us_banner___fluid___srcSet',
  DataCallUsBannerFluidSrcWebp = 'data___call_us_banner___fluid___srcWebp',
  DataCallUsBannerFluidSrcSetWebp = 'data___call_us_banner___fluid___srcSetWebp',
  DataCallUsBannerFluidSizes = 'data___call_us_banner___fluid___sizes',
  DataCallUsBannerFluidAspectRatio = 'data___call_us_banner___fluid___aspectRatio',
  DataCallUsBannerLocalFileSourceInstanceName = 'data___call_us_banner___localFile___sourceInstanceName',
  DataCallUsBannerLocalFileAbsolutePath = 'data___call_us_banner___localFile___absolutePath',
  DataCallUsBannerLocalFileRelativePath = 'data___call_us_banner___localFile___relativePath',
  DataCallUsBannerLocalFileExtension = 'data___call_us_banner___localFile___extension',
  DataCallUsBannerLocalFileSize = 'data___call_us_banner___localFile___size',
  DataCallUsBannerLocalFilePrettySize = 'data___call_us_banner___localFile___prettySize',
  DataCallUsBannerLocalFileModifiedTime = 'data___call_us_banner___localFile___modifiedTime',
  DataCallUsBannerLocalFileAccessTime = 'data___call_us_banner___localFile___accessTime',
  DataCallUsBannerLocalFileChangeTime = 'data___call_us_banner___localFile___changeTime',
  DataCallUsBannerLocalFileBirthTime = 'data___call_us_banner___localFile___birthTime',
  DataCallUsBannerLocalFileRoot = 'data___call_us_banner___localFile___root',
  DataCallUsBannerLocalFileDir = 'data___call_us_banner___localFile___dir',
  DataCallUsBannerLocalFileBase = 'data___call_us_banner___localFile___base',
  DataCallUsBannerLocalFileExt = 'data___call_us_banner___localFile___ext',
  DataCallUsBannerLocalFileName = 'data___call_us_banner___localFile___name',
  DataCallUsBannerLocalFileRelativeDirectory = 'data___call_us_banner___localFile___relativeDirectory',
  DataCallUsBannerLocalFileDev = 'data___call_us_banner___localFile___dev',
  DataCallUsBannerLocalFileMode = 'data___call_us_banner___localFile___mode',
  DataCallUsBannerLocalFileNlink = 'data___call_us_banner___localFile___nlink',
  DataCallUsBannerLocalFileUid = 'data___call_us_banner___localFile___uid',
  DataCallUsBannerLocalFileGid = 'data___call_us_banner___localFile___gid',
  DataCallUsBannerLocalFileRdev = 'data___call_us_banner___localFile___rdev',
  DataCallUsBannerLocalFileIno = 'data___call_us_banner___localFile___ino',
  DataCallUsBannerLocalFileAtimeMs = 'data___call_us_banner___localFile___atimeMs',
  DataCallUsBannerLocalFileMtimeMs = 'data___call_us_banner___localFile___mtimeMs',
  DataCallUsBannerLocalFileCtimeMs = 'data___call_us_banner___localFile___ctimeMs',
  DataCallUsBannerLocalFileAtime = 'data___call_us_banner___localFile___atime',
  DataCallUsBannerLocalFileMtime = 'data___call_us_banner___localFile___mtime',
  DataCallUsBannerLocalFileCtime = 'data___call_us_banner___localFile___ctime',
  DataCallUsBannerLocalFileBirthtime = 'data___call_us_banner___localFile___birthtime',
  DataCallUsBannerLocalFileBirthtimeMs = 'data___call_us_banner___localFile___birthtimeMs',
  DataCallUsBannerLocalFileBlksize = 'data___call_us_banner___localFile___blksize',
  DataCallUsBannerLocalFileBlocks = 'data___call_us_banner___localFile___blocks',
  DataCallUsBannerLocalFileUrl = 'data___call_us_banner___localFile___url',
  DataCallUsBannerLocalFilePublicUrl = 'data___call_us_banner___localFile___publicURL',
  DataCallUsBannerLocalFileChildrenImageSharp = 'data___call_us_banner___localFile___childrenImageSharp',
  DataCallUsBannerLocalFileId = 'data___call_us_banner___localFile___id',
  DataCallUsBannerLocalFileChildren = 'data___call_us_banner___localFile___children',
  DataCallUsBannerThumbnails = 'data___call_us_banner___thumbnails',
  DataCallUsTitleHtml = 'data___call_us_title___html',
  DataCallUsTitleText = 'data___call_us_title___text',
  DataCallUsTitleRaw = 'data___call_us_title___raw',
  DataCallUsButtonTextHtml = 'data___call_us_button_text___html',
  DataCallUsButtonTextText = 'data___call_us_button_text___text',
  DataCallUsButtonTextRaw = 'data___call_us_button_text___raw',
  DataCategorySectionTitleHtml = 'data___category_section_title___html',
  DataCategorySectionTitleText = 'data___category_section_title___text',
  DataCategorySectionTitleRaw = 'data___category_section_title___raw',
  DataCategorySectionShortIntroHtml = 'data___category_section_short_intro___html',
  DataCategorySectionShortIntroText = 'data___category_section_short_intro___text',
  DataCategorySectionShortIntroRaw = 'data___category_section_short_intro___raw',
  DataCategoryBlock = 'data___category_block',
  DataCategoryBlockImageAlt = 'data___category_block___image___alt',
  DataCategoryBlockImageCopyright = 'data___category_block___image___copyright',
  DataCategoryBlockImageUrl = 'data___category_block___image___url',
  DataCategoryBlockImageThumbnails = 'data___category_block___image___thumbnails',
  DataCategoryBlockCategoryTitleHtml = 'data___category_block___category_title___html',
  DataCategoryBlockCategoryTitleText = 'data___category_block___category_title___text',
  DataCategoryBlockCategoryTitleRaw = 'data___category_block___category_title___raw',
  DataCategoryBlockCategorySlug = 'data___category_block___category_slug',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicHomeFilterInput = {
  data?: Maybe<PrismicHomeDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicHomeGroupConnection = {
  __typename?: 'PrismicHomeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeEdge>;
  nodes: Array<PrismicHome>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHomeHowItWorksGroupGroupType = {
  __typename?: 'PrismicHomeHowItWorksGroupGroupType';
  image?: Maybe<PrismicImageType>;
  title?: Maybe<PrismicStructuredTextType>;
  description?: Maybe<PrismicStructuredTextType>;
};

export type PrismicHomeHowItWorksGroupGroupTypeFilterInput = {
  image?: Maybe<PrismicImageTypeFilterInput>;
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  description?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicHomeHowItWorksGroupGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicHomeHowItWorksGroupGroupTypeFilterInput>;
};

export type PrismicHomeMinimal = PrismicDocument & Node & {
  __typename?: 'PrismicHomeMinimal';
  data?: Maybe<PrismicHomeMinimalDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  _previewable: Scalars['ID'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicHomeMinimalFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicHomeMinimalLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicHomeMinimalConnection = {
  __typename?: 'PrismicHomeMinimalConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeMinimalEdge>;
  nodes: Array<PrismicHomeMinimal>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicHomeMinimalGroupConnection>;
};


export type PrismicHomeMinimalConnectionDistinctArgs = {
  field: PrismicHomeMinimalFieldsEnum;
};


export type PrismicHomeMinimalConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicHomeMinimalFieldsEnum;
};

export type PrismicHomeMinimalDataType = {
  __typename?: 'PrismicHomeMinimalDataType';
  banner_image?: Maybe<PrismicImageType>;
  banner_title?: Maybe<PrismicStructuredTextType>;
  banner_subtitle?: Maybe<PrismicStructuredTextType>;
  banner_button_text?: Maybe<PrismicStructuredTextType>;
  call_us_banner?: Maybe<PrismicImageType>;
  call_us_banner_content?: Maybe<PrismicStructuredTextType>;
  call_us_button_text?: Maybe<PrismicStructuredTextType>;
  how_it_works?: Maybe<Array<Maybe<PrismicHomeMinimalHowItWorksGroupType>>>;
};

export type PrismicHomeMinimalDataTypeFilterInput = {
  banner_image?: Maybe<PrismicImageTypeFilterInput>;
  banner_title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  banner_subtitle?: Maybe<PrismicStructuredTextTypeFilterInput>;
  banner_button_text?: Maybe<PrismicStructuredTextTypeFilterInput>;
  call_us_banner?: Maybe<PrismicImageTypeFilterInput>;
  call_us_banner_content?: Maybe<PrismicStructuredTextTypeFilterInput>;
  call_us_button_text?: Maybe<PrismicStructuredTextTypeFilterInput>;
  how_it_works?: Maybe<PrismicHomeMinimalHowItWorksGroupTypeFilterListInput>;
};

export type PrismicHomeMinimalEdge = {
  __typename?: 'PrismicHomeMinimalEdge';
  next?: Maybe<PrismicHomeMinimal>;
  node: PrismicHomeMinimal;
  previous?: Maybe<PrismicHomeMinimal>;
};

export enum PrismicHomeMinimalFieldsEnum {
  DataBannerImageAlt = 'data___banner_image___alt',
  DataBannerImageCopyright = 'data___banner_image___copyright',
  DataBannerImageDimensionsWidth = 'data___banner_image___dimensions___width',
  DataBannerImageDimensionsHeight = 'data___banner_image___dimensions___height',
  DataBannerImageUrl = 'data___banner_image___url',
  DataBannerImageFixedBase64 = 'data___banner_image___fixed___base64',
  DataBannerImageFixedSrc = 'data___banner_image___fixed___src',
  DataBannerImageFixedSrcSet = 'data___banner_image___fixed___srcSet',
  DataBannerImageFixedSrcWebp = 'data___banner_image___fixed___srcWebp',
  DataBannerImageFixedSrcSetWebp = 'data___banner_image___fixed___srcSetWebp',
  DataBannerImageFixedSizes = 'data___banner_image___fixed___sizes',
  DataBannerImageFixedWidth = 'data___banner_image___fixed___width',
  DataBannerImageFixedHeight = 'data___banner_image___fixed___height',
  DataBannerImageFluidBase64 = 'data___banner_image___fluid___base64',
  DataBannerImageFluidSrc = 'data___banner_image___fluid___src',
  DataBannerImageFluidSrcSet = 'data___banner_image___fluid___srcSet',
  DataBannerImageFluidSrcWebp = 'data___banner_image___fluid___srcWebp',
  DataBannerImageFluidSrcSetWebp = 'data___banner_image___fluid___srcSetWebp',
  DataBannerImageFluidSizes = 'data___banner_image___fluid___sizes',
  DataBannerImageFluidAspectRatio = 'data___banner_image___fluid___aspectRatio',
  DataBannerImageLocalFileSourceInstanceName = 'data___banner_image___localFile___sourceInstanceName',
  DataBannerImageLocalFileAbsolutePath = 'data___banner_image___localFile___absolutePath',
  DataBannerImageLocalFileRelativePath = 'data___banner_image___localFile___relativePath',
  DataBannerImageLocalFileExtension = 'data___banner_image___localFile___extension',
  DataBannerImageLocalFileSize = 'data___banner_image___localFile___size',
  DataBannerImageLocalFilePrettySize = 'data___banner_image___localFile___prettySize',
  DataBannerImageLocalFileModifiedTime = 'data___banner_image___localFile___modifiedTime',
  DataBannerImageLocalFileAccessTime = 'data___banner_image___localFile___accessTime',
  DataBannerImageLocalFileChangeTime = 'data___banner_image___localFile___changeTime',
  DataBannerImageLocalFileBirthTime = 'data___banner_image___localFile___birthTime',
  DataBannerImageLocalFileRoot = 'data___banner_image___localFile___root',
  DataBannerImageLocalFileDir = 'data___banner_image___localFile___dir',
  DataBannerImageLocalFileBase = 'data___banner_image___localFile___base',
  DataBannerImageLocalFileExt = 'data___banner_image___localFile___ext',
  DataBannerImageLocalFileName = 'data___banner_image___localFile___name',
  DataBannerImageLocalFileRelativeDirectory = 'data___banner_image___localFile___relativeDirectory',
  DataBannerImageLocalFileDev = 'data___banner_image___localFile___dev',
  DataBannerImageLocalFileMode = 'data___banner_image___localFile___mode',
  DataBannerImageLocalFileNlink = 'data___banner_image___localFile___nlink',
  DataBannerImageLocalFileUid = 'data___banner_image___localFile___uid',
  DataBannerImageLocalFileGid = 'data___banner_image___localFile___gid',
  DataBannerImageLocalFileRdev = 'data___banner_image___localFile___rdev',
  DataBannerImageLocalFileIno = 'data___banner_image___localFile___ino',
  DataBannerImageLocalFileAtimeMs = 'data___banner_image___localFile___atimeMs',
  DataBannerImageLocalFileMtimeMs = 'data___banner_image___localFile___mtimeMs',
  DataBannerImageLocalFileCtimeMs = 'data___banner_image___localFile___ctimeMs',
  DataBannerImageLocalFileAtime = 'data___banner_image___localFile___atime',
  DataBannerImageLocalFileMtime = 'data___banner_image___localFile___mtime',
  DataBannerImageLocalFileCtime = 'data___banner_image___localFile___ctime',
  DataBannerImageLocalFileBirthtime = 'data___banner_image___localFile___birthtime',
  DataBannerImageLocalFileBirthtimeMs = 'data___banner_image___localFile___birthtimeMs',
  DataBannerImageLocalFileBlksize = 'data___banner_image___localFile___blksize',
  DataBannerImageLocalFileBlocks = 'data___banner_image___localFile___blocks',
  DataBannerImageLocalFileUrl = 'data___banner_image___localFile___url',
  DataBannerImageLocalFilePublicUrl = 'data___banner_image___localFile___publicURL',
  DataBannerImageLocalFileChildrenImageSharp = 'data___banner_image___localFile___childrenImageSharp',
  DataBannerImageLocalFileId = 'data___banner_image___localFile___id',
  DataBannerImageLocalFileChildren = 'data___banner_image___localFile___children',
  DataBannerImageThumbnails = 'data___banner_image___thumbnails',
  DataBannerTitleHtml = 'data___banner_title___html',
  DataBannerTitleText = 'data___banner_title___text',
  DataBannerTitleRaw = 'data___banner_title___raw',
  DataBannerSubtitleHtml = 'data___banner_subtitle___html',
  DataBannerSubtitleText = 'data___banner_subtitle___text',
  DataBannerSubtitleRaw = 'data___banner_subtitle___raw',
  DataBannerButtonTextHtml = 'data___banner_button_text___html',
  DataBannerButtonTextText = 'data___banner_button_text___text',
  DataBannerButtonTextRaw = 'data___banner_button_text___raw',
  DataCallUsBannerAlt = 'data___call_us_banner___alt',
  DataCallUsBannerCopyright = 'data___call_us_banner___copyright',
  DataCallUsBannerDimensionsWidth = 'data___call_us_banner___dimensions___width',
  DataCallUsBannerDimensionsHeight = 'data___call_us_banner___dimensions___height',
  DataCallUsBannerUrl = 'data___call_us_banner___url',
  DataCallUsBannerFixedBase64 = 'data___call_us_banner___fixed___base64',
  DataCallUsBannerFixedSrc = 'data___call_us_banner___fixed___src',
  DataCallUsBannerFixedSrcSet = 'data___call_us_banner___fixed___srcSet',
  DataCallUsBannerFixedSrcWebp = 'data___call_us_banner___fixed___srcWebp',
  DataCallUsBannerFixedSrcSetWebp = 'data___call_us_banner___fixed___srcSetWebp',
  DataCallUsBannerFixedSizes = 'data___call_us_banner___fixed___sizes',
  DataCallUsBannerFixedWidth = 'data___call_us_banner___fixed___width',
  DataCallUsBannerFixedHeight = 'data___call_us_banner___fixed___height',
  DataCallUsBannerFluidBase64 = 'data___call_us_banner___fluid___base64',
  DataCallUsBannerFluidSrc = 'data___call_us_banner___fluid___src',
  DataCallUsBannerFluidSrcSet = 'data___call_us_banner___fluid___srcSet',
  DataCallUsBannerFluidSrcWebp = 'data___call_us_banner___fluid___srcWebp',
  DataCallUsBannerFluidSrcSetWebp = 'data___call_us_banner___fluid___srcSetWebp',
  DataCallUsBannerFluidSizes = 'data___call_us_banner___fluid___sizes',
  DataCallUsBannerFluidAspectRatio = 'data___call_us_banner___fluid___aspectRatio',
  DataCallUsBannerLocalFileSourceInstanceName = 'data___call_us_banner___localFile___sourceInstanceName',
  DataCallUsBannerLocalFileAbsolutePath = 'data___call_us_banner___localFile___absolutePath',
  DataCallUsBannerLocalFileRelativePath = 'data___call_us_banner___localFile___relativePath',
  DataCallUsBannerLocalFileExtension = 'data___call_us_banner___localFile___extension',
  DataCallUsBannerLocalFileSize = 'data___call_us_banner___localFile___size',
  DataCallUsBannerLocalFilePrettySize = 'data___call_us_banner___localFile___prettySize',
  DataCallUsBannerLocalFileModifiedTime = 'data___call_us_banner___localFile___modifiedTime',
  DataCallUsBannerLocalFileAccessTime = 'data___call_us_banner___localFile___accessTime',
  DataCallUsBannerLocalFileChangeTime = 'data___call_us_banner___localFile___changeTime',
  DataCallUsBannerLocalFileBirthTime = 'data___call_us_banner___localFile___birthTime',
  DataCallUsBannerLocalFileRoot = 'data___call_us_banner___localFile___root',
  DataCallUsBannerLocalFileDir = 'data___call_us_banner___localFile___dir',
  DataCallUsBannerLocalFileBase = 'data___call_us_banner___localFile___base',
  DataCallUsBannerLocalFileExt = 'data___call_us_banner___localFile___ext',
  DataCallUsBannerLocalFileName = 'data___call_us_banner___localFile___name',
  DataCallUsBannerLocalFileRelativeDirectory = 'data___call_us_banner___localFile___relativeDirectory',
  DataCallUsBannerLocalFileDev = 'data___call_us_banner___localFile___dev',
  DataCallUsBannerLocalFileMode = 'data___call_us_banner___localFile___mode',
  DataCallUsBannerLocalFileNlink = 'data___call_us_banner___localFile___nlink',
  DataCallUsBannerLocalFileUid = 'data___call_us_banner___localFile___uid',
  DataCallUsBannerLocalFileGid = 'data___call_us_banner___localFile___gid',
  DataCallUsBannerLocalFileRdev = 'data___call_us_banner___localFile___rdev',
  DataCallUsBannerLocalFileIno = 'data___call_us_banner___localFile___ino',
  DataCallUsBannerLocalFileAtimeMs = 'data___call_us_banner___localFile___atimeMs',
  DataCallUsBannerLocalFileMtimeMs = 'data___call_us_banner___localFile___mtimeMs',
  DataCallUsBannerLocalFileCtimeMs = 'data___call_us_banner___localFile___ctimeMs',
  DataCallUsBannerLocalFileAtime = 'data___call_us_banner___localFile___atime',
  DataCallUsBannerLocalFileMtime = 'data___call_us_banner___localFile___mtime',
  DataCallUsBannerLocalFileCtime = 'data___call_us_banner___localFile___ctime',
  DataCallUsBannerLocalFileBirthtime = 'data___call_us_banner___localFile___birthtime',
  DataCallUsBannerLocalFileBirthtimeMs = 'data___call_us_banner___localFile___birthtimeMs',
  DataCallUsBannerLocalFileBlksize = 'data___call_us_banner___localFile___blksize',
  DataCallUsBannerLocalFileBlocks = 'data___call_us_banner___localFile___blocks',
  DataCallUsBannerLocalFileUrl = 'data___call_us_banner___localFile___url',
  DataCallUsBannerLocalFilePublicUrl = 'data___call_us_banner___localFile___publicURL',
  DataCallUsBannerLocalFileChildrenImageSharp = 'data___call_us_banner___localFile___childrenImageSharp',
  DataCallUsBannerLocalFileId = 'data___call_us_banner___localFile___id',
  DataCallUsBannerLocalFileChildren = 'data___call_us_banner___localFile___children',
  DataCallUsBannerThumbnails = 'data___call_us_banner___thumbnails',
  DataCallUsBannerContentHtml = 'data___call_us_banner_content___html',
  DataCallUsBannerContentText = 'data___call_us_banner_content___text',
  DataCallUsBannerContentRaw = 'data___call_us_banner_content___raw',
  DataCallUsButtonTextHtml = 'data___call_us_button_text___html',
  DataCallUsButtonTextText = 'data___call_us_button_text___text',
  DataCallUsButtonTextRaw = 'data___call_us_button_text___raw',
  DataHowItWorks = 'data___how_it_works',
  DataHowItWorksThumbnailAlt = 'data___how_it_works___thumbnail___alt',
  DataHowItWorksThumbnailCopyright = 'data___how_it_works___thumbnail___copyright',
  DataHowItWorksThumbnailUrl = 'data___how_it_works___thumbnail___url',
  DataHowItWorksThumbnailThumbnails = 'data___how_it_works___thumbnail___thumbnails',
  DataHowItWorksTitleHtml = 'data___how_it_works___title___html',
  DataHowItWorksTitleText = 'data___how_it_works___title___text',
  DataHowItWorksTitleRaw = 'data___how_it_works___title___raw',
  DataHowItWorksShortDescriptionHtml = 'data___how_it_works___short_description___html',
  DataHowItWorksShortDescriptionText = 'data___how_it_works___short_description___text',
  DataHowItWorksShortDescriptionRaw = 'data___how_it_works___short_description___raw',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicHomeMinimalFilterInput = {
  data?: Maybe<PrismicHomeMinimalDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicHomeMinimalGroupConnection = {
  __typename?: 'PrismicHomeMinimalGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeMinimalEdge>;
  nodes: Array<PrismicHomeMinimal>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHomeMinimalHowItWorksGroupType = {
  __typename?: 'PrismicHomeMinimalHowItWorksGroupType';
  thumbnail?: Maybe<PrismicImageType>;
  title?: Maybe<PrismicStructuredTextType>;
  short_description?: Maybe<PrismicStructuredTextType>;
};

export type PrismicHomeMinimalHowItWorksGroupTypeFilterInput = {
  thumbnail?: Maybe<PrismicImageTypeFilterInput>;
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  short_description?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicHomeMinimalHowItWorksGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicHomeMinimalHowItWorksGroupTypeFilterInput>;
};

export type PrismicHomeMinimalSortInput = {
  fields?: Maybe<Array<Maybe<PrismicHomeMinimalFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicHomeModern = PrismicDocument & Node & {
  __typename?: 'PrismicHomeModern';
  data?: Maybe<PrismicHomeModernDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  _previewable: Scalars['ID'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicHomeModernFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicHomeModernLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicHomeModernConnection = {
  __typename?: 'PrismicHomeModernConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeModernEdge>;
  nodes: Array<PrismicHomeModern>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicHomeModernGroupConnection>;
};


export type PrismicHomeModernConnectionDistinctArgs = {
  field: PrismicHomeModernFieldsEnum;
};


export type PrismicHomeModernConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicHomeModernFieldsEnum;
};

export type PrismicHomeModernDataType = {
  __typename?: 'PrismicHomeModernDataType';
  banner_image?: Maybe<PrismicImageType>;
  banner_title?: Maybe<PrismicStructuredTextType>;
  banner_subtitle?: Maybe<PrismicStructuredTextType>;
};

export type PrismicHomeModernDataTypeFilterInput = {
  banner_image?: Maybe<PrismicImageTypeFilterInput>;
  banner_title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  banner_subtitle?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicHomeModernEdge = {
  __typename?: 'PrismicHomeModernEdge';
  next?: Maybe<PrismicHomeModern>;
  node: PrismicHomeModern;
  previous?: Maybe<PrismicHomeModern>;
};

export enum PrismicHomeModernFieldsEnum {
  DataBannerImageAlt = 'data___banner_image___alt',
  DataBannerImageCopyright = 'data___banner_image___copyright',
  DataBannerImageDimensionsWidth = 'data___banner_image___dimensions___width',
  DataBannerImageDimensionsHeight = 'data___banner_image___dimensions___height',
  DataBannerImageUrl = 'data___banner_image___url',
  DataBannerImageFixedBase64 = 'data___banner_image___fixed___base64',
  DataBannerImageFixedSrc = 'data___banner_image___fixed___src',
  DataBannerImageFixedSrcSet = 'data___banner_image___fixed___srcSet',
  DataBannerImageFixedSrcWebp = 'data___banner_image___fixed___srcWebp',
  DataBannerImageFixedSrcSetWebp = 'data___banner_image___fixed___srcSetWebp',
  DataBannerImageFixedSizes = 'data___banner_image___fixed___sizes',
  DataBannerImageFixedWidth = 'data___banner_image___fixed___width',
  DataBannerImageFixedHeight = 'data___banner_image___fixed___height',
  DataBannerImageFluidBase64 = 'data___banner_image___fluid___base64',
  DataBannerImageFluidSrc = 'data___banner_image___fluid___src',
  DataBannerImageFluidSrcSet = 'data___banner_image___fluid___srcSet',
  DataBannerImageFluidSrcWebp = 'data___banner_image___fluid___srcWebp',
  DataBannerImageFluidSrcSetWebp = 'data___banner_image___fluid___srcSetWebp',
  DataBannerImageFluidSizes = 'data___banner_image___fluid___sizes',
  DataBannerImageFluidAspectRatio = 'data___banner_image___fluid___aspectRatio',
  DataBannerImageLocalFileSourceInstanceName = 'data___banner_image___localFile___sourceInstanceName',
  DataBannerImageLocalFileAbsolutePath = 'data___banner_image___localFile___absolutePath',
  DataBannerImageLocalFileRelativePath = 'data___banner_image___localFile___relativePath',
  DataBannerImageLocalFileExtension = 'data___banner_image___localFile___extension',
  DataBannerImageLocalFileSize = 'data___banner_image___localFile___size',
  DataBannerImageLocalFilePrettySize = 'data___banner_image___localFile___prettySize',
  DataBannerImageLocalFileModifiedTime = 'data___banner_image___localFile___modifiedTime',
  DataBannerImageLocalFileAccessTime = 'data___banner_image___localFile___accessTime',
  DataBannerImageLocalFileChangeTime = 'data___banner_image___localFile___changeTime',
  DataBannerImageLocalFileBirthTime = 'data___banner_image___localFile___birthTime',
  DataBannerImageLocalFileRoot = 'data___banner_image___localFile___root',
  DataBannerImageLocalFileDir = 'data___banner_image___localFile___dir',
  DataBannerImageLocalFileBase = 'data___banner_image___localFile___base',
  DataBannerImageLocalFileExt = 'data___banner_image___localFile___ext',
  DataBannerImageLocalFileName = 'data___banner_image___localFile___name',
  DataBannerImageLocalFileRelativeDirectory = 'data___banner_image___localFile___relativeDirectory',
  DataBannerImageLocalFileDev = 'data___banner_image___localFile___dev',
  DataBannerImageLocalFileMode = 'data___banner_image___localFile___mode',
  DataBannerImageLocalFileNlink = 'data___banner_image___localFile___nlink',
  DataBannerImageLocalFileUid = 'data___banner_image___localFile___uid',
  DataBannerImageLocalFileGid = 'data___banner_image___localFile___gid',
  DataBannerImageLocalFileRdev = 'data___banner_image___localFile___rdev',
  DataBannerImageLocalFileIno = 'data___banner_image___localFile___ino',
  DataBannerImageLocalFileAtimeMs = 'data___banner_image___localFile___atimeMs',
  DataBannerImageLocalFileMtimeMs = 'data___banner_image___localFile___mtimeMs',
  DataBannerImageLocalFileCtimeMs = 'data___banner_image___localFile___ctimeMs',
  DataBannerImageLocalFileAtime = 'data___banner_image___localFile___atime',
  DataBannerImageLocalFileMtime = 'data___banner_image___localFile___mtime',
  DataBannerImageLocalFileCtime = 'data___banner_image___localFile___ctime',
  DataBannerImageLocalFileBirthtime = 'data___banner_image___localFile___birthtime',
  DataBannerImageLocalFileBirthtimeMs = 'data___banner_image___localFile___birthtimeMs',
  DataBannerImageLocalFileBlksize = 'data___banner_image___localFile___blksize',
  DataBannerImageLocalFileBlocks = 'data___banner_image___localFile___blocks',
  DataBannerImageLocalFileUrl = 'data___banner_image___localFile___url',
  DataBannerImageLocalFilePublicUrl = 'data___banner_image___localFile___publicURL',
  DataBannerImageLocalFileChildrenImageSharp = 'data___banner_image___localFile___childrenImageSharp',
  DataBannerImageLocalFileId = 'data___banner_image___localFile___id',
  DataBannerImageLocalFileChildren = 'data___banner_image___localFile___children',
  DataBannerImageThumbnails = 'data___banner_image___thumbnails',
  DataBannerTitleHtml = 'data___banner_title___html',
  DataBannerTitleText = 'data___banner_title___text',
  DataBannerTitleRaw = 'data___banner_title___raw',
  DataBannerSubtitleHtml = 'data___banner_subtitle___html',
  DataBannerSubtitleText = 'data___banner_subtitle___text',
  DataBannerSubtitleRaw = 'data___banner_subtitle___raw',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicHomeModernFilterInput = {
  data?: Maybe<PrismicHomeModernDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicHomeModernGroupConnection = {
  __typename?: 'PrismicHomeModernGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeModernEdge>;
  nodes: Array<PrismicHomeModern>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHomeModernSortInput = {
  fields?: Maybe<Array<Maybe<PrismicHomeModernFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicHomeSortInput = {
  fields?: Maybe<Array<Maybe<PrismicHomeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicHomeminimal = Node & {
  __typename?: 'PrismicHomeminimal';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  type?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  first_publication_date?: Maybe<Scalars['Date']>;
  last_publication_date?: Maybe<Scalars['Date']>;
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  lang?: Maybe<Scalars['String']>;
  data?: Maybe<PrismicHomeminimalData>;
  prismicId?: Maybe<Scalars['String']>;
  dataString?: Maybe<Scalars['String']>;
  dataRaw?: Maybe<PrismicHomeminimalDataRaw>;
  _previewable?: Maybe<Scalars['String']>;
};


export type PrismicHomeminimalFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicHomeminimalLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicHomeminimalConnection = {
  __typename?: 'PrismicHomeminimalConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeminimalEdge>;
  nodes: Array<PrismicHomeminimal>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicHomeminimalGroupConnection>;
};


export type PrismicHomeminimalConnectionDistinctArgs = {
  field: PrismicHomeminimalFieldsEnum;
};


export type PrismicHomeminimalConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicHomeminimalFieldsEnum;
};

export type PrismicHomeminimalData = {
  __typename?: 'PrismicHomeminimalData';
  banner_image?: Maybe<PrismicHomeminimalDataBanner_Image>;
  banner_title?: Maybe<Array<Maybe<PrismicHomeminimalDataBanner_Title>>>;
  banner_subtitle?: Maybe<Array<Maybe<PrismicHomeminimalDataBanner_Subtitle>>>;
  banner_button_text?: Maybe<Array<Maybe<PrismicHomeminimalDataBanner_Button_Text>>>;
  call_us_banner?: Maybe<PrismicHomeminimalDataCall_Us_Banner>;
  how_it_works?: Maybe<Array<Maybe<PrismicHomeminimalDataHow_It_Works>>>;
};

export type PrismicHomeminimalDataBanner_Button_Text = {
  __typename?: 'PrismicHomeminimalDataBanner_button_text';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeminimalDataBanner_Button_TextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeminimalDataBanner_Button_TextFilterListInput = {
  elemMatch?: Maybe<PrismicHomeminimalDataBanner_Button_TextFilterInput>;
};

export type PrismicHomeminimalDataBanner_Image = {
  __typename?: 'PrismicHomeminimalDataBanner_image';
  dimensions?: Maybe<PrismicHomeminimalDataBanner_ImageDimensions>;
  url?: Maybe<Scalars['String']>;
};

export type PrismicHomeminimalDataBanner_ImageDimensions = {
  __typename?: 'PrismicHomeminimalDataBanner_imageDimensions';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type PrismicHomeminimalDataBanner_ImageDimensionsFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicHomeminimalDataBanner_ImageFilterInput = {
  dimensions?: Maybe<PrismicHomeminimalDataBanner_ImageDimensionsFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeminimalDataBanner_Subtitle = {
  __typename?: 'PrismicHomeminimalDataBanner_subtitle';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeminimalDataBanner_SubtitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeminimalDataBanner_SubtitleFilterListInput = {
  elemMatch?: Maybe<PrismicHomeminimalDataBanner_SubtitleFilterInput>;
};

export type PrismicHomeminimalDataBanner_Title = {
  __typename?: 'PrismicHomeminimalDataBanner_title';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeminimalDataBanner_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeminimalDataBanner_TitleFilterListInput = {
  elemMatch?: Maybe<PrismicHomeminimalDataBanner_TitleFilterInput>;
};

export type PrismicHomeminimalDataCall_Us_Banner = {
  __typename?: 'PrismicHomeminimalDataCall_us_banner';
  dimensions?: Maybe<PrismicHomeminimalDataCall_Us_BannerDimensions>;
  alt?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PrismicHomeminimalDataCall_Us_BannerDimensions = {
  __typename?: 'PrismicHomeminimalDataCall_us_bannerDimensions';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type PrismicHomeminimalDataCall_Us_BannerDimensionsFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicHomeminimalDataCall_Us_BannerFilterInput = {
  dimensions?: Maybe<PrismicHomeminimalDataCall_Us_BannerDimensionsFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeminimalDataFilterInput = {
  banner_image?: Maybe<PrismicHomeminimalDataBanner_ImageFilterInput>;
  banner_title?: Maybe<PrismicHomeminimalDataBanner_TitleFilterListInput>;
  banner_subtitle?: Maybe<PrismicHomeminimalDataBanner_SubtitleFilterListInput>;
  banner_button_text?: Maybe<PrismicHomeminimalDataBanner_Button_TextFilterListInput>;
  call_us_banner?: Maybe<PrismicHomeminimalDataCall_Us_BannerFilterInput>;
  how_it_works?: Maybe<PrismicHomeminimalDataHow_It_WorksFilterListInput>;
};

export type PrismicHomeminimalDataHow_It_Works = {
  __typename?: 'PrismicHomeminimalDataHow_it_works';
  thumbnail?: Maybe<PrismicHomeminimalDataHow_It_WorksThumbnail>;
  title?: Maybe<Array<Maybe<PrismicHomeminimalDataHow_It_WorksTitle>>>;
  short_description?: Maybe<Array<Maybe<PrismicHomeminimalDataHow_It_WorksShort_Description>>>;
};

export type PrismicHomeminimalDataHow_It_WorksFilterInput = {
  thumbnail?: Maybe<PrismicHomeminimalDataHow_It_WorksThumbnailFilterInput>;
  title?: Maybe<PrismicHomeminimalDataHow_It_WorksTitleFilterListInput>;
  short_description?: Maybe<PrismicHomeminimalDataHow_It_WorksShort_DescriptionFilterListInput>;
};

export type PrismicHomeminimalDataHow_It_WorksFilterListInput = {
  elemMatch?: Maybe<PrismicHomeminimalDataHow_It_WorksFilterInput>;
};

export type PrismicHomeminimalDataHow_It_WorksShort_Description = {
  __typename?: 'PrismicHomeminimalDataHow_it_worksShort_description';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeminimalDataHow_It_WorksShort_DescriptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeminimalDataHow_It_WorksShort_DescriptionFilterListInput = {
  elemMatch?: Maybe<PrismicHomeminimalDataHow_It_WorksShort_DescriptionFilterInput>;
};

export type PrismicHomeminimalDataHow_It_WorksThumbnail = {
  __typename?: 'PrismicHomeminimalDataHow_it_worksThumbnail';
  dimensions?: Maybe<PrismicHomeminimalDataHow_It_WorksThumbnailDimensions>;
  url?: Maybe<Scalars['String']>;
};

export type PrismicHomeminimalDataHow_It_WorksThumbnailDimensions = {
  __typename?: 'PrismicHomeminimalDataHow_it_worksThumbnailDimensions';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type PrismicHomeminimalDataHow_It_WorksThumbnailDimensionsFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicHomeminimalDataHow_It_WorksThumbnailFilterInput = {
  dimensions?: Maybe<PrismicHomeminimalDataHow_It_WorksThumbnailDimensionsFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeminimalDataHow_It_WorksTitle = {
  __typename?: 'PrismicHomeminimalDataHow_it_worksTitle';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeminimalDataHow_It_WorksTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeminimalDataHow_It_WorksTitleFilterListInput = {
  elemMatch?: Maybe<PrismicHomeminimalDataHow_It_WorksTitleFilterInput>;
};

export type PrismicHomeminimalDataRaw = {
  __typename?: 'PrismicHomeminimalDataRaw';
  banner_image?: Maybe<PrismicHomeminimalDataRawBanner_Image>;
  banner_title?: Maybe<Array<Maybe<PrismicHomeminimalDataRawBanner_Title>>>;
  banner_subtitle?: Maybe<Array<Maybe<PrismicHomeminimalDataRawBanner_Subtitle>>>;
  banner_button_text?: Maybe<Array<Maybe<PrismicHomeminimalDataRawBanner_Button_Text>>>;
  call_us_banner?: Maybe<PrismicHomeminimalDataRawCall_Us_Banner>;
  how_it_works?: Maybe<Array<Maybe<PrismicHomeminimalDataRawHow_It_Works>>>;
};

export type PrismicHomeminimalDataRawBanner_Button_Text = {
  __typename?: 'PrismicHomeminimalDataRawBanner_button_text';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeminimalDataRawBanner_Button_TextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeminimalDataRawBanner_Button_TextFilterListInput = {
  elemMatch?: Maybe<PrismicHomeminimalDataRawBanner_Button_TextFilterInput>;
};

export type PrismicHomeminimalDataRawBanner_Image = {
  __typename?: 'PrismicHomeminimalDataRawBanner_image';
  dimensions?: Maybe<PrismicHomeminimalDataRawBanner_ImageDimensions>;
  url?: Maybe<Scalars['String']>;
};

export type PrismicHomeminimalDataRawBanner_ImageDimensions = {
  __typename?: 'PrismicHomeminimalDataRawBanner_imageDimensions';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type PrismicHomeminimalDataRawBanner_ImageDimensionsFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicHomeminimalDataRawBanner_ImageFilterInput = {
  dimensions?: Maybe<PrismicHomeminimalDataRawBanner_ImageDimensionsFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeminimalDataRawBanner_Subtitle = {
  __typename?: 'PrismicHomeminimalDataRawBanner_subtitle';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeminimalDataRawBanner_SubtitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeminimalDataRawBanner_SubtitleFilterListInput = {
  elemMatch?: Maybe<PrismicHomeminimalDataRawBanner_SubtitleFilterInput>;
};

export type PrismicHomeminimalDataRawBanner_Title = {
  __typename?: 'PrismicHomeminimalDataRawBanner_title';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeminimalDataRawBanner_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeminimalDataRawBanner_TitleFilterListInput = {
  elemMatch?: Maybe<PrismicHomeminimalDataRawBanner_TitleFilterInput>;
};

export type PrismicHomeminimalDataRawCall_Us_Banner = {
  __typename?: 'PrismicHomeminimalDataRawCall_us_banner';
  dimensions?: Maybe<PrismicHomeminimalDataRawCall_Us_BannerDimensions>;
  alt?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PrismicHomeminimalDataRawCall_Us_BannerDimensions = {
  __typename?: 'PrismicHomeminimalDataRawCall_us_bannerDimensions';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type PrismicHomeminimalDataRawCall_Us_BannerDimensionsFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicHomeminimalDataRawCall_Us_BannerFilterInput = {
  dimensions?: Maybe<PrismicHomeminimalDataRawCall_Us_BannerDimensionsFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeminimalDataRawFilterInput = {
  banner_image?: Maybe<PrismicHomeminimalDataRawBanner_ImageFilterInput>;
  banner_title?: Maybe<PrismicHomeminimalDataRawBanner_TitleFilterListInput>;
  banner_subtitle?: Maybe<PrismicHomeminimalDataRawBanner_SubtitleFilterListInput>;
  banner_button_text?: Maybe<PrismicHomeminimalDataRawBanner_Button_TextFilterListInput>;
  call_us_banner?: Maybe<PrismicHomeminimalDataRawCall_Us_BannerFilterInput>;
  how_it_works?: Maybe<PrismicHomeminimalDataRawHow_It_WorksFilterListInput>;
};

export type PrismicHomeminimalDataRawHow_It_Works = {
  __typename?: 'PrismicHomeminimalDataRawHow_it_works';
  thumbnail?: Maybe<PrismicHomeminimalDataRawHow_It_WorksThumbnail>;
  title?: Maybe<Array<Maybe<PrismicHomeminimalDataRawHow_It_WorksTitle>>>;
  short_description?: Maybe<Array<Maybe<PrismicHomeminimalDataRawHow_It_WorksShort_Description>>>;
};

export type PrismicHomeminimalDataRawHow_It_WorksFilterInput = {
  thumbnail?: Maybe<PrismicHomeminimalDataRawHow_It_WorksThumbnailFilterInput>;
  title?: Maybe<PrismicHomeminimalDataRawHow_It_WorksTitleFilterListInput>;
  short_description?: Maybe<PrismicHomeminimalDataRawHow_It_WorksShort_DescriptionFilterListInput>;
};

export type PrismicHomeminimalDataRawHow_It_WorksFilterListInput = {
  elemMatch?: Maybe<PrismicHomeminimalDataRawHow_It_WorksFilterInput>;
};

export type PrismicHomeminimalDataRawHow_It_WorksShort_Description = {
  __typename?: 'PrismicHomeminimalDataRawHow_it_worksShort_description';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeminimalDataRawHow_It_WorksShort_DescriptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeminimalDataRawHow_It_WorksShort_DescriptionFilterListInput = {
  elemMatch?: Maybe<PrismicHomeminimalDataRawHow_It_WorksShort_DescriptionFilterInput>;
};

export type PrismicHomeminimalDataRawHow_It_WorksThumbnail = {
  __typename?: 'PrismicHomeminimalDataRawHow_it_worksThumbnail';
  dimensions?: Maybe<PrismicHomeminimalDataRawHow_It_WorksThumbnailDimensions>;
  url?: Maybe<Scalars['String']>;
};

export type PrismicHomeminimalDataRawHow_It_WorksThumbnailDimensions = {
  __typename?: 'PrismicHomeminimalDataRawHow_it_worksThumbnailDimensions';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type PrismicHomeminimalDataRawHow_It_WorksThumbnailDimensionsFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicHomeminimalDataRawHow_It_WorksThumbnailFilterInput = {
  dimensions?: Maybe<PrismicHomeminimalDataRawHow_It_WorksThumbnailDimensionsFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeminimalDataRawHow_It_WorksTitle = {
  __typename?: 'PrismicHomeminimalDataRawHow_it_worksTitle';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeminimalDataRawHow_It_WorksTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeminimalDataRawHow_It_WorksTitleFilterListInput = {
  elemMatch?: Maybe<PrismicHomeminimalDataRawHow_It_WorksTitleFilterInput>;
};

export type PrismicHomeminimalEdge = {
  __typename?: 'PrismicHomeminimalEdge';
  next?: Maybe<PrismicHomeminimal>;
  node: PrismicHomeminimal;
  previous?: Maybe<PrismicHomeminimal>;
};

export enum PrismicHomeminimalFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataBannerImageDimensionsWidth = 'data___banner_image___dimensions___width',
  DataBannerImageDimensionsHeight = 'data___banner_image___dimensions___height',
  DataBannerImageUrl = 'data___banner_image___url',
  DataBannerTitle = 'data___banner_title',
  DataBannerTitleType = 'data___banner_title___type',
  DataBannerTitleText = 'data___banner_title___text',
  DataBannerSubtitle = 'data___banner_subtitle',
  DataBannerSubtitleType = 'data___banner_subtitle___type',
  DataBannerSubtitleText = 'data___banner_subtitle___text',
  DataBannerButtonText = 'data___banner_button_text',
  DataBannerButtonTextType = 'data___banner_button_text___type',
  DataBannerButtonTextText = 'data___banner_button_text___text',
  DataCallUsBannerDimensionsWidth = 'data___call_us_banner___dimensions___width',
  DataCallUsBannerDimensionsHeight = 'data___call_us_banner___dimensions___height',
  DataCallUsBannerAlt = 'data___call_us_banner___alt',
  DataCallUsBannerUrl = 'data___call_us_banner___url',
  DataHowItWorks = 'data___how_it_works',
  DataHowItWorksThumbnailUrl = 'data___how_it_works___thumbnail___url',
  DataHowItWorksTitle = 'data___how_it_works___title',
  DataHowItWorksTitleType = 'data___how_it_works___title___type',
  DataHowItWorksTitleText = 'data___how_it_works___title___text',
  DataHowItWorksShortDescription = 'data___how_it_works___short_description',
  DataHowItWorksShortDescriptionType = 'data___how_it_works___short_description___type',
  DataHowItWorksShortDescriptionText = 'data___how_it_works___short_description___text',
  PrismicId = 'prismicId',
  DataString = 'dataString',
  DataRawBannerImageDimensionsWidth = 'dataRaw___banner_image___dimensions___width',
  DataRawBannerImageDimensionsHeight = 'dataRaw___banner_image___dimensions___height',
  DataRawBannerImageUrl = 'dataRaw___banner_image___url',
  DataRawBannerTitle = 'dataRaw___banner_title',
  DataRawBannerTitleType = 'dataRaw___banner_title___type',
  DataRawBannerTitleText = 'dataRaw___banner_title___text',
  DataRawBannerSubtitle = 'dataRaw___banner_subtitle',
  DataRawBannerSubtitleType = 'dataRaw___banner_subtitle___type',
  DataRawBannerSubtitleText = 'dataRaw___banner_subtitle___text',
  DataRawBannerButtonText = 'dataRaw___banner_button_text',
  DataRawBannerButtonTextType = 'dataRaw___banner_button_text___type',
  DataRawBannerButtonTextText = 'dataRaw___banner_button_text___text',
  DataRawCallUsBannerDimensionsWidth = 'dataRaw___call_us_banner___dimensions___width',
  DataRawCallUsBannerDimensionsHeight = 'dataRaw___call_us_banner___dimensions___height',
  DataRawCallUsBannerAlt = 'dataRaw___call_us_banner___alt',
  DataRawCallUsBannerUrl = 'dataRaw___call_us_banner___url',
  DataRawHowItWorks = 'dataRaw___how_it_works',
  DataRawHowItWorksThumbnailUrl = 'dataRaw___how_it_works___thumbnail___url',
  DataRawHowItWorksTitle = 'dataRaw___how_it_works___title',
  DataRawHowItWorksTitleType = 'dataRaw___how_it_works___title___type',
  DataRawHowItWorksTitleText = 'dataRaw___how_it_works___title___text',
  DataRawHowItWorksShortDescription = 'dataRaw___how_it_works___short_description',
  DataRawHowItWorksShortDescriptionType = 'dataRaw___how_it_works___short_description___type',
  DataRawHowItWorksShortDescriptionText = 'dataRaw___how_it_works___short_description___text',
  Previewable = '_previewable'
}

export type PrismicHomeminimalFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  slugs?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<PrismicHomeminimalDataFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  dataRaw?: Maybe<PrismicHomeminimalDataRawFilterInput>;
  _previewable?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeminimalGroupConnection = {
  __typename?: 'PrismicHomeminimalGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeminimalEdge>;
  nodes: Array<PrismicHomeminimal>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHomeminimalSortInput = {
  fields?: Maybe<Array<Maybe<PrismicHomeminimalFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicHomemodern = Node & {
  __typename?: 'PrismicHomemodern';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  type?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  first_publication_date?: Maybe<Scalars['Date']>;
  last_publication_date?: Maybe<Scalars['Date']>;
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  lang?: Maybe<Scalars['String']>;
  data?: Maybe<PrismicHomemodernData>;
  prismicId?: Maybe<Scalars['String']>;
  dataString?: Maybe<Scalars['String']>;
  dataRaw?: Maybe<PrismicHomemodernDataRaw>;
  _previewable?: Maybe<Scalars['String']>;
};


export type PrismicHomemodernFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicHomemodernLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicHomemodernConnection = {
  __typename?: 'PrismicHomemodernConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomemodernEdge>;
  nodes: Array<PrismicHomemodern>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicHomemodernGroupConnection>;
};


export type PrismicHomemodernConnectionDistinctArgs = {
  field: PrismicHomemodernFieldsEnum;
};


export type PrismicHomemodernConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicHomemodernFieldsEnum;
};

export type PrismicHomemodernData = {
  __typename?: 'PrismicHomemodernData';
  banner_image?: Maybe<PrismicHomemodernDataBanner_Image>;
  banner_title?: Maybe<Array<Maybe<PrismicHomemodernDataBanner_Title>>>;
  banner_subtitle?: Maybe<Array<Maybe<PrismicHomemodernDataBanner_Subtitle>>>;
};

export type PrismicHomemodernDataBanner_Image = {
  __typename?: 'PrismicHomemodernDataBanner_image';
  dimensions?: Maybe<PrismicHomemodernDataBanner_ImageDimensions>;
  alt?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PrismicHomemodernDataBanner_ImageDimensions = {
  __typename?: 'PrismicHomemodernDataBanner_imageDimensions';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type PrismicHomemodernDataBanner_ImageDimensionsFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicHomemodernDataBanner_ImageFilterInput = {
  dimensions?: Maybe<PrismicHomemodernDataBanner_ImageDimensionsFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomemodernDataBanner_Subtitle = {
  __typename?: 'PrismicHomemodernDataBanner_subtitle';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomemodernDataBanner_SubtitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomemodernDataBanner_SubtitleFilterListInput = {
  elemMatch?: Maybe<PrismicHomemodernDataBanner_SubtitleFilterInput>;
};

export type PrismicHomemodernDataBanner_Title = {
  __typename?: 'PrismicHomemodernDataBanner_title';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomemodernDataBanner_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomemodernDataBanner_TitleFilterListInput = {
  elemMatch?: Maybe<PrismicHomemodernDataBanner_TitleFilterInput>;
};

export type PrismicHomemodernDataFilterInput = {
  banner_image?: Maybe<PrismicHomemodernDataBanner_ImageFilterInput>;
  banner_title?: Maybe<PrismicHomemodernDataBanner_TitleFilterListInput>;
  banner_subtitle?: Maybe<PrismicHomemodernDataBanner_SubtitleFilterListInput>;
};

export type PrismicHomemodernDataRaw = {
  __typename?: 'PrismicHomemodernDataRaw';
  banner_image?: Maybe<PrismicHomemodernDataRawBanner_Image>;
  banner_title?: Maybe<Array<Maybe<PrismicHomemodernDataRawBanner_Title>>>;
  banner_subtitle?: Maybe<Array<Maybe<PrismicHomemodernDataRawBanner_Subtitle>>>;
};

export type PrismicHomemodernDataRawBanner_Image = {
  __typename?: 'PrismicHomemodernDataRawBanner_image';
  dimensions?: Maybe<PrismicHomemodernDataRawBanner_ImageDimensions>;
  alt?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PrismicHomemodernDataRawBanner_ImageDimensions = {
  __typename?: 'PrismicHomemodernDataRawBanner_imageDimensions';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type PrismicHomemodernDataRawBanner_ImageDimensionsFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicHomemodernDataRawBanner_ImageFilterInput = {
  dimensions?: Maybe<PrismicHomemodernDataRawBanner_ImageDimensionsFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomemodernDataRawBanner_Subtitle = {
  __typename?: 'PrismicHomemodernDataRawBanner_subtitle';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomemodernDataRawBanner_SubtitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomemodernDataRawBanner_SubtitleFilterListInput = {
  elemMatch?: Maybe<PrismicHomemodernDataRawBanner_SubtitleFilterInput>;
};

export type PrismicHomemodernDataRawBanner_Title = {
  __typename?: 'PrismicHomemodernDataRawBanner_title';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomemodernDataRawBanner_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomemodernDataRawBanner_TitleFilterListInput = {
  elemMatch?: Maybe<PrismicHomemodernDataRawBanner_TitleFilterInput>;
};

export type PrismicHomemodernDataRawFilterInput = {
  banner_image?: Maybe<PrismicHomemodernDataRawBanner_ImageFilterInput>;
  banner_title?: Maybe<PrismicHomemodernDataRawBanner_TitleFilterListInput>;
  banner_subtitle?: Maybe<PrismicHomemodernDataRawBanner_SubtitleFilterListInput>;
};

export type PrismicHomemodernEdge = {
  __typename?: 'PrismicHomemodernEdge';
  next?: Maybe<PrismicHomemodern>;
  node: PrismicHomemodern;
  previous?: Maybe<PrismicHomemodern>;
};

export enum PrismicHomemodernFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataBannerImageDimensionsWidth = 'data___banner_image___dimensions___width',
  DataBannerImageDimensionsHeight = 'data___banner_image___dimensions___height',
  DataBannerImageAlt = 'data___banner_image___alt',
  DataBannerImageUrl = 'data___banner_image___url',
  DataBannerTitle = 'data___banner_title',
  DataBannerTitleType = 'data___banner_title___type',
  DataBannerTitleText = 'data___banner_title___text',
  DataBannerSubtitle = 'data___banner_subtitle',
  DataBannerSubtitleType = 'data___banner_subtitle___type',
  DataBannerSubtitleText = 'data___banner_subtitle___text',
  PrismicId = 'prismicId',
  DataString = 'dataString',
  DataRawBannerImageDimensionsWidth = 'dataRaw___banner_image___dimensions___width',
  DataRawBannerImageDimensionsHeight = 'dataRaw___banner_image___dimensions___height',
  DataRawBannerImageAlt = 'dataRaw___banner_image___alt',
  DataRawBannerImageUrl = 'dataRaw___banner_image___url',
  DataRawBannerTitle = 'dataRaw___banner_title',
  DataRawBannerTitleType = 'dataRaw___banner_title___type',
  DataRawBannerTitleText = 'dataRaw___banner_title___text',
  DataRawBannerSubtitle = 'dataRaw___banner_subtitle',
  DataRawBannerSubtitleType = 'dataRaw___banner_subtitle___type',
  DataRawBannerSubtitleText = 'dataRaw___banner_subtitle___text',
  Previewable = '_previewable'
}

export type PrismicHomemodernFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  slugs?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<PrismicHomemodernDataFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  dataRaw?: Maybe<PrismicHomemodernDataRawFilterInput>;
  _previewable?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomemodernGroupConnection = {
  __typename?: 'PrismicHomemodernGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomemodernEdge>;
  nodes: Array<PrismicHomemodern>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHomemodernSortInput = {
  fields?: Maybe<Array<Maybe<PrismicHomemodernFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Dimensions for images. */
export type PrismicImageDimensionsType = {
  __typename?: 'PrismicImageDimensionsType';
  /** Width of the image in pixels. */
  width: Scalars['Int'];
  /** Height of the image in pixels. */
  height: Scalars['Int'];
};

export type PrismicImageDimensionsTypeFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicImageFixedType = {
  __typename?: 'PrismicImageFixedType';
  base64: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Scalars['String'];
  srcSetWebp: Scalars['String'];
  sizes: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export type PrismicImageFixedTypeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicImageFluidType = {
  __typename?: 'PrismicImageFluidType';
  base64: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Scalars['String'];
  srcSetWebp: Scalars['String'];
  sizes: Scalars['String'];
  aspectRatio: Scalars['Float'];
};

export type PrismicImageFluidTypeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type PrismicImageInterface = {
  /** The image's alternative text. */
  alt?: Maybe<Scalars['String']>;
  /** The image's copyright text. */
  copyright?: Maybe<Scalars['String']>;
  /** The image's dimensions. */
  dimensions?: Maybe<PrismicImageDimensionsType>;
  /** The image's URL on Prismic's CDN. */
  url?: Maybe<Scalars['String']>;
  /** The locally downloaded image if `shouldNormalizeImage` returns true. */
  localFile?: Maybe<File>;
  fixed?: Maybe<PrismicImageFixedType>;
  fluid?: Maybe<PrismicImageFluidType>;
};

/** An image thumbnail with constraints. */
export type PrismicImageThumbnailType = PrismicImageInterface & {
  __typename?: 'PrismicImageThumbnailType';
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  url?: Maybe<Scalars['String']>;
  fixed?: Maybe<PrismicImageFixedType>;
  fluid?: Maybe<PrismicImageFluidType>;
  localFile?: Maybe<File>;
};


/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeUrlArgs = {
  imgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};


export type PrismicImageThumbnailsTypeQueryOperatorInput = {
  eq?: Maybe<Scalars['PrismicImageThumbnailsType']>;
  ne?: Maybe<Scalars['PrismicImageThumbnailsType']>;
  in?: Maybe<Array<Maybe<Scalars['PrismicImageThumbnailsType']>>>;
  nin?: Maybe<Array<Maybe<Scalars['PrismicImageThumbnailsType']>>>;
};

/** An image field with optional constrained thumbnails. */
export type PrismicImageType = PrismicImageInterface & {
  __typename?: 'PrismicImageType';
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  url?: Maybe<Scalars['String']>;
  fixed?: Maybe<PrismicImageFixedType>;
  fluid?: Maybe<PrismicImageFluidType>;
  localFile?: Maybe<File>;
  thumbnails?: Maybe<Scalars['PrismicImageThumbnailsType']>;
};


/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};

export type PrismicImageTypeFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  dimensions?: Maybe<PrismicImageDimensionsTypeFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<PrismicImageFixedTypeFilterInput>;
  fluid?: Maybe<PrismicImageFluidTypeFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  thumbnails?: Maybe<PrismicImageThumbnailsTypeQueryOperatorInput>;
};

/** Link to web, media, and internal content. */
export type PrismicLinkType = {
  __typename?: 'PrismicLinkType';
  /** The type of link. */
  link_type: PrismicLinkTypes;
  /** If a Document link, `true` if linked document does not exist, `false` otherwise. */
  isBroken?: Maybe<Scalars['Boolean']>;
  /** The document's URL derived via the link resolver. */
  url?: Maybe<Scalars['String']>;
  /** The link's target. */
  target?: Maybe<Scalars['String']>;
  /** If a Media link, the size of the file. */
  size?: Maybe<Scalars['Int']>;
  /** If a Document link, the linked document's Prismic ID. */
  id?: Maybe<Scalars['ID']>;
  /** If a Document link, the linked document's Prismic custom type API ID */
  type?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's list of tags. */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** If a Document link, the linked document's language. */
  lang?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's slug. */
  slug?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's UID. */
  uid?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document. */
  document?: Maybe<PrismicAllDocumentTypes>;
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  raw?: Maybe<Scalars['JSON']>;
};

export type PrismicLinkTypeFilterInput = {
  link_type?: Maybe<PrismicLinkTypesQueryOperatorInput>;
  isBroken?: Maybe<BooleanQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<IdQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<JsonQueryOperatorInput>;
};

export type PrismicLinkTypeFilterListInput = {
  elemMatch?: Maybe<PrismicLinkTypeFilterInput>;
};

/** Types of links. */
export enum PrismicLinkTypes {
  /** Any of the other types */
  Any = 'Any',
  /** Internal content */
  Document = 'Document',
  /** Internal media content */
  Media = 'Media',
  /** URL */
  Web = 'Web'
}

export type PrismicLinkTypesQueryOperatorInput = {
  eq?: Maybe<PrismicLinkTypes>;
  ne?: Maybe<PrismicLinkTypes>;
  in?: Maybe<Array<Maybe<PrismicLinkTypes>>>;
  nin?: Maybe<Array<Maybe<PrismicLinkTypes>>>;
};

export type PrismicSliceType = {
  /** The slice type API ID. */
  slice_type: Scalars['String'];
  /** The slice label. */
  slice_label?: Maybe<Scalars['String']>;
};

/** A text field with formatting options. */
export type PrismicStructuredTextType = {
  __typename?: 'PrismicStructuredTextType';
  /** The HTML value of the text using `prismic-dom` and the HTML serializer. */
  html?: Maybe<Scalars['String']>;
  /** The plain text value of the text using `prismic-dom`. */
  text?: Maybe<Scalars['String']>;
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  raw?: Maybe<Scalars['JSON']>;
};

export type PrismicStructuredTextTypeFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<JsonQueryOperatorInput>;
};

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  themeUiConfig?: Maybe<ThemeUiConfig>;
  allThemeUiConfig: ThemeUiConfigConnection;
  prismicHome?: Maybe<PrismicHome>;
  allPrismicHome: PrismicHomeConnection;
  prismicCommon?: Maybe<PrismicCommon>;
  allPrismicCommon: PrismicCommonConnection;
  prismicCategory?: Maybe<PrismicCategory>;
  allPrismicCategory: PrismicCategoryConnection;
  prismicHomeMinimal?: Maybe<PrismicHomeMinimal>;
  allPrismicHomeMinimal: PrismicHomeMinimalConnection;
  prismicHomeModern?: Maybe<PrismicHomeModern>;
  allPrismicHomeModern: PrismicHomeModernConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  prismicHomemodern?: Maybe<PrismicHomemodern>;
  allPrismicHomemodern: PrismicHomemodernConnection;
  prismicHomeminimal?: Maybe<PrismicHomeminimal>;
  allPrismicHomeminimal: PrismicHomeminimalConnection;
  shopifyCollection?: Maybe<ShopifyCollection>;
  allShopifyCollection: ShopifyCollectionConnection;
  shopifyProductOption?: Maybe<ShopifyProductOption>;
  allShopifyProductOption: ShopifyProductOptionConnection;
  shopifyProductVariant?: Maybe<ShopifyProductVariant>;
  allShopifyProductVariant: ShopifyProductVariantConnection;
  shopifyProduct?: Maybe<ShopifyProduct>;
  allShopifyProduct: ShopifyProductConnection;
  shopifyShop?: Maybe<ShopifyShop>;
  allShopifyShop: ShopifyShopConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryThemeUiConfigArgs = {
  preset?: Maybe<JsonQueryOperatorInput>;
  prismPreset?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllThemeUiConfigArgs = {
  filter?: Maybe<ThemeUiConfigFilterInput>;
  sort?: Maybe<ThemeUiConfigSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicHomeArgs = {
  data?: Maybe<PrismicHomeDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicHomeArgs = {
  filter?: Maybe<PrismicHomeFilterInput>;
  sort?: Maybe<PrismicHomeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicCommonArgs = {
  data?: Maybe<PrismicCommonDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicCommonArgs = {
  filter?: Maybe<PrismicCommonFilterInput>;
  sort?: Maybe<PrismicCommonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicCategoryArgs = {
  data?: Maybe<PrismicCategoryDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicCategoryArgs = {
  filter?: Maybe<PrismicCategoryFilterInput>;
  sort?: Maybe<PrismicCategorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicHomeMinimalArgs = {
  data?: Maybe<PrismicHomeMinimalDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicHomeMinimalArgs = {
  filter?: Maybe<PrismicHomeMinimalFilterInput>;
  sort?: Maybe<PrismicHomeMinimalSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicHomeModernArgs = {
  data?: Maybe<PrismicHomeModernDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicHomeModernArgs = {
  filter?: Maybe<PrismicHomeModernFilterInput>;
  sort?: Maybe<PrismicHomeModernSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicHomemodernArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  slugs?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<PrismicHomemodernDataFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  dataRaw?: Maybe<PrismicHomemodernDataRawFilterInput>;
  _previewable?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllPrismicHomemodernArgs = {
  filter?: Maybe<PrismicHomemodernFilterInput>;
  sort?: Maybe<PrismicHomemodernSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicHomeminimalArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  slugs?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<PrismicHomeminimalDataFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  dataRaw?: Maybe<PrismicHomeminimalDataRawFilterInput>;
  _previewable?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllPrismicHomeminimalArgs = {
  filter?: Maybe<PrismicHomeminimalFilterInput>;
  sort?: Maybe<PrismicHomeminimalSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyCollectionArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  descriptionHtml?: Maybe<StringQueryOperatorInput>;
  handle?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ShopifyCollectionImageFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  products?: Maybe<ShopifyProductFilterListInput>;
};


export type QueryAllShopifyCollectionArgs = {
  filter?: Maybe<ShopifyCollectionFilterInput>;
  sort?: Maybe<ShopifyCollectionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyProductOptionArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  values?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllShopifyProductOptionArgs = {
  filter?: Maybe<ShopifyProductOptionFilterInput>;
  sort?: Maybe<ShopifyProductOptionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyProductVariantArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  availableForSale?: Maybe<BooleanQueryOperatorInput>;
  image?: Maybe<ShopifyProductVariantImageFilterInput>;
  price?: Maybe<StringQueryOperatorInput>;
  priceV2?: Maybe<ShopifyProductVariantPriceV2FilterInput>;
  requiresShipping?: Maybe<BooleanQueryOperatorInput>;
  selectedOptions?: Maybe<ShopifyProductVariantSelectedOptionsFilterListInput>;
  sku?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  weight?: Maybe<IntQueryOperatorInput>;
  weightUnit?: Maybe<StringQueryOperatorInput>;
  presentmentPrices?: Maybe<ShopifyProductVariantPresentmentPricesFilterInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  priceNumber?: Maybe<FloatQueryOperatorInput>;
  product?: Maybe<ShopifyProductFilterInput>;
};


export type QueryAllShopifyProductVariantArgs = {
  filter?: Maybe<ShopifyProductVariantFilterInput>;
  sort?: Maybe<ShopifyProductVariantSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyProductArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  availableForSale?: Maybe<BooleanQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  descriptionHtml?: Maybe<StringQueryOperatorInput>;
  handle?: Maybe<StringQueryOperatorInput>;
  images?: Maybe<ShopifyProductImagesFilterListInput>;
  priceRange?: Maybe<ShopifyProductPriceRangeFilterInput>;
  productType?: Maybe<StringQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  vendor?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  variants?: Maybe<ShopifyProductVariantFilterListInput>;
  options?: Maybe<ShopifyProductOptionFilterListInput>;
};


export type QueryAllShopifyProductArgs = {
  filter?: Maybe<ShopifyProductFilterInput>;
  sort?: Maybe<ShopifyProductSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyShopArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  moneyFormat?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllShopifyShopArgs = {
  filter?: Maybe<ShopifyShopFilterInput>;
  sort?: Maybe<ShopifyShopSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type ShopifyCollection = Node & {
  __typename?: 'ShopifyCollection';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
  descriptionHtml?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  image?: Maybe<ShopifyCollectionImage>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  shopifyId?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<ShopifyProduct>>>;
};


export type ShopifyCollectionUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ShopifyCollectionConnection = {
  __typename?: 'ShopifyCollectionConnection';
  totalCount: Scalars['Int'];
  edges: Array<ShopifyCollectionEdge>;
  nodes: Array<ShopifyCollection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ShopifyCollectionGroupConnection>;
};


export type ShopifyCollectionConnectionDistinctArgs = {
  field: ShopifyCollectionFieldsEnum;
};


export type ShopifyCollectionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyCollectionFieldsEnum;
};

export type ShopifyCollectionEdge = {
  __typename?: 'ShopifyCollectionEdge';
  next?: Maybe<ShopifyCollection>;
  node: ShopifyCollection;
  previous?: Maybe<ShopifyCollection>;
};

export enum ShopifyCollectionFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Description = 'description',
  DescriptionHtml = 'descriptionHtml',
  Handle = 'handle',
  ImageId = 'image___id',
  ImageSrc = 'image___src',
  ImageLocalFileSourceInstanceName = 'image___localFile___sourceInstanceName',
  ImageLocalFileAbsolutePath = 'image___localFile___absolutePath',
  ImageLocalFileRelativePath = 'image___localFile___relativePath',
  ImageLocalFileExtension = 'image___localFile___extension',
  ImageLocalFileSize = 'image___localFile___size',
  ImageLocalFilePrettySize = 'image___localFile___prettySize',
  ImageLocalFileModifiedTime = 'image___localFile___modifiedTime',
  ImageLocalFileAccessTime = 'image___localFile___accessTime',
  ImageLocalFileChangeTime = 'image___localFile___changeTime',
  ImageLocalFileBirthTime = 'image___localFile___birthTime',
  ImageLocalFileRoot = 'image___localFile___root',
  ImageLocalFileDir = 'image___localFile___dir',
  ImageLocalFileBase = 'image___localFile___base',
  ImageLocalFileExt = 'image___localFile___ext',
  ImageLocalFileName = 'image___localFile___name',
  ImageLocalFileRelativeDirectory = 'image___localFile___relativeDirectory',
  ImageLocalFileDev = 'image___localFile___dev',
  ImageLocalFileMode = 'image___localFile___mode',
  ImageLocalFileNlink = 'image___localFile___nlink',
  ImageLocalFileUid = 'image___localFile___uid',
  ImageLocalFileGid = 'image___localFile___gid',
  ImageLocalFileRdev = 'image___localFile___rdev',
  ImageLocalFileIno = 'image___localFile___ino',
  ImageLocalFileAtimeMs = 'image___localFile___atimeMs',
  ImageLocalFileMtimeMs = 'image___localFile___mtimeMs',
  ImageLocalFileCtimeMs = 'image___localFile___ctimeMs',
  ImageLocalFileAtime = 'image___localFile___atime',
  ImageLocalFileMtime = 'image___localFile___mtime',
  ImageLocalFileCtime = 'image___localFile___ctime',
  ImageLocalFileBirthtime = 'image___localFile___birthtime',
  ImageLocalFileBirthtimeMs = 'image___localFile___birthtimeMs',
  ImageLocalFileBlksize = 'image___localFile___blksize',
  ImageLocalFileBlocks = 'image___localFile___blocks',
  ImageLocalFileUrl = 'image___localFile___url',
  ImageLocalFilePublicUrl = 'image___localFile___publicURL',
  ImageLocalFileChildrenImageSharp = 'image___localFile___childrenImageSharp',
  ImageLocalFileChildrenImageSharpGatsbyImageData = 'image___localFile___childrenImageSharp___gatsbyImageData',
  ImageLocalFileChildrenImageSharpId = 'image___localFile___childrenImageSharp___id',
  ImageLocalFileChildrenImageSharpChildren = 'image___localFile___childrenImageSharp___children',
  ImageLocalFileChildImageSharpGatsbyImageData = 'image___localFile___childImageSharp___gatsbyImageData',
  ImageLocalFileChildImageSharpId = 'image___localFile___childImageSharp___id',
  ImageLocalFileChildImageSharpChildren = 'image___localFile___childImageSharp___children',
  ImageLocalFileId = 'image___localFile___id',
  ImageLocalFileParentId = 'image___localFile___parent___id',
  ImageLocalFileParentChildren = 'image___localFile___parent___children',
  ImageLocalFileChildren = 'image___localFile___children',
  ImageLocalFileChildrenId = 'image___localFile___children___id',
  ImageLocalFileChildrenChildren = 'image___localFile___children___children',
  ImageLocalFileInternalContent = 'image___localFile___internal___content',
  ImageLocalFileInternalContentDigest = 'image___localFile___internal___contentDigest',
  ImageLocalFileInternalDescription = 'image___localFile___internal___description',
  ImageLocalFileInternalFieldOwners = 'image___localFile___internal___fieldOwners',
  ImageLocalFileInternalIgnoreType = 'image___localFile___internal___ignoreType',
  ImageLocalFileInternalMediaType = 'image___localFile___internal___mediaType',
  ImageLocalFileInternalOwner = 'image___localFile___internal___owner',
  ImageLocalFileInternalType = 'image___localFile___internal___type',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  ShopifyId = 'shopifyId',
  Products = 'products',
  ProductsId = 'products___id',
  ProductsParentId = 'products___parent___id',
  ProductsParentParentId = 'products___parent___parent___id',
  ProductsParentParentChildren = 'products___parent___parent___children',
  ProductsParentChildren = 'products___parent___children',
  ProductsParentChildrenId = 'products___parent___children___id',
  ProductsParentChildrenChildren = 'products___parent___children___children',
  ProductsParentInternalContent = 'products___parent___internal___content',
  ProductsParentInternalContentDigest = 'products___parent___internal___contentDigest',
  ProductsParentInternalDescription = 'products___parent___internal___description',
  ProductsParentInternalFieldOwners = 'products___parent___internal___fieldOwners',
  ProductsParentInternalIgnoreType = 'products___parent___internal___ignoreType',
  ProductsParentInternalMediaType = 'products___parent___internal___mediaType',
  ProductsParentInternalOwner = 'products___parent___internal___owner',
  ProductsParentInternalType = 'products___parent___internal___type',
  ProductsChildren = 'products___children',
  ProductsChildrenId = 'products___children___id',
  ProductsChildrenParentId = 'products___children___parent___id',
  ProductsChildrenParentChildren = 'products___children___parent___children',
  ProductsChildrenChildren = 'products___children___children',
  ProductsChildrenChildrenId = 'products___children___children___id',
  ProductsChildrenChildrenChildren = 'products___children___children___children',
  ProductsChildrenInternalContent = 'products___children___internal___content',
  ProductsChildrenInternalContentDigest = 'products___children___internal___contentDigest',
  ProductsChildrenInternalDescription = 'products___children___internal___description',
  ProductsChildrenInternalFieldOwners = 'products___children___internal___fieldOwners',
  ProductsChildrenInternalIgnoreType = 'products___children___internal___ignoreType',
  ProductsChildrenInternalMediaType = 'products___children___internal___mediaType',
  ProductsChildrenInternalOwner = 'products___children___internal___owner',
  ProductsChildrenInternalType = 'products___children___internal___type',
  ProductsInternalContent = 'products___internal___content',
  ProductsInternalContentDigest = 'products___internal___contentDigest',
  ProductsInternalDescription = 'products___internal___description',
  ProductsInternalFieldOwners = 'products___internal___fieldOwners',
  ProductsInternalIgnoreType = 'products___internal___ignoreType',
  ProductsInternalMediaType = 'products___internal___mediaType',
  ProductsInternalOwner = 'products___internal___owner',
  ProductsInternalType = 'products___internal___type',
  ProductsAvailableForSale = 'products___availableForSale',
  ProductsCreatedAt = 'products___createdAt',
  ProductsDescription = 'products___description',
  ProductsDescriptionHtml = 'products___descriptionHtml',
  ProductsHandle = 'products___handle',
  ProductsImages = 'products___images',
  ProductsImagesId = 'products___images___id',
  ProductsImagesOriginalSrc = 'products___images___originalSrc',
  ProductsImagesLocalFileSourceInstanceName = 'products___images___localFile___sourceInstanceName',
  ProductsImagesLocalFileAbsolutePath = 'products___images___localFile___absolutePath',
  ProductsImagesLocalFileRelativePath = 'products___images___localFile___relativePath',
  ProductsImagesLocalFileExtension = 'products___images___localFile___extension',
  ProductsImagesLocalFileSize = 'products___images___localFile___size',
  ProductsImagesLocalFilePrettySize = 'products___images___localFile___prettySize',
  ProductsImagesLocalFileModifiedTime = 'products___images___localFile___modifiedTime',
  ProductsImagesLocalFileAccessTime = 'products___images___localFile___accessTime',
  ProductsImagesLocalFileChangeTime = 'products___images___localFile___changeTime',
  ProductsImagesLocalFileBirthTime = 'products___images___localFile___birthTime',
  ProductsImagesLocalFileRoot = 'products___images___localFile___root',
  ProductsImagesLocalFileDir = 'products___images___localFile___dir',
  ProductsImagesLocalFileBase = 'products___images___localFile___base',
  ProductsImagesLocalFileExt = 'products___images___localFile___ext',
  ProductsImagesLocalFileName = 'products___images___localFile___name',
  ProductsImagesLocalFileRelativeDirectory = 'products___images___localFile___relativeDirectory',
  ProductsImagesLocalFileDev = 'products___images___localFile___dev',
  ProductsImagesLocalFileMode = 'products___images___localFile___mode',
  ProductsImagesLocalFileNlink = 'products___images___localFile___nlink',
  ProductsImagesLocalFileUid = 'products___images___localFile___uid',
  ProductsImagesLocalFileGid = 'products___images___localFile___gid',
  ProductsImagesLocalFileRdev = 'products___images___localFile___rdev',
  ProductsImagesLocalFileIno = 'products___images___localFile___ino',
  ProductsImagesLocalFileAtimeMs = 'products___images___localFile___atimeMs',
  ProductsImagesLocalFileMtimeMs = 'products___images___localFile___mtimeMs',
  ProductsImagesLocalFileCtimeMs = 'products___images___localFile___ctimeMs',
  ProductsImagesLocalFileAtime = 'products___images___localFile___atime',
  ProductsImagesLocalFileMtime = 'products___images___localFile___mtime',
  ProductsImagesLocalFileCtime = 'products___images___localFile___ctime',
  ProductsImagesLocalFileBirthtime = 'products___images___localFile___birthtime',
  ProductsImagesLocalFileBirthtimeMs = 'products___images___localFile___birthtimeMs',
  ProductsImagesLocalFileBlksize = 'products___images___localFile___blksize',
  ProductsImagesLocalFileBlocks = 'products___images___localFile___blocks',
  ProductsImagesLocalFileUrl = 'products___images___localFile___url',
  ProductsImagesLocalFilePublicUrl = 'products___images___localFile___publicURL',
  ProductsImagesLocalFileChildrenImageSharp = 'products___images___localFile___childrenImageSharp',
  ProductsImagesLocalFileId = 'products___images___localFile___id',
  ProductsImagesLocalFileChildren = 'products___images___localFile___children',
  ProductsPriceRangeMinVariantPriceAmount = 'products___priceRange___minVariantPrice___amount',
  ProductsPriceRangeMinVariantPriceCurrencyCode = 'products___priceRange___minVariantPrice___currencyCode',
  ProductsPriceRangeMaxVariantPriceAmount = 'products___priceRange___maxVariantPrice___amount',
  ProductsPriceRangeMaxVariantPriceCurrencyCode = 'products___priceRange___maxVariantPrice___currencyCode',
  ProductsProductType = 'products___productType',
  ProductsPublishedAt = 'products___publishedAt',
  ProductsTags = 'products___tags',
  ProductsTitle = 'products___title',
  ProductsUpdatedAt = 'products___updatedAt',
  ProductsVendor = 'products___vendor',
  ProductsShopifyId = 'products___shopifyId',
  ProductsVariants = 'products___variants',
  ProductsVariantsId = 'products___variants___id',
  ProductsVariantsParentId = 'products___variants___parent___id',
  ProductsVariantsParentChildren = 'products___variants___parent___children',
  ProductsVariantsChildren = 'products___variants___children',
  ProductsVariantsChildrenId = 'products___variants___children___id',
  ProductsVariantsChildrenChildren = 'products___variants___children___children',
  ProductsVariantsInternalContent = 'products___variants___internal___content',
  ProductsVariantsInternalContentDigest = 'products___variants___internal___contentDigest',
  ProductsVariantsInternalDescription = 'products___variants___internal___description',
  ProductsVariantsInternalFieldOwners = 'products___variants___internal___fieldOwners',
  ProductsVariantsInternalIgnoreType = 'products___variants___internal___ignoreType',
  ProductsVariantsInternalMediaType = 'products___variants___internal___mediaType',
  ProductsVariantsInternalOwner = 'products___variants___internal___owner',
  ProductsVariantsInternalType = 'products___variants___internal___type',
  ProductsVariantsAvailableForSale = 'products___variants___availableForSale',
  ProductsVariantsImageId = 'products___variants___image___id',
  ProductsVariantsImageOriginalSrc = 'products___variants___image___originalSrc',
  ProductsVariantsPrice = 'products___variants___price',
  ProductsVariantsPriceV2Amount = 'products___variants___priceV2___amount',
  ProductsVariantsPriceV2CurrencyCode = 'products___variants___priceV2___currencyCode',
  ProductsVariantsRequiresShipping = 'products___variants___requiresShipping',
  ProductsVariantsSelectedOptions = 'products___variants___selectedOptions',
  ProductsVariantsSelectedOptionsName = 'products___variants___selectedOptions___name',
  ProductsVariantsSelectedOptionsValue = 'products___variants___selectedOptions___value',
  ProductsVariantsSku = 'products___variants___sku',
  ProductsVariantsTitle = 'products___variants___title',
  ProductsVariantsWeight = 'products___variants___weight',
  ProductsVariantsWeightUnit = 'products___variants___weightUnit',
  ProductsVariantsPresentmentPricesEdges = 'products___variants___presentmentPrices___edges',
  ProductsVariantsShopifyId = 'products___variants___shopifyId',
  ProductsVariantsPriceNumber = 'products___variants___priceNumber',
  ProductsVariantsProductId = 'products___variants___product___id',
  ProductsVariantsProductChildren = 'products___variants___product___children',
  ProductsVariantsProductAvailableForSale = 'products___variants___product___availableForSale',
  ProductsVariantsProductCreatedAt = 'products___variants___product___createdAt',
  ProductsVariantsProductDescription = 'products___variants___product___description',
  ProductsVariantsProductDescriptionHtml = 'products___variants___product___descriptionHtml',
  ProductsVariantsProductHandle = 'products___variants___product___handle',
  ProductsVariantsProductImages = 'products___variants___product___images',
  ProductsVariantsProductProductType = 'products___variants___product___productType',
  ProductsVariantsProductPublishedAt = 'products___variants___product___publishedAt',
  ProductsVariantsProductTags = 'products___variants___product___tags',
  ProductsVariantsProductTitle = 'products___variants___product___title',
  ProductsVariantsProductUpdatedAt = 'products___variants___product___updatedAt',
  ProductsVariantsProductVendor = 'products___variants___product___vendor',
  ProductsVariantsProductShopifyId = 'products___variants___product___shopifyId',
  ProductsVariantsProductVariants = 'products___variants___product___variants',
  ProductsVariantsProductOptions = 'products___variants___product___options',
  ProductsOptions = 'products___options',
  ProductsOptionsId = 'products___options___id',
  ProductsOptionsParentId = 'products___options___parent___id',
  ProductsOptionsParentChildren = 'products___options___parent___children',
  ProductsOptionsChildren = 'products___options___children',
  ProductsOptionsChildrenId = 'products___options___children___id',
  ProductsOptionsChildrenChildren = 'products___options___children___children',
  ProductsOptionsInternalContent = 'products___options___internal___content',
  ProductsOptionsInternalContentDigest = 'products___options___internal___contentDigest',
  ProductsOptionsInternalDescription = 'products___options___internal___description',
  ProductsOptionsInternalFieldOwners = 'products___options___internal___fieldOwners',
  ProductsOptionsInternalIgnoreType = 'products___options___internal___ignoreType',
  ProductsOptionsInternalMediaType = 'products___options___internal___mediaType',
  ProductsOptionsInternalOwner = 'products___options___internal___owner',
  ProductsOptionsInternalType = 'products___options___internal___type',
  ProductsOptionsName = 'products___options___name',
  ProductsOptionsValues = 'products___options___values',
  ProductsOptionsShopifyId = 'products___options___shopifyId'
}

export type ShopifyCollectionFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  descriptionHtml?: Maybe<StringQueryOperatorInput>;
  handle?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ShopifyCollectionImageFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  products?: Maybe<ShopifyProductFilterListInput>;
};

export type ShopifyCollectionGroupConnection = {
  __typename?: 'ShopifyCollectionGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ShopifyCollectionEdge>;
  nodes: Array<ShopifyCollection>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ShopifyCollectionImage = {
  __typename?: 'ShopifyCollectionImage';
  id?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
};

export type ShopifyCollectionImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type ShopifyCollectionSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyCollectionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyProduct = Node & {
  __typename?: 'ShopifyProduct';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  availableForSale?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  descriptionHtml?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<ShopifyProductImages>>>;
  priceRange?: Maybe<ShopifyProductPriceRange>;
  productType?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['Date']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  vendor?: Maybe<Scalars['String']>;
  shopifyId?: Maybe<Scalars['String']>;
  variants?: Maybe<Array<Maybe<ShopifyProductVariant>>>;
  options?: Maybe<Array<Maybe<ShopifyProductOption>>>;
};


export type ShopifyProductCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ShopifyProductPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ShopifyProductUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ShopifyProductConnection = {
  __typename?: 'ShopifyProductConnection';
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductEdge>;
  nodes: Array<ShopifyProduct>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ShopifyProductGroupConnection>;
};


export type ShopifyProductConnectionDistinctArgs = {
  field: ShopifyProductFieldsEnum;
};


export type ShopifyProductConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyProductFieldsEnum;
};

export type ShopifyProductEdge = {
  __typename?: 'ShopifyProductEdge';
  next?: Maybe<ShopifyProduct>;
  node: ShopifyProduct;
  previous?: Maybe<ShopifyProduct>;
};

export enum ShopifyProductFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  AvailableForSale = 'availableForSale',
  CreatedAt = 'createdAt',
  Description = 'description',
  DescriptionHtml = 'descriptionHtml',
  Handle = 'handle',
  Images = 'images',
  ImagesId = 'images___id',
  ImagesOriginalSrc = 'images___originalSrc',
  ImagesLocalFileSourceInstanceName = 'images___localFile___sourceInstanceName',
  ImagesLocalFileAbsolutePath = 'images___localFile___absolutePath',
  ImagesLocalFileRelativePath = 'images___localFile___relativePath',
  ImagesLocalFileExtension = 'images___localFile___extension',
  ImagesLocalFileSize = 'images___localFile___size',
  ImagesLocalFilePrettySize = 'images___localFile___prettySize',
  ImagesLocalFileModifiedTime = 'images___localFile___modifiedTime',
  ImagesLocalFileAccessTime = 'images___localFile___accessTime',
  ImagesLocalFileChangeTime = 'images___localFile___changeTime',
  ImagesLocalFileBirthTime = 'images___localFile___birthTime',
  ImagesLocalFileRoot = 'images___localFile___root',
  ImagesLocalFileDir = 'images___localFile___dir',
  ImagesLocalFileBase = 'images___localFile___base',
  ImagesLocalFileExt = 'images___localFile___ext',
  ImagesLocalFileName = 'images___localFile___name',
  ImagesLocalFileRelativeDirectory = 'images___localFile___relativeDirectory',
  ImagesLocalFileDev = 'images___localFile___dev',
  ImagesLocalFileMode = 'images___localFile___mode',
  ImagesLocalFileNlink = 'images___localFile___nlink',
  ImagesLocalFileUid = 'images___localFile___uid',
  ImagesLocalFileGid = 'images___localFile___gid',
  ImagesLocalFileRdev = 'images___localFile___rdev',
  ImagesLocalFileIno = 'images___localFile___ino',
  ImagesLocalFileAtimeMs = 'images___localFile___atimeMs',
  ImagesLocalFileMtimeMs = 'images___localFile___mtimeMs',
  ImagesLocalFileCtimeMs = 'images___localFile___ctimeMs',
  ImagesLocalFileAtime = 'images___localFile___atime',
  ImagesLocalFileMtime = 'images___localFile___mtime',
  ImagesLocalFileCtime = 'images___localFile___ctime',
  ImagesLocalFileBirthtime = 'images___localFile___birthtime',
  ImagesLocalFileBirthtimeMs = 'images___localFile___birthtimeMs',
  ImagesLocalFileBlksize = 'images___localFile___blksize',
  ImagesLocalFileBlocks = 'images___localFile___blocks',
  ImagesLocalFileUrl = 'images___localFile___url',
  ImagesLocalFilePublicUrl = 'images___localFile___publicURL',
  ImagesLocalFileChildrenImageSharp = 'images___localFile___childrenImageSharp',
  ImagesLocalFileChildrenImageSharpGatsbyImageData = 'images___localFile___childrenImageSharp___gatsbyImageData',
  ImagesLocalFileChildrenImageSharpId = 'images___localFile___childrenImageSharp___id',
  ImagesLocalFileChildrenImageSharpChildren = 'images___localFile___childrenImageSharp___children',
  ImagesLocalFileChildImageSharpGatsbyImageData = 'images___localFile___childImageSharp___gatsbyImageData',
  ImagesLocalFileChildImageSharpId = 'images___localFile___childImageSharp___id',
  ImagesLocalFileChildImageSharpChildren = 'images___localFile___childImageSharp___children',
  ImagesLocalFileId = 'images___localFile___id',
  ImagesLocalFileParentId = 'images___localFile___parent___id',
  ImagesLocalFileParentChildren = 'images___localFile___parent___children',
  ImagesLocalFileChildren = 'images___localFile___children',
  ImagesLocalFileChildrenId = 'images___localFile___children___id',
  ImagesLocalFileChildrenChildren = 'images___localFile___children___children',
  ImagesLocalFileInternalContent = 'images___localFile___internal___content',
  ImagesLocalFileInternalContentDigest = 'images___localFile___internal___contentDigest',
  ImagesLocalFileInternalDescription = 'images___localFile___internal___description',
  ImagesLocalFileInternalFieldOwners = 'images___localFile___internal___fieldOwners',
  ImagesLocalFileInternalIgnoreType = 'images___localFile___internal___ignoreType',
  ImagesLocalFileInternalMediaType = 'images___localFile___internal___mediaType',
  ImagesLocalFileInternalOwner = 'images___localFile___internal___owner',
  ImagesLocalFileInternalType = 'images___localFile___internal___type',
  PriceRangeMinVariantPriceAmount = 'priceRange___minVariantPrice___amount',
  PriceRangeMinVariantPriceCurrencyCode = 'priceRange___minVariantPrice___currencyCode',
  PriceRangeMaxVariantPriceAmount = 'priceRange___maxVariantPrice___amount',
  PriceRangeMaxVariantPriceCurrencyCode = 'priceRange___maxVariantPrice___currencyCode',
  ProductType = 'productType',
  PublishedAt = 'publishedAt',
  Tags = 'tags',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  Vendor = 'vendor',
  ShopifyId = 'shopifyId',
  Variants = 'variants',
  VariantsId = 'variants___id',
  VariantsParentId = 'variants___parent___id',
  VariantsParentParentId = 'variants___parent___parent___id',
  VariantsParentParentChildren = 'variants___parent___parent___children',
  VariantsParentChildren = 'variants___parent___children',
  VariantsParentChildrenId = 'variants___parent___children___id',
  VariantsParentChildrenChildren = 'variants___parent___children___children',
  VariantsParentInternalContent = 'variants___parent___internal___content',
  VariantsParentInternalContentDigest = 'variants___parent___internal___contentDigest',
  VariantsParentInternalDescription = 'variants___parent___internal___description',
  VariantsParentInternalFieldOwners = 'variants___parent___internal___fieldOwners',
  VariantsParentInternalIgnoreType = 'variants___parent___internal___ignoreType',
  VariantsParentInternalMediaType = 'variants___parent___internal___mediaType',
  VariantsParentInternalOwner = 'variants___parent___internal___owner',
  VariantsParentInternalType = 'variants___parent___internal___type',
  VariantsChildren = 'variants___children',
  VariantsChildrenId = 'variants___children___id',
  VariantsChildrenParentId = 'variants___children___parent___id',
  VariantsChildrenParentChildren = 'variants___children___parent___children',
  VariantsChildrenChildren = 'variants___children___children',
  VariantsChildrenChildrenId = 'variants___children___children___id',
  VariantsChildrenChildrenChildren = 'variants___children___children___children',
  VariantsChildrenInternalContent = 'variants___children___internal___content',
  VariantsChildrenInternalContentDigest = 'variants___children___internal___contentDigest',
  VariantsChildrenInternalDescription = 'variants___children___internal___description',
  VariantsChildrenInternalFieldOwners = 'variants___children___internal___fieldOwners',
  VariantsChildrenInternalIgnoreType = 'variants___children___internal___ignoreType',
  VariantsChildrenInternalMediaType = 'variants___children___internal___mediaType',
  VariantsChildrenInternalOwner = 'variants___children___internal___owner',
  VariantsChildrenInternalType = 'variants___children___internal___type',
  VariantsInternalContent = 'variants___internal___content',
  VariantsInternalContentDigest = 'variants___internal___contentDigest',
  VariantsInternalDescription = 'variants___internal___description',
  VariantsInternalFieldOwners = 'variants___internal___fieldOwners',
  VariantsInternalIgnoreType = 'variants___internal___ignoreType',
  VariantsInternalMediaType = 'variants___internal___mediaType',
  VariantsInternalOwner = 'variants___internal___owner',
  VariantsInternalType = 'variants___internal___type',
  VariantsAvailableForSale = 'variants___availableForSale',
  VariantsImageId = 'variants___image___id',
  VariantsImageOriginalSrc = 'variants___image___originalSrc',
  VariantsImageLocalFileSourceInstanceName = 'variants___image___localFile___sourceInstanceName',
  VariantsImageLocalFileAbsolutePath = 'variants___image___localFile___absolutePath',
  VariantsImageLocalFileRelativePath = 'variants___image___localFile___relativePath',
  VariantsImageLocalFileExtension = 'variants___image___localFile___extension',
  VariantsImageLocalFileSize = 'variants___image___localFile___size',
  VariantsImageLocalFilePrettySize = 'variants___image___localFile___prettySize',
  VariantsImageLocalFileModifiedTime = 'variants___image___localFile___modifiedTime',
  VariantsImageLocalFileAccessTime = 'variants___image___localFile___accessTime',
  VariantsImageLocalFileChangeTime = 'variants___image___localFile___changeTime',
  VariantsImageLocalFileBirthTime = 'variants___image___localFile___birthTime',
  VariantsImageLocalFileRoot = 'variants___image___localFile___root',
  VariantsImageLocalFileDir = 'variants___image___localFile___dir',
  VariantsImageLocalFileBase = 'variants___image___localFile___base',
  VariantsImageLocalFileExt = 'variants___image___localFile___ext',
  VariantsImageLocalFileName = 'variants___image___localFile___name',
  VariantsImageLocalFileRelativeDirectory = 'variants___image___localFile___relativeDirectory',
  VariantsImageLocalFileDev = 'variants___image___localFile___dev',
  VariantsImageLocalFileMode = 'variants___image___localFile___mode',
  VariantsImageLocalFileNlink = 'variants___image___localFile___nlink',
  VariantsImageLocalFileUid = 'variants___image___localFile___uid',
  VariantsImageLocalFileGid = 'variants___image___localFile___gid',
  VariantsImageLocalFileRdev = 'variants___image___localFile___rdev',
  VariantsImageLocalFileIno = 'variants___image___localFile___ino',
  VariantsImageLocalFileAtimeMs = 'variants___image___localFile___atimeMs',
  VariantsImageLocalFileMtimeMs = 'variants___image___localFile___mtimeMs',
  VariantsImageLocalFileCtimeMs = 'variants___image___localFile___ctimeMs',
  VariantsImageLocalFileAtime = 'variants___image___localFile___atime',
  VariantsImageLocalFileMtime = 'variants___image___localFile___mtime',
  VariantsImageLocalFileCtime = 'variants___image___localFile___ctime',
  VariantsImageLocalFileBirthtime = 'variants___image___localFile___birthtime',
  VariantsImageLocalFileBirthtimeMs = 'variants___image___localFile___birthtimeMs',
  VariantsImageLocalFileBlksize = 'variants___image___localFile___blksize',
  VariantsImageLocalFileBlocks = 'variants___image___localFile___blocks',
  VariantsImageLocalFileUrl = 'variants___image___localFile___url',
  VariantsImageLocalFilePublicUrl = 'variants___image___localFile___publicURL',
  VariantsImageLocalFileChildrenImageSharp = 'variants___image___localFile___childrenImageSharp',
  VariantsImageLocalFileId = 'variants___image___localFile___id',
  VariantsImageLocalFileChildren = 'variants___image___localFile___children',
  VariantsPrice = 'variants___price',
  VariantsPriceV2Amount = 'variants___priceV2___amount',
  VariantsPriceV2CurrencyCode = 'variants___priceV2___currencyCode',
  VariantsRequiresShipping = 'variants___requiresShipping',
  VariantsSelectedOptions = 'variants___selectedOptions',
  VariantsSelectedOptionsName = 'variants___selectedOptions___name',
  VariantsSelectedOptionsValue = 'variants___selectedOptions___value',
  VariantsSku = 'variants___sku',
  VariantsTitle = 'variants___title',
  VariantsWeight = 'variants___weight',
  VariantsWeightUnit = 'variants___weightUnit',
  VariantsPresentmentPricesEdges = 'variants___presentmentPrices___edges',
  VariantsShopifyId = 'variants___shopifyId',
  VariantsPriceNumber = 'variants___priceNumber',
  VariantsProductId = 'variants___product___id',
  VariantsProductParentId = 'variants___product___parent___id',
  VariantsProductParentChildren = 'variants___product___parent___children',
  VariantsProductChildren = 'variants___product___children',
  VariantsProductChildrenId = 'variants___product___children___id',
  VariantsProductChildrenChildren = 'variants___product___children___children',
  VariantsProductInternalContent = 'variants___product___internal___content',
  VariantsProductInternalContentDigest = 'variants___product___internal___contentDigest',
  VariantsProductInternalDescription = 'variants___product___internal___description',
  VariantsProductInternalFieldOwners = 'variants___product___internal___fieldOwners',
  VariantsProductInternalIgnoreType = 'variants___product___internal___ignoreType',
  VariantsProductInternalMediaType = 'variants___product___internal___mediaType',
  VariantsProductInternalOwner = 'variants___product___internal___owner',
  VariantsProductInternalType = 'variants___product___internal___type',
  VariantsProductAvailableForSale = 'variants___product___availableForSale',
  VariantsProductCreatedAt = 'variants___product___createdAt',
  VariantsProductDescription = 'variants___product___description',
  VariantsProductDescriptionHtml = 'variants___product___descriptionHtml',
  VariantsProductHandle = 'variants___product___handle',
  VariantsProductImages = 'variants___product___images',
  VariantsProductImagesId = 'variants___product___images___id',
  VariantsProductImagesOriginalSrc = 'variants___product___images___originalSrc',
  VariantsProductProductType = 'variants___product___productType',
  VariantsProductPublishedAt = 'variants___product___publishedAt',
  VariantsProductTags = 'variants___product___tags',
  VariantsProductTitle = 'variants___product___title',
  VariantsProductUpdatedAt = 'variants___product___updatedAt',
  VariantsProductVendor = 'variants___product___vendor',
  VariantsProductShopifyId = 'variants___product___shopifyId',
  VariantsProductVariants = 'variants___product___variants',
  VariantsProductVariantsId = 'variants___product___variants___id',
  VariantsProductVariantsChildren = 'variants___product___variants___children',
  VariantsProductVariantsAvailableForSale = 'variants___product___variants___availableForSale',
  VariantsProductVariantsPrice = 'variants___product___variants___price',
  VariantsProductVariantsRequiresShipping = 'variants___product___variants___requiresShipping',
  VariantsProductVariantsSelectedOptions = 'variants___product___variants___selectedOptions',
  VariantsProductVariantsSku = 'variants___product___variants___sku',
  VariantsProductVariantsTitle = 'variants___product___variants___title',
  VariantsProductVariantsWeight = 'variants___product___variants___weight',
  VariantsProductVariantsWeightUnit = 'variants___product___variants___weightUnit',
  VariantsProductVariantsShopifyId = 'variants___product___variants___shopifyId',
  VariantsProductVariantsPriceNumber = 'variants___product___variants___priceNumber',
  VariantsProductOptions = 'variants___product___options',
  VariantsProductOptionsId = 'variants___product___options___id',
  VariantsProductOptionsChildren = 'variants___product___options___children',
  VariantsProductOptionsName = 'variants___product___options___name',
  VariantsProductOptionsValues = 'variants___product___options___values',
  VariantsProductOptionsShopifyId = 'variants___product___options___shopifyId',
  Options = 'options',
  OptionsId = 'options___id',
  OptionsParentId = 'options___parent___id',
  OptionsParentParentId = 'options___parent___parent___id',
  OptionsParentParentChildren = 'options___parent___parent___children',
  OptionsParentChildren = 'options___parent___children',
  OptionsParentChildrenId = 'options___parent___children___id',
  OptionsParentChildrenChildren = 'options___parent___children___children',
  OptionsParentInternalContent = 'options___parent___internal___content',
  OptionsParentInternalContentDigest = 'options___parent___internal___contentDigest',
  OptionsParentInternalDescription = 'options___parent___internal___description',
  OptionsParentInternalFieldOwners = 'options___parent___internal___fieldOwners',
  OptionsParentInternalIgnoreType = 'options___parent___internal___ignoreType',
  OptionsParentInternalMediaType = 'options___parent___internal___mediaType',
  OptionsParentInternalOwner = 'options___parent___internal___owner',
  OptionsParentInternalType = 'options___parent___internal___type',
  OptionsChildren = 'options___children',
  OptionsChildrenId = 'options___children___id',
  OptionsChildrenParentId = 'options___children___parent___id',
  OptionsChildrenParentChildren = 'options___children___parent___children',
  OptionsChildrenChildren = 'options___children___children',
  OptionsChildrenChildrenId = 'options___children___children___id',
  OptionsChildrenChildrenChildren = 'options___children___children___children',
  OptionsChildrenInternalContent = 'options___children___internal___content',
  OptionsChildrenInternalContentDigest = 'options___children___internal___contentDigest',
  OptionsChildrenInternalDescription = 'options___children___internal___description',
  OptionsChildrenInternalFieldOwners = 'options___children___internal___fieldOwners',
  OptionsChildrenInternalIgnoreType = 'options___children___internal___ignoreType',
  OptionsChildrenInternalMediaType = 'options___children___internal___mediaType',
  OptionsChildrenInternalOwner = 'options___children___internal___owner',
  OptionsChildrenInternalType = 'options___children___internal___type',
  OptionsInternalContent = 'options___internal___content',
  OptionsInternalContentDigest = 'options___internal___contentDigest',
  OptionsInternalDescription = 'options___internal___description',
  OptionsInternalFieldOwners = 'options___internal___fieldOwners',
  OptionsInternalIgnoreType = 'options___internal___ignoreType',
  OptionsInternalMediaType = 'options___internal___mediaType',
  OptionsInternalOwner = 'options___internal___owner',
  OptionsInternalType = 'options___internal___type',
  OptionsName = 'options___name',
  OptionsValues = 'options___values',
  OptionsShopifyId = 'options___shopifyId'
}

export type ShopifyProductFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  availableForSale?: Maybe<BooleanQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  descriptionHtml?: Maybe<StringQueryOperatorInput>;
  handle?: Maybe<StringQueryOperatorInput>;
  images?: Maybe<ShopifyProductImagesFilterListInput>;
  priceRange?: Maybe<ShopifyProductPriceRangeFilterInput>;
  productType?: Maybe<StringQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  vendor?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  variants?: Maybe<ShopifyProductVariantFilterListInput>;
  options?: Maybe<ShopifyProductOptionFilterListInput>;
};

export type ShopifyProductFilterListInput = {
  elemMatch?: Maybe<ShopifyProductFilterInput>;
};

export type ShopifyProductGroupConnection = {
  __typename?: 'ShopifyProductGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductEdge>;
  nodes: Array<ShopifyProduct>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ShopifyProductImages = {
  __typename?: 'ShopifyProductImages';
  id?: Maybe<Scalars['String']>;
  originalSrc?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
};

export type ShopifyProductImagesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalSrc?: Maybe<StringQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type ShopifyProductImagesFilterListInput = {
  elemMatch?: Maybe<ShopifyProductImagesFilterInput>;
};

export type ShopifyProductOption = Node & {
  __typename?: 'ShopifyProductOption';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
  shopifyId?: Maybe<Scalars['String']>;
};

export type ShopifyProductOptionConnection = {
  __typename?: 'ShopifyProductOptionConnection';
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductOptionEdge>;
  nodes: Array<ShopifyProductOption>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ShopifyProductOptionGroupConnection>;
};


export type ShopifyProductOptionConnectionDistinctArgs = {
  field: ShopifyProductOptionFieldsEnum;
};


export type ShopifyProductOptionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyProductOptionFieldsEnum;
};

export type ShopifyProductOptionEdge = {
  __typename?: 'ShopifyProductOptionEdge';
  next?: Maybe<ShopifyProductOption>;
  node: ShopifyProductOption;
  previous?: Maybe<ShopifyProductOption>;
};

export enum ShopifyProductOptionFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Values = 'values',
  ShopifyId = 'shopifyId'
}

export type ShopifyProductOptionFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  values?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductOptionFilterListInput = {
  elemMatch?: Maybe<ShopifyProductOptionFilterInput>;
};

export type ShopifyProductOptionGroupConnection = {
  __typename?: 'ShopifyProductOptionGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductOptionEdge>;
  nodes: Array<ShopifyProductOption>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ShopifyProductOptionSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyProductOptionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyProductPriceRange = {
  __typename?: 'ShopifyProductPriceRange';
  minVariantPrice?: Maybe<ShopifyProductPriceRangeMinVariantPrice>;
  maxVariantPrice?: Maybe<ShopifyProductPriceRangeMaxVariantPrice>;
};

export type ShopifyProductPriceRangeFilterInput = {
  minVariantPrice?: Maybe<ShopifyProductPriceRangeMinVariantPriceFilterInput>;
  maxVariantPrice?: Maybe<ShopifyProductPriceRangeMaxVariantPriceFilterInput>;
};

export type ShopifyProductPriceRangeMaxVariantPrice = {
  __typename?: 'ShopifyProductPriceRangeMaxVariantPrice';
  amount?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type ShopifyProductPriceRangeMaxVariantPriceFilterInput = {
  amount?: Maybe<StringQueryOperatorInput>;
  currencyCode?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductPriceRangeMinVariantPrice = {
  __typename?: 'ShopifyProductPriceRangeMinVariantPrice';
  amount?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type ShopifyProductPriceRangeMinVariantPriceFilterInput = {
  amount?: Maybe<StringQueryOperatorInput>;
  currencyCode?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyProductFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyProductVariant = Node & {
  __typename?: 'ShopifyProductVariant';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  availableForSale?: Maybe<Scalars['Boolean']>;
  image?: Maybe<ShopifyProductVariantImage>;
  price?: Maybe<Scalars['String']>;
  priceV2?: Maybe<ShopifyProductVariantPriceV2>;
  requiresShipping?: Maybe<Scalars['Boolean']>;
  selectedOptions?: Maybe<Array<Maybe<ShopifyProductVariantSelectedOptions>>>;
  sku?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
  weightUnit?: Maybe<Scalars['String']>;
  presentmentPrices?: Maybe<ShopifyProductVariantPresentmentPrices>;
  shopifyId?: Maybe<Scalars['String']>;
  priceNumber?: Maybe<Scalars['Float']>;
  product?: Maybe<ShopifyProduct>;
};

export type ShopifyProductVariantConnection = {
  __typename?: 'ShopifyProductVariantConnection';
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductVariantEdge>;
  nodes: Array<ShopifyProductVariant>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ShopifyProductVariantGroupConnection>;
};


export type ShopifyProductVariantConnectionDistinctArgs = {
  field: ShopifyProductVariantFieldsEnum;
};


export type ShopifyProductVariantConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyProductVariantFieldsEnum;
};

export type ShopifyProductVariantEdge = {
  __typename?: 'ShopifyProductVariantEdge';
  next?: Maybe<ShopifyProductVariant>;
  node: ShopifyProductVariant;
  previous?: Maybe<ShopifyProductVariant>;
};

export enum ShopifyProductVariantFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  AvailableForSale = 'availableForSale',
  ImageId = 'image___id',
  ImageOriginalSrc = 'image___originalSrc',
  ImageLocalFileSourceInstanceName = 'image___localFile___sourceInstanceName',
  ImageLocalFileAbsolutePath = 'image___localFile___absolutePath',
  ImageLocalFileRelativePath = 'image___localFile___relativePath',
  ImageLocalFileExtension = 'image___localFile___extension',
  ImageLocalFileSize = 'image___localFile___size',
  ImageLocalFilePrettySize = 'image___localFile___prettySize',
  ImageLocalFileModifiedTime = 'image___localFile___modifiedTime',
  ImageLocalFileAccessTime = 'image___localFile___accessTime',
  ImageLocalFileChangeTime = 'image___localFile___changeTime',
  ImageLocalFileBirthTime = 'image___localFile___birthTime',
  ImageLocalFileRoot = 'image___localFile___root',
  ImageLocalFileDir = 'image___localFile___dir',
  ImageLocalFileBase = 'image___localFile___base',
  ImageLocalFileExt = 'image___localFile___ext',
  ImageLocalFileName = 'image___localFile___name',
  ImageLocalFileRelativeDirectory = 'image___localFile___relativeDirectory',
  ImageLocalFileDev = 'image___localFile___dev',
  ImageLocalFileMode = 'image___localFile___mode',
  ImageLocalFileNlink = 'image___localFile___nlink',
  ImageLocalFileUid = 'image___localFile___uid',
  ImageLocalFileGid = 'image___localFile___gid',
  ImageLocalFileRdev = 'image___localFile___rdev',
  ImageLocalFileIno = 'image___localFile___ino',
  ImageLocalFileAtimeMs = 'image___localFile___atimeMs',
  ImageLocalFileMtimeMs = 'image___localFile___mtimeMs',
  ImageLocalFileCtimeMs = 'image___localFile___ctimeMs',
  ImageLocalFileAtime = 'image___localFile___atime',
  ImageLocalFileMtime = 'image___localFile___mtime',
  ImageLocalFileCtime = 'image___localFile___ctime',
  ImageLocalFileBirthtime = 'image___localFile___birthtime',
  ImageLocalFileBirthtimeMs = 'image___localFile___birthtimeMs',
  ImageLocalFileBlksize = 'image___localFile___blksize',
  ImageLocalFileBlocks = 'image___localFile___blocks',
  ImageLocalFileUrl = 'image___localFile___url',
  ImageLocalFilePublicUrl = 'image___localFile___publicURL',
  ImageLocalFileChildrenImageSharp = 'image___localFile___childrenImageSharp',
  ImageLocalFileChildrenImageSharpGatsbyImageData = 'image___localFile___childrenImageSharp___gatsbyImageData',
  ImageLocalFileChildrenImageSharpId = 'image___localFile___childrenImageSharp___id',
  ImageLocalFileChildrenImageSharpChildren = 'image___localFile___childrenImageSharp___children',
  ImageLocalFileChildImageSharpGatsbyImageData = 'image___localFile___childImageSharp___gatsbyImageData',
  ImageLocalFileChildImageSharpId = 'image___localFile___childImageSharp___id',
  ImageLocalFileChildImageSharpChildren = 'image___localFile___childImageSharp___children',
  ImageLocalFileId = 'image___localFile___id',
  ImageLocalFileParentId = 'image___localFile___parent___id',
  ImageLocalFileParentChildren = 'image___localFile___parent___children',
  ImageLocalFileChildren = 'image___localFile___children',
  ImageLocalFileChildrenId = 'image___localFile___children___id',
  ImageLocalFileChildrenChildren = 'image___localFile___children___children',
  ImageLocalFileInternalContent = 'image___localFile___internal___content',
  ImageLocalFileInternalContentDigest = 'image___localFile___internal___contentDigest',
  ImageLocalFileInternalDescription = 'image___localFile___internal___description',
  ImageLocalFileInternalFieldOwners = 'image___localFile___internal___fieldOwners',
  ImageLocalFileInternalIgnoreType = 'image___localFile___internal___ignoreType',
  ImageLocalFileInternalMediaType = 'image___localFile___internal___mediaType',
  ImageLocalFileInternalOwner = 'image___localFile___internal___owner',
  ImageLocalFileInternalType = 'image___localFile___internal___type',
  Price = 'price',
  PriceV2Amount = 'priceV2___amount',
  PriceV2CurrencyCode = 'priceV2___currencyCode',
  RequiresShipping = 'requiresShipping',
  SelectedOptions = 'selectedOptions',
  SelectedOptionsName = 'selectedOptions___name',
  SelectedOptionsValue = 'selectedOptions___value',
  Sku = 'sku',
  Title = 'title',
  Weight = 'weight',
  WeightUnit = 'weightUnit',
  PresentmentPricesEdges = 'presentmentPrices___edges',
  ShopifyId = 'shopifyId',
  PriceNumber = 'priceNumber',
  ProductId = 'product___id',
  ProductParentId = 'product___parent___id',
  ProductParentParentId = 'product___parent___parent___id',
  ProductParentParentChildren = 'product___parent___parent___children',
  ProductParentChildren = 'product___parent___children',
  ProductParentChildrenId = 'product___parent___children___id',
  ProductParentChildrenChildren = 'product___parent___children___children',
  ProductParentInternalContent = 'product___parent___internal___content',
  ProductParentInternalContentDigest = 'product___parent___internal___contentDigest',
  ProductParentInternalDescription = 'product___parent___internal___description',
  ProductParentInternalFieldOwners = 'product___parent___internal___fieldOwners',
  ProductParentInternalIgnoreType = 'product___parent___internal___ignoreType',
  ProductParentInternalMediaType = 'product___parent___internal___mediaType',
  ProductParentInternalOwner = 'product___parent___internal___owner',
  ProductParentInternalType = 'product___parent___internal___type',
  ProductChildren = 'product___children',
  ProductChildrenId = 'product___children___id',
  ProductChildrenParentId = 'product___children___parent___id',
  ProductChildrenParentChildren = 'product___children___parent___children',
  ProductChildrenChildren = 'product___children___children',
  ProductChildrenChildrenId = 'product___children___children___id',
  ProductChildrenChildrenChildren = 'product___children___children___children',
  ProductChildrenInternalContent = 'product___children___internal___content',
  ProductChildrenInternalContentDigest = 'product___children___internal___contentDigest',
  ProductChildrenInternalDescription = 'product___children___internal___description',
  ProductChildrenInternalFieldOwners = 'product___children___internal___fieldOwners',
  ProductChildrenInternalIgnoreType = 'product___children___internal___ignoreType',
  ProductChildrenInternalMediaType = 'product___children___internal___mediaType',
  ProductChildrenInternalOwner = 'product___children___internal___owner',
  ProductChildrenInternalType = 'product___children___internal___type',
  ProductInternalContent = 'product___internal___content',
  ProductInternalContentDigest = 'product___internal___contentDigest',
  ProductInternalDescription = 'product___internal___description',
  ProductInternalFieldOwners = 'product___internal___fieldOwners',
  ProductInternalIgnoreType = 'product___internal___ignoreType',
  ProductInternalMediaType = 'product___internal___mediaType',
  ProductInternalOwner = 'product___internal___owner',
  ProductInternalType = 'product___internal___type',
  ProductAvailableForSale = 'product___availableForSale',
  ProductCreatedAt = 'product___createdAt',
  ProductDescription = 'product___description',
  ProductDescriptionHtml = 'product___descriptionHtml',
  ProductHandle = 'product___handle',
  ProductImages = 'product___images',
  ProductImagesId = 'product___images___id',
  ProductImagesOriginalSrc = 'product___images___originalSrc',
  ProductImagesLocalFileSourceInstanceName = 'product___images___localFile___sourceInstanceName',
  ProductImagesLocalFileAbsolutePath = 'product___images___localFile___absolutePath',
  ProductImagesLocalFileRelativePath = 'product___images___localFile___relativePath',
  ProductImagesLocalFileExtension = 'product___images___localFile___extension',
  ProductImagesLocalFileSize = 'product___images___localFile___size',
  ProductImagesLocalFilePrettySize = 'product___images___localFile___prettySize',
  ProductImagesLocalFileModifiedTime = 'product___images___localFile___modifiedTime',
  ProductImagesLocalFileAccessTime = 'product___images___localFile___accessTime',
  ProductImagesLocalFileChangeTime = 'product___images___localFile___changeTime',
  ProductImagesLocalFileBirthTime = 'product___images___localFile___birthTime',
  ProductImagesLocalFileRoot = 'product___images___localFile___root',
  ProductImagesLocalFileDir = 'product___images___localFile___dir',
  ProductImagesLocalFileBase = 'product___images___localFile___base',
  ProductImagesLocalFileExt = 'product___images___localFile___ext',
  ProductImagesLocalFileName = 'product___images___localFile___name',
  ProductImagesLocalFileRelativeDirectory = 'product___images___localFile___relativeDirectory',
  ProductImagesLocalFileDev = 'product___images___localFile___dev',
  ProductImagesLocalFileMode = 'product___images___localFile___mode',
  ProductImagesLocalFileNlink = 'product___images___localFile___nlink',
  ProductImagesLocalFileUid = 'product___images___localFile___uid',
  ProductImagesLocalFileGid = 'product___images___localFile___gid',
  ProductImagesLocalFileRdev = 'product___images___localFile___rdev',
  ProductImagesLocalFileIno = 'product___images___localFile___ino',
  ProductImagesLocalFileAtimeMs = 'product___images___localFile___atimeMs',
  ProductImagesLocalFileMtimeMs = 'product___images___localFile___mtimeMs',
  ProductImagesLocalFileCtimeMs = 'product___images___localFile___ctimeMs',
  ProductImagesLocalFileAtime = 'product___images___localFile___atime',
  ProductImagesLocalFileMtime = 'product___images___localFile___mtime',
  ProductImagesLocalFileCtime = 'product___images___localFile___ctime',
  ProductImagesLocalFileBirthtime = 'product___images___localFile___birthtime',
  ProductImagesLocalFileBirthtimeMs = 'product___images___localFile___birthtimeMs',
  ProductImagesLocalFileBlksize = 'product___images___localFile___blksize',
  ProductImagesLocalFileBlocks = 'product___images___localFile___blocks',
  ProductImagesLocalFileUrl = 'product___images___localFile___url',
  ProductImagesLocalFilePublicUrl = 'product___images___localFile___publicURL',
  ProductImagesLocalFileChildrenImageSharp = 'product___images___localFile___childrenImageSharp',
  ProductImagesLocalFileId = 'product___images___localFile___id',
  ProductImagesLocalFileChildren = 'product___images___localFile___children',
  ProductPriceRangeMinVariantPriceAmount = 'product___priceRange___minVariantPrice___amount',
  ProductPriceRangeMinVariantPriceCurrencyCode = 'product___priceRange___minVariantPrice___currencyCode',
  ProductPriceRangeMaxVariantPriceAmount = 'product___priceRange___maxVariantPrice___amount',
  ProductPriceRangeMaxVariantPriceCurrencyCode = 'product___priceRange___maxVariantPrice___currencyCode',
  ProductProductType = 'product___productType',
  ProductPublishedAt = 'product___publishedAt',
  ProductTags = 'product___tags',
  ProductTitle = 'product___title',
  ProductUpdatedAt = 'product___updatedAt',
  ProductVendor = 'product___vendor',
  ProductShopifyId = 'product___shopifyId',
  ProductVariants = 'product___variants',
  ProductVariantsId = 'product___variants___id',
  ProductVariantsParentId = 'product___variants___parent___id',
  ProductVariantsParentChildren = 'product___variants___parent___children',
  ProductVariantsChildren = 'product___variants___children',
  ProductVariantsChildrenId = 'product___variants___children___id',
  ProductVariantsChildrenChildren = 'product___variants___children___children',
  ProductVariantsInternalContent = 'product___variants___internal___content',
  ProductVariantsInternalContentDigest = 'product___variants___internal___contentDigest',
  ProductVariantsInternalDescription = 'product___variants___internal___description',
  ProductVariantsInternalFieldOwners = 'product___variants___internal___fieldOwners',
  ProductVariantsInternalIgnoreType = 'product___variants___internal___ignoreType',
  ProductVariantsInternalMediaType = 'product___variants___internal___mediaType',
  ProductVariantsInternalOwner = 'product___variants___internal___owner',
  ProductVariantsInternalType = 'product___variants___internal___type',
  ProductVariantsAvailableForSale = 'product___variants___availableForSale',
  ProductVariantsImageId = 'product___variants___image___id',
  ProductVariantsImageOriginalSrc = 'product___variants___image___originalSrc',
  ProductVariantsPrice = 'product___variants___price',
  ProductVariantsPriceV2Amount = 'product___variants___priceV2___amount',
  ProductVariantsPriceV2CurrencyCode = 'product___variants___priceV2___currencyCode',
  ProductVariantsRequiresShipping = 'product___variants___requiresShipping',
  ProductVariantsSelectedOptions = 'product___variants___selectedOptions',
  ProductVariantsSelectedOptionsName = 'product___variants___selectedOptions___name',
  ProductVariantsSelectedOptionsValue = 'product___variants___selectedOptions___value',
  ProductVariantsSku = 'product___variants___sku',
  ProductVariantsTitle = 'product___variants___title',
  ProductVariantsWeight = 'product___variants___weight',
  ProductVariantsWeightUnit = 'product___variants___weightUnit',
  ProductVariantsPresentmentPricesEdges = 'product___variants___presentmentPrices___edges',
  ProductVariantsShopifyId = 'product___variants___shopifyId',
  ProductVariantsPriceNumber = 'product___variants___priceNumber',
  ProductVariantsProductId = 'product___variants___product___id',
  ProductVariantsProductChildren = 'product___variants___product___children',
  ProductVariantsProductAvailableForSale = 'product___variants___product___availableForSale',
  ProductVariantsProductCreatedAt = 'product___variants___product___createdAt',
  ProductVariantsProductDescription = 'product___variants___product___description',
  ProductVariantsProductDescriptionHtml = 'product___variants___product___descriptionHtml',
  ProductVariantsProductHandle = 'product___variants___product___handle',
  ProductVariantsProductImages = 'product___variants___product___images',
  ProductVariantsProductProductType = 'product___variants___product___productType',
  ProductVariantsProductPublishedAt = 'product___variants___product___publishedAt',
  ProductVariantsProductTags = 'product___variants___product___tags',
  ProductVariantsProductTitle = 'product___variants___product___title',
  ProductVariantsProductUpdatedAt = 'product___variants___product___updatedAt',
  ProductVariantsProductVendor = 'product___variants___product___vendor',
  ProductVariantsProductShopifyId = 'product___variants___product___shopifyId',
  ProductVariantsProductVariants = 'product___variants___product___variants',
  ProductVariantsProductOptions = 'product___variants___product___options',
  ProductOptions = 'product___options',
  ProductOptionsId = 'product___options___id',
  ProductOptionsParentId = 'product___options___parent___id',
  ProductOptionsParentChildren = 'product___options___parent___children',
  ProductOptionsChildren = 'product___options___children',
  ProductOptionsChildrenId = 'product___options___children___id',
  ProductOptionsChildrenChildren = 'product___options___children___children',
  ProductOptionsInternalContent = 'product___options___internal___content',
  ProductOptionsInternalContentDigest = 'product___options___internal___contentDigest',
  ProductOptionsInternalDescription = 'product___options___internal___description',
  ProductOptionsInternalFieldOwners = 'product___options___internal___fieldOwners',
  ProductOptionsInternalIgnoreType = 'product___options___internal___ignoreType',
  ProductOptionsInternalMediaType = 'product___options___internal___mediaType',
  ProductOptionsInternalOwner = 'product___options___internal___owner',
  ProductOptionsInternalType = 'product___options___internal___type',
  ProductOptionsName = 'product___options___name',
  ProductOptionsValues = 'product___options___values',
  ProductOptionsShopifyId = 'product___options___shopifyId'
}

export type ShopifyProductVariantFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  availableForSale?: Maybe<BooleanQueryOperatorInput>;
  image?: Maybe<ShopifyProductVariantImageFilterInput>;
  price?: Maybe<StringQueryOperatorInput>;
  priceV2?: Maybe<ShopifyProductVariantPriceV2FilterInput>;
  requiresShipping?: Maybe<BooleanQueryOperatorInput>;
  selectedOptions?: Maybe<ShopifyProductVariantSelectedOptionsFilterListInput>;
  sku?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  weight?: Maybe<IntQueryOperatorInput>;
  weightUnit?: Maybe<StringQueryOperatorInput>;
  presentmentPrices?: Maybe<ShopifyProductVariantPresentmentPricesFilterInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  priceNumber?: Maybe<FloatQueryOperatorInput>;
  product?: Maybe<ShopifyProductFilterInput>;
};

export type ShopifyProductVariantFilterListInput = {
  elemMatch?: Maybe<ShopifyProductVariantFilterInput>;
};

export type ShopifyProductVariantGroupConnection = {
  __typename?: 'ShopifyProductVariantGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductVariantEdge>;
  nodes: Array<ShopifyProductVariant>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ShopifyProductVariantImage = {
  __typename?: 'ShopifyProductVariantImage';
  id?: Maybe<Scalars['String']>;
  originalSrc?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
};

export type ShopifyProductVariantImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalSrc?: Maybe<StringQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type ShopifyProductVariantPresentmentPrices = {
  __typename?: 'ShopifyProductVariantPresentmentPrices';
  edges?: Maybe<Array<Maybe<ShopifyProductVariantPresentmentPricesEdges>>>;
};

export type ShopifyProductVariantPresentmentPricesEdges = {
  __typename?: 'ShopifyProductVariantPresentmentPricesEdges';
  node?: Maybe<ShopifyProductVariantPresentmentPricesEdgesNode>;
};

export type ShopifyProductVariantPresentmentPricesEdgesFilterInput = {
  node?: Maybe<ShopifyProductVariantPresentmentPricesEdgesNodeFilterInput>;
};

export type ShopifyProductVariantPresentmentPricesEdgesFilterListInput = {
  elemMatch?: Maybe<ShopifyProductVariantPresentmentPricesEdgesFilterInput>;
};

export type ShopifyProductVariantPresentmentPricesEdgesNode = {
  __typename?: 'ShopifyProductVariantPresentmentPricesEdgesNode';
  price?: Maybe<ShopifyProductVariantPresentmentPricesEdgesNodePrice>;
};

export type ShopifyProductVariantPresentmentPricesEdgesNodeFilterInput = {
  price?: Maybe<ShopifyProductVariantPresentmentPricesEdgesNodePriceFilterInput>;
};

export type ShopifyProductVariantPresentmentPricesEdgesNodePrice = {
  __typename?: 'ShopifyProductVariantPresentmentPricesEdgesNodePrice';
  amount?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type ShopifyProductVariantPresentmentPricesEdgesNodePriceFilterInput = {
  amount?: Maybe<StringQueryOperatorInput>;
  currencyCode?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductVariantPresentmentPricesFilterInput = {
  edges?: Maybe<ShopifyProductVariantPresentmentPricesEdgesFilterListInput>;
};

export type ShopifyProductVariantPriceV2 = {
  __typename?: 'ShopifyProductVariantPriceV2';
  amount?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type ShopifyProductVariantPriceV2FilterInput = {
  amount?: Maybe<StringQueryOperatorInput>;
  currencyCode?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductVariantSelectedOptions = {
  __typename?: 'ShopifyProductVariantSelectedOptions';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ShopifyProductVariantSelectedOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductVariantSelectedOptionsFilterListInput = {
  elemMatch?: Maybe<ShopifyProductVariantSelectedOptionsFilterInput>;
};

export type ShopifyProductVariantSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyProductVariantFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyShop = Node & {
  __typename?: 'ShopifyShop';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  moneyFormat?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ShopifyShopConnection = {
  __typename?: 'ShopifyShopConnection';
  totalCount: Scalars['Int'];
  edges: Array<ShopifyShopEdge>;
  nodes: Array<ShopifyShop>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ShopifyShopGroupConnection>;
};


export type ShopifyShopConnectionDistinctArgs = {
  field: ShopifyShopFieldsEnum;
};


export type ShopifyShopConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyShopFieldsEnum;
};

export type ShopifyShopEdge = {
  __typename?: 'ShopifyShopEdge';
  next?: Maybe<ShopifyShop>;
  node: ShopifyShop;
  previous?: Maybe<ShopifyShop>;
};

export enum ShopifyShopFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MoneyFormat = 'moneyFormat',
  Name = 'name'
}

export type ShopifyShopFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  moneyFormat?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyShopGroupConnection = {
  __typename?: 'ShopifyShopGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ShopifyShopEdge>;
  nodes: Array<ShopifyShop>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ShopifyShopSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyShopFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataAuthor = 'siteMetadata___author',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  handle?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  handle?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextHandle = 'context___handle',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsDisplayName = 'pluginCreator___pluginOptions___displayName',
  PluginCreatorPluginOptionsFileName = 'pluginCreator___pluginOptions___fileName',
  PluginCreatorPluginOptionsMinify = 'pluginCreator___pluginOptions___minify',
  PluginCreatorPluginOptionsNamespace = 'pluginCreator___pluginOptions___namespace',
  PluginCreatorPluginOptionsTranspileTemplateLiterals = 'pluginCreator___pluginOptions___transpileTemplateLiterals',
  PluginCreatorPluginOptionsPure = 'pluginCreator___pluginOptions___pure',
  PluginCreatorPluginOptionsKey = 'pluginCreator___pluginOptions___key',
  PluginCreatorPluginOptionsId = 'pluginCreator___pluginOptions___id',
  PluginCreatorPluginOptionsComponent = 'pluginCreator___pluginOptions___component',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsShopName = 'pluginCreator___pluginOptions___shopName',
  PluginCreatorPluginOptionsAccessToken = 'pluginCreator___pluginOptions___accessToken',
  PluginCreatorPluginOptionsVerbose = 'pluginCreator___pluginOptions___verbose',
  PluginCreatorPluginOptionsPaginationSize = 'pluginCreator___pluginOptions___paginationSize',
  PluginCreatorPluginOptionsIncludeCollections = 'pluginCreator___pluginOptions___includeCollections',
  PluginCreatorPluginOptionsAppId = 'pluginCreator___pluginOptions___appId',
  PluginCreatorPluginOptionsApiKey = 'pluginCreator___pluginOptions___apiKey',
  PluginCreatorPluginOptionsQueries = 'pluginCreator___pluginOptions___queries',
  PluginCreatorPluginOptionsQueriesQuery = 'pluginCreator___pluginOptions___queries___query',
  PluginCreatorPluginOptionsQueriesIndexName = 'pluginCreator___pluginOptions___queries___indexName',
  PluginCreatorPluginOptionsRepositoryName = 'pluginCreator___pluginOptions___repositoryName',
  PluginCreatorPluginOptionsLang = 'pluginCreator___pluginOptions___lang',
  PluginCreatorPluginOptionsFonts = 'pluginCreator___pluginOptions___fonts',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsColor = 'pluginCreator___pluginOptions___color',
  PluginCreatorPluginOptionsShowSpinner = 'pluginCreator___pluginOptions___showSpinner',
  PluginCreatorPluginOptionsUseMozJpeg = 'pluginCreator___pluginOptions___useMozJpeg',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsCrossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsDisplayName = 'pluginOptions___displayName',
  PluginOptionsFileName = 'pluginOptions___fileName',
  PluginOptionsMinify = 'pluginOptions___minify',
  PluginOptionsNamespace = 'pluginOptions___namespace',
  PluginOptionsTranspileTemplateLiterals = 'pluginOptions___transpileTemplateLiterals',
  PluginOptionsPure = 'pluginOptions___pure',
  PluginOptionsKey = 'pluginOptions___key',
  PluginOptionsId = 'pluginOptions___id',
  PluginOptionsComponent = 'pluginOptions___component',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsShopName = 'pluginOptions___shopName',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsVerbose = 'pluginOptions___verbose',
  PluginOptionsPaginationSize = 'pluginOptions___paginationSize',
  PluginOptionsIncludeCollections = 'pluginOptions___includeCollections',
  PluginOptionsAppId = 'pluginOptions___appId',
  PluginOptionsApiKey = 'pluginOptions___apiKey',
  PluginOptionsQueries = 'pluginOptions___queries',
  PluginOptionsQueriesQuery = 'pluginOptions___queries___query',
  PluginOptionsQueriesIndexName = 'pluginOptions___queries___indexName',
  PluginOptionsRepositoryName = 'pluginOptions___repositoryName',
  PluginOptionsLang = 'pluginOptions___lang',
  PluginOptionsFonts = 'pluginOptions___fonts',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsColor = 'pluginOptions___color',
  PluginOptionsShowSpinner = 'pluginOptions___showSpinner',
  PluginOptionsUseMozJpeg = 'pluginOptions___useMozJpeg',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsCrossOrigin = 'pluginOptions___crossOrigin',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  displayName?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['Boolean']>;
  minify?: Maybe<Scalars['Boolean']>;
  namespace?: Maybe<Scalars['String']>;
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>;
  pure?: Maybe<Scalars['Boolean']>;
  key?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  shopName?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  verbose?: Maybe<Scalars['Boolean']>;
  paginationSize?: Maybe<Scalars['Int']>;
  includeCollections?: Maybe<Array<Maybe<Scalars['String']>>>;
  appId?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  queries?: Maybe<Array<Maybe<SitePluginPluginOptionsQueries>>>;
  repositoryName?: Maybe<Scalars['String']>;
  schemas?: Maybe<SitePluginPluginOptionsSchemas>;
  lang?: Maybe<Scalars['String']>;
  fonts?: Maybe<Array<Maybe<Scalars['String']>>>;
  display?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  showSpinner?: Maybe<Scalars['Boolean']>;
  useMozJpeg?: Maybe<Scalars['Boolean']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  displayName?: Maybe<BooleanQueryOperatorInput>;
  fileName?: Maybe<BooleanQueryOperatorInput>;
  minify?: Maybe<BooleanQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>;
  pure?: Maybe<BooleanQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  shopName?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  verbose?: Maybe<BooleanQueryOperatorInput>;
  paginationSize?: Maybe<IntQueryOperatorInput>;
  includeCollections?: Maybe<StringQueryOperatorInput>;
  appId?: Maybe<StringQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  queries?: Maybe<SitePluginPluginOptionsQueriesFilterListInput>;
  repositoryName?: Maybe<StringQueryOperatorInput>;
  schemas?: Maybe<SitePluginPluginOptionsSchemasFilterInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  fonts?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  color?: Maybe<StringQueryOperatorInput>;
  showSpinner?: Maybe<BooleanQueryOperatorInput>;
  useMozJpeg?: Maybe<BooleanQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsQueries = {
  __typename?: 'SitePluginPluginOptionsQueries';
  query?: Maybe<Scalars['String']>;
  indexName?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsQueriesFilterInput = {
  query?: Maybe<StringQueryOperatorInput>;
  indexName?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsQueriesFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsQueriesFilterInput>;
};

export type SitePluginPluginOptionsSchemas = {
  __typename?: 'SitePluginPluginOptionsSchemas';
  home?: Maybe<SitePluginPluginOptionsSchemasHome>;
  common?: Maybe<SitePluginPluginOptionsSchemasCommon>;
  category?: Maybe<SitePluginPluginOptionsSchemasCategory>;
  homeMinimal?: Maybe<SitePluginPluginOptionsSchemasHomeMinimal>;
  homeModern?: Maybe<SitePluginPluginOptionsSchemasHomeModern>;
};

export type SitePluginPluginOptionsSchemasCategory = {
  __typename?: 'SitePluginPluginOptionsSchemasCategory';
  Main?: Maybe<SitePluginPluginOptionsSchemasCategoryMain>;
};

export type SitePluginPluginOptionsSchemasCategoryFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasCategoryMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasCategoryMain = {
  __typename?: 'SitePluginPluginOptionsSchemasCategoryMain';
  title?: Maybe<SitePluginPluginOptionsSchemasCategoryMainTitle>;
  uid?: Maybe<SitePluginPluginOptionsSchemasCategoryMainUid>;
  parent_category?: Maybe<SitePluginPluginOptionsSchemasCategoryMainParent_Category>;
  featured?: Maybe<SitePluginPluginOptionsSchemasCategoryMainFeatured>;
  image?: Maybe<SitePluginPluginOptionsSchemasCategoryMainImage>;
  description?: Maybe<SitePluginPluginOptionsSchemasCategoryMainDescription>;
  link?: Maybe<SitePluginPluginOptionsSchemasCategoryMainLink>;
};

export type SitePluginPluginOptionsSchemasCategoryMainDescription = {
  __typename?: 'SitePluginPluginOptionsSchemasCategoryMainDescription';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCategoryMainDescriptionConfig>;
};

export type SitePluginPluginOptionsSchemasCategoryMainDescriptionConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCategoryMainDescriptionConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCategoryMainDescriptionConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCategoryMainDescriptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCategoryMainDescriptionConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCategoryMainFeatured = {
  __typename?: 'SitePluginPluginOptionsSchemasCategoryMainFeatured';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCategoryMainFeaturedConfig>;
};

export type SitePluginPluginOptionsSchemasCategoryMainFeaturedConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCategoryMainFeaturedConfig';
  default_value?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCategoryMainFeaturedConfigFilterInput = {
  default_value?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCategoryMainFeaturedFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCategoryMainFeaturedConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCategoryMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasCategoryMainTitleFilterInput>;
  uid?: Maybe<SitePluginPluginOptionsSchemasCategoryMainUidFilterInput>;
  parent_category?: Maybe<SitePluginPluginOptionsSchemasCategoryMainParent_CategoryFilterInput>;
  featured?: Maybe<SitePluginPluginOptionsSchemasCategoryMainFeaturedFilterInput>;
  image?: Maybe<SitePluginPluginOptionsSchemasCategoryMainImageFilterInput>;
  description?: Maybe<SitePluginPluginOptionsSchemasCategoryMainDescriptionFilterInput>;
  link?: Maybe<SitePluginPluginOptionsSchemasCategoryMainLinkFilterInput>;
};

export type SitePluginPluginOptionsSchemasCategoryMainImage = {
  __typename?: 'SitePluginPluginOptionsSchemasCategoryMainImage';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCategoryMainImageConfig>;
};

export type SitePluginPluginOptionsSchemasCategoryMainImageConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCategoryMainImageConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCategoryMainImageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCategoryMainImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCategoryMainImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCategoryMainLink = {
  __typename?: 'SitePluginPluginOptionsSchemasCategoryMainLink';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCategoryMainLinkConfig>;
};

export type SitePluginPluginOptionsSchemasCategoryMainLinkConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCategoryMainLinkConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCategoryMainLinkConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCategoryMainLinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCategoryMainLinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCategoryMainParent_Category = {
  __typename?: 'SitePluginPluginOptionsSchemasCategoryMainParent_category';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCategoryMainParent_CategoryConfig>;
};

export type SitePluginPluginOptionsSchemasCategoryMainParent_CategoryConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCategoryMainParent_categoryConfig';
  select?: Maybe<Scalars['String']>;
  customtypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCategoryMainParent_CategoryConfigFilterInput = {
  select?: Maybe<StringQueryOperatorInput>;
  customtypes?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCategoryMainParent_CategoryFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCategoryMainParent_CategoryConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCategoryMainTitle = {
  __typename?: 'SitePluginPluginOptionsSchemasCategoryMainTitle';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCategoryMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasCategoryMainTitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCategoryMainTitleConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCategoryMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCategoryMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCategoryMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCategoryMainUid = {
  __typename?: 'SitePluginPluginOptionsSchemasCategoryMainUid';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCategoryMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasCategoryMainUidConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCategoryMainUidConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCategoryMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCategoryMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCategoryMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommon = {
  __typename?: 'SitePluginPluginOptionsSchemasCommon';
  Main?: Maybe<SitePluginPluginOptionsSchemasCommonMain>;
};

export type SitePluginPluginOptionsSchemasCommonFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasCommonMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMain = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMain';
  header_notice_switch?: Maybe<SitePluginPluginOptionsSchemasCommonMainHeader_Notice_Switch>;
  special_notice_title?: Maybe<SitePluginPluginOptionsSchemasCommonMainSpecial_Notice_Title>;
  top_header_color?: Maybe<SitePluginPluginOptionsSchemasCommonMainTop_Header_Color>;
  logo?: Maybe<SitePluginPluginOptionsSchemasCommonMainLogo>;
  search_placeholder?: Maybe<SitePluginPluginOptionsSchemasCommonMainSearch_Placeholder>;
  shopping_cart_title?: Maybe<SitePluginPluginOptionsSchemasCommonMainShopping_Cart_Title>;
  total_amount_text?: Maybe<SitePluginPluginOptionsSchemasCommonMainTotal_Amount_Text>;
  checkout_button_text?: Maybe<SitePluginPluginOptionsSchemasCommonMainCheckout_Button_Text>;
  copyright_text?: Maybe<SitePluginPluginOptionsSchemasCommonMainCopyright_Text>;
  social_links?: Maybe<SitePluginPluginOptionsSchemasCommonMainSocial_Links>;
  ad_blocks?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_Blocks>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_Blocks = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainAd_blocks';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainAd_blocksConfig';
  fields?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFields>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFields = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainAd_blocksConfigFields';
  block_image?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBlock_Image>;
  badge_title?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBadge_Title>;
  badge_color?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBadge_Color>;
  title?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsTitle>;
  short_description?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsShort_Description>;
  add_a_button?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsAdd_A_Button>;
  button_title?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsButton_Title>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsAdd_A_Button = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainAd_blocksConfigFieldsAdd_a_button';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsAdd_A_ButtonConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsAdd_A_ButtonConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainAd_blocksConfigFieldsAdd_a_buttonConfig';
  default_value?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsAdd_A_ButtonConfigFilterInput = {
  default_value?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsAdd_A_ButtonFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsAdd_A_ButtonConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBadge_Color = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainAd_blocksConfigFieldsBadge_color';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBadge_ColorConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBadge_ColorConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainAd_blocksConfigFieldsBadge_colorConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBadge_ColorConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBadge_ColorFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBadge_ColorConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBadge_Title = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainAd_blocksConfigFieldsBadge_title';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBadge_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBadge_TitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainAd_blocksConfigFieldsBadge_titleConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBadge_TitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBadge_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBadge_TitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBlock_Image = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainAd_blocksConfigFieldsBlock_image';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBlock_ImageConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBlock_ImageConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainAd_blocksConfigFieldsBlock_imageConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBlock_ImageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBlock_ImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBlock_ImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsButton_Title = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainAd_blocksConfigFieldsButton_title';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsButton_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsButton_TitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainAd_blocksConfigFieldsButton_titleConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsButton_TitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsButton_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsButton_TitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsFilterInput = {
  block_image?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBlock_ImageFilterInput>;
  badge_title?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBadge_TitleFilterInput>;
  badge_color?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsBadge_ColorFilterInput>;
  title?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsTitleFilterInput>;
  short_description?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsShort_DescriptionFilterInput>;
  add_a_button?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsAdd_A_ButtonFilterInput>;
  button_title?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsButton_TitleFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsShort_Description = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainAd_blocksConfigFieldsShort_description';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsShort_DescriptionConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsShort_DescriptionConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainAd_blocksConfigFieldsShort_descriptionConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsShort_DescriptionConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsShort_DescriptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsShort_DescriptionConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsTitle = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainAd_blocksConfigFieldsTitle';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsTitleConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsTitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainAd_blocksConfigFieldsTitleConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFilterInput = {
  fields?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFieldsFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainAd_BlocksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainCheckout_Button_Text = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainCheckout_button_text';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainCheckout_Button_TextConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainCheckout_Button_TextConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainCheckout_button_textConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCommonMainCheckout_Button_TextConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainCheckout_Button_TextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainCheckout_Button_TextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainCopyright_Text = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainCopyright_text';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainCopyright_TextConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainCopyright_TextConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainCopyright_textConfig';
  multi?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCommonMainCopyright_TextConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainCopyright_TextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainCopyright_TextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainFilterInput = {
  header_notice_switch?: Maybe<SitePluginPluginOptionsSchemasCommonMainHeader_Notice_SwitchFilterInput>;
  special_notice_title?: Maybe<SitePluginPluginOptionsSchemasCommonMainSpecial_Notice_TitleFilterInput>;
  top_header_color?: Maybe<SitePluginPluginOptionsSchemasCommonMainTop_Header_ColorFilterInput>;
  logo?: Maybe<SitePluginPluginOptionsSchemasCommonMainLogoFilterInput>;
  search_placeholder?: Maybe<SitePluginPluginOptionsSchemasCommonMainSearch_PlaceholderFilterInput>;
  shopping_cart_title?: Maybe<SitePluginPluginOptionsSchemasCommonMainShopping_Cart_TitleFilterInput>;
  total_amount_text?: Maybe<SitePluginPluginOptionsSchemasCommonMainTotal_Amount_TextFilterInput>;
  checkout_button_text?: Maybe<SitePluginPluginOptionsSchemasCommonMainCheckout_Button_TextFilterInput>;
  copyright_text?: Maybe<SitePluginPluginOptionsSchemasCommonMainCopyright_TextFilterInput>;
  social_links?: Maybe<SitePluginPluginOptionsSchemasCommonMainSocial_LinksFilterInput>;
  ad_blocks?: Maybe<SitePluginPluginOptionsSchemasCommonMainAd_BlocksFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainHeader_Notice_Switch = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainHeader_notice_switch';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainHeader_Notice_SwitchConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainHeader_Notice_SwitchConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainHeader_notice_switchConfig';
  default_value?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCommonMainHeader_Notice_SwitchConfigFilterInput = {
  default_value?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainHeader_Notice_SwitchFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainHeader_Notice_SwitchConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainLogo = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainLogo';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainLogoConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainLogoConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainLogoConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCommonMainLogoConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainLogoFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainLogoConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainSearch_Placeholder = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainSearch_placeholder';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainSearch_PlaceholderConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainSearch_PlaceholderConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainSearch_placeholderConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCommonMainSearch_PlaceholderConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainSearch_PlaceholderFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainSearch_PlaceholderConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainShopping_Cart_Title = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainShopping_cart_title';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainShopping_Cart_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainShopping_Cart_TitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainShopping_cart_titleConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCommonMainShopping_Cart_TitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainShopping_Cart_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainShopping_Cart_TitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainSocial_Links = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainSocial_links';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainSocial_linksConfig';
  fields?: Maybe<SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFields>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFields = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainSocial_linksConfigFields';
  social_type?: Maybe<SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFieldsSocial_Type>;
  social_link?: Maybe<SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFieldsSocial_Link>;
};

export type SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFieldsFilterInput = {
  social_type?: Maybe<SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFieldsSocial_TypeFilterInput>;
  social_link?: Maybe<SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFieldsSocial_LinkFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFieldsSocial_Link = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainSocial_linksConfigFieldsSocial_link';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFieldsSocial_LinkConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFieldsSocial_LinkConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainSocial_linksConfigFieldsSocial_linkConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFieldsSocial_LinkConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFieldsSocial_LinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFieldsSocial_LinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFieldsSocial_Type = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainSocial_linksConfigFieldsSocial_type';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFieldsSocial_TypeConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFieldsSocial_TypeConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainSocial_linksConfigFieldsSocial_typeConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFieldsSocial_TypeConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFieldsSocial_TypeFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFieldsSocial_TypeConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFilterInput = {
  fields?: Maybe<SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFieldsFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainSocial_LinksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainSocial_LinksConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainSpecial_Notice_Title = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainSpecial_notice_title';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainSpecial_Notice_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainSpecial_Notice_TitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainSpecial_notice_titleConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCommonMainSpecial_Notice_TitleConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainSpecial_Notice_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainSpecial_Notice_TitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainTop_Header_Color = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainTop_header_color';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainTop_Header_ColorConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainTop_Header_ColorConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainTop_header_colorConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCommonMainTop_Header_ColorConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainTop_Header_ColorFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainTop_Header_ColorConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainTotal_Amount_Text = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainTotal_amount_text';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainTotal_Amount_TextConfig>;
};

export type SitePluginPluginOptionsSchemasCommonMainTotal_Amount_TextConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasCommonMainTotal_amount_textConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCommonMainTotal_Amount_TextConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCommonMainTotal_Amount_TextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCommonMainTotal_Amount_TextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasFilterInput = {
  home?: Maybe<SitePluginPluginOptionsSchemasHomeFilterInput>;
  common?: Maybe<SitePluginPluginOptionsSchemasCommonFilterInput>;
  category?: Maybe<SitePluginPluginOptionsSchemasCategoryFilterInput>;
  homeMinimal?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalFilterInput>;
  homeModern?: Maybe<SitePluginPluginOptionsSchemasHomeModernFilterInput>;
};

export type SitePluginPluginOptionsSchemasHome = {
  __typename?: 'SitePluginPluginOptionsSchemasHome';
  Main?: Maybe<SitePluginPluginOptionsSchemasHomeMain>;
};

export type SitePluginPluginOptionsSchemasHomeFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasHomeMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMain = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMain';
  banner?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner>;
  banner_slider?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_Slider>;
  banner_title?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_Title>;
  banner_subtitle?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_Subtitle>;
  banner_button_text?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_Button_Text>;
  trending_block_title?: Maybe<SitePluginPluginOptionsSchemasHomeMainTrending_Block_Title>;
  view_more_text?: Maybe<SitePluginPluginOptionsSchemasHomeMainView_More_Text>;
  how_it_works_title?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_Title>;
  how_it_works_subtitle?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_Subtitle>;
  how_it_works_group?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_Group>;
  call_us_banner?: Maybe<SitePluginPluginOptionsSchemasHomeMainCall_Us_Banner>;
  call_us_title?: Maybe<SitePluginPluginOptionsSchemasHomeMainCall_Us_Title>;
  call_us_button_text?: Maybe<SitePluginPluginOptionsSchemasHomeMainCall_Us_Button_Text>;
  category_section_title?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_Section_Title>;
  category_section_short_intro?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_Section_Short_Intro>;
  category_block?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_Block>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBanner';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBannerConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainBannerConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBannerConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainBannerConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBannerFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBannerConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_Button_Text = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBanner_button_text';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_Button_TextConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_Button_TextConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBanner_button_textConfig';
  multi?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_Button_TextConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_Button_TextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_Button_TextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_Slider = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBanner_slider';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBanner_sliderConfig';
  fields?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFields>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFields = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBanner_sliderConfigFields';
  image?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsImage>;
  banner_title1?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_Title1>;
  banner_subtitle1?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_Subtitle1>;
  banner_description?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_Description>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_Description = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBanner_sliderConfigFieldsBanner_description';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_DescriptionConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_DescriptionConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBanner_sliderConfigFieldsBanner_descriptionConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_DescriptionConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_DescriptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_DescriptionConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_Subtitle1 = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBanner_sliderConfigFieldsBanner_subtitle1';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_Subtitle1Config>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_Subtitle1Config = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBanner_sliderConfigFieldsBanner_subtitle1Config';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_Subtitle1ConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_Subtitle1FilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_Subtitle1ConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_Title1 = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBanner_sliderConfigFieldsBanner_title1';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_Title1Config>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_Title1Config = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBanner_sliderConfigFieldsBanner_title1Config';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_Title1ConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_Title1FilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_Title1ConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsFilterInput = {
  image?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsImageFilterInput>;
  banner_title1?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_Title1FilterInput>;
  banner_subtitle1?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_Subtitle1FilterInput>;
  banner_description?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsBanner_DescriptionFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsImage = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBanner_sliderConfigFieldsImage';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsImageConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsImageConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBanner_sliderConfigFieldsImageConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsImageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFilterInput = {
  fields?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFieldsFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SliderFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_Subtitle = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBanner_subtitle';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SubtitleConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SubtitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBanner_subtitleConfig';
  multi?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SubtitleConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_SubtitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SubtitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_Title = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBanner_title';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_TitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainBanner_titleConfig';
  multi?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_TitleConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBanner_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_TitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainCall_Us_Banner = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainCall_us_banner';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainCall_Us_BannerConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainCall_Us_BannerConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainCall_us_bannerConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainCall_Us_BannerConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainCall_Us_BannerFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainCall_Us_BannerConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainCall_Us_Button_Text = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainCall_us_button_text';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainCall_Us_Button_TextConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainCall_Us_Button_TextConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainCall_us_button_textConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainCall_Us_Button_TextConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainCall_Us_Button_TextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainCall_Us_Button_TextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainCall_Us_Title = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainCall_us_title';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainCall_Us_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainCall_Us_TitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainCall_us_titleConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainCall_Us_TitleConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainCall_Us_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainCall_Us_TitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_Block = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainCategory_block';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainCategory_blockConfig';
  fields?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFields>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFields = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainCategory_blockConfigFields';
  image?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsImage>;
  category_title?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsCategory_Title>;
  category_slug?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsCategory_Slug>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsCategory_Slug = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainCategory_blockConfigFieldsCategory_slug';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsCategory_SlugConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsCategory_SlugConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainCategory_blockConfigFieldsCategory_slugConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsCategory_SlugConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsCategory_SlugFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsCategory_SlugConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsCategory_Title = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainCategory_blockConfigFieldsCategory_title';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsCategory_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsCategory_TitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainCategory_blockConfigFieldsCategory_titleConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsCategory_TitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsCategory_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsCategory_TitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsFilterInput = {
  image?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsImageFilterInput>;
  category_title?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsCategory_TitleFilterInput>;
  category_slug?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsCategory_SlugFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsImage = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainCategory_blockConfigFieldsImage';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsImageConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsImageConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainCategory_blockConfigFieldsImageConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsImageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFilterInput = {
  fields?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFieldsFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_BlockFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_BlockConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_Section_Short_Intro = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainCategory_section_short_intro';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_Section_Short_IntroConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_Section_Short_IntroConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainCategory_section_short_introConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_Section_Short_IntroConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_Section_Short_IntroFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_Section_Short_IntroConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_Section_Title = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainCategory_section_title';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_Section_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_Section_TitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainCategory_section_titleConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_Section_TitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainCategory_Section_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_Section_TitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainFilterInput = {
  banner?: Maybe<SitePluginPluginOptionsSchemasHomeMainBannerFilterInput>;
  banner_slider?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SliderFilterInput>;
  banner_title?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_TitleFilterInput>;
  banner_subtitle?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_SubtitleFilterInput>;
  banner_button_text?: Maybe<SitePluginPluginOptionsSchemasHomeMainBanner_Button_TextFilterInput>;
  trending_block_title?: Maybe<SitePluginPluginOptionsSchemasHomeMainTrending_Block_TitleFilterInput>;
  view_more_text?: Maybe<SitePluginPluginOptionsSchemasHomeMainView_More_TextFilterInput>;
  how_it_works_title?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_TitleFilterInput>;
  how_it_works_subtitle?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_SubtitleFilterInput>;
  how_it_works_group?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupFilterInput>;
  call_us_banner?: Maybe<SitePluginPluginOptionsSchemasHomeMainCall_Us_BannerFilterInput>;
  call_us_title?: Maybe<SitePluginPluginOptionsSchemasHomeMainCall_Us_TitleFilterInput>;
  call_us_button_text?: Maybe<SitePluginPluginOptionsSchemasHomeMainCall_Us_Button_TextFilterInput>;
  category_section_title?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_Section_TitleFilterInput>;
  category_section_short_intro?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_Section_Short_IntroFilterInput>;
  category_block?: Maybe<SitePluginPluginOptionsSchemasHomeMainCategory_BlockFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_Group = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainHow_it_works_group';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainHow_it_works_groupConfig';
  fields?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFields>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFields = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainHow_it_works_groupConfigFields';
  image?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsImage>;
  title?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsTitle>;
  description?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsDescription>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsDescription = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainHow_it_works_groupConfigFieldsDescription';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsDescriptionConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsDescriptionConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainHow_it_works_groupConfigFieldsDescriptionConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsDescriptionConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsDescriptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsDescriptionConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsFilterInput = {
  image?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsImageFilterInput>;
  title?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsTitleFilterInput>;
  description?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsDescriptionFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsImage = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainHow_it_works_groupConfigFieldsImage';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsImageConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsImageConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainHow_it_works_groupConfigFieldsImageConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsImageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsTitle = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainHow_it_works_groupConfigFieldsTitle';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsTitleConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsTitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainHow_it_works_groupConfigFieldsTitleConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsTitleConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFilterInput = {
  fields?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFieldsFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_GroupConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_Subtitle = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainHow_it_works_subtitle';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_SubtitleConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_SubtitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainHow_it_works_subtitleConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_SubtitleConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_SubtitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_SubtitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_Title = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainHow_it_works_title';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_TitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainHow_it_works_titleConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_TitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainHow_It_Works_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainHow_It_Works_TitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainTrending_Block_Title = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainTrending_block_title';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainTrending_Block_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainTrending_Block_TitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainTrending_block_titleConfig';
  multi?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainTrending_Block_TitleConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainTrending_Block_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainTrending_Block_TitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainView_More_Text = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainView_more_text';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainView_More_TextConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainView_More_TextConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMainView_more_textConfig';
  multi?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainView_More_TextConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainView_More_TextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainView_More_TextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimal = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimal';
  Main?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMain>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMain = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMain';
  banner_image?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainBanner_Image>;
  banner_title?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainBanner_Title>;
  banner_subtitle?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainBanner_Subtitle>;
  banner_button_text?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainBanner_Button_Text>;
  call_us_banner?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_Banner>;
  call_us_banner_content?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_Banner_Content>;
  call_us_button_text?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_Button_Text>;
  how_it_works?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_Works>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainBanner_Button_Text = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainBanner_button_text';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainBanner_Button_TextConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainBanner_Button_TextConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainBanner_button_textConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainBanner_Button_TextConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainBanner_Button_TextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainBanner_Button_TextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainBanner_Image = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainBanner_image';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainBanner_ImageConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainBanner_ImageConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainBanner_imageConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainBanner_ImageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainBanner_ImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainBanner_ImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainBanner_Subtitle = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainBanner_subtitle';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainBanner_SubtitleConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainBanner_SubtitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainBanner_subtitleConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainBanner_SubtitleConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainBanner_SubtitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainBanner_SubtitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainBanner_Title = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainBanner_title';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainBanner_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainBanner_TitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainBanner_titleConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainBanner_TitleConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainBanner_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainBanner_TitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_Banner = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainCall_us_banner';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_BannerConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_BannerConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainCall_us_bannerConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_BannerConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_BannerFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_BannerConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_Banner_Content = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainCall_us_banner_content';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_Banner_ContentConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_Banner_ContentConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainCall_us_banner_contentConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_Banner_ContentConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_Banner_ContentFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_Banner_ContentConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_Button_Text = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainCall_us_button_text';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_Button_TextConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_Button_TextConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainCall_us_button_textConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_Button_TextConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_Button_TextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_Button_TextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainFilterInput = {
  banner_image?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainBanner_ImageFilterInput>;
  banner_title?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainBanner_TitleFilterInput>;
  banner_subtitle?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainBanner_SubtitleFilterInput>;
  banner_button_text?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainBanner_Button_TextFilterInput>;
  call_us_banner?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_BannerFilterInput>;
  call_us_banner_content?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_Banner_ContentFilterInput>;
  call_us_button_text?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainCall_Us_Button_TextFilterInput>;
  how_it_works?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_Works = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainHow_it_works';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainHow_it_worksConfig';
  fields?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFields>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFields = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainHow_it_worksConfigFields';
  thumbnail?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsThumbnail>;
  title?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsTitle>;
  short_description?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsShort_Description>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsFilterInput = {
  thumbnail?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsThumbnailFilterInput>;
  title?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsTitleFilterInput>;
  short_description?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsShort_DescriptionFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsShort_Description = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainHow_it_worksConfigFieldsShort_description';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsShort_DescriptionConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsShort_DescriptionConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainHow_it_worksConfigFieldsShort_descriptionConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsShort_DescriptionConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsShort_DescriptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsShort_DescriptionConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsThumbnail = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainHow_it_worksConfigFieldsThumbnail';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsThumbnailConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsThumbnailConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainHow_it_worksConfigFieldsThumbnailConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsThumbnailConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsThumbnailFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsThumbnailConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsTitle = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainHow_it_worksConfigFieldsTitle';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsTitleConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsTitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeMinimalMainHow_it_worksConfigFieldsTitleConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFilterInput = {
  fields?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFieldsFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMinimalMainHow_It_WorksConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeModern = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeModern';
  Main?: Maybe<SitePluginPluginOptionsSchemasHomeModernMain>;
};

export type SitePluginPluginOptionsSchemasHomeModernFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasHomeModernMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeModernMain = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeModernMain';
  banner_image?: Maybe<SitePluginPluginOptionsSchemasHomeModernMainBanner_Image>;
  banner_title?: Maybe<SitePluginPluginOptionsSchemasHomeModernMainBanner_Title>;
  banner_subtitle?: Maybe<SitePluginPluginOptionsSchemasHomeModernMainBanner_Subtitle>;
};

export type SitePluginPluginOptionsSchemasHomeModernMainBanner_Image = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeModernMainBanner_image';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeModernMainBanner_ImageConfig>;
};

export type SitePluginPluginOptionsSchemasHomeModernMainBanner_ImageConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeModernMainBanner_imageConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeModernMainBanner_ImageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeModernMainBanner_ImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeModernMainBanner_ImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeModernMainBanner_Subtitle = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeModernMainBanner_subtitle';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeModernMainBanner_SubtitleConfig>;
};

export type SitePluginPluginOptionsSchemasHomeModernMainBanner_SubtitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeModernMainBanner_subtitleConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeModernMainBanner_SubtitleConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeModernMainBanner_SubtitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeModernMainBanner_SubtitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeModernMainBanner_Title = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeModernMainBanner_title';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeModernMainBanner_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasHomeModernMainBanner_TitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomeModernMainBanner_titleConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeModernMainBanner_TitleConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeModernMainBanner_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeModernMainBanner_TitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeModernMainFilterInput = {
  banner_image?: Maybe<SitePluginPluginOptionsSchemasHomeModernMainBanner_ImageFilterInput>;
  banner_title?: Maybe<SitePluginPluginOptionsSchemasHomeModernMainBanner_TitleFilterInput>;
  banner_subtitle?: Maybe<SitePluginPluginOptionsSchemasHomeModernMainBanner_SubtitleFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type ThemeUiConfig = Node & {
  __typename?: 'ThemeUiConfig';
  preset?: Maybe<Scalars['JSON']>;
  prismPreset?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ThemeUiConfigConnection = {
  __typename?: 'ThemeUiConfigConnection';
  totalCount: Scalars['Int'];
  edges: Array<ThemeUiConfigEdge>;
  nodes: Array<ThemeUiConfig>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ThemeUiConfigGroupConnection>;
};


export type ThemeUiConfigConnectionDistinctArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ThemeUiConfigFieldsEnum;
};

export type ThemeUiConfigEdge = {
  __typename?: 'ThemeUiConfigEdge';
  next?: Maybe<ThemeUiConfig>;
  node: ThemeUiConfig;
  previous?: Maybe<ThemeUiConfig>;
};

export enum ThemeUiConfigFieldsEnum {
  Preset = 'preset',
  PrismPreset = 'prismPreset',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ThemeUiConfigFilterInput = {
  preset?: Maybe<JsonQueryOperatorInput>;
  prismPreset?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ThemeUiConfigGroupConnection = {
  __typename?: 'ThemeUiConfigGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ThemeUiConfigEdge>;
  nodes: Array<ThemeUiConfig>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ThemeUiConfigSortInput = {
  fields?: Maybe<Array<Maybe<ThemeUiConfigFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};
